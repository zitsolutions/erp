import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Sparkles } from "lucide-react";
import { type ReactNode, useState } from "react";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

function singular(t: string) {
  const s = t.trim();
  if (/ies$/i.test(s)) return s.replace(/ies$/i, "y");
  if (/ses$/i.test(s)) return s.replace(/es$/i, "");
  if (/s$/i.test(s) && !/ss$/i.test(s)) return s.replace(/s$/i, "");
  return s;
}

export function CreateRecordDialog({
  title, trigger, open, onOpenChange,
}: {
  title: string;
  trigger?: ReactNode;
  open?: boolean;
  onOpenChange?: (v: boolean) => void;
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;
  const setOpen = isControlled ? (onOpenChange ?? (() => {})) : setInternalOpen;

  const label = singular(title);
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [status, setStatus] = useState("active");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) { toast.error("Name is required"); return; }
    toast.success(`${label} created`, { description: name });
    setName(""); setOwner(""); setAmount(""); setNotes(""); setStatus("active");
    setOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      {trigger}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New {label}</DialogTitle>
          <DialogDescription>Add a new {label.toLowerCase()} to {title}.</DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="cr-name">Name</Label>
            <Input id="cr-name" autoFocus value={name} onChange={e => setName(e.target.value)} placeholder={`${label} name`} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="cr-owner">Owner</Label>
              <Input id="cr-owner" value={owner} onChange={e => setOwner(e.target.value)} placeholder="Assignee" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cr-status">Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger id="cr-status"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="cr-amount">Value / Amount</Label>
            <Input id="cr-amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="0.00" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="cr-notes">Notes</Label>
            <Textarea id="cr-notes" value={notes} onChange={e => setNotes(e.target.value)} rows={3} placeholder="Optional details" />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit">Create {label.toLowerCase()}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function ModulePage({
  title, subtitle, breadcrumbs, children, actions,
}: {
  title: string; subtitle?: string; breadcrumbs?: string[]; children?: ReactNode; actions?: ReactNode;
}) {
  const [createOpen, setCreateOpen] = useState(false);
  const label = singular(title).toLowerCase();
  return (
    <div className="space-y-6">
      <PageHeader title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} actions={actions ?? (
        <>
          <Button variant="outline" size="sm" onClick={() => toast.success(`${title} exported`, { description: "CSV download started" })}>Export</Button>
          <Button size="sm" className="gap-1.5" onClick={() => setCreateOpen(true)}>
            <Plus className="size-4" />New
          </Button>
        </>
      )} />
      {!actions && <CreateRecordDialog title={title} open={createOpen} onOpenChange={setCreateOpen} />}
      {children}
    </div>
  );
}

export function EmptyModule({ title, hint }: { title: string; hint?: string }) {
  const [open, setOpen] = useState(false);
  const label = singular(title).toLowerCase();
  return (
    <>
      <Card className="p-12 text-center border-dashed">
        <div className="mx-auto size-12 rounded-full bg-primary/10 text-primary grid place-items-center mb-3">
          <Sparkles className="size-5" />
        </div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground mt-1">{hint ?? "Configure this module to start tracking data."}</div>
        <Button className="mt-4" size="sm" onClick={() => setOpen(true)}>
          <Plus className="size-4 mr-1.5" />Create your first {label}
        </Button>
      </Card>
      <CreateRecordDialog title={title} open={open} onOpenChange={setOpen} />
    </>
  );
}
