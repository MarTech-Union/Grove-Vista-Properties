import { readJSON } from "@/lib/jsonDb";
import { notFound } from "next/navigation";
import Link from "next/link";
import DeleteContactButton from "./DeleteContactButton";

export const dynamic = "force-dynamic";

function Row({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-3 border-b  border-slate-50 last:border-0">
      <span className="w-36 shrink-0 text-xs font-semibold text-slate-500 uppercase tracking-wide">{label}</span>
      <span className="text-sm text-slate-800 break-all">{value || "—"}</span>
    </div>
  );
}

export default async function ContactDetailPage({ params }) {
  const { id } = await params;
  const contacts = await readJSON("contacts.json");
  const contact = contacts.find((c) => c.id === id);
  if (!contact) notFound();

  return (
    <div className="max-w-2xl mx-auto space-y-6 ">
      <div className="flex items-center gap-4">
        <Link href="/admin/contacts" className="text-sm font-semibold text-blue-600 hover:underline">← Back</Link>
        <h2 className="text-xl font-bold text-slate-900">Contact Detail</h2>
      </div>

      <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
        <Row label="First Name" value={contact.firstName} />
        <Row label="Last Name" value={contact.lastName} />
        <Row label="Email" value={contact.email} />
        <Row label="Phone" value={contact.phone} />
        <Row label="Message" value={contact.message} />
        <Row label="Inquiry ID" value={contact.id} />
        <Row label="Submitted At" value={new Date(contact.submittedAt).toLocaleString("en-IN")} />
      </div>

      <DeleteContactButton id={id} />
    </div>
  );
}
