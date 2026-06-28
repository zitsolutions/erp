import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable, StatusBadge } from "@/components/data-table";
import { quotations } from "@/lib/mock-data";

export const Route = createFileRoute("/sales/quotations")({
  head: () => ({ meta: [{ title: "Quotations · Z ERP" }, { name: "description", content: "All issued quotes and proposals." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Quotations" subtitle="All issued quotes and proposals." breadcrumbs={["Sales","Quotations"]}>
      <DataTable rows={quotations} columns={[
      { key: "id", header: "Quote #", render: r => <span className="font-mono text-xs">{r.id}</span> },
      { key: "customer", header: "Customer", render: r => <span className="font-medium">{r.customer}</span> },
      { key: "amount", header: "Amount", render: r => <span className="font-medium">${r.amount.toLocaleString()}</span> },
      { key: "date", header: "Date" },
      { key: "status", header: "Status", render: r => <StatusBadge status={r.status} /> },
    ]} />
    </ModulePage>
  );
}
