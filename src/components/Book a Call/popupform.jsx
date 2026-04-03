"use client";

import { useState } from "react";

export default function PopupForm({ open, onClose }) {
  const [internalOpen, setInternalOpen] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : internalOpen;

  const handleClose = () => {
    if (isControlled) {
      onClose?.();
      return;
    }

    setInternalOpen(false);
    onClose?.();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: (formData.get("fullName") || "").toString().trim(),
      email: (formData.get("email") || "").toString().trim(),
      mobile: (formData.get("mobile") || "").toString().trim(),
    };

    try {
      const response = await fetch("/api/careers/book-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        setSubmitStatus("error");
        setSubmitMessage(result?.message || "Unable to submit your request. Please try again.");
        return;
      }

      setSubmitStatus("success");
      setSubmitMessage(result?.message || "Call request submitted successfully.");
      event.currentTarget.reset();
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Network error. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      
      {/* Popup Box */}
      <div className="bg-white w-full max-w-md rounded-2xl p-6 relative shadow-xl animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-xl font-bold text-gray-500 hover:text-black"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center">Join Us</h2>
        <p className="text-center text-gray-500 mb-6">
          Are you ready to build your success story?
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="text-sm font-semibold">Full Name*</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold">Email*</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-semibold">Mobile*</label>
            <input
              type="tel"
              name="mobile"
              placeholder="+91 98XXXXXXXX"
              className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-700 transition"
          >
            {isSubmitting ? "Submitting..." : "Submit Details"}
          </button>

          {submitMessage ? (
            <p className={`text-xs text-center font-medium ${submitStatus === "success" ? "text-green-600" : "text-red-600"}`}>
              {submitMessage}
            </p>
          ) : null}

          {/* Terms */}
          <p className="text-xs text-center text-gray-500">
            By clicking Submit, you agree to our{" "}
            <span className="text-blue-600 cursor-pointer">Terms</span> &{" "}
            <span className="text-blue-600 cursor-pointer">
              Privacy Policy
            </span>.
          </p>

        </form>
      </div>
    </div>
  );
}