import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { Card } from "@/components/ui/card";
import { employees } from "@/lib/mock-data";

export const Route = createFileRoute("/hr/designations")({
  head: () => ({ meta: [{ title: "Designations · Z ERP" }, { name: "description", content: "Job titles and roles." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Designations" subtitle="Job titles and roles." breadcrumbs={["HR","Designations"]}>
      <Card className="p-5"><table className="w-full text-sm"><thead className="text-xs uppercase text-muted-foreground"><tr className="border-b"><th className="text-left py-2">Designation</th><th className="text-left">Department</th><th className="text-right">Headcount</th></tr></thead><tbody>{Array.from(new Set(employees.map(e => e.designation))).map(d => {const e = employees.find(x => x.designation === d)!; const count = employees.filter(x => x.designation === d).length; return (<tr key={d} className="border-b last:border-0"><td className="py-2.5 font-medium">{d}</td><td className="text-muted-foreground">{e.department}</td><td className="text-right font-medium">{count}</td></tr>);})}</tbody></table></Card>
    </ModulePage>
  );
}
