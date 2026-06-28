import { useEffect, useMemo, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useServerFn } from "@tanstack/react-start";
import { MessageCircle, X, Plus, Send, Trash2, Loader2, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { supabase } from "@/integrations/supabase/client";
import {
  listThreads,
  createThread,
  deleteThread,
  loadMessages,
} from "@/lib/chat-threads.functions";
import { cn } from "@/lib/utils";

type ThreadRow = { id: string; title: string; updated_at: string };

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [threads, setThreads] = useState<ThreadRow[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [initialMessages, setInitialMessages] = useState<UIMessage[]>([]);
  const [loadingThread, setLoadingThread] = useState(false);
  const [showList, setShowList] = useState(false);

  const listFn = useServerFn(listThreads);
  const createFn = useServerFn(createThread);
  const deleteFn = useServerFn(deleteThread);
  const loadFn = useServerFn(loadMessages);

  const refreshThreads = async () => {
    const rows = (await listFn()) as ThreadRow[];
    setThreads(rows);
    return rows;
  };

  useEffect(() => {
    if (!open) return;
    (async () => {
      const rows = await refreshThreads();
      if (!activeId) {
        if (rows.length) {
          await selectThread(rows[0].id);
        } else {
          const t = (await createFn({ data: {} })) as ThreadRow;
          setThreads([t]);
          setActiveId(t.id);
          setInitialMessages([]);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const selectThread = async (id: string) => {
    setLoadingThread(true);
    setActiveId(id);
    try {
      const msgs = await loadFn({ data: { threadId: id } });
      setInitialMessages(msgs as unknown as UIMessage[]);
    } finally {
      setLoadingThread(false);
      setShowList(false);
    }
  };

  const newThread = async () => {
    const t = (await createFn({ data: {} })) as ThreadRow;
    setThreads((p) => [t, ...p]);
    setActiveId(t.id);
    setInitialMessages([]);
    setShowList(false);
  };

  const removeThread = async (id: string) => {
    await deleteFn({ data: { id } });
    const rows = await refreshThreads();
    if (activeId === id) {
      if (rows.length) await selectThread(rows[0].id);
      else {
        const t = (await createFn({ data: {} })) as ThreadRow;
        setThreads([t]);
        setActiveId(t.id);
        setInitialMessages([]);
      }
    }
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-50 size-14 rounded-full bg-primary text-primary-foreground shadow-xl grid place-items-center hover:scale-105 transition-transform"
          aria-label="Open assistant"
        >
          <MessageCircle className="size-6" />
        </button>
      )}

      {open && (
        <div className="fixed bottom-5 right-5 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-2.5rem)] rounded-xl bg-card border border-border shadow-2xl flex flex-col overflow-hidden">
          <div className="h-12 px-3 flex items-center gap-2 border-b border-border bg-muted/30 shrink-0">
            <div className="size-7 rounded-md bg-primary text-primary-foreground grid place-items-center">
              <Sparkles className="size-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold leading-none">Z ERP Assistant</div>
              <button
                onClick={() => setShowList((s) => !s)}
                className="text-[11px] text-muted-foreground hover:text-foreground truncate block max-w-full"
              >
                {threads.find((t) => t.id === activeId)?.title ?? "New chat"} ▾
              </button>
            </div>
            <button
              onClick={newThread}
              className="size-8 grid place-items-center rounded-md hover:bg-accent text-muted-foreground"
              title="New chat"
            >
              <Plus className="size-4" />
            </button>
            <button
              onClick={() => setOpen(false)}
              className="size-8 grid place-items-center rounded-md hover:bg-accent text-muted-foreground"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>
          </div>

          {showList && (
            <div className="border-b border-border bg-muted/20 max-h-56 overflow-y-auto">
              {threads.length === 0 && (
                <div className="text-xs text-muted-foreground p-3">No chats yet.</div>
              )}
              {threads.map((t) => (
                <div
                  key={t.id}
                  className={cn(
                    "group flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent cursor-pointer",
                    t.id === activeId && "bg-accent/60",
                  )}
                  onClick={() => selectThread(t.id)}
                >
                  <span className="flex-1 truncate">{t.title}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeThread(t.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive"
                    title="Delete"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeId && !loadingThread ? (
            <ChatPane
              key={activeId}
              threadId={activeId}
              initialMessages={initialMessages}
              onActivity={refreshThreads}
            />
          ) : (
            <div className="flex-1 grid place-items-center">
              <Loader2 className="size-5 animate-spin text-muted-foreground" />
            </div>
          )}
        </div>
      )}
    </>
  );
}

function ChatPane({
  threadId,
  initialMessages,
  onActivity,
}: {
  threadId: string;
  initialMessages: UIMessage[];
  onActivity: () => void;
}) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        body: { threadId },
        fetch: async (url, init) => {
          const { data } = await supabase.auth.getSession();
          const token = data.session?.access_token;
          const headers = new Headers(init?.headers);
          if (token) headers.set("Authorization", `Bearer ${token}`);
          return fetch(url, { ...init, headers });
        },
      }),
    [threadId],
  );

  const { messages, sendMessage, status, error } = useChat({
    id: threadId,
    messages: initialMessages,
    transport,
  });

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [threadId]);

  const isLoading = status === "submitted" || status === "streaming";

  const submit = async () => {
    const text = input.trim();
    if (!text || isLoading) return;
    setInput("");
    await sendMessage({ text });
    onActivity();
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  return (
    <>
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.length === 0 && (
          <div className="text-sm text-muted-foreground text-center py-8 space-y-2">
            <p>Ask me anything about Z ERP.</p>
            <div className="flex flex-col gap-1.5 text-xs">
              {[
                "Where do I find invoices?",
                "Summarize the modules available.",
                "Draft an email for an overdue invoice.",
              ].map((s) => (
                <button
                  key={s}
                  onClick={() => setInput(s)}
                  className="px-3 py-1.5 rounded-md bg-muted hover:bg-accent text-foreground/80 mx-auto"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((m) => {
          const text = m.parts
            .map((p) => (p.type === "text" ? p.text : ""))
            .join("");
          if (m.role === "user") {
            return (
              <div key={m.id} className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-primary text-primary-foreground px-3 py-2 text-sm whitespace-pre-wrap">
                  {text}
                </div>
              </div>
            );
          }
          return (
            <div key={m.id} className="text-sm leading-relaxed">
              <div className="prose prose-sm dark:prose-invert max-w-none [&_p]:my-1 [&_ul]:my-1 [&_ol]:my-1 [&_code]:text-xs">
                <ReactMarkdown>{text}</ReactMarkdown>
              </div>
            </div>
          );
        })}
        {status === "submitted" && (
          <div className="text-xs text-muted-foreground italic">Thinking…</div>
        )}
        {error && (
          <div className="text-xs text-destructive">
            {error.message || "Something went wrong."}
          </div>
        )}
      </div>

      <div className="border-t border-border p-2 shrink-0">
        <div className="flex items-end gap-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            }}
            placeholder="Ask the assistant…"
            rows={1}
            className="flex-1 resize-none rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring max-h-32"
          />
          <button
            onClick={submit}
            disabled={!input.trim() || isLoading}
            className="size-9 grid place-items-center rounded-md bg-primary text-primary-foreground disabled:opacity-50 hover:bg-primary/90"
          >
            {isLoading ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
          </button>
        </div>
      </div>
    </>
  );
}
