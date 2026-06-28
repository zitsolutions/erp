import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/analytics/customers")({
  head: () => ({ meta: [{ title: "Customer Analytics · Z ERP" }, { name: "description", content: "Cohorts and LTV." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Customer Analytics" subtitle="Cohorts and LTV." breadcrumbs={["Analytics","Customers"]}>
      <EmptyModule title="Customer Analytics" hint="Cohorts and LTV." />
    </ModulePage>
  );
}
