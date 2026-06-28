import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable, StatusBadge } from "@/components/data-table";
import { jobOpenings } from "@/lib/mock-data";

export const Route = createFileRoute("/recruitment/jobs")({
  head: () => ({ meta: [{ title: "Job Openings · Z ERP" }, { name: "description", content: "Active positions and applicants." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Job Openings" subtitle="Active positions and applicants." breadcrumbs={["Recruitment","Jobs"]}>
      <DataTable rows={jobOpenings} columns={[
      { key: "id", header: "ID", render: r => <span className="font-mono text-xs">{r.id}</span> },
      { key: "title", header: "Title", render: r => <span className="font-medium">{r.title}</span> },
      { key: "department", header: "Department" },
      { key: "location", header: "Location" },
      { key: "applicants", header: "Applicants", render: r => <span className="font-medium">{r.applicants}</span> },
      { key: "status", header: "Status", render: r => <StatusBadge status={r.status} /> },
    ]} />
    </ModulePage>
  );
}
