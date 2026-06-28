import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/accounting/ledger")({
  head: () => ({ meta: [{ title: "General Ledger · Z ERP" }, { name: "description", content: "Full transaction ledger." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="General Ledger" subtitle="Full transaction ledger." breadcrumbs={["Accounting","Ledger"]}>
      <EmptyModule title="General Ledger" hint="Full transaction ledger." />
    </ModulePage>
  );
}
