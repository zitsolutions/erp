import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/customers/analytics")({
  head: () => ({ meta: [{ title: "Customer Analytics · Z ERP" }, { name: "description", content: "Cohorts, churn and retention." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Customer Analytics" subtitle="Cohorts, churn and retention." breadcrumbs={["Customers","Analytics"]}>
      <EmptyModule title="Customer Analytics" hint="Cohorts, churn and retention." />
    </ModulePage>
  );
}
