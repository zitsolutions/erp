import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable, StatusBadge } from "@/components/data-table";
import { candidates } from "@/lib/mock-data";

export const Route = createFileRoute("/recruitment/candidates")({
  head: () => ({ meta: [{ title: "Candidates · Z ERP" }, { name: "description", content: "All applicants in the pipeline." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Candidates" subtitle="All applicants in the pipeline." breadcrumbs={["Recruitment","Candidates"]}>
      <DataTable rows={candidates} columns={[
      { key: "id", header: "ID", render: r => <span className="font-mono text-xs">{r.id}</span> },
      { key: "name", header: "Name", render: r => <span className="font-medium">{r.name}</span> },
      { key: "role", header: "Role" },
      { key: "stage", header: "Stage", render: r => <StatusBadge status={r.stage === "Hired" ? "Hired" : r.stage === "Offer" ? "On Track" : "In Progress"} /> },
      { key: "source", header: "Source" },
      { key: "score", header: "Score", render: r => <span className="font-medium">{r.score}/10</span> },
    ]} />
    </ModulePage>
  );
}
