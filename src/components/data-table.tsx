import { useMemo, useState, type ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter, Download, Search, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export type Column<T> = {
  key: keyof T | string;
  header: string;
  render?: (row: T) => ReactNode;
  className?: string;
};

export function DataTable<T extends Record<string, any>>({
  columns, rows, searchKeys, title, actions,
}: {
  columns: Column<T>[]; rows: T[]; searchKeys?: (keyof T)[]; title?: string; actions?: ReactNode;
}) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    if (!q) return rows;
    const lower = q.toLowerCase();
    return rows.filter(r => (searchKeys ?? Object.keys(r) as (keyof T)[]).some(k => String(r[k] ?? "").toLowerCase().includes(lower)));
  }, [rows, q, searchKeys]);

  return (
    <Card className="overflow-hidden border-border/70 p-0 gap-0">
      <div className="flex items-center gap-2 p-4 border-b">
        {title && <div className="font-semibold text-sm mr-2">{title}</div>}
        <div className="relative flex-1 max-w-xs">
          <Search className="size-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input value={q} onChange={e => setQ(e.target.value)} placeholder="Search…" className="h-8 pl-8 text-xs" />
        </div>
        <Button variant="outline" size="sm" className="h-8 gap-1.5"><Filter className="size-3.5" />Filter</Button>
        <Button variant="outline" size="sm" className="h-8 gap-1.5"><Download className="size-3.5" />Export</Button>
        {actions}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-muted-foreground">
            <tr>
              {columns.map(c => (
                <th key={String(c.key)} className={cn("text-left font-medium text-xs uppercase tracking-wider px-4 py-2.5", c.className)}>{c.header}</th>
              ))}
              <th className="w-10" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr key={i} className="border-t hover:bg-muted/30 transition-colors">
                {columns.map(c => (
                  <td key={String(c.key)} className={cn("px-4 py-3", c.className)}>
                    {c.render ? c.render(row) : String(row[c.key as keyof T] ?? "")}
                  </td>
                ))}
                <td className="px-2"><Button variant="ghost" size="icon" className="size-7"><MoreHorizontal className="size-4" /></Button></td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={columns.length + 1} className="text-center py-12 text-sm text-muted-foreground">No results found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between p-3 border-t text-xs text-muted-foreground">
        <span>{filtered.length} of {rows.length} records</span>
        <div className="flex gap-1">
          <Button variant="outline" size="sm" className="h-7">Prev</Button>
          <Button variant="outline" size="sm" className="h-7">Next</Button>
        </div>
      </div>
    </Card>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Paid: "bg-success/10 text-success border-success/20",
    Active: "bg-success/10 text-success border-success/20",
    Won: "bg-success/10 text-success border-success/20",
    Approved: "bg-success/10 text-success border-success/20",
    Delivered: "bg-success/10 text-success border-success/20",
    Resolved: "bg-success/10 text-success border-success/20",
    Hired: "bg-success/10 text-success border-success/20",
    "In Stock": "bg-success/10 text-success border-success/20",
    "On Track": "bg-success/10 text-success border-success/20",
    Done: "bg-success/10 text-success border-success/20",
    Open: "bg-info/10 text-info border-info/20",
    New: "bg-info/10 text-info border-info/20",
    Sent: "bg-info/10 text-info border-info/20",
    Confirmed: "bg-info/10 text-info border-info/20",
    Processing: "bg-info/10 text-info border-info/20",
    Qualified: "bg-info/10 text-info border-info/20",
    "In Progress": "bg-info/10 text-info border-info/20",
    Pending: "bg-warning/15 text-warning-foreground border-warning/30",
    Partial: "bg-warning/15 text-warning-foreground border-warning/30",
    "At Risk": "bg-warning/15 text-warning-foreground border-warning/30",
    "Low Stock": "bg-warning/15 text-warning-foreground border-warning/30",
    Review: "bg-warning/15 text-warning-foreground border-warning/30",
    Draft: "bg-muted text-muted-foreground border-border",
    Closed: "bg-muted text-muted-foreground border-border",
    Inactive: "bg-muted text-muted-foreground border-border",
    Todo: "bg-muted text-muted-foreground border-border",
    Overdue: "bg-destructive/10 text-destructive border-destructive/20",
    Delayed: "bg-destructive/10 text-destructive border-destructive/20",
    Rejected: "bg-destructive/10 text-destructive border-destructive/20",
    "Out of Stock": "bg-destructive/10 text-destructive border-destructive/20",
    Lost: "bg-destructive/10 text-destructive border-destructive/20",
    Refunded: "bg-muted text-muted-foreground border-border",
    Urgent: "bg-destructive/10 text-destructive border-destructive/20",
    High: "bg-warning/15 text-warning-foreground border-warning/30",
    Medium: "bg-info/10 text-info border-info/20",
    Low: "bg-muted text-muted-foreground border-border",
  };
  return <span className={cn("inline-flex items-center px-2 py-0.5 rounded-full border text-[11px] font-medium", map[status] ?? "bg-muted text-muted-foreground border-border")}>{status}</span>;
}
