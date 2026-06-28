import { Card } from "@/components/ui/card";
import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function KpiCard({ label, value, delta, icon: Icon, tone = "primary" }: {
  label: string; value: string; delta?: number; icon: LucideIcon;
  tone?: "primary" | "success" | "warning" | "info" | "destructive";
}) {
  const toneCls: Record<string, string> = {
    primary: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    warning: "bg-warning/15 text-warning-foreground",
    info: "bg-info/10 text-info",
    destructive: "bg-destructive/10 text-destructive",
  };
  return (
    <Card className="p-5 gap-3 hover:shadow-md transition-shadow border-border/70">
      <div className="flex items-start justify-between">
        <div className={cn("size-10 rounded-lg grid place-items-center", toneCls[tone])}>
          <Icon className="size-5" />
        </div>
        {typeof delta === "number" && (
          <div className={cn("flex items-center gap-0.5 text-xs font-medium px-2 py-0.5 rounded-full",
            delta >= 0 ? "text-success bg-success/10" : "text-destructive bg-destructive/10")}>
            {delta >= 0 ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
            {Math.abs(delta)}%
          </div>
        )}
      </div>
      <div>
        <div className="text-2xl font-bold tracking-tight">{value}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
      </div>
    </Card>
  );
}
