import { createFileRoute } from "@tanstack/react-router";
import { ModulePage, EmptyModule } from "@/components/module-page";

export const Route = createFileRoute("/finance/income")({
  head: () => ({ meta: [{ title: "Income · Z ERP" }, { name: "description", content: "Income streams and recognition." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Income" subtitle="Income streams and recognition." breadcrumbs={["Finance","Income"]}>
      <EmptyModule title="Income" hint="Income streams and recognition." />
    </ModulePage>
  );
}
