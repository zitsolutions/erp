import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { warehouses } from "@/lib/mock-data";
import { Card } from "@/components/ui/card";
import { Warehouse } from "lucide-react";

export const Route = createFileRoute("/inventory/warehouses")({
  head: () => ({ meta: [{ title: "Warehouses · Z ERP" }, { name: "description", content: "Storage locations and capacity." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Warehouses" subtitle="Storage locations and capacity." breadcrumbs={["Inventory","Warehouses"]}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {warehouses.map(w => {
        const pct = Math.round((w.used / w.capacity) * 100);
        return (
          <Card key={w.id} className="p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="size-10 rounded-lg bg-primary/10 text-primary grid place-items-center"><Warehouse className="size-5" /></div>
              <div className="flex-1">
                <div className="font-semibold">{w.name}</div>
                <div className="text-xs text-muted-foreground">{w.location} · Managed by {w.manager}</div>
              </div>
              <span className="text-xs font-mono text-muted-foreground">{w.id}</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs"><span className="text-muted-foreground">Capacity utilization</span><span className="font-medium">{pct}%</span></div>
              <div className="h-2 rounded-full bg-muted overflow-hidden"><div className="h-full bg-primary" style={{ width: `${pct}%` }} /></div>
              <div className="flex justify-between text-xs text-muted-foreground"><span>{w.used.toLocaleString()} units</span><span>{w.capacity.toLocaleString()} max</span></div>
            </div>
          </Card>
        );
      })}
    </div>
    </ModulePage>
  );
}
