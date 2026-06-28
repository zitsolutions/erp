import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable, StatusBadge } from "@/components/data-table";
import { vendors } from "@/lib/mock-data";

export const Route = createFileRoute("/purchases/vendors")({
  head: () => ({ meta: [{ title: "Vendors · Z ERP" }, { name: "description", content: "Supplier directory and contracts." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Vendors" subtitle="Supplier directory and contracts." breadcrumbs={["Purchases","Vendors"]}>
      <DataTable rows={vendors} columns={[
      { key: "id", header: "ID", render: r => <span className="font-mono text-xs">{r.id}</span> },
      { key: "name", header: "Vendor", render: r => <span className="font-medium">{r.name}</span> },
      { key: "category", header: "Category" },
      { key: "country", header: "Country" },
      { key: "spend", header: "YTD Spend", render: r => <span className="font-medium">${r.spend.toLocaleString()}</span> },
      { key: "rating", header: "Rating", render: r => <span>★ {r.rating}</span> },
      { key: "status", header: "Status", render: r => <StatusBadge status={r.status} /> },
    ]} />
    </ModulePage>
  );
}
