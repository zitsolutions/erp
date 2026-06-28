import {
  Users, ShoppingCart, Boxes, Wallet, BookOpen, UserSquare2, Briefcase, FolderKanban,
  LifeBuoy, FileText, BarChart3, Settings2, Truck, UserPlus, type LucideIcon,
} from "lucide-react";

export interface ModuleDef {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  features: string[];
  to: string;
}

export const MODULES: ModuleDef[] = [
  { slug: "crm", name: "CRM", icon: Users, tagline: "Win more, faster.",
    description: "A unified view of every lead, contact, and deal with pipeline automation that closes the loop.",
    features: ["Leads & contacts", "Deal pipeline", "Companies 360°", "Activity timeline"], to: "/app" },
  { slug: "sales", name: "Sales", icon: ShoppingCart, tagline: "Quote to cash, simplified.",
    description: "Quotations, orders, invoices, and payments — orchestrated end-to-end with real-time status.",
    features: ["Quotations", "Sales orders", "Invoicing", "Payments"], to: "/app" },
  { slug: "inventory", name: "Inventory", icon: Boxes, tagline: "Stock that moves with you.",
    description: "Multi-warehouse tracking with movements, categories, and live availability across channels.",
    features: ["Products & SKUs", "Warehouses", "Stock movements", "Reorder rules"], to: "/app" },
  { slug: "purchases", name: "Purchases", icon: Truck, tagline: "Procurement, controlled.",
    description: "Requests, vendors, and purchase orders with approval flows and spend analytics.",
    features: ["Vendors", "Purchase orders", "Requests", "Spend analytics"], to: "/app" },
  { slug: "finance", name: "Finance", icon: Wallet, tagline: "Cash flow, in focus.",
    description: "Income, expenses, budgets, transactions, and accounts — with reports leadership can act on.",
    features: ["Accounts", "Transactions", "Budgets", "Financial reports"], to: "/app" },
  { slug: "accounting", name: "Accounting", icon: BookOpen, tagline: "Books that balance themselves.",
    description: "General ledger, journals, trial balance, P&L, and balance sheet — audit-ready by default.",
    features: ["General ledger", "Journals", "P&L", "Balance sheet"], to: "/app" },
  { slug: "hr", name: "Human Resources", icon: UserSquare2, tagline: "People, organized.",
    description: "Employees, departments, attendance, leave, and payroll managed from one place.",
    features: ["Employees", "Attendance", "Leave", "Payroll"], to: "/app" },
  { slug: "recruitment", name: "Recruitment", icon: UserPlus, tagline: "Hire, on rails.",
    description: "Open jobs to first-day onboarding with a pipeline that keeps every candidate moving.",
    features: ["Jobs", "Candidates", "Pipeline", "Interviews"], to: "/app" },
  { slug: "projects", name: "Projects", icon: FolderKanban, tagline: "Deliver on time.",
    description: "Tasks, teams, Kanban, and Gantt — everything you need to ship work that ships revenue.",
    features: ["Tasks", "Kanban", "Gantt", "Team workload"], to: "/app" },
  { slug: "helpdesk", name: "Helpdesk", icon: LifeBuoy, tagline: "Support that scales.",
    description: "Ticketing and a connected knowledge base so your team resolves faster every quarter.",
    features: ["Tickets", "Knowledge base", "SLA tracking", "Customer 360"], to: "/app" },
  { slug: "documents", name: "Documents", icon: FileText, tagline: "One source of truth.",
    description: "Files, folders, sharing, and recent activity — searchable across every module.",
    features: ["Files & folders", "Shared with me", "Recent activity", "Versioning"], to: "/app" },
  { slug: "analytics", name: "Analytics", icon: BarChart3, tagline: "Decisions, sharper.",
    description: "Revenue, customers, inventory, and people analytics in one BI workspace.",
    features: ["Revenue dashboards", "Customer analytics", "Inventory KPIs", "Workforce trends"], to: "/app" },
  { slug: "reports", name: "Reports", icon: Briefcase, tagline: "The numbers, on demand.",
    description: "Pre-built reports across CRM, Sales, Finance, HR, and Inventory — export when you need to.",
    features: ["Sales reports", "Finance reports", "HR reports", "CRM reports"], to: "/app" },
  { slug: "settings", name: "Administration", icon: Settings2, tagline: "Configured to your shape.",
    description: "Company profile, users, roles, security, notifications, and integrations.",
    features: ["Users & roles", "Security", "Notifications", "Integrations"], to: "/app" },
];
