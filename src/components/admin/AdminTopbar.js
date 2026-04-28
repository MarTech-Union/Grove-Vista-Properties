"use client";

import { usePathname, useRouter } from "next/navigation";

const BREADCRUMBS = {
  "/admin/dashboard": "Dashboard",
  "/admin/contacts": "Contact Submissions",
  "/admin/applications": "Career Applications",
  "/admin/properties": "Properties",
  "/admin/properties/new": "New Property",
};

function getBreadcrumb(pathname) {
  if (BREADCRUMBS[pathname]) return BREADCRUMBS[pathname];
  if (pathname.endsWith("/edit")) return "Edit Property";
  if (pathname.match(/\/admin\/contacts\/.+/)) return "Contact Detail";
  if (pathname.match(/\/admin\/applications\/.+/)) return "Application Detail";
  return "Admin";
}

export default function AdminTopbar({ onMenuClick }) {
  const pathname = usePathname();
  const router = useRouter();
  const title = getBreadcrumb(pathname);

  async function handleLogout() {
    await fetch("/api/admin/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-100 bg-white px-4 sm:px-6 shrink-0">
      <div className="flex items-center gap-3">
        {/* Mobile hamburger */}
        <button
          onClick={onMenuClick}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-base font-bold text-slate-900">{title}</h1>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-sm">
          A
        </div>
        <span className="hidden sm:block text-sm font-semibold text-slate-700">Admin</span>
        <button
          onClick={handleLogout}
          className="ml-2 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-500 border border-slate-200 hover:bg-slate-50 transition-colors"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
