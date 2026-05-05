import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Custom Ecommerce Development Company in Gujarat | Scalable Solutions - Veyber',
  description: 'Build powerful custom ecommerce platforms in Gujarat with Veyber. Tailored solutions for startups, enterprises & marketplaces.',
  keywords: 'custom ecommerce development Gujarat, custom ecommerce development company Vadodara, tailored ecommerce solutions Gujarat, scalable online store development India, bespoke ecommerce website development',
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Custom Ecommerce Development',
  provider: { '@type': 'Organization', name: 'Veyber', url: 'https://veyber.co.in' },
  areaServed: { '@type': 'State', name: 'Gujarat' },
  description: 'Custom ecommerce development services for startups, enterprises, B2B platforms, and marketplace businesses that need scalable solutions in Gujarat.',
};

const capabilities = [
  'Fully custom ecommerce websites',
  'Advanced UI/UX design',
  'API integrations',
  'Custom admin panels',
  'Multi-vendor systems',
  'High-level security',
];

const bestFit = [
  'Enterprise businesses',
  'B2B platforms',
  'Marketplace startups',
  'High-traffic websites',
];

const solutionPillars = [
  {
    icon: 'auto_awesome',
    title: 'Unique Features',
    desc: 'Custom development is ideal when your business needs functionality that Shopify or WooCommerce templates cannot support cleanly.',
  },
  {
    icon: 'business',
    title: 'Large-Scale Business Fit',
    desc: 'For enterprise-grade ecommerce in Vadodara and across Gujarat, custom architecture gives you room to grow without platform constraints.',
  },
  {
    icon: 'tune',
    title: 'Complete Control',
    desc: 'From storefront experience to business logic, every layer is designed around your exact operational and customer requirements.',
  },
  {
    icon: 'speed',
    title: 'High Performance',
    desc: 'High-performance architecture helps custom ecommerce stores stay fast, stable, and ready for scale under heavier traffic loads.',
  },
];

const whyVeyber = [
  'Fully tailored solutions',
  'Scalable architecture',
  'High performance',
  'Long-term support',
];

const siloLinks = [
  {
    href: '/ecommerce-development',
    icon: 'shopping_cart',
    label: 'eCommerce Development',
    desc: 'See the full overview of our ecommerce development services.',
  },
  {
    href: '/shopify-development',
    icon: 'storefront',
    label: 'Shopify',
    desc: 'Explore Shopify builds for faster launches and simpler operations.',
  },
  {
    href: '/woocommerce-development',
    icon: 'code',
    label: 'WooCommerce',
    desc: 'Compare custom builds with our WooCommerce development offering.',
  },
  {
    href: '/contact-us',
    icon: 'mail',
    label: 'Contact',
    desc: 'Talk through your custom ecommerce requirements with our team.',
  },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Navbar />
      <main className="pt-[100px]">

<section className="relative px-4 sm:px-8 py-12 sm:py-20 md:py-28 overflow-hidden" style={{ background: 'radial-gradient(ellipse 110% 55% at 50% -5%, rgba(174,198,255,0.07) 0%, transparent 70%)' }}>
<div className="pointer-events-none absolute inset-0 opacity-[0.022]" style={{ backgroundImage: 'linear-gradient(rgba(174,198,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(174,198,255,0.6) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
<div className="pointer-events-none absolute -top-[15%] -left-[10%] w-[600px] h-[600px] bg-primary/10 blur-[80px] rounded-full" />
<div className="pointer-events-none absolute -bottom-[15%] -right-[10%] w-[500px] h-[500px] bg-primary-container/10 blur-[70px] rounded-full" />
<div className="relative z-10 max-w-5xl mx-auto text-center">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-5">
  <span className="relative flex h-1.5 w-1.5 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" /></span>
  Custom Ecommerce Development - Gujarat
</span>
<h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
  Custom Ecommerce Development<br />
  <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 28px rgba(174,198,255,0.3))' }}>in Gujarat</span>
</h1>
<p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-4 leading-relaxed">
  Tailored solutions for unique business needs in Vadodara, Ahmedabad, Surat, and across Gujarat.
</p>
<p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
  Need something beyond Shopify or WooCommerce? Veyber builds fully custom ecommerce platforms for businesses in Gujarat.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link href="/contact-us" className="group relative px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#aec6ff] to-[#4f8eff] text-[#001a42] font-bold rounded-full text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(174,198,255,0.38)] active:scale-95">
  <span className="relative z-10 flex items-center justify-center gap-2"><span className="material-symbols-outlined text-[20px]">call</span>Discuss Your Store</span>
  <div className="absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-[100%] transition-transform duration-700" />
</Link>
<Link href="/ecommerce-development" className="px-7 sm:px-9 py-3.5 sm:py-4 text-white font-bold rounded-full text-base sm:text-lg border border-white/12 hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300 flex items-center justify-center gap-2">
  <span className="material-symbols-outlined text-[20px]">arrow_back</span>All Ecommerce Services
</Link>
</div>
</div>
</section>

<section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-10 sm:mb-14">
  <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-4">Why Custom Ecommerce?</h2>
  <p className="text-on-surface-variant max-w-2xl mx-auto text-sm sm:text-base">Custom solutions are best when your business needs unique features, high performance, and complete control beyond off-the-shelf platforms.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
{solutionPillars.map(({ icon, title, desc }) => (
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
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
<div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden">
  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[50px] rounded-full pointer-events-none" />
  <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-5 relative z-10">Our Custom Development Services</h2>
  <ul className="space-y-3 relative z-10">
  {capabilities.map((item) => (
    <li key={item} className="flex items-start gap-3">
      <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0">check_circle</span>
      <span className="text-sm text-white font-medium">{item}</span>
    </li>
  ))}
  </ul>
</div>

<div className="space-y-5">
  <div className="bg-surface-container rounded-2xl border border-outline-variant/10 p-6 sm:p-8">
    <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-5">Best For</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {bestFit.map((item) => (
      <div key={item} className="flex items-center gap-3 p-4 bg-surface-container-high rounded-xl border border-outline-variant/10">
        <span className="material-symbols-outlined text-primary text-[18px] shrink-0">arrow_right_alt</span>
        <span className="font-semibold text-sm text-white">{item}</span>
      </div>
    ))}
    </div>
  </div>

  <div className="bg-surface-container rounded-2xl border border-outline-variant/10 p-6">
    <h3 className="text-base font-bold text-white mb-4">Serving Across Gujarat</h3>
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

  <div className="bg-surface-container rounded-2xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[40px] rounded-full pointer-events-none" />
    <h3 className="text-xl font-bold font-headline mb-5 relative z-10">Why Veyber?</h3>
    <ul className="space-y-3 relative z-10">
    {whyVeyber.map((text) => (
      <li key={text} className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary text-[18px] shrink-0">verified</span>
        <span className="font-semibold text-white text-sm">{text}</span>
      </li>
    ))}
    </ul>
  </div>
</div>
</div>
</section>

<section className="px-4 sm:px-8 py-12 sm:py-16 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<h2 className="text-xl sm:text-2xl font-bold font-headline mb-2">Internal Links</h2>
<p className="text-on-surface-variant text-sm mb-7">Use these silo links to move between closely related ecommerce pages.</p>
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

<section className="px-4 sm:px-8 py-14 sm:py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-primary/5" />
<div className="force-dark max-w-4xl mx-auto text-center relative z-10 bg-neutral-900 rounded-[2rem] sm:rounded-[3rem] border border-white/15 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
<div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
<div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/15 blur-[60px] rounded-full" />
<div className="relative z-10 p-8 sm:p-12 md:p-16">
  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-6">
    <span className="relative flex h-1.5 w-1.5 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" /></span>
    Custom Build Consultation
  </span>
  <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
    Let&apos;s Design the Right Ecommerce System
  </h2>
  <p className="text-base sm:text-lg text-white/75 mb-3 max-w-xl mx-auto leading-relaxed drop-shadow">
    If templates are holding your business back, we&apos;ll help you map the architecture, integrations, and storefront experience your growth actually needs.
  </p>
  <p className="text-white/50 text-sm mb-8">No commitment required - Response within 24 hours</p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-3.5 sm:py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black rounded-full text-base sm:text-lg shadow-2xl hover:shadow-primary/40 transition-all active:scale-95 group">
      Start Your Project
      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
    </Link>
    <Link href="/woocommerce-development" className="inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-3.5 sm:py-5 text-white font-bold rounded-full border border-white/20 hover:border-primary/40 hover:bg-primary/10 transition-all active:scale-95">
      WooCommerce Option
      <span className="material-symbols-outlined text-[20px]">code</span>
    </Link>
  </div>
</div>
</div>
</section>

      </main>
      <Footer />
    </div>
  );
}
