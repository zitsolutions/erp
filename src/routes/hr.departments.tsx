import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { Card } from "@/components/ui/card";
import { departments, employees } from "@/lib/mock-data";
import { Building2 } from "lucide-react";

export const Route = createFileRoute("/hr/departments")({
  head: () => ({ meta: [{ title: "Departments · Z ERP" }, { name: "description", content: "Organizational departments." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Departments" subtitle="Organizational departments." breadcrumbs={["HR","Departments"]}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">{departments.map(d => {
      const count = employees.filter(e => e.department === d).length;
      return (<Card key={d} className="p-5"><div className="size-10 rounded-lg bg-primary/10 text-primary grid place-items-center mb-3"><Building2 className="size-5" /></div><div className="font-semibold">{d}</div><div className="text-xs text-muted-foreground mt-0.5">{count} members</div></Card>);
    })}</div>
    </ModulePage>
  );
}
