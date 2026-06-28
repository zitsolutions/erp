import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable, StatusBadge } from "@/components/data-table";
import { recentTransactions } from "@/lib/mock-data";

export const Route = createFileRoute("/sales/payments")({
  head: () => ({ meta: [{ title: "Payments · Z ERP" }, { name: "description", content: "Received and pending payments." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Payments" subtitle="Received and pending payments." breadcrumbs={["Sales","Payments"]}>
      <DataTable rows={recentTransactions} columns={[
      { key: "id", header: "Txn #", render: r => <span className="font-mono text-xs">{r.id}</span> },
      { key: "party", header: "From", render: r => <span className="font-medium">{r.party}</span> },
      { key: "type", header: "Type" },
      { key: "amount", header: "Amount", render: r => <span className="font-medium">${r.amount.toLocaleString()}</span> },
      { key: "date", header: "Date" },
      { key: "status", header: "Status", render: r => <StatusBadge status={r.status} /> },
    ]} />
    </ModulePage>
  );
}
