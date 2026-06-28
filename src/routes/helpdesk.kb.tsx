import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { Card } from "@/components/ui/card";
import { knowledgeArticles } from "@/lib/mock-data";
import { BookOpen } from "lucide-react";

export const Route = createFileRoute("/helpdesk/kb")({
  head: () => ({ meta: [{ title: "Knowledge Base · Z ERP" }, { name: "description", content: "Self-service articles." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Knowledge Base" subtitle="Self-service articles." breadcrumbs={["Helpdesk","Knowledge Base"]}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{knowledgeArticles.map(a => (
      <Card key={a.id} className="p-5 hover:shadow-md transition-shadow cursor-pointer">
        <div className="size-10 rounded-lg bg-info/10 text-info grid place-items-center mb-3"><BookOpen className="size-5" /></div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{a.category}</div>
        <div className="font-semibold mt-1">{a.title}</div>
        <div className="text-xs text-muted-foreground mt-2">{a.views.toLocaleString()} views</div>
      </Card>
    ))}</div>
    </ModulePage>
  );
}
