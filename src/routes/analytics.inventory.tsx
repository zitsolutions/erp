import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/analytics/inventory")({
  head: () => ({ meta: [{ title: "Inventory Analytics · Z ERP" }, { name: "description", content: "Stock velocity and ageing." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Inventory Analytics" subtitle="Stock velocity and ageing." breadcrumbs={["Analytics","Inventory"]}>
      <EmptyModule title="Inventory Analytics" hint="Stock velocity and ageing." />
    </ModulePage>
  );
}
