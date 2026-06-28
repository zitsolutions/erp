import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Loader2, Globe2, MessageSquare, Headphones, Briefcase, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MarketingLayout } from "@/components/marketing/marketing-layout";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact · Z ERP" },
      { name: "description", content: "Talk to the Z ERP team — request a demo, ask about pricing, or get help migrating from your current ERP." },
      { property: "og:title", content: "Contact · Z ERP" },
      { property: "og:description", content: "Request a demo or talk to sales." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const departments = [
  { icon: Briefcase, name: "Sales", email: "sales@zitsolutions.com", body: "Demos, pricing, procurement, security review packets." },
  { icon: Headphones, name: "Support", email: "support@zitsolutions.com", body: "Existing customers — 24×5 Priority, 24×7 Enterprise." },
  { icon: MessageSquare, name: "Partnerships", email: "partners@zitsolutions.com", body: "Resellers, system integrators, ISV partners." },
  { icon: Globe2, name: "Press & analyst", email: "press@zitsolutions.com", body: "Media inquiries, analyst briefings, branding assets." },
];

const offices = [
  { city: "San Francisco", role: "Global HQ", address: "450 Mission St, Suite 200, San Francisco, CA 94105", phone: "+1 (415) 555-0142", hours: "Mon–Fri · 9 AM – 6 PM PT" },
  { city: "Bengaluru", role: "Engineering", address: "RMZ Ecoworld, Sarjapur–Marathahalli Outer Ring Rd, Bengaluru 560103", phone: "+91 80 4567 8910", hours: "Mon–Fri · 10 AM – 7 PM IST" },
  { city: "London", role: "EMEA", address: "1 Finsbury Avenue, London EC2M 2PF", phone: "+44 20 7946 0815", hours: "Mon–Fri · 9 AM – 6 PM GMT" },
  { city: "Singapore", role: "APAC support", address: "10 Marina Boulevard, Singapore 018983", phone: "+65 6403 5000", hours: "Mon–Fri · 9 AM – 6 PM SGT" },
];

const supportTiers: Array<[string, string, string]> = [
  ["Email response", "1 business day", "Email · Phone · Chat"],
  ["Priority support", "1 hour", "Email · Phone · Chat · Slack Connect"],
  ["Dedicated CSM + TAM", "15 minutes", "Direct line · 24×7 escalation"],
];

function ContactPage() {
  const [busy, setBusy] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBusy(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("[contact form]", data);
    setTimeout(() => {
      setBusy(false);
      toast.success("Thanks — our team will be in touch within one business day.");
      e.currentTarget.reset();
    }, 600);
  };

  return (
    <MarketingLayout>
      {/* HERO */}
      <section className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-info">Contact</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">Let's talk.</h1>
          <p className="mt-5 text-lg text-muted-foreground">Tell us a bit about your team and we'll set up a tailored walkthrough — usually within one business day, often the same afternoon.</p>
        </div>
      </section>

      {/* DEPARTMENT ROW (not boxes — left-rule rows) */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4">
            {departments.map((d) => (
              <div key={d.name} className="border-l-2 border-info/40 pl-5">
                <d.icon className="size-6 text-info" />
                <div className="mt-4 font-semibold">{d.name}</div>
                <a href={`mailto:${d.email}`} className="mt-1 block text-sm text-info hover:underline">{d.email}</a>
                <p className="mt-2 text-sm text-muted-foreground">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + side panel */}
      <section className="border-t border-border/60 bg-muted/20 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="space-y-6 lg:col-span-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-info">Reach us directly</p>
              <h2 className="mt-3 text-2xl font-bold">Sales, in three ways.</h2>
              <p className="mt-3 text-sm text-muted-foreground">Form a fit or fast question? Use the form. Want a faster answer? Email or call directly.</p>
            </div>
            <Card className="border-border/60 p-6">
              <div className="flex items-start gap-3">
                <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary"><Mail className="size-5" /></div>
                <div>
                  <div className="font-semibold">Sales email</div>
                  <a href="mailto:sales@zitsolutions.com" className="text-sm text-muted-foreground hover:text-foreground">sales@zitsolutions.com</a>
                  <div className="mt-1 text-xs text-muted-foreground">Average reply: 2 hours during business hours.</div>
                </div>
              </div>
            </Card>
            <Card className="border-border/60 p-6">
              <div className="flex items-start gap-3">
                <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary"><Phone className="size-5" /></div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-sm text-muted-foreground">+1 (415) 555-0142</div>
                  <div className="text-xs text-muted-foreground">Mon–Fri, 9 AM – 6 PM PT · Spanish & Hindi available</div>
                </div>
              </div>
            </Card>
            <Card className="border-border/60 p-6">
              <div className="flex items-start gap-3">
                <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary"><MessageSquare className="size-5" /></div>
                <div>
                  <div className="font-semibold">Live chat</div>
                  <div className="text-sm text-muted-foreground">In-app, every weekday, 6 AM–10 PM UTC</div>
                  <div className="text-xs text-muted-foreground">Click the bubble in the bottom-right of any app screen.</div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="border-border/60 p-7 lg:col-span-3">
            <h2 className="text-xl font-bold tracking-tight">Tell us about your team</h2>
            <p className="mt-1 text-sm text-muted-foreground">The more context you share, the more tailored the walkthrough.</p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5"><Label htmlFor="fn">First name</Label><Input id="fn" name="firstName" required /></div>
                <div className="space-y-1.5"><Label htmlFor="ln">Last name</Label><Input id="ln" name="lastName" required /></div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5"><Label htmlFor="em">Work email</Label><Input id="em" name="email" type="email" required /></div>
                <div className="space-y-1.5"><Label htmlFor="ph">Phone (optional)</Label><Input id="ph" name="phone" /></div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5"><Label htmlFor="co">Company</Label><Input id="co" name="company" required /></div>
                <div className="space-y-1.5"><Label htmlFor="sz">Team size</Label><Input id="sz" name="teamSize" placeholder="e.g. 25–100" /></div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5"><Label htmlFor="ind">Industry</Label><Input id="ind" name="industry" placeholder="e.g. Manufacturing" /></div>
                <div className="space-y-1.5"><Label htmlFor="cur">Current ERP (if any)</Label><Input id="cur" name="currentErp" placeholder="e.g. SAP B1, NetSuite, none" /></div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="ms">How can we help?</Label>
                <textarea id="ms" name="message" rows={5} required className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" placeholder="A few words about your use case, current pain points, and timeline…" />
              </div>
              <Button type="submit" size="lg" disabled={busy} className="w-full bg-gradient-to-r from-primary to-info">
                {busy && <Loader2 className="mr-2 size-4 animate-spin" />} Send message
              </Button>
              <p className="text-xs text-muted-foreground">By submitting, you agree to our terms and privacy policy. We'll never share your details.</p>
            </form>
          </Card>
        </div>
      </section>

      {/* SUPPORT TIERS */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-info">Already a customer?</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Support response times.</h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">We measure first-response in minutes, not days. Every reply is from a human on our product or engineering team.</p>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/60 bg-background">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/40 text-xs uppercase tracking-widest text-muted-foreground">
                <tr><th className="px-6 py-4 font-semibold">Plan</th><th className="px-6 py-4 font-semibold">First response</th><th className="px-6 py-4 font-semibold">Channels</th></tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {supportTiers.map((r) => (
                  <tr key={r[0]}>
                    <td className="px-6 py-4 font-medium">{r[0]}</td>
                    <td className="px-6 py-4 font-semibold text-info">{r[1]}</td>
                    <td className="px-6 py-4 text-muted-foreground">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="border-t border-border/60 bg-muted/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-info">Visit us</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Four offices, one product team.</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {offices.map((o) => (
              <div key={o.city} className="border-l-2 border-info/40 pl-5">
                <MapPin className="size-5 text-info" />
                <div className="mt-3 text-lg font-semibold">{o.city}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{o.role}</div>
                <p className="mt-3 text-sm text-muted-foreground">{o.address}</p>
                <p className="mt-2 text-sm font-medium">{o.phone}</p>
                <p className="text-xs text-muted-foreground">{o.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL FOOTER STRIP */}
      <section className="border-t border-border/60 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight">Or just say hi.</h2>
          <div className="flex flex-wrap gap-3">
            {[{ icon: Twitter, label: "Twitter" }, { icon: Linkedin, label: "LinkedIn" }, { icon: Github, label: "GitHub" }].map((s) => (
              <a key={s.label} href="#" className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
                <s.icon className="size-4" /> {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
