import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/accounting/pnl")({
  head: () => ({ meta: [{ title: "Profit & Loss · Z ERP" }, { name: "description", content: "Income statement." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Profit & Loss" subtitle="Income statement." breadcrumbs={["Accounting","P&L"]}>
      <EmptyModule title="Profit & Loss" hint="Income statement." />
    </ModulePage>
  );
}
