"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const TYPES = ["Apartment", "Villa", "Townhouse", "Penthouse", "Studio"];
const STATUSES = ["Ready", "Off Plan"];
const TAGS = ["HOT DEAL", "PREMIUM", "OFF PLAN", "FURNISHED", "EXCLUSIVE", ""];

export default function PropertyForm({ initialData, onSubmit, submitLabel = "Save Property" }) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: initialData?.title || "",
    price: initialData?.price || "",
    priceCr: initialData?.priceCr || "",
    location: initialData?.location || "",
    type: initialData?.type || "Apartment",
    status: initialData?.status || "Ready",
    sqft: initialData?.sqft || "",
    beds: initialData?.beds || "",
    baths: initialData?.baths || "",
    image: initialData?.image || "",
    description: initialData?.description || "",
    tag: initialData?.tag || "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function set(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await onSubmit(form);
    } catch (err) {
      setError(err.message || "Failed to save property.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20";
  const labelClass = "block text-sm font-semibold text-slate-700 mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Title */}
      <div>
        <label className={labelClass}>Title *</label>
        <input type="text" value={form.title} onChange={set("title")} required className={inputClass} placeholder="Golf Course View | Ultra Luxury | Ready" />
      </div>

      {/* Price row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Display Price *</label>
          <input type="text" value={form.price} onChange={set("price")} required className={inputClass} placeholder="INR 45.00 Cr" />
        </div>
        <div>
          <label className={labelClass}>Price in Cr (numeric)</label>
          <input type="number" step="0.01" value={form.priceCr} onChange={set("priceCr")} className={inputClass} placeholder="45" />
        </div>
      </div>

      {/* Location */}
      <div>
        <label className={labelClass}>Location *</label>
        <input type="text" value={form.location} onChange={set("location")} required className={inputClass} placeholder="Mulund, Mumbai" />
      </div>

      {/* Type / Status / Tag */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className={labelClass}>Type *</label>
          <select value={form.type} onChange={set("type")} className={inputClass}>
            {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Status *</label>
          <select value={form.status} onChange={set("status")} className={inputClass}>
            {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Tag</label>
          <select value={form.tag} onChange={set("tag")} className={inputClass}>
            {TAGS.map((t) => <option key={t} value={t}>{t || "— None —"}</option>)}
          </select>
        </div>
      </div>

      {/* Beds / Baths / Sqft */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className={labelClass}>Beds</label>
          <input type="number" min="0" value={form.beds} onChange={set("beds")} className={inputClass} placeholder="4" />
        </div>
        <div>
          <label className={labelClass}>Baths</label>
          <input type="number" min="0" value={form.baths} onChange={set("baths")} className={inputClass} placeholder="5" />
        </div>
        <div>
          <label className={labelClass}>Area (sqft)</label>
          <input type="text" value={form.sqft} onChange={set("sqft")} className={inputClass} placeholder="7,100" />
        </div>
      </div>

      {/* Image URL */}
      <div>
        <label className={labelClass}>Image URL</label>
        <input type="url" value={form.image} onChange={set("image")} className={inputClass} placeholder="https://images.unsplash.com/…" />
        {form.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={form.image} alt="Preview" className="mt-2 h-32 w-full rounded-xl object-cover border border-slate-100" onError={(e) => { e.target.style.display = "none"; }} />
        )}
      </div>

      {/* Description */}
      <div>
        <label className={labelClass}>Description</label>
        <textarea value={form.description} onChange={set("description")} rows={4} className={inputClass + " resize-none"} placeholder="Stunning ultra-luxury apartment with…" />
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {loading ? "Saving…" : submitLabel}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
