"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  if (pathname === "/admin/login") {
    return children;
  }

  const sidebarWidth = collapsed ? "64px" : "240px";

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[110] bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar — always fixed, full height */}
      <div
        className={`
          fixed inset-y-0 left-0 z-[120] h-full
          transition-all duration-200 ease-in-out
          ${collapsed ? "w-16" : "w-60"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <AdminSidebar
          collapsed={collapsed}
          onToggle={() => setCollapsed((c) => !c)}
        />
      </div>

      {/* Topbar — fixed, offset left by sidebar width on desktop */}
      <div
        className="fixed top-0 right-0 z-[100] h-16 transition-all duration-200 ease-in-out"
        style={{ left: sidebarWidth }}
      >
        <AdminTopbar onMenuClick={() => setMobileOpen((o) => !o)} />
      </div>

      {/* Mobile topbar — full width, no sidebar offset */}
      <div className="fixed top-0 left-0 right-0 h-16 z-[100] md:hidden">
        <AdminTopbar onMenuClick={() => setMobileOpen((o) => !o)} />
      </div>

      {/* Main content */}
      <main
        className="transition-all duration-200 ease-in-out min-h-screen pt-20 px-4 sm:px-6 pb-6 ml-0 md:ml-[var(--sidebar-width)]"
        style={{ "--sidebar-width": sidebarWidth }}
      >
        {children}
      </main>
    </div>
  );
}
