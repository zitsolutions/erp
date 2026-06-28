import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable, StatusBadge } from "@/components/data-table";
import { products } from "@/lib/mock-data";

export const Route = createFileRoute("/inventory/products")({
  head: () => ({ meta: [{ title: "Products · Z ERP" }, { name: "description", content: "Master catalog of products and SKUs." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Products" subtitle="Master catalog of products and SKUs." breadcrumbs={["Inventory","Products"]}>
      <DataTable rows={products} columns={[
      { key: "id", header: "SKU", render: r => <span className="font-mono text-xs">{r.id}</span> },
      { key: "name", header: "Product", render: r => <span className="font-medium">{r.name}</span> },
      { key: "category", header: "Category" },
      { key: "price", header: "Price", render: r => <span>${r.price}</span> },
      { key: "stock", header: "Stock", render: r => <span className="font-medium">{r.stock}</span> },
      { key: "status", header: "Status", render: r => <StatusBadge status={r.status} /> },
    ]} />
    </ModulePage>
  );
}
