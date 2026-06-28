import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard, Users, ShoppingCart, UserSquare2, Boxes, Package, ShoppingBag, Truck,
  Wallet, BookOpen, UsersRound, Clock, BadgeDollarSign, Briefcase, FolderKanban, ListChecks,
  LifeBuoy, FileText, BarChart3, PieChart, Settings, ChevronDown, ChevronRight, Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Item = { label: string; to: string; icon?: any };
type Group = { label: string; icon: any; items: Item[] };

const nav: Group[] = [
  { label: "Overview", icon: LayoutDashboard, items: [{ label: "Dashboard", to: "/app" }] },
  { label: "CRM", icon: Users, items: [
    { label: "Leads", to: "/crm/leads" },
    { label: "Contacts", to: "/crm/contacts" },
    { label: "Companies", to: "/crm/companies" },
    { label: "Deals", to: "/crm/deals" },
  ]},
  { label: "Sales", icon: ShoppingCart, items: [
    { label: "Sales Dashboard", to: "/sales" },
    { label: "Quotations", to: "/sales/quotations" },
    { label: "Sales Orders", to: "/sales/orders" },
    { label: "Invoices", to: "/sales/invoices" },
    { label: "Payments", to: "/sales/payments" },
  ]},
  { label: "Customers", icon: UserSquare2, items: [
    { label: "Customer List", to: "/customers" },
    { label: "Analytics", to: "/customers/analytics" },
    { label: "Activities", to: "/customers/activities" },
  ]},
  { label: "Inventory", icon: Boxes, items: [
    { label: "Inventory Dashboard", to: "/inventory" },
    { label: "Products", to: "/inventory/products" },
    { label: "Categories", to: "/inventory/categories" },
    { label: "Warehouses", to: "/inventory/warehouses" },
    { label: "Stock Movements", to: "/inventory/movements" },
  ]},
  { label: "Purchases", icon: ShoppingBag, items: [
    { label: "Purchase Requests", to: "/purchases/requests" },
    { label: "Purchase Orders", to: "/purchases/orders" },
    { label: "Vendors", to: "/purchases/vendors" },
    { label: "Vendor Analytics", to: "/purchases/analytics" },
  ]},
  { label: "Finance", icon: Wallet, items: [
    { label: "Accounts", to: "/finance/accounts" },
    { label: "Transactions", to: "/finance/transactions" },
    { label: "Budgets", to: "/finance/budgets" },
    { label: "Expenses", to: "/finance/expenses" },
    { label: "Income", to: "/finance/income" },
    { label: "Reports", to: "/finance/reports" },
  ]},
  { label: "Accounting", icon: BookOpen, items: [
    { label: "General Ledger", to: "/accounting/ledger" },
    { label: "Journal Entries", to: "/accounting/journal" },
    { label: "Trial Balance", to: "/accounting/trial-balance" },
    { label: "Balance Sheet", to: "/accounting/balance-sheet" },
    { label: "Profit & Loss", to: "/accounting/pnl" },
  ]},
  { label: "HR", icon: UsersRound, items: [
    { label: "Employees", to: "/hr/employees" },
    { label: "Departments", to: "/hr/departments" },
    { label: "Designations", to: "/hr/designations" },
    { label: "Leave", to: "/hr/leave" },
    { label: "Attendance", to: "/hr/attendance" },
    { label: "Payroll", to: "/hr/payroll" },
  ]},
  { label: "Recruitment", icon: BadgeDollarSign, items: [
    { label: "Job Openings", to: "/recruitment/jobs" },
    { label: "Candidates", to: "/recruitment/candidates" },
    { label: "Interviews", to: "/recruitment/interviews" },
    { label: "Pipeline", to: "/recruitment/pipeline" },
  ]},
  { label: "Projects", icon: FolderKanban, items: [
    { label: "Projects", to: "/projects" },
    { label: "Tasks", to: "/projects/tasks" },
    { label: "Kanban Board", to: "/projects/kanban" },
    { label: "Gantt Timeline", to: "/projects/gantt" },
    { label: "Team Allocation", to: "/projects/team" },
  ]},
  { label: "Helpdesk", icon: LifeBuoy, items: [
    { label: "Support Dashboard", to: "/helpdesk" },
    { label: "Tickets", to: "/helpdesk/tickets" },
    { label: "Knowledge Base", to: "/helpdesk/kb" },
  ]},
  { label: "Documents", icon: FileText, items: [
    { label: "Files", to: "/documents/files" },
    { label: "Folders", to: "/documents/folders" },
    { label: "Shared", to: "/documents/shared" },
    { label: "Recent Uploads", to: "/documents/recent" },
  ]},
  { label: "Reports", icon: BarChart3, items: [
    { label: "Sales Reports", to: "/reports/sales" },
    { label: "CRM Reports", to: "/reports/crm" },
    { label: "Inventory Reports", to: "/reports/inventory" },
    { label: "HR Reports", to: "/reports/hr" },
    { label: "Finance Reports", to: "/reports/finance" },
  ]},
  { label: "Analytics", icon: PieChart, items: [
    { label: "BI Dashboard", to: "/analytics" },
    { label: "Revenue", to: "/analytics/revenue" },
    { label: "Customers", to: "/analytics/customers" },
    { label: "Employees", to: "/analytics/employees" },
    { label: "Inventory", to: "/analytics/inventory" },
  ]},
  { label: "Settings", icon: Settings, items: [
    { label: "Company", to: "/settings/company" },
    { label: "Users", to: "/settings/users" },
    { label: "Roles & Permissions", to: "/settings/roles" },
    { label: "Notifications", to: "/settings/notifications" },
    { label: "Security", to: "/settings/security" },
    { label: "Integrations", to: "/settings/integrations" },
  ]},
];

export function AppSidebar({ collapsed }: { collapsed: boolean }) {
  const pathname = useRouterState({ select: s => s.location.pathname });
  const activeGroup = nav.findIndex(g => g.items.some(i => i.to === pathname || (i.to !== "/" && pathname.startsWith(i.to))));
  const [open, setOpen] = useState<Record<number, boolean>>(() => ({ [activeGroup === -1 ? 0 : activeGroup]: true }));

  return (
    <aside className={cn(
      "flex flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border h-screen sticky top-0 transition-all duration-200",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className={cn(
        "h-16 flex items-center border-b border-sidebar-border shrink-0",
        collapsed ? "justify-center px-0" : "gap-2 px-4"
      )}>
        <div className={cn(
          "rounded-md bg-sidebar-primary grid place-items-center text-sidebar-primary-foreground font-bold",
          collapsed ? "size-11" : "size-9"
        )}>
          <Sparkles className="size-5" />
        </div>
        {!collapsed && (
          <div className="leading-tight">
            <div className="font-semibold text-sm tracking-tight">Z ERP</div>
            <div className="text-[10px] text-sidebar-foreground/60 uppercase tracking-wider">Enterprise Suite</div>
          </div>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto py-2 px-2 space-y-0.5 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
        {nav.map((g, i) => {
          const isOpen = open[i];
          const Icon = g.icon;
          const hasActive = g.items.some(it => it.to === pathname || (it.to !== "/" && pathname.startsWith(it.to)));
          if (g.items.length === 1) {
            const it = g.items[0];
            const active = pathname === it.to;
            return (
              <Link key={g.label} to={it.to} title={collapsed ? g.label : undefined} className={cn(
                "flex items-center rounded-md text-sm font-medium transition-colors",
                collapsed ? "justify-center p-2.5" : "gap-3 px-3 py-2",
                active ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}>
                <Icon className={cn("shrink-0", collapsed ? "size-5" : "size-4")} />
                {!collapsed && <span>{g.label}</span>}
              </Link>
            );
          }
          return (
            <div key={g.label}>
              <button onClick={() => setOpen(o => ({ ...o, [i]: !o[i] }))} title={collapsed ? g.label : undefined} className={cn(
                "w-full flex items-center rounded-md text-sm font-medium transition-colors",
                collapsed ? "justify-center p-2.5" : "gap-3 px-3 py-2",
                hasActive ? "text-sidebar-primary-foreground bg-sidebar-accent" : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}>
                <Icon className={cn("shrink-0", collapsed ? "size-5" : "size-4")} />
                {!collapsed && <>
                  <span className="flex-1 text-left">{g.label}</span>
                  {isOpen ? <ChevronDown className="size-3.5" /> : <ChevronRight className="size-3.5" />}
                </>}
              </button>
              {!collapsed && isOpen && (
                <div className="ml-3 mt-0.5 pl-3 border-l border-sidebar-border/60 space-y-0.5">
                  {g.items.map(it => {
                    const active = pathname === it.to || (it.to !== "/" && pathname.startsWith(it.to));
                    return (
                      <Link key={it.to} to={it.to} className={cn(
                        "block px-3 py-1.5 rounded-md text-xs transition-colors",
                        active ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium" : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      )}>{it.label}</Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
      {!collapsed && (
        <div className="p-3 border-t border-sidebar-border text-[11px] text-sidebar-foreground/60">
          v3.4.1 • Z IT Solutions
        </div>
      )}
    </aside>
  );
}
