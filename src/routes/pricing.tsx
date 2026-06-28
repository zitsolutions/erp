import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X, ArrowRight, Sparkles, Building2, Users2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MarketingLayout } from "@/components/marketing/marketing-layout";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing · Z ERP" },
      { name: "description", content: "Simple, scalable pricing for Z ERP. Three plans — Starter, Business, Enterprise. Every plan includes the full platform." },
      { property: "og:title", content: "Pricing · Z ERP" },
      { property: "og:description", content: "Simple, scalable pricing. Every plan includes the full platform." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
});

const plans = [
  {
    name: "Starter", price: "$49", per: "/user/month", tagline: "For teams getting started.", cta: "Start free trial", featured: false,
    icon: Users2,
    bestFor: "5–25 users · early-stage startups",
    features: ["Up to 25 users", "All 14 modules", "Standard support", "10 GB storage / user", "Email automations", "AI assistant (1k queries/mo)", "Mobile apps", "Community forum"],
  },
  {
    name: "Business", price: "$89", per: "/user/month", tagline: "For growing companies.", cta: "Start free trial", featured: true,
    icon: Sparkles,
    bestFor: "25–250 users · scaling SMBs",
    features: ["Up to 250 users", "All 14 modules", "Priority 24×5 support", "100 GB storage / user", "Advanced automations", "API + GraphQL access", "Custom roles", "AI assistant (unlimited)", "Multi-entity & multi-currency", "Webhooks & event stream"],
  },
  {
    name: "Enterprise", price: "Custom", per: "", tagline: "For complex organizations.", cta: "Talk to sales", featured: false,
    icon: Building2,
    bestFor: "250+ users · regulated industries",
    features: ["Unlimited users", "All 14 modules + early access", "Dedicated CSM + TAM", "Unlimited storage", "SSO + SCIM", "Custom SLAs (99.95%+)", "Data residency (US/EU/IN/APAC)", "Private VPC option", "Audit log SIEM export", "Custom contracts & DPA"],
  },
];

// Detailed comparison rows. true / false / string note
const featureMatrix: Array<[string, string | boolean, string | boolean, string | boolean]> = [
  ["Users", "Up to 25", "Up to 250", "Unlimited"],
  ["Modules included", "All 14", "All 14", "All 14"],
  ["Storage per user", "10 GB", "100 GB", "Unlimited"],
  ["AI assistant queries", "1,000 / mo", "Unlimited", "Unlimited + custom models"],
  ["Automations", "Standard", "Advanced", "Advanced + scripting"],
  ["API & GraphQL", false, true, true],
  ["Webhooks & event stream", false, true, true],
  ["Multi-entity / multi-currency", false, true, true],
  ["Custom roles", false, true, true],
  ["SSO (SAML / OIDC)", false, "Add-on", true],
  ["SCIM provisioning", false, false, true],
  ["Audit log export to SIEM", false, false, true],
  ["Data residency", false, false, true],
  ["Private VPC deployment", false, false, true],
  ["Dedicated CSM", false, false, true],
  ["Uptime SLA", "99.9%", "99.95%", "99.95% + custom"],
  ["Support", "Email · 1 biz day", "Priority 24×5", "Dedicated · 24×7"],
];

const addons = [
  { name: "Concierge migration", price: "from $4,900", body: "Our solutions team migrates customers, products, ledger entries, and historical transactions from your current ERP." },
  { name: "Sandbox environments", price: "$199 / env / mo", body: "Production-like sandboxes for testing customizations, training, and acceptance UAT." },
  { name: "Private model fine-tune", price: "Quoted", body: "Fine-tune the AI assistant on your domain — proposals, contracts, policies — in a tenant-isolated training pipeline." },
];

const faq = [
  { q: "Do I pay per module?", a: "No. Every plan includes the full platform — all 14 modules and the AI assistant. Pricing is per user, per month, billed annually." },
  { q: "Can I migrate from another ERP?", a: "Yes. Our concierge onboarding team has playbooks for SAP B1, Oracle NetSuite, Microsoft Dynamics, Tally, Zoho, Odoo, and QuickBooks. Most mid-market migrations go live in 4–8 weeks." },
  { q: "Is there a free trial?", a: "Yes — 14 days, no credit card required. Your data and configuration carry into paid plans automatically." },
  { q: "How does annual vs monthly billing work?", a: "Annual billing is the listed price. Monthly billing adds 20%. You can switch at any renewal." },
  { q: "What payment methods do you accept?", a: "Credit card and ACH on Starter and Business. Bank transfer, NEFT/SEPA, and PO-based invoicing available on Enterprise." },
  { q: "Can I add or remove users mid-cycle?", a: "Yes. Added users are pro-rated to your renewal date. Removed users credit forward to the next invoice." },
  { q: "Do you offer non-profit, education, or startup discounts?", a: "Yes — 30% off Business for verified non-profits and accredited education institutions, and a 12-month founder plan for YC / Sequoia Surge / Antler companies." },
  { q: "Where is my data stored?", a: "Default region is your sign-up region (US, EU, IN, APAC). Enterprise plans can pin data to a specific region with a contractual guarantee." },
  { q: "Can I export my data?", a: "Always. Full CSV and JSON exports of every module are one click — no waiting, no support ticket." },
];

function Cell({ v }: { v: string | boolean }) {
  if (v === true) return <Check className="mx-auto size-5 text-success" />;
  if (v === false) return <X className="mx-auto size-4 text-muted-foreground/40" />;
  return <span className="text-sm">{v}</span>;
}

function PricingPage() {
  return (
    <MarketingLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60 py-20">
        <div className="pointer-events-none absolute inset-x-0 -top-32 -z-10 mx-auto h-[500px] max-w-5xl bg-gradient-to-br from-primary/15 via-info/10 to-transparent blur-3xl" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-info">Pricing</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">Simple. Scalable. Honest.</h1>
          <p className="mt-5 text-lg text-muted-foreground">Every plan includes the full Z ERP platform — all 14 modules, the AI assistant, mobile apps, and every integration. Choose the support and scale level that fits your team.</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-1.5 text-xs font-semibold text-muted-foreground">
            <Sparkles className="size-3.5 text-info" /> Save 20% with annual billing · 14-day free trial
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <Card key={p.name} className={`relative flex flex-col p-8 ${p.featured ? "border-primary shadow-2xl ring-2 ring-primary/20" : "border-border/60"}`}>
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-info px-3 py-1 text-xs font-semibold text-primary-foreground">Most popular</div>
                )}
                <div className="flex items-center gap-3">
                  <div className={`grid size-10 place-items-center rounded-lg ${p.featured ? "bg-gradient-to-br from-primary to-info text-primary-foreground" : "bg-muted text-primary"}`}>
                    <p.icon className="size-5" />
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{p.name}</div>
                </div>
                <div className="mt-3 text-sm text-muted-foreground">{p.tagline}</div>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight">{p.price}</span>
                  {p.per && <span className="text-sm text-muted-foreground">{p.per}</span>}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{p.bestFor}</div>
                <ul className="mt-7 flex-1 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-success" /> {f}</li>
                  ))}
                </ul>
                <Button asChild size="lg" className={`mt-8 w-full ${p.featured ? "bg-gradient-to-r from-primary to-info" : ""}`} variant={p.featured ? "default" : "outline"}>
                  <Link to={p.cta === "Talk to sales" ? "/contact" : "/auth"}>{p.cta}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED MATRIX */}
      <section className="border-t border-border/60 bg-muted/20 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-info">Compare every plan</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">The full feature matrix.</h2>
          </div>
          <div className="mt-10 overflow-x-auto">
            <div className="min-w-[720px] overflow-hidden rounded-2xl border border-border/60 bg-background">
              <table className="w-full text-left">
                <thead className="bg-muted/40 text-xs uppercase tracking-widest text-muted-foreground">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">Starter</th>
                    <th className="px-6 py-4 text-center font-semibold text-primary">Business</th>
                    <th className="px-6 py-4 text-center font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-sm">
                  {featureMatrix.map((row) => (
                    <tr key={String(row[0])} className="hover:bg-muted/30">
                      <td className="px-6 py-3.5 font-medium">{row[0]}</td>
                      <td className="px-6 py-3.5 text-center text-muted-foreground"><Cell v={row[1]} /></td>
                      <td className="px-6 py-3.5 text-center text-foreground"><Cell v={row[2]} /></td>
                      <td className="px-6 py-3.5 text-center text-muted-foreground"><Cell v={row[3]} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-info">Optional add-ons</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Available on any plan.</h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">Most teams don't need add-ons to go live. They become useful as you scale or as compliance posture changes.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {addons.map((a) => (
              <div key={a.name} className="rounded-2xl border border-border/60 bg-background p-7">
                <div className="text-xs font-semibold uppercase tracking-widest text-info">{a.price}</div>
                <h3 className="mt-2 text-lg font-semibold">{a.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENTERPRISE BAND */}
      <section className="bg-gradient-to-br from-primary to-info py-16 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">Enterprise</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Need procurement, security review, or a custom DPA?</h2>
            <p className="mt-2 max-w-xl text-primary-foreground/85">Our solutions team will run point with your IT, security, and legal stakeholders — and ship you a security packet, DPA, and architecture review in under a week.</p>
          </div>
          <Button asChild size="lg" variant="secondary" className="gap-2"><Link to="/contact"><Phone className="size-4" /> Talk to sales</Link></Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 bg-muted/30 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight">Frequently asked</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-2">
            {faq.map((f) => (
              <div key={f.q} className="bg-background p-7">
                <div className="font-semibold">{f.q}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="gap-1.5 bg-gradient-to-r from-primary to-info"><Link to="/contact">Have another question? Talk to us <ArrowRight className="size-4" /></Link></Button>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
