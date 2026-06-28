import { createFileRoute } from "@tanstack/react-router";
import { ModulePage } from "@/components/module-page";
import { DataTable } from "@/components/data-table";
import { accounts } from "@/lib/mock-data";

export const Route = createFileRoute("/finance/accounts")({
  head: () => ({ meta: [{ title: "Chart of Accounts · Z ERP" }, { name: "description", content: "All ledger accounts." }] }),
  component: Page,
});

function Page() {
  return (
    <ModulePage title="Chart of Accounts" subtitle="All ledger accounts." breadcrumbs={["Finance","Accounts"]}>
      <DataTable rows={accounts} columns={[
      { key: "code", header: "Code", render: r => <span className="font-mono text-xs">{r.code}</span> },
      { key: "name", header: "Account", render: r => <span className="font-medium">{r.name}</span> },
      { key: "type", header: "Type" },
      { key: "balance", header: "Balance", render: r => <span className="font-medium">${r.balance.toLocaleString()}</span> },
    ]} />
    </ModulePage>
  );
}
