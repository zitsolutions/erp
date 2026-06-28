import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/settings/users")({
  head: () => ({ meta: [{ title: "User Management · Z ERP" }, { name: "description", content: "Invite and manage users." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="User Management" subtitle="Invite and manage users." breadcrumbs={["Settings","Users"]}>
      <EmptyModule title="User Management" hint="Invite and manage users." />
    </ModulePage>
  );
}
