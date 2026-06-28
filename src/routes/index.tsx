import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Zap, Layers, BarChart3, Globe2,
  Quote, Factory, Building2, Stethoscope, GraduationCap, ShoppingBag, Truck, Plug,
  Workflow, Database, Bot, LineChart, Network, Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MarketingLayout } from "@/components/marketing/marketing-layout";
import { MODULES } from "@/components/marketing/modules-data";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import operationsImg from "@/assets/modules-operations.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Z ERP — A new era of enterprise software" },
      { name: "description", content: "Run your entire business on one unified platform. CRM, Sales, Inventory, Finance, HR, Projects — orchestrated for the modern enterprise." },
      { property: "og:title", content: "Z ERP — A new era of enterprise software" },
      { property: "og:description", content: "Run your entire business on one unified platform. CRM, Sales, Inventory, Finance, HR, Projects." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const trusted = ["Northwind Co.", "Acme Corp", "Globex", "Initech", "Umbrella", "Hooli"];

const valueProps = [
  { icon: Layers, title: "Enterprise sophistication. For everyone.", body: "From a garage startup to a 10,000-seat enterprise — Z ERP fits the way you actually operate.", bullets: ["No per-module pricing", "No upgrade projects", "Zero rip-and-replace"] },
  { icon: Zap, title: "Futuristic. Easy to learn.", body: "Modern interfaces, built-in automation, and an AI assistant that knows your business.", bullets: ["Onboard in days, not quarters", "Mobile-first across every module", "Keyboard-first power users"] },
  { icon: Globe2, title: "Unified. Modular.", body: "14 deeply-integrated modules. Turn on what you need, scale as you grow — one data model.", bullets: ["One customer 360°", "One product catalog", "One ledger"] },
];

const workflow = [
  { icon: Database, title: "1 · Capture", body: "Leads, vendor invoices, support tickets, time entries — captured into a single canonical record." },
  { icon: Workflow, title: "2 · Orchestrate", body: "Trigger-based workflows route, approve, escalate, and post entries — automatically." },
  { icon: Bot, title: "3 · Assist", body: "The AI assistant drafts replies, summarises threads, and surfaces what needs attention next." },
  { icon: LineChart, title: "4 · Decide", body: "Live dashboards turn the operational record into board-ready answers — drilldown to the row." },
];

const industries = [
  { icon: Factory, name: "Manufacturing", body: "BOMs, work orders, inventory, and shop-floor scheduling — connected to finance from day one." },
  { icon: ShoppingBag, name: "Retail & D2C", body: "Omnichannel orders, returns, loyalty, and gift cards on a single customer record." },
  { icon: Truck, name: "Distribution", body: "Multi-warehouse stock, route planning, and B2B portals with real-time availability." },
  { icon: Stethoscope, name: "Healthcare", body: "HIPAA-ready records, vendor procurement, and HR — with full audit trails." },
  { icon: GraduationCap, name: "Education", body: "Student CRM, finance, HR, and operations on one platform — academic-calendar aware." },
  { icon: Building2, name: "Professional services", body: "Projects, time, billing, and revenue recognition — connected end to end." },
];

const integrations = ["Slack", "MS Teams", "Stripe", "QuickBooks", "Salesforce", "Shopify", "Twilio", "Mailchimp", "DocuSign", "Okta", "Google", "Microsoft"];

const platformFeatures = [
  { icon: ShieldCheck, title: "Secure & compliant", body: "Role-based access, audit trails, SOC 2 controls, and EU/US/IN data residency." },
  { icon: BarChart3, title: "Real-time analytics", body: "Live dashboards across revenue, operations, inventory, and people — drill to the row." },
  { icon: Sparkles, title: "AI assistant built-in", body: "A chat assistant that answers questions about your company data — instantly, with citations." },
  { icon: Plug, title: "180+ integrations", body: "Communication, payments, shipping, identity — connect what you already use." },
  { icon: Network, title: "Open APIs", body: "REST + GraphQL + webhooks for everything you can click in the UI. No black boxes." },
  { icon: Award, title: "Recognized", body: "Forbes Cloud 100 · Gartner Visionary · G2 Best Software 2025." },
];

const testimonials = [
  { quote: "We replaced four disconnected tools with Z ERP in 90 days. Quote-to-cash dropped 38%, and finance closes the month a week earlier.", name: "Sarah Mitchell", role: "COO, Northwind Co." },
  { quote: "The AI assistant alone saves my team a full day every week — and the rest of the platform is just as good.", name: "Daniel Park", role: "VP Operations, Globex" },
  { quote: "We compared every cloud ERP. Only Z ERP shipped a unified data model out of the box — no integrations to maintain, no syncs to debug.", name: "Priya Iyer", role: "CIO, Acme Corp" },
];

const faq = [
  { q: "How long does implementation take?", a: "Most mid-market teams go live in 4–8 weeks with our concierge migration team. We've migrated from SAP B1, NetSuite, Dynamics, Tally, Zoho, and Odoo." },
  { q: "Do I have to buy every module?", a: "No. Every plan includes all 14 modules — you turn on what you need today and switch on more as you scale." },
  { q: "Is my data secure?", a: "Yes. SOC 2 Type II, ISO 27001, GDPR, HIPAA-ready, encryption at rest and in transit, regional data residency, and a 99.95% uptime SLA." },
  { q: "Can I customize it?", a: "Yes. Custom fields, custom roles, custom workflows, and a full REST + GraphQL API — no platform lock-in." },
];

function Home() {
  return (
    <MarketingLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 size-[720px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/15 via-info/10 to-transparent blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8 lg:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <ShieldCheck className="size-3.5 text-info" />
              Secure · Scalable · Compliant
            </div>
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              A new era of <span className="bg-gradient-to-r from-primary via-info to-primary bg-clip-text text-transparent">ERP software</span>
              <br /> from Z IT Solutions
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Z ERP keeps pace with your technological transformation — helping you become operationally faster, leaner, more innovative, and more resilient.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="gap-1.5 bg-gradient-to-r from-primary to-info hover:opacity-90">
                <Link to="/auth">Start a free trial <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Request a demo</Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-success" /> 14-day free trial</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-success" /> No credit card</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-success" /> Concierge onboarding</span>
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-primary/20 via-info/15 to-transparent blur-2xl" />
            <Card className="overflow-hidden border-border/60 shadow-2xl">
              <div className="flex items-center gap-1.5 border-b border-border/60 bg-muted/40 px-4 py-2.5">
                <span className="size-2.5 rounded-full bg-destructive/60" />
                <span className="size-2.5 rounded-full bg-warning/60" />
                <span className="size-2.5 rounded-full bg-success/60" />
                <span className="ml-3 text-xs text-muted-foreground">app.zerp.io / dashboard</span>
              </div>
              <img src={heroDashboard} alt="Z ERP dashboard preview with revenue, pipeline and KPI widgets" width={1920} height={1080} className="block w-full" />
            </Card>
          </div>

          {/* Inline hero stats — not boxes */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 divide-x divide-border/60 sm:grid-cols-4">
            {[["38%", "faster q2c"], ["8 hrs", "saved / user / wk"], ["99.95%", "uptime SLA"], ["14", "modules included"]].map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="bg-gradient-to-r from-primary to-info bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">{v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="border-y border-border/60 bg-muted/30 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Trusted by ambitious teams in 50+ countries</p>
          <div className="mt-6 grid grid-cols-2 items-center gap-x-8 gap-y-4 opacity-70 sm:grid-cols-3 md:grid-cols-6">
            {trusted.map((t) => (<div key={t} className="text-center text-sm font-semibold tracking-tight text-muted-foreground">{t}</div>))}
          </div>
        </div>
      </section>

      {/* VALUE PROPS — with bullets, not just titles */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-info">Why Z ERP</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">An ERP unlike any other ERP</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {valueProps.map((v) => (
              <div key={v.title} className="group relative rounded-2xl border border-border/60 bg-background p-7 transition-shadow hover:shadow-xl">
                <div className="grid size-11 place-items-center rounded-lg bg-gradient-to-br from-primary/15 to-info/10 text-primary"><v.icon className="size-5" /></div>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                <ul className="mt-5 space-y-2">
                  {v.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm"><CheckCircle2 className="size-4 text-success" /> {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW — connected nodes, not 4 boxes */}
      <section className="relative border-t border-border/60 bg-muted/20 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-info">How it flows</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">From the first record to the final report.</h2>
            <p className="mt-4 text-muted-foreground">Z ERP isn't four apps duct-taped together. It's one continuous pipeline — capture, orchestrate, assist, decide.</p>
          </div>
          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-info/40 to-transparent md:block" />
            <div className="grid gap-8 md:grid-cols-4">
              {workflow.map((w) => (
                <div key={w.title} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 grid size-24 place-items-center rounded-full border border-border/60 bg-background shadow-md">
                    <div className="grid size-14 place-items-center rounded-full bg-gradient-to-br from-primary to-info text-primary-foreground">
                      <w.icon className="size-6" />
                    </div>
                  </div>
                  <h3 className="mt-5 font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-info">Modules</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">One platform. Every function.</h2>
              <p className="mt-3 text-muted-foreground">Switch on the modules you need today. Add more as you scale. Every module shares one customer, one product catalog, one ledger.</p>
            </div>
            <Button asChild variant="outline" className="gap-1.5"><Link to="/modules">Explore all modules <ArrowRight className="size-4" /></Link></Button>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {MODULES.slice(0, 12).map((m) => (
              <Link key={m.slug} to="/modules" hash={m.slug} className="group rounded-2xl border border-border/60 bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-lg bg-gradient-to-br from-primary/15 to-info/10 text-primary group-hover:from-primary group-hover:to-info group-hover:text-primary-foreground transition-colors">
                    <m.icon className="size-5" />
                  </div>
                  <div className="font-semibold">{m.name}</div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{m.tagline}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {m.features.slice(0, 2).map((f) => (
                    <li key={f} className="rounded-full bg-muted/60 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">{f}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES — left-rule items, not boxes */}
      <section className="border-t border-border/60 bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-info">Industries we run</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Built for the way your industry actually works.</h2>
              <p className="mt-4 text-muted-foreground">Pre-configured templates for six core industries — and a configurable platform for the rest. Switch industries without rebuilding from scratch.</p>
            </div>
            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {industries.map((ind) => (
                <div key={ind.name} className="border-l-2 border-info/40 pl-5">
                  <ind.icon className="size-5 text-info" />
                  <h3 className="mt-3 font-semibold">{ind.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{ind.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM FEATURES STRIP — denser line items */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-info">The platform</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Built into every module. Not sold separately.</h2>
          </div>
          <div className="mt-14 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><f.icon className="size-5" /></div>
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS STRIP */}
      <section className="border-y border-border/60 bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-info">Integrations</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">Plays well with everything you already pay for.</h3>
            </div>
            <Button asChild variant="outline" size="sm" className="gap-1.5"><Link to="/features">See full list <ArrowRight className="size-3.5" /></Link></Button>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
            {integrations.map((name) => (
              <div key={name} className="grid h-14 place-items-center rounded-xl border border-border/60 bg-background px-3 text-center text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATIONS IMAGE BAND */}
      <section className="relative overflow-hidden border-t border-border/60">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[360px] lg:min-h-[520px]">
            <img src={operationsImg} alt="Warehouse operators using Z ERP on tablets to manage inventory" loading="lazy" width={1600} height={900} className="absolute inset-0 size-full object-cover" />
          </div>
          <div className="flex items-center bg-gradient-to-br from-primary to-info p-10 text-primary-foreground sm:p-14 lg:p-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">From shop floor to boardroom</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">The same data. Everywhere your team works.</h2>
              <p className="mt-4 max-w-md text-primary-foreground/85">A scan on the warehouse floor updates finance instantly. A purchase order in procurement reflects in cash flow before lunch. One platform, end to end.</p>
              <ul className="mt-6 space-y-2 text-sm text-primary-foreground/90">
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4" /> Real-time syncs across modules</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4" /> Mobile barcode scanning</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4" /> Offline-ready apps</li>
              </ul>
              <Button asChild size="lg" variant="secondary" className="mt-8 gap-1.5">
                <Link to="/modules">Explore the platform <ArrowRight className="size-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — 3, alternating styles */}
      <section className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-info">What customers say</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Real teams. Real outcomes.</h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`relative flex flex-col rounded-2xl p-7 ${i === 1 ? "bg-gradient-to-br from-primary to-info text-primary-foreground shadow-xl" : "border border-border/60 bg-background"}`}>
                <Quote className={`size-7 ${i === 1 ? "text-primary-foreground/70" : "text-info/70"}`} />
                <blockquote className="mt-4 text-base leading-relaxed">{t.quote}</blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className={`grid size-9 place-items-center rounded-full text-xs font-bold ${i === 1 ? "bg-white/15 text-primary-foreground" : "bg-primary/15 text-primary"}`}>
                    {t.name.split(" ").map((s) => s[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className={`text-xs ${i === 1 ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 bg-muted/30 py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-info">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A few common questions.</h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-2">
            {faq.map((f) => (
              <div key={f.q} className="bg-background p-7">
                <div className="font-semibold">{f.q}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-info p-12 text-primary-foreground shadow-xl">
            <div className="absolute -right-20 -top-20 size-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 size-72 rounded-full bg-white/5 blur-3xl" />
            <div className="relative">
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Ready to run your business on Z ERP?</h2>
              <p className="mt-3 max-w-xl text-primary-foreground/80">Start your free 14-day trial — no credit card required. Migrate at your pace with our concierge onboarding team.</p>
              <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-3">
                {["14-day free trial", "No credit card", "Concierge onboarding"].map((x) => (
                  <li key={x} className="flex items-center gap-2"><CheckCircle2 className="size-4" /> {x}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="secondary" className="gap-1.5">
                  <Link to="/auth">Start free trial <ArrowRight className="size-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10">
                  <Link to="/contact">Talk to sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}