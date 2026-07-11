import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicy() {
  return (
    <>
    <PageHero
            eyebrow="Privacy Policy"
            title="Your Privacy, Our Commitment "
            subtitle="SOLVEX Engineering FZ LLC values your trust. We are committed to protecting your personal information and ensuring transparency in how it is collected, used, and safeguarded."
            image="/images/terms-privacy.avif"
          />
    
    <section className="mx-auto max-w-[800px] px-6 py-32 lg:px-8">
          <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
<p className="text-gray-600 mb-4">
  At SOLVEX Engineering FZ LLC, we respect your privacy and are committed to
  protecting the personal information you share with us. This policy explains
  how we collect, use, and safeguard your data when you interact with our
  website and services.
</p>

<h2 className="mt-6 mb-2 text-xl font-semibold">Information We Collect</h2>
<ul className="list-disc list-inside text-gray-600 mb-4">
  <li>Contact details (name, email, phone number)</li>
  <li>Project or inquiry information submitted through forms</li>
  <li>Technical data such as IP address, browser type, and cookies</li>
</ul>

<h2 className="mt-6 mb-2 text-xl font-semibold">How We Use Information</h2>
<ul className="list-disc list-inside text-gray-600 mb-4">
  <li>Responding to inquiries and providing requested services</li>
  <li>Improving website functionality and user experience</li>
  <li>Complying with legal and regulatory obligations</li>
</ul>

<h2 className="mt-6 mb-2 text-xl font-semibold">Information Sharing</h2>
<p className="text-gray-600 mb-4">
  We do not sell or rent your personal data. Information may be shared with
  trusted service providers under confidentiality agreements or disclosed if
  required by law.
</p>

<h2 className="mt-6 mb-2 text-xl font-semibold">Data Security</h2>
<p className="text-gray-600 mb-4">
  We implement SSL encryption and restrict access to personal information to
  authorized personnel only.
</p>

<h2 className="mt-6 mb-2 text-xl font-semibold">Cookies & Tracking</h2>
<p className="text-gray-600 mb-4">
  Our website uses cookies to enhance functionality and analyze traffic. You
  may disable cookies in your browser settings, though some features may not
  work properly.
</p>

<h2 className="mt-6 mb-2 text-xl font-semibold">User Rights</h2>
<p className="text-gray-600 mb-4">
  You have the right to access, correct, or request deletion of your personal
  data, and to withdraw consent for data processing at any time.
</p>

<h2 className="mt-6 mb-2 text-xl font-semibold">Retention Policy</h2>
<p className="text-gray-600 mb-4">
  Personal data is retained only as long as necessary to fulfill business,
  legal, or regulatory requirements.
</p>

<h2 className="mt-6 mb-2 text-xl font-semibold">Contact Information</h2>
<p className="text-gray-600">
  For privacy inquiries, please visit our 
  <a href="/contact" className="text-blue-600 underline"> Contact Page</a>.
</p>

    </section>
    </>
  );
}
