import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { Card } from "@/components/ui/card";
import { tasks } from "@/lib/mock-data";
import { StatusBadge } from "@/components/data-table";

export const Route = createFileRoute("/projects/kanban")({
  head: () => ({ meta: [{ title: "Kanban · Z ERP" }, { name: "description", content: "Visual task board." }] }),
  component: Page,
});

const cols = ["Todo", "In Progress", "Review", "Done"];

function Page() {
  return (
    <ModulePage title="Kanban Board" subtitle="Drag tasks between columns." breadcrumbs={["Projects","Kanban"]}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {cols.map(col => {
          const colTasks = tasks.filter(t => t.status === col);
          return (
            <div key={col} className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <div className="font-semibold text-sm">{col}</div>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{colTasks.length}</span>
              </div>
              {colTasks.map(t => (
                <Card key={t.id} className="p-3 gap-2 hover:shadow-md cursor-pointer">
                  <div className="font-medium text-sm">{t.title}</div>
                  <div className="text-xs text-muted-foreground">{t.project} · Due {t.due}</div>
                  <div className="flex items-center justify-between mt-1">
                    <StatusBadge status={t.priority} />
                    <div className="size-6 rounded-full bg-gradient-to-br from-primary to-info text-primary-foreground grid place-items-center text-[10px] font-semibold">{t.assignee.split(" ").map(s=>s[0]).join("").slice(0,2)}</div>
                  </div>
                </Card>
              ))}
            </div>
          );
        })}
      </div>
    </ModulePage>
  );
}
