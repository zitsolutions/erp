import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { KpiCard } from "@/components/kpi-card";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/data-table";
import {
  DollarSign, TrendingUp, Receipt, Users, UserPlus, UsersRound, Package, LifeBuoy,
  Plus, FileText, ShoppingCart, UserCog, Calendar,
} from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer,
  XAxis, YAxis, Tooltip, CartesianGrid,
} from "recharts";
import { kpis, revenueByMonth, salesByCategory, recentActivities, recentTransactions } from "@/lib/mock-data";

export const Route = createFileRoute("/app")({
  head: () => ({ meta: [{ title: "Dashboard · Z ERP" }, { name: "description", content: "Executive overview of revenue, sales, customers and operations." }] }),
  component: Dashboard,
});

const fmt = (n: number) => n >= 1_000_000 ? `$${(n/1_000_000).toFixed(2)}M` : n >= 1000 ? `$${(n/1000).toFixed(1)}K` : `$${n}`;
const COLORS = ["#1e3a8a", "#2563eb", "#0891b2", "#059669", "#d97706"];

function Dashboard() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Executive Dashboard"
        subtitle="Welcome back, Sarah. Here's what's happening across Z IT Solutions today."
        breadcrumbs={["Home", "Dashboard"]}
        actions={<>
          <Button variant="outline" size="sm">Last 30 days</Button>
          <Button size="sm" className="gap-1.5"><Plus className="size-4" />New Report</Button>
        </>}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard label="Total Revenue" value={fmt(kpis.revenue)} delta={12.4} icon={DollarSign} tone="primary" />
        <KpiCard label="Net Profit" value={fmt(kpis.profit)} delta={8.2} icon={TrendingUp} tone="success" />
        <KpiCard label="Expenses" value={fmt(kpis.expenses)} delta={-3.1} icon={Receipt} tone="warning" />
        <KpiCard label="Customers" value={kpis.customers.toLocaleString()} delta={5.6} icon={Users} tone="info" />
        <KpiCard label="Active Leads" value={kpis.leads.toString()} delta={18.0} icon={UserPlus} tone="info" />
        <KpiCard label="Employees" value={kpis.employees.toString()} delta={2.1} icon={UsersRound} tone="primary" />
        <KpiCard label="Products" value={kpis.products.toString()} delta={0.8} icon={Package} tone="primary" />
        <KpiCard label="Open Tickets" value={kpis.openTickets.toString()} delta={-12.0} icon={LifeBuoy} tone="destructive" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-semibold">Revenue vs Expenses</div>
              <div className="text-xs text-muted-foreground">Monthly performance · {new Date().getFullYear()}</div>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-primary" />Revenue</span>
              <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-info" />Expenses</span>
              <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-success" />Profit</span>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer>
              <AreaChart data={revenueByMonth} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="exp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0891b2" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#0891b2" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v/1000}k`} />
                <Tooltip formatter={((v: any) => fmt(Number(v))) as any} />
                <Area type="monotone" dataKey="revenue" stroke="#1e3a8a" strokeWidth={2} fill="url(#rev)" />
                <Area type="monotone" dataKey="expenses" stroke="#0891b2" strokeWidth={2} fill="url(#exp)" />
                <Area type="monotone" dataKey="profit" stroke="#059669" strokeWidth={2} fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-5">
          <div className="mb-4">
            <div className="font-semibold">Sales by Category</div>
            <div className="text-xs text-muted-foreground">Current quarter</div>
          </div>
          <div className="h-56">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={salesByCategory} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={85} paddingAngle={2}>
                  {salesByCategory.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip formatter={((v: any) => fmt(Number(v))) as any} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-1.5 mt-3">
            {salesByCategory.map((s, i) => (
              <div key={s.name} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2"><span className="size-2.5 rounded-sm" style={{ background: COLORS[i] }} />{s.name}</span>
                <span className="font-medium">{fmt(s.value)}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="p-5">
          <div className="font-semibold mb-3">Sales Pipeline</div>
          <div className="h-56">
            <ResponsiveContainer>
              <BarChart data={[
                { stage: "Lead In", value: 142 },
                { stage: "Qualified", value: 96 },
                { stage: "Proposal", value: 68 },
                { stage: "Negotiation", value: 41 },
                { stage: "Won", value: 28 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="stage" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#1e3a8a" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <div className="font-semibold">Recent Activity</div>
            <Button variant="ghost" size="sm" className="text-xs">View all</Button>
          </div>
          <div className="space-y-3">
            {recentActivities.map((a, i) => (
              <div key={i} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
                <div className="size-8 rounded-full bg-muted grid place-items-center text-xs font-semibold">{a.who.split(" ").map(s=>s[0]).join("").slice(0,2)}</div>
                <div className="flex-1 text-sm">
                  <span className="font-medium">{a.who}</span>
                  <span className="text-muted-foreground"> {a.what} </span>
                  <span className="font-medium">{a.obj}</span>
                </div>
                <div className="text-xs text-muted-foreground">{a.when}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <div className="font-semibold">Recent Transactions</div>
            <Button variant="ghost" size="sm" className="text-xs">View all</Button>
          </div>
          <table className="w-full text-sm">
            <thead className="text-xs uppercase text-muted-foreground">
              <tr className="border-b"><th className="text-left py-2">ID</th><th className="text-left">Party</th><th className="text-left">Type</th><th className="text-right">Amount</th><th className="text-left pl-3">Status</th></tr>
            </thead>
            <tbody>
              {recentTransactions.map(t => (
                <tr key={t.id} className="border-b last:border-0">
                  <td className="py-2.5 font-mono text-xs">{t.id}</td>
                  <td>{t.party}</td>
                  <td className="text-muted-foreground">{t.type}</td>
                  <td className="text-right font-medium">{fmt(t.amount)}</td>
                  <td className="pl-3"><StatusBadge status={t.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <div className="space-y-4">
          <Card className="p-5">
            <div className="font-semibold mb-3">Quick Actions</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "New Invoice", icon: FileText },
                { label: "New Order", icon: ShoppingCart },
                { label: "Add Customer", icon: UserPlus },
                { label: "Add Employee", icon: UserCog },
              ].map(a => (
                <Button key={a.label} variant="outline" className="h-auto flex-col gap-1.5 py-3"><a.icon className="size-4" /><span className="text-xs">{a.label}</span></Button>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold flex items-center gap-2"><Calendar className="size-4" />June 2026</div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {["S","M","T","W","T","F","S"].map(d => <div key={d} className="text-muted-foreground font-medium py-1">{d}</div>)}
              {Array.from({ length: 30 }).map((_, i) => {
                const day = i + 1;
                const today = day === 22;
                const hasEvent = [3, 9, 14, 22, 27].includes(day);
                return (
                  <div key={i} className={`aspect-square grid place-items-center rounded-md ${today ? "bg-primary text-primary-foreground font-semibold" : hasEvent ? "bg-info/10 text-info font-medium" : "hover:bg-muted"}`}>{day}</div>
                );
              })}
            </div>
            <div className="mt-3 pt-3 border-t text-xs space-y-1.5">
              <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-info" /><span className="text-muted-foreground">Today:</span> Quarterly review · 3:00 PM</div>
              <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-warning" /><span className="text-muted-foreground">Jun 27:</span> Payroll cutoff</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
