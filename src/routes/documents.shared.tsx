import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/documents/shared")({
  head: () => ({ meta: [{ title: "Shared Documents · Z ERP" }, { name: "description", content: "Documents shared with you." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Shared Documents" subtitle="Documents shared with you." breadcrumbs={["Documents","Shared"]}>
      <EmptyModule title="Shared Documents" hint="Documents shared with you." />
    </ModulePage>
  );
}
