import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable, StatusBadge } from "@/components/data-table";
import { tickets } from "@/lib/mock-data";

export const Route = createFileRoute("/helpdesk/tickets")({
  head: () => ({ meta: [{ title: "Support Tickets · Z ERP" }, { name: "description", content: "Customer support tickets." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Support Tickets" subtitle="Customer support tickets." breadcrumbs={["Helpdesk","Tickets"]}>
      <DataTable rows={tickets} columns={[
      { key: "id", header: "Ticket #", render: r => <span className="font-mono text-xs">{r.id}</span> },
      { key: "subject", header: "Subject", render: r => <span className="font-medium">{r.subject}</span> },
      { key: "customer", header: "Customer" },
      { key: "priority", header: "Priority", render: r => <StatusBadge status={r.priority} /> },
      { key: "agent", header: "Agent" },
      { key: "created", header: "Created" },
      { key: "status", header: "Status", render: r => <StatusBadge status={r.status} /> },
    ]} />
    </ModulePage>
  );
}
