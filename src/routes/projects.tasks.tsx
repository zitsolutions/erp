import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable, StatusBadge } from "@/components/data-table";
import { tasks } from "@/lib/mock-data";

export const Route = createFileRoute("/projects/tasks")({
  head: () => ({ meta: [{ title: "Tasks · Z ERP" }, { name: "description", content: "All tasks across projects." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Tasks" subtitle="All tasks across projects." breadcrumbs={["Projects","Tasks"]}>
      <DataTable rows={tasks} columns={[
      { key: "id", header: "ID", render: r => <span className="font-mono text-xs">{r.id}</span> },
      { key: "title", header: "Task", render: r => <span className="font-medium">{r.title}</span> },
      { key: "project", header: "Project" },
      { key: "assignee", header: "Assignee" },
      { key: "priority", header: "Priority", render: r => <StatusBadge status={r.priority} /> },
      { key: "status", header: "Status", render: r => <StatusBadge status={r.status} /> },
      { key: "due", header: "Due" },
    ]} />
    </ModulePage>
  );
}
