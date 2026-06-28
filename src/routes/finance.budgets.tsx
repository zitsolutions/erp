import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/finance/budgets")({
  head: () => ({ meta: [{ title: "Budgets · Z ERP" }, { name: "description", content: "Departmental and project budgets." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Budgets" subtitle="Departmental and project budgets." breadcrumbs={["Finance","Budgets"]}>
      <EmptyModule title="Budgets" hint="Departmental and project budgets." />
    </ModulePage>
  );
}
