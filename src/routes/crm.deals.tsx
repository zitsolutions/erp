import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { dealStages, deals } from "@/lib/mock-data";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/crm/deals")({
  head: () => ({ meta: [{ title: "Deals · Z ERP" }, { name: "description", content: "Sales pipeline kanban board." }] }),
  component: Page,
});

const stageColors: Record<string, string> = {
  "Lead In": "border-t-muted-foreground",
  "Qualified": "border-t-info",
  "Proposal": "border-t-primary",
  "Negotiation": "border-t-warning",
  "Won": "border-t-success",
  "Lost": "border-t-destructive",
};

function Page() {
  return (
    <ModulePage title="Deals Pipeline" subtitle="Drag deals across stages to update their status." breadcrumbs={["CRM","Deals"]}>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {dealStages.map(stage => {
          const stageDeals = deals.filter(d => d.stage === stage);
          const total = stageDeals.reduce((s, d) => s + d.value, 0);
          return (
            <div key={stage} className="min-w-[280px] flex-1">
              <Card className={`p-3 border-t-4 ${stageColors[stage]} gap-3`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm">{stage}</div>
                    <div className="text-xs text-muted-foreground">{stageDeals.length} deals · ${total.toLocaleString()}</div>
                  </div>
                  <Button variant="ghost" size="icon" className="size-7"><Plus className="size-4" /></Button>
                </div>
                <div className="space-y-2">
                  {stageDeals.map(d => (
                    <Card key={d.id} className="p-3 gap-2 hover:shadow-md transition-shadow cursor-pointer border-border/70">
                      <div className="font-medium text-sm">{d.title}</div>
                      <div className="text-xs text-muted-foreground">{d.company}</div>
                      <div className="flex items-center justify-between mt-1">
                        <div className="text-sm font-semibold text-primary">${d.value.toLocaleString()}</div>
                        <div className="size-6 rounded-full bg-gradient-to-br from-primary to-info text-primary-foreground grid place-items-center text-[10px] font-semibold">{d.owner.split(" ").map(s=>s[0]).join("").slice(0,2)}</div>
                      </div>
                      <div className="text-[10px] text-muted-foreground">Close: {d.close}</div>
                    </Card>
                  ))}
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </ModulePage>
  );
}
