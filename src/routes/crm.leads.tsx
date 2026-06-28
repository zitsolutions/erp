import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable, StatusBadge } from "@/components/data-table";
import { leads } from "@/lib/mock-data";
import { KpiCard } from "@/components/kpi-card";
import { UserPlus, Target, TrendingUp, Award } from "lucide-react";

export const Route = createFileRoute("/crm/leads")({
  head: () => ({ meta: [{ title: "Leads · Z ERP" }, { name: "description", content: "Manage and qualify sales leads." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Leads" subtitle="Capture, qualify and convert prospects." breadcrumbs={["CRM","Leads"]}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard label="Total Leads" value="312" delta={18} icon={UserPlus} tone="info" />
        <KpiCard label="Qualified" value="148" delta={9.4} icon={Target} tone="primary" />
        <KpiCard label="Conversion Rate" value="24.6%" delta={3.2} icon={TrendingUp} tone="success" />
        <KpiCard label="Pipeline Value" value="$842K" delta={11.8} icon={Award} tone="warning" />
      </div>
      <DataTable rows={leads} searchKeys={["name","company","email","stage"]} columns={[
        { key: "id", header: "Lead #", render: r => <span className="font-mono text-xs">{r.id}</span> },
        { key: "name", header: "Name", render: r => <span className="font-medium">{r.name}</span> },
        { key: "company", header: "Company" },
        { key: "email", header: "Email", render: r => <span className="text-info">{r.email}</span> },
        { key: "source", header: "Source" },
        { key: "stage", header: "Stage", render: r => <StatusBadge status={r.stage} /> },
        { key: "value", header: "Value", render: r => <span className="font-medium">${r.value.toLocaleString()}</span> },
        { key: "owner", header: "Owner", className: "text-muted-foreground" },
      ]} />
    </ModulePage>
  );
}
