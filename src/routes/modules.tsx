import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MarketingLayout } from "@/components/marketing/marketing-layout";
import { MODULES } from "@/components/marketing/modules-data";
import operationsImg from "@/assets/modules-operations.jpg";

export const Route = createFileRoute("/modules")({
  component: ModulesPage,
  head: () => ({
    meta: [
      { title: "Modules · Z ERP" },
      { name: "description", content: "Every Z ERP module — CRM, Sales, Inventory, Purchases, Finance, Accounting, HR, Recruitment, Projects, Helpdesk, Documents, Analytics, Reports, Administration." },
      { property: "og:title", content: "Modules · Z ERP" },
      { property: "og:description", content: "Every Z ERP module, ready to switch on." },
      { property: "og:url", content: "/modules" },
    ],
    links: [{ rel: "canonical", href: "/modules" }],
  }),
});

// Curated per-module deep details (keyed by slug)
const DEEP: Record<string, { whyItMatters: string; metrics: Array<[string, string]>; integrations: string[]; workflow: string[] }> = {
  crm: {
    whyItMatters: "Pipeline visibility you can trust — every touchpoint, every email, every quote linked to the deal it advanced.",
    metrics: [["+27%", "win rate"], ["−40%", "lead response time"], ["360°", "customer view"]],
    integrations: ["Gmail", "Outlook", "LinkedIn", "Slack", "Calendly"],
    workflow: ["Lead captured", "Auto-routed to rep", "Qualified → Deal", "Quote sent", "Closed-won → Sales order"],
  },
  sales: {
    whyItMatters: "From the first quotation to the final receipt — one continuous record, no rekeying.",
    metrics: [["−38%", "quote-to-cash time"], ["3×", "faster invoicing"], ["98.6%", "invoice accuracy"]],
    integrations: ["Stripe", "Razorpay", "PayPal", "DocuSign", "Shopify"],
    workflow: ["Quotation", "Customer approval", "Sales order", "Fulfilment", "Invoice → Payment"],
  },
  inventory: {
    whyItMatters: "Know what you have, where it is, and when to reorder — before the floor stops moving.",
    metrics: [["99.4%", "stock accuracy"], ["−22%", "carrying cost"], ["<60s", "cycle count entry"]],
    integrations: ["Zebra scanners", "Honeywell", "Shopify", "Amazon FBA", "FedEx"],
    workflow: ["GRN", "Putaway", "Pick/pack", "Ship", "Auto-reorder"],
  },
  purchases: {
    whyItMatters: "Approvals that actually run on time, vendors who get paid on terms, spend you can defend in board meetings.",
    metrics: [["−54%", "PO cycle time"], ["+18%", "early-pay discounts"], ["100%", "audit trail"]],
    integrations: ["DocuSign", "Slack", "Email", "Bank feeds"],
    workflow: ["Request", "3-way match", "Approval chain", "PO issued", "Goods received → AP"],
  },
  finance: {
    whyItMatters: "A live cash picture and budgets that update themselves as the business spends.",
    metrics: [["Daily", "cash position"], ["−6 days", "close cycle"], ["100+", "report templates"]],
    integrations: ["Plaid", "Stripe", "Bank feeds", "Tally", "QuickBooks"],
    workflow: ["Categorize transactions", "Budget vs actual", "Forecast", "Approve", "Report"],
  },
  accounting: {
    whyItMatters: "Audit-ready books without the audit-week scramble — journals, ledgers, and statements always in sync.",
    metrics: [["−7 days", "month-end close"], ["0", "manual journals"], ["IFRS/GAAP", "compliant"]],
    integrations: ["Xero", "QuickBooks", "Tally", "Avalara"],
    workflow: ["Sub-ledger posts", "Auto journal", "Reconcile", "Trial balance", "Statements"],
  },
  hr: {
    whyItMatters: "From hire to retire on one record — payroll never disagrees with attendance, leave never breaks a deadline.",
    metrics: [["100%", "payroll accuracy"], ["−65%", "leave admin"], ["1 click", "salary slips"]],
    integrations: ["Slack", "Google Workspace", "Biometrics", "Bank payroll"],
    workflow: ["Onboard", "Track attendance", "Process leave", "Run payroll", "Off-board"],
  },
  recruitment: {
    whyItMatters: "Every candidate moves. Every interview gets feedback. Every hire becomes an employee record automatically.",
    metrics: [["−31%", "time-to-hire"], ["+44%", "candidate NPS"], ["1", "click to hire"]],
    integrations: ["LinkedIn", "Naukri", "Indeed", "Google Calendar"],
    workflow: ["Job opened", "Source", "Screen", "Interview", "Offer → Employee record"],
  },
  projects: {
    whyItMatters: "Ship work that ships revenue — projects connected to deals, time, costs, and invoices.",
    metrics: [["+22%", "on-time delivery"], ["Live", "burn-down"], ["1", "true status"]],
    integrations: ["Slack", "Google Drive", "Figma", "GitHub"],
    workflow: ["Plan", "Assign", "Track", "Bill", "Close"],
  },
  helpdesk: {
    whyItMatters: "Tickets resolve faster when the agent already knows the customer, the product, and the order.",
    metrics: [["−47%", "first-response"], ["+19", "CSAT pts"], ["24×7", "automation"]],
    integrations: ["Email", "Slack", "WhatsApp", "Zendesk import"],
    workflow: ["Ticket created", "Auto-tagged", "Routed", "Resolved", "Surveyed"],
  },
  documents: {
    whyItMatters: "One searchable archive across every contract, design, and policy — versioned and access-controlled.",
    metrics: [["Unlimited", "versions"], ["Per-folder", "ACLs"], ["Native", "search"]],
    integrations: ["Google Drive", "OneDrive", "Dropbox", "S3"],
    workflow: ["Upload", "Tag", "Share", "Approve", "Archive"],
  },
  analytics: {
    whyItMatters: "Self-serve answers across revenue, ops, inventory, and people — no BI team required.",
    metrics: [["120+", "ready dashboards"], ["NL queries", "via AI"], ["Sub-sec", "drill-down"]],
    integrations: ["Snowflake", "BigQuery", "Looker", "PowerBI"],
    workflow: ["Pick a question", "Choose a slice", "Drill", "Share", "Schedule"],
  },
  reports: {
    whyItMatters: "Pre-built reports for every team — sales, finance, HR, inventory, ops — exportable, schedulable, audit-friendly.",
    metrics: [["100+", "templates"], ["Excel/PDF", "exports"], ["Scheduled", "email"]],
    integrations: ["Email", "Slack", "Drive", "S3"],
    workflow: ["Pick template", "Filter", "Preview", "Export", "Schedule"],
  },
  settings: {
    whyItMatters: "Configure to your shape — orgs, roles, integrations, and notifications — without a single line of code.",
    metrics: [["No-code", "config"], ["SSO/SCIM", "ready"], ["Per-role", "branding"]],
    integrations: ["Okta", "Azure AD", "Google", "JumpCloud"],
    workflow: ["Configure org", "Add users", "Define roles", "Connect SSO", "Brand"],
  },
};

function ModulesPage() {
  return (
    <MarketingLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60 bg-[oklch(0.18_0.04_250)] text-white">
        <img src={operationsImg} alt="" aria-hidden width={1600} height={900} className="absolute inset-0 size-full object-cover opacity-25" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.04_250)]/60 via-[oklch(0.18_0.04_250)]/80 to-[oklch(0.18_0.04_250)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">14 Modules · 1 Platform</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">Every function. One platform.</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">Turn on what you need today. Add more as you grow. One customer, one product, one ledger across all of it — and one assistant that knows them all.</p>
          </div>
          {/* Quick-jump nav */}
          <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-2">
            {MODULES.map((m) => (
              <a key={m.slug} href={`#${m.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur transition-colors hover:border-cyan-300/50 hover:bg-white/10 hover:text-white">
                <m.icon className="size-3.5" /> {m.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP MODULE SECTIONS — alternating zigzag */}
      <div className="divide-y divide-border/60">
        {MODULES.map((m, i) => {
          const deep = DEEP[m.slug];
          const flipped = i % 2 === 1;
          return (
            <section key={m.slug} id={m.slug} className={`scroll-mt-20 ${flipped ? "bg-muted/20" : ""} py-20`}>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`grid gap-12 lg:grid-cols-2 lg:items-start ${flipped ? "lg:[&>div:first-child]:order-2" : ""}`}>
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-info">
                      <m.icon className="size-3.5" /> Module {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2 className="mt-5 text-4xl font-bold tracking-tight">{m.name}</h2>
                    <p className="mt-2 text-lg font-medium text-info">{m.tagline}</p>
                    <p className="mt-5 text-muted-foreground">{m.description}</p>
                    {deep && <p className="mt-3 text-muted-foreground">{deep.whyItMatters}</p>}

                    {/* Metrics row */}
                    {deep && (
                      <div className="mt-7 grid grid-cols-3 gap-3">
                        {deep.metrics.map(([v, l]) => (
                          <div key={l} className="rounded-xl border border-border/60 bg-background p-4">
                            <div className="bg-gradient-to-r from-primary to-info bg-clip-text text-2xl font-bold tracking-tight text-transparent">{v}</div>
                            <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{l}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <Button asChild variant="outline" className="mt-8 gap-1.5">
                      <Link to={m.to}>Open {m.name} in app <ArrowRight className="size-4" /></Link>
                    </Button>
                  </div>

                  <div className="space-y-5">
                    {/* Features list — not a box-of-boxes */}
                    <div className="rounded-2xl border border-border/60 bg-background p-7">
                      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Inside this module</div>
                      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                        {m.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm">
                            <Check className="mt-0.5 size-4 shrink-0 text-success" /><span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Workflow row */}
                    {deep && (
                      <div className="rounded-2xl border border-border/60 bg-background p-7">
                        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">A typical workflow</div>
                        <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-3 text-sm">
                          {deep.workflow.map((step, k) => (
                            <li key={step} className="flex items-center gap-2">
                              <span className="grid size-6 place-items-center rounded-full bg-gradient-to-br from-primary to-info text-[10px] font-bold text-primary-foreground">{k + 1}</span>
                              <span className="font-medium">{step}</span>
                              {k < deep.workflow.length - 1 && <ArrowRight className="size-3.5 text-muted-foreground" />}
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {/* Integrations */}
                    {deep && (
                      <div className="rounded-2xl border border-border/60 bg-background p-7">
                        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Native integrations</div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {deep.integrations.map((x) => (
                            <span key={x} className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium">{x}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="border-t border-border/60 py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <Sparkles className="size-10 text-info" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">All modules. One subscription.</h2>
          <p className="max-w-xl text-muted-foreground">No per-module gotchas. Every plan includes the full platform — the AI assistant, every integration, and every report.</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-1.5 bg-gradient-to-r from-primary to-info"><Link to="/auth">Start free trial <ArrowRight className="size-4" /></Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/pricing">View pricing</Link></Button>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
