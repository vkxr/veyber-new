import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';

export const metadata: Metadata = {
  title: 'Meta Ads Agency in Gujarat | Facebook & Instagram Ads – Veyber',
  description: 'Generate high-quality leads and eCommerce sales with targeted Facebook and Instagram Ads. Expert Meta Ads management in Vadodara, Surat & Ahmedabad.',
  keywords: 'Meta Ads agency Gujarat, Facebook ads Vadodara, Instagram ads management Ahmedabad, social media advertising Gujarat',
  openGraph: {
    title: 'Meta Ads Agency in Gujarat | Facebook & Instagram Ads – Veyber',
    description: 'Generate high-quality leads and eCommerce sales with targeted Facebook and Instagram Ads. Expert Meta Ads management in Vadodara, Surat & Ahmedabad.',
    url: 'https://veyber.co.in/meta-ads',
    type: 'website',
  }
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Meta Ads',
  provider: {
    '@type': 'Organization',
    name: 'Veyber',
    url: 'https://veyber.co.in',
  },
  areaServed: {
    '@type': 'State',
    name: 'Gujarat',
  },
  description: 'Generate high-quality leads and eCommerce sales with targeted Facebook and Instagram Ads. Expert Meta Ads management in Vadodara, Surat & Ahmedabad.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between Google Ads and Meta Ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Ads capture "demand" (people actively searching for you). Meta Ads generate "demand" (showing your products to people who are interested but might not be searching yet). Both are powerful when used together.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you create the ad images and videos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We handle the ad copywriting and strategy. We can provide graphic design for static ads, and we consult with you on the type of video content that performs best for Reels/Stories.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a Meta Pixel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Meta Pixel is a piece of code placed on your website. It tracks user actions (like adding to cart or purchasing) so we can optimize the ads and retarget people who didn\'t finish checking out.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you target the right people?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use a combination of Custom Audiences (your existing customers/website visitors), Lookalike Audiences (people similar to your best customers), and detailed Interest/Behavior targeting.',
      },
    }
  ],
};

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
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"/>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"/>
              </span>
              Meta Ads (Facebook & Instagram)
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
              Turn scrolling into <br/>
              <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{filter:'drop-shadow(0 0 28px rgba(174,198,255,0.3))'}}>sales and leads.</span>
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed">
              Reach your perfect audience on Facebook and Instagram. We build highly creative, data-backed ad campaigns that capture attention and drive measurable growth.
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
            
            {/* Trust bar */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10">
              {[
                { val: 'Massive', label: 'Reach' },
                { val: 'Visual', label: 'Storytelling' },
                { val: 'High', label: 'Engagement' },
                { val: 'Precise', label: 'Targeting' },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <div className="text-xl sm:text-2xl font-black text-white leading-none mb-1">{val}</div>
                  <div className="text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-widest font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why You Need Section */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">
                  Why Meta Ads are Essential for Growth
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  With billions of active users, Facebook and Instagram hold the attention of your target audience. Whether you sell high-fashion clothing or B2B software, your customers are on Meta platforms.
                </p>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  Meta Ads allow for unparalleled audience targeting based on interests, behaviors, and demographics. By combining stunning creatives with aggressive retargeting strategies, we turn casual scrollers into paying customers.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: 'group_add', text: 'Massive Brand Awareness' },
                    { icon: 'ads_click', text: 'Cost-Effective Lead Gen' },
                    { icon: 'shopping_bag', text: 'Direct eCommerce Sales' },
                    { icon: 'repeat', text: 'Powerful Retargeting' },
                  ].map(({ icon, text }) => (
                    <div key={text} className="flex items-center gap-3 p-4 bg-surface-container rounded-xl border border-outline-variant/10 hover:border-primary/25 transition-all group">
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-primary text-[18px]">{icon}</span>
                      </div>
                      <span className="font-semibold text-sm text-white">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[40px] rounded-full pointer-events-none"/>
                <h3 className="text-lg font-bold text-white mb-5">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    'eCommerce & Retail', 'Healthcare & Clinics', 'Real Estate', 
                    'Education & EdTech', 'Manufacturing & B2B', 'Local Services'
                  ].map((ind) => (
                    <div key={ind} className="flex items-center gap-3 p-3 bg-surface-container-high rounded-xl">
                      <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                      <span className="text-sm font-medium text-white">{ind}</span>
                    </div>
                  ))}
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 pt-4">
                  Not in this list? No problem — we build tailored strategies for <span className="text-primary font-semibold">any industry across Gujarat.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sub Services Grid */}
        <section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our Meta Ad Strategies</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">We utilize the full power of the Meta ecosystem to hit your business goals.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[{"icon":"person_add","title":"Lead Generation","desc":"Collect high-quality phone numbers and emails directly within Facebook and Instagram.","items":["Instant Forms Setup","CRM Integration","Lookalike Audiences"]},{"icon":"storefront","title":"eCommerce Conversion Ads","desc":"Catalog sales and conversion campaigns designed specifically to drive direct website purchases.","items":["Advantage+ Shopping Campaigns","Dynamic Product Ads","ROAS Optimization"]},{"icon":"video_library","title":"Video & Reels Ads","desc":"Capitalize on the highest engaging formats to showcase your products dynamically.","items":["Short-form Reels Ads","Story Placements","Engaging Hooks"]},{"icon":"alt_route","title":"Retargeting Funnels","desc":"Re-engage users who visited your website or abandoned their cart to close the sale.","items":["Meta Pixel Tracking","Custom Audiences","Sequential Ad Messaging"]},{"icon":"campaign","title":"Brand Awareness","desc":"Reach the maximum number of relevant people in your local area to build brand recall.","items":["Reach & Frequency Buying","Local Awareness targeting","Brand Lift Testing"]},{"icon":"insights","title":"Pixel & CAPI Setup","desc":"Advanced tracking using Meta Pixel and Conversions API to ensure accurate data attribution.","items":["Server-Side Tracking","Event Prioritization","Data Deduplication"]}].map((srv: any) => (
                <div key={srv.title} className="group bg-surface-container p-6 sm:p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/25 hover:bg-surface-container-high transition-all duration-300 flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary text-[22px]">{srv.icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{srv.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4 flex-grow">{srv.desc}</p>
                  <ul className="space-y-1.5 mb-4">
                    {srv.items.map((item: string) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-on-surface-variant">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"/>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {srv.href && (
                    <Link href={srv.href} className="inline-flex items-center gap-1 text-primary font-bold text-xs group/link mt-auto">
                      Learn More <span className="material-symbols-outlined text-[14px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Advantage */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">Meta Ads in Gujarat — Local Advantage</h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">Working with a local agency like Veyber gives you an edge that global agencies simply can't match.</p>
                <ul className="space-y-4 mb-8">
                  {[
                    { icon: 'location_on', text: 'Understanding of Gujarat market trends' },
                    { icon: 'groups', text: 'Local customer behaviour insights' },
                    { icon: 'chat', text: 'Easy communication & support' },
                    { icon: 'rocket_launch', text: 'Faster project delivery' },
                  ].map(({ icon, text }) => (
                    <li key={text} className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary">{icon}</span>
                      <span className="font-semibold text-white">{text}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">We proudly serve</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'Vadodara (Primary)', url: '/digital-marketing-vadodara' },
                      { name: 'Ahmedabad', url: '/digital-marketing-ahmedabad' },
                      { name: 'Surat', url: '/digital-marketing-surat' },
                      { name: 'Rajkot', url: '/digital-marketing-rajkot' }
                    ].map(({ name, url }) => (
                      <Link key={name} href={url} className="flex items-center gap-1.5 px-3 py-2 bg-surface-container rounded-xl border border-outline-variant/10 text-xs font-semibold hover:border-primary/30 hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-primary text-[14px]">location_on</span>
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Why Choose Veyber */}
              <div className="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[50px] rounded-full pointer-events-none"/>
                <h3 className="text-xl sm:text-2xl font-bold font-headline mb-6 relative z-10">Why Choose Veyber?</h3>
                <ul className="space-y-4 relative z-10">
                  {[
                    '100% Data-Driven Strategies',
                    'Transparent Reporting & ROI Tracking',
                    'Conversion-Focused Campaigns',
                    'Dedicated Account Managers',
                    'Proven Track Record in Gujarat',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0">verified</span>
                      <span className="font-semibold text-white text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 pt-4 relative z-10">
                  We focus on one thing: <span className="text-primary font-semibold">helping you generate more growth online.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection
          title="Our Proven Process"
          description="A structured, transparent workflow that delivers consistent results."
          steps={[
            { n: '01', label: 'Audience Research', desc: 'Identifying the interests, behaviors, and demographics of your ideal customer profile.' },
            { n: '02', label: 'Creative Development', desc: 'Collaborating on ad copy, images, and videos designed to stop the scroll.' },
            { n: '03', label: 'Tracking Setup', desc: 'Implementing the Meta Pixel and Conversions API for accurate tracking.' },
            { n: '04', label: 'Campaign Launch', desc: 'Testing multiple audiences and creatives simultaneously to find what works.' },
            { n: '05', label: 'A/B Testing', desc: 'Continuously refining headlines, offers, and visual assets to lower the CPA.' },
            { n: '06', label: 'Scaling', desc: 'Increasing budgets on the winning campaigns while maintaining profitability.' },
          ]}
        />

        {/* Results */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3">Results You Can Expect</h2>
            <p className="text-on-surface-variant text-sm mb-10 max-w-lg mx-auto">When you invest in Veyber's services, you invest in a system that works hard for your business.</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: 'trending_up', stat: 'Higher', label: 'Website Traffic' },
                { icon: 'people', stat: 'Better', label: 'User Engagement' },
                { icon: 'shopping_cart', stat: 'Increased', label: 'Conversion Rate' },
                { icon: 'public', stat: 'Strong', label: 'Online Presence' },
              ].map(({ icon, stat, label }) => (
                <div key={label} className="bg-surface-container rounded-2xl border border-outline-variant/10 p-5 sm:p-7 flex flex-col items-center gap-3 hover:border-primary/25 hover:bg-surface-container-high transition-all duration-200">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[22px]">{icon}</span>
                  </div>
                  <p className="text-xl font-black text-primary">{stat}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant text-center">{label}</p>
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
              <p className="text-on-surface-variant text-sm">Everything you want to know about our services.</p>
            </div>
            <div className="flex flex-col gap-4">
              {[{"q":"What is the difference between Google Ads and Meta Ads?","a":"Google Ads capture \"demand\" (people actively searching for you). Meta Ads generate \"demand\" (showing your products to people who are interested but might not be searching yet). Both are powerful when used together."},{"q":"Do you create the ad images and videos?","a":"We handle the ad copywriting and strategy. We can provide graphic design for static ads, and we consult with you on the type of video content that performs best for Reels/Stories."},{"q":"What is a Meta Pixel?","a":"The Meta Pixel is a piece of code placed on your website. It tracks user actions (like adding to cart or purchasing) so we can optimize the ads and retarget people who didn't finish checking out."},{"q":"How do you target the right people?","a":"We use a combination of Custom Audiences (your existing customers/website visitors), Lookalike Audiences (people similar to your best customers), and detailed Interest/Behavior targeting."}].map((item: any, i: number) => (
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
                Ready to Scale Your Business?
              </h2>
              <p className="text-base sm:text-lg text-white/75 mb-3 max-w-xl mx-auto leading-relaxed drop-shadow">
                Start your growth journey in Gujarat today.
              </p>
              <p className="text-white/50 text-sm mb-8">Contact Veyber today and get a free consultation for your project.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-3.5 sm:py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black rounded-full text-base sm:text-lg shadow-2xl hover:shadow-primary/40 transition-all active:scale-95 group">
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
