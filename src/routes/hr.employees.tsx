import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable, StatusBadge } from "@/components/data-table";
import { employees } from "@/lib/mock-data";

export const Route = createFileRoute("/hr/employees")({
  head: () => ({ meta: [{ title: "Employee Directory · Z ERP" }, { name: "description", content: "All employees across departments." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Employee Directory" subtitle="All employees across departments." breadcrumbs={["HR","Employees"]}>
      <DataTable rows={employees} columns={[
      { key: "id", header: "ID", render: r => <span className="font-mono text-xs">{r.id}</span> },
      { key: "name", header: "Name", render: r => (
        <div className="flex items-center gap-2"><div className="size-7 rounded-full bg-gradient-to-br from-primary to-info text-primary-foreground grid place-items-center text-[10px] font-semibold">{r.name.split(" ").map((s:string)=>s[0]).join("").slice(0,2)}</div><span className="font-medium">{r.name}</span></div>
      )},
      { key: "designation", header: "Designation" },
      { key: "department", header: "Department" },
      { key: "joined", header: "Joined" },
      { key: "status", header: "Status", render: r => <StatusBadge status={r.status} /> },
    ]} />
    </ModulePage>
  );
}
