import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/documents/folders")({
  head: () => ({ meta: [{ title: "Folders · Z ERP" }, { name: "description", content: "Browse document folders." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Folders" subtitle="Browse document folders." breadcrumbs={["Documents","Folders"]}>
      <EmptyModule title="Folders" hint="Browse document folders." />
    </ModulePage>
  );
}
