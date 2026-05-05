import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Amazon Account Management Services in Gujarat | Amazon Experts Vadodara - Veyber',
  description:
    "Boost your Amazon sales with Veyber's expert account management services in Vadodara & Gujarat. PPC, SEO, listing optimization & growth strategy.",
  keywords:
    'Amazon account management services Gujarat, Amazon experts Vadodara, Amazon PPC management Gujarat, Amazon listing optimization Vadodara, Amazon seller account management India',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Amazon Account Management',
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
    'Amazon account management services in Gujarat including listing optimization, Amazon PPC, account health support, inventory coordination, and growth strategy.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Amazon account management include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It includes listing optimization, Amazon PPC management, account health support, inventory coordination, and ongoing growth strategy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you manage Amazon PPC campaigns in Gujarat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We manage Amazon PPC campaigns for businesses in Vadodara and across Gujarat with bid optimization, budget control, and ROI-focused strategy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Veyber help new Amazon sellers in Vadodara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We support new and growing Amazon sellers in Vadodara and Gujarat with listing optimization, account setup guidance, and marketplace growth planning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you also manage Flipkart accounts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Veyber also provides Flipkart account management services as part of our broader ecommerce account management support in Gujarat.',
      },
    },
  ],
};

const painPoints = [
  'Products do not rank consistently',
  'Ad budgets get wasted',
  'Conversion rates stay low',
  'Growth stalls without optimization',
];

const services = [
  {
    icon: 'edit_note',
    title: 'Amazon Product Listing Optimization',
    desc: 'Listings built to improve search visibility, click-through rates, and conversions across competitive Amazon categories.',
    items: [
      'Keyword-rich titles and descriptions',
      'SEO optimization for Amazon search',
      'High-converting bullet points',
      'A+ content guidance',
    ],
  },
  {
    icon: 'ads_click',
    title: 'Amazon PPC Advertising',
    desc: 'Sponsored campaign management focused on profitable growth instead of wasted ad spend.',
    items: [
      'Sponsored Products campaigns',
      'Sponsored Brands campaigns',
      'Bid optimization',
      'ROI-focused ad strategy',
    ],
  },
  {
    icon: 'health_and_safety',
    title: 'Account Health Management',
    desc: 'Performance and compliance support that helps protect your Amazon seller account over the long term.',
    items: [
      'Policy compliance',
      'Performance monitoring',
      'Suspension prevention',
      'Account reinstatement support',
    ],
  },
  {
    icon: 'inventory_2',
    title: 'Inventory and Order Management',
    desc: 'Operational support to keep stock, orders, and fulfillment coordinated as your store grows.',
    items: [
      'Stock planning',
      'Order tracking',
      'Fulfillment coordination',
      'FBA and FBM support',
    ],
  },
  {
    icon: 'query_stats',
    title: 'Competitor and Keyword Research',
    desc: 'Sharper decision-making with category insights, pricing direction, and keyword targeting.',
    items: [
      'Market analysis',
      'Pricing strategy',
      'Competitor tracking',
      'Keyword opportunity mapping',
    ],
  },
];

const audiences = [
  'New sellers launching on Amazon',
  'Existing sellers with low sales',
  'Brands looking to scale revenue',
  'Businesses entering ecommerce',
];

const cities = [
  { name: 'Vadodara', url: '/digital-marketing-vadodara' },
  { name: 'Ahmedabad', url: '/digital-marketing-ahmedabad' },
  { name: 'Surat', url: '/digital-marketing-surat' },
  { name: 'Rajkot', url: '/digital-marketing-rajkot' },
  { name: 'Entire Gujarat', url: '/service-locations' }
];

const whyVeyber = [
  'Amazon-focused growth strategy',
  'Data-driven ad optimization',
  'Dedicated account managers',
  'Transparent reporting',
];

const results = [
  { icon: 'leaderboard', label: 'Higher product rankings' },
  { icon: 'shopping_cart_checkout', label: 'Increased sales' },
  { icon: 'savings', label: 'Better ad ROI' },
  { icon: 'visibility', label: 'Strong brand visibility' },
];

const faqItems = [
  {
    q: 'What does Amazon account management include?',
    a: 'It includes listing optimization, Amazon PPC management, account health support, inventory coordination, and ongoing growth strategy.',
  },
  {
    q: 'Do you manage Amazon PPC campaigns in Gujarat?',
    a: 'Yes. We manage Amazon PPC campaigns for businesses in Vadodara and across Gujarat with bid optimization, budget control, and ROI-focused strategy.',
  },
  {
    q: 'Can Veyber help new Amazon sellers in Vadodara?',
    a: 'Yes. We support new and growing Amazon sellers in Vadodara and Gujarat with listing optimization, account setup guidance, and marketplace growth planning.',
  },
  {
    q: 'Do you also manage Flipkart accounts?',
    a: 'Yes. Veyber also offers Flipkart account management services, so businesses can expand across both Amazon and Flipkart with one growth partner.',
  },
];

const siloLinks = [
  {
    href: '/account-management',
    icon: 'monitoring',
    label: 'Ecommerce Account Management',
    desc: 'Return to the marketplace management pillar for Amazon, Flipkart, and multi-channel growth support.',
  },
  {
    href: '/flipkart-account-management',
    icon: 'storefront',
    label: 'Flipkart Management',
    desc: 'Move across the account-management silo and compare Amazon growth support with Flipkart-focused services.',
  },
  {
    href: '/meesho-account-management',
    icon: 'store',
    label: 'Meesho Management',
    desc: 'Compare Amazon growth support with Meesho-focused listing, catalog, pricing, and seller-account strategy.',
  },
  {
    href: '/ecommerce-development',
    icon: 'shopping_cart',
    label: 'Ecommerce Development',
    desc: 'Connect marketplace growth with strong store infrastructure, platform builds, and conversion-focused development.',
  },
  {
    href: '/contact-us',
    icon: 'mail',
    label: 'Contact',
    desc: 'Talk with Veyber about Amazon PPC, listing optimization, and revenue growth in Gujarat.',
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
  Amazon Management - Gujarat
</span>
<h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
  Grow Your Amazon Sales<br />
  <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 28px rgba(174,198,255,0.3))' }}>with Expert Management</span>
</h1>
<p className="text-base sm:text-lg text-on-surface-variant max-w-3xl mx-auto mb-4 leading-relaxed">
  Selling on Amazon but not getting the results you expected? Veyber provides end-to-end Amazon account management services for businesses in <span className="text-primary font-semibold">Vadodara, Ahmedabad, Surat, and across Gujarat</span>.
</p>
<p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed">
  We help you increase visibility, improve conversions, and scale revenue on Amazon with focused optimization and marketplace strategy.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link href="/contact-us" className="group relative px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#aec6ff] to-[#4f8eff] text-[#001a42] font-bold rounded-full text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(174,198,255,0.38)] active:scale-95">
  <span className="relative z-10 flex items-center justify-center gap-2"><span className="material-symbols-outlined text-[20px]">call</span>Get Amazon Support</span>
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
  <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5">Why Amazon Management Is Critical</h2>
  <p className="text-on-surface-variant leading-relaxed mb-6">
    Amazon is highly competitive. Without proper optimization, products struggle to rank, ads burn budget, and conversion rates stay lower than they should.
  </p>
  <p className="text-on-surface-variant leading-relaxed mb-8">
    We turn your Amazon store into a sales machine with stronger listings, smarter ad management, and account oversight built for sustainable growth.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {painPoints.map((item) => (
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
  <h3 className="text-xl sm:text-2xl font-bold font-headline mb-6 relative z-10">Who Should Use Amazon Services?</h3>
  <div className="space-y-3 relative z-10">
  {audiences.map((item) => (
    <div key={item} className="flex items-center gap-3 p-4 bg-surface-container-high rounded-xl border border-outline-variant/10">
      <span className="material-symbols-outlined text-primary text-[18px] shrink-0">check_circle</span>
      <span className="text-sm font-semibold text-white">{item}</span>
    </div>
  ))}
  </div>
  <p className="text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 pt-5 mt-5 relative z-10">
    Whether you are launching a new Amazon catalog or trying to improve an underperforming seller account, we tailor the strategy to your current stage and growth goals.
  </p>
</div>
</div>
</section>

<section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 sm:mb-16">
  <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our Amazon Account Management Services</h2>
  <p className="text-on-surface-variant max-w-2xl mx-auto text-sm sm:text-base">Amazon-focused support for visibility, conversion, account health, and profitable ad performance across Gujarat.</p>
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
  <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-5">Amazon Services Across Gujarat</h2>
  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
    We support Amazon sellers in Vadodara, Ahmedabad, Surat, Rajkot, and across Gujarat with account management designed for stronger revenue and cleaner operations.
  </p>
  <div className="flex flex-wrap gap-2 mb-8">
  {cities.map((city) => (
    <Link key={city.name} href={city.url} className="flex items-center gap-1.5 px-3 py-2 bg-surface-container rounded-xl border border-outline-variant/10 text-xs font-semibold hover:border-primary/30 hover:text-primary transition-all">
      <span className="material-symbols-outlined text-primary text-[13px]">location_on</span>
      {city.name}
    </Link>
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
    Our Amazon management approach combines listing optimization, PPC control, and account protection so growth stays measurable and sustainable.
  </p>
</div>

</div>
</section>

<section className="px-4 sm:px-8 py-12 sm:py-16 bg-surface">
<div className="max-w-7xl mx-auto">
<h2 className="text-xl sm:text-2xl font-bold font-headline mb-2">Internal Links</h2>
<p className="text-on-surface-variant text-sm mb-7">Part of the broader Veyber ecommerce silo. These links connect the Amazon page back to the marketplace pillar and related growth pages.</p>
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
  <p className="text-on-surface-variant text-sm">Quick answers about Amazon seller growth, Gujarat support, and how this page connects to the wider Amazon and Flipkart marketplace silo.</p>
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
    Amazon Growth Support
  </span>
  <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
    Turn Your Amazon Store into a Sales Machine
  </h2>
  <p className="text-base sm:text-lg text-white/75 mb-3 max-w-2xl mx-auto leading-relaxed drop-shadow">
    Ready to improve rankings, reduce wasted ad spend, and scale revenue? Contact Veyber for Amazon account management services in Gujarat.
  </p>
  <p className="text-white/50 text-sm mb-8">No commitment required - Transparent reporting - Strategy built for growth</p>
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
