import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/reports/crm")({
  head: () => ({ meta: [{ title: "CRM Reports · Z ERP" }, { name: "description", content: "Leads, conversions, activities." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="CRM Reports" subtitle="Leads, conversions, activities." breadcrumbs={["Reports","CRM"]}>
      <EmptyModule title="CRM Reports" hint="Leads, conversions, activities." />
    </ModulePage>
  );
}
