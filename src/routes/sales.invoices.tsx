import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable, StatusBadge } from "@/components/data-table";
import { invoices } from "@/lib/mock-data";

export const Route = createFileRoute("/sales/invoices")({
  head: () => ({ meta: [{ title: "Invoices · Z ERP" }, { name: "description", content: "Customer invoices and billing." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Invoices" subtitle="Customer invoices and billing." breadcrumbs={["Sales","Invoices"]}>
      <DataTable rows={invoices} columns={[
      { key: "id", header: "Invoice #", render: r => <span className="font-mono text-xs">{r.id}</span> },
      { key: "customer", header: "Customer", render: r => <span className="font-medium">{r.customer}</span> },
      { key: "amount", header: "Amount", render: r => <span className="font-medium">${r.amount.toLocaleString()}</span> },
      { key: "due", header: "Due Date" },
      { key: "status", header: "Status", render: r => <StatusBadge status={r.status} /> },
    ]} />
    </ModulePage>
  );
}
