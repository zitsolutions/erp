import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/purchases/requests")({
  head: () => ({ meta: [{ title: "Purchase Requests · Z ERP" }, { name: "description", content: "Approve and process internal requests." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Purchase Requests" subtitle="Approve and process internal requests." breadcrumbs={["Purchases","Requests"]}>
      <EmptyModule title="Purchase Requests" hint="Approve and process internal requests." />
    </ModulePage>
  );
}
