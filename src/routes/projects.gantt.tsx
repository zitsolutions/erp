import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/mock-data";

export const Route = createFileRoute("/projects/gantt")({
  head: () => ({ meta: [{ title: "Gantt Timeline · Z ERP" }, { name: "description", content: "Project timeline view." }] }),
  component: Page,
});

const months = ["Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function Page() {
  return (
    <ModulePage title="Gantt Timeline" subtitle="Project timelines across months." breadcrumbs={["Projects","Gantt"]}>
      <Card className="p-5">
        <div className="grid grid-cols-[200px_1fr] gap-2 mb-2 text-xs text-muted-foreground font-medium">
          <div>Project</div>
          <div className="grid grid-cols-7 gap-0">{months.map(m => <div key={m} className="border-l pl-2">{m}</div>)}</div>
        </div>
        {projects.map((p, i) => {
          const start = i * 0.5;
          const span = 2 + (i % 4);
          return (
            <div key={p.id} className="grid grid-cols-[200px_1fr] gap-2 py-2.5 items-center border-t">
              <div>
                <div className="font-medium text-sm truncate">{p.name}</div>
                <div className="text-xs text-muted-foreground">{p.client}</div>
              </div>
              <div className="relative h-7 grid grid-cols-7">
                {months.map((m, j) => <div key={j} className="border-l h-full" />)}
                <div className="absolute top-1 h-5 rounded-md bg-gradient-to-r from-primary to-info" style={{ left: `${(start/7)*100}%`, width: `${(span/7)*100}%` }}>
                  <div className="h-full rounded-md bg-primary/70" style={{ width: `${p.progress}%` }} />
                </div>
              </div>
            </div>
          );
        })}
      </Card>
    </ModulePage>
  );
}
