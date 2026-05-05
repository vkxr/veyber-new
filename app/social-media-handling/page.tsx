import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';

export const metadata: Metadata = {
  title: 'Social Media Handling Services in Vadodara | Instagram & Facebook Marketing Agency Gujarat – Veyber',
  description: 'Looking for social media handling services in Vadodara? Veyber offers expert Instagram management, Facebook marketing, and ad campaign management across Gujarat. Grow your brand with Vadodara\'s trusted SMM agency.',
  keywords: 'Social media handling services Vadodara, Social media marketing Vadodara, Instagram management Vadodara, Facebook marketing Vadodara, SMM agency Gujarat, Ad campaigns social media Vadodara, Instagram marketing Gujarat, Facebook ads services Vadodara, Social media manager Vadodara, Digital marketing company Vadodara, Social media advertising Gujarat, Instagram growth services India, Lead generation ads Gujarat, Facebook page management Vadodara, Social media growth services India, Paid social media marketing Vadodara',
  alternates: {
    canonical: 'https://veyber.co.in/social-media-handling',
  },
  openGraph: {
    title: 'Social Media Handling Services in Vadodara | Instagram & Facebook Marketing Agency Gujarat – Veyber',
    description: 'Looking for social media handling services in Vadodara? Veyber offers expert Instagram management, Facebook marketing, and ad campaign management across Gujarat. Grow your brand with Vadodara\'s trusted SMM agency.',
    url: 'https://veyber.co.in/social-media-handling',
    type: 'website',
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Social Media Marketing',
  provider: { '@type': 'Organization', name: 'Veyber', url: 'https://veyber.co.in' },
  areaServed: { '@type': 'Place', name: 'Vadodara, Gujarat' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Social Media Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Instagram Management Vadodara' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facebook Marketing Vadodara' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Ad Campaign Management Gujarat' } },
    ],
  },
  description: 'Social media handling services in Vadodara including Instagram management, Facebook marketing, ad campaigns, content creation, and growth strategy across Gujarat.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What does social media handling include?', acceptedAnswer: { '@type': 'Answer', text: 'It covers everything from profile optimization and content creation to posting, audience engagement, story/reel management, hashtag strategy, and monthly performance reporting — tailored for Instagram, Facebook, or both.' } },
    { '@type': 'Question', name: "What's the difference between Instagram Management and Facebook Marketing?", acceptedAnswer: { '@type': 'Answer', text: 'Instagram management focuses on visual-first content — Reels, Stories, carousels, and aesthetic feed building — optimized for discovery and engagement. Facebook marketing is better suited for community building, local targeting, event promotion, and older demographics. We recommend both for maximum coverage.' } },
    { '@type': 'Question', name: 'Do you run paid ads separately from content management?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Ad campaign management is a distinct service. You can opt for organic-only (content + community management) or add paid ads (Facebook Ads + Instagram Ads) to accelerate results. Ad spends are billed separately.' } },
    { '@type': 'Question', name: 'Which platforms do you manage?', acceptedAnswer: { '@type': 'Answer', text: 'We manage Instagram, Facebook, and LinkedIn. Our three core services — Instagram Management, Facebook Marketing, and Ad Campaigns — can be taken individually or as a combined package.' } },
    { '@type': 'Question', name: 'Can social media generate actual leads for my business?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. With the right organic strategy, consistent posting, and targeted ad campaigns, social media can become your #1 lead generation channel. Many of our clients in Vadodara and Surat get 30–70% of their inquiries directly from Instagram and Facebook.' } },
    { '@type': 'Question', name: 'How often do you post?', acceptedAnswer: { '@type': 'Answer', text: 'Posting frequency depends on your package — typically 3 to 7 times per week per platform. We recommend a minimum of 4 posts/week for consistent algorithm growth.' } },
    { '@type': 'Question', name: 'Do you serve businesses outside Vadodara?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. While Vadodara is our primary focus, we serve businesses across Gujarat - including Ahmedabad, Surat, and Rajkot.' } },
  ],
};

const services = [
  {
    icon: 'photo_camera',
    title: 'Instagram Management',
    anchor: 'instagram-management',
    desc: 'Turn your profile into a lead-generation engine with visual-first content and Reels strategy.',
    items: ['Profile optimization & branded covers', 'Creative post & carousel design', 'Instagram Reels & Stories management', 'Community management & DMs', 'Hashtag strategy & benchmarking'],
  },
  {
    icon: 'groups',
    title: 'Facebook Marketing',
    anchor: 'facebook-marketing',
    desc: 'Build community and drive local business growth with hyper-local targeting.',
    items: ['Page setup & complete optimization', 'Regular content posting (3-7/week)', 'Group management & moderation', 'Facebook Events & product launches', 'Review & reputation management'],
  },
  {
    icon: 'campaign',
    title: 'Ad Campaign Management',
    anchor: 'ad-campaigns',
    desc: 'Accelerate growth and generate qualified leads with targeted paid advertising.',
    items: ['Funnel planning (awareness to conversion)', 'Facebook & Instagram Ads', 'A/B testing creatives & audiences', 'Pixel setup & event tracking', 'Budget planning & ROI management'],
  },
  {
    icon: 'lightbulb',
    title: 'Social Media Strategy & Planning',
    desc: 'Custom strategy based on your business goals and target market.',
    items: ['Target audience research', 'Competitor analysis', 'Platform-specific strategy', 'Monthly content calendar planning'],
  },
  {
    icon: 'insights',
    title: 'Performance Tracking & Reporting',
    desc: 'Data-backed decisions every month to refine strategy.',
    items: ['Monthly performance reports', 'Engagement & reach analysis', 'Follower growth tracking', 'Strategy improvements'],
  },
  {
    icon: 'work',
    title: 'LinkedIn Management (Add-on)',
    desc: 'Professional profile and company page optimization for B2B audiences.',
    items: ['Thought leadership content', 'Connection building', 'Outreach strategy', 'Company page optimization'],
  },
];

const process = [
  { n: '01', label: 'Business Understanding', desc: 'Your goals, audience, competitors, and brand voice.' },
  { n: '02', label: 'Strategy Creation', desc: 'Platform-specific plan for Instagram, Facebook & Ads.' },
  { n: '03', label: 'Content Planning', desc: 'Monthly calendar with post types, themes, and creatives.' },
  { n: '04', label: 'Execution & Posting', desc: 'Consistent publishing across all chosen platforms.' },
  { n: '05', label: 'Monitoring & Optimization', desc: 'Weekly check-ins, A/B tests, and adjustments.' },
  { n: '06', label: 'Monthly Reporting', desc: 'Transparent performance data and next-month strategy.' },
];

const results = [
  { icon: 'group_add', stat: 'Steady', label: 'Follower Growth', desc: 'Real, targeted audience on IG and FB' },
  { icon: 'favorite', stat: 'Higher', label: 'Engagement Rate', desc: 'More saves, shares, comments, and DMs' },
  { icon: 'visibility', stat: 'Improved', label: 'Brand Awareness', desc: 'Recall in your local market' },
  { icon: 'leaderboard', stat: 'More', label: 'Leads & Inquiries', desc: 'Through organic content and paid ads' },
  { icon: 'verified_user', stat: 'Stronger', label: 'Customer Trust', desc: 'Consistent, professional social presence' },
  { icon: 'payments', stat: 'Better', label: 'Ad ROI', desc: 'Optimized campaigns lowering cost per lead' },
];

const faqs = [
  { q: 'What does social media handling include?', a: 'It covers everything from profile optimization and content creation to posting, audience engagement, story/reel management, hashtag strategy, and monthly performance reporting — tailored for Instagram, Facebook, or both.' },
  { q: "What's the difference between Instagram Management and Facebook Marketing?", a: 'Instagram management focuses on visual-first content — Reels, Stories, carousels, and aesthetic feed building — optimized for discovery and engagement. Facebook marketing is better suited for community building, local targeting, event promotion, and older demographics. We recommend both for maximum coverage.' },
  { q: 'Do you run paid ads separately from content management?', a: 'Yes. Ad campaign management is a distinct service. You can opt for organic-only (content + community management) or add paid ads (Facebook Ads + Instagram Ads) to accelerate results. Ad spends are billed separately.' },
  { q: 'Which platforms do you manage?', a: 'We manage Instagram, Facebook, and LinkedIn. Our three core services — Instagram Management, Facebook Marketing, and Ad Campaigns — can be taken individually or as a combined package.' },
  { q: 'Can social media generate actual leads for my business?', a: 'Absolutely. With the right organic strategy, consistent posting, and targeted ad campaigns, social media can become your #1 lead generation channel. Many of our clients in Vadodara and Surat get 30–70% of their inquiries directly from Instagram and Facebook.' },
  { q: 'How often do you post?', a: 'Posting frequency depends on your package — typically 3 to 7 times per week per platform. We recommend a minimum of 4 posts/week for consistent algorithm growth.' },
  { q: 'Do you serve businesses outside Vadodara?', a: 'Yes. While Vadodara is our primary focus, we serve businesses across Gujarat - including Ahmedabad, Surat, and Rajkot.' },
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
              Social Media Handling · Vadodara, Gujarat
            </span>
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {['Instagram Management', 'Facebook Marketing', 'Ad Campaigns'].map((pill) => (
                <span key={pill} className="px-3 py-1 rounded-full border border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold tracking-wide">{pill}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
              Build Your Brand.<br/>
              Engage Your Audience. <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{filter:'drop-shadow(0 0 28px rgba(174,198,255,0.3))'}}>Grow Faster.</span>
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-4 leading-relaxed">
              Looking for professional social media handling services in <span className="text-primary font-semibold">Vadodara, Gujarat?</span> At Veyber — a leading SMM agency in Gujarat — we help businesses build a powerful online presence on Instagram, Facebook, and LinkedIn.
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
              We don&apos;t just post content. We craft data-driven strategies that generate real leads, real followers, and real revenue.
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

        {/* Why Social Media is Essential */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">
                  Why Social Media Marketing is Non-Negotiable
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Your customers are active every day on <span className="text-primary font-semibold">Instagram, Facebook, and LinkedIn.</span>
                </p>
                <p className="text-on-surface-variant leading-relaxed mb-5">
                  If your brand isn&apos;t consistently active and optimized, you&apos;re leaving behind:
                </p>
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {[
                    { icon: 'group_remove', text: 'Potential customers', sub: 'Who are actively searching for your services' },
                    { icon: 'visibility_off', text: 'Brand visibility', sub: 'That compounds over time' },
                    { icon: 'trending_down', text: 'Sales opportunities', sub: 'Your competitors are already capturing' },
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
                  👉 That&apos;s exactly where Veyber&apos;s social media marketing services step in.
                </p>
              </div>
              <div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[40px] rounded-full pointer-events-none"/>
                <h3 className="text-xl font-bold text-white mb-5">Who Needs Social Media Handling in Vadodara?</h3>
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {[
                    'Local businesses growing their digital presence',
                    'Startups & small businesses needing affordable SMM',
                    'eCommerce brands driving traffic and sales',
                    'Service providers (doctors, lawyers, coaches)',
                    'Personal brands & influencers in Gujarat',
                    'Real estate developers promoting projects',
                  ].map((ind) => (
                    <div key={ind} className="flex items-center gap-3 p-3 bg-surface-container-high rounded-xl">
                      <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                      <span className="text-sm font-medium text-white">{ind}</span>
                    </div>
                  ))}
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 pt-4">
                  We don&apos;t just post content — we create strategies that drive growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Grid */}
        <section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our Social Media Handling Services</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">We handle everything from start to finish, so you can focus on running your business.</p>
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
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">Social Media Services Across Gujarat</h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">Veyber provides social media handling services across Gujarat, with a primary focus on Vadodara.</p>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">We proudly serve</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      { name: 'Vadodara — Primary Service Area', url: '/digital-marketing-vadodara' },
                      { name: 'Ahmedabad — Urban Market', url: '/digital-marketing-ahmedabad' },
                      { name: 'Surat — Textile & Diamond Brands', url: '/digital-marketing-surat' },
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
                  <h3 className="text-lg font-bold text-white">Why Choose Veyber as Your Social Media Agency in Vadodara?</h3>
                  <ul className="space-y-3">
                    {[
                      { text: 'Dedicated social media managers', sub: 'One point of contact. Full accountability.' },
                      { text: 'Creative & strategic approach', sub: 'Content built for reach and conversion, not just looks.' },
                      { text: 'Consistent posting schedules', sub: 'Algorithms reward consistency. We never miss a post.' },
                      { text: 'Affordable plans for every budget', sub: 'Flexible packages for startups to established businesses.' },
                      { text: 'Focus on engagement & real growth', sub: 'No vanity metrics — we track what drives business.' },
                      { text: 'Local market expertise', sub: 'We understand Vadodara\'s market, language, and audience.' },
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
                <p className="text-on-surface-variant text-sm mb-6">Combine social media with our other services to maximize your growth.</p>
                <div className="flex flex-col gap-3 relative z-10">
                  <Link href="/content-marketing" className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/10 hover:border-primary/30 transition-all font-semibold text-white text-sm group">
                    <span>Content Marketing</span>
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
          description="A seamless, results-driven process designed for maximum brand growth."
          steps={process}
        />

        {/* Results */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3">Results You Can Expect</h2>
            <p className="text-on-surface-variant text-sm mb-10 max-w-lg mx-auto">When your social media is managed by experts, your business sees real growth.</p>
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
              <p className="text-on-surface-variant text-sm">Get answers about our social media services.</p>
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
                Let&apos;s Grow Your Social Media Presence
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
                Ready to build a powerful brand online?
              </h2>
              <p className="text-base sm:text-lg text-white/75 mb-8 max-w-xl mx-auto leading-relaxed drop-shadow">
                Contact Veyber today with our Instagram Management, Facebook Marketing & targeted Ad Campaigns — the #1 social media handling agency in Vadodara, Gujarat.
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
