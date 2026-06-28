import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/reports/hr")({
  head: () => ({ meta: [{ title: "HR Reports · Z ERP" }, { name: "description", content: "Headcount, attrition, payroll." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="HR Reports" subtitle="Headcount, attrition, payroll." breadcrumbs={["Reports","HR"]}>
      <EmptyModule title="HR Reports" hint="Headcount, attrition, payroll." />
    </ModulePage>
  );
}
