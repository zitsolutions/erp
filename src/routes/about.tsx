import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Compass, Microscope, Handshake, Award, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingLayout } from "@/components/marketing/marketing-layout";
import teamImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About · Z IT Solutions" },
      { name: "description", content: "Z IT Solutions builds Z ERP — a unified enterprise platform trusted by ambitious teams across the world." },
      { property: "og:title", content: "About · Z IT Solutions" },
      { property: "og:description", content: "Z IT Solutions builds Z ERP — a unified enterprise platform." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const stats: Array<[string, string]> = [["2014", "founded"], ["50+", "countries"], ["1.4M", "records managed"], ["99.95%", "uptime"], ["280+", "team members"], ["14", "modules shipped"]];

const timeline = [
  { year: "2014", title: "Founded in Bengaluru", body: "Three engineers, one CRM, one stubborn idea: a modern enterprise should run on a single source of truth." },
  { year: "2016", title: "First Fortune-1000 customer", body: "A North American manufacturer replaced four legacy tools in 90 days. Quote-to-cash dropped 38%." },
  { year: "2018", title: "Inventory & Finance modules ship", body: "The unified data model proves itself — and customers stop asking for integrations." },
  { year: "2020", title: "Multi-region cloud, EU residency", body: "We open the Frankfurt region and become SOC 2 Type II certified." },
  { year: "2022", title: "AI assistant launches", body: "Grounded on tenant data, gated by tenant permissions — never trains across customers." },
  { year: "2024", title: "10,000+ customers worldwide", body: "And growing across 50 countries — without a single press release." },
  { year: "2026", title: "14 modules, one continuous release", body: "Today: shipping every two weeks, with a $0 upgrade-project budget for our customers." },
];

const values = [
  { icon: Compass, title: "Customer reality over hype", body: "We build for the people who actually run businesses — not for the slide decks of people who sell to them." },
  { icon: Microscope, title: "Deep over wide", body: "We'd rather ship one module that's the best in the world than ten that are mediocre." },
  { icon: Heart, title: "Slow conviction, fast execution", body: "We argue about decisions for weeks. Then we build them in days." },
  { icon: Handshake, title: "Quiet competence", body: "Our customers are our best marketing. We'd rather earn a referral than write a billboard." },
];

const leaders = [
  { name: "Rajiv Khanna", role: "Founder & CEO", bio: "Previously founded an inventory analytics startup acquired by a Fortune-500 retailer." },
  { name: "Sarah Mitchell", role: "Chief Operating Officer", bio: "Former Head of Operations at a $2B SaaS company. Joined Z IT Solutions in 2017." },
  { name: "Daniel Park", role: "Chief Technology Officer", bio: "Previously principal engineer on planet-scale infrastructure at a hyperscaler." },
  { name: "Priya Iyer", role: "VP, Product", bio: "Shipped 30+ enterprise modules across two decades. Stewards the unified data model." },
  { name: "Hiroshi Tanaka", role: "VP, Engineering", bio: "Distributed systems veteran. Owns the platform's release cadence and uptime SLA." },
  { name: "Amelia Okafor", role: "VP, Customer Success", bio: "Built the concierge onboarding playbook from scratch — and our 98 NPS reflects it." },
];

const offices = [
  { city: "San Francisco", country: "United States", role: "Global HQ" },
  { city: "Bengaluru", country: "India", role: "Engineering" },
  { city: "London", country: "United Kingdom", role: "EMEA sales & success" },
  { city: "Singapore", country: "Singapore", role: "APAC support" },
];

const press = [
  { source: "Forbes Cloud 100", year: "2025", note: "Ranked among the top enterprise SaaS platforms" },
  { source: "Gartner Magic Quadrant", year: "2025", note: "Visionary for cloud ERP" },
  { source: "G2 Best Software", year: "2025", note: "Top 50 Mid-Market Products" },
];

function AboutPage() {
  return (
    <MarketingLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60 py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 size-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/12 via-info/10 to-transparent blur-3xl" />
        </div>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-info">About Z IT Solutions</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">Software that runs the world's quietest businesses.</h1>
          <p className="mt-5 text-lg text-muted-foreground">We build Z ERP because the operating system of a company shouldn't be a stitched-together collection of spreadsheets and disconnected SaaS tools. It should be one platform — designed for the way work actually flows.</p>
        </div>
      </section>

      {/* INLINE STAT BAR (not boxes) */}
      <section className="border-b border-border/60 bg-muted/20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border/60 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-6 lg:px-8">
          {stats.map(([v, l]) => (
            <div key={l} className="py-8 text-center">
              <div className="text-3xl font-bold tracking-tight sm:text-4xl">{v}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY w/ image */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-info/15 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img src={teamImg} alt="The Z IT Solutions team collaborating in a modern office" loading="lazy" width={1600} height={900} className="block w-full" />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-info">Our story</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A twelve-year refusal to settle.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>Z IT Solutions was founded in 2014 with a single, stubborn idea: a modern enterprise should run on a single source of truth — not seven of them. Our first customers were mid-market manufacturers who needed CRM, Finance, and Inventory to actually talk to each other. They still are.</p>
              <p>For the first three years we said no to feature requests that would have fractured the data model. We turned down deals that wanted "just a quick integration." That discipline is why a single record in Z ERP can travel from a sales lead, through a quotation, into an invoice, onto the general ledger, and back into the customer 360° — without leaving the platform.</p>
              <p>Today Z ERP powers ambitious operations teams in 50+ countries. We ship every two weeks, we answer support in hours not days, and we measure our success by how invisibly we sit inside our customers' days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE — clearly not a box grid */}
      <section className="border-t border-border/60 bg-muted/30 py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-info">Timeline</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Twelve years of one idea.</h2>
          </div>
          <ol className="relative mt-16 space-y-12 border-l-2 border-border/60 pl-8 sm:pl-12">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[42px] grid size-8 place-items-center rounded-full bg-gradient-to-br from-primary to-info text-[10px] font-bold text-primary-foreground shadow-md sm:-left-[58px] sm:size-10 sm:text-xs">{t.year.slice(-2)}</span>
                <div className="text-xs font-semibold uppercase tracking-widest text-info">{t.year}</div>
                <h3 className="mt-1 text-xl font-semibold">{t.title}</h3>
                <p className="mt-2 text-muted-foreground">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-info">Values</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Four principles we hire and fire on.</h2>
              <p className="mt-4 text-muted-foreground">Every product decision, every customer call, every internal debate is measured against these. They're not posters in the lobby — they're how performance is reviewed.</p>
            </div>
            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4 border-l-2 border-info/40 pl-5">
                  <v.icon className="mt-0.5 size-5 shrink-0 text-info" />
                  <div>
                    <h3 className="font-semibold">{v.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="border-t border-border/60 bg-muted/20 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-info">Leadership</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">The team behind the platform.</h2>
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((l) => (
              <div key={l.name} className="flex gap-4">
                <div className="grid size-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary/15 to-info/10 text-xl font-semibold text-primary">
                  {l.name.split(" ").map((s) => s[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold">{l.name}</div>
                  <div className="text-sm text-info">{l.role}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES + PRESS in one band */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-info">Offices</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight">Four cities. One product team.</h3>
            <ul className="mt-8 divide-y divide-border/60 rounded-2xl border border-border/60 bg-background">
              {offices.map((o) => (
                <li key={o.city} className="flex items-center justify-between px-6 py-4">
                  <div>
                    <div className="font-semibold">{o.city}</div>
                    <div className="text-xs text-muted-foreground">{o.country}</div>
                  </div>
                  <div className="text-sm text-info">{o.role}</div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-info">Recognition</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight">A little press, a lot of customers.</h3>
            <ul className="mt-8 space-y-5">
              {press.map((p) => (
                <li key={p.source} className="flex gap-4">
                  <div className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-lg bg-muted text-info">
                    {p.source.includes("Gartner") ? <Award className="size-5" /> : <Newspaper className="size-5" />}
                  </div>
                  <div>
                    <div className="font-semibold">{p.source} <span className="text-xs font-normal text-muted-foreground">· {p.year}</span></div>
                    <p className="text-sm text-muted-foreground">{p.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-gradient-to-br from-primary to-info py-20 text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Come build with us.</h2>
          <p className="max-w-xl text-primary-foreground/85">We're hiring engineers, designers, and operators across all four offices. Or just try the product first.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary" className="gap-1.5"><Link to="/auth">Start free trial <ArrowRight className="size-4" /></Link></Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10"><Link to="/contact">Get in touch</Link></Button>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
