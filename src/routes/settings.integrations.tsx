import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/settings/integrations")({
  head: () => ({ meta: [{ title: "Integrations · Z ERP" }, { name: "description", content: "Connect third-party tools." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Integrations" subtitle="Connect third-party tools." breadcrumbs={["Settings","Integrations"]}>
      <EmptyModule title="Integrations" hint="Connect third-party tools." />
    </ModulePage>
  );
}
