import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/settings/roles")({
  head: () => ({ meta: [{ title: "Roles & Permissions · Z ERP" }, { name: "description", content: "RBAC for your workspace." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Roles & Permissions" subtitle="RBAC for your workspace." breadcrumbs={["Settings","Roles"]}>
      <EmptyModule title="Roles & Permissions" hint="RBAC for your workspace." />
    </ModulePage>
  );
}
