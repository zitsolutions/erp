import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { KpiCard } from "@/components/kpi-card";
import { Card } from "@/components/ui/card";
import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";
import { AreaChart, Area, LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";
import { revenueByMonth } from "@/lib/mock-data";

export const Route = createFileRoute("/analytics/")({
  head: () => ({ meta: [{ title: "BI Dashboard · Z ERP" }, { name: "description", content: "Business intelligence and analytics." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Business Intelligence" subtitle="Cross-functional metrics and trends." breadcrumbs={["Analytics","BI Dashboard"]}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard label="ARR" value="$5.14M" delta={22} icon={DollarSign} tone="primary" />
        <KpiCard label="Active Users" value="3,842" delta={8.4} icon={Users} tone="info" />
        <KpiCard label="MRR Growth" value="$48K" delta={14.2} icon={TrendingUp} tone="success" />
        <KpiCard label="LTV / CAC" value="4.2x" delta={6.1} icon={ShoppingCart} tone="warning" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="p-5">
          <div className="font-semibold mb-3">Revenue Trend</div>
          <div className="h-64">
            <ResponsiveContainer>
              <AreaChart data={revenueByMonth}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#1e3a8a" fill="#1e3a8a" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="p-5">
          <div className="font-semibold mb-3">Profit Margin</div>
          <div className="h-64">
            <ResponsiveContainer>
              <LineChart data={revenueByMonth}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="profit" stroke="#059669" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="p-5 lg:col-span-2">
          <div className="font-semibold mb-3">Expenses by Month</div>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={revenueByMonth}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="expenses" fill="#0891b2" radius={[6,6,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </ModulePage>
  );
}
