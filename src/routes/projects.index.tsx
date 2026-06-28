import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable, StatusBadge } from "@/components/data-table";
import { projects } from "@/lib/mock-data";

export const Route = createFileRoute("/projects/")({
  head: () => ({ meta: [{ title: "Projects · Z ERP" }, { name: "description", content: "All active projects." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Projects" subtitle="All projects across clients and teams." breadcrumbs={["Projects","All"]}>
      <DataTable rows={projects} columns={[
        { key: "id", header: "ID", render: r => <span className="font-mono text-xs">{r.id}</span> },
        { key: "name", header: "Project", render: r => <span className="font-medium">{r.name}</span> },
        { key: "client", header: "Client" },
        { key: "lead", header: "Lead" },
        { key: "progress", header: "Progress", render: r => (
          <div className="flex items-center gap-2 min-w-[120px]">
            <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden"><div className="h-full bg-primary" style={{ width: `${r.progress}%` }} /></div>
            <span className="text-xs font-medium w-9">{r.progress}%</span>
          </div>
        )},
        { key: "budget", header: "Budget", render: r => <span className="font-medium">${(r.budget/1000).toFixed(0)}K</span> },
        { key: "due", header: "Due" },
        { key: "status", header: "Status", render: r => <StatusBadge status={r.status} /> },
      ]} />
    </ModulePage>
  );
}
