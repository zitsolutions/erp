import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/finance/reports")({
  head: () => ({ meta: [{ title: "Financial Reports · Z ERP" }, { name: "description", content: "Cash flow, P&L, balance sheet." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Financial Reports" subtitle="Cash flow, P&L, balance sheet." breadcrumbs={["Finance","Reports"]}>
      <EmptyModule title="Financial Reports" hint="Cash flow, P&L, balance sheet." />
    </ModulePage>
  );
}
