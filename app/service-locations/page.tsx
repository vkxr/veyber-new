import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Digital Marketing Service Locations | Gujarat – Veyber',
  description: 'Veyber offers ecommerce development, SEO, social media marketing & business consulting across Vadodara, Ahmedabad, Surat, Rajkot, and all major regions.',
  keywords: 'Digital marketing services Gujarat, Ecommerce services Vadodara, Marketing company Gujarat, Digital agency Gujarat, SEO company India, Online marketing Vadodara',
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Veyber',
  url: 'https://veyber.co.in',
  areaServed: [
    { '@type': 'State', name: 'Gujarat' }
  ],
  serviceArea: [
    'Vadodara', 'Ahmedabad', 'Surat', 'Rajkot', 'Gandhinagar',
    'Navsari', 'Vapi', 'Valsad', 'Junagadh', 'Bhavnagar', 'Jamnagar', 'Morbi'
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you cover all cities in Gujarat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide specialized digital marketing services across all major cities and emerging industrial regions of Gujarat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer remote services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We work with clients across India remotely, offering fast communication and rapid execution.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get local support in Vadodara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Vadodara is our primary operational hub, and we have targeted service solutions designed specifically for the local and industrial corridors.',
      },
    },
  ],
};

const services = [
  {
    icon: 'shopping_cart',
    title: 'Ecommerce Development',
    desc: 'Shopify, WooCommerce & custom ecommerce websites',
    items: ['SEO-friendly', 'Mobile-optimized stores'],
    href: '/ecommerce-development',
  },
  {
    icon: 'storefront',
    title: 'Ecommerce Account Management',
    desc: 'Marketplace management (Amazon, Flipkart, Meesho)',
    items: ['Listing optimization', 'Sales growth'],
    href: '/account-management',
  },
  {
    icon: 'share',
    title: 'Social Media Handling',
    desc: 'Instagram & Facebook marketing',
    items: ['Content creation', 'Ads management'],
    href: '/social-media-handling',
  },
  {
    icon: 'edit_note',
    title: 'Content Marketing',
    desc: 'SEO blog writing',
    items: ['Website content', 'Content strategy'],
    href: '/content-marketing',
  },
  {
    icon: 'psychology',
    title: 'Business Consulting',
    desc: 'Growth strategy and market research',
    items: ['Business scaling solutions'],
    href: '/business-consulting',
  },
];

const faqs = [
  {
    q: 'Do you cover all cities in Gujarat?',
    a: 'Yes, we provide specialized digital marketing services across all major cities and emerging industrial regions of Gujarat.',
  },
  {
    q: 'Do you offer remote services?',
    a: 'Absolutely. We work with clients across India remotely, offering fast communication and rapid execution.',
  },
  {
    q: 'Can I get local support in Vadodara?',
    a: 'Yes, Vadodara is our primary operational hub, and we have targeted service solutions designed specifically for the local and industrial corridors.',
  },
];

const gujaratCities = [
  { name: 'Ahmedabad', href: '/digital-marketing-ahmedabad' },
  { name: 'Surat', href: '/digital-marketing-surat' },
  { name: 'Vadodara', href: '/digital-marketing-vadodara' },
  { name: 'Rajkot', href: '/digital-marketing-rajkot' },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="pt-[100px]">

        {/* Hero */}
        <section className="relative px-4 sm:px-8 py-12 sm:py-20 md:py-28 overflow-hidden" style={{background:'radial-gradient(ellipse 110% 55% at 50% -5%, rgba(174,198,255,0.07) 0%, transparent 70%)'}}>
          <div className="pointer-events-none absolute inset-0 opacity-[0.022]" style={{backgroundImage:'linear-gradient(rgba(174,198,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(174,198,255,0.6) 1px,transparent 1px)',backgroundSize:'64px 64px'}}/>
          <div className="pointer-events-none absolute -top-[15%] -left-[10%] w-[600px] h-[600px] bg-primary/10 blur-[80px] rounded-full"/>
          <div className="pointer-events-none absolute -bottom-[15%] -right-[10%] w-[500px] h-[500px] bg-primary-container/10 blur-[70px] rounded-full"/>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-5">
              <span className="relative flex h-1.5 w-1.5 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"/><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"/></span>
              Locations & Coverage
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
              Areas We <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{filter:'drop-shadow(0 0 28px rgba(174,198,255,0.3))'}}>Operate In</span>
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-4 leading-relaxed">
              Serving Businesses Across <span className="text-primary font-semibold">Gujarat</span>
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
              At Veyber, we provide professional services including ecommerce development, account management, social media handling, content marketing, and business consulting. We help businesses grow locally and scale digitally with high-performance strategies across India&apos;s booming commercial areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#all-locations" className="group relative px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#aec6ff] to-[#4f8eff] text-[#001a42] font-bold rounded-full text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(174,198,255,0.38)] active:scale-95">
              <span className="relative z-10 flex items-center gap-2"><span className="material-symbols-outlined text-[20px]">travel_explore</span>Explore All Areas</span>
              <div className="absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-[100%] transition-transform duration-700"/>
            </Link>
            </div>
          </div>
        </section>

        {/* --- GUJARAT SECTION --- */}
        <section id="all-locations" className="px-4 sm:px-8 py-14 sm:py-20 bg-surface border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[28px]">map</span>
              </div>
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold font-headline">Gujarat Location Directory</h2>
                <p className="text-on-surface-variant text-sm sm:text-base mt-1">Our comprehensive coverage across Gujarat state.</p>
              </div>
            </div>

            <div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-10 mb-10 overflow-hidden relative group hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(174,198,255,0.05)]">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3 group-hover:bg-primary/10 transition-colors duration-700"/>

              <h3 className="text-xl font-bold text-white mb-6 relative z-10">Major Cities & Regions</h3>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10">
                {gujaratCities.map(city => (
                  <Link key={city.name} href={city.href} className="group flex items-center justify-between px-4 py-3.5 bg-gradient-to-br from-white/[0.04] to-transparent hover:from-primary/10 hover:to-transparent border border-white/[0.05] hover:border-primary/30 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(174,198,255,0.1)]">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <span className="material-symbols-outlined text-[18px] text-white/40 group-hover:text-primary transition-colors flex-shrink-0">location_on</span>
                      <span className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors truncate">{city.name}</span>
                    </div>
                    <span className="material-symbols-outlined text-[16px] text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2">arrow_forward</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Our Services Regionally */}
        <section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our Services Across All Locations</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">Targeted digital growth and consulting services globally.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map(({ icon, title, desc, items, href }: { icon: string; title: string; desc: string; items: string[]; href: string; }) => (
                <div key={title} className="group bg-surface-container p-6 rounded-2xl border border-outline-variant/10 hover:border-primary/25 hover:bg-surface-container-high transition-all duration-300 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-primary text-[22px]">{icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{desc}</p>
                  <ul className="space-y-1.5 mb-6 flex-grow">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-on-surface-variant">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/60"/>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group/link">
                    Explore Service <span className="material-symbols-outlined text-[16px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Businesses Choose Us & Remote Local Support */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">Why Businesses Choose Veyber</h2>
                <div className="space-y-4">
                  <ul className="space-y-4">
                    {[
                      'Strong local expertise across major hubs',
                      'Customized solutions based on city & market dynamics',
                      'Affordable scaling tools for startups & SMEs',
                      'Data-driven local SEO and growth strategies',
                      'End-to-end business support and consulting',
                    ].map((text) => (
                      <li key={text} className="flex items-start gap-4 p-4 bg-surface-container rounded-xl border border-outline-variant/5">
                        <span className="material-symbols-outlined text-primary shrink-0">verified</span>
                        <span className="font-medium text-white text-sm pt-0.5">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Remote Local Support callout */}
              <div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-10 relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[50px] rounded-full pointer-events-none"/>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">language</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-headline mb-4 relative z-10">Remote + Local Support</h3>
                <p className="text-on-surface-variant text-base mb-6 leading-relaxed">
                  We believe in borderless assistance paired with hyper-local insights.
                </p>
                <div className="flex flex-col gap-3 relative z-10">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-high border border-outline-variant/10 font-semibold text-white text-sm">
                    <span className="material-symbols-outlined text-primary">public</span>
                    Online consultations across India
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-high border border-outline-variant/10 font-semibold text-white text-sm">
                    <span className="material-symbols-outlined text-primary">home_pin</span>
                    Targeted local SEO for high-intent queries
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-high border border-outline-variant/10 font-semibold text-white text-sm">
                    <span className="material-symbols-outlined text-primary">speed</span>
                    Fast communication & rapid execution
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3">Frequently Asked Questions</h2>
              <p className="text-on-surface-variant text-sm">Get answers about our global coverage.</p>
            </div>
            <div className="flex flex-col gap-4">
              {faqs.map((item, i) => (
                <details key={i} name="faq" className="group bg-surface-container rounded-2xl border border-outline-variant/10 overflow-hidden open:border-primary/20 transition-all duration-200">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none gap-4">
                    <h3 className="font-bold text-white text-sm sm:text-base">{item.q}</h3>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-surface-variant group-open:bg-primary/10 group-open:border-primary/30 group-open:text-primary transition-all duration-200">
                      <span className="material-symbols-outlined text-[18px] group-open:rotate-45 transition-transform duration-200">add</span>
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-on-surface-variant leading-relaxed text-sm">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-8 py-14 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5"/>
          <div className="force-dark max-w-4xl mx-auto text-center relative z-10 bg-neutral-900 rounded-[2rem] sm:rounded-[3rem] border border-white/15 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85"/>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent"/>
            <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/15 blur-[60px] rounded-full"/>
            <div className="relative z-10 p-8 sm:p-12 md:p-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-6">
                <span className="relative flex h-1.5 w-1.5 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"/><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"/></span>
                Ready To Grow?
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
                Looking for trusted digital services in your city?
              </h2>
              <p className="text-base sm:text-lg text-white/75 mb-8 max-w-xl mx-auto leading-relaxed drop-shadow">
                Contact Veyber today and let&apos;s scale your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-3.5 sm:py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black rounded-full text-base sm:text-lg shadow-2xl hover:shadow-primary/40 transition-all active:scale-95 group">
                  Contact Us
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <a href="tel:+916355183655" className="inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-3.5 sm:py-5 text-white font-bold rounded-full border border-white/20 hover:border-primary/40 hover:bg-primary/10 transition-all active:scale-95">
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
