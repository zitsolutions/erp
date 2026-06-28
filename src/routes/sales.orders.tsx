import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable, StatusBadge } from "@/components/data-table";
import { salesOrders } from "@/lib/mock-data";

export const Route = createFileRoute("/sales/orders")({
  head: () => ({ meta: [{ title: "Sales Orders · Z ERP" }, { name: "description", content: "Confirmed orders ready for fulfillment." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Sales Orders" subtitle="Confirmed orders ready for fulfillment." breadcrumbs={["Sales","Orders"]}>
      <DataTable rows={salesOrders} columns={[
      { key: "id", header: "Order #", render: r => <span className="font-mono text-xs">{r.id}</span> },
      { key: "customer", header: "Customer", render: r => <span className="font-medium">{r.customer}</span> },
      { key: "amount", header: "Amount", render: r => <span className="font-medium">${r.amount.toLocaleString()}</span> },
      { key: "date", header: "Date" },
      { key: "status", header: "Status", render: r => <StatusBadge status={r.status} /> },
    ]} />
    </ModulePage>
  );
}
