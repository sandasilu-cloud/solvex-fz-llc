import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Terms of Use" };

export default function Terms() {
  return (
    <>
        <PageHero
                eyebrow="Terms of Use"
                title="Clear Expectations, Trusted Engagement "
                subtitle="SOLVEX Engineering FZ LLC provides this website for informational and business purposes, 
                and by accessing it you agree to use the content responsibly, respect intellectual property, and comply 
                with applicable laws. "
                image="/images/leadership.avif"
              />
    
    <section className="mx-auto max-w-[800px] px-6 py-32 lg:px-8">
      <h1 className="mb-6 text-3xl font-bold">Terms of Use</h1>
<p className="text-gray-600 mb-4">
  Welcome to the SOLVEX Engineering FZ LLC website. By accessing or using our
  site, you agree to comply with and be bound by the following Terms of Use.
  Please read them carefully, as they govern your relationship with SOLVEX
  Engineering FZ LLC.
</p>

<h2 className="mt-6 mb-2 text-xl font-semibold">Acceptance of Terms</h2>
<p className="text-gray-600 mb-4">
  By using this website, you acknowledge that you have read, understood, and
  agree to be bound by these Terms of Use, as well as our Privacy Policy.
</p>

<h2 className="mt-6 mb-2 text-xl font-semibold">Use of Website</h2>
<ul className="list-disc list-inside text-gray-600 mb-4">
  <li>This site is provided for informational and business purposes only.</li>
  <li>You agree not to misuse the website, including attempting unauthorized
      access or interfering with its functionality.</li>
  <li>All content is the property of SOLVEX Engineering FZ LLC and may not be
      copied, reproduced, or distributed without prior written consent.</li>
</ul>

<h2 className="mt-6 mb-2 text-xl font-semibold">Intellectual Property</h2>
<p className="text-gray-600 mb-4">
  All trademarks, logos, designs, and content displayed on this site are owned
  by SOLVEX Engineering FZ LLC or licensed to us. Unauthorized use is strictly
  prohibited.
</p>

<h2 className="mt-6 mb-2 text-xl font-semibold">Disclaimer</h2>
<p className="text-gray-600 mb-4">
  While we strive to ensure the accuracy of information on this site, SOLVEX
  Engineering FZ LLC makes no warranties or representations regarding its
  completeness or reliability. Use of the site is at your own risk.
</p>

<h2 className="mt-6 mb-2 text-xl font-semibold">Limitation of Liability</h2>
<p className="text-gray-600 mb-4">
  SOLVEX Engineering FZ LLC shall not be liable for any direct, indirect,
  incidental, or consequential damages arising from the use of this website or
  reliance on its content.
</p>

<h2 className="mt-6 mb-2 text-xl font-semibold">Third-Party Links</h2>
<p className="text-gray-600 mb-4">
  This website may contain links to external sites. SOLVEX Engineering FZ LLC
  is not responsible for the content, security, or practices of third-party
  websites.
</p>

<h2 className="mt-6 mb-2 text-xl font-semibold">Changes to Terms</h2>
<p className="text-gray-600 mb-4">
  We reserve the right to update or modify these Terms of Use at any time
  without prior notice. Continued use of the site constitutes acceptance of the
  revised terms.
</p>

<h2 className="mt-6 mb-2 text-xl font-semibold">Governing Law</h2>
<p className="text-gray-600 mb-4">
  These Terms of Use shall be governed by and construed in accordance with the
  laws of the jurisdiction in which SOLVEX Engineering FZ LLC is registered.
</p>

<h2 className="mt-6 mb-2 text-xl font-semibold">Contact Information</h2>
<p className="text-gray-600">
  For questions regarding these Terms of Use, please visit our
  <a href="/contact" className="text-blue-600 underline">Contact Page</a>.
</p>

    </section>
    </>

  );
}
