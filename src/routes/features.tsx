import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck, Workflow, BarChart3, Sparkles, Globe2, Layers, Lock, Cloud, Smartphone,
  ArrowRight, Check, Zap, Database, GitBranch, Bell, Search, Eye, KeyRound, FileLock2,
  Server, Languages, Plug, LineChart, Bot, Webhook, ScrollText, AlarmClock, Network,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MarketingLayout } from "@/components/marketing/marketing-layout";
import networkImg from "@/assets/features-network.jpg";

export const Route = createFileRoute("/features")({
  component: FeaturesPage,
  head: () => ({
    meta: [
      { title: "Features · Z ERP" },
      { name: "description", content: "Unified data, real-time analytics, role-based access, automations and an AI assistant — the cross-cutting capabilities behind Z ERP." },
      { property: "og:title", content: "Features · Z ERP" },
      { property: "og:description", content: "The cross-cutting capabilities behind Z ERP — unified data, automations, analytics, AI." },
      { property: "og:url", content: "/features" },
    ],
    links: [{ rel: "canonical", href: "/features" }],
  }),
});

const deepFeatures = [
  {
    icon: Layers,
    eyebrow: "Foundation",
    title: "One unified data model",
    body: "Customers, products, vendors, employees, and ledger entries live in one canonical schema — referenced by every module, every workflow, every report.",
    bullets: [
      "Single customer record shared across CRM, Sales, Helpdesk, Finance",
      "Product catalog with SKUs, variants, costs, prices, and stock in one place",
      "Cross-module audit trail — see the journey of any record",
      "No nightly syncs, no integration middleware, no duplicate IDs",
    ],
    stat: { value: "1", label: "source of truth, not 7" },
  },
  {
    icon: Workflow,
    eyebrow: "Automation",
    title: "Workflows that run themselves",
    body: "A visual rules engine triggers approvals, notifications, reorders, and journal entries — so your team stops chasing paperwork and starts shipping outcomes.",
    bullets: [
      "Drag-and-drop trigger → condition → action builder",
      "1,200+ pre-built triggers across every module",
      "Multi-step approval chains with delegation and SLAs",
      "Webhooks in and out for anything not yet supported",
    ],
    stat: { value: "62%", label: "fewer manual touches on quote-to-cash" },
  },
  {
    icon: Sparkles,
    eyebrow: "Intelligence",
    title: "An AI assistant that knows your business",
    body: "Ask in plain language — 'how is North-region revenue tracking vs target?' — and get a chart, the underlying records, and the next action you should take.",
    bullets: [
      "Grounded on your own company data, not the public internet",
      "Cites the records and reports behind every answer",
      "Drafts emails, quotations, and tickets from your tone of voice",
      "Per-role access — the assistant only sees what the user can see",
    ],
    stat: { value: "8 hrs", label: "saved per power user, every week" },
  },
];

const platformPillars = [
  { icon: BarChart3, title: "Real-time analytics", body: "Streaming dashboards across revenue, ops, inventory, and people. Drill into any number, anywhere." },
  { icon: ShieldCheck, title: "Granular permissions", body: "Per-module, per-record, per-field access with delegations and time-bound roles." },
  { icon: Globe2, title: "Multi-entity & multi-currency", body: "Run subsidiaries across countries with the right tax rules, currency, and consolidation — automatically." },
  { icon: Cloud, title: "Cloud-native delivery", body: "Zero-downtime releases every two weeks. No upgrade projects, no version sprawl." },
  { icon: Smartphone, title: "Mobile-first interfaces", body: "Approve a PO from the airport. Scan a pallet on the warehouse floor. Sign a quote from a cab." },
  { icon: Lock, title: "Enterprise security", body: "SSO, MFA, SCIM, IP allow-lists, encryption at rest & in transit, and regional data residency." },
  { icon: Languages, title: "21 languages, 70 currencies", body: "Localized UI, number/date formats, and tax engines built into the platform — not an add-on." },
  { icon: Plug, title: "Open by default", body: "REST and GraphQL APIs, native webhooks, and a CLI for everything you can click in the UI." },
  { icon: Webhook, title: "Event-driven core", body: "Every record change emits an event. Subscribe from inside Z ERP or from your own systems." },
];

const security = [
  { icon: KeyRound, title: "SSO & SCIM", body: "SAML 2.0, OIDC, and SCIM provisioning with Okta, Azure AD, Google, JumpCloud." },
  { icon: FileLock2, title: "Encryption everywhere", body: "AES-256 at rest, TLS 1.3 in transit. Per-tenant encryption keys on Enterprise." },
  { icon: Server, title: "Regional residency", body: "Pin your data to US, EU, India, or APAC. No cross-region replication unless you ask." },
  { icon: ScrollText, title: "Audit log", body: "Every read, write, and admin action is recorded. Export to your SIEM with one click." },
  { icon: Eye, title: "Anomaly detection", body: "Built-in detection for unusual logins, mass exports, and privilege escalations." },
  { icon: AlarmClock, title: "99.95% uptime SLA", body: "Multi-region active-active with sub-minute failover. Status page in real time." },
];

const integrations = [
  "Slack", "Microsoft Teams", "Google Workspace", "Microsoft 365", "Salesforce", "HubSpot",
  "QuickBooks", "Xero", "Stripe", "PayPal", "Razorpay", "Shopify",
  "Amazon", "FedEx", "DHL", "Twilio", "Mailchimp", "Zapier",
];

const aiCapabilities = [
  { icon: Bot, label: "Natural-language queries" },
  { icon: LineChart, label: "Forecasting & anomaly alerts" },
  { icon: GitBranch, label: "Workflow generation" },
  { icon: ScrollText, label: "Document understanding" },
  { icon: Search, label: "Cross-module search" },
  { icon: Bell, label: "Smart notifications" },
];

const comparison: Array<[string, string, string, string]> = [
  ["Single data model", "Yes", "No — connectors", "No — connectors"],
  ["AI assistant grounded on your data", "Native", "Add-on", "Marketplace app"],
  ["Modules included", "14 (all)", "Per-module pricing", "Per-module pricing"],
  ["Time-to-go-live", "2–6 weeks", "3–6 months", "6–18 months"],
  ["Upgrade cycle", "Continuous", "Quarterly", "Annual project"],
  ["Mobile-first UX", "Yes", "Partial", "Limited"],
];

function FeaturesPage() {
  return (
    <MarketingLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60 bg-[oklch(0.18_0.04_250)] text-white">
        <img src={networkImg} alt="" aria-hidden width={1600} height={900} className="absolute inset-0 size-full object-cover opacity-40" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.04_250)]/40 via-[oklch(0.18_0.04_250)]/70 to-[oklch(0.18_0.04_250)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">The platform</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">Built for the way real businesses run.</h1>
            <p className="mt-5 text-lg text-white/75">Z ERP isn't a bundle of disconnected apps. It's one platform — one data model, one permission system, one analytics layer, one assistant — for every team in your company.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur md:grid-cols-4">
            {[["14", "Modules"], ["1,200+", "Automations"], ["70", "Currencies"], ["99.95%", "Uptime SLA"]].map(([v, l]) => (
              <div key={l} className="bg-[oklch(0.18_0.04_250)]/40 px-6 py-6 text-center">
                <div className="text-3xl font-bold tracking-tight">{v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP DIVES — alternating zigzag, not boxes */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-info">What sets Z ERP apart</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Three foundations. Everything else builds on top.</h2>
          </div>
          <div className="mt-20 space-y-28">
            {deepFeatures.map((f, i) => (
              <div key={f.title} className={`grid gap-12 lg:grid-cols-2 lg:items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-info">
                    <f.icon className="size-3.5" /> {f.eyebrow}
                  </div>
                  <h3 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">{f.title}</h3>
                  <p className="mt-4 text-lg text-muted-foreground">{f.body}</p>
                  <ul className="mt-6 space-y-3">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm"><Check className="mt-0.5 size-5 shrink-0 text-success" /><span>{b}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-info/15 to-transparent blur-2xl" />
                  <Card className="overflow-hidden border-border/60 p-0 shadow-xl">
                    <div className="flex items-center gap-1.5 border-b border-border/60 bg-muted/40 px-4 py-2.5">
                      <span className="size-2.5 rounded-full bg-destructive/60" />
                      <span className="size-2.5 rounded-full bg-warning/60" />
                      <span className="size-2.5 rounded-full bg-success/60" />
                      <span className="ml-3 text-xs font-mono text-muted-foreground">{f.title.toLowerCase().replace(/[^a-z]/g, "-")}</span>
                    </div>
                    <div className="grid gap-4 bg-gradient-to-br from-muted/30 to-background p-8">
                      <div className="rounded-lg border border-border/60 bg-background p-5">
                        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{f.stat.label}</div>
                        <div className="mt-2 bg-gradient-to-r from-primary to-info bg-clip-text text-6xl font-extrabold tracking-tight text-transparent">{f.stat.value}</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[0, 1, 2].map((k) => (
                          <div key={k} className="rounded-md border border-border/60 bg-background p-3">
                            <div className="h-1.5 rounded-full bg-muted">
                              <div className="h-full rounded-full bg-gradient-to-r from-primary to-info" style={{ width: `${30 + k * 25}%` }} />
                            </div>
                            <div className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">Metric {k + 1}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI STRIP */}
      <section className="border-y border-border/60 bg-gradient-to-br from-primary/10 via-info/5 to-transparent py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-info">AI everywhere</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Six things the assistant can do today.</h2>
              <p className="mt-4 text-muted-foreground">The assistant ships on every plan — including Starter. It learns from your data, respects your permissions, and never trains on your tenant.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {aiCapabilities.map((c) => (
                <div key={c.label} className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/80 px-4 py-3.5 backdrop-blur">
                  <div className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-info text-primary-foreground"><c.icon className="size-4" /></div>
                  <div className="text-sm font-semibold">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM PILLARS — denser, not big boxes */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-info">Platform pillars</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Nine more capabilities baked into the core.</h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">Every pillar is available on every plan. No add-on packs, no per-module pricing, no "Enterprise edition" gotchas.</p>
          </div>
          <div className="mt-12 divide-y divide-border/60 overflow-hidden rounded-2xl border border-border/60 bg-background sm:divide-y-0">
            <div className="grid sm:grid-cols-2 sm:divide-x sm:divide-border/60 lg:grid-cols-3">
              {platformPillars.map((p) => (
                <div key={p.title} className="group flex gap-4 border-border/60 p-7 not-first:border-t sm:[&:nth-child(n+3)]:border-t sm:[&:nth-child(-n+2)]:border-t-0 lg:[&:nth-child(n+4)]:border-t lg:[&:nth-child(-n+3)]:border-t-0">
                  <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-muted text-primary transition-colors group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-info group-hover:text-primary-foreground">
                    <p.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="border-t border-border/60 bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-info">Security & trust</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Enterprise-grade. From day one, on every plan.</h2>
            <p className="mt-4 text-muted-foreground">SOC 2 Type II, ISO 27001, GDPR, HIPAA-ready, and a security team you can actually talk to.</p>
          </div>
          <div className="mt-14 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {security.map((s) => (
              <div key={s.title} className="flex gap-4 border-l-2 border-info/40 pl-5">
                <s.icon className="mt-0.5 size-5 shrink-0 text-info" />
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA-ready", "PCI DSS", "CCPA"].map((b) => (
              <span key={b} className="rounded-full border border-border bg-background px-4 py-1.5">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-info">
                <Network className="size-3.5" /> Integrations
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Plays well with the tools you already use.</h2>
              <p className="mt-4 text-muted-foreground">180+ native integrations across communication, accounting, payments, shipping, marketing, and identity. Plus a fully documented REST + GraphQL API for everything else.</p>
              <Button asChild variant="outline" className="mt-6 gap-1.5"><Link to="/modules">See all modules <ArrowRight className="size-4" /></Link></Button>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {integrations.map((name) => (
                <div key={name} className="grid h-16 place-items-center rounded-xl border border-border/60 bg-background px-3 text-center text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="border-t border-border/60 bg-muted/30 py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-info">How we compare</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Z ERP vs. legacy ERPs</h2>
          </div>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border/60 bg-background">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/50 text-xs uppercase tracking-widest text-muted-foreground">
                <tr>
                  <th className="px-6 py-4 font-semibold">Capability</th>
                  <th className="px-6 py-4 font-semibold text-primary">Z ERP</th>
                  <th className="px-6 py-4 font-semibold">Cloud Suite A</th>
                  <th className="px-6 py-4 font-semibold">Legacy ERP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {comparison.map((row) => (
                  <tr key={row[0]}>
                    <td className="px-6 py-4 font-medium">{row[0]}</td>
                    <td className="px-6 py-4 font-semibold text-foreground">{row[1]}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row[2]}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PERF METRICS BAND */}
      <section className="bg-gradient-to-br from-primary to-info py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr] lg:items-center">
            <div>
              <Zap className="size-8" />
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Engineered for speed.</h2>
              <p className="mt-3 max-w-md text-primary-foreground/80">Our P95 dashboard load is sub-second on tenants with 10M records. We obsess over the inner loop because your team uses Z ERP all day.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[["<350ms", "P95 read"], ["<1.2s", "Dashboard load"], ["10M+", "Records / tenant"], ["28", "Global edges"]].map(([v, l]) => (
                <div key={l} className="rounded-xl bg-white/10 px-5 py-6 backdrop-blur">
                  <div className="text-3xl font-bold">{v}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/70">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <Database className="size-10 text-info" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">See it on your data.</h2>
          <p className="max-w-xl text-muted-foreground">Spin up a free workspace and import your customers, products, and ledger in minutes. Our concierge team will help you map fields, model entities, and go live in two to six weeks.</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-1.5 bg-gradient-to-r from-primary to-info"><Link to="/auth">Start free trial <ArrowRight className="size-4" /></Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/modules">Browse modules</Link></Button>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
