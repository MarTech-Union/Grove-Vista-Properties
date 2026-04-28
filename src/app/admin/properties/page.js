"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import ConfirmModal from "@/components/admin/ConfirmModal";

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/properties");
      const data = await res.json();
      setProperties(data.items || []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  async function handleDelete() {
    if (!deleteTarget) return;
    await fetch(`/api/admin/properties/${deleteTarget}`, { method: "DELETE" });
    setProperties((prev) => prev.filter((p) => p.id !== deleteTarget));
    setDeleteTarget(null);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="w-6 h-6 rounded-full border-2 border-blue-600 border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <>
      <ConfirmModal
        open={!!deleteTarget}
        title="Delete property?"
        message="This will permanently remove this listing from the public /buy page. Cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />

      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Properties</h2>
            <p className="text-sm text-slate-500 mt-0.5">{properties.length} listing{properties.length !== 1 ? "s" : ""}</p>
          </div>
          <Link
            href="/admin/properties/new"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
            Add Property
          </Link>
        </div>

        {properties.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white py-20 text-center">
            <p className="text-slate-500 text-sm">No properties. Add your first listing.</p>
            <Link href="/admin/properties/new" className="mt-3 inline-block text-sm font-semibold text-blue-600 hover:underline">
              Add Property →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {properties.map((p) => (
              <div key={p.id} className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden group">
                {/* Image */}
                <div className="relative h-44 bg-slate-100">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  {p.tag && (
                    <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                      {p.tag}
                    </span>
                  )}
                  <span className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold text-white ${p.status === "Ready" ? "bg-emerald-500" : "bg-amber-500"}`}>
                    {p.status}
                  </span>
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="text-base font-bold text-slate-900 truncate">{p.price}</p>
                  <p className="text-xs font-semibold text-slate-700 truncate mt-0.5">{p.title}</p>
                  <p className="text-xs text-slate-500 truncate mt-0.5">{p.location}</p>
                  <div className="mt-2 flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <span>{p.beds} beds</span>
                    <span>{p.baths} baths</span>
                    <span>{p.sqft} sqft</span>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <Link
                      href={`/admin/properties/${p.id}/edit`}
                      className="flex-1 rounded-xl border border-slate-200 py-2 text-center text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => setDeleteTarget(p.id)}
                      className="rounded-xl border border-red-100 px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
