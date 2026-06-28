import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable } from "@/components/data-table";
import { documents } from "@/lib/mock-data";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/documents/files")({
  head: () => ({ meta: [{ title: "All Files · Z ERP" }, { name: "description", content: "Documents stored across folders." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="All Files" subtitle="Documents stored across folders." breadcrumbs={["Documents","Files"]}>
      <DataTable rows={documents} columns={[
      { key: "name", header: "File", render: r => <div className="flex items-center gap-2"><FileText className="size-4 text-muted-foreground" /><span className="font-medium">{r.name}</span></div> },
      { key: "folder", header: "Folder" },
      { key: "size", header: "Size" },
      { key: "owner", header: "Owner" },
      { key: "updated", header: "Updated", className: "text-muted-foreground" },
    ]} />
    </ModulePage>
  );
}
