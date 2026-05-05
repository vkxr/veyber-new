import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';

export const metadata: Metadata = {
  title: 'Business Consulting Services in Gujarat | Digital Strategy, Market Research & Brand Positioning – Veyber Vadodara',
  description: 'Looking for business consulting services in Vadodara or Gujarat? Veyber offers digital strategy, market research, and brand positioning to help startups and SMEs grow smarter.',
  keywords: 'Business consulting services Gujarat, Digital strategy consulting Vadodara, Market research services Gujarat, Brand positioning strategy Gujarat, Business consultant Vadodara, Business growth consultant Gujarat, Startup consulting Vadodara, Competitor analysis services Gujarat, SME consulting Gujarat',
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Business Consulting',
  provider: { '@type': 'Organization', name: 'Veyber', url: 'https://veyber.co.in' },
  areaServed: { '@type': 'State', name: 'Gujarat' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Business Consulting Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Strategy Consulting Vadodara' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Market Research Services Gujarat' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Positioning Strategy Gujarat' } },
    ],
  },
  description: 'Business consulting services in Gujarat including digital strategy, market research, competitor analysis, and brand positioning for startups and SMEs in Vadodara.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is business consulting?', acceptedAnswer: { '@type': 'Answer', text: 'Business consulting is the practice of helping organizations improve performance by analyzing existing problems and developing plans for improvement. A consultant brings outside expertise, objectivity, and proven frameworks that internal teams often cannot provide on their own.' } },
    { '@type': 'Question', name: "What's the difference between digital strategy and brand positioning?", acceptedAnswer: { '@type': 'Answer', text: 'Digital strategy defines which online channels and tactics to use to grow your business — it is the how of your digital presence. Brand positioning defines what your business stands for and how customers perceive you — it is the why people choose you. Both are essential for sustainable growth.' } },
    { '@type': 'Question', name: 'Do you conduct primary market research?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Depending on your engagement, we can conduct customer interviews, surveys, and focus groups in Vadodara and Gujarat, in addition to secondary research using industry data and competitor analysis.' } },
    { '@type': 'Question', name: 'How can a consultant help my business grow?', acceptedAnswer: { '@type': 'Answer', text: 'A consultant brings structured analysis, market knowledge, and strategic frameworks that help you see your business objectively, prioritize the right actions, and avoid costly mistakes. Most businesses see measurable improvements in clarity, efficiency, and revenue within 3–6 months.' } },
    { '@type': 'Question', name: 'Do you work with startups in Vadodara?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Startup consulting is one of our core offerings. We help early-stage businesses in Gujarat with business model design, go-to-market strategy, positioning, and the digital foundation needed to scale.' } },
    { '@type': 'Question', name: 'Is consulting suitable for small businesses and SMEs?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely — in fact, SMEs often benefit most from consulting because they lack the internal resources to develop strategy independently. Our packages are designed to be accessible and high-value for businesses at every size and stage.' } },
  ],
};

const services = [
  {
    icon: 'rocket_launch',
    title: 'Digital Strategy Consulting',
    anchor: 'digital-strategy',
    desc: 'Build a complete digital roadmap — from channel selection and content strategy to funnel design, lead generation systems, and technology stack decisions.',
    items: ['Digital audit & performance gap analysis', 'Online business strategy & KPI definition', 'Channel strategy (SEO, social, email, ads)', 'Marketing funnel planning', 'Content & lead generation strategy', 'eCommerce growth consulting', 'MarTech selection (CRMs, automation)', 'Digital transformation roadmap', 'Quarterly strategy reviews'],
  },
  {
    icon: 'query_stats',
    title: 'Market Research & Competitor Analysis',
    anchor: 'market-research',
    desc: 'Make confident, data-backed decisions with intelligence on your market, customers, and competitors.',
    items: ['Industry analysis & opportunity mapping', 'Target audience & persona development', 'Competitor benchmarking & digital audit', 'Keyword competitor gap analysis', 'Pricing strategy analysis', 'Customer behavior insights', 'SWOT analysis', 'Market entry research'],
  },
  {
    icon: 'diamond',
    title: 'Brand Positioning & Strategy',
    anchor: 'brand-positioning',
    desc: 'Define exactly where your brand sits in the minds of your target customers — what you stand for, who you serve, and why you are the obvious choice.',
    items: ['Brand identity audit', 'Unique Value Proposition (UVP) development', 'Brand messaging framework', 'Market positioning map', 'Competitive differentiation strategy', 'Brand voice & tone guidelines', 'Brand story development', 'Brand consistency audit'],
  },
  {
    icon: 'route',
    title: 'Business Strategy Development',
    desc: 'Business model planning, revenue stream analysis, and growth strategy for short-term wins and long-term scaling.',
    items: ['Business model planning', 'Growth strategy', 'Market expansion strategy', 'Revenue stream analysis'],
  },
  {
    icon: 'settings_suggest',
    title: 'Operations & Process Optimization',
    desc: 'Workflow mapping, inefficiency identification, and process improvement for sales, marketing, and operations teams.',
    items: ['Workflow mapping', 'Process improvement', 'Productivity systems', 'Team structure recommendations'],
  },
  {
    icon: 'emoji_objects',
    title: 'Startup Consulting',
    desc: 'Business setup guidance, go-to-market strategy, and investor-ready business planning for early-stage businesses.',
    items: ['Business setup guidance', 'Go-to-market strategy', 'Investor-ready planning', 'First 100 customers acquisition'],
  },
];

const process = [
  { n: '01', label: 'Business Analysis', desc: 'Understanding your current state, operations, and goals deeply.' },
  { n: '02', label: 'Problem Identification', desc: 'Pinpointing bottlenecks and areas hindering your scale.' },
  { n: '03', label: 'Strategy Development', desc: 'Crafting a roadmap and actionable solutions for sustainable growth.' },
  { n: '04', label: 'Implementation Guidance', desc: 'Helping you execute strategies correctly and efficiently.' },
  { n: '05', label: 'Monitoring & Optimization', desc: 'Tracking KPIs and refining strategies to ensure long-term success.' },
];

const results = [
  { icon: 'explore', stat: 'Clear', label: 'Business Direction', desc: 'Defined goals, strategy, and measurable milestones' },
  { icon: 'psychology', stat: 'Improved', label: 'Decision-Making', desc: 'Data-backed choices that reduce costly mistakes' },
  { icon: 'payments', stat: 'Increased', label: 'Revenue Opportunities', desc: 'New channels, audiences, and growth levers identified' },
  { icon: 'bolt', stat: 'Better', label: 'Operational Efficiency', desc: 'Streamlined processes that free up time and costs' },
  { icon: 'shield', stat: 'Stronger', label: 'Brand Positioning', desc: 'Known, trusted, and preferred in your target market' },
  { icon: 'trending_up', stat: 'Sustainable', label: 'Business Growth', desc: 'Systems that scale with you, not against you' },
];

const faqs = [
  { q: 'What is business consulting?', a: 'Business consulting is the practice of helping organizations improve performance by analyzing existing problems and developing plans for improvement. A consultant brings outside expertise, objectivity, and proven frameworks that internal teams often cannot provide on their own.' },
  { q: "What's the difference between digital strategy and brand positioning?", a: 'Digital strategy defines which online channels and tactics to use to grow your business — it\'s the how of your digital presence. Brand positioning defines what your business stands for and how customers perceive you — it\'s the why people choose you. Both are essential for sustainable growth.' },
  { q: 'Do you conduct primary market research?', a: 'Yes. Depending on your engagement, we can conduct customer interviews, surveys, and focus groups in Vadodara and Gujarat, in addition to secondary research using industry data and competitor analysis.' },
  { q: 'How can a consultant help my business grow?', a: 'A consultant brings structured analysis, market knowledge, and strategic frameworks that help you see your business objectively, prioritize the right actions, and avoid costly mistakes. Most businesses see measurable improvements in clarity, efficiency, and revenue within 3–6 months.' },
  { q: 'Do you work with startups in Vadodara?', a: 'Yes. Startup consulting is one of our core offerings. We help early-stage businesses in Gujarat with business model design, go-to-market strategy, positioning, and the digital foundation needed to scale.' },
  { q: 'Is consulting suitable for small businesses and SMEs?', a: 'Absolutely — in fact, SMEs often benefit most from consulting because they lack the internal resources to develop strategy independently. Our packages are designed to be accessible and high-value for businesses at every size and stage.' },
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
              Business Consulting · Gujarat
            </span>
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {['Digital Strategy', 'Market Research', 'Brand Positioning'].map((pill) => (
                <span key={pill} className="px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold tracking-wide">{pill}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
              Strategic Growth Solutions for<br/>
              <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{filter:'drop-shadow(0 0 28px rgba(174,198,255,0.3))'}}>Modern Businesses</span>
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-4 leading-relaxed">
              Looking to grow, scale, or streamline your business in <span className="text-primary font-semibold">Vadodara, Ahmedabad, Surat, or across Gujarat?</span> At Veyber — a result-driven business consulting firm — we help startups, SMEs, and growing companies make smarter decisions, fix operational gaps, and achieve sustainable, measurable growth.
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
              We don&apos;t just give advice. We build practical, actionable strategies and stay accountable to results.
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

        {/* Why Business Consulting is Essential */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">
                  Why Business Consulting is Critical for Growth
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Most businesses in Gujarat don&apos;t struggle because of lack of effort — they struggle because of a lack of clarity. The right strategy, at the right time, can be the difference between stagnation and exponential growth.
                </p>
                <p className="text-on-surface-variant leading-relaxed mb-5">
                  Without proper business consulting, companies commonly face:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: 'help', text: 'Lack of clear strategy', sub: 'Working hard without direction or measurable goals' },
                    { icon: 'cancel', text: 'Poor marketing execution', sub: 'Spending on channels that don\'t deliver ROI' },
                    { icon: 'warning', text: 'Inefficient operations', sub: 'Processes that drain time and resources' },
                    { icon: 'trending_down', text: 'Low scalability', sub: 'Unable to grow beyond a revenue ceiling' },
                    { icon: 'visibility_off', text: 'Market blindspots', sub: 'Not knowing competitors or customer needs' },
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
                  👉 With the right consulting partner, you identify gaps, fix problems fast, and unlock growth opportunities your competitors are missing.
                </p>
              </div>
              <div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[40px] rounded-full pointer-events-none"/>
                <h3 className="text-xl font-bold text-white mb-5">Who Needs Business Consulting?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    'Startups in Vadodara & Gujarat defining strategy before launch',
                    'Small & medium businesses stuck at a revenue plateau',
                    'eCommerce brands wanting scalable, systematic growth',
                    'Service-based companies looking to professionalize',
                    'Entrepreneurs building new ventures needing expert guidance',
                    'Established businesses entering new markets or launching products',
                  ].map((ind) => (
                    <div key={ind} className="flex items-center gap-3 p-3 bg-surface-container-high rounded-xl">
                      <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                      <span className="text-sm font-medium text-white">{ind}</span>
                    </div>
                  ))}
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 pt-4">
                  We focus on real growth frameworks, turning theory into actionable business models.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Grid */}
        <section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our Business Consulting Services</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">Comprehensive advisory services designed across all core pillars of your business.</p>
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
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">Business Consulting Services Across Gujarat</h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">Veyber serves businesses across Gujarat with strategic consulting expertise.</p>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">We proudly serve</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      { name: 'Vadodara — Primary Service Area', url: '/digital-marketing-vadodara' },
                      { name: 'Ahmedabad — Commercial Capital', url: '/digital-marketing-ahmedabad' },
                      { name: 'Surat — Textile, Diamond & Retail', url: '/digital-marketing-surat' },
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
                  <h3 className="text-lg font-bold text-white">Why Choose Veyber for Business Consulting in Gujarat?</h3>
                  <ul className="space-y-3">
                    {[
                      { text: 'Practical, result-oriented strategies', sub: 'No theoretical frameworks — everything we recommend can be implemented.' },
                      { text: 'Deep Gujarat market understanding', sub: 'We know the local business landscape, customer behavior, and competition.' },
                      { text: 'Affordable consulting for SMEs', sub: 'Consulting shouldn\'t be only for large enterprises — our plans are accessible.' },
                      { text: 'Data-driven decision making', sub: 'Every recommendation is backed by research and market data.' },
                      { text: 'End-to-end business support', sub: 'From strategy to implementation guidance, we stay with you through execution.' },
                      { text: 'Cross-functional expertise', sub: 'Strategy, digital, branding, and operations under one roof.' },
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
                <h3 className="text-xl sm:text-2xl font-bold font-headline mb-6 relative z-10">Explore Implementation Services</h3>
                <p className="text-on-surface-variant text-sm mb-6">We don&apos;t just consult, we help execute. Combine strategy with our specialized digital services.</p>
                <div className="flex flex-col gap-3 relative z-10">
                  <Link href="/ecommerce-development" className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/10 hover:border-primary/30 transition-all font-semibold text-white text-sm group">
                    <span>Ecommerce Development</span>
                    <span className="material-symbols-outlined text-primary text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </Link>
                  <Link href="/account-management" className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/10 hover:border-primary/30 transition-all font-semibold text-white text-sm group">
                    <span>Account Management</span>
                    <span className="material-symbols-outlined text-primary text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </Link>
                  <Link href="/content-marketing" className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/10 hover:border-primary/30 transition-all font-semibold text-white text-sm group">
                    <span>Content Marketing</span>
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
          title="Our Consulting Process"
          description="A structured framework to identify bottlenecks and implement proven solutions."
          steps={process}
        />

        {/* Results */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3">Results You Can Expect</h2>
            <p className="text-on-surface-variant text-sm mb-10 max-w-lg mx-auto">A data-driven consulting approach transforms your business architecture.</p>
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
              <p className="text-on-surface-variant text-sm">Get answers about our business consulting operations.</p>
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
                Let&apos;s Build Your Business
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
                Let&apos;s Build Your Business for Success
              </h2>
              <p className="text-base sm:text-lg text-white/75 mb-8 max-w-xl mx-auto leading-relaxed drop-shadow">
                Ready to take your business to the next level with digital strategy, market research, and brand positioning? Contact Veyber — Gujarat&apos;s trusted business consulting partner.
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
