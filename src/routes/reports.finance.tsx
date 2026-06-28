import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/reports/finance")({
  head: () => ({ meta: [{ title: "Finance Reports · Z ERP" }, { name: "description", content: "Cash flow, AR/AP, expenses." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Finance Reports" subtitle="Cash flow, AR/AP, expenses." breadcrumbs={["Reports","Finance"]}>
      <EmptyModule title="Finance Reports" hint="Cash flow, AR/AP, expenses." />
    </ModulePage>
  );
}
