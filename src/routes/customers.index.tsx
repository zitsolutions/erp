import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable, StatusBadge } from "@/components/data-table";
import { companies } from "@/lib/mock-data";

export const Route = createFileRoute("/customers/")({
  head: () => ({ meta: [{ title: "Customers · Z ERP" }, { name: "description", content: "All customer accounts." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Customers" subtitle="Complete customer book of business." breadcrumbs={["Customers","List"]}>
      <DataTable rows={companies} columns={[
        { key: "id", header: "ID", render: r => <span className="font-mono text-xs">{r.id}</span> },
        { key: "name", header: "Company", render: r => <span className="font-medium">{r.name}</span> },
        { key: "industry", header: "Industry" },
        { key: "country", header: "Country" },
        { key: "revenue", header: "Annual Revenue", render: r => <span className="font-medium">${(r.revenue/1_000_000).toFixed(1)}M</span> },
        { key: "owner", header: "Account Mgr" },
        { key: "size", header: "Status", render: () => <StatusBadge status="Active" /> },
      ]} />
    </ModulePage>
  );
}
