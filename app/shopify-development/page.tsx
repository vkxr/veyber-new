import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Shopify Development Company in Gujarat | Shopify Experts Vadodara – Veyber',
  description: 'Hire Veyber for Shopify development in Vadodara & Gujarat. Get fast, secure, and high-converting Shopify stores for your business. Free consultation available.',
  keywords: 'Shopify development Gujarat, Shopify development company Vadodara, Shopify experts Gujarat, Shopify store setup Vadodara, Shopify SEO Gujarat, Shopify migration services India',
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Shopify Development',
  provider: { '@type': 'Organization', name: 'Veyber', url: 'https://veyber.co.in' },
  areaServed: { '@type': 'State', name: 'Gujarat' },
  description: 'Shopify store setup, custom theme design, app integration, and SEO optimization services in Vadodara & Gujarat.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Shopify good for businesses in Gujarat?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Shopify works great for startups, D2C brands, and growing businesses anywhere in Gujarat. It\'s easy to manage, secure, and scales with your business.' },
    },
    {
      '@type': 'Question',
      name: 'How much does Shopify development cost in Vadodara?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pricing depends on design complexity, number of products, and integrations needed. Veyber offers affordable Shopify packages tailored for startups and SMEs in Gujarat.' },
    },
    {
      '@type': 'Question',
      name: 'Can you migrate my existing store to Shopify?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — we handle complete store migrations to Shopify including products, orders, customer data, and SEO redirects, with zero downtime.' },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to launch a Shopify store?',
      acceptedAnswer: { '@type': 'Answer', text: 'A basic Shopify store can go live in 1–2 weeks. Custom-designed stores with advanced features typically take 3–5 weeks.' },
    },
  ],
};

const services = [
  {
    icon: 'storefront',
    title: 'Shopify Store Setup',
    desc: 'Full store setup from scratch — domain, products, payment, and launch-ready in days.',
    items: ['Domain & hosting setup', 'Product upload & categorisation', 'Collections & navigation', 'Launch checklist & go-live'],
  },
  {
    icon: 'brush',
    title: 'Custom Theme Design',
    desc: 'Unique, brand-aligned Shopify themes built to convert visitors into buyers.',
    items: ['Custom UI/UX design', 'Mobile-first responsive layout', 'Brand colour & typography', 'Conversion-focused sections'],
  },
  {
    icon: 'extension',
    title: 'Shopify App Integration',
    desc: 'Connect the right apps to automate, upsell, and grow your Shopify store.',
    items: ['Email marketing (Klaviyo, Mailchimp)', 'Review & loyalty apps', 'Inventory management', 'Analytics & reporting tools'],
  },
  {
    icon: 'payments',
    title: 'Payment Gateway Setup',
    desc: 'Seamless, secure checkout experience with all major Indian & global payment methods.',
    items: ['Razorpay & PayU integration', 'UPI, cards & net banking', 'Multi-currency support', 'Secure SSL checkout'],
  },
  {
    icon: 'manage_search',
    title: 'Shopify SEO Optimisation',
    desc: 'Get found on Google — we build SEO into every corner of your Shopify store.',
    items: ['Keyword-optimised product pages', 'Meta titles & descriptions', 'Schema markup setup', 'Speed & Core Web Vitals'],
  },
  {
    icon: 'sync_alt',
    title: 'Store Migration to Shopify',
    desc: 'Move your existing store to Shopify smoothly — no data loss, no downtime.',
    items: ['WooCommerce / Magento migration', 'Product & order data transfer', 'SEO redirect mapping', 'Post-migration testing'],
  },
];

const whyShopify = [
  { icon: 'bolt', title: 'Easy to Manage', desc: 'No coding needed to add products, update prices, or manage orders — your team can handle it.' },
  { icon: 'lock', title: 'Highly Secure', desc: 'PCI DSS compliant out of the box, with SSL and fraud protection built in.' },
  { icon: 'speed', title: 'Fast Performance', desc: 'Shopify\'s CDN ensures lightning-fast load speeds globally — great for SEO and conversions.' },
  { icon: 'open_in_full', title: 'Built for Scaling', desc: 'From 10 products to 10,000 — Shopify grows with your business without re-platforming.' },
];

const audiences = [
  { icon: 'rocket_launch', label: 'Startups launching quickly' },
  { icon: 'local_shipping', label: 'D2C brands' },
  { icon: 'store', label: 'Small to mid-size businesses' },
  { icon: 'inventory_2', label: 'Dropshipping businesses' },
  { icon: 'shopping_bag', label: 'Fashion & lifestyle brands' },
  { icon: 'category', label: 'Multi-product retailers' },
];

const faqs = [
  {
    q: 'Is Shopify good for businesses in Gujarat?',
    a: "Absolutely. Shopify works great for startups, D2C brands, and growing businesses anywhere in Gujarat. It's easy to manage, secure, and scales with your business without needing a developer for daily tasks.",
  },
  {
    q: 'How much does Shopify development cost in Vadodara?',
    a: 'Pricing depends on design complexity, number of products, and integrations needed. Veyber offers affordable Shopify packages tailored for startups and SMEs in Gujarat. Contact us for a free quote.',
  },
  {
    q: 'Can you migrate my existing store to Shopify?',
    a: 'Yes — we handle complete store migrations to Shopify including products, orders, customer data, and SEO redirects, with zero downtime during the transition.',
  },
  {
    q: 'How long does it take to launch a Shopify store?',
    a: 'A basic Shopify store can go live in 1–2 weeks. Custom-designed stores with advanced features and integrations typically take 3–5 weeks.',
  },
  {
    q: 'Do you offer ongoing Shopify support?',
    a: "Yes. We offer monthly maintenance plans covering updates, new feature additions, performance monitoring, and technical support — so your store always stays in top shape.",
  },
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
  Shopify Development · Gujarat
</span>
<h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
  Launch, Scale &amp; Sell Faster<br/>
  with <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{filter:'drop-shadow(0 0 28px rgba(174,198,255,0.3))'}}>Shopify</span> in Gujarat
</h1>
<p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-4 leading-relaxed">
  Looking to build a powerful Shopify store in <span className="text-primary font-semibold">Vadodara, Ahmedabad, or across Gujarat?</span>
</p>
<p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
  Veyber helps businesses create high-converting Shopify stores that are fast, scalable, and optimized for sales — from day one.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link href="/contact-us" className="group relative px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#aec6ff] to-[#4f8eff] text-[#001a42] font-bold rounded-full text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(174,198,255,0.38)] active:scale-95">
  <span className="relative z-10 flex items-center justify-center gap-2"><span className="material-symbols-outlined text-[20px]">call</span>Get Free Consultation</span>
  <div className="absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-[100%] transition-transform duration-700"/>
</Link>
<Link href="/ecommerce-development" className="px-7 sm:px-9 py-3.5 sm:py-4 text-white font-bold rounded-full text-base sm:text-lg border border-white/12 hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300 flex items-center justify-center gap-2">
  <span className="material-symbols-outlined text-[20px]">arrow_back</span>eCommerce Development
</Link>
</div>
{/* Trust bar */}
<div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10">
{[
  { val: '1–2 wks', label: 'Basic Store Launch' },
  { val: '100%', label: 'Custom Design' },
  { val: 'SEO', label: 'Optimised from Day 1' },
  { val: '24h', label: 'Support Response' },
].map(({ val, label }) => (
  <div key={label} className="text-center">
    <div className="text-xl sm:text-2xl font-black text-white leading-none mb-1">{val}</div>
    <div className="text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-widest font-semibold">{label}</div>
  </div>
))}
</div>
</div>
</section>

{/* Why Shopify */}
<section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-10 sm:mb-14">
  <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-4">Why Choose Shopify?</h2>
  <p className="text-on-surface-variant max-w-xl mx-auto text-sm">Shopify is one of the most trusted eCommerce platforms globally — and perfect for businesses in Gujarat.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
{whyShopify.map(({ icon, title, desc }) => (
  <div key={title} className="bg-surface-container rounded-2xl border border-outline-variant/10 p-6 hover:border-primary/25 hover:bg-surface-container-high transition-all duration-200 group">
    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <span className="material-symbols-outlined text-primary">{icon}</span>
    </div>
    <h3 className="font-bold text-white mb-2">{title}</h3>
    <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
  </div>
))}
</div>
<p className="text-center mt-6 text-sm text-on-surface-variant">
  <span className="material-symbols-outlined text-primary text-[16px] align-middle mr-1">check_circle</span>
  Perfect for startups and growing brands in Gujarat.
</p>
</div>
</section>

{/* Our Shopify Services */}
<section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 sm:mb-16">
  <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our Shopify Services</h2>
  <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">End-to-end Shopify solutions to build, launch, and grow your online store in Gujarat.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
{services.map(({ icon, title, desc, items }) => (
  <div key={title} className="group bg-surface-container p-6 sm:p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/25 hover:bg-surface-container-high transition-all duration-300 flex flex-col">
    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
      <span className="material-symbols-outlined text-primary text-[22px]">{icon}</span>
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-on-surface-variant text-sm leading-relaxed mb-4 flex-grow">{desc}</p>
    <ul className="space-y-1.5">
    {items.map((item) => (
      <li key={item} className="flex items-center gap-2 text-xs text-on-surface-variant">
        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"/>
        {item}
      </li>
    ))}
    </ul>
  </div>
))}
</div>
</div>
</section>

{/* Who Should Use Shopify + Local presence */}
<section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

<div>
  <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-5">Who Should Use Shopify?</h2>
  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Whether you&apos;re launching your first product or scaling to thousands of SKUs, Shopify is built for you.</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
  {audiences.map(({ icon, label }) => (
    <div key={label} className="flex items-center gap-3 p-4 bg-surface-container rounded-xl border border-outline-variant/10 hover:border-primary/25 transition-all group">
      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
        <span className="material-symbols-outlined text-primary text-[18px]">{icon}</span>
      </div>
      <span className="font-semibold text-sm text-white">{label}</span>
    </div>
  ))}
  </div>
</div>

<div className="space-y-6">
  {/* Why Veyber */}
  <div className="bg-surface-container rounded-2xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[40px] rounded-full pointer-events-none"/>
    <h3 className="text-xl font-bold font-headline mb-5 relative z-10">Why Veyber for Shopify?</h3>
    <ul className="space-y-3 relative z-10">
    {[
      { icon: 'verified', text: 'Conversion-focused design' },
      { icon: 'phone_android', text: 'Mobile-first stores' },
      { icon: 'manage_search', text: 'SEO-ready structure' },
      { icon: 'payments', text: 'Affordable packages for Gujarat businesses' },
    ].map(({ icon, text }) => (
      <li key={text} className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary text-[18px] shrink-0">{icon}</span>
        <span className="font-semibold text-white text-sm">{text}</span>
      </li>
    ))}
    </ul>
  </div>

  {/* Areas served */}
  <div className="bg-surface-container rounded-2xl border border-outline-variant/10 p-6">
    <h3 className="text-base font-bold text-white mb-4">Shopify Development in Gujarat</h3>
    <div className="flex flex-wrap gap-2">
    {[
      { name: 'Vadodara', url: '/digital-marketing-vadodara' },
      { name: 'Ahmedabad', url: '/digital-marketing-ahmedabad' },
      { name: 'Surat', url: '/digital-marketing-surat' },
      { name: 'Rajkot', url: '/digital-marketing-rajkot' }
    ].map(({ name, url }) => (
      <Link key={name} href={url} className="flex items-center gap-1.5 px-3 py-2 bg-surface-container-high rounded-xl border border-outline-variant/10 text-xs font-semibold hover:border-primary/30 hover:text-primary transition-all">
        <span className="material-symbols-outlined text-primary text-[13px]">location_on</span>
        {name}
      </Link>
    ))}
    </div>
  </div>
</div>
</div>
</section>

{/* Related Services — SILO links */}
<section className="px-4 sm:px-8 py-12 sm:py-16 bg-surface">
<div className="max-w-7xl mx-auto">
<h2 className="text-xl sm:text-2xl font-bold font-headline mb-2">Related Services</h2>
<p className="text-on-surface-variant text-sm mb-7">Explore our other eCommerce development services.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
{[
  {
    href: '/ecommerce-development',
    icon: 'shopping_cart',
    label: 'eCommerce Development',
    desc: 'Full-stack eCommerce solutions — platform-agnostic and custom-built.',
  },
  {
    href: '/woocommerce-development',
    icon: 'code',
    label: 'WooCommerce Development',
    desc: 'Flexible WordPress-based stores with full control and customisation.',
  },
  {
    href: '/custom-ecommerce-development',
    icon: 'precision_manufacturing',
    label: 'Custom eCommerce Solutions',
    desc: 'Need something unique? Let\'s build a fully custom store for your business.',
  },
  {
    href: '/contact-us',
    icon: 'mail',
    label: 'Contact',
    desc: 'Talk with our team about your Shopify project and growth goals.',
  },
].map(({ href, icon, label, desc }) => (
  <Link key={label} href={href} className="group flex items-start gap-4 p-5 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/25 hover:bg-surface-container-high transition-all duration-200">
    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors mt-0.5">
      <span className="material-symbols-outlined text-primary text-[20px]">{icon}</span>
    </div>
    <div>
      <p className="font-bold text-white text-sm mb-1 group-hover:text-primary transition-colors">{label}</p>
      <p className="text-on-surface-variant text-xs leading-relaxed">{desc}</p>
    </div>
  </Link>
))}
</div>
</div>
</section>

{/* FAQ */}
<section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface-container-low">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-10 sm:mb-14">
  <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3">Frequently Asked Questions</h2>
  <p className="text-on-surface-variant text-sm">Common questions about Shopify development in Gujarat.</p>
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
    Free Consultation
  </span>
  <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
    Ready to Launch Your Shopify Store?
  </h2>
  <p className="text-base sm:text-lg text-white/75 mb-3 max-w-xl mx-auto leading-relaxed drop-shadow">
    Let Veyber build a fast, beautiful, and revenue-generating Shopify store for your business in Gujarat.
  </p>
  <p className="text-white/50 text-sm mb-8">No commitment required · Response within 24 hours</p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-3.5 sm:py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black rounded-full text-base sm:text-lg shadow-2xl hover:shadow-primary/40 transition-all active:scale-95 group">
      Get Free Strategy Call
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
