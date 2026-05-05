import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Veyber Services Pvt. Ltd.',
  description:
    'Read the Terms & Conditions of Veyber Services Pvt. Ltd. covering services, payment terms, timelines, liability, termination, and governing law.',
  keywords:
    'Veyber terms and conditions, Veyber payment terms, Veyber services agreement, terms and conditions India, Veyber Services Pvt Ltd',
};

const serviceGroups = [
  {
    title: '2.1 Core Digital Marketing',
    items: ['SEO (Search Engine Optimization)', 'Google Ads & PPC Campaigns', 'Meta (Facebook & Instagram) Ads'],
  },
  {
    title: '2.2 Web Services',
    items: ['Website Development (Static/Dynamic)', 'Hosting & Server Management', 'DevOps & Maintenance'],
  },
  {
    title: '2.3 Ecommerce Development',
    items: ['Shopify Store Setup', 'WooCommerce Development', 'Custom Ecommerce Solutions'],
  },
  {
    title: '2.4 Account Management',
    items: ['Amazon, Flipkart, Meesho Handling', 'Product Listing & Optimization', 'Order & Inventory Management'],
  },
  {
    title: '2.5 Social Media Handling',
    items: ['Instagram & Facebook Marketing', 'Content Planning & Scheduling', 'Ad Campaign Management'],
  },
  {
    title: '2.6 Content Marketing',
    items: ['SEO Blog Writing', 'Website Content', 'Strategy & Planning'],
  },
  {
    title: '2.7 Business Consulting',
    items: ['Growth Strategy', 'Market Research', 'Digital Transformation Planning'],
  },
];

const userResponsibilities = [
  'Provide accurate information',
  'Not misuse services',
  'Not engage in illegal or harmful activities',
];

const paymentTerms = [
  {
    title: '5.1 General Payment Structure',
    items: ['50% Advance Payment (Mandatory) before project start', 'Remaining 50% before final delivery/deployment'],
  },
  {
    title: '5.2 Monthly Services (Marketing / Management)',
    items: ['Paid in advance every month', 'Delay beyond 5 days = service suspension'],
  },
  {
    title: '5.3 Custom Projects',
    items: ['Milestone-based payments (as agreed in proposal)', 'Work will proceed only after milestone clearance'],
  },
  {
    title: '5.4 Late Payments',
    items: ['5-10% per day late fee may apply after due date', 'Services may be paused without notice'],
  },
  {
    title: '5.5 Refund Policy',
    items: ['No refund once work has started', 'Partial refund only if mutually agreed', 'Advance payments are generally non-refundable'],
  },
  {
    title: '5.6 Third-Party Costs',
    items: ['Hosting/domain charges', 'Ad spend (Google, Meta, etc.)', 'Paid tools/software'],
  },
];

const liabilityItems = [
  'Business losses or revenue impact',
  'Third-party platform changes (Google, Meta, etc.)',
  'Downtime or technical failures beyond our control',
];

const terminationItems = [
  'Payment is not received',
  'Terms are violated',
  'Misuse or illegal activity is detected',
];

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="pt-[120px] pb-16 sm:pb-24">
        <header className="relative overflow-hidden px-4 sm:px-8 pt-12 sm:pt-20 md:pt-28 pb-12 sm:pb-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-[90px]" />
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Terms, Payments & Service Rules
            </span>
            <h1 className="mx-auto mb-5 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Terms & Conditions for{' '}
              <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
                Veyber Services Pvt. Ltd.
              </span>
            </h1>
            <p className="mx-auto mb-4 max-w-3xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
              These terms explain the conditions for using our website and
              services, including scope of work, payment structure, timelines,
              responsibilities, and service limitations.
            </p>
            <p className="mx-auto max-w-2xl text-sm font-medium text-on-surface-variant sm:text-base">
              Effective Date: 25-04-2026
            </p>
          </div>
        </header>

        <section className="px-4 sm:px-8">
          <div className="mx-auto grid max-w-6xl items-start gap-6 md:grid-cols-12">
            <div className="min-w-0 md:col-span-4">
              <div className="space-y-4 lg:sticky lg:top-28">
                <div className="w-full rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6">
                  <h2 className="mb-4 text-lg font-bold text-white">
                    Terms Snapshot
                  </h2>
                  <div className="space-y-4 text-sm text-on-surface-variant">
                    <div className="rounded-2xl border border-outline-variant/10 bg-surface-container p-4">
                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                        Company
                      </p>
                      <p className="font-medium text-white">
                        Veyber Services Pvt. Ltd.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-outline-variant/10 bg-surface-container p-4">
                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                        Effective Date
                      </p>
                      <p className="font-medium text-white">25-04-2026</p>
                    </div>
                    <div className="rounded-2xl border border-outline-variant/10 bg-surface-container p-4">
                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                        Payment Start Rule
                      </p>
                      <p className="font-medium text-white">
                        50% advance before project start
                      </p>
                    </div>
                  </div>
                </div>

                <div className="force-dark w-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
                  <div className="bg-gradient-to-br from-primary/20 via-transparent to-primary-container/10 p-6">
                    <h3 className="mb-2 text-xl font-black text-white">
                      Payment Terms
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-white/70">
                      Monthly services are paid in advance, custom work follows
                      milestone clearance, and active work is generally
                      non-refundable once started.
                    </p>
                    <div className="space-y-3">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                          Monthly Delay
                        </p>
                        <p className="mt-1 font-semibold text-white">
                          Beyond 5 days = service suspension
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                          Late Fee
                        </p>
                        <p className="mt-1 font-semibold text-white">
                          5-10% per day may apply after due date
                        </p>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 font-bold text-white transition-all hover:border-primary/40 hover:bg-primary/10 active:scale-95"
                      >
                        Talk to Our Team
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-0 md:col-span-8">
              <div className="w-full overflow-hidden rounded-[2rem] border border-outline-variant/10 bg-surface-container-low shadow-2xl">
                <div className="border-b border-outline-variant/10 bg-gradient-to-r from-primary/10 via-transparent to-transparent px-6 py-5 sm:px-8">
                  <p className="text-sm font-medium leading-relaxed text-on-surface-variant">
                    By accessing the website or using Veyber services, you agree
                    to these terms covering service scope, payments, timelines,
                    liability limits, and termination conditions.
                  </p>
                </div>

                <div className="space-y-10 px-6 py-8 sm:px-8 sm:py-10">
                  <section>
                    <h2 className="mb-3 text-2xl font-bold text-white">
                      1. Acceptance
                    </h2>
                    <p className="leading-relaxed text-on-surface-variant">
                      By accessing our website or services, you agree to these
                      Terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="mb-4 text-2xl font-bold text-white">
                      2. Services Offered
                    </h2>
                    <div className="space-y-5">
                      {serviceGroups.map((group) => (
                        <div
                          key={group.title}
                          className="rounded-3xl border border-outline-variant/10 bg-surface-container p-5"
                        >
                          <h3 className="mb-3 text-lg font-bold text-white">
                            {group.title}
                          </h3>
                          <ul className="grid gap-3 sm:grid-cols-2">
                            {group.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-3 rounded-2xl border border-outline-variant/10 bg-surface-container-high px-4 py-3 text-sm text-on-surface-variant"
                              >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                                  <span className="material-symbols-outlined text-[14px]">
                                    check
                                  </span>
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="mb-4 text-2xl font-bold text-white">
                      3. User Responsibilities
                    </h2>
                    <ul className="space-y-3">
                      {userResponsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 rounded-2xl border border-outline-variant/10 bg-surface-container p-4 text-on-surface-variant"
                        >
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                            <span className="material-symbols-outlined text-[14px]">
                              arrow_forward
                            </span>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h2 className="mb-3 text-2xl font-bold text-white">
                      4. Intellectual Property
                    </h2>
                    <p className="leading-relaxed text-on-surface-variant">
                      All website content, branding, designs, and materials
                      belong to Veyber Services Pvt. Ltd. Unauthorized use is
                      prohibited.
                    </p>
                  </section>

                  <section>
                    <h2 className="mb-2 text-2xl font-bold text-white">
                      5. Payment Terms
                    </h2>
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                      Important
                    </p>
                    <div className="space-y-5">
                      {paymentTerms.map((term) => (
                        <div
                          key={term.title}
                          className="rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/10 to-transparent p-5"
                        >
                          <h3 className="mb-3 text-lg font-bold text-white">
                            {term.title}
                          </h3>
                          <ul className="space-y-2">
                            {term.items.map((item) => (
                              <li
                                key={item}
                                className="flex gap-3 text-on-surface-variant"
                              >
                                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="mb-3 text-2xl font-bold text-white">
                      6. Project Timeline
                    </h2>
                    <p className="leading-relaxed text-on-surface-variant">
                      Timelines depend on client response and approvals. Delays
                      from the client side may extend delivery timelines.
                    </p>
                  </section>

                  <section>
                    <h2 className="mb-4 text-2xl font-bold text-white">
                      7. Limitation of Liability
                    </h2>
                    <p className="mb-4 leading-relaxed text-on-surface-variant">
                      We are not responsible for the following:
                    </p>
                    <div className="grid gap-4 sm:grid-cols-3">
                      {liabilityItems.map((item) => (
                        <div
                          key={item}
                          className="rounded-3xl border border-outline-variant/10 bg-surface-container p-5"
                        >
                          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                            <span className="material-symbols-outlined">
                              gpp_bad
                            </span>
                          </div>
                          <p className="font-semibold text-white">{item}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="mb-4 text-2xl font-bold text-white">
                      8. Service Termination
                    </h2>
                    <p className="mb-4 leading-relaxed text-on-surface-variant">
                      We may suspend or terminate services if any of the
                      following apply:
                    </p>
                    <ul className="space-y-3">
                      {terminationItems.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 rounded-2xl border border-outline-variant/10 bg-surface-container p-4 text-on-surface-variant"
                        >
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                            <span className="material-symbols-outlined text-[14px]">
                              warning
                            </span>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h2 className="mb-3 text-2xl font-bold text-white">
                      9. Third-Party Links
                    </h2>
                    <p className="leading-relaxed text-on-surface-variant">
                      We are not responsible for third-party websites linked on
                      our platform.
                    </p>
                  </section>

                  <section>
                    <h2 className="mb-4 text-2xl font-bold text-white">
                      10. Governing Law
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl border border-outline-variant/10 bg-surface-container p-5">
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                          Applicable Laws
                        </p>
                        <p className="font-semibold text-white">India</p>
                      </div>
                      <div className="rounded-3xl border border-outline-variant/10 bg-surface-container p-5">
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                          Jurisdiction
                        </p>
                        <p className="font-semibold text-white">
                          Vadodara, Gujarat
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="mb-3 text-2xl font-bold text-white">
                      11. Modifications
                    </h2>
                    <p className="leading-relaxed text-on-surface-variant">
                      We can update these terms at any time. Continued use means
                      acceptance of the updated terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="mb-4 text-2xl font-bold text-white">
                      12. Contact Information
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl border border-outline-variant/10 bg-surface-container p-5">
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                          Company
                        </p>
                        <p className="font-semibold text-white">
                          Veyber Services Pvt. Ltd.
                        </p>
                      </div>
                      <a
                        href="tel:+916355183655"
                        className="rounded-3xl border border-outline-variant/10 bg-surface-container p-5 transition-colors hover:border-primary/25"
                      >
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                          Phone
                        </p>
                        <p className="font-semibold text-white">
                          +91-6355183655
                        </p>
                      </a>
                      <a
                        href="https://www.veyber.co.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-3xl border border-outline-variant/10 bg-surface-container p-5 transition-colors hover:border-primary/25"
                      >
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                          Website
                        </p>
                        <p className="font-semibold text-white">
                          www.veyber.co.in
                        </p>
                      </a>
                      <a
                        href="mailto:admin@veyber.co.in"
                        className="rounded-3xl border border-outline-variant/10 bg-surface-container p-5 transition-colors hover:border-primary/25"
                      >
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                          Email
                        </p>
                        <p className="font-semibold text-white">
                          admin@veyber.co.in
                        </p>
                      </a>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
