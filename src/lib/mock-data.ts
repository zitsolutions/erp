export const kpis = {
  revenue: 4_287_500,
  profit: 1_152_400,
  expenses: 2_135_100,
  customers: 1248,
  leads: 312,
  employees: 184,
  products: 562,
  openTickets: 27,
};

export const revenueByMonth = [
  { month: "Jan", revenue: 285000, expenses: 142000, profit: 143000 },
  { month: "Feb", revenue: 312000, expenses: 158000, profit: 154000 },
  { month: "Mar", revenue: 348000, expenses: 172000, profit: 176000 },
  { month: "Apr", revenue: 372000, expenses: 181000, profit: 191000 },
  { month: "May", revenue: 401000, expenses: 195000, profit: 206000 },
  { month: "Jun", revenue: 428000, expenses: 207000, profit: 221000 },
  { month: "Jul", revenue: 455000, expenses: 218000, profit: 237000 },
  { month: "Aug", revenue: 482000, expenses: 232000, profit: 250000 },
  { month: "Sep", revenue: 461000, expenses: 224000, profit: 237000 },
  { month: "Oct", revenue: 498000, expenses: 241000, profit: 257000 },
  { month: "Nov", revenue: 521000, expenses: 252000, profit: 269000 },
  { month: "Dec", revenue: 568000, expenses: 273000, profit: 295000 },
];

export const salesByCategory = [
  { name: "Software", value: 1_482_000 },
  { name: "Services", value: 1_120_000 },
  { name: "Hardware", value: 845_000 },
  { name: "Subscriptions", value: 540_000 },
  { name: "Training", value: 300_500 },
];

export const recentActivities = [
  { who: "Sarah Khan", what: "closed deal", obj: "Acme Corp — $48,000", when: "2m ago", tone: "success" },
  { who: "Ahmed Raza", what: "created invoice", obj: "INV-2451", when: "12m ago", tone: "info" },
  { who: "Priya Singh", what: "added customer", obj: "Globex Industries", when: "34m ago", tone: "info" },
  { who: "Helpdesk", what: "ticket escalated", obj: "#TCK-1187", when: "1h ago", tone: "warning" },
  { who: "Finance", what: "payment received", obj: "$12,400 — Initech", when: "2h ago", tone: "success" },
  { who: "HR", what: "onboarded employee", obj: "Daniyal Hassan", when: "3h ago", tone: "info" },
];

export const recentTransactions = [
  { id: "TXN-9821", party: "Acme Corp", type: "Invoice", amount: 48000, status: "Paid", date: "2026-06-21" },
  { id: "TXN-9820", party: "Globex Industries", type: "Invoice", amount: 12400, status: "Pending", date: "2026-06-21" },
  { id: "TXN-9819", party: "Initech", type: "Payment", amount: 8200, status: "Paid", date: "2026-06-20" },
  { id: "TXN-9818", party: "Umbrella LLC", type: "Refund", amount: 1200, status: "Refunded", date: "2026-06-20" },
  { id: "TXN-9817", party: "Stark Industries", type: "Invoice", amount: 92500, status: "Paid", date: "2026-06-19" },
  { id: "TXN-9816", party: "Wayne Enterprises", type: "Invoice", amount: 33100, status: "Overdue", date: "2026-06-18" },
];

export const leads = [
  { id: "LD-1001", name: "Hassan Tariq", company: "Nexora Tech", email: "hassan@nexora.io", phone: "+92 300 1234567", source: "Website", stage: "Qualified", value: 24000, owner: "Sarah Khan" },
  { id: "LD-1002", name: "Lina Park", company: "Bluewave Studios", email: "lina@bluewave.co", phone: "+1 415 555 0144", source: "Referral", stage: "Contacted", value: 8200, owner: "Ahmed Raza" },
  { id: "LD-1003", name: "Marco Vitale", company: "Vitale & Co", email: "m.vitale@vc.com", phone: "+39 02 555 1190", source: "Event", stage: "New", value: 0, owner: "Priya Singh" },
  { id: "LD-1004", name: "Aisha Noor", company: "Noor Holdings", email: "aisha@noor.ae", phone: "+971 50 222 9981", source: "LinkedIn", stage: "Proposal", value: 56000, owner: "Sarah Khan" },
  { id: "LD-1005", name: "Tomáš Novák", company: "Praha Logistics", email: "t.novak@pl.cz", phone: "+420 222 555 11", source: "Cold Call", stage: "Qualified", value: 18500, owner: "Daniyal H." },
  { id: "LD-1006", name: "Mei Chen", company: "Zenith Apparel", email: "mei@zenith.cn", phone: "+86 21 6555 7788", source: "Website", stage: "Won", value: 41000, owner: "Sarah Khan" },
  { id: "LD-1007", name: "Owen Reilly", company: "Reilly & Sons", email: "owen@reilly.ie", phone: "+353 1 555 4422", source: "Referral", stage: "Lost", value: 0, owner: "Ahmed Raza" },
  { id: "LD-1008", name: "Fatima Zahra", company: "Atlas Realty", email: "fatima@atlas.ma", phone: "+212 522 555 901", source: "Website", stage: "Contacted", value: 12200, owner: "Priya Singh" },
];

export const contacts = leads.map(l => ({ id: l.id.replace("LD","CT"), name: l.name, email: l.email, phone: l.phone, company: l.company, title: "Director" }));

export const companies = [
  { id: "CO-001", name: "Acme Corp", industry: "Manufacturing", size: "500-1000", revenue: 48_000_000, country: "USA", owner: "Sarah Khan" },
  { id: "CO-002", name: "Globex Industries", industry: "Logistics", size: "200-500", revenue: 22_000_000, country: "Germany", owner: "Ahmed Raza" },
  { id: "CO-003", name: "Initech", industry: "Software", size: "50-200", revenue: 9_500_000, country: "USA", owner: "Priya Singh" },
  { id: "CO-004", name: "Stark Industries", industry: "Defense", size: "1000+", revenue: 240_000_000, country: "USA", owner: "Sarah Khan" },
  { id: "CO-005", name: "Wayne Enterprises", industry: "Conglomerate", size: "1000+", revenue: 310_000_000, country: "USA", owner: "Ahmed Raza" },
  { id: "CO-006", name: "Umbrella LLC", industry: "Pharma", size: "500-1000", revenue: 64_000_000, country: "UK", owner: "Priya Singh" },
  { id: "CO-007", name: "Nexora Tech", industry: "Software", size: "50-200", revenue: 4_200_000, country: "Pakistan", owner: "Daniyal H." },
  { id: "CO-008", name: "Atlas Realty", industry: "Real Estate", size: "200-500", revenue: 18_000_000, country: "Morocco", owner: "Sarah Khan" },
];

export const dealStages = ["Lead In", "Qualified", "Proposal", "Negotiation", "Won", "Lost"] as const;
export const deals = [
  { id: "D-2001", title: "Acme — ERP rollout", company: "Acme Corp", value: 120000, stage: "Proposal", owner: "Sarah Khan", close: "2026-07-12" },
  { id: "D-2002", title: "Globex — Logistics module", company: "Globex Industries", value: 48000, stage: "Negotiation", owner: "Ahmed Raza", close: "2026-07-02" },
  { id: "D-2003", title: "Initech — Cloud migration", company: "Initech", value: 36000, stage: "Qualified", owner: "Priya Singh", close: "2026-07-25" },
  { id: "D-2004", title: "Stark — Defense BI", company: "Stark Industries", value: 410000, stage: "Won", owner: "Sarah Khan", close: "2026-06-14" },
  { id: "D-2005", title: "Wayne — HR Suite", company: "Wayne Enterprises", value: 215000, stage: "Negotiation", owner: "Ahmed Raza", close: "2026-08-10" },
  { id: "D-2006", title: "Umbrella — Compliance", company: "Umbrella LLC", value: 88000, stage: "Lead In", owner: "Priya Singh", close: "2026-08-21" },
  { id: "D-2007", title: "Nexora — Implementation", company: "Nexora Tech", value: 24000, stage: "Qualified", owner: "Daniyal H.", close: "2026-07-30" },
  { id: "D-2008", title: "Atlas — Real estate CRM", company: "Atlas Realty", value: 54000, stage: "Lead In", owner: "Sarah Khan", close: "2026-08-02" },
  { id: "D-2009", title: "Zenith — Apparel WMS", company: "Zenith Apparel", value: 72000, stage: "Won", owner: "Sarah Khan", close: "2026-06-09" },
  { id: "D-2010", title: "Praha — TMS", company: "Praha Logistics", value: 31000, stage: "Lost", owner: "Daniyal H.", close: "2026-06-01" },
];

export const products = Array.from({ length: 24 }).map((_, i) => ({
  id: `SKU-${1000 + i}`,
  name: ["Z-CRM License", "Z-ERP License", "Z-HR Module", "Z-Books Plus", "POS Terminal X1", "Warehouse Scanner", "Implementation Pack", "Premium Support", "Training Voucher", "API Add-on", "Mobile Add-on", "Analytics Plus"][i % 12] + ` ${i + 1}`,
  category: ["Software", "Hardware", "Services", "Subscriptions"][i % 4],
  price: 99 + (i * 37) % 1800,
  stock: (i * 53) % 420,
  status: i % 7 === 0 ? "Low Stock" : i % 11 === 0 ? "Out of Stock" : "In Stock",
}));

export const warehouses = [
  { id: "WH-01", name: "Karachi Central", location: "Karachi, PK", capacity: 12000, used: 9420, manager: "Bilal Yusuf" },
  { id: "WH-02", name: "Dubai Logistics Hub", location: "Dubai, AE", capacity: 18000, used: 11200, manager: "Aisha Noor" },
  { id: "WH-03", name: "London Distribution", location: "London, UK", capacity: 9000, used: 6800, manager: "Owen Reilly" },
  { id: "WH-04", name: "NY Eastern", location: "New Jersey, US", capacity: 22000, used: 15400, manager: "Sarah Connor" },
];

export const stockMovements = Array.from({ length: 12 }).map((_, i) => ({
  id: `MV-${5000 + i}`,
  sku: `SKU-${1000 + (i % 10)}`,
  type: i % 3 === 0 ? "Inbound" : i % 3 === 1 ? "Outbound" : "Transfer",
  qty: ((i + 1) * 17) % 90 + 1,
  warehouse: ["WH-01", "WH-02", "WH-03", "WH-04"][i % 4],
  date: `2026-06-${String((i % 22) + 1).padStart(2, "0")}`,
  user: ["Bilal Y.", "Aisha N.", "Owen R.", "Sarah C."][i % 4],
}));

export const vendors = [
  { id: "VND-01", name: "TechSource GmbH", category: "Hardware", country: "Germany", spend: 482_000, rating: 4.6, status: "Active" },
  { id: "VND-02", name: "Cloud Infra Co", category: "Services", country: "USA", spend: 312_000, rating: 4.8, status: "Active" },
  { id: "VND-03", name: "BoxLine Logistics", category: "Logistics", country: "UAE", spend: 145_000, rating: 4.2, status: "Active" },
  { id: "VND-04", name: "OfficeMart", category: "Supplies", country: "Pakistan", spend: 38_000, rating: 4.0, status: "Active" },
  { id: "VND-05", name: "PrintWorks Ltd", category: "Marketing", country: "UK", spend: 22_500, rating: 3.9, status: "Inactive" },
];

export const employees = Array.from({ length: 16 }).map((_, i) => ({
  id: `EMP-${200 + i}`,
  name: ["Sarah Khan","Ahmed Raza","Priya Singh","Daniyal Hassan","Bilal Yusuf","Aisha Noor","Owen Reilly","Mei Chen","Tomáš Novák","Lina Park","Marco Vitale","Hassan Tariq","Fatima Zahra","Yusra Ali","Imran Sheikh","Zara Ahmad"][i],
  department: ["Sales","Sales","CRM","Engineering","Warehouse","Operations","Sales","Marketing","Logistics","Design","Finance","Support","Sales","HR","Engineering","Product"][i],
  designation: ["Account Exec","Account Exec","CRM Lead","Sr Engineer","Warehouse Mgr","Ops Director","Account Exec","Marketing Lead","Logistics Mgr","Sr Designer","Accountant","Support Eng","Account Exec","HR Manager","Engineer","Product Mgr"][i],
  email: "person@zit.com",
  status: i % 9 === 0 ? "On Leave" : "Active",
  joined: `202${(i % 5) + 1}-0${(i % 9) + 1}-1${i % 9}`,
}));

export const departments = ["Sales","Engineering","Operations","Finance","HR","Marketing","Support","Logistics","Design","Product"];

export const projects = [
  { id: "PRJ-01", name: "Acme ERP Rollout", client: "Acme Corp", lead: "Sarah Khan", progress: 72, status: "On Track", due: "2026-09-15", budget: 240000 },
  { id: "PRJ-02", name: "Globex Logistics Module", client: "Globex Industries", lead: "Daniyal Hassan", progress: 45, status: "At Risk", due: "2026-08-22", budget: 120000 },
  { id: "PRJ-03", name: "Stark Defense BI", client: "Stark Industries", lead: "Ahmed Raza", progress: 90, status: "On Track", due: "2026-07-01", budget: 410000 },
  { id: "PRJ-04", name: "Wayne HR Suite", client: "Wayne Enterprises", lead: "Yusra Ali", progress: 30, status: "Delayed", due: "2026-10-12", budget: 215000 },
  { id: "PRJ-05", name: "Internal Z-ERP v3", client: "Z IT Solutions", lead: "Zara Ahmad", progress: 60, status: "On Track", due: "2026-12-01", budget: 800000 },
];

export const tasks = Array.from({ length: 14 }).map((_, i) => ({
  id: `TSK-${300 + i}`,
  title: ["Design schema","Build API","Write tests","Review PR","Client demo","Deploy staging","Fix bug","Onboard user","Data migration","UI polish","Security audit","Performance tuning","Docs update","Sprint planning"][i],
  project: ["PRJ-01","PRJ-02","PRJ-03","PRJ-04","PRJ-05"][i % 5],
  assignee: employees[i % employees.length].name,
  status: ["Todo","In Progress","Review","Done"][i % 4],
  priority: ["Low","Medium","High","Urgent"][i % 4],
  due: `2026-07-${String((i % 27) + 1).padStart(2, "0")}`,
}));

export const tickets = Array.from({ length: 12 }).map((_, i) => ({
  id: `TCK-${1180 + i}`,
  subject: ["Login issue","Invoice not generated","Slow report","Feature request: bulk import","Cannot create user","Email not sending","Mobile app crash","Permission denied","Export to PDF broken","Webhook failing","Data discrepancy","Integration with QB"][i],
  customer: companies[i % companies.length].name,
  priority: ["Low","Medium","High","Urgent"][i % 4],
  status: ["Open","Pending","In Progress","Resolved","Closed"][i % 5],
  agent: employees[i % employees.length].name,
  created: `2026-06-${String((i % 22) + 1).padStart(2,"0")}`,
}));

export const candidates = [
  { id: "CAN-01", name: "Areeba Khan", role: "Frontend Engineer", stage: "Interview", source: "LinkedIn", score: 8.4 },
  { id: "CAN-02", name: "Saad Iqbal", role: "Backend Engineer", stage: "Offer", source: "Referral", score: 9.1 },
  { id: "CAN-03", name: "Hira Yousuf", role: "Product Designer", stage: "Screening", source: "Website", score: 7.8 },
  { id: "CAN-04", name: "Bilal Ahmed", role: "QA Engineer", stage: "Interview", source: "LinkedIn", score: 7.2 },
  { id: "CAN-05", name: "Maham Tariq", role: "Account Exec", stage: "Hired", source: "Referral", score: 9.4 },
];

export const jobOpenings = [
  { id: "JOB-01", title: "Senior Frontend Engineer", department: "Engineering", location: "Karachi / Remote", applicants: 84, status: "Open" },
  { id: "JOB-02", title: "Backend Engineer", department: "Engineering", location: "Dubai", applicants: 56, status: "Open" },
  { id: "JOB-03", title: "Product Designer", department: "Design", location: "Remote", applicants: 121, status: "Open" },
  { id: "JOB-04", title: "Sales Account Executive", department: "Sales", location: "London", applicants: 42, status: "Closed" },
  { id: "JOB-05", title: "QA Engineer", department: "Engineering", location: "Karachi", applicants: 38, status: "Open" },
];

export const accounts = [
  { code: "1000", name: "Cash", type: "Asset", balance: 482_000 },
  { code: "1100", name: "Accounts Receivable", type: "Asset", balance: 318_400 },
  { code: "1500", name: "Inventory", type: "Asset", balance: 642_000 },
  { code: "2000", name: "Accounts Payable", type: "Liability", balance: 186_000 },
  { code: "2100", name: "Loans Payable", type: "Liability", balance: 420_000 },
  { code: "3000", name: "Equity", type: "Equity", balance: 1_200_000 },
  { code: "4000", name: "Sales Revenue", type: "Revenue", balance: 4_287_500 },
  { code: "5000", name: "Cost of Goods Sold", type: "Expense", balance: 1_980_000 },
  { code: "6000", name: "Salaries Expense", type: "Expense", balance: 820_000 },
  { code: "6100", name: "Rent Expense", type: "Expense", balance: 96_000 },
];

export const documents = Array.from({ length: 12 }).map((_, i) => ({
  id: `DOC-${4000 + i}`,
  name: ["Q2 Financials.pdf","Acme MSA.docx","Stark Proposal.pdf","HR Policy v3.pdf","Roadmap 2026.xlsx","Vendor List.csv","Brand Guidelines.pdf","Security Audit.pdf","Payroll June.xlsx","Org Chart.png","Project Charter.docx","Client Onboarding.pdf"][i],
  folder: ["Finance","Legal","Sales","HR","Product","Vendors","Brand","Security","HR","HR","Projects","Sales"][i],
  size: `${(0.4 + i * 0.3).toFixed(1)} MB`,
  owner: employees[i % employees.length].name,
  updated: `2026-06-${String((i % 22) + 1).padStart(2,"0")}`,
}));

export const quotations = Array.from({ length: 8 }).map((_, i) => ({
  id: `QT-${3000 + i}`,
  customer: companies[i % companies.length].name,
  amount: 5000 + i * 3700,
  status: ["Draft","Sent","Accepted","Rejected"][i % 4],
  date: `2026-06-${String((i % 22) + 1).padStart(2,"0")}`,
}));

export const salesOrders = quotations.map((q, i) => ({
  id: `SO-${4000 + i}`,
  customer: q.customer,
  amount: q.amount + 500,
  status: ["Confirmed","Processing","Shipped","Delivered"][i % 4],
  date: q.date,
}));

export const invoices = quotations.map((q, i) => ({
  id: `INV-${2450 + i}`,
  customer: q.customer,
  amount: q.amount + 800,
  status: ["Paid","Pending","Overdue","Partial"][i % 4],
  due: `2026-07-${String((i % 27) + 1).padStart(2,"0")}`,
}));

export const expenses = Array.from({ length: 10 }).map((_, i) => ({
  id: `EXP-${600 + i}`,
  category: ["Salaries","Rent","Utilities","Marketing","Travel","Software","Office","Training","Legal","Misc"][i],
  amount: 3000 + i * 1800,
  vendor: vendors[i % vendors.length].name,
  date: `2026-06-${String((i % 22) + 1).padStart(2,"0")}`,
  status: i % 3 === 0 ? "Pending" : "Approved",
}));

export const knowledgeArticles = [
  { id: "KB-01", title: "Getting started with Z ERP", category: "Onboarding", views: 1842 },
  { id: "KB-02", title: "Creating your first invoice", category: "Finance", views: 1205 },
  { id: "KB-03", title: "Managing inventory across warehouses", category: "Inventory", views: 982 },
  { id: "KB-04", title: "Setting up roles & permissions", category: "Admin", views: 754 },
  { id: "KB-05", title: "Connecting Stripe & PayPal", category: "Integrations", views: 612 },
  { id: "KB-06", title: "Importing customers from CSV", category: "CRM", views: 538 },
];
