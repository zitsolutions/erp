import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/settings/notifications")({
  head: () => ({ meta: [{ title: "Notifications · Z ERP" }, { name: "description", content: "Email and in-app preferences." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Notifications" subtitle="Email and in-app preferences." breadcrumbs={["Settings","Notifications"]}>
      <EmptyModule title="Notifications" hint="Email and in-app preferences." />
    </ModulePage>
  );
}
