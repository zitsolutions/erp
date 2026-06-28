import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { KpiCard } from "@/components/kpi-card";
import { Card } from "@/components/ui/card";
import { Boxes, Package, Warehouse as WHouse, AlertTriangle } from "lucide-react";
import { warehouses, products } from "@/lib/mock-data";

export const Route = createFileRoute("/inventory/")({
  head: () => ({ meta: [{ title: "Inventory Dashboard · Z ERP" }, { name: "description", content: "Stock levels and warehouse status." }] }),
  component: Page,
});

function Page() {
  const low = products.filter(p => p.status === "Low Stock" || p.status === "Out of Stock").length;
  return (
    <ModulePage title="Inventory Dashboard" subtitle="Stock health across all warehouses." breadcrumbs={["Inventory","Dashboard"]}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard label="Total SKUs" value={products.length.toString()} icon={Package} tone="primary" />
        <KpiCard label="Warehouses" value={warehouses.length.toString()} icon={WHouse} tone="info" />
        <KpiCard label="Total Units" value="48,820" delta={4.2} icon={Boxes} tone="success" />
        <KpiCard label="Low / Out of Stock" value={low.toString()} icon={AlertTriangle} tone="warning" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {warehouses.map(w => {
          const pct = Math.round((w.used / w.capacity) * 100);
          return (
            <Card key={w.id} className="p-5">
              <div className="flex justify-between mb-2"><div className="font-semibold">{w.name}</div><span className="text-xs text-muted-foreground">{w.location}</span></div>
              <div className="h-2 rounded-full bg-muted overflow-hidden"><div className="h-full bg-primary" style={{ width: `${pct}%` }} /></div>
              <div className="text-xs text-muted-foreground mt-1.5">{w.used.toLocaleString()} / {w.capacity.toLocaleString()} units · {pct}% utilized</div>
            </Card>
          );
        })}
      </div>
    </ModulePage>
  );
}
