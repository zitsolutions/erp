import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/projects/team")({
  head: () => ({ meta: [{ title: "Team Allocation · Z ERP" }, { name: "description", content: "Who's working on what." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Team Allocation" subtitle="Who's working on what." breadcrumbs={["Projects","Team"]}>
      <EmptyModule title="Team Allocation" hint="Who's working on what." />
    </ModulePage>
  );
}
