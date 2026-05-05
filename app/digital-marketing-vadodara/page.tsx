import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Vadodara | SEO, eCommerce & Google Ads – Veyber',
  description: 'Veyber is Vadodara\'s local digital marketing agency offering SEO, eCommerce development, Google Ads, Meta Ads, and marketplace account management. Serving businesses across Alkapuri, Fatehgunj, Gotri, Karelibaug & all of Vadodara.',
  keywords: 'digital marketing services in Vadodara, digital marketing agency Vadodara, SEO company Vadodara, eCommerce development Vadodara, Google Ads agency Vadodara, digital marketing Baroda, SEO services Vadodara Baroda, social media marketing Vadodara, Amazon account management Vadodara, Meta ads agency Vadodara, website development Vadodara, best digital marketing agency in Vadodara for small business, SEO company near me in Vadodara, eCommerce website development in Vadodara Gujarat, Google Ads agency in Vadodara for lead generation, Amazon Flipkart account management Vadodara, digital marketing services in Baroda Gujarat',
};

const pageSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"Veyber","url":"https://veyber.co.in","logo":"https://veyber.co.in/logo.png","telephone":["+916355183655","+917202061270","+918238757883"],"email":"veyberservicespvtltd@gmail.com","address":{"@type":"PostalAddress","streetAddress":"310, Maa Darshan Flats, Nr. Panchvati, Ajwa Road","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390019","addressCountry":"IN"},"areaServed":[{"@type":"City","name":"Vadodara, Gujarat"},{"@type":"State","name":"Gujarat"}],"description":"Veyber is a Vadodara-based digital marketing agency offering SEO, eCommerce development, Google Ads, Meta Ads, social media marketing, and marketplace account management for businesses across Vadodara and Gujarat.","hasOfferCatalog":{"@type":"OfferCatalog","name":"Digital Marketing Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"SEO Services"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Google Ads Management"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Meta Ads (Facebook & Instagram)"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"eCommerce Website Development"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Amazon & Flipkart Account Management"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Social Media Marketing"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Website Hosting"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"DevOps & Deployment"}}]}};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Veyber have an office in Vadodara?","acceptedAnswer":{"@type":"Answer","text":"Yes. Veyber is based in Vadodara at 310, Maa Darshan Flats, Nr. Panchvati, Ajwa Road, Vadodara 390019. You can reach us at +91 6355183655, +91 7202061270, or +91 8238757883, or email us at veyberservicespvtltd@gmail.com. We serve businesses across all areas of Vadodara including Alkapuri, Fatehgunj, Karelibaug, Manjalpur, Gotri, and more."}},{"@type":"Question","name":"Which Vadodara businesses benefit most from SEO?","acceptedAnswer":{"@type":"Answer","text":"Businesses across manufacturing, healthcare, education, real estate, eCommerce, and professional services in Vadodara see strong SEO results. Vadodara also uses both the names 'Vadodara' and 'Baroda' in searches — we build strategies that capture both, effectively doubling your local keyword coverage compared to agencies that target only one name."}},{"@type":"Question","name":"Can you help a local business in Vadodara get more inquiries from Google?","acceptedAnswer":{"@type":"Answer","text":"Yes. Local SEO is one of our core services. We optimize your Google Business Profile, build citations on Gujarat-specific directories like JustDial and Sulekha, create neighborhood-level landing pages for areas like Alkapuri, Fatehgunj, and Gotri, and target high-intent searches like 'near me' queries that bring customers who are ready to call or visit."}},{"@type":"Question","name":"How is Veyber different from other digital marketing agencies in Vadodara?","acceptedAnswer":{"@type":"Answer","text":"Veyber is a Vadodara-based agency that combines eCommerce development, marketplace account management (Amazon, Flipkart, Meesho), digital marketing, and web services under one roof. Most local agencies do only one or two of these. For businesses that sell products both through their own website and on marketplaces, having one team managing the entire digital presence produces significantly better results than working with multiple vendors."}},{"@type":"Question","name":"Do you offer eCommerce services specifically for Vadodara businesses?","acceptedAnswer":{"@type":"Answer","text":"Yes. We build Shopify, WooCommerce, and custom MERN stack eCommerce stores for businesses in Vadodara and manage Amazon, Flipkart, and Meesho accounts. For a Vadodara business selling locally and wanting to expand nationally through marketplaces, this combination of a well-built online store plus optimized marketplace listings is the most effective growth path."}}]};

const services = [
  {
    "icon": "search",
    "title": "SEO — Get Found on Google in Vadodara and Baroda",
    "desc": "Vadodara has a unique local SEO advantage: the city is searched under both 'Vadodara' and 'Baroda' — two names with overlapping but distinct search audiences. We build keyword strategies that capture both, targeting area-level searches like 'digital marketing agency Alkapuri', 'eCommerce website developer Fatehgunj', and 'SEO company near Sayajigunj'. We also optimize your Google Business Profile, build local citations on Gujarat directories, and create neighborhood-level content that ranks for hyperlocal searches.",
    "items": [
      "Local SEO",
      "Keyword Strategy",
      "Google Business Profile"
    ],
    "href": "/seo"
  },
  {
    "icon": "shopping_cart",
    "title": "eCommerce Website Development",
    "desc": "We build Shopify, WooCommerce, and custom MERN stack eCommerce stores for Vadodara businesses — whether you are a manufacturer wanting to sell directly to consumers, a retailer going online for the first time, or a brand scaling up from a marketplace to your own D2C store. Every store we build is mobile-first, fast-loading, payment-gateway-integrated, and SEO-ready from day one.",
    "items": [
      "Shopify",
      "WooCommerce",
      "Custom D2C Stores"
    ],
    "href": "/ecommerce-development"
  },
  {
    "icon": "storefront",
    "title": "eCommerce Account Management",
    "desc": "For Vadodara businesses selling physical products, marketplace presence is non-negotiable. We set up and manage Amazon, Flipkart, and Meesho accounts — handling product listing optimization, catalog management, PPC advertising on the marketplace, and inventory management. Optimized marketplace listings combined with a well-built own website is the combination that grows product businesses fastest.",
    "items": [
      "Amazon",
      "Flipkart",
      "Meesho"
    ],
    "href": "/account-management"
  },
  {
    "icon": "ads_click",
    "title": "Google Ads",
    "desc": "Vadodara's competitive business landscape means that for many categories — real estate, healthcare, education, services — Google Ads is the fastest way to generate qualified leads. We run Search Ads targeting people in Vadodara and Baroda actively searching for your service, Display Ads for brand awareness, and remarketing campaigns for visitors who did not convert. Every rupee is tracked to an outcome.",
    "items": [
      "Search Ads",
      "Display Ads",
      "Remarketing"
    ],
    "href": "/google-ads"
  },
  {
    "icon": "hub",
    "title": "Meta Ads — Facebook & Instagram",
    "desc": "Vadodara has a strong and active Facebook and Instagram user base. We run Meta Ads campaigns for local businesses targeting people in specific Vadodara neighborhoods — Gotri, Karelibaug, Manjalpur, Waghodia Road — with lead generation ads, offer promotions, and product catalog ads for eCommerce brands.",
    "items": [
      "Lead Generation",
      "Offer Promotions",
      "Catalog Ads"
    ],
    "href": "/meta-ads"
  },
  {
    "icon": "share",
    "title": "Social Media Marketing",
    "desc": "We create and manage Instagram and Facebook accounts for Vadodara businesses — content planning, regular posting, community engagement, and paid promotion. For local businesses in Vadodara, a consistent and professional social media presence builds the trust that converts followers into customers.",
    "items": [
      "Content Planning",
      "Community Engagement",
      "Paid Promotion"
    ],
    "href": "/social-media-handling"
  }
];

const process = [
  { n: '01', label: 'Business Understanding', desc: 'Deep dive into your business model and target audience.' },
  { n: '02', label: 'Market Analysis', desc: 'Conducting Vadodara-focused competitor analysis & research.' },
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
    "q": "Does Veyber have an office in Vadodara?",
    "a": "Yes. Veyber is based in Vadodara 390019. You can reach us at +91 6355183655, +91 7202061270, or +91 8238757883, or email us at veyberservicespvtltd@gmail.com. We serve businesses across all areas of Vadodara including Alkapuri, Fatehgunj, Karelibaug, Manjalpur, Gotri, and more."
  },
  {
    "q": "Which Vadodara businesses benefit most from SEO?",
    "a": "Businesses across manufacturing, healthcare, education, real estate, eCommerce, and professional services in Vadodara see strong SEO results. Vadodara also uses both the names 'Vadodara' and 'Baroda' in searches — we build strategies that capture both, effectively doubling your local keyword coverage compared to agencies that target only one name."
  },
  {
    "q": "Can you help a local business in Vadodara get more inquiries from Google?",
    "a": "Yes. Local SEO is one of our core services. We optimize your Google Business Profile, build citations on Gujarat-specific directories like JustDial and Sulekha, create neighborhood-level landing pages for areas like Alkapuri, Fatehgunj, and Gotri, and target high-intent searches like 'near me' queries that bring customers who are ready to call or visit."
  },
  {
    "q": "How is Veyber different from other digital marketing agencies in Vadodara?",
    "a": "Veyber is a Vadodara-based agency that combines eCommerce development, marketplace account management (Amazon, Flipkart, Meesho), digital marketing, and web services under one roof. Most local agencies do only one or two of these. For businesses that sell products both through their own website and on marketplaces, having one team managing the entire digital presence produces significantly better results than working with multiple vendors."
  },
  {
    "q": "Do you offer eCommerce services specifically for Vadodara businesses?",
    "a": "Yes. We build Shopify, WooCommerce, and custom MERN stack eCommerce stores for businesses in Vadodara and manage Amazon, Flipkart, and Meesho accounts. For a Vadodara business selling locally and wanting to expand nationally through marketplaces, this combination of a well-built online store plus optimized marketplace listings is the most effective growth path."
  }
];

const locations = [
  "Alkapuri",
  "Fatehgunj",
  "Sayajigunj",
  "Karelibaug",
  "Nizampura",
  "Gotri",
  "Subhanpura",
  "Waghodia Road",
  "Ajwa Road",
  "Manjalpur",
  "Makarpura",
  "Tarsali",
  "Harni",
  "Sama",
  "New VIP Road",
  "Chhani",
  "Gorwa",
  "Akota",
  "Entire Vadodara and nearby areas"
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
              Vadodara's local digital marketing agency
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
              Digital Marketing Services<br /><span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{filter:'drop-shadow(0 0 28px rgba(174,198,255,0.3))'}}>In Vadodara</span>
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-4 leading-relaxed font-semibold text-primary">
              Built here. Focused on your growth.
            </p>
            <div className="max-w-3xl mx-auto mb-16 relative group mt-8 text-center sm:text-left">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-[1.5rem] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 pointer-events-none"></div>
              <div className="relative p-5 sm:p-8 bg-surface-container/40 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left shadow-2xl">
                <span className="material-symbols-outlined text-primary text-[28px] mb-4 opacity-80">public</span>
                <div className="text-sm sm:text-base leading-[1.8] font-medium max-w-2xl">
                  {(() => {
                    const text = `Veyber is headquartered in Vadodara at Ajwa Road — and when we say we understand the Vadodara market, we mean it from the inside. We know that your customers search for you as both 'Vadodara' and 'Baroda'. We know the difference between marketing to a manufacturer in Makarpura versus a retailer in Alkapuri. And we know that most businesses in this city are still in the early stages of their digital presence — which means the opportunity to get ahead of your competition right now is very real. We offer end-to-end digital services for Vadodara businesses — from building your eCommerce website and managing your Amazon and Flipkart accounts, to running your SEO, Google Ads, Meta Ads, and social media. One team, one strategy, one point of contact.`;
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
                  Why Vadodara Businesses Need Digital Marketing in 2025
                </h2>
                <div className="text-sm sm:text-base text-on-surface-variant leading-[1.8] font-medium space-y-4">
                  {(() => {
                    const text = `Vadodara is Gujarat's third-largest city and one of its most commercially active — home to ONGC, GSFC, L&T, a large MSME manufacturing sector, MS University, and one of the state's most active retail economies. The city's business ecosystem is diverse, competitive, and increasingly digital. Search data shows that 'digital marketing agency Vadodara' gets over 1,300 searches per month — and that number grows every year as more Vadodara businesses realize that Google, Instagram, and marketplaces like Amazon and Flipkart are now where their customers find them first, not word of mouth or JustDial alone. Businesses that build a strong digital presence in Vadodara right now are claiming first-mover advantage in their category. The window is open — but it will not stay open indefinitely.`;
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
                  <h3 className="text-xl sm:text-2xl font-bold font-headline text-white mb-6 relative z-10">Who We Work With in Vadodara</h3>
                  <div className="flex flex-col gap-3 relative z-10 w-full">
                    {[
  "Manufacturing and industrial businesses in Makarpura and Gorwa",
  "Retail and eCommerce businesses selling on Amazon, Flipkart, or their own store",
  "Service providers — doctors, lawyers, consultants, architects — wanting more Google inquiries",
  "Startups and entrepreneurs building their first digital presence",
  "Educational institutions and coaching institutes targeting Vadodara students",
  "Real estate developers and agents targeting buyers in Vadodara"
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-headline mb-4 tracking-tight text-white">Our Services in Vadodara</h2>
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
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">Why Choose Veyber in Vadodara?</h2>
                <p className="text-on-surface-variant leading-relaxed mb-8">We are not a remote, disconnected agency. We understand the fabric of the city's business dynamics.</p>
                
                <div className="space-y-4 mb-8">
                  <ul className="space-y-4">
                    {[
  "We are physically here — Vadodara 390019",
  "Vadodara + Baroda dual-name keyword strategy — we capture both search audiences",
  "End-to-end services — eCommerce, marketplaces, SEO, ads, and social under one roof",
  "Affordable for local SMEs — real results without big-agency overhead",
  "Direct communication — no account manager chain, you talk to the team doing the work"
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
                <h3 className="text-2xl font-bold font-headline mb-3 text-white">Areas We Serve in Vadodara</h3>
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
                  We cover entire Vadodara and nearby areas.
                </p>
              </div>

            </div>
          </div>
        </section>

        <ProcessSection
          title="Our Process"
          description="Strategic workflows fine-tuned for our local Vadodara clients."
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
                Let's Grow Your Business in Vadodara
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
                Ready to scale your business in Vadodara?
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
