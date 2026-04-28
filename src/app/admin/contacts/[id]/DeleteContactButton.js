"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ConfirmModal from "@/components/admin/ConfirmModal";

export default function DeleteContactButton({ id }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  async function handleDelete() {
    await fetch(`/api/admin/contacts/${id}`, { method: "DELETE" });
    router.push("/admin/contacts");
    router.refresh();
  }

  return (
    <>
      <ConfirmModal
        open={open}
        title="Delete contact?"
        message="This will permanently delete this contact submission. This cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => setOpen(false)}
      />
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-red-700 transition-colors"
      >
        Delete Contact
      </button>
    </>
  );
}
