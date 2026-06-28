import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/purchases/orders")({
  head: () => ({ meta: [{ title: "Purchase Orders · Z ERP" }, { name: "description", content: "POs sent to vendors." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Purchase Orders" subtitle="POs sent to vendors." breadcrumbs={["Purchases","Orders"]}>
      <EmptyModule title="Purchase Orders" hint="POs sent to vendors." />
    </ModulePage>
  );
}
