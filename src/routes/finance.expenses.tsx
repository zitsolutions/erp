import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable, StatusBadge } from "@/components/data-table";
import { expenses } from "@/lib/mock-data";

export const Route = createFileRoute("/finance/expenses")({
  head: () => ({ meta: [{ title: "Expenses · Z ERP" }, { name: "description", content: "Track and approve expenses." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Expenses" subtitle="Track and approve expenses." breadcrumbs={["Finance","Expenses"]}>
      <DataTable rows={expenses} columns={[
      { key: "id", header: "ID", render: r => <span className="font-mono text-xs">{r.id}</span> },
      { key: "category", header: "Category", render: r => <span className="font-medium">{r.category}</span> },
      { key: "vendor", header: "Vendor" },
      { key: "amount", header: "Amount", render: r => <span className="font-medium">${r.amount.toLocaleString()}</span> },
      { key: "date", header: "Date" },
      { key: "status", header: "Status", render: r => <StatusBadge status={r.status} /> },
    ]} />
    </ModulePage>
  );
}
