import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/hr/payroll")({
  head: () => ({ meta: [{ title: "Payroll · Z ERP" }, { name: "description", content: "Monthly salary runs." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Payroll" subtitle="Monthly salary runs." breadcrumbs={["HR","Payroll"]}>
      <EmptyModule title="Payroll" hint="Monthly salary runs." />
    </ModulePage>
  );
}
