import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable } from "@/components/data-table";
import { contacts } from "@/lib/mock-data";

export const Route = createFileRoute("/crm/contacts")({
  head: () => ({ meta: [{ title: "Contacts · Z ERP" }, { name: "description", content: "All people across your customer accounts." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Contacts" subtitle="All people across your customer accounts." breadcrumbs={["CRM","Contacts"]}>
      <DataTable title="Contacts" rows={contacts} columns={[
      { key: "id", header: "ID", render: r => <span className="font-mono text-xs">{r.id}</span> },
      { key: "name", header: "Name", render: r => <span className="font-medium">{r.name}</span> },
      { key: "title", header: "Title" },
      { key: "company", header: "Company" },
      { key: "email", header: "Email", render: r => <span className="text-info">{r.email}</span> },
      { key: "phone", header: "Phone", className: "text-muted-foreground" },
    ]} />
    </ModulePage>
  );
}
