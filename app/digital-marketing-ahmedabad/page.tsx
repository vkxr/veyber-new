import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Ahmedabad | SEO, Google Ads & eCommerce – Veyber',
  description: 'Veyber offers SEO, Google Ads, Meta Ads, eCommerce development, and marketplace management for businesses in Ahmedabad. Data-driven strategies built for Gujarat\'s most competitive digital market.',
  keywords: 'digital marketing services Ahmedabad, SEO company Ahmedabad, Google Ads agency Ahmedabad, eCommerce development Ahmedabad, digital marketing agency Gujarat, Meta ads Ahmedabad, social media marketing Ahmedabad, Amazon account management Ahmedabad, Shopify development Ahmedabad, PPC agency Ahmedabad, online marketing company Ahmedabad, best digital marketing agency in Ahmedabad for startups, SEO company in Ahmedabad for eCommerce, Google Ads management for small business Ahmedabad, Shopify development company in Ahmedabad Gujarat, affordable digital marketing services Ahmedabad',
};

const pageSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"Veyber","url":"https://veyber.co.in","logo":"https://veyber.co.in/logo.png","telephone":["+916355183655","+917202061270","+918238757883"],"email":"veyberservicespvtltd@gmail.com","address":{"@type":"PostalAddress","streetAddress":"310, Maa Darshan Flats, Nr. Panchvati, Ajwa Road","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390019","addressCountry":"IN"},"areaServed":[{"@type":"City","name":"Ahmedabad, Gujarat"},{"@type":"State","name":"Gujarat"}],"description":"Veyber provides digital marketing services in Ahmedabad including SEO, Google Ads, Meta Ads, eCommerce development, and Amazon and Flipkart account management for businesses across Ahmedabad and Gujarat.","hasOfferCatalog":{"@type":"OfferCatalog","name":"Digital Marketing Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"SEO Services"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Google Ads Management"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Meta Ads (Facebook & Instagram)"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"eCommerce Website Development"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Amazon & Flipkart Account Management"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Social Media Marketing"}}]}};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Veyber provide digital marketing services in Ahmedabad?","acceptedAnswer":{"@type":"Answer","text":"Yes. Veyber serves businesses across Ahmedabad with SEO, Google Ads, Meta Ads, eCommerce development, and social media marketing. Our team is based in Vadodara and works with Ahmedabad clients remotely and on-site. You can reach us at +91 6355183655 or veyberservicespvtltd@gmail.com for a free consultation."}},{"@type":"Question","name":"How competitive is digital marketing in Ahmedabad?","acceptedAnswer":{"@type":"Answer","text":"Ahmedabad is Gujarat's most competitive digital market — home to the highest concentration of established agencies in the state. This means ranking for broad keywords like 'digital marketing Ahmedabad' is difficult. However, industry-specific and service-specific keywords like 'eCommerce SEO company Ahmedabad' or 'Google Ads for startups Ahmedabad' have lower competition and strong search intent. We build strategies that target these pockets of opportunity."}},{"@type":"Question","name":"Can you run Google Ads for my Ahmedabad business?","acceptedAnswer":{"@type":"Answer","text":"Yes. Google Ads is one of our core services and works exceptionally well in Ahmedabad's competitive market where organic rankings take longer to build. We run Search, Display, Shopping, and Remarketing campaigns — all with precise location targeting for Ahmedabad. We track every campaign to cost per lead so you know exactly what your ad spend is generating."}},{"@type":"Question","name":"Do you help Ahmedabad eCommerce brands grow on marketplaces?","acceptedAnswer":{"@type":"Answer","text":"Yes. We manage Amazon, Flipkart, and Meesho accounts for product businesses in Ahmedabad — handling listing optimization, catalog management, and PPC advertising within each marketplace. For Ahmedabad brands with a D2C ambition, we also build Shopify and WooCommerce stores that complement marketplace presence with a direct sales channel."}},{"@type":"Question","name":"How long does SEO take for an Ahmedabad business?","acceptedAnswer":{"@type":"Answer","text":"In Ahmedabad's competitive market, broad keywords like 'digital marketing agency Ahmedabad' take 6 to 9 months to rank for. Industry-specific and long-tail keywords move faster — often showing first-page results within 3 to 4 months. We prioritize quick wins on lower-competition keywords first, building authority progressively toward the more competitive terms."}}]};

const services = [
  {
    "icon": "ads_click",
    "title": "Google Ads — Immediate Leads in Ahmedabad's Competitive Market",
    "desc": "In a city as competitive as Ahmedabad, Google Ads is often the fastest and most reliable path to qualified leads — especially for service businesses in real estate, healthcare, education, and professional services. We run Search Ads targeting high-intent Ahmedabad searches, Display Ads across the Google network for brand awareness, and Remarketing to bring back visitors who showed interest but did not convert. Campaigns are structured to minimize wasted spend and maximize cost per lead efficiency.",
    "items": [
      "Search Ads",
      "Display Ads",
      "Remarketing"
    ],
    "href": "/google-ads"
  },
  {
    "icon": "search",
    "title": "SEO — Build Long-Term Organic Dominance",
    "desc": "SEO in Ahmedabad requires patience and precision. We start with keyword research that identifies the specific industry-level and locality-level queries your target customers use — 'eCommerce agency Satellite Ahmedabad', 'Google Ads company Prahlad Nagar', 'Shopify developer Ahmedabad' — and build content and authority around those terms progressively. Ahmedabad's dual identity as both a traditional business city and a modern startup hub means there are keyword opportunities across both audiences.",
    "items": [
      "Local SEO",
      "Keyword Strategy",
      "Content Writing"
    ],
    "href": "/seo"
  },
  {
    "icon": "shopping_cart",
    "title": "eCommerce Development for Ahmedabad Brands",
    "desc": "Ahmedabad has a growing D2C brand culture — particularly in fashion, food, handicrafts, and consumer goods. We build Shopify, WooCommerce, and custom eCommerce stores for Ahmedabad brands that want a professional, fast, and conversion-optimized online store. Every store we build is SEO-ready, mobile-first, and integrated with payment gateways like Razorpay and Stripe.",
    "items": [
      "Shopify",
      "WooCommerce",
      "Custom Development"
    ],
    "href": "/ecommerce-development"
  },
  {
    "icon": "storefront",
    "title": "eCommerce Account Management",
    "desc": "For Ahmedabad product businesses selling on marketplaces, listing quality and PPC management within the marketplace directly determine your ranking and sales volume. We optimize product listings, manage catalog structure, run Sponsored Product campaigns on Amazon and Flipkart, and track performance metrics monthly to continuously improve your marketplace presence.",
    "items": [
      "Amazon",
      "Flipkart",
      "Meesho"
    ],
    "href": "/account-management"
  },
  {
    "icon": "hub",
    "title": "Meta Ads — Facebook & Instagram",
    "desc": "Ahmedabad's consumer base is active on Instagram and Facebook — particularly in areas like Bopal, Satellite, and Navrangpura. We run Meta Ads campaigns for Ahmedabad businesses with precise location targeting, interest and behavior-based audience segmentation, and lead generation ads that collect WhatsApp and call inquiries directly inside the app. For D2C brands, we run catalog ads and retargeting that bring back shoppers who browsed but did not purchase.",
    "items": [
      "Lead Generation Ads",
      "Catalog Ads",
      "Retargeting"
    ],
    "href": "/meta-ads"
  },
  {
    "icon": "share",
    "title": "Social Media Marketing",
    "desc": "We create and manage Instagram and Facebook presence for Ahmedabad businesses — building brand identity through consistent, high-quality content and growing an audience that converts. For Ahmedabad's startup and brand market, a strong social media presence is often the first thing a potential customer evaluates before deciding to reach out.",
    "items": [
      "Content Planning",
      "Community Growth",
      "Brand Identity"
    ],
    "href": "/social-media-handling"
  }
];

const process = [
  { n: '01', label: 'Business Understanding', desc: 'Deep dive into your business model and target audience.' },
  { n: '02', label: 'Market Analysis', desc: 'Conducting Ahmedabad-focused competitor analysis & research.' },
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
    "q": "Does Veyber provide digital marketing services in Ahmedabad?",
    "a": "Yes. Veyber serves businesses across Ahmedabad with SEO, Google Ads, Meta Ads, eCommerce development, and social media marketing. Our team is based in Vadodara and works with Ahmedabad clients remotely and on-site. You can reach us at +91 6355183655 or veyberservicespvtltd@gmail.com for a free consultation."
  },
  {
    "q": "How competitive is digital marketing in Ahmedabad?",
    "a": "Ahmedabad is Gujarat's most competitive digital market — home to the highest concentration of established agencies in the state. This means ranking for broad keywords like 'digital marketing Ahmedabad' is difficult. However, industry-specific and service-specific keywords like 'eCommerce SEO company Ahmedabad' or 'Google Ads for startups Ahmedabad' have lower competition and strong search intent. We build strategies that target these pockets of opportunity."
  },
  {
    "q": "Can you run Google Ads for my Ahmedabad business?",
    "a": "Yes. Google Ads is one of our core services and works exceptionally well in Ahmedabad's competitive market where organic rankings take longer to build. We run Search, Display, Shopping, and Remarketing campaigns — all with precise location targeting for Ahmedabad. We track every campaign to cost per lead so you know exactly what your ad spend is generating."
  },
  {
    "q": "Do you help Ahmedabad eCommerce brands grow on marketplaces?",
    "a": "Yes. We manage Amazon, Flipkart, and Meesho accounts for product businesses in Ahmedabad — handling listing optimization, catalog management, and PPC advertising within each marketplace. For Ahmedabad brands with a D2C ambition, we also build Shopify and WooCommerce stores that complement marketplace presence with a direct sales channel."
  },
  {
    "q": "How long does SEO take for an Ahmedabad business?",
    "a": "In Ahmedabad's competitive market, broad keywords like 'digital marketing agency Ahmedabad' take 6 to 9 months to rank for. Industry-specific and long-tail keywords move faster — often showing first-page results within 3 to 4 months. We prioritize quick wins on lower-competition keywords first, building authority progressively toward the more competitive terms."
  }
];

const locations = [
  "Satellite",
  "Bopal",
  "Prahlad Nagar",
  "Navrangpura",
  "Maninagar",
  "SG Highway",
  "Vastrapur",
  "Thaltej",
  "Chandkheda",
  "Gota",
  "Naranpura",
  "Bodakdev",
  "Entire Ahmedabad"
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
              Gujarat's largest business city.
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
              Digital Marketing Services<br /><span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{filter:'drop-shadow(0 0 28px rgba(174,198,255,0.3))'}}>In Ahmedabad</span>
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-4 leading-relaxed font-semibold text-primary">
              More competition, more opportunity — if your strategy is right.
            </p>
            <div className="max-w-3xl mx-auto mb-16 relative group mt-8 text-center sm:text-left">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-[1.5rem] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 pointer-events-none"></div>
              <div className="relative p-5 sm:p-8 bg-surface-container/40 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left shadow-2xl">
                <span className="material-symbols-outlined text-primary text-[28px] mb-4 opacity-80">public</span>
                <div className="text-sm sm:text-base leading-[1.8] font-medium max-w-2xl">
                  {(() => {
                    const text = `Ahmedabad is Gujarat's commercial capital and one of India's fastest-growing metropolitan economies — home to a dense ecosystem of startups, eCommerce brands, manufacturing companies, real estate developers, and corporate enterprises. It is also Gujarat's most competitive digital market, with more established agencies, more businesses investing in SEO and paid ads, and higher click costs than any other city in the state. That competitive intensity is actually an opportunity for businesses that build their digital presence correctly — because the ceiling for growth is also higher. Veyber brings the same data-driven, ROI-focused approach we use in Vadodara to Ahmedabad's market — with strategies calibrated for Ahmedabad's search behavior, industry mix, and competitive landscape.`;
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
                  Ahmedabad's Digital Landscape in 2025
                </h2>
                <div className="text-sm sm:text-base text-on-surface-variant leading-[1.8] font-medium space-y-4">
                  {(() => {
                    const text = `Ahmedabad businesses are searching for digital marketing services, SEO, and eCommerce solutions at volume. The city's startup ecosystem — centered around SG Highway, Prahlad Nagar, and GIFT City — creates consistent demand for performance marketing, Google Ads, and lead generation. Its established manufacturing and export base creates demand for B2B SEO and marketplace account management. Its growing D2C brand culture creates demand for Meta Ads and eCommerce development. The challenge in Ahmedabad is that competition for digital marketing keywords is high. The solution is a layered approach: target lower-competition, high-intent long-tail keywords first, build domain authority through consistent content and link building, and run Google Ads for immediate lead generation while the SEO compounds.`;
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
                  <h3 className="text-xl sm:text-2xl font-bold font-headline text-white mb-6 relative z-10">Who We Work With in Ahmedabad</h3>
                  <div className="flex flex-col gap-3 relative z-10 w-full">
                    {[
  "Startups and tech companies in the SG Highway and Prahlad Nagar corridors",
  "eCommerce brands scaling D2C sales through Shopify or marketplaces",
  "Manufacturing and export businesses targeting B2B leads on Google",
  "Real estate developers and agencies running lead generation campaigns",
  "Healthcare clinics and hospitals targeting patients in specific Ahmedabad localities",
  "Professional services — CAs, lawyers, consultants — wanting more organic inquiries"
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-headline mb-4 tracking-tight text-white">Our Services in Ahmedabad</h2>
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
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">Why Choose Veyber in Ahmedabad?</h2>
                <p className="text-on-surface-variant leading-relaxed mb-8">We are not a remote, disconnected agency. We understand the fabric of the city's business dynamics.</p>
                
                <div className="space-y-4 mb-8">
                  <ul className="space-y-4">
                    {[
  "Ahmedabad market calibration — we account for higher competition and adjust strategy accordingly",
  "Google Ads expertise — fastest path to leads in a competitive market",
  "eCommerce and marketplace management in one team",
  "Long-tail SEO approach — rank on lower-competition keywords first, build toward broad terms",
  "Transparent monthly reporting — you always know what your budget is producing"
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
                <h3 className="text-2xl font-bold font-headline mb-3 text-white">Areas We Serve in Ahmedabad</h3>
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
                  We cover entire Ahmedabad and nearby areas.
                </p>
              </div>

            </div>
          </div>
        </section>

        <ProcessSection
          title="Our Process"
          description="Strategic workflows fine-tuned for our local Ahmedabad clients."
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
                Let's Grow Your Business in Ahmedabad
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
                Ready to scale your business in Ahmedabad?
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
