import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/reports/sales")({
  head: () => ({ meta: [{ title: "Sales Reports · Z ERP" }, { name: "description", content: "Revenue, win rate, pipeline." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Sales Reports" subtitle="Revenue, win rate, pipeline." breadcrumbs={["Reports","Sales"]}>
      <EmptyModule title="Sales Reports" hint="Revenue, win rate, pipeline." />
    </ModulePage>
  );
}
