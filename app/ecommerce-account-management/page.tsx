import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';

export const metadata: Metadata = {
  title: 'Ecommerce Account Management Services in Gujarat | Amazon & Flipkart Experts - Veyber',
  description: 'Looking for ecommerce account management in Vadodara or Gujarat? Veyber offers Amazon, Flipkart & marketplace management services to grow your online sales.',
  keywords:
    'ecommerce account management services Gujarat, Amazon account management Vadodara, Flipkart seller account management India, marketplace management services Gujarat, Amazon PPC management India, ecommerce product listing optimization, seller account management services, ecommerce growth services Gujarat',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Ecommerce Account Management',
  provider: {
    '@type': 'Organization',
    name: 'Veyber',
    url: 'https://veyber.co.in',
  },
  areaServed: {
    '@type': 'State',
    name: 'Gujarat',
  },
  description:
    'Ecommerce account management services including Amazon, Flipkart, PPC ads and listing optimization in Gujarat.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is ecommerce account management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It involves managing your online marketplace accounts including listings, ads, inventory, and performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which marketplaces do you manage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We manage Amazon, Flipkart, Meesho, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you increase my sales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. With optimized listings, ads, and strategy, we focus on improving visibility and conversions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle account suspension issues?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide support for account recovery, compliance, and prevention planning.',
      },
    },
  ],
};

const services = [
  {
    icon: 'edit_note',
    title: 'Product Listing Optimization',
    desc: 'Listings built to rank higher, convert better, and communicate value clearly on competitive marketplaces.',
    items: [
      'SEO-friendly titles and descriptions',
      'High-converting product content',
      'Keyword research',
      'Image optimization guidance',
    ],
  },
  {
    icon: 'storefront',
    title: 'Marketplace Account Handling',
    desc: 'Complete day-to-day management of your seller accounts across leading marketplaces.',
    items: [
      'Amazon Seller Central management',
      'Flipkart Seller Hub management',
      'Catalog updates',
      'Performance monitoring',
    ],
  },
  {
    icon: 'ads_click',
    title: 'PPC Advertising Management',
    desc: 'Targeted campaigns designed to drive profitable growth instead of wasting budget.',
    items: [
      'Amazon Ads management',
      'Campaign optimization',
      'Budget management',
      'ROI tracking',
    ],
  },
  {
    icon: 'inventory_2',
    title: 'Inventory and Order Management',
    desc: 'Operational support to reduce stock issues and keep fulfillment moving smoothly.',
    items: [
      'Inventory tracking',
      'Order processing support',
      'Logistics coordination',
      'Stockout risk reduction',
    ],
  },
  {
    icon: 'health_and_safety',
    title: 'Account Health and Performance Management',
    desc: 'Compliance-first account support focused on performance metrics, stability, and platform trust.',
    items: [
      'Policy compliance',
      'Performance metrics improvement',
      'Suspension prevention',
      'Recovery support',
    ],
  },
  {
    icon: 'query_stats',
    title: 'Competitor and Market Analysis',
    desc: 'Sharper decisions using marketplace data, pricing insights, and competitor benchmarking.',
    items: [
      'Pricing strategy',
      'Market trends analysis',
      'Competitor benchmarking',
      'Growth opportunity mapping',
    ],
  },
];

const challenges = [
  'Low product visibility',
  'Poor conversion rates',
  'High ad spend with low ROI',
  'Account suspension risks',
];

const platforms = ['Amazon', 'Flipkart', 'Meesho', 'JioMart', 'Other marketplaces'];

const cities = ['Vadodara (Primary Focus)', 'Ahmedabad', 'Surat', 'Rajkot'];

const whyVeyber = [
  'Dedicated Account Managers',
  'Data-Driven Strategies',
  'Marketplace Expertise',
  'Transparent Reporting',
  'Affordable Pricing',
];

const results = [
  { icon: 'visibility', label: 'Increased product visibility' },
  { icon: 'shopping_cart_checkout', label: 'Higher conversion rates' },
  { icon: 'savings', label: 'Better ROI on ads' },
  { icon: 'trending_up', label: 'Consistent sales growth' },
  { icon: 'workspace_premium', label: 'Strong marketplace presence' },
];

const process = [
  {
    label: 'Account Audit',
    desc: 'We review your catalog, marketplace visibility, ad performance, and account health to spot the biggest growth blockers first.',
  },
  {
    label: 'Strategy Planning',
    desc: 'A channel-specific roadmap is created around your products, margins, marketplace fit, and realistic revenue goals.',
  },
  {
    label: 'Listing Optimization',
    desc: 'We improve product titles, descriptions, structure, and conversion signals so your listings compete more effectively.',
  },
  {
    label: 'Campaign Setup',
    desc: 'Marketplace ads, promotions, and performance tracking are configured to support profitable traffic and cleaner decision-making.',
  },
  {
    label: 'Monitoring and Scaling',
    desc: 'We monitor sales, ROAS, visibility, and account metrics closely, then scale what is working while tightening weak areas.',
  },
  {
    label: 'Reporting and Improvement',
    desc: 'Regular reporting keeps the strategy transparent while new opportunities, fixes, and growth actions are prioritized month after month.',
  },
];

const faqItems = [
  {
    q: 'What is ecommerce account management?',
    a: 'It involves managing your online marketplace accounts including listings, ads, inventory, and performance.',
  },
  {
    q: 'Which marketplaces do you manage?',
    a: 'We manage Amazon, Flipkart, Meesho, and more based on your business goals and marketplace fit.',
  },
  {
    q: 'Can you increase my sales?',
    a: 'Yes. With optimized listings, stronger ad management, and a data-driven strategy, we focus on improving visibility and conversions.',
  },
  {
    q: 'Do you handle account suspension issues?',
    a: 'Yes. We provide support for account recovery, compliance, and prevention planning to protect long-term marketplace growth.',
  },
];

const siloLinks = [
  {
    href: '/amazon-account-management',
    icon: 'shopping_bag',
    label: 'Amazon Management',
    desc: 'Drill into Amazon account growth with focused support for listings, PPC, and seller performance.',
  },
  {
    href: '/flipkart-account-management',
    icon: 'storefront',
    label: 'Flipkart Management',
    desc: 'Keep the marketplace silo connected with dedicated Flipkart-focused account management routing.',
  },
  {
    href: '/meesho-account-management',
    icon: 'store',
    label: 'Meesho Management',
    desc: 'Explore Meesho seller growth support for listings, catalog quality, pricing strategy, and scalable marketplace management.',
  },
  {
    href: '/ecommerce-development',
    icon: 'shopping_cart',
    label: 'Ecommerce Development',
    desc: 'Connect marketplace account growth with stronger ecommerce infrastructure and platform builds.',
  },
  {
    href: '/contact-us',
    icon: 'mail',
    label: 'Contact Page',
    desc: 'Talk with our team about scaling Amazon, Flipkart, or other marketplace sales.',
  },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
  Marketplace Management - Gujarat
</span>
<h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
  Scale Your Online Sales<br />
  <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 28px rgba(174,198,255,0.3))' }}>with Expert Marketplace Management</span>
</h1>
<p className="text-base sm:text-lg text-on-surface-variant max-w-3xl mx-auto mb-4 leading-relaxed">
  Struggling to manage your Amazon, Flipkart, or Meesho store effectively? Veyber provides complete ecommerce account management services for businesses in <span className="text-primary font-semibold">Vadodara, Ahmedabad, Surat, and across Gujarat</span>.
</p>
<p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed">
  We don&apos;t just manage your account - we optimize, scale, and maximize your revenue across competitive marketplaces.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link href="/contact-us" className="group relative px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#aec6ff] to-[#4f8eff] text-[#001a42] font-bold rounded-full text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(174,198,255,0.38)] active:scale-95">
  <span className="relative z-10 flex items-center justify-center gap-2"><span className="material-symbols-outlined text-[20px]">call</span>Get Expert Help</span>
  <div className="absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-[100%] transition-transform duration-700" />
</Link>
<Link href="/services" className="px-7 sm:px-9 py-3.5 sm:py-4 text-white font-bold rounded-full text-base sm:text-lg border border-white/12 hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300 flex items-center justify-center gap-2">
  <span className="material-symbols-outlined text-[20px]">grid_view</span>All Services
</Link>
</div>
</div>
</section>

<section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
<div>
  <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5">Why Ecommerce Account Management Matters</h2>
  <p className="text-on-surface-variant leading-relaxed mb-6">
    Selling on marketplaces like Amazon and Flipkart is highly competitive. Without proper account management, it becomes much harder to protect margins, grow visibility, and keep performance strong.
  </p>
  <p className="text-on-surface-variant leading-relaxed mb-8">
    Our team keeps your marketplace presence organized, optimized, and growth-focused so your store runs smoothly and scales consistently across Gujarat.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {challenges.map((item) => (
    <div key={item} className="flex items-center gap-3 p-4 bg-surface-container rounded-xl border border-outline-variant/10 hover:border-primary/25 transition-all group">
      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
        <span className="material-symbols-outlined text-primary text-[18px]">warning</span>
      </div>
      <span className="font-semibold text-sm text-white">{item}</span>
    </div>
  ))}
  </div>
</div>

<div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden">
  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[50px] rounded-full pointer-events-none" />
  <h3 className="text-xl sm:text-2xl font-bold font-headline mb-6 relative z-10">Platforms We Manage</h3>
  <div className="flex flex-wrap gap-3 relative z-10">
  {platforms.map((platform) => (
    <span key={platform} className="flex items-center gap-2 px-4 py-3 bg-surface-container-high rounded-xl border border-outline-variant/10 text-sm font-semibold hover:border-primary/30 hover:text-primary transition-all">
      <span className="material-symbols-outlined text-primary text-[16px]">storefront</span>
      {platform}
    </span>
  ))}
  </div>
  <p className="text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 pt-5 mt-5 relative z-10">
    From Amazon account management in Vadodara to multi-marketplace growth across Gujarat, we tailor strategy to the platforms that matter most to your business.
  </p>
</div>
</div>
</section>

<section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 sm:mb-16">
  <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our Ecommerce Account Management Services</h2>
  <p className="text-on-surface-variant max-w-2xl mx-auto text-sm sm:text-base">Complete marketplace management support for Amazon, Flipkart, and other seller channels that need stronger visibility, tighter operations, and better ROI.</p>
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
      <li key={item} className="flex items-start gap-2 text-xs text-on-surface-variant">
        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
        <span>{item}</span>
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
  <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-5">Ecommerce Account Management in Gujarat</h2>
  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
    We work with sellers across Vadodara, Ahmedabad, Surat, and Rajkot.
  </p>
  <div className="flex flex-wrap gap-2 mb-8">
  {cities.map((city) => (
    <span key={city} className="flex items-center gap-1.5 px-3 py-2 bg-surface-container rounded-xl border border-outline-variant/10 text-xs font-semibold hover:border-primary/30 hover:text-primary transition-all">
      <span className="material-symbols-outlined text-primary text-[13px]">location_on</span>
      {city}
    </span>
  ))}
  </div>

  <div className="bg-surface-container rounded-2xl border border-outline-variant/10 p-5">
    <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Results You Can Expect</h3>
    <div className="space-y-3">
    {results.map(({ icon, label }) => (
      <div key={label} className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary text-[18px] shrink-0">{icon}</span>
        <span className="text-sm text-white font-medium">{label}</span>
      </div>
    ))}
    </div>
  </div>
</div>

<div className="space-y-5">
  <div className="bg-surface-container rounded-2xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[40px] rounded-full pointer-events-none" />
    <h3 className="text-xl font-bold font-headline mb-5 relative z-10">Why Choose Veyber?</h3>
    <ul className="space-y-3 relative z-10">
    {whyVeyber.map((text) => (
      <li key={text} className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary text-[18px] shrink-0">verified</span>
        <span className="font-semibold text-white text-sm">{text}</span>
      </li>
    ))}
    </ul>
    <p className="text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 pt-5 mt-5 relative z-10">
      We focus on increasing your marketplace sales while reducing wasted ad spend and tightening overall account performance.
    </p>
  </div>

</div>

</div>
</section>

<ProcessSection
  title="Our Process"
  description="A marketplace-focused workflow designed to improve visibility, tighten operations, and scale profitable seller growth."
  steps={process}
/>

<section className="px-4 sm:px-8 py-12 sm:py-16 bg-surface">
<div className="max-w-7xl mx-auto">
<h2 className="text-xl sm:text-2xl font-bold font-headline mb-2">Internal Links</h2>
<p className="text-on-surface-variant text-sm mb-7">Part of the broader Veyber ecommerce growth structure. Use these silo links to move through related services naturally.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
{siloLinks.map(({ href, icon, label, desc }) => (
  <Link key={label} href={href} className="group h-full p-5 bg-surface-container rounded-2xl border border-outline-variant/10 hover:border-primary/25 hover:bg-surface-container-high transition-all duration-200 flex flex-col">
    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors mb-4">
      <span className="material-symbols-outlined text-primary text-[20px]">{icon}</span>
    </div>
    <p className="font-bold text-white text-sm mb-1 group-hover:text-primary transition-colors">{label}</p>
    <p className="text-on-surface-variant text-xs leading-relaxed flex-grow">{desc}</p>
    <span className="inline-flex items-center gap-1.5 text-primary font-bold text-sm mt-5">
      Learn More
      <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
    </span>
  </Link>
))}
</div>
</div>
</section>

<section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface-container-low">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-10 sm:mb-14">
  <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3">Frequently Asked Questions</h2>
  <p className="text-on-surface-variant text-sm">Quick answers about ecommerce account management, marketplace optimization, and growth support.</p>
</div>
<div className="flex flex-col gap-4">
{faqItems.map((item, i) => (
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

<section className="px-4 sm:px-8 py-14 sm:py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-primary/5" />
<div className="force-dark max-w-4xl mx-auto text-center relative z-10 bg-neutral-900 rounded-[2rem] sm:rounded-[3rem] border border-white/15 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
<div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
<div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/15 blur-[60px] rounded-full" />
<div className="relative z-10 p-8 sm:p-12 md:p-16">
  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-6">
    <span className="relative flex h-1.5 w-1.5 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" /></span>
    Marketplace Growth Support
  </span>
  <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
    Let&apos;s Grow Your Ecommerce Business
  </h2>
  <p className="text-base sm:text-lg text-white/75 mb-3 max-w-2xl mx-auto leading-relaxed drop-shadow">
    Ready to scale your marketplace sales? Contact Veyber for expert ecommerce account management services in Gujarat.
  </p>
  <p className="text-white/50 text-sm mb-8">No commitment required - Clear reporting - Growth-focused strategy</p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-3.5 sm:py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black rounded-full text-base sm:text-lg shadow-2xl hover:shadow-primary/40 transition-all active:scale-95 group">
      Contact Veyber
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
