import { useState, type ReactNode } from "react";
import { AppSidebar } from "./app-sidebar";
import { Bell, Search, PanelLeft, Plus, HelpCircle, Sun, Moon, LogOut, User, Check, AlertCircle, MessageSquare, DollarSign, UserPlus, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/lib/theme-provider";
import { useAuth } from "@/lib/auth-provider";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CreateRecordDialog } from "@/components/module-page";
import { cn } from "@/lib/utils";

type Notif = {
  id: string; title: string; body: string; time: string;
  icon: any; tone: "primary" | "success" | "warning" | "info"; unread: boolean;
};

const initialNotifs: Notif[] = [
  { id: "n1", title: "New lead assigned", body: "Acme Corp · $42,000 opportunity", time: "2m ago", icon: UserPlus, tone: "primary", unread: true },
  { id: "n2", title: "Invoice paid", body: "INV-1042 · Stellar Inc · $8,420", time: "18m ago", icon: DollarSign, tone: "success", unread: true },
  { id: "n3", title: "Low stock alert", body: "SKU-2391 below reorder level", time: "1h ago", icon: Package, tone: "warning", unread: true },
  { id: "n4", title: "New support ticket", body: "Priya R. · Billing question", time: "3h ago", icon: MessageSquare, tone: "info", unread: false },
  { id: "n5", title: "Payroll run completed", body: "March cycle · 142 employees", time: "Yesterday", icon: Check, tone: "success", unread: false },
  { id: "n6", title: "Vendor renewal due", body: "Cloudflare contract in 7 days", time: "2d ago", icon: AlertCircle, tone: "warning", unread: false },
];

const toneClass: Record<Notif["tone"], string> = {
  primary: "bg-primary/10 text-primary",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  info: "bg-info/10 text-info",
};

export function AppShell({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const { theme, toggle } = useTheme();
  const { user, signOut } = useAuth();
  const [notifs, setNotifs] = useState(initialNotifs);
  const [createOpen, setCreateOpen] = useState(false);
  const unread = notifs.filter(n => n.unread).length;
  const markAllRead = () => setNotifs(prev => prev.map(n => ({ ...n, unread: false })));
  const toggleRead = (id: string) => setNotifs(prev => prev.map(n => n.id === id ? { ...n, unread: false } : n));
  const name = (user?.user_metadata?.full_name as string) || user?.email?.split("@")[0] || "User";
  const initials = name.split(" ").map(p => p[0]).slice(0, 2).join("").toUpperCase();

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar collapsed={collapsed} />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b bg-card sticky top-0 z-20 flex items-center gap-3 px-4">
          <Button variant="ghost" size="icon" onClick={() => setCollapsed(v => !v)}>
            <PanelLeft className="size-4" />
          </Button>
          <div className="relative flex-1 max-w-md">
            <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search customers, invoices, products…" className="pl-9 h-9 bg-muted/40" />
          </div>
          <div className="flex-1" />
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          <Button variant="ghost" size="icon"><HelpCircle className="size-4" /></Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
                <Bell className="size-4" />
                {unread > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-destructive text-destructive-foreground text-[10px] font-semibold grid place-items-center">
                    {unread}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-[360px] p-0">
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <div>
                  <div className="text-sm font-semibold">Notifications</div>
                  <div className="text-xs text-muted-foreground">{unread} unread</div>
                </div>
                <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={markAllRead} disabled={unread === 0}>
                  Mark all read
                </Button>
              </div>
              <ScrollArea className="max-h-[380px]">
                <div className="divide-y">
                  {notifs.map(n => {
                    const Icon = n.icon;
                    return (
                      <button
                        key={n.id}
                        onClick={() => toggleRead(n.id)}
                        className={cn(
                          "w-full flex gap-3 px-4 py-3 text-left hover:bg-muted/50 transition-colors",
                          n.unread && "bg-muted/30"
                        )}
                      >
                        <div className={cn("size-9 rounded-full grid place-items-center shrink-0", toneClass[n.tone])}>
                          <Icon className="size-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <div className="text-sm font-medium truncate">{n.title}</div>
                            {n.unread && <span className="size-2 rounded-full bg-primary shrink-0" />}
                          </div>
                          <div className="text-xs text-muted-foreground truncate">{n.body}</div>
                          <div className="text-[10px] text-muted-foreground mt-0.5">{n.time}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </ScrollArea>
              <div className="border-t p-2">
                <Button variant="ghost" size="sm" className="w-full text-xs">View all notifications</Button>
              </div>
            </PopoverContent>
          </Popover>
          <Button size="sm" className="gap-1.5" onClick={() => setCreateOpen(true)}>
            <Plus className="size-4" />Create
          </Button>
          <CreateRecordDialog title="Records" open={createOpen} onOpenChange={setCreateOpen} />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 pl-2 ml-1 border-l outline-none">
                <div className="size-8 rounded-full bg-gradient-to-br from-primary to-info grid place-items-center text-primary-foreground text-xs font-semibold">{initials}</div>
                <div className="hidden lg:block leading-tight text-left">
                  <div className="text-xs font-semibold">{name}</div>
                  <div className="text-[10px] text-muted-foreground">{user?.email}</div>
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><User className="size-4 mr-2" />Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={toggle}>
                {theme === "dark" ? <Sun className="size-4 mr-2" /> : <Moon className="size-4 mr-2" />}
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={signOut} className="text-destructive focus:text-destructive">
                <LogOut className="size-4 mr-2" />Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 p-6 min-w-0">{children}</main>
      </div>
    </div>
  );
}
