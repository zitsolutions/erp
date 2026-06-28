import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/purchases/analytics")({
  head: () => ({ meta: [{ title: "Vendor Analytics · Z ERP" }, { name: "description", content: "Spend, performance and ratings." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Vendor Analytics" subtitle="Spend, performance and ratings." breadcrumbs={["Purchases","Analytics"]}>
      <EmptyModule title="Vendor Analytics" hint="Spend, performance and ratings." />
    </ModulePage>
  );
}
