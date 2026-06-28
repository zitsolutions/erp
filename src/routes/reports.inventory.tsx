import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/reports/inventory")({
  head: () => ({ meta: [{ title: "Inventory Reports · Z ERP" }, { name: "description", content: "Stock turns, ageing, valuation." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Inventory Reports" subtitle="Stock turns, ageing, valuation." breadcrumbs={["Reports","Inventory"]}>
      <EmptyModule title="Inventory Reports" hint="Stock turns, ageing, valuation." />
    </ModulePage>
  );
}
