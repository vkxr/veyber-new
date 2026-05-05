import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LazyMap from '@/components/LazyMap';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Veyber | Digital Marketing & eCommerce Experts in Gujarat',
  description: 'Contact Veyber for eCommerce development, account management, social media marketing, content marketing & business consulting services in Vadodara & across Gujarat. Get a free consultation today.',
  keywords: 'contact Veyber, ecommerce development company in Vadodara, digital marketing agency Gujarat, ecommerce account management services India, social media marketing Vadodara, business consultant Vadodara',
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Veyber',
  url: 'https://veyber.co.in',
  logo: 'https://veyber.co.in/veyber-logo.png',
  email: 'veyberservicespvtltd@gmail.com',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-6355183655',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi', 'Gujarati'],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vadodara',
    addressRegion: 'Gujarat',
    addressCountry: 'India',
  },
  areaServed: ['Vadodara', 'Ahmedabad', 'Surat', 'Rajkot', 'Gujarat', 'India'],
  sameAs: [],
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Navbar />
      <main className="pt-[100px] pb-16 sm:pb-24">

{/* Hero Header */}
<header className="px-4 sm:px-8 pt-12 sm:pt-20 md:pt-28 mb-12 sm:mb-16 max-w-7xl mx-auto text-center">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-5">
  <span className="relative flex h-1.5 w-1.5 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"/><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"/></span>
  Let&apos;s Work Together · Gujarat
</span>
<h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5 max-w-[700px] mx-auto leading-tight">
  Let&apos;s Grow Your Business in Gujarat
</h1>
<p className="text-on-surface-variant text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-4">
  Looking to scale your business with expert <span className="text-primary font-semibold">eCommerce development, account management, social media handling, content marketing, or business consulting?</span>
</p>
<p className="text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-6">
  At Veyber, we help businesses across Vadodara, Ahmedabad, Surat, and all over Gujarat build, manage, and grow their digital presence with data-driven strategies and measurable results.
</p>
<div className="flex flex-wrap justify-center gap-2 text-xs font-semibold text-on-surface-variant">
  {[
    { name: 'Vadodara', url: '/digital-marketing-vadodara' },
    { name: 'Ahmedabad', url: '/digital-marketing-ahmedabad' },
    { name: 'Surat', url: '/digital-marketing-surat' },
    { name: 'Rajkot', url: '/digital-marketing-rajkot' }
  ].map((city, i, arr) => (
    <span key={city.name} className="flex items-center gap-1.5">
      <span className="material-symbols-outlined text-primary text-[14px]">location_on</span>
      <Link href={city.url} className="hover:text-primary transition-colors">{city.name}</Link>
      {i < arr.length - 1 && <span className="ml-1.5 text-outline-variant/40">·</span>}
    </span>
  ))}
</div>
</header>

{/* Form + Contact Info */}
<div className="px-4 sm:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start mb-16 sm:mb-24">

  {/* Contact Form */}
  <section className="lg:col-span-7 bg-surface-container-low rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[60px] rounded-full -mr-32 -mt-32 pointer-events-none"/>
    <div className="relative z-10 mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Send Us a Message</h2>
      <p className="text-on-surface-variant text-sm leading-relaxed">Have a project in mind? Fill out the form and our team will get back to you within 24 hours.</p>
    </div>
    <ContactForm />
  </section>

  {/* Contact Info + Map */}
  <section className="lg:col-span-5 space-y-4 sm:space-y-6">

    <div className="bg-surface-container-low rounded-3xl p-6 border border-outline-variant/10">
      <h2 className="text-lg font-bold text-white mb-4">Get in Touch with Veyber</h2>
      <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Whether you&apos;re launching a new online store, managing marketplaces like Amazon/Flipkart, or building a strong brand presence — our team is here to help.</p>

      <div className="space-y-3">
        {/* Email */}
        <a href="mailto:veyberservicespvtltd@gmail.com" className="flex items-center gap-4 p-4 bg-surface-container rounded-2xl border border-outline-variant/10 group hover:border-primary/25 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-0.5">Email Us</p>
            <p className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">veyberservicespvtltd@gmail.com</p>
          </div>
        </a>

        {/* Phone */}
        <a href="tel:+916355183655" className="flex items-center gap-4 p-4 bg-surface-container rounded-2xl border border-outline-variant/10 group hover:border-primary/25 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-0.5">Call Us</p>
            <p className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">+91 6355183655</p>
          </div>
        </a>

        {/* Website */}
        <a href="https://www.veyber.co.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-surface-container rounded-2xl border border-outline-variant/10 group hover:border-primary/25 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
            <span className="material-symbols-outlined text-[20px]">language</span>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-0.5">Website</p>
            <p className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">www.veyber.co.in</p>
          </div>
        </a>

        {/* Address */}
        <div className="flex items-center gap-4 p-4 bg-surface-container rounded-2xl border border-outline-variant/10">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-0.5">Our Location</p>
            <p className="text-sm font-medium text-on-surface">Vadodara - 390019</p>
          </div>
        </div>
      </div>
    </div>

    {/* Lazy-loaded map */}
    <LazyMap />

  </section>
</div>

{/* Why Businesses in Gujarat Choose Veyber */}
<section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-10 sm:mb-14">
  <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3">Why Businesses in Gujarat Choose Veyber</h2>
  <p className="text-on-surface-variant text-sm max-w-xl mx-auto">We don&apos;t just offer services — we build long-term partnerships that drive growth.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
{[
  { icon: 'location_on', text: 'Local expertise in Gujarat market trends' },
  { icon: 'trending_up', text: 'Result-driven digital strategies' },
  { icon: 'payments', text: 'Affordable pricing for startups & SMEs' },
  { icon: 'support_agent', text: 'Dedicated account managers' },
  { icon: 'hub', text: 'End-to-end business growth solutions' },
  { icon: 'handshake', text: 'Long-term partnerships, not just projects' },
].map(({ icon, text }) => (
  <div key={text} className="flex items-center gap-4 p-5 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/25 hover:bg-surface-container-high transition-all duration-200 group">
    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
      <span className="material-symbols-outlined text-primary text-[20px]">{icon}</span>
    </div>
    <p className="font-semibold text-sm text-white">{text}</p>
  </div>
))}
</div>
</div>
</section>

{/* Our Core Services — quick list */}
<section className="px-4 sm:px-8 py-14 sm:py-20 max-w-7xl mx-auto">
<div className="text-center mb-10 sm:mb-14">
  <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3">Our Core Services</h2>
  <p className="text-on-surface-variant text-sm max-w-xl mx-auto">Everything you need to grow your business digitally — under one roof.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{[
  {
    icon: 'shopping_cart',
    title: 'eCommerce Development',
    desc: 'Build high-performance online stores with seamless UX and secure payment integration.',
    href: '/services#ecommerce-development',
  },
  {
    icon: 'trending_up',
    title: 'eCommerce Account Management',
    desc: 'Complete marketplace handling for Amazon, Flipkart & more — from listing to ads.',
    href: '/ecommerce-account-management',
  },
  {
    icon: 'share',
    title: 'Social Media Handling',
    desc: 'Grow your brand with consistent, engaging, and strategic social media management.',
    href: '/services#social-media-handling',
  },
  {
    icon: 'article',
    title: 'Content Marketing',
    desc: 'SEO-focused content that drives traffic, engagement, and conversions.',
    href: '/services#content-marketing',
  },
  {
    icon: 'psychology',
    title: 'Business Consulting',
    desc: 'Strategic guidance to scale your business efficiently and sustainably.',
    href: '/services#business-consulting',
  },
  {
    icon: 'add_circle',
    title: 'Need Something Custom?',
    desc: 'Tell us your goal — we\'ll build the right strategy around your business.',
    href: '/custom-ecommerce-development',
    isCtaCard: true,
  },
].map(({ icon, title, desc, href, isCtaCard }) => (
  <Link
    key={title}
    href={href}
    className={`group p-6 rounded-2xl border transition-all duration-200 flex flex-col gap-3 ${
      isCtaCard
        ? 'bg-gradient-to-br from-primary/15 to-primary-container/10 border-primary/25 hover:border-primary/50 hover:bg-primary/20'
        : 'bg-surface-container border-outline-variant/10 hover:border-primary/25 hover:bg-surface-container-high'
    }`}
  >
    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${isCtaCard ? 'bg-primary/20' : 'bg-primary/10 group-hover:bg-primary/15'} transition-colors`}>
      <span className="material-symbols-outlined text-primary">{icon}</span>
    </div>
    <h3 className="font-bold text-white">{title}</h3>
    <p className="text-on-surface-variant text-sm leading-relaxed flex-grow">{desc}</p>
    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
      Learn More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
    </span>
  </Link>
))}
</div>
</section>

{/* Our Presence in Gujarat */}
<section className="px-4 sm:px-8 py-12 sm:py-16 bg-surface-container-low">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3">Our Presence in Gujarat</h2>
<p className="text-on-surface-variant text-sm mb-8">Veyber proudly serves businesses across Gujarat and beyond.</p>
<div className="flex flex-wrap justify-center gap-3 mb-8">
{[
  { city: 'Vadodara (Primary)', url: '/digital-marketing-vadodara' },
  { city: 'Ahmedabad', url: '/digital-marketing-ahmedabad' },
  { city: 'Surat', url: '/digital-marketing-surat' },
  { city: 'Rajkot', url: '/digital-marketing-rajkot' }
].map(({ city, url }) => (
  <Link key={city} href={url} className="flex items-center gap-2 px-4 py-2.5 bg-surface-container rounded-xl border border-outline-variant/10 hover:border-primary/30 hover:bg-surface-container-high hover:text-primary transition-all text-sm font-semibold">
    <span className="material-symbols-outlined text-primary text-[16px]">location_on</span>
    {city}
  </Link>
))}
</div>
<div className="bg-surface-container rounded-2xl border border-primary/15 p-5 sm:p-8 text-left max-w-2xl mx-auto">
  <p className="text-sm text-on-surface-variant mb-3 font-medium">Searching for:</p>
  {[
    { text: '"Best eCommerce Development Company in Vadodara"', q: 'Best eCommerce Development Company in Vadodara' },
    { text: '"eCommerce Account Management Services in Gujarat"', q: 'eCommerce Account Management Services in Gujarat' },
    { text: '"Social Media Agency in Vadodara"', q: 'Social Media Agency in Vadodara' },
  ].map(({ text, q }) => (
    <a 
      key={text} 
      href={`https://www.google.com/search?q=${encodeURIComponent(q)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 py-2 px-2 -mx-2 rounded-lg border-b border-outline-variant/10 last:border-0 hover:bg-primary/5 transition-colors cursor-pointer group"
    >
      <span className="material-symbols-outlined text-primary text-[16px] shrink-0 group-hover:scale-110 transition-transform">search</span>
      <span className="text-sm text-on-surface italic group-hover:text-primary transition-colors">{text}</span>
    </a>
  ))}
  <p className="text-primary font-bold text-sm mt-4">You&apos;re in the right place.</p>
</div>
</div>
</section>

{/* Final CTA */}
<section className="px-4 sm:px-8 py-14 sm:py-20 max-w-7xl mx-auto">
<div className="force-dark relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary-container/10 pointer-events-none"/>
<div className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 bg-primary/15 blur-[60px] rounded-full"/>
<div className="pointer-events-none absolute -bottom-20 -right-20 w-64 h-64 bg-primary-container/20 blur-[60px] rounded-full"/>
<div className="relative z-10 p-8 sm:p-12 md:p-16 text-center">
  <h2 className="text-2xl sm:text-4xl font-black text-white mb-4 tracking-tight">
    Let&apos;s Build Something Powerful Together
  </h2>
  <p className="text-white/70 text-base sm:text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
    Your business deserves more than just &ldquo;online presence&rdquo; — it deserves growth, visibility, and conversions.
  </p>
  <p className="text-white/50 text-sm mb-8">Contact Veyber today and take the first step toward digital success in Gujarat.</p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="tel:+916355183655" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-bold rounded-full hover:shadow-[0_10px_30px_rgba(79,142,255,0.4)] transition-all active:scale-95">
      <span className="material-symbols-outlined text-[20px]">call</span>
      Call Us Now
    </a>
    <a href="mailto:veyberservicespvtltd@gmail.com" className="inline-flex items-center justify-center gap-2 px-7 py-4 text-white font-bold rounded-full border border-white/20 hover:border-primary/40 hover:bg-primary/10 transition-all active:scale-95">
      <span className="material-symbols-outlined text-[20px]">mail</span>
      Email Us
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
