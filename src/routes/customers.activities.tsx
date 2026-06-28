import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/customers/activities")({
  head: () => ({ meta: [{ title: "Customer Activities · Z ERP" }, { name: "description", content: "Recent customer touchpoints." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Customer Activities" subtitle="Recent customer touchpoints." breadcrumbs={["Customers","Activities"]}>
      <EmptyModule title="Customer Activities" hint="Recent customer touchpoints." />
    </ModulePage>
  );
}
