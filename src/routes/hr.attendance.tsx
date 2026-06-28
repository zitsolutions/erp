import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/hr/attendance")({
  head: () => ({ meta: [{ title: "Attendance · Z ERP" }, { name: "description", content: "Daily check-ins and timesheets." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Attendance" subtitle="Daily check-ins and timesheets." breadcrumbs={["HR","Attendance"]}>
      <EmptyModule title="Attendance" hint="Daily check-ins and timesheets." />
    </ModulePage>
  );
}
