import { readJSON } from "@/lib/dataStore";
import StatCard from "@/components/admin/StatCard";
import Link from "next/link";

export const metadata = { title: "Dashboard | Grove Vista Admin" };
export const dynamic = "force-dynamic";

function fmt(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  } catch {
    return dateStr;
  }
}

export default async function DashboardPage() {
  const [contacts, applications, properties] = await Promise.all([
    readJSON("contacts.json"),
    readJSON("applications.json"),
    readJSON("properties.json"),
  ]);

  const recentContacts = [...contacts]
    .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt))
    .slice(0, 5);

  const recentApplications = [...applications]
    .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt))
    .slice(0, 5);

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Overview</h2>
        <p className="text-sm text-slate-500 mt-0.5">All stats are live from JSON data store.</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          }
          label="Total Properties"
          value={properties.length}
          trend="Live listings"
        />
        <StatCard
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          }
          label="Contact Submissions"
          value={contacts.length}
          trend="Total inquiries"
          trendUp={contacts.length > 0}
        />
        <StatCard
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }
          label="Career Applications"
          value={applications.length}
          trend="Total applicants"
          trendUp={applications.length > 0}
        />
      </div>

      {/* Recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent contacts */}
        <div className="rounded-2xl bg-white border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-50">
            <h3 className="font-bold text-slate-900 text-sm">Recent Contacts</h3>
            <Link href="/admin/contacts" className="text-xs font-semibold text-blue-600 hover:underline">View all →</Link>
          </div>
          <div className="divide-y divide-slate-50">
            {recentContacts.length === 0 ? (
              <p className="px-5 py-8 text-sm text-slate-400 text-center">No submissions yet.</p>
            ) : (
              recentContacts.map((c) => (
                <Link key={c.id} href={`/admin/contacts/${c.id}`} className="flex items-start justify-between px-5 py-3.5 hover:bg-slate-50/60 transition-colors group">
                  <div>
                    <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {c.firstName} {c.lastName}
                    </p>
                    <p className="text-xs text-slate-500 truncate max-w-[180px]">{c.email}</p>
                  </div>
                  <span className="text-xs text-slate-400 shrink-0 mt-0.5">{fmt(c.submittedAt)}</span>
                </Link>
              ))
            )}
          </div>
        </div>

        {/* Recent applications */}
        <div className="rounded-2xl bg-white border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-50">
            <h3 className="font-bold text-slate-900 text-sm">Recent Applications</h3>
            <Link href="/admin/applications" className="text-xs font-semibold text-blue-600 hover:underline">View all →</Link>
          </div>
          <div className="divide-y divide-slate-50">
            {recentApplications.length === 0 ? (
              <p className="px-5 py-8 text-sm text-slate-400 text-center">No applications yet.</p>
            ) : (
              recentApplications.map((a) => (
                <Link key={a.id} href={`/admin/applications/${a.id}`} className="flex items-start justify-between px-5 py-3.5 hover:bg-slate-50/60 transition-colors group">
                  <div>
                    <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{a.fullName}</p>
                    <p className="text-xs text-slate-500">{a.department}</p>
                  </div>
                  <span className="text-xs text-slate-400 shrink-0 mt-0.5">{fmt(a.submittedAt)}</span>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
