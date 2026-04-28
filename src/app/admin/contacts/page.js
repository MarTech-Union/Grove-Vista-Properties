"use client";

import { useState, useEffect, useCallback } from "react";
import DataTable from "@/components/admin/DataTable";
import Link from "next/link";

function fmt(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  } catch { return dateStr; }
}

const COLUMNS = [
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  {
    key: "submittedAt",
    label: "Submitted",
    render: (v) => fmt(v),
  },
  {
    key: "id",
    label: "Detail",
    sortable: false,
    render: (v) => (
      <Link href={`/admin/contacts/${v}`} className="text-blue-600 hover:underline text-xs font-semibold">
        View →
      </Link>
    ),
  },
];

export default function ContactsPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/contacts?limit=100");
      const data = await res.json();
      setRows(data.items || []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  async function handleDelete(id) {
    await fetch(`/api/admin/contacts/${id}`, { method: "DELETE" });
    setRows((prev) => prev.filter((r) => r.id !== id));
  }

  async function handleBulkDelete(ids) {
    await fetch("/api/admin/contacts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids }),
    });
    setRows((prev) => prev.filter((r) => !ids.includes(r.id)));
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="w-6 h-6 rounded-full border-2 border-blue-600 border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Contact Submissions</h2>
          <p className="text-sm text-slate-500 mt-0.5">{rows.length} total submission{rows.length !== 1 ? "s" : ""}</p>
        </div>
      </div>
      <DataTable
        columns={COLUMNS}
        rows={rows}
        onDelete={handleDelete}
        onBulkDelete={handleBulkDelete}
        searchPlaceholder="Search by name, email…"
        emptyMessage="No contact submissions yet."
      />
    </div>
  );
}
