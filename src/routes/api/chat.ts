import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createGroq } from "@ai-sdk/groq";
import { createClient } from "@supabase/supabase-js";

const COMPANY_SYSTEM_PROMPT = `You are an intelligent ERP assistant for Z IT Solutions. 
You help users navigate the ERP system, answer questions about business data, 
and provide actionable insights across HR, Finance, CRM, Inventory, Sales, and Projects.
Be concise, accurate, and professional.`;

type Body = { messages?: UIMessage[]; threadId?: string };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages, threadId } = (await request.json()) as Body;
        if (!Array.isArray(messages) || !threadId) {
          return new Response("messages and threadId required", { status: 400 });
        }

        const groqKey = process.env.GROQ_API_KEY;
        if (!groqKey) return new Response("Missing GROQ_API_KEY", { status: 500 });

        const authHeader = request.headers.get("authorization") ?? "";
        const token = authHeader.replace(/^Bearer\s+/i, "");
        if (!token) return new Response("Unauthorized", { status: 401 });

        const supabase = createClient(
          process.env.SUPABASE_URL!,
          process.env.SUPABASE_PUBLISHABLE_KEY!,
          {
            global: { headers: { Authorization: `Bearer ${token}` } },
            auth: { persistSession: false, autoRefreshToken: false },
          },
        );

        const { data: userRes, error: userErr } = await supabase.auth.getUser();
        if (userErr || !userRes.user) return new Response("Unauthorized", { status: 401 });
        const userId = userRes.user.id;

        // Verify thread ownership
        const { data: thread } = await supabase
          .from("chat_threads")
          .select("id, title")
          .eq("id", threadId)
          .maybeSingle();
        if (!thread) return new Response("Thread not found", { status: 404 });

        // Persist the latest user message
        const lastUser = [...messages].reverse().find((m) => m.role === "user");
        if (lastUser) {
          await supabase.from("chat_messages").insert({
            thread_id: threadId,
            user_id: userId,
            role: "user",
            parts: lastUser.parts as unknown as object,
          });

          // Auto-title from first user message
          if (thread.title === "New chat") {
            const firstText =
              lastUser.parts
                .map((p) => (p.type === "text" ? p.text : ""))
                .join(" ")
                .trim()
                .slice(0, 60) || "New chat";
            await supabase
              .from("chat_threads")
              .update({ title: firstText })
              .eq("id", threadId);
          } else {
            await supabase
              .from("chat_threads")
              .update({ updated_at: new Date().toISOString() })
              .eq("id", threadId);
          }
        }

        const groq = createGroq({ apiKey: groqKey });
        const model = groq("llama-3.3-70b-versatile");

        const result = streamText({
          model,
          system: COMPANY_SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages),
        });

        return result.toUIMessageStreamResponse({
          originalMessages: messages,
          onFinish: async ({ messages: finalMessages }) => {
            const lastAssistant = [...finalMessages]
              .reverse()
              .find((m) => m.role === "assistant");
            if (!lastAssistant) return;
            await supabase.from("chat_messages").insert({
              thread_id: threadId,
              user_id: userId,
              role: "assistant",
              parts: lastAssistant.parts as unknown as object,
            });
          },
        });
      },
    },
  },
});