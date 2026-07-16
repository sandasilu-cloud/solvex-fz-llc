"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Honeypot field - hidden from real users, bots tend to fill it in */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" required>
          <input type="text" name="name" required className="field-input" />
        </Field>
        <Field label="Company">
          <input type="text" name="company" className="field-input" />
        </Field>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Phone" required>
          <input type="tel" name="phone" required className="field-input" />
        </Field>
        <Field label="Email" required>
          <input type="email" name="email" required className="field-input" />
        </Field>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Country">
          <input type="text" name="country" className="field-input" />
        </Field>
        <Field label="Service Required">
          <select name="service" className="field-input" defaultValue="">
            <option value="" disabled>--Please Select--</option>
            <option>Annual Maintenance Contracts (AMC)</option>
            <option>Boiler Systems</option>
            <option>Energy Management</option>
            <option>Extra Low Voltage Systems</option>
            <option>HVAC Systems</option>
            <option>Hot Water Systems</option>
            <option>Low Voltage Systems</option>
            <option>Medium Voltage Systems</option>
            <option>Non-Destructive Testing</option>
            <option>Operation & Maintenance</option>
            <option>Plumbing Systems</option>
            <option>Post-Installation Assistance</option>
            <option>Predictive Maintenance & Asset Management</option>
            <option>Reverse Osmosis Plants</option>
            <option>Sewage Treatment Plants</option>
            <option>Smart Building Systems</option>
            <option>Solid Waste Management Systems</option>
            <option>Swimming Pool Equipment</option>
            <option>System Design, Integration & Commissioning</option>
            <option>Technical Testing & Inspection</option>
            <option>User Training & Technical Support</option>
            <option>Warranty & Spare Parts</option>
            <option>Water Quality Monitoring</option>
            <option>Other </option>
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message">
          <textarea name="message" rows={4} className="field-input" />
        </Field>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 w-full rounded-sm bg-cyan py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0093cc] disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Enquiry"}
      </button>

      {status === "sent" && (
        <p className="mt-4 text-[13px] text-cyan">
          Thank you — your enquiry has been received. Our team will contact you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-[13px] text-red-500">
          Something went wrong. Please try again or email us directly.
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