import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Privacy Policy | Veyber Services Pvt. Ltd.',
  description:
    'Read the Privacy Policy of Veyber Services Pvt. Ltd. to understand how personal information is collected, used, shared, and protected on veyber.co.in.',
  keywords:
    'Veyber privacy policy, Veyber Services Pvt Ltd privacy policy, data privacy, website privacy policy India, veyber.co.in privacy policy',
};

const informationGroups = [
  {
    title: '2.1 Personal Information',
    items: [
      'Full Name',
      'Email Address',
      'Phone Number',
      'Business/Company Name',
      'Project Requirements',
    ],
  },
  {
    title: '2.2 Technical Data',
    items: [
      'IP Address',
      'Browser Type & Version',
      'Device Type',
      'Pages Visited & Time Spent',
    ],
  },
  {
    title: '2.3 Marketing & Communication Data',
    items: ['Preferences for receiving marketing', 'Communication history'],
  },
];

const usageItems = [
  'Delivering services (Digital Marketing, Web Development, etc.)',
  'Responding to inquiries and support requests',
  'Sending updates, offers, and service-related communication',
  'Improving website performance and user experience',
  'Legal and compliance purposes',
];

const cookieItems = [
  'Analyze traffic',
  'Improve website functionality',
  'Personalize content',
];

const sharingItems = [
  'Hosting providers',
  'Payment gateways',
  'Analytics tools',
  'Legal authorities (if required)',
];

const rightsItems = [
  'Request access to your data',
  'Request correction/deletion',
  'Withdraw consent anytime',
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
              Privacy & Data Protection
            </span>
            <h1 className="mx-auto mb-5 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Privacy Policy for{' '}
              <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
                Veyber Services Pvt. Ltd.
              </span>
            </h1>
            <p className="mx-auto mb-4 max-w-3xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
              We are committed to protecting your personal data and explaining
              clearly how information is collected, used, and safeguarded when
              you interact with our website or services.
            </p>
            <p className="mx-auto max-w-2xl text-sm font-medium text-on-surface-variant sm:text-base">
              Website:{' '}
              <a
                href="https://www.veyber.co.in"
                className="text-white transition-colors hover:text-primary hover:underline"
              >
                www.veyber.co.in
              </a>
              <span className="mx-2 text-outline-variant/50">•</span>
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
                    Policy Snapshot
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
                        Contact
                      </p>
                      <a
                        href="mailto:admin@veyber.co.in"
                        className="font-medium text-white transition-colors hover:text-primary"
                      >
                        admin@veyber.co.in
                      </a>
                    </div>
                  </div>
                </div>

                <div className="force-dark w-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
                  <div className="bg-gradient-to-br from-primary/20 via-transparent to-primary-container/10 p-6">
                    <h3 className="mb-2 text-xl font-black text-white">
                      Questions About Your Data?
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-white/70">
                      Reach out to our team for access, correction, deletion, or
                      consent-related requests.
                    </p>
                    <div className="flex flex-col gap-3">
                      <a
                        href="mailto:admin@veyber.co.in"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-container px-5 py-3 font-bold text-on-primary-container transition-all hover:shadow-[0_10px_30px_rgba(79,142,255,0.35)] active:scale-95"
                      >
                        Email Us
                      </a>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 font-bold text-white transition-all hover:border-primary/40 hover:bg-primary/10 active:scale-95"
                      >
                        Contact Page
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
                    This page outlines how Veyber Services Pvt. Ltd. handles
                    personal data collected through its website and related
                    services.
                  </p>
                </div>

                <div className="space-y-10 px-6 py-8 sm:px-8 sm:py-10">
                  <section>
                    <h2 className="mb-3 text-2xl font-bold text-white">
                      1. Introduction
                    </h2>
                    <p className="leading-relaxed text-on-surface-variant">
                      Veyber Services Pvt. Ltd. (&ldquo;Company&rdquo;,
                      &ldquo;we&rdquo;, &ldquo;our&rdquo;,
                      &ldquo;us&rdquo;) is committed to protecting your personal
                      data and privacy. This policy explains how we collect,
                      use, and safeguard your information when you interact with
                      our website or services.
                    </p>
                  </section>

                  <section>
                    <h2 className="mb-4 text-2xl font-bold text-white">
                      2. Information We Collect
                    </h2>
                    <div className="space-y-5">
                      {informationGroups.map((group) => (
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
                      3. How We Use Your Information
                    </h2>
                    <ul className="space-y-3">
                      {usageItems.map((item) => (
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
                    <h2 className="mb-4 text-2xl font-bold text-white">
                      4. Cookies Policy
                    </h2>
                    <p className="mb-4 leading-relaxed text-on-surface-variant">
                      We use cookies to support analytics, site functionality,
                      and content personalization.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-3">
                      {cookieItems.map((item) => (
                        <div
                          key={item}
                          className="rounded-3xl border border-outline-variant/10 bg-surface-container p-5 text-center"
                        >
                          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <span className="material-symbols-outlined">
                              cookie
                            </span>
                          </div>
                          <p className="font-semibold text-white">{item}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
                      You can disable cookies in your browser settings.
                    </p>
                  </section>

                  <section>
                    <h2 className="mb-4 text-2xl font-bold text-white">
                      5. Data Sharing & Disclosure
                    </h2>
                    <p className="mb-4 leading-relaxed text-on-surface-variant">
                      We do not sell your data. We may share data with the
                      following service providers or authorities when required.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {sharingItems.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-outline-variant/10 bg-surface-container p-4 text-on-surface-variant"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="mb-3 text-2xl font-bold text-white">
                      6. Data Security
                    </h2>
                    <p className="leading-relaxed text-on-surface-variant">
                      We implement strong technical and organizational security
                      measures to prevent unauthorized access, misuse, or
                      disclosure.
                    </p>
                  </section>

                  <section>
                    <h2 className="mb-3 text-2xl font-bold text-white">
                      7. Data Retention
                    </h2>
                    <p className="leading-relaxed text-on-surface-variant">
                      We retain your data only as long as required for business,
                      legal, or contractual purposes.
                    </p>
                  </section>

                  <section>
                    <h2 className="mb-4 text-2xl font-bold text-white">
                      8. Your Rights
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-3">
                      {rightsItems.map((item) => (
                        <div
                          key={item}
                          className="rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/10 to-transparent p-5"
                        >
                          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                            <span className="material-symbols-outlined">
                              verified_user
                            </span>
                          </div>
                          <p className="font-semibold text-white">{item}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="mb-3 text-2xl font-bold text-white">
                      9. Third-Party Services
                    </h2>
                    <p className="leading-relaxed text-on-surface-variant">
                      Our website may use third-party tools, such as analytics
                      or advertising platforms. Their privacy policies apply
                      separately to your use of those services.
                    </p>
                  </section>

                  <section>
                    <h2 className="mb-3 text-2xl font-bold text-white">
                      10. Updates
                    </h2>
                    <p className="leading-relaxed text-on-surface-variant">
                      We may update this policy periodically. Continued use of
                      our website or services means acceptance of the updated
                      policy.
                    </p>
                  </section>

                  <section>
                    <h2 className="mb-4 text-2xl font-bold text-white">
                      11. Contact
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
