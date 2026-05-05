import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';

export const metadata: Metadata = {
  title: 'Content Marketing Services in Gujarat | SEO Blog Writing & Website Copywriting – Veyber Vadodara',
  description: 'Looking for content marketing services in Vadodara or Gujarat? Veyber offers SEO blog writing, website copywriting, and keyword strategy to grow your Google rankings and generate leads.',
  keywords: 'Content marketing services Gujarat, SEO blog writing Vadodara, Website copywriting Vadodara, Keyword strategy Gujarat, Content marketing agency Gujarat, SEO content writing Gujarat, Blog writing services Vadodara, Website content writing Gujarat, SEO blog writing India, Landing page copywriting Gujarat, Keyword research services India, Content calendar planning Vadodara, Copywriting services Vadodara',
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Content Marketing',
  provider: { '@type': 'Organization', name: 'Veyber', url: 'https://veyber.co.in' },
  areaServed: { '@type': 'State', name: 'Gujarat' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Content Marketing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Blog Writing Vadodara' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Copywriting Gujarat' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Keyword Strategy Services Gujarat' } },
    ],
  },
  description: 'Content marketing services in Gujarat including SEO blog writing, website copywriting, and keyword strategy to grow Google rankings and generate leads.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is content marketing?', acceptedAnswer: { '@type': 'Answer', text: 'Content marketing is the practice of creating and distributing valuable, relevant content — blogs, website copy, guides, videos — to attract and engage a specific audience, and ultimately drive profitable customer action. Unlike ads, content marketing builds compounding long-term value.' } },
    { '@type': 'Question', name: 'How does content marketing help SEO?', acceptedAnswer: { '@type': 'Answer', text: 'Every piece of optimized content is a new page Google can rank. By targeting the right keywords, building internal links, and earning backlinks through quality writing, content marketing is the most sustainable way to grow organic rankings and traffic.' } },
    { '@type': 'Question', name: "What's the difference between SEO blog writing and website copywriting?", acceptedAnswer: { '@type': 'Answer', text: 'SEO blog writing targets informational search queries to drive top-of-funnel traffic — readers researching topics. Website copywriting targets your service/product pages, converting that traffic into leads and customers. Both are essential for a complete content marketing strategy.' } },
    { '@type': 'Question', name: 'Do you provide keyword research separately?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Keyword Strategy service is available as a standalone engagement. It includes full keyword research, clustering, competitor gap analysis, and a 3–6 month content calendar.' } },
    { '@type': 'Question', name: 'How often should I publish blogs?', acceptedAnswer: { '@type': 'Answer', text: 'For meaningful SEO results, we recommend a minimum of 4 blogs per month. For faster authority building and competitive niches, 8–12 blogs/month is ideal. Our keyword strategy maps out a publishing cadence based on your specific goals.' } },
    { '@type': 'Question', name: 'Do you serve businesses outside Vadodara?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. While Vadodara is our primary base, we provide content marketing services across Gujarat - Ahmedabad, Surat, and Rajkot.' } },
  ],
};

const services = [
  {
    icon: 'edit_note',
    title: 'SEO Blog Writing',
    anchor: 'seo-blog-writing',
    desc: 'Write for humans, optimize for Google. Build long-term SEO assets that bring consistent traffic.',
    items: ['Keyword research & topic ideation', 'Long-form SEO blog posts (800-2,500 words)', 'On-page SEO optimization', 'NLP & LSI keyword integration', 'Plagiarism-free, original writing'],
  },
  {
    icon: 'web',
    title: 'Website Copywriting',
    anchor: 'website-copywriting',
    desc: 'Persuasive website copy that ranks for the right keywords AND converts visitors into leads.',
    items: ['Home page & value proposition copy', 'Keyword-optimized service pages', 'About Us & brand story', 'Landing page & conversion copy', 'Product descriptions for eCommerce'],
  },
  {
    icon: 'forum',
    title: 'Keyword Strategy',
    anchor: 'keyword-strategy',
    desc: 'The foundation of content marketing. Discover what your customers are searching for.',
    items: ['Seed & long-tail keyword discovery', 'Search volume & difficulty analysis', 'Local keyword targeting (Gujarat)', 'Competitor keyword gap analysis', 'Pillar & cluster content mapping'],
  },
  {
    icon: 'share',
    title: 'Social Media Content Writing',
    desc: 'Engaging content optimized for reach and audience interaction across platforms.',
    items: ['Instagram & Facebook captions', 'Monthly content themes', 'Hashtag research & strategy', 'Audience engagement copy'],
  },
  {
    icon: 'campaign',
    title: 'Copywriting for Ads',
    desc: 'Scroll-stopping ad copy designed to maximize your return on ad spend.',
    items: ['Facebook & Instagram ad copy', 'Google Ads text & headlines', 'Sales page copywriting', 'A/B testing ad variations'],
  },
  {
    icon: 'checklist',
    title: 'Blog Content Strategy (Standalone)',
    desc: 'Structured plans for your in-house team to execute against.',
    items: ['Topic research & gap analysis', '3 or 6-month content calendar', 'SEO blog structure templates', 'Detailed writing briefs'],
  },
];

const process = [
  { n: '01', label: 'Research & Strategy', desc: 'Audience, competitors, content gaps, and goals.' },
  { n: '02', label: 'Keyword Planning', desc: 'Full keyword map with clusters and priorities.' },
  { n: '03', label: 'Content Creation', desc: 'SEO-optimized writing, copywriting, or blog drafts.' },
  { n: '04', label: 'SEO Optimization', desc: 'On-page elements, internal linking, meta data.' },
  { n: '05', label: 'Publishing & Promotion', desc: 'CMS upload, social sharing, and distribution.' },
  { n: '06', label: 'Monitoring & Reporting', desc: 'Rankings, traffic, and leads tracked monthly.' },
];

const results = [
  { icon: 'trending_up', stat: 'Higher', label: 'Google Rankings', desc: 'For target keywords in Vadodara and Gujarat' },
  { icon: 'ads_click', stat: 'Steady', label: 'Organic Traffic', desc: 'Consistent month-over-month increases' },
  { icon: 'people', stat: 'More', label: 'Qualified Leads', desc: 'From search visitors with buying intent' },
  { icon: 'verified_user', stat: 'Stronger', label: 'Brand Authority', desc: 'Credibility within your industry niche' },
  { icon: 'monitoring', stat: 'Better', label: 'Engagement', desc: 'Lower bounce rates, longer time on page' },
  { icon: 'autorenew', stat: 'Compounding', label: 'Content ROI', desc: 'Old posts keep ranking and driving traffic' },
];

const faqs = [
  { q: 'What is content marketing?', a: 'Content marketing is the practice of creating and distributing valuable, relevant content — blogs, website copy, guides, videos — to attract and engage a specific audience, and ultimately drive profitable customer action. Unlike ads, content marketing builds compounding long-term value.' },
  { q: 'How does content marketing help SEO?', a: 'Every piece of optimized content is a new page Google can rank. By targeting the right keywords, building internal links, and earning backlinks through quality writing, content marketing is the most sustainable way to grow organic rankings and traffic.' },
  { q: "What's the difference between SEO blog writing and website copywriting?", a: 'SEO blog writing targets informational search queries to drive top-of-funnel traffic — readers researching topics. Website copywriting targets your service/product pages, converting that traffic into leads and customers. Both are essential for a complete content marketing strategy.' },
  { q: 'Do you provide keyword research separately?', a: 'Yes. Our Keyword Strategy service is available as a standalone engagement. It includes full keyword research, clustering, competitor gap analysis, and a 3–6 month content calendar.' },
  { q: 'How often should I publish blogs?', a: 'For meaningful SEO results, we recommend a minimum of 4 blogs per month. For faster authority building and competitive niches, 8–12 blogs/month is ideal. Our keyword strategy maps out a publishing cadence based on your specific goals.' },
  { q: 'Do you serve businesses outside Vadodara?', a: 'Yes. While Vadodara is our primary base, we provide content marketing services across Gujarat - Ahmedabad, Surat, and Rajkot.' },
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
              Content Marketing · Gujarat
            </span>
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {['SEO Blog Writing', 'Website Copywriting', 'Keyword Strategy'].map((pill) => (
                <span key={pill} className="px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold tracking-wide">{pill}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
              Drive Traffic. Build Authority.<br/>
              <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{filter:'drop-shadow(0 0 28px rgba(174,198,255,0.3))'}}>Generate Leads</span>
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-4 leading-relaxed">
              Looking to grow your business in <span className="text-primary font-semibold">Vadodara, Ahmedabad, Surat, or across Gujarat</span> with content that actually ranks? At Veyber — a result-driven content marketing agency — we create strategic content that attracts the right audience, builds Google authority, and converts visitors into customers.
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
              We don&apos;t just write content. We build content systems that work 24/7 for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group relative px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#aec6ff] to-[#4f8eff] text-[#001a42] font-bold rounded-full text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(174,198,255,0.38)] active:scale-95">
              <span className="relative z-10 flex items-center gap-2"><span className="material-symbols-outlined text-[20px]">call</span>Get Free Consultation</span>
              <div className="absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-[100%] transition-transform duration-700"/>
            </Link>
            <Link href="/services" className="px-7 sm:px-9 py-3.5 sm:py-4 text-white font-bold rounded-full text-base sm:text-lg border border-white/12 hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[20px]">grid_view</span>All Services
            </Link>
            </div>
          </div>
        </section>

        {/* Why Content is Essential */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">
                  Why Content Marketing is Essential for Your Business
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Today&apos;s customers don&apos;t just buy — <span className="text-primary font-semibold">they research first.</span> Before making any purchase or hiring any service, they search Google, read blogs, compare options, and look for trusted voices. If your business isn&apos;t showing up in those searches, your competitor is.
                </p>
                <p className="text-on-surface-variant leading-relaxed mb-5">
                  Without a strong content marketing strategy, you&apos;re missing out on:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: 'ads_click', text: 'Organic website traffic', sub: 'Free, compounding traffic that grows over time' },
                    { icon: 'travel_explore', text: 'Search engine visibility', sub: 'Rankings that put you in front of high-intent buyers' },
                    { icon: 'verified_user', text: 'Customer trust', sub: 'Consistent content builds authority and credibility' },
                    { icon: 'leaderboard', text: 'Lead generation', sub: 'The right content brings qualified leads directly to you' },
                    { icon: 'trending_up', text: 'Long-term ROI', sub: 'Unlike ads, good content keeps delivering results for years' },
                  ].map(({ icon, text, sub }) => (
                    <div key={text} className="flex items-center gap-3 p-4 bg-surface-container rounded-xl border border-outline-variant/10 hover:border-primary/25 transition-all group">
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-primary text-[18px]">{icon}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-sm text-white">{text}</span>
                        <p className="text-xs text-on-surface-variant mt-0.5">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-white font-semibold text-lg border-l-4 border-primary pl-4 py-2">
                  👉 Content marketing helps you rank, engage, and convert — without spending on ads every month.
                </p>
              </div>
              <div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[40px] rounded-full pointer-events-none"/>
                <h3 className="text-xl font-bold text-white mb-5">Who Needs Content Marketing?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    'Businesses in Vadodara & Gujarat dominating organic search',
                    'eCommerce brands needing product & category content',
                    'Startups & SMEs building authority without ad budgets',
                    'Service-based businesses (clinics, law firms, agencies)',
                    'Personal brands growing thought leadership',
                  ].map((ind) => (
                    <div key={ind} className="flex items-center gap-3 p-3 bg-surface-container-high rounded-xl">
                      <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                      <span className="text-sm font-medium text-white">{ind}</span>
                    </div>
                  ))}
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 pt-4">
                  We focus on content that ranks and converts — not just words.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Grid */}
        <section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our Content Marketing Services</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">We handle everything from strategy to creation, ensuring your brand message connects.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map(({ icon, title, desc, items, anchor }: { icon: string; title: string; desc: string; items: string[]; anchor?: string }) => (
                <div key={title} id={anchor} className="group bg-surface-container p-6 sm:p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/25 hover:bg-surface-container-high transition-all duration-300 flex flex-col scroll-mt-32">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary text-[22px]">{icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4 flex-grow">{desc}</p>
                  <ul className="space-y-1.5 mb-4">
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

        {/* Local Advantage & Why Choose Us */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">Content Marketing Services Across Gujarat</h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">Veyber serves businesses across Gujarat with content marketing expertise.</p>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">We proudly serve</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      { name: 'Vadodara — Primary Service Area', url: '/digital-marketing-vadodara' },
                      { name: 'Ahmedabad — Commercial Hub', url: '/digital-marketing-ahmedabad' },
                      { name: 'Surat — Textile & Trade', url: '/digital-marketing-surat' },
                      { name: 'Rajkot — MSME & Industrial', url: '/digital-marketing-rajkot' }
                    ].map(({ name, url }) => (
                      <Link key={name} href={url} className="flex items-center gap-1.5 px-3 py-2 bg-surface-container rounded-xl border border-outline-variant/10 text-xs font-semibold hover:border-primary/30 hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-primary text-[14px]">location_on</span>
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">Why Choose Veyber for Content Marketing in Gujarat?</h3>
                  <ul className="space-y-3">
                    {[
                      { text: 'SEO-focused content strategy', sub: 'Every piece of content is built to rank, not just to read well.' },
                      { text: 'High-quality, plagiarism-free writing', sub: 'Original research-backed content with zero duplicate text.' },
                      { text: 'Keyword-driven approach', sub: 'We target terms your actual customers search for in Gujarat and India.' },
                      { text: 'Consistent content delivery', sub: 'Reliable monthly publishing schedules — no delays, no excuses.' },
                      { text: 'Affordable packages', sub: 'Content marketing plans for every budget, from startups to enterprises.' },
                      { text: 'Measurable results', sub: 'Monthly performance reports tracking rankings, traffic, and leads.' },
                    ].map(({ text, sub }) => (
                      <li key={text} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary mt-0.5">verified</span>
                        <div>
                          <span className="font-semibold text-white">{text}</span>
                          <p className="text-xs text-on-surface-variant mt-0.5">{sub}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Internal Links for SEO SILO */}
              <div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[50px] rounded-full pointer-events-none"/>
                <h3 className="text-xl sm:text-2xl font-bold font-headline mb-6 relative z-10">Explore More Digital Services</h3>
                <p className="text-on-surface-variant text-sm mb-6">Combine SEO content with our other services to maximize your growth.</p>
                <div className="flex flex-col gap-3 relative z-10">
                  <Link href="/social-media-handling" className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/10 hover:border-primary/30 transition-all font-semibold text-white text-sm group">
                    <span>Social Media Handling</span>
                    <span className="material-symbols-outlined text-primary text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </Link>
                  <Link href="/ecommerce-development" className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/10 hover:border-primary/30 transition-all font-semibold text-white text-sm group">
                    <span>Ecommerce Development</span>
                    <span className="material-symbols-outlined text-primary text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </Link>
                  <Link href="/account-management" className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/10 hover:border-primary/30 transition-all font-semibold text-white text-sm group">
                    <span>Account Management</span>
                    <span className="material-symbols-outlined text-primary text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </Link>
                  <Link href="/contact-us" className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/10 hover:border-primary/30 transition-all font-semibold text-white text-sm group">
                    <span>Contact Page</span>
                    <span className="material-symbols-outlined text-primary text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection
          title="Our Process"
          description="A seamless, results-driven content creation process."
          steps={process}
        />

        {/* Results */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3">Results You Can Expect</h2>
            <p className="text-on-surface-variant text-sm mb-10 max-w-lg mx-auto">When your content is strategic and SEO-optimized, your business grows organically.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
              {results.map(({ icon, stat, label, desc }) => (
                <div key={label} className="bg-surface-container rounded-2xl border border-outline-variant/10 p-5 sm:p-6 flex flex-col items-center gap-2.5 hover:border-primary/25 hover:bg-surface-container-high transition-all duration-200">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[20px]">{icon}</span>
                  </div>
                  <p className="text-lg font-black text-primary text-center leading-tight">{stat}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant text-center">{label}</p>
                  <p className="text-[11px] text-on-surface-variant text-center leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3">Frequently Asked Questions</h2>
              <p className="text-on-surface-variant text-sm">Get answers about our content marketing services.</p>
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
                Let&apos;s Grow Your Business
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
                Let&apos;s Grow Your Business with Content
              </h2>
              <p className="text-base sm:text-lg text-white/75 mb-8 max-w-xl mx-auto leading-relaxed drop-shadow">
                Ready to dominate Google with SEO blog writing, website copywriting, and a winning keyword strategy? Contact Veyber — Gujarat&apos;s trusted content marketing agency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-3.5 sm:py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black rounded-full text-base sm:text-lg shadow-2xl hover:shadow-primary/40 transition-all active:scale-95 group">
                  Get Started
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
