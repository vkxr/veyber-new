import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Our Services | Ecommerce, Digital Marketing & Web Development in Gujarat | Veyber',
  description: 'Veyber offers eCommerce website development, marketplace account management, digital marketing, social media marketing, and web services for businesses in Vadodara, Surat, Ahmedabad & across Gujarat.',
  keywords: 'ecommerce development company in Vadodara, digital marketing services Gujarat, ecommerce account management India, social media marketing Vadodara, business consultant Gujarat, Shopify development Vadodara, Amazon account management India',
  openGraph: {
    title: 'Our Services | Ecommerce, Digital Marketing & Web Development in Gujarat | Veyber',
    description: 'Veyber offers eCommerce website development, marketplace account management, digital marketing, social media marketing, and web services for businesses in Vadodara, Surat, Ahmedabad & across Gujarat.',
    url: 'https://veyber.co.in/services',
    siteName: 'Veyber',
    images: [
      {
        url: 'https://veyber.co.in/images/og-banner.jpg',
      },
    ],
    type: 'website',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Ecommerce, Digital Marketing & Web Services",
  "provider": {
    "@type": "Organization",
    "name": "Veyber",
    "url": "https://veyber.co.in"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Gujarat, India"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Veyber Services",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Ecommerce Development",
        "description": "Shopify, WooCommerce, and Custom MERN Stack eCommerce website development for businesses in Gujarat."
      },
      {
        "@type": "Service",
        "name": "Ecommerce Account Management",
        "description": "Amazon, Flipkart, and Meesho account setup, product listing, catalog management, and PPC advertising."
      },
      {
        "@type": "Service",
        "name": "Social Media Handling",
        "description": "Social media account creation, management, content planning, and audience growth for Instagram and Facebook."
      },
      {
        "@type": "Service",
        "name": "Content Marketing",
        "description": "SEO blog writing, website content, social media content, ad copywriting, and keyword strategy for businesses across Gujarat."
      },
      {
        "@type": "Service",
        "name": "Business Consulting",
        "description": "Business strategy development, digital growth planning, market research, revenue optimization, and branding strategy."
      },
      {
        "@type": "Service",
        "name": "Graphic Design",
        "description": "Brand identity, logo design, ad creatives, marketing collateral, and style guides for businesses in Gujarat."
      },
      {
        "@type": "Service",
        "name": "Digital Marketing",
        "description": "SEO, Google Ads (Search, Display, Shopping), and Meta Ads (Facebook & Instagram) for businesses across Gujarat."
      },
      {
        "@type": "Service",
        "name": "Web Services",
        "description": "Business website development, website hosting, and DevOps solutions for businesses in Gujarat."
      }
    ]
  }
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main className="pt-[100px] pb-24">

{/* Hero Section */}
<header className="relative px-4 sm:px-8 pt-12 sm:pt-20 md:pt-28 mb-12 sm:mb-16 max-w-7xl mx-auto">
  {/* Background accents */}
  <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"/>
  
  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
    {/* Left Content */}
    <div className="max-w-3xl">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-5">
        <span className="relative flex h-1.5 w-1.5 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"/><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"/></span>
        Complete Digital Growth Solutions · Gujarat
      </span>
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-white mb-5 leading-tight">
        eCommerce Development & Digital Marketing Services in Gujarat
      </h1>
      <p className="text-base sm:text-lg text-on-surface-variant font-body leading-relaxed max-w-[580px] mb-4">
        At Veyber, we provide end-to-end digital solutions designed to help businesses in Vadodara, Ahmedabad, Surat, and across Gujarat grow faster, smarter, and more profitably.
      </p>
      <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-[540px] mb-8">
        From building powerful eCommerce platforms to managing your online presence and scaling your business — we deliver results that matter.
      </p>
      {/* Core services pills */}
      <div className="flex flex-wrap gap-2">
      {[
        { name: 'Digital Marketing', href: '/digital-marketing' },
        { name: 'Web Services', href: '/web-services' },
        { name: 'eCommerce Development', href: '/ecommerce-development' },
        { name: 'Account Management', href: '/ecommerce-account-management' },
        { name: 'Social Media', href: '/social-media-handling' },
        { name: 'Content Marketing', href: '/content-marketing' },
        { name: 'Business Consulting', href: '/business-consulting' }
      ].map((s) => (
        <Link key={s.name} href={s.href} className="px-3 py-1.5 text-xs font-bold bg-surface-container border border-outline-variant/15 rounded-full text-on-surface-variant hover:border-primary/30 hover:text-primary transition-all duration-200 cursor-pointer">
          {s.name}
        </Link>
      ))}
      </div>
    </div>
    
    {/* Right Visual */}
    <div className="relative lg:h-[500px] w-full hidden lg:block">
       <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent rounded-[2rem] z-10 pointer-events-none"/>
       <Image 
         src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=75" 
         alt="Digital Marketing Agency Team"
         fill
         sizes="(max-width: 1024px) 100vw, 50vw"
         className="object-cover rounded-[2rem] border border-white/10 shadow-2xl"
         priority
       />
       {/* Floating badge 1 */}
       <div className="absolute -left-8 top-12 bg-surface-container/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
         <div className="w-10 h-10 rounded-full bg-[#4ade80]/20 flex items-center justify-center text-[#4ade80]">
           <span className="material-symbols-outlined">trending_up</span>
         </div>
         <div>
           <p className="text-white font-bold text-sm">3x Growth</p>
           <p className="text-on-surface-variant text-xs">Client Revenue</p>
         </div>
       </div>
       {/* Floating badge 2 */}
       <div className="absolute -right-8 bottom-12 bg-surface-container/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
         <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
           <span className="material-symbols-outlined">rocket_launch</span>
         </div>
         <div>
           <p className="text-white font-bold text-sm">60+ Brands</p>
           <p className="text-on-surface-variant text-xs">Scaled Successfully</p>
         </div>
       </div>
    </div>
  </div>
</header>

{/* Services Bento Grid */}
<section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">

{/* New Row: Core Digital Marketing + Web Services */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Core Digital Marketing */}
  <div id="digital-marketing" className="force-dark group relative bg-neutral-900 rounded-2xl transition-all hover:-translate-y-1 overflow-hidden min-h-[380px] sm:min-h-[460px] flex flex-col">
    <Image
      alt="Core Digital Marketing SEO Google Ads Meta Ads"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=75"
      fill
      sizes="(max-width: 1024px) 100vw, 50vw"
      loading="lazy"
      quality={75}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/96 via-black/70 to-black/30"/>
    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-50"/>
    <div className="relative z-10 flex flex-col h-full p-5 sm:p-8">
      <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5 border border-white/20">
        <span className="material-symbols-outlined text-white">campaign</span>
      </div>
      <h2 className="text-2xl font-headline font-bold text-white mb-3">Core Digital Marketing</h2>
      <p className="text-white/70 mb-5 font-body text-sm leading-relaxed">Get found, get clicks, get customers — through data-driven marketing that delivers measurable ROI.</p>
      <ul className="space-y-2.5 mb-5 flex-grow">
        <li className="flex items-center gap-3 text-sm text-white/80">
          <span className="material-symbols-outlined text-primary text-[16px]">troubleshoot</span>
          <Link href="/seo" className="hover:text-primary transition-colors hover:underline">SEO (Search Engine Optimization)</Link>
        </li>
        <li className="flex items-center gap-3 text-sm text-white/80">
          <span className="material-symbols-outlined text-primary text-[16px]">ads_click</span>
          <Link href="/google-ads" className="hover:text-primary transition-colors hover:underline">Google Ads (Search, Display, Shopping)</Link>
        </li>
        <li className="flex items-center gap-3 text-sm text-white/80">
          <span className="material-symbols-outlined text-primary text-[16px]">share</span>
          <Link href="/meta-ads" className="hover:text-primary transition-colors hover:underline">Meta Ads (Facebook & Instagram)</Link>
        </li>
      </ul>
      <div className="flex items-center justify-between">
        <Link href="/digital-marketing" className="inline-flex items-center text-primary font-bold text-sm group/link cursor-pointer shrink-0 mt-auto">
          Learn More <span className="material-symbols-outlined ml-1 text-[16px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
        </Link>
      </div>
    </div>
  </div>

  {/* Web Services */}
  <div id="web-services" className="force-dark group relative bg-neutral-900 rounded-2xl transition-all hover:-translate-y-1 overflow-hidden min-h-[380px] sm:min-h-[460px] flex flex-col">
    <Image
      alt="Web Services Web Development Hosting DevOps"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=75"
      fill
      sizes="(max-width: 1024px) 100vw, 50vw"
      loading="lazy"
      quality={75}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/96 via-black/70 to-black/30"/>
    <div className="absolute inset-0 bg-gradient-to-br from-secondary-container/30 via-transparent to-transparent opacity-50"/>
    <div className="relative z-10 flex flex-col h-full p-5 sm:p-8">
      <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5 border border-white/20">
        <span className="material-symbols-outlined text-white">code_blocks</span>
      </div>
      <h2 className="text-2xl font-headline font-bold text-white mb-3">Web Services</h2>
      <p className="text-white/70 mb-5 font-body text-sm leading-relaxed">Beyond eCommerce — we build and maintain the digital infrastructure your business runs on.</p>
      <ul className="space-y-2.5 mb-5 flex-grow">
        <li className="flex items-center gap-3 text-sm text-white/80">
          <span className="material-symbols-outlined text-primary text-[16px]">web</span>
          <Link href="/web-services/development" className="hover:text-primary transition-colors hover:underline">Website Development</Link>
        </li>
        <li className="flex items-center gap-3 text-sm text-white/80">
          <span className="material-symbols-outlined text-primary text-[16px]">dns</span>
          <Link href="/web-services/hosting" className="hover:text-primary transition-colors hover:underline">Website Hosting</Link>
        </li>
        <li className="flex items-center gap-3 text-sm text-white/80">
          <span className="material-symbols-outlined text-primary text-[16px]">cloud_sync</span>
          <Link href="/web-services/devops" className="hover:text-primary transition-colors hover:underline">DevOps & Deployment</Link>
        </li>
      </ul>
      <div className="flex items-center justify-between">
        <Link href="/web-services" className="inline-flex items-center text-primary font-bold text-sm group/link cursor-pointer shrink-0 mt-auto">
          Learn More <span className="material-symbols-outlined ml-1 text-[16px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
        </Link>
      </div>
    </div>
  </div>
</div>

{/* Row 1 -> Row 2: eCommerce Dev + Account Management */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

{/* eCommerce Development */}
<div id="ecommerce-development" className="force-dark lg:col-span-7 group relative bg-neutral-900 rounded-2xl transition-all hover:-translate-y-1 overflow-hidden min-h-[380px] sm:min-h-[460px] flex flex-col">
<Image
  alt="eCommerce development services in Vadodara Gujarat — Shopify WooCommerce custom store"
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=75"
  fill
  sizes="(max-width: 1024px) 100vw, 58vw"
  loading="lazy"
  quality={75}
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/96 via-black/70 to-black/30"/>
<div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-50"/>
<div className="relative z-10 flex flex-col h-full p-5 sm:p-8">
<div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5 border border-white/20">
  <span className="material-symbols-outlined text-white">shopping_cart</span>
</div>
<h2 className="text-2xl font-headline font-bold text-white mb-3">eCommerce Development</h2>
<p className="text-white/70 mb-5 font-body text-sm leading-relaxed">Build a high-performing online store that converts visitors into customers. We develop custom, scalable, and SEO-friendly eCommerce websites tailored to your business needs.</p>
<ul className="space-y-2.5 mb-5 flex-grow">
{[
  { label: 'Shopify, WooCommerce & Custom Development', icon: 'storefront' },
  { label: 'Mobile-Responsive Design', icon: 'smartphone' },
  { label: 'Payment Gateway Integration', icon: 'payments' },
  { label: 'Speed Optimization', icon: 'speed' },
  { label: 'SEO-Ready Structure', icon: 'travel_explore' }
].map((item) => (
  <li key={item.label} className="flex items-center gap-3 text-sm text-white/80">
    <span className="material-symbols-outlined text-primary text-[16px]">{item.icon}</span>
    {item.label}
  </li>
))}
</ul>
<p className="text-white/50 text-xs italic mb-4">Your website is your digital storefront. We ensure it is fast, secure, and optimized for conversions.</p>
<div className="flex items-center justify-between">
  <p className="text-primary/70 text-xs font-medium">Perfect for startups & retailers in Vadodara & Gujarat</p>
  <Link href="/ecommerce-development" className="inline-flex items-center text-primary font-bold text-sm group/link cursor-pointer shrink-0">
    Learn More <span className="material-symbols-outlined ml-1 text-[16px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
  </Link>
</div>
</div>
</div>

{/* eCommerce Account Management */}
<div id="account-management" className="force-dark lg:col-span-5 group relative bg-neutral-900 rounded-2xl transition-all hover:-translate-y-1 overflow-hidden min-h-[380px] sm:min-h-[460px] flex flex-col">
<Image
  alt="eCommerce account management — Amazon Flipkart marketplace services India"
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=900&q=75"
  fill
  sizes="(max-width: 1024px) 100vw, 42vw"
  loading="lazy"
  quality={75}
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/96 via-black/70 to-black/35"/>
<div className="absolute inset-0 bg-gradient-to-br from-secondary-container/30 via-transparent to-transparent opacity-50"/>
<div className="relative z-10 flex flex-col h-full p-5 sm:p-8">
<div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5 border border-white/20">
  <span className="material-symbols-outlined text-white">trending_up</span>
</div>
<h2 className="text-2xl font-headline font-bold text-white mb-3">eCommerce Account Management</h2>
<p className="text-white/70 mb-5 font-body text-sm leading-relaxed">Managing marketplaces like Amazon & Flipkart can be complex — we make it simple and profitable.</p>
<ul className="space-y-2.5 mb-5 flex-grow">
{[
  { label: 'Product Listing Optimization', icon: 'format_list_bulleted' },
  { label: 'Catalog Management', icon: 'inventory_2' },
  { label: 'Amazon & Flipkart Account Handling', icon: 'manage_accounts' },
  { label: 'PPC Advertising Campaigns', icon: 'campaign' },
  { label: 'Order & Inventory Management', icon: 'local_shipping' }
].map((item) => (
  <li key={item.label} className="flex items-center gap-3 text-sm text-white/80">
    <span className="material-symbols-outlined text-primary text-[16px]">{item.icon}</span>
    {item.label}
  </li>
))}
</ul>
<p className="text-white/50 text-xs italic mb-4">Higher visibility, better rankings, and increased sales on marketplaces.</p>
<div className="flex items-center justify-between mt-auto">
  <p className="text-primary/70 text-xs font-medium">Ideal for sellers across Gujarat</p>
  <Link href="/ecommerce-account-management" className="inline-flex items-center text-primary font-bold text-sm group/link cursor-pointer shrink-0">
    Learn More <span className="material-symbols-outlined ml-1 text-[16px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
  </Link>
</div>
</div>
</div>
</div>

{/* Row 2 -> Row 3: Social Media + Content Marketing + Graphic Design */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{/* Social Media Handling */}
<div id="social-media-handling" className="force-dark relative bg-neutral-900 rounded-2xl overflow-hidden flex flex-col group min-h-[380px] sm:min-h-[440px]">
<Image
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  alt="Social media marketing agency in Vadodara — Instagram Facebook management"
  src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=900&q=75"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  loading="lazy"
  quality={75}
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/96 via-black/70 to-black/35"/>
<div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-40"/>
<div className="relative z-10 flex flex-col h-full p-5 sm:p-8">
<div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-4 border border-white/20">
  <span className="material-symbols-outlined text-white">share</span>
</div>
<h2 className="text-2xl font-headline font-bold text-white mb-3">Social Media Handling</h2>
<p className="text-white/70 mb-4 font-body text-sm leading-relaxed">Build a strong brand presence and engage your audience with strategic social media management.</p>
<ul className="space-y-2 mb-4 flex-grow">
{[
  { label: 'Content Planning & Posting', icon: 'edit_calendar' },
  { label: 'Instagram & Facebook Management', icon: 'thumb_up' },
  { label: 'Ad Campaign Management', icon: 'ads_click' },
  { label: 'Audience Growth Strategy', icon: 'group_add' },
  { label: 'Performance Tracking', icon: 'monitoring' }
].map((item) => (
  <li key={item.label} className="flex items-start gap-2.5 text-xs text-white/75">
    <span className="material-symbols-outlined text-primary text-[14px] mt-0.5">{item.icon}</span>
    <span>{item.label}</span>
  </li>
))}
</ul>
<p className="text-white/45 text-xs italic mb-4">More engagement, brand awareness, and customer trust.</p>
<div className="flex items-center justify-between mt-auto">
  <p className="text-primary/60 text-[10px] font-medium">Best for Vadodara, Ahmedabad, Surat</p>
  <Link href="/social-media-handling" className="inline-flex items-center text-primary font-bold text-sm group/link cursor-pointer gap-1">
    Learn More <span className="material-symbols-outlined text-[15px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
  </Link>
</div>
</div>
</div>

{/* Content Marketing */}
<div id="content-marketing" className="force-dark relative bg-neutral-900 rounded-2xl overflow-hidden flex flex-col group min-h-[380px] sm:min-h-[440px]">
<Image
  alt="Content marketing agency Gujarat — SEO blog writing copywriting"
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=75"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  loading="lazy"
  quality={75}
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/96 via-black/70 to-black/35"/>
<div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-40"/>
<div className="relative z-10 flex flex-col h-full p-5 sm:p-8">
<div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-4 border border-white/20">
  <span className="material-symbols-outlined text-white">article</span>
</div>
<h2 className="text-2xl font-headline font-bold text-white mb-3">Content Marketing</h2>
<p className="text-white/70 mb-4 font-body text-sm leading-relaxed">Content is the backbone of digital success — and we create content that ranks and converts.</p>
<ul className="space-y-2 mb-4 flex-grow">
{[
  { label: 'SEO Blog Writing', icon: 'history_edu' },
  { label: 'Website Content', icon: 'web_stories' },
  { label: 'Social Media Content', icon: 'post_add' },
  { label: 'Copywriting for Ads', icon: 'campaign' },
  { label: 'Keyword Strategy', icon: 'key' }
].map((item) => (
  <li key={item.label} className="flex items-start gap-2.5 text-xs text-white/75">
    <span className="material-symbols-outlined text-primary text-[14px] mt-0.5">{item.icon}</span>
    <span>{item.label}</span>
  </li>
))}
</ul>
<p className="text-white/45 text-xs italic mb-4">Drive organic traffic and establish authority in your industry.</p>
<div className="flex items-center justify-between">
  <p className="text-primary/60 text-[10px] font-medium">For Gujarat & pan-India audiences</p>
  <Link href="/content-marketing" className="inline-flex items-center text-primary font-bold text-sm group/link cursor-pointer gap-1">
    Learn More <span className="material-symbols-outlined text-[15px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
  </Link>
</div>
</div>
</div>

{/* Graphic Design — bonus service */}
<div id="graphic-design" className="force-dark relative bg-neutral-900 rounded-2xl overflow-hidden flex flex-col group min-h-[380px] sm:min-h-[440px]">
<Image
  alt="Graphic design services — branding social media creatives"
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=75"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  loading="lazy"
  quality={75}
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/96 via-black/70 to-black/35"/>
<div className="absolute inset-0 bg-gradient-to-tr from-tertiary/20 via-transparent to-transparent opacity-40"/>
<div className="relative z-10 flex flex-col h-full p-5 sm:p-8">
<div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-4 border border-white/20">
  <span className="material-symbols-outlined text-white">palette</span>
</div>
<h2 className="text-2xl font-headline font-bold text-white mb-3">Graphic Design</h2>
<p className="text-white/70 mb-4 font-body text-sm leading-relaxed">Bold visuals that communicate instantly — from brand identity to campaign creatives that stop the scroll.</p>
<ul className="space-y-2 mb-4 flex-grow">
{[
  { label: 'Brand Identity & Logo Design', icon: 'fingerprint' },
  { label: 'Social Media Graphics', icon: 'image' },
  { label: 'Ad Creatives', icon: 'view_carousel' },
  { label: 'Marketing Collateral', icon: 'feed' },
  { label: 'Style Guides', icon: 'format_color_fill' }
].map((item) => (
  <li key={item.label} className="flex items-start gap-2.5 text-xs text-white/75">
    <span className="material-symbols-outlined text-tertiary text-[14px] mt-0.5">{item.icon}</span>
    <span>{item.label}</span>
  </li>
))}
</ul>
<p className="text-white/45 text-xs italic mb-4">Visuals that build trust and drive engagement.</p>
<Link href="/contact" className="inline-flex items-center text-tertiary font-bold text-sm group/link cursor-pointer gap-1 mt-auto">
  Get Started <span className="material-symbols-outlined text-[15px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
</Link>
</div>
</div>
</div>

{/* Business Consulting — Full Width */}
<div id="business-consulting" className="force-dark relative bg-neutral-900 rounded-2xl overflow-hidden group border border-white/10">
<Image
  alt="Business consulting services in Vadodara Gujarat — strategy growth planning"
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=75"
  fill
  sizes="(max-width: 1280px) 100vw, 1280px"
  loading="lazy"
  quality={75}
/>
<div className="absolute inset-0 bg-gradient-to-r from-black/96 via-black/78 to-black/50"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>
<div className="absolute inset-0 bg-gradient-to-tr from-tertiary/15 via-transparent to-transparent opacity-60"/>
<div className="relative z-10 p-6 sm:p-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
<div>
<h2 className="text-2xl sm:text-3xl font-headline font-bold text-white mb-4">Business Consulting</h2>
<p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">We don't just execute — we guide your business toward sustainable growth with data-driven strategy and expert insights.</p>
<div className="space-y-3 mb-6">
{[
  { label: 'Business Strategy Development', icon: 'insights' },
  { label: 'Digital Growth Planning', icon: 'map' },
  { label: 'Market Research & Competitor Analysis', icon: 'query_stats' },
  { label: 'Revenue Optimization', icon: 'payments' },
  { label: 'Branding Strategy', icon: 'campaign' }
].map((item) => (
  <div key={item.label} className="flex items-center gap-3">
    <span className="material-symbols-outlined text-tertiary text-[16px]">{item.icon}</span>
    <span className="text-white/85 font-medium text-sm">{item.label}</span>
  </div>
))}
</div>
<p className="text-white/50 text-xs italic mb-6">Make smarter decisions backed by data and expert insights.</p>
<p className="text-tertiary/70 text-xs font-medium mb-6">Trusted by startups and SMEs across Vadodara & Gujarat</p>
<div className="flex flex-wrap items-center gap-6">
  <Link href="/contact" className="inline-flex items-center bg-white/10 hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-bold transition-all border border-white/20 cursor-pointer text-sm">
    Request a Strategy Session
    <span className="material-symbols-outlined ml-3">insights</span>
  </Link>
  <Link href="/business-consulting" className="inline-flex items-center text-tertiary font-bold text-sm group/link cursor-pointer gap-1">
    Learn More <span className="material-symbols-outlined text-[15px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
  </Link>
</div>
</div>
{/* Outcome stats */}
<div className="grid grid-cols-2 gap-4">
{[
  { val: '3x', label: 'Revenue Growth' },
  { val: '60+', label: 'Brands Scaled' },
  { val: '90%', label: 'Client Retention' },
  { val: '₹12M+', label: 'Revenue Driven' },
].map(({ val, label }) => (
  <div key={label} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/15 flex flex-col gap-2">
    <span className="text-2xl sm:text-3xl font-black text-white">{val}</span>
    <span className="text-xs text-white/60 uppercase tracking-widest font-bold">{label}</span>
  </div>
))}
</div>
</div>
</div>
</div>

</section>

{/* Why Choose Veyber in Gujarat */}
<section className="px-4 sm:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
<div className="text-center mb-10 sm:mb-16">
<h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Why Choose Veyber in Gujarat?</h2>
<p className="text-on-surface-variant max-w-xl mx-auto">We focus on ROI, growth, and long-term success — not just short-term results.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{[
  { icon: 'location_on', title: 'Deep Gujarat Market Knowledge', desc: 'We understand the Vadodara and Gujarat market dynamics — strategies that resonate locally and scale nationally.' },
  { icon: 'tune', title: 'Customized Strategies', desc: 'No generic solutions. Every strategy is built from scratch around your business, industry, and goals.' },
  { icon: 'payments', title: 'Affordable for Startups & SMEs', desc: 'Premium digital services priced for growing businesses — maximum ROI without overspending.' },
  { icon: 'support_agent', title: 'Dedicated Support Team', desc: 'A single point of contact, transparent reporting, and consistent communication throughout.' },
  { icon: 'trending_up', title: 'Results-Driven Approach', desc: 'We track what matters — revenue, rankings, leads, and retention. No vanity metrics.' },
  { icon: 'hub', title: 'End-to-End Solutions', desc: 'From your first website to full marketplace domination — everything under one roof.' },
].map(({ icon, title, desc }) => (
  <div key={title} className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10 hover:border-primary/25 hover:bg-surface-container-high transition-all duration-200 group">
    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-200">
      <span className="material-symbols-outlined text-primary">{icon}</span>
    </div>
    <h3 className="font-bold text-white mb-2">{title}</h3>
    <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
  </div>
))}
</div>
</section>

{/* Areas We Serve */}
<section className="px-4 sm:px-8 py-12 sm:py-20 bg-surface-container-low">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3">Areas We Serve</h2>
<p className="text-on-surface-variant mb-10 text-sm sm:text-base">We proudly offer our digital services across Gujarat and beyond.</p>
<div className="flex flex-wrap justify-center gap-3">
{[
  { city: 'Vadodara', icon: 'location_on', href: '/digital-marketing-vadodara' },
  { city: 'Ahmedabad', icon: 'location_on', href: '/digital-marketing-ahmedabad' },
  { city: 'Surat', icon: 'location_on', href: '/digital-marketing-surat' },
  { city: 'Rajkot', icon: 'location_on', href: '/digital-marketing-rajkot' },
].map(({ city, icon, href }) => {
  const content = (
    <>
      <span className="material-symbols-outlined text-primary text-[18px]">{icon}</span>
      <span className="font-semibold text-sm">{city}</span>
    </>
  );
  
  const className = "flex items-center gap-2 px-5 py-3 bg-surface-container rounded-xl border border-outline-variant/10 hover:border-primary/30 hover:bg-surface-container-high transition-all duration-200 cursor-pointer";

  return href ? (
    <Link key={city} href={href} className={className}>
      {content}
    </Link>
  ) : (
    <div key={city} className={className}>
      {content}
    </div>
  );
})}
</div>
</div>
</section>

{/* CTA Section */}
<section className="mt-12 px-4 sm:px-8 max-w-7xl mx-auto pb-8">
<div className="force-dark relative rounded-3xl overflow-hidden" style={{background:'linear-gradient(135deg,#0f1f6e 0%,#1a3bbf 35%,#2e5ee8 65%,#4f8eff 100%)'}}>
<div className="pointer-events-none absolute inset-0 opacity-[0.055]" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.9) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.9) 1px,transparent 1px)',backgroundSize:'52px 52px'}}/>
<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
  <div className="w-[700px] h-[260px] bg-white/10 blur-[60px] rounded-full"/>
</div>
<div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-[#aec6ff]/25 blur-[50px] rounded-full"/>
<div className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 bg-[#4f8eff]/30 blur-[50px] rounded-full"/>
<div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.06]"/>
<div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-white/[0.05]"/>
<div className="relative z-10 px-5 sm:px-8 py-10 sm:py-16 text-center">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 text-white font-bold text-xs tracking-widest uppercase mb-8">
  <span className="relative flex h-1.5 w-1.5 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"/><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"/></span>
  Free Consultation
</span>
<h2 className="text-2xl sm:text-4xl md:text-5xl font-headline font-extrabold text-white mb-4 sm:mb-5 leading-tight tracking-tight">
  Let&apos;s Grow Your Business
</h2>
<p className="text-white/70 text-base sm:text-lg mb-4 max-w-xl mx-auto leading-relaxed">
  Whether you need a powerful eCommerce website, marketplace management, or complete digital marketing — Veyber is your growth partner in Gujarat.
</p>
<p className="text-white/50 text-sm mb-8 sm:mb-10">Get in touch today for a free consultation.</p>
<div className="flex justify-center items-center mb-10">
  <div className="text-center">
    <div className="text-2xl font-black text-white leading-none mb-1">30 min</div>
    <div className="text-[11px] text-white/50 uppercase tracking-widest font-semibold">Free Strategy Call</div>
  </div>
</div>
<div className="relative inline-block mb-5">
  <div className="absolute inset-0 bg-white/25 blur-2xl rounded-full scale-110 pointer-events-none"/>
  <Link href="/contact" className="relative group inline-flex items-center bg-white text-[#111225] px-8 sm:px-12 py-3.5 sm:py-5 rounded-full font-headline font-bold text-base sm:text-lg shadow-[0_8px_32px_rgba(255,255,255,0.25)] hover:shadow-[0_8px_48px_rgba(255,255,255,0.40)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
    Get Free Consultation
    <span className="material-symbols-outlined inline-block align-middle ml-2 text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
  </Link>
</div>
<p className="text-white/35 text-sm">No commitment required · Response within 24 hours</p>
</div>
</div>
</section>

      </main>
      <Footer />
    </div>
  );
}
