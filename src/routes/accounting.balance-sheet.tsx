import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/accounting/balance-sheet")({
  head: () => ({ meta: [{ title: "Balance Sheet · Z ERP" }, { name: "description", content: "Assets, liabilities and equity." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Balance Sheet" subtitle="Assets, liabilities and equity." breadcrumbs={["Accounting","Balance Sheet"]}>
      <EmptyModule title="Balance Sheet" hint="Assets, liabilities and equity." />
    </ModulePage>
  );
}
