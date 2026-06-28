import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/hr/leave")({
  head: () => ({ meta: [{ title: "Leave Management · Z ERP" }, { name: "description", content: "Time-off requests and balances." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Leave Management" subtitle="Time-off requests and balances." breadcrumbs={["HR","Leave"]}>
      <EmptyModule title="Leave Management" hint="Time-off requests and balances." />
    </ModulePage>
  );
}
