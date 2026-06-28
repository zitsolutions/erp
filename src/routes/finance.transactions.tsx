import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/finance/transactions")({
  head: () => ({ meta: [{ title: "Transactions · Z ERP" }, { name: "description", content: "All financial transactions." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Transactions" subtitle="All financial transactions." breadcrumbs={["Finance","Transactions"]}>
      <EmptyModule title="Transactions" hint="All financial transactions." />
    </ModulePage>
  );
}
