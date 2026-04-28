import { Suspense } from "react";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

export const metadata = { title: "Admin Login | Grove Vista Properties" };

export default function AdminLoginPage() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="mb-8 text-center">
          <p className="text-3xl font-black tracking-tight">
            <span className="text-blue-400">Grove Vista</span>
            <span className="text-white"> Properties</span>
          </p>
          <p className="mt-1 text-sm font-medium text-slate-400">Admin Panel</p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-2xl shadow-black/30">
          <h1 className="mb-1 text-xl font-bold text-slate-900">Sign in</h1>
          <p className="mb-6 text-sm text-slate-500">Enter your admin password to continue.</p>
          <Suspense>
            <AdminLoginForm />
          </Suspense>
        </div>

        <p className="mt-6 text-center text-xs text-slate-600">
          Grove Vista Properties · Admin Only
        </p>
      </div>
    </div>
  );
}
