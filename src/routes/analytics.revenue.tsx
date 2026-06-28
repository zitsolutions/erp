import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/analytics/revenue")({
  head: () => ({ meta: [{ title: "Revenue Analytics · Z ERP" }, { name: "description", content: "Revenue trends and breakdown." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Revenue Analytics" subtitle="Revenue trends and breakdown." breadcrumbs={["Analytics","Revenue"]}>
      <EmptyModule title="Revenue Analytics" hint="Revenue trends and breakdown." />
    </ModulePage>
  );
}
