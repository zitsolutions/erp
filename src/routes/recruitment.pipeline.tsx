import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/recruitment/pipeline")({
  head: () => ({ meta: [{ title: "Hiring Pipeline · Z ERP" }, { name: "description", content: "Candidates by stage." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Hiring Pipeline" subtitle="Candidates by stage." breadcrumbs={["Recruitment","Pipeline"]}>
      <EmptyModule title="Hiring Pipeline" hint="Candidates by stage." />
    </ModulePage>
  );
}
