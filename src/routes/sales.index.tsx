import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { KpiCard } from "@/components/kpi-card";
import { Card } from "@/components/ui/card";
import { DollarSign, ShoppingCart, FileText, TrendingUp } from "lucide-react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { revenueByMonth } from "@/lib/mock-data";

export const Route = createFileRoute("/sales/")({
  head: () => ({ meta: [{ title: "Sales Dashboard · Z ERP" }, { name: "description", content: "Sales performance overview." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Sales Dashboard" subtitle="Real-time sales performance across teams." breadcrumbs={["Sales","Dashboard"]}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard label="MTD Revenue" value="$428K" delta={12.4} icon={DollarSign} tone="primary" />
        <KpiCard label="Orders" value="184" delta={8.1} icon={ShoppingCart} tone="info" />
        <KpiCard label="Quotes Sent" value="62" delta={-2.4} icon={FileText} tone="warning" />
        <KpiCard label="Win Rate" value="38.4%" delta={5.6} icon={TrendingUp} tone="success" />
      </div>
      <Card className="p-5">
        <div className="font-semibold mb-4">Monthly Revenue</div>
        <div className="h-80">
          <ResponsiveContainer>
            <BarChart data={revenueByMonth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `$${v/1000}k`} />
              <Tooltip />
              <Bar dataKey="revenue" fill="#1e3a8a" radius={[6,6,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </ModulePage>
  );
}
