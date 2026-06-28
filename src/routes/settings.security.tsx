import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/settings/security")({
  head: () => ({ meta: [{ title: "Security · Z ERP" }, { name: "description", content: "2FA, SSO and audit logs." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Security" subtitle="2FA, SSO and audit logs." breadcrumbs={["Settings","Security"]}>
      <EmptyModule title="Security" hint="2FA, SSO and audit logs." />
    </ModulePage>
  );
}
