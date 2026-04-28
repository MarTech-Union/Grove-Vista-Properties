"use client";

import { useRouter } from "next/navigation";
import PropertyForm from "@/components/admin/PropertyForm";

export default function NewPropertyPage() {
  const router = useRouter();

  async function handleSubmit(form) {
    const res = await fetch("/api/admin/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.message || "Failed to create property.");
    }

    router.push("/admin/properties");
    router.refresh();
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-xl font-bold text-slate-900">Add New Property</h2>
      <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
        <PropertyForm onSubmit={handleSubmit} submitLabel="Create Property" />
      </div>
    </div>
  );
}
