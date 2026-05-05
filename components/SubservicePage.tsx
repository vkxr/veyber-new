import type { SubservicePageData } from '@/lib/subservice-pages';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProcessSection from '@/components/ProcessSection';

type SubservicePageProps = {
  page: SubservicePageData;
};

export default function SubservicePage({ page }: SubservicePageProps) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: page.title,
    provider: {
      '@type': 'Organization',
      name: 'Veyber',
      url: 'https://veyber.co.in',
    },
    areaServed: {
      '@type': 'State',
      name: 'Gujarat',
    },
    description: page.description,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="pt-[100px]">
        <section
          className="relative overflow-hidden px-4 py-12 sm:px-8 sm:py-20 md:py-28"
          style={{ background: 'radial-gradient(ellipse 110% 55% at 50% -5%, rgba(174,198,255,0.07) 0%, transparent 70%)' }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.022]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(174,198,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(174,198,255,0.6) 1px,transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div className="pointer-events-none absolute -left-[10%] -top-[15%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-[15%] -right-[10%] h-[500px] w-[500px] rounded-full bg-primary-container/10 blur-[70px]" />
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              {page.badge}
            </span>
            <h1 className="mb-5 font-headline text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl">
              {page.title}
            </h1>
            <p className="mx-auto mb-4 max-w-3xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
              {page.description}
            </p>
            <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
              {page.highlight}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#aec6ff] to-[#4f8eff] px-7 py-3.5 text-base font-bold text-[#001a42] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(174,198,255,0.38)] active:scale-95 sm:px-9 sm:py-4 sm:text-lg"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  Get Free Consultation
                </span>
                <div className="absolute inset-0 -translate-x-[100%] skew-x-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-700 group-hover:translate-x-[100%]" />
              </Link>
              <Link
                href={page.parentHref}
                className="flex items-center justify-center gap-2 rounded-full border border-white/12 px-7 py-3.5 text-base font-bold text-white transition-all duration-300 hover:border-primary/40 hover:bg-primary/[0.08] sm:px-9 sm:py-4 sm:text-lg"
              >
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                Back to {page.parentTitle}
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-4 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-5 font-headline text-2xl font-bold leading-tight sm:text-4xl">
                Why {page.title} Matters
              </h2>
              <p className="mb-8 leading-relaxed text-on-surface-variant">
                The right service structure creates stronger visibility, clearer execution, and a better customer experience. We focus on practical delivery, not filler.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {page.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="group flex items-center gap-3 rounded-xl border border-outline-variant/10 bg-surface-container p-4 transition-all hover:border-primary/25"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                    </div>
                    <span className="text-sm font-semibold text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-outline-variant/10 bg-surface-container p-6 sm:p-8">
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/10 blur-[40px]" />
              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <span className="material-symbols-outlined text-[22px] text-primary">{page.icon}</span>
                </div>
                <h3 className="mb-5 text-xl font-bold text-white">Ideal For</h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {page.idealFor.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl bg-surface-container-high p-3">
                      <span className="material-symbols-outlined text-[16px] text-primary">bolt</span>
                      <span className="text-sm font-medium text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface px-4 py-14 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center sm:mb-16">
              <h2 className="mb-4 font-headline text-3xl font-bold sm:text-4xl">What We Deliver</h2>
              <p className="mx-auto max-w-2xl text-sm text-on-surface-variant sm:text-base">
                Each engagement is built around clear deliverables, better execution, and outcomes your team can actually use.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {page.cards.map((card) => (
                <div
                  key={card.title}
                  className="group flex flex-col rounded-2xl border border-outline-variant/10 bg-surface-container p-6 transition-all duration-300 hover:border-primary/25 hover:bg-surface-container-high sm:p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <span className="material-symbols-outlined text-[22px] text-primary">{page.icon}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">{card.title}</h3>
                  <p className="mb-4 flex-grow text-sm leading-relaxed text-on-surface-variant">{card.desc}</p>
                  <ul className="space-y-1.5">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-on-surface-variant">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProcessSection
          title="Our Process"
          description={`A focused workflow for ${page.title.toLowerCase()} that keeps strategy, execution, and outcomes aligned.`}
          steps={page.process}
          sectionClassName="bg-surface-container-low"
        />

        <section className="bg-surface px-4 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-2 font-headline text-xl font-bold sm:text-2xl">Related Pages</h2>
            <p className="mb-7 text-sm text-on-surface-variant">
              Move through the connected pages below to explore the broader Veyber service structure.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {page.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex h-full flex-col rounded-2xl border border-outline-variant/10 bg-surface-container p-5 transition-all duration-200 hover:border-primary/25 hover:bg-surface-container-high"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <span className="material-symbols-outlined text-[20px] text-primary">link</span>
                  </div>
                  <p className="mb-1 text-sm font-bold text-white transition-colors group-hover:text-primary">{link.label}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-primary">
                    Visit page
                    <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-4 py-14 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center sm:mb-14">
              <h2 className="mb-3 font-headline text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2>
              <p className="text-sm text-on-surface-variant">Quick answers about this service and how it fits into your growth plan.</p>
            </div>
            <div className="flex flex-col gap-4">
              {page.faqs.map((faq, index) => (
                <details
                  key={`${faq.q}-${index}`}
                  name="faq"
                  className="group overflow-hidden rounded-2xl border border-outline-variant/10 bg-surface-container transition-all duration-200 open:border-primary/20"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                    <h3 className="text-sm font-bold text-white sm:text-base">{faq.q}</h3>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-outline-variant/20 text-on-surface-variant transition-all duration-200 group-open:border-primary/30 group-open:bg-primary/10 group-open:text-primary">
                      <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-open:rotate-45">add</span>
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-sm leading-relaxed text-on-surface-variant">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-4 py-14 sm:px-8 sm:py-24">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="force-dark relative z-10 mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/15 bg-neutral-900 text-center sm:rounded-[3rem]">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
            <div className="pointer-events-none absolute -top-10 left-1/2 h-[200px] w-[500px] -translate-x-1/2 rounded-full bg-primary/15 blur-[60px]" />
            <div className="relative z-10 p-8 sm:p-12 md:p-16">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                Work with Veyber
              </span>
              <h2 className="mb-4 text-2xl font-black tracking-tight text-white drop-shadow-xl sm:text-4xl md:text-5xl">
                Ready to move forward with {page.title}?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/75 drop-shadow sm:text-lg">
                Contact Veyber for a focused discussion about your business goals, current gaps, and the best next step.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-container px-7 py-3.5 text-base font-black text-on-primary-container shadow-2xl transition-all hover:shadow-primary/40 active:scale-95 sm:px-10 sm:py-5 sm:text-lg"
                >
                  Contact Veyber
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
                <a
                  href="tel:+916355183655"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-base font-bold text-white transition-all hover:border-primary/40 hover:bg-primary/10 active:scale-95 sm:px-10 sm:py-5 sm:text-lg"
                >
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  +91 6355183655
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
