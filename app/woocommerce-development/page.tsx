import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';

export const metadata: Metadata = {
  title: 'WooCommerce Development Company in Gujarat | Vadodara Experts - Veyber',
  description: 'Get custom WooCommerce development services in Vadodara & Gujarat. Build flexible, scalable, and SEO-optimized ecommerce websites with Veyber.',
  keywords: 'WooCommerce development Gujarat, WooCommerce development company Vadodara, WooCommerce experts Gujarat, custom WooCommerce store Vadodara, WooCommerce SEO Gujarat, WordPress ecommerce development India',
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'WooCommerce Development',
  provider: { '@type': 'Organization', name: 'Veyber', url: 'https://veyber.co.in' },
  areaServed: { '@type': 'State', name: 'Gujarat' },
  description: 'Custom WooCommerce development services including theme customization, plugin integration, payment gateway setup, speed optimization, and SEO optimization in Vadodara and across Gujarat.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is WooCommerce better than Shopify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Both platforms have strengths. WooCommerce gives you more control, flexibility, and WordPress integration, while Shopify is better for quick launches with less technical overhead.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does WooCommerce development cost in Gujarat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing depends on store complexity, integrations, customization level, and SEO requirements. Contact Veyber for a quote tailored to your business.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you migrate my store to WooCommerce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We help businesses migrate from Shopify and other platforms to WooCommerce while preserving products, data, and SEO structure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer post-launch support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide ongoing support, maintenance, performance improvements, and SEO enhancements after launch.',
      },
    },
  ],
};

const services = [
  {
    icon: 'code',
    title: 'Custom WooCommerce Development',
    desc: 'Flexible storefronts built around your products, workflows, and customer journey.',
    items: ['Custom store architecture', 'Tailored checkout flows', 'Scalable product structure', 'Conversion-focused layouts'],
  },
  {
    icon: 'brush',
    title: 'Theme Customization',
    desc: 'Brand-aligned WooCommerce themes crafted for usability, speed, and trust.',
    items: ['Custom theme styling', 'Responsive design updates', 'Better product presentation', 'Brand-consistent UI'],
  },
  {
    icon: 'extension',
    title: 'Plugin Integration',
    desc: 'The right plugins and custom integrations to extend functionality without sacrificing performance.',
    items: ['Shipping and payment plugins', 'CRM and ERP integrations', 'Marketing automation tools', 'Custom plugin setup'],
  },
  {
    icon: 'payments',
    title: 'Payment Gateway Setup',
    desc: 'Secure, seamless checkout experiences using trusted Indian and global payment options.',
    items: ['Razorpay and PayU setup', 'UPI and card payments', 'Net banking support', 'Secure checkout configuration'],
  },
  {
    icon: 'speed',
    title: 'Speed Optimization',
    desc: 'A faster WooCommerce store creates better user experience, better rankings, and stronger conversions.',
    items: ['Core Web Vitals tuning', 'Image optimization', 'Caching and CDN setup', 'Performance clean-up'],
  },
  {
    icon: 'manage_search',
    title: 'SEO Optimization',
    desc: 'SEO-ready structure across categories, product pages, technical setup, and on-site content.',
    items: ['Technical SEO setup', 'Schema markup', 'Product page optimization', 'WordPress SEO tooling'],
  },
];

const whyWoo = [
  {
    icon: 'tune',
    title: 'Full Customization',
    desc: 'Every part of your store can be tailored to your catalog, checkout, design, and business logic.',
  },
  {
    icon: 'lock_open',
    title: 'No Platform Limitations',
    desc: 'You own your code, your data, and your stack without being boxed in by platform rules.',
  },
  {
    icon: 'payments',
    title: 'Cost-Effective Solutions',
    desc: 'WooCommerce is a strong choice for businesses that want flexibility without heavy platform fees.',
  },
  {
    icon: 'article',
    title: 'WordPress Integration',
    desc: 'Pair ecommerce with powerful content, blogging, SEO, and publishing workflows inside WordPress.',
  },
];

const bestFor = [
  { icon: 'business', label: 'Medium to large businesses' },
  { icon: 'manage_search', label: 'SEO-focused brands' },
  { icon: 'tune', label: 'Businesses needing flexibility' },
  { icon: 'article', label: 'Content-driven ecommerce websites' },
];

const process = [
  { n: '01', label: 'Discovery and Planning', desc: 'We understand your products, operations, customers, and growth goals before implementation starts.' },
  { n: '02', label: 'Store Strategy', desc: 'We map the information architecture, conversion flow, plugin stack, and technical direction.' },
  { n: '03', label: 'Design and Development', desc: 'Your WooCommerce store is built with a focus on usability, speed, and scalable architecture.' },
  { n: '04', label: 'Testing and Optimization', desc: 'We test functionality, responsiveness, checkout flows, and performance before launch.' },
  { n: '05', label: 'Launch', desc: 'Your store goes live with clean structure, stable setup, and core SEO considerations in place.' },
  { n: '06', label: 'Support and Growth', desc: 'We continue refining the store as your catalog, traffic, and business complexity grow.' },
];

const siloLinks = [
  {
    href: '/ecommerce-development',
    icon: 'shopping_cart',
    label: 'Ecommerce Development',
    desc: 'Explore our broader ecommerce development solutions.',
  },
  {
    href: '/shopify-development',
    icon: 'storefront',
    label: 'Shopify Services',
    desc: 'Compare WooCommerce with our Shopify development offering.',
  },
  {
    href: '/custom-ecommerce-development',
    icon: 'precision_manufacturing',
    label: 'Custom Ecommerce',
    desc: 'Discover tailored ecommerce systems built around complex business needs.',
  },
  {
    href: '/contact-us',
    icon: 'mail',
    label: 'Contact',
    desc: 'Talk with our team about your WooCommerce project and next steps.',
  },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="pt-[100px]">

<section className="relative px-4 sm:px-8 py-12 sm:py-20 md:py-28 overflow-hidden" style={{ background: 'radial-gradient(ellipse 110% 55% at 50% -5%, rgba(174,198,255,0.07) 0%, transparent 70%)' }}>
<div className="pointer-events-none absolute inset-0 opacity-[0.022]" style={{ backgroundImage: 'linear-gradient(rgba(174,198,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(174,198,255,0.6) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
<div className="pointer-events-none absolute -top-[15%] -left-[10%] w-[600px] h-[600px] bg-primary/10 blur-[80px] rounded-full" />
<div className="pointer-events-none absolute -bottom-[15%] -right-[10%] w-[500px] h-[500px] bg-primary-container/10 blur-[70px] rounded-full" />
<div className="relative z-10 max-w-5xl mx-auto text-center">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-5">
  <span className="relative flex h-1.5 w-1.5 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" /></span>
  WooCommerce Development - Gujarat
</span>
<h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
  WooCommerce Development<br />
  <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 28px rgba(174,198,255,0.3))' }}>Services in Gujarat</span>
</h1>
<p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-4 leading-relaxed">
  Flexible and scalable ecommerce solutions for brands that want full control over their online store.
</p>
<p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
  Want full control over your online store? Veyber offers expert <span className="text-primary font-semibold">WooCommerce development in Vadodara</span> and across Gujarat.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link href="/contact-us" className="group relative px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#aec6ff] to-[#4f8eff] text-[#001a42] font-bold rounded-full text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(174,198,255,0.38)] active:scale-95">
  <span className="relative z-10 flex items-center justify-center gap-2"><span className="material-symbols-outlined text-[20px]">call</span>Get Free Consultation</span>
  <div className="absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-[100%] transition-transform duration-700" />
</Link>
<Link href="/ecommerce-development" className="px-7 sm:px-9 py-3.5 sm:py-4 text-white font-bold rounded-full text-base sm:text-lg border border-white/12 hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300 flex items-center justify-center gap-2">
  <span className="material-symbols-outlined text-[20px]">arrow_back</span>eCommerce Development
</Link>
</div>
</div>
</section>

<section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-10 sm:mb-14">
  <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-4">Why WooCommerce?</h2>
  <p className="text-on-surface-variant max-w-xl mx-auto text-sm">WooCommerce is ideal for businesses that want full customization, no platform limitations, cost-effective solutions, and deep WordPress integration.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
{whyWoo.map(({ icon, title, desc }) => (
  <div key={title} className="bg-surface-container rounded-2xl border border-outline-variant/10 p-6 hover:border-primary/25 hover:bg-surface-container-high transition-all duration-200 group">
    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <span className="material-symbols-outlined text-primary">{icon}</span>
    </div>
    <h3 className="font-bold text-white mb-2">{title}</h3>
    <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
  </div>
))}
</div>
</div>
</section>

<section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 sm:mb-16">
  <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our WooCommerce Services</h2>
  <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">Custom development, theme work, plugin setup, payment gateways, speed optimization, and SEO optimization for growth-focused stores.</p>
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
        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
        {item}
      </li>
    ))}
    </ul>
  </div>
))}
</div>
</div>
</section>

<section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

<div>
  <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-5">Best For</h2>
  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">WooCommerce is a strong fit when flexibility, SEO, and deeper content-led commerce matter to your business model.</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
  {bestFor.map(({ icon, label }) => (
    <div key={label} className="flex items-center gap-3 p-4 bg-surface-container rounded-xl border border-outline-variant/10 hover:border-primary/25 transition-all group">
      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
        <span className="material-symbols-outlined text-primary text-[18px]">{icon}</span>
      </div>
      <span className="font-semibold text-sm text-white">{label}</span>
    </div>
  ))}
  </div>

  <div className="bg-surface-container rounded-2xl border border-outline-variant/10 p-5">
    <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">WooCommerce vs Shopify</h3>
    <div className="space-y-3">
    {[
      { label: 'Customization', woo: 'Unlimited', shopify: 'More constrained' },
      { label: 'Ownership', woo: 'Full control', shopify: 'Platform managed' },
      { label: 'SEO control', woo: 'Strong with WordPress', shopify: 'Good but narrower' },
      { label: 'Best fit', woo: 'Flexible and content-led stores', shopify: 'Fast launch stores' },
    ].map(({ label, woo, shopify }) => (
      <div key={label} className="grid grid-cols-3 gap-2 text-xs">
        <span className="text-on-surface-variant font-semibold">{label}</span>
        <span className="text-primary font-bold">{woo}</span>
        <span className="text-on-surface-variant/60">{shopify}</span>
      </div>
    ))}
    </div>
    <p className="text-[10px] text-on-surface-variant/50 mt-3">Not sure which to pick? <Link href="/contact-us" className="text-primary hover:underline">Ask us free -&gt;</Link></p>
  </div>
</div>

<div className="space-y-5">
  <div className="bg-surface-container rounded-2xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[40px] rounded-full pointer-events-none" />
    <h3 className="text-xl font-bold font-headline mb-5 relative z-10">Why Choose Veyber?</h3>
    <ul className="space-y-3 relative z-10">
    {[
      { icon: 'verified', text: 'Fully customizable stores' },
      { icon: 'manage_search', text: 'SEO-friendly structure' },
      { icon: 'open_in_full', text: 'Scalable architecture' },
      { icon: 'code', text: 'Expert WordPress developers' },
    ].map(({ icon, text }) => (
      <li key={text} className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary text-[18px] shrink-0">{icon}</span>
        <span className="font-semibold text-white text-sm">{text}</span>
      </li>
    ))}
    </ul>
  </div>

  <div className="bg-surface-container rounded-2xl border border-outline-variant/10 p-6">
    <h3 className="text-base font-bold text-white mb-4">Areas We Serve</h3>
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

<ProcessSection
  title="Our Development Process"
  description="A transparent, milestone-driven process designed to produce a stable, scalable ecommerce store."
  steps={process}
/>

<section className="px-4 sm:px-8 py-12 sm:py-16 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<h2 className="text-xl sm:text-2xl font-bold font-headline mb-2">Internal Links</h2>
<p className="text-on-surface-variant text-sm mb-7">Use these silo links to explore the wider ecommerce development journey with Veyber.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
{siloLinks.map(({ href, icon, label, desc }) => (
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

<section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-10 sm:mb-14">
  <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3">Frequently Asked Questions</h2>
  <p className="text-on-surface-variant text-sm">Common questions about WooCommerce development with Veyber.</p>
</div>
<div className="flex flex-col gap-4">
{faqSchema.mainEntity.map((item, i) => (
  <details key={i} name="faq" className="group bg-surface-container rounded-2xl border border-outline-variant/10 overflow-hidden open:border-primary/20 transition-all duration-200">
    <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none gap-4">
      <h3 className="font-bold text-white text-sm sm:text-base">{item.name}</h3>
      <span className="flex-shrink-0 w-8 h-8 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-surface-variant group-open:bg-primary/10 group-open:border-primary/30 group-open:text-primary transition-all duration-200">
        <span className="material-symbols-outlined text-[18px] group-open:rotate-45 transition-transform duration-200">add</span>
      </span>
    </summary>
    <div className="px-6 pb-5 text-on-surface-variant leading-relaxed text-sm">{item.acceptedAnswer.text}</div>
  </details>
))}
</div>
</div>
</section>

<section className="px-4 sm:px-8 py-14 sm:py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-primary/5" />
<div className="force-dark max-w-4xl mx-auto text-center relative z-10 bg-neutral-900 rounded-[2rem] sm:rounded-[3rem] border border-white/15 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
<div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
<div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/15 blur-[60px] rounded-full" />
<div className="relative z-10 p-8 sm:p-12 md:p-16">
  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-6">
    <span className="relative flex h-1.5 w-1.5 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" /></span>
    Free Consultation
  </span>
  <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
    Let&apos;s Build Your WooCommerce Store
  </h2>
  <p className="text-base sm:text-lg text-white/75 mb-3 max-w-xl mx-auto leading-relaxed drop-shadow">
    Ready for flexible, scalable, and SEO-friendly WooCommerce development in Gujarat?
  </p>
  <p className="text-white/50 text-sm mb-8">No commitment required - Response within 24 hours</p>
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
