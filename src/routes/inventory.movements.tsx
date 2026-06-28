import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable, StatusBadge } from "@/components/data-table";
import { stockMovements } from "@/lib/mock-data";

export const Route = createFileRoute("/inventory/movements")({
  head: () => ({ meta: [{ title: "Stock Movements · Z ERP" }, { name: "description", content: "Inbound, outbound and transfers." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Stock Movements" subtitle="Inbound, outbound and transfers." breadcrumbs={["Inventory","Movements"]}>
      <DataTable rows={stockMovements} columns={[
      { key: "id", header: "Movement #", render: r => <span className="font-mono text-xs">{r.id}</span> },
      { key: "sku", header: "SKU", render: r => <span className="font-mono text-xs">{r.sku}</span> },
      { key: "type", header: "Type", render: r => <StatusBadge status={r.type === "Inbound" ? "In Stock" : r.type === "Outbound" ? "Pending" : "Processing"} /> },
      { key: "qty", header: "Qty", render: r => <span className="font-medium">{r.qty}</span> },
      { key: "warehouse", header: "Warehouse" },
      { key: "date", header: "Date" },
      { key: "user", header: "By", className: "text-muted-foreground" },
    ]} />
    </ModulePage>
  );
}
