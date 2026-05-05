import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Rajkot | Google Ads, SEO & eCommerce – Veyber',
  description: 'Veyber offers Google Ads, SEO, eCommerce development, and marketplace management for manufacturing and SME businesses in Rajkot, Gujarat. Performance-driven strategies for Rajkot\'s growing digital market.',
  keywords: 'digital marketing services Rajkot, SEO company Rajkot, Google Ads agency Rajkot, eCommerce marketing Rajkot, digital marketing agency Gujarat, Amazon account management Rajkot, Flipkart seller management Rajkot, social media marketing Rajkot, website development Rajkot, PPC agency Rajkot, online marketing company Rajkot, digital marketing for manufacturing business in Rajkot Gujarat, Google Ads agency for small business in Rajkot, Amazon Flipkart account management in Rajkot, SEO company in Rajkot for lead generation, affordable digital marketing services in Rajkot Gujarat',
};

const pageSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"Veyber","url":"https://veyber.co.in","logo":"https://veyber.co.in/logo.png","telephone":["+916355183655","+917202061270","+918238757883"],"email":"veyberservicespvtltd@gmail.com","address":{"@type":"PostalAddress","streetAddress":"310, Maa Darshan Flats, Nr. Panchvati, Ajwa Road","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390019","addressCountry":"IN"},"areaServed":[{"@type":"City","name":"Rajkot, Gujarat"},{"@type":"State","name":"Gujarat"}],"description":"Veyber provides digital marketing services in Rajkot including Google Ads, SEO, eCommerce website development, and Amazon and Flipkart account management for manufacturing, SME, and product businesses in Rajkot, Gujarat.","hasOfferCatalog":{"@type":"OfferCatalog","name":"Digital Marketing Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Google Ads Management"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"SEO Services"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"eCommerce Website Development"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Amazon & Flipkart Account Management"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Meta Ads (Facebook & Instagram)"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Social Media Marketing"}}]}};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Veyber provide digital marketing services in Rajkot?","acceptedAnswer":{"@type":"Answer","text":"Yes. Veyber serves businesses across Rajkot with Google Ads, SEO, eCommerce development, Meta Ads, and marketplace account management. We are based in Vadodara and work with Rajkot clients remotely and on-site. Contact us at +91 6355183655 or veyberservicespvtltd@gmail.com for a free consultation."}},{"@type":"Question","name":"Can digital marketing work for a manufacturing or engineering business in Rajkot?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. Rajkot's manufacturing and engineering sector is one of the strongest B2B digital marketing opportunities in Gujarat. Buyers in India and internationally search Google for 'engineering components Rajkot', 'CNC machining Gujarat', and similar terms. We build SEO and Google Ads strategies that put Rajkot manufacturers in front of these buyers at the exact moment they are searching for suppliers."}},{"@type":"Question","name":"Which digital marketing service works fastest for a Rajkot SME?","acceptedAnswer":{"@type":"Answer","text":"Google Ads delivers the fastest results — your business appears at the top of Google search results within days of a campaign going live. For Rajkot, where many businesses have not yet invested heavily in paid search, well-managed Google Ads campaigns often produce leads at a significantly lower cost per lead than in more competitive markets like Ahmedabad or Surat."}},{"@type":"Question","name":"Can you help a Rajkot business sell on Amazon and Flipkart?","acceptedAnswer":{"@type":"Answer","text":"Yes. We set up and manage Amazon, Flipkart, and Meesho accounts for product businesses in Rajkot — covering listing optimization, catalog management, sponsored product ads within the marketplace, and monthly performance tracking. For Rajkot businesses making physical products, marketplaces are often the highest-volume sales channel and require consistent attention to listing quality and pricing to maintain rankings."}},{"@type":"Question","name":"How competitive is digital marketing in Rajkot compared to Ahmedabad?","acceptedAnswer":{"@type":"Answer","text":"Rajkot's digital market is significantly less competitive than Ahmedabad's — which means SEO rankings are more accessible, Google Ads costs per click are lower, and early movers in most categories can achieve first-page rankings faster and at lower cost. This makes right now an excellent time for Rajkot businesses to invest in digital marketing before the market matures and competition catches up."}}]};

const services = [
  {
    "icon": "ads_click",
    "title": "Google Ads — Fastest Path to Leads in Rajkot",
    "desc": "For Rajkot businesses that need inquiries and leads now, Google Ads is the most direct solution. We run Search Ads targeting high-intent searches specific to Rajkot — whether you are a manufacturer, a service business, a retailer, or a professional services firm. Rajkot's lower cost-per-click environment means your ad budget generates more leads here than it would in Ahmedabad. We manage the full campaign — keyword research, ad copy, bid strategy, conversion tracking, and weekly optimization.",
    "items": [
      "Search Ads",
      "Lead Generation",
      "Conversion Tracking"
    ],
    "href": "/google-ads"
  },
  {
    "icon": "storefront",
    "title": "eCommerce Account Management",
    "desc": "For Rajkot product businesses — particularly in engineering components, consumer goods, and manufactured products — marketplaces like Amazon and Flipkart represent the largest addressable sales channel in India. We set up and manage marketplace accounts end to end: product listing optimization, catalog structure, pricing strategy, sponsored product campaigns, and monthly sales reporting. For businesses new to marketplaces, we handle the full onboarding and setup process.",
    "items": [
      "Amazon",
      "Flipkart",
      "Meesho"
    ],
    "href": "/account-management"
  },
  {
    "icon": "search",
    "title": "SEO — Rank for Rajkot and Gujarat Manufacturing Keywords",
    "desc": "We build SEO strategies for Rajkot businesses around the specific queries your buyers use — industry-level searches like 'engineering manufacturer Rajkot', 'machine parts supplier Gujarat', and service-level searches like 'digital marketing company Rajkot'. Rajkot's less competitive SEO landscape means that consistent, quality SEO effort here produces rankings faster and more affordably than in Ahmedabad. We start with local and industry-specific keywords and build toward broader terms as authority grows.",
    "items": [
      "B2B SEO",
      "Local SEO",
      "Keyword Strategy"
    ],
    "href": "/seo"
  },
  {
    "icon": "shopping_cart",
    "title": "eCommerce Website Development",
    "desc": "We build Shopify, WooCommerce, and custom eCommerce websites for Rajkot businesses ready to sell online. Whether you are a manufacturer wanting to reach retail buyers directly, a consumer brand launching a D2C store, or a local retailer going online, we build stores that are fast, mobile-friendly, SEO-ready, and integrated with Indian payment gateways.",
    "items": [
      "Shopify",
      "WooCommerce",
      "Payment Gateway Integration"
    ],
    "href": "/ecommerce-development"
  },
  {
    "icon": "hub",
    "title": "Meta Ads — Facebook & Instagram for Rajkot Businesses",
    "desc": "Rajkot has an active Facebook and Instagram user base, particularly among younger consumers and retail buyers. We run Meta Ads for Rajkot businesses with city-level location targeting — lead generation ads for service businesses, product catalog ads for retail brands, and awareness campaigns for businesses building local brand recognition. Rajkot's lower Meta Ads competition means cost per lead is often significantly cheaper than in larger Gujarat markets.",
    "items": [
      "Lead Generation Ads",
      "Catalog Ads",
      "Brand Awareness"
    ],
    "href": "/meta-ads"
  },
  {
    "icon": "share",
    "title": "Social Media Marketing",
    "desc": "We build professional social media profiles for your business to establish trust and credibility, ensuring your Rajkot-based manufacturing or retail business looks reputable to local and national buyers.",
    "items": [
      "Profile Management",
      "Content Creation",
      "Trust Building"
    ],
    "href": "/social-media-handling"
  }
];

const process = [
  { n: '01', label: 'Business Understanding', desc: 'Deep dive into your business model and target audience.' },
  { n: '02', label: 'Market Analysis', desc: 'Conducting Rajkot-focused competitor analysis & research.' },
  { n: '03', label: 'Strategy Creation', desc: 'Developing a localized roadmap tailored to your specific goals.' },
  { n: '04', label: 'Execution', desc: 'Deploying high-impact campaigns across digital platforms.' },
  { n: '05', label: 'Optimization & Growth', desc: 'Refining data and iteratively scaling performance.' },
];

const results = [
  { icon: 'ads_click', stat: 'Increased', label: 'Website Traffic' },
  { icon: 'forum', stat: 'More', label: 'Leads & Inquiries' },
  { icon: 'payments', stat: 'Higher', label: 'Sales Conversions' },
  { icon: 'verified_user', stat: 'Strong', label: 'Brand Presence' },
  { icon: 'trending_up', stat: 'Sustainable', label: 'Business Growth' },
];

const faqs = [
  {
    "q": "Does Veyber provide digital marketing services in Rajkot?",
    "a": "Yes. Veyber serves businesses across Rajkot with Google Ads, SEO, eCommerce development, Meta Ads, and marketplace account management. We are based in Vadodara and work with Rajkot clients remotely and on-site. Contact us at +91 6355183655 or veyberservicespvtltd@gmail.com for a free consultation."
  },
  {
    "q": "Can digital marketing work for a manufacturing or engineering business in Rajkot?",
    "a": "Absolutely. Rajkot's manufacturing and engineering sector is one of the strongest B2B digital marketing opportunities in Gujarat. Buyers in India and internationally search Google for 'engineering components Rajkot', 'CNC machining Gujarat', and similar terms. We build SEO and Google Ads strategies that put Rajkot manufacturers in front of these buyers at the exact moment they are searching for suppliers."
  },
  {
    "q": "Which digital marketing service works fastest for a Rajkot SME?",
    "a": "Google Ads delivers the fastest results — your business appears at the top of Google search results within days of a campaign going live. For Rajkot, where many businesses have not yet invested heavily in paid search, well-managed Google Ads campaigns often produce leads at a significantly lower cost per lead than in more competitive markets like Ahmedabad or Surat."
  },
  {
    "q": "Can you help a Rajkot business sell on Amazon and Flipkart?",
    "a": "Yes. We set up and manage Amazon, Flipkart, and Meesho accounts for product businesses in Rajkot — covering listing optimization, catalog management, sponsored product ads within the marketplace, and monthly performance tracking. For Rajkot businesses making physical products, marketplaces are often the highest-volume sales channel and require consistent attention to listing quality and pricing to maintain rankings."
  },
  {
    "q": "How competitive is digital marketing in Rajkot compared to Ahmedabad?",
    "a": "Rajkot's digital market is significantly less competitive than Ahmedabad's — which means SEO rankings are more accessible, Google Ads costs per click are lower, and early movers in most categories can achieve first-page rankings faster and at lower cost. This makes right now an excellent time for Rajkot businesses to invest in digital marketing before the market matures and competition catches up."
  }
];

const locations = [
  "Kalawad Road",
  "150 Feet Ring Road",
  "University Road",
  "Raiya Road",
  "Gondal Road",
  "Mavdi",
  "Kalavad",
  "Bhaktinagar",
  "Entire Rajkot"
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
              Rajkot's manufacturing and SME economy
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
              Digital Marketing Services<br /><span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{filter:'drop-shadow(0 0 28px rgba(174,198,255,0.3))'}}>In Rajkot</span>
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-4 leading-relaxed font-semibold text-primary">
              Ready for digital growth.
            </p>
            <div className="max-w-3xl mx-auto mb-16 relative group mt-8 text-center sm:text-left">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-[1.5rem] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 pointer-events-none"></div>
              <div className="relative p-5 sm:p-8 bg-surface-container/40 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left shadow-2xl">
                <span className="material-symbols-outlined text-primary text-[28px] mb-4 opacity-80">public</span>
                <div className="text-sm sm:text-base leading-[1.8] font-medium max-w-2xl">
                  {(() => {
                    const text = `Rajkot is one of Gujarat's most important industrial cities — home to a large engineering and manufacturing sector, a strong base of SMEs, and a growing eCommerce and retail economy. It is also one of Gujarat's most underserved digital markets, where the gap between businesses that have invested in digital marketing and those that have not is still wide. That gap is an opportunity. Rajkot's digital market is less competitive than Ahmedabad's and less mature than Surat's — meaning businesses that invest in SEO and Google Ads now are getting results at significantly lower cost and faster timelines than they would in larger markets. Veyber brings performance-focused digital marketing to Rajkot businesses with strategies calibrated for the city's SME and industrial economy.`;
                    const sentences = text.split('. ').filter(Boolean).map(s => s.endsWith('.') ? s : s + '.');
                    return sentences.map((s, i) => (
                      <span key={i} className={i === 0 ? "text-white" : "text-white/60"}>
                        {s} {i !== sentences.length - 1 && ' '}
                      </span>
                    ));
                  })()}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group relative px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#aec6ff] to-[#4f8eff] text-[#001a42] font-bold rounded-full text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(174,198,255,0.38)] active:scale-95">
              <span className="relative z-10 flex items-center gap-2"><span className="material-symbols-outlined text-[20px]">rocket_launch</span>Scale Your Business</span>
              <div className="absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-[100%] transition-transform duration-700"/>
            </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us & Target Market */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
              <div className="lg:w-1/2 lg:sticky lg:top-32">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs sm:text-sm font-semibold mb-6">
                  <span className="material-symbols-outlined text-[16px]">insights</span>
                  Market Context
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-headline mb-5 leading-[1.1] text-white tracking-tight">
                  Why Rajkot Businesses Need Digital Marketing Now
                </h2>
                <div className="text-sm sm:text-base text-on-surface-variant leading-[1.8] font-medium space-y-4">
                  {(() => {
                    const text = `Rajkot's traditional economy runs on personal relationships, trade networks, and local reputation. But buyers — whether B2B procurement managers searching for engineering suppliers or consumers looking for local services — increasingly start on Google. A Rajkot engineering company that does not appear in search results for 'engineering components Rajkot' or 'machine parts supplier Gujarat' is invisible to buyers who have already shortlisted suppliers online before making a single call. For retail and service businesses in Rajkot, Google Ads and local SEO are the most direct paths to new customers. For product businesses, marketplace management on Amazon and Flipkart is the fastest route to pan-India sales. Rajkot's lower digital competition means the cost to acquire a customer through digital channels here is significantly lower than in Ahmedabad or Surat — and that window of advantage will not stay open permanently.`;
                    const sentences = text.split('. ').filter(Boolean).map(s => s.endsWith('.') ? s : s + '.');
                    const paragraphs = [];
                    for (let i = 0; i < sentences.length; i += 2) {
                      paragraphs.push(sentences.slice(i, i + 2).join(' '));
                    }
                    return paragraphs.map((p, i) => (
                      <p key={i} className={i === 0 ? "text-white/90" : "text-white/50"}>
                        {p}
                      </p>
                    ));
                  })()}
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="bg-gradient-to-b from-surface-container-high to-surface-container rounded-3xl border border-white/5 p-6 sm:p-8 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 blur-[60px] rounded-full pointer-events-none"></div>
                  <h3 className="text-xl sm:text-2xl font-bold font-headline text-white mb-6 relative z-10">Who We Work With in Rajkot</h3>
                  <div className="flex flex-col gap-3 relative z-10 w-full">
                    {[
  "Engineering and manufacturing businesses targeting B2B buyers across India",
  "SMEs and small businesses wanting to generate leads through Google",
  "Product businesses selling on Amazon, Flipkart, or Meesho",
  "Retail stores and local service businesses wanting more visibility in Rajkot",
  "Startups and entrepreneurs building their first digital presence in Rajkot",
  "Businesses in automotive, CNC machining, metals, and industrial components"
].map((ind) => (
                      <div key={ind} className="group flex items-center gap-4 p-4 bg-white/[0.02] hover:bg-white/[0.05] rounded-xl border border-white/[0.05] transition-all duration-300">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                        </div>
                        <span className="text-sm sm:text-base font-medium text-white/90 group-hover:text-white transition-colors">{ind}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-8 py-14 sm:py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs sm:text-sm font-semibold mb-6">
                <span className="material-symbols-outlined text-[16px]">business_center</span>
                Core Offerings
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-headline mb-4 tracking-tight text-white">Our Services in Rajkot</h2>
              <p className="text-on-surface-variant text-sm sm:text-base max-w-2xl mx-auto font-medium">Targeted digital solutions designed to accelerate growth in the local ecosystem.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map(({ icon, title, desc, items, href }: { icon: string; title: string; desc: string; items: string[]; href: string; }) => (
                <Link href={href} key={title} className="group relative bg-surface-container p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col overflow-hidden hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-[40px] rounded-full group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none"></div>
                  
                  <div className="w-12 h-12 bg-white/[0.03] border border-white/10 rounded-[14px] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                    <span className="material-symbols-outlined text-white/80 group-hover:text-primary text-[22px]">{icon}</span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
                  
                  <p className="text-sm text-white/50 leading-[1.8] mb-5 flex-grow line-clamp-3 group-hover:text-white/70 transition-colors">
                    {desc}
                  </p>
                  
                  <div className="space-y-2.5 mb-6">
                    {items.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-white/60">
                        <span className="material-symbols-outlined text-primary/50 text-[16px] shrink-0 mt-0.5">check</span>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-5 border-t border-white/5 flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                    Explore Service <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Local Areas Grid & Trust Elements */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              
              {/* Trust Section */}
              <div className="h-full flex flex-col justify-center">
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">Why Choose Veyber in Rajkot?</h2>
                <p className="text-on-surface-variant leading-relaxed mb-8">We are not a remote, disconnected agency. We understand the fabric of the city's business dynamics.</p>
                
                <div className="space-y-4 mb-8">
                  <ul className="space-y-4">
                    {[
  "Rajkot market calibration — strategies built for SME and industrial business needs",
  "Google Ads and marketplace management — the two highest-ROI channels for Rajkot businesses",
  "Lower competition advantage — your digital investment goes further here right now",
  "End-to-end service — eCommerce, marketplaces, ads, and SEO in one team",
  "Affordable for SMEs — real results without big-agency pricing"
].map((text) => (
                      <li key={text} className="flex items-start gap-4 p-4 bg-surface-container rounded-xl border border-outline-variant/10">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-primary text-[16px]">done</span>
                        </div>
                        <span className="font-semibold text-white text-sm leading-relaxed">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Areas List */}
              <div className="bg-surface-container rounded-3xl border border-primary/20 p-6 sm:p-10 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[50px] rounded-full pointer-events-none"/>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-[28px]">push_pin</span>
                </div>
                <h3 className="text-2xl font-bold font-headline mb-3 text-white">Areas We Serve in Rajkot</h3>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                  We provide digital solutions across all major locations, helping you dominate local searches and reach clients nearby.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {locations.map((area) => (
                    <span key={area} className="px-3 py-1.5 bg-surface-container-high text-xs font-semibold text-white/80 rounded-md border border-outline-variant/10 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-primary text-sm font-bold border-t border-outline-variant/10 pt-4 relative z-10 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  We cover entire Rajkot and nearby areas.
                </p>
              </div>

            </div>
          </div>
        </section>

        <ProcessSection
          title="Our Process"
          description="Strategic workflows fine-tuned for our local Rajkot clients."
          steps={process}
        />

        {/* Results */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-3">Results You Can Expect</h2>
            <p className="text-on-surface-variant text-sm mb-10 max-w-lg mx-auto">Tangible improvement metrics directly impacting your bottom line.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {results.map(({ icon, stat, label }) => (
                <div key={label} className="flex-1 min-w-[140px] max-w-[200px] bg-surface-container rounded-2xl border border-outline-variant/10 p-5 sm:p-7 flex flex-col items-center gap-3 hover:border-primary/25 hover:bg-surface-container-high transition-all duration-200">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[22px]">{icon}</span>
                  </div>
                  <p className="text-xl font-black text-primary text-center leading-tight">{stat}</p>
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
              <p className="text-on-surface-variant text-sm">Got questions about working with our local team?</p>
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
                Let's Grow Your Business in Rajkot
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
                Ready to scale your business in Rajkot?
              </h2>
              <p className="text-base sm:text-lg text-white/75 mb-8 max-w-xl mx-auto leading-relaxed drop-shadow">
                Contact Veyber today for expert, locally-tailored digital marketing services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-3.5 sm:py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black rounded-full text-base sm:text-lg shadow-2xl hover:shadow-primary/40 transition-all active:scale-95 group">
                  Contact Us Now
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
