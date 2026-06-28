import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/recruitment/interviews")({
  head: () => ({ meta: [{ title: "Interviews · Z ERP" }, { name: "description", content: "Scheduled candidate interviews." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Interviews" subtitle="Scheduled candidate interviews." breadcrumbs={["Recruitment","Interviews"]}>
      <EmptyModule title="Interviews" hint="Scheduled candidate interviews." />
    </ModulePage>
  );
}
