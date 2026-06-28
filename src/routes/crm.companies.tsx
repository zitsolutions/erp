import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable } from "@/components/data-table";
import { companies } from "@/lib/mock-data";

export const Route = createFileRoute("/crm/companies")({
  head: () => ({ meta: [{ title: "Companies · Z ERP" }, { name: "description", content: "Customer organizations and accounts." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Companies" subtitle="Customer organizations and accounts." breadcrumbs={["CRM","Companies"]}>
      <DataTable title="Companies" rows={companies} columns={[
      { key: "id", header: "ID", render: r => <span className="font-mono text-xs">{r.id}</span> },
      { key: "name", header: "Company", render: r => <span className="font-medium">{r.name}</span> },
      { key: "industry", header: "Industry" },
      { key: "size", header: "Size" },
      { key: "revenue", header: "Revenue", render: r => <span className="font-medium">${(r.revenue/1_000_000).toFixed(1)}M</span> },
      { key: "country", header: "Country" },
      { key: "owner", header: "Owner", className: "text-muted-foreground" },
    ]} />
    </ModulePage>
  );
}
