import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/accounting/journal")({
  head: () => ({ meta: [{ title: "Journal Entries · Z ERP" }, { name: "description", content: "Manual and automated entries." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Journal Entries" subtitle="Manual and automated entries." breadcrumbs={["Accounting","Journal"]}>
      <EmptyModule title="Journal Entries" hint="Manual and automated entries." />
    </ModulePage>
  );
}
