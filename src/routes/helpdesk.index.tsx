import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { KpiCard } from "@/components/kpi-card";
import { Card } from "@/components/ui/card";
import { LifeBuoy, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { tickets } from "@/lib/mock-data";
import { StatusBadge } from "@/components/data-table";

export const Route = createFileRoute("/helpdesk/")({
  head: () => ({ meta: [{ title: "Helpdesk · Z ERP" }, { name: "description", content: "Customer support overview." }] }),
  component: Page,
});

function Page() {
  const open = tickets.filter(t => t.status === "Open" || t.status === "In Progress").length;
  return (
    <ModulePage title="Customer Support Dashboard" subtitle="Real-time helpdesk metrics." breadcrumbs={["Helpdesk","Dashboard"]}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard label="Open Tickets" value={open.toString()} icon={LifeBuoy} tone="info" />
        <KpiCard label="Avg Response Time" value="42m" delta={-18.2} icon={Clock} tone="success" />
        <KpiCard label="Resolved Today" value="14" delta={12} icon={CheckCircle} tone="success" />
        <KpiCard label="Escalations" value="3" delta={50} icon={AlertCircle} tone="warning" />
      </div>
      <Card className="p-5">
        <div className="font-semibold mb-3">Recent Tickets</div>
        <div className="divide-y">
          {tickets.slice(0, 6).map(t => (
            <div key={t.id} className="py-3 flex items-center gap-3">
              <span className="font-mono text-xs text-muted-foreground w-20">{t.id}</span>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">{t.subject}</div>
                <div className="text-xs text-muted-foreground">{t.customer} · {t.agent}</div>
              </div>
              <StatusBadge status={t.priority} />
              <StatusBadge status={t.status} />
            </div>
          ))}
        </div>
      </Card>
    </ModulePage>
  );
}
