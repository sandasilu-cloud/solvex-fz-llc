"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" required>
          <input type="text" required className="field-input" />
        </Field>
        <Field label="Company">
          <input type="text" className="field-input" />
        </Field>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Phone" required>
          <input type="tel" required className="field-input" />
        </Field>
        <Field label="Email" required>
          <input type="email" required className="field-input" />
        </Field>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Country">
          <input type="text" className="field-input" />
        </Field>
        <Field label="Service Required">
          <select className="field-input">
            <option>System Design & Commissioning</option>
            <option>Testing & Inspection</option>
            <option>Predictive Maintenance</option>
            <option>Energy Management</option>
            <option>Other</option>
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message">
          <textarea rows={4} className="field-input" />
        </Field>
      </div>
      <button
        type="submit"
        className="mt-2 w-full rounded-sm bg-cyan py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0093cc]"
      >
        Send Enquiry
      </button>
      {sent && (
        <p className="mt-4 text-[13px] text-cyan">
          Thank you — your enquiry has been received. Our team will contact you shortly.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[12.5px] font-semibold text-navy">
        {label}
        {required && <span className="text-cyan"> *</span>}
      </label>
      {children}
    </div>
  );
}
