import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { sitemapSections } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Sitemap | Veyber',
  description:
    'Browse all key Veyber pages, service routes, legal pages, and specialized landing pages from one sitemap page.',
};

export default function SitemapPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="pt-[100px]">
        <section
          className="relative overflow-hidden px-4 py-12 sm:px-8 sm:py-20 md:py-24"
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
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Website Sitemap
            </span>
            <h1 className="mb-5 font-headline text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              Find Every Important Page in One Place
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
              Use this page to quickly navigate through Veyber services, marketplace support pages, content and consulting routes, and legal pages.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-container px-7 py-3.5 text-base font-black text-on-primary-container shadow-2xl transition-all hover:shadow-primary/40 active:scale-95 sm:px-10 sm:py-4"
              >
                <span className="material-symbols-outlined text-[20px]">home</span>
                Back to Homepage
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-7 py-3.5 text-base font-bold text-white transition-all hover:border-primary/40 hover:bg-primary/[0.08] sm:px-10 sm:py-4"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                Contact Veyber
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-4 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center sm:mb-14">
              <h2 className="mb-3 font-headline text-2xl font-bold text-white sm:text-3xl">
                Quick Navigation
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-on-surface-variant sm:text-base">
                The sections below include the missing service and legal links that should be easy for visitors to reach.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 items-start">
              {sitemapSections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-3xl border border-outline-variant/10 bg-surface-container p-6 sm:p-8"
                >
                  <h3 className="mb-5 font-headline text-xl font-bold text-white">{section.title}</h3>
                  <div className="flex flex-col gap-3">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group flex items-center justify-between rounded-2xl border border-outline-variant/10 bg-surface-container-high px-4 py-3 text-sm font-semibold text-white transition-all hover:border-primary/25 hover:text-primary"
                      >
                        <span>{link.label}</span>
                        <span className="material-symbols-outlined text-[18px] text-primary transition-transform group-hover:translate-x-1">
                          arrow_forward
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
