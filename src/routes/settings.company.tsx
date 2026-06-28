import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/settings/company")({
  head: () => ({ meta: [{ title: "Company Settings · Z ERP" }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Company Settings" subtitle="Manage your organization profile." breadcrumbs={["Settings","Company"]} actions={<Button size="sm">Save changes</Button>}>
      <Card className="p-6 max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5"><Label>Company Name</Label><Input defaultValue="Z IT Solutions" /></div>
          <div className="space-y-1.5"><Label>Legal Name</Label><Input defaultValue="Z IT Solutions (Pvt) Ltd." /></div>
          <div className="space-y-1.5"><Label>Industry</Label><Input defaultValue="Information Technology" /></div>
          <div className="space-y-1.5"><Label>Tax ID</Label><Input defaultValue="ZIT-2026-PK" /></div>
          <div className="space-y-1.5"><Label>Currency</Label><Input defaultValue="USD" /></div>
          <div className="space-y-1.5"><Label>Fiscal Year Start</Label><Input defaultValue="January" /></div>
          <div className="space-y-1.5 md:col-span-2"><Label>Address</Label><Input defaultValue="Plot 14, I.T. Tower, Karachi 75500, Pakistan" /></div>
        </div>
      </Card>
    </ModulePage>
  );
}
