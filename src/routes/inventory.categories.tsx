import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { Card } from "@/components/ui/card";
import { Tag } from "lucide-react";

export const Route = createFileRoute("/inventory/categories")({
  head: () => ({ meta: [{ title: "Categories · Z ERP" }, { name: "description", content: "Product categorization." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Categories" subtitle="Product categorization." breadcrumbs={["Inventory","Categories"]}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{[
      { name: "Software", count: 128, color: "bg-primary/10 text-primary" },
      { name: "Hardware", count: 96, color: "bg-info/10 text-info" },
      { name: "Services", count: 72, color: "bg-success/10 text-success" },
      { name: "Subscriptions", count: 54, color: "bg-warning/15 text-warning-foreground" },
      { name: "Training", count: 38, color: "bg-chart-4/15 text-chart-4" },
      { name: "Accessories", count: 84, color: "bg-chart-2/15 text-chart-2" },
      { name: "Spare Parts", count: 62, color: "bg-chart-3/15 text-chart-3" },
      { name: "Licenses", count: 28, color: "bg-chart-5/15 text-chart-5" },
    ].map(c => (
      <Card key={c.name} className="p-5">
        <div className={"size-10 rounded-lg grid place-items-center mb-3 " + c.color}><Tag className="size-5" /></div>
        <div className="font-semibold">{c.name}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{c.count} products</div>
      </Card>
    ))}</div>
    </ModulePage>
  );
}
