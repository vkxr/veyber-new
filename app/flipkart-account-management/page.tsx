import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Flipkart Account Management Services in Gujarat | Flipkart Experts - Veyber',
  description:
    'Grow your Flipkart sales with Veyber’s account management services in Gujarat. Listing optimization, ads, inventory & complete seller support.',
  keywords:
    'Flipkart account management services Gujarat, Flipkart seller account management Vadodara, Flipkart ads management Gujarat, Flipkart listing optimization India, marketplace management Gujarat',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Flipkart Account Management',
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
    'Flipkart account management services in Gujarat including listing optimization, Flipkart ads, inventory support, seller account health management, and growth strategy.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Flipkart account management include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It includes listing optimization, Flipkart ads management, seller account monitoring, inventory coordination, and performance improvement support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help new Flipkart sellers in Gujarat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We support new Flipkart sellers in Vadodara and across Gujarat with setup guidance, listing improvements, and growth strategy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide Flipkart ads management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We manage Flipkart advertising campaigns with budget control, optimization, and ROI tracking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you also manage Amazon accounts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Veyber also provides Amazon account management services as part of our broader ecommerce account management support in Gujarat.',
      },
    },
  ],
};

const painPoints = [
  'Optimized product listings',
  'Competitive pricing',
  'Smart ad strategies',
  'Consistent seller performance',
];

const services = [
  {
    icon: 'edit_note',
    title: 'Product Listing Optimization',
    desc: 'Flipkart listings designed to improve discoverability, click-through rates, and conversion performance.',
    items: [
      'SEO-friendly product titles',
      'Keyword optimization',
      'High-converting descriptions',
      'Catalog management',
    ],
  },
  {
    icon: 'ads_click',
    title: 'Flipkart Advertising Management',
    desc: 'Campaign management built to improve visibility while keeping ad spend focused on profitable growth.',
    items: [
      'Flipkart Ads setup',
      'Campaign optimization',
      'Budget control',
      'ROI tracking',
    ],
  },
  {
    icon: 'inventory_2',
    title: 'Order and Inventory Management',
    desc: 'Operational support that keeps products available, orders moving, and seller workflows more reliable.',
    items: [
      'Inventory tracking',
      'Order processing',
      'Delivery coordination',
      'Stock planning support',
    ],
  },
  {
    icon: 'health_and_safety',
    title: 'Account Health and Compliance',
    desc: 'Seller-account monitoring focused on stability, policy alignment, and issue resolution.',
    items: [
      'Seller performance monitoring',
      'Policy compliance',
      'Issue resolution',
      'Account support',
    ],
  },
  {
    icon: 'query_stats',
    title: 'Market and Competitor Analysis',
    desc: 'Better decision-making with pricing insights, trend analysis, and marketplace competitor research.',
    items: [
      'Pricing strategy',
      'Competitor insights',
      'Trend analysis',
      'Category opportunity mapping',
    ],
  },
];

const audiences = [
  'New Flipkart sellers',
  'Businesses expanding online',
  'Sellers struggling with low sales',
  'Brands targeting Indian audience',
];

const cities = ['Vadodara', 'Ahmedabad', 'Surat', 'Rajkot', 'Entire Gujarat'];

const whyVeyber = [
  'Marketplace expertise',
  'Growth-focused strategies',
  'Dedicated support',
  'Affordable pricing',
];

const results = [
  { icon: 'visibility', label: 'Improved product visibility' },
  { icon: 'shopping_cart_checkout', label: 'Increased sales' },
  { icon: 'conversion_path', label: 'Better conversion rates' },
  { icon: 'trending_up', label: 'Consistent growth' },
];

const faqItems = [
  {
    q: 'What does Flipkart account management include?',
    a: 'It includes listing optimization, Flipkart ads management, seller account monitoring, inventory coordination, and performance improvement support.',
  },
  {
    q: 'Can you help new Flipkart sellers in Gujarat?',
    a: 'Yes. We support new Flipkart sellers in Vadodara and across Gujarat with setup guidance, listing improvements, and marketplace growth strategy.',
  },
  {
    q: 'Do you provide Flipkart ads management?',
    a: 'Yes. We manage Flipkart advertising campaigns with budget control, campaign optimization, and ROI tracking.',
  },
  {
    q: 'Do you also manage Amazon accounts?',
    a: 'Yes. Veyber also offers Amazon account management services, so businesses can expand across both Amazon and Flipkart with one growth partner.',
  },
];

const siloLinks = [
  {
    href: '/account-management',
    icon: 'monitoring',
    label: 'Ecommerce Account Management',
    desc: 'Return to the main account-management pillar for Amazon, Flipkart, and broader marketplace growth support.',
  },
  {
    href: '/amazon-account-management',
    icon: 'shopping_bag',
    label: 'Amazon Management',
    desc: 'Move across the marketplace silo and compare Flipkart growth support with Amazon-focused management.',
  },
  {
    href: '/meesho-account-management',
    icon: 'store',
    label: 'Meesho Management',
    desc: 'Compare Flipkart seller growth support with Meesho-focused listings, catalog work, pricing, and marketplace strategy.',
  },
  {
    href: '/ecommerce-development',
    icon: 'shopping_cart',
    label: 'Ecommerce Development',
    desc: 'Connect marketplace account growth with stronger ecommerce infrastructure and conversion-focused builds.',
  },
  {
    href: '/contact-us',
    icon: 'mail',
    label: 'Contact',
    desc: 'Talk with Veyber about Flipkart listings, ads, and seller growth in Gujarat.',
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
  Flipkart Management - Gujarat
</span>
<h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
  Maximize Your Sales on Flipkart<br />
  <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 28px rgba(174,198,255,0.3))' }}>with Veyber</span>
</h1>
<p className="text-base sm:text-lg text-on-surface-variant max-w-3xl mx-auto mb-4 leading-relaxed">
  Want to grow your Flipkart business faster? Veyber offers complete Flipkart seller account management services for businesses in <span className="text-primary font-semibold">Vadodara, Ahmedabad, Surat, and across Gujarat</span>.
</p>
<p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed">
  We help you increase visibility, sales, and profitability with focused optimization, marketplace support, and consistent seller-account management.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link href="/contact-us" className="group relative px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#aec6ff] to-[#4f8eff] text-[#001a42] font-bold rounded-full text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(174,198,255,0.38)] active:scale-95">
  <span className="relative z-10 flex items-center justify-center gap-2"><span className="material-symbols-outlined text-[20px]">call</span>Get Flipkart Support</span>
  <div className="absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-[100%] transition-transform duration-700" />
</Link>
<Link href="/account-management" className="px-7 sm:px-9 py-3.5 sm:py-4 text-white font-bold rounded-full text-base sm:text-lg border border-white/12 hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300 flex items-center justify-center gap-2">
  <span className="material-symbols-outlined text-[20px]">monitoring</span>View Account Management
</Link>
</div>
</div>
</section>

<section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
<div>
  <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5">Why Flipkart Management Matters</h2>
  <p className="text-on-surface-variant leading-relaxed mb-6">
    Flipkart has massive reach in India, but seller success depends on better listings, stronger pricing decisions, and smarter advertising support.
  </p>
  <p className="text-on-surface-variant leading-relaxed mb-8">
    We handle the optimization and management work so you can stay focused on products, operations, and business growth.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {painPoints.map((item) => (
    <div key={item} className="flex items-center gap-3 p-4 bg-surface-container rounded-xl border border-outline-variant/10 hover:border-primary/25 transition-all group">
      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
        <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
      </div>
      <span className="font-semibold text-sm text-white">{item}</span>
    </div>
  ))}
  </div>
</div>

<div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden">
  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[50px] rounded-full pointer-events-none" />
  <h3 className="text-xl sm:text-2xl font-bold font-headline mb-6 relative z-10">Who Should Use Flipkart Services?</h3>
  <div className="space-y-3 relative z-10">
  {audiences.map((item) => (
    <div key={item} className="flex items-center gap-3 p-4 bg-surface-container-high rounded-xl border border-outline-variant/10">
      <span className="material-symbols-outlined text-primary text-[18px] shrink-0">check_circle</span>
      <span className="text-sm font-semibold text-white">{item}</span>
    </div>
  ))}
  </div>
  <p className="text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 pt-5 mt-5 relative z-10">
    Flipkart management is especially useful for brands entering ecommerce, sellers with low sales, and businesses targeting a broader Indian audience from Gujarat.
  </p>
</div>
</div>
</section>

<section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 sm:mb-16">
  <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our Flipkart Account Management Services</h2>
  <p className="text-on-surface-variant max-w-2xl mx-auto text-sm sm:text-base">Flipkart-focused seller support for visibility, ads, pricing performance, account health, and operational consistency.</p>
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
  <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-5">Serving Across Gujarat</h2>
  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
    We support Flipkart sellers in Vadodara, Ahmedabad, Surat, Rajkot, and across Gujarat with seller-account management built for stronger performance and sustainable growth.
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
  <p className="text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 pt-5 mt-5 relative z-10">
    Our Flipkart management approach combines marketplace expertise, growth-focused optimization, and practical seller support that stays affordable for growing businesses.
  </p>
</div>

</div>
</section>

<section className="px-4 sm:px-8 py-12 sm:py-16 bg-surface">
<div className="max-w-7xl mx-auto">
<h2 className="text-xl sm:text-2xl font-bold font-headline mb-2">Internal Links</h2>
<p className="text-on-surface-variant text-sm mb-7">Part of the final account-management silo. These links keep the Flipkart page connected to the main marketplace pillar and related growth pages.</p>
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
  <p className="text-on-surface-variant text-sm">Quick answers about Flipkart seller growth, Gujarat support, and how this service fits into the broader Amazon and marketplace silo.</p>
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
    Flipkart Growth Support
  </span>
  <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
    Grow Faster on Flipkart with Smarter Management
  </h2>
  <p className="text-base sm:text-lg text-white/75 mb-3 max-w-2xl mx-auto leading-relaxed drop-shadow">
    Ready to improve listings, control ad spend, and scale Flipkart sales in Gujarat? Contact Veyber for focused seller-account management support.
  </p>
  <p className="text-white/50 text-sm mb-8">No commitment required - Transparent reporting - Growth-focused strategy</p>
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
