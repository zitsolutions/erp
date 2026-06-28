import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/accounting/trial-balance")({
  head: () => ({ meta: [{ title: "Trial Balance · Z ERP" }, { name: "description", content: "Debits and credits by account." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Trial Balance" subtitle="Debits and credits by account." breadcrumbs={["Accounting","Trial Balance"]}>
      <EmptyModule title="Trial Balance" hint="Debits and credits by account." />
    </ModulePage>
  );
}
