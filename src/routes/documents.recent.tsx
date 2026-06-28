import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/documents/recent")({
  head: () => ({ meta: [{ title: "Recent Uploads · Z ERP" }, { name: "description", content: "Latest uploaded files." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Recent Uploads" subtitle="Latest uploaded files." breadcrumbs={["Documents","Recent"]}>
      <EmptyModule title="Recent Uploads" hint="Latest uploaded files." />
    </ModulePage>
  );
}
