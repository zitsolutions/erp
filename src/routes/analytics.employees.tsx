import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/analytics/employees")({
  head: () => ({ meta: [{ title: "Employee Analytics · Z ERP" }, { name: "description", content: "Performance and engagement." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Employee Analytics" subtitle="Performance and engagement." breadcrumbs={["Analytics","Employees"]}>
      <EmptyModule title="Employee Analytics" hint="Performance and engagement." />
    </ModulePage>
  );
}
