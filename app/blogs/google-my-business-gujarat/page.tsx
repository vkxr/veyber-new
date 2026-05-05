import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Google My Business for Small Business in Gujarat — Complete Guide 2026 | Veyber',
  description:
    'Learn why every small business in Gujarat needs Google My Business. Real benefits for businesses in Ahmedabad, Surat, Vadodara & Rajkot — explained simply.',
  keywords:
    'Google My Business Gujarat, GMB for small business, Google Business Profile, local SEO Gujarat, Google Maps listing India, Ahmedabad, Surat, Vadodara, Rajkot',
  alternates: {
    canonical: 'https://veyber.co.in/blogs/google-my-business-gujarat',
  },
  openGraph: {
    type: 'article',
    title:
      "Google My Business for Small Business in Gujarat — Why You Can't Afford to Ignore It",
    description:
      "Thousands of customers in Gujarat search Google every day for businesses like yours. If you're not on Google My Business, they're finding your competitors instead.",
    url: 'https://veyber.co.in/blogs/google-my-business-gujarat',
    siteName: 'Veyber Services Pvt. Ltd.',
    locale: 'en_IN',
    publishedTime: '2026-05-01T09:00:00+05:30',
    modifiedTime: '2026-05-01T09:00:00+05:30',
    authors: ['Veyber Services Pvt. Ltd.'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google My Business for Small Business in Gujarat — Why It Matters',
    description:
      "Is your business invisible on Google? Here's why every shop, clinic, and service business in Gujarat needs Google My Business — and what you're losing without it.",
  },
};

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      '@id': 'https://veyber.co.in/blogs/google-my-business-gujarat#article',
      headline:
        "Google My Business for Small Business in Gujarat — Why You Can't Afford to Ignore It",
      description:
        'Learn why every small business in Gujarat needs Google My Business. Understand the real benefits, how it works, and why businesses in Ahmedabad, Surat, Vadodara & Rajkot are missing customers without it.',
      url: 'https://veyber.co.in/blogs/google-my-business-gujarat',
      datePublished: '2026-05-01T09:00:00+05:30',
      dateModified: '2026-05-01T09:00:00+05:30',
      author: {
        '@type': 'Organization',
        name: 'Veyber Services Pvt. Ltd.',
        url: 'https://veyber.co.in',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Veyber Services Pvt. Ltd.',
        url: 'https://veyber.co.in',
        logo: {
          '@type': 'ImageObject',
          url: 'https://veyber.co.in/veyber-logo.png',
        },
      },
      keywords: [
        'Google My Business Gujarat',
        'GMB for small business',
        'Google Business Profile',
        'local SEO Gujarat',
        'Ahmedabad',
        'Surat',
        'Vadodara',
        'Rajkot',
      ],
      articleSection: 'Digital Marketing',
      wordCount: 2844,
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://veyber.co.in/blogs/google-my-business-gujarat#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://veyber.co.in' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://veyber.co.in/blogs',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Google My Business for Small Business in Gujarat',
          item: 'https://veyber.co.in/blogs/google-my-business-gujarat',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://veyber.co.in/blogs/google-my-business-gujarat#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Google My Business kya hota hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Google My Business (ab isko Google Business Profile kehte hain) aapke business ko Google Search aur Google Maps par dikhata hai. Jab koi aapke area mein aapki jaisi service dhundta hai, to aapka naam, number, rating, aur address seedha Google par show hota hai.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to appear on Google Maps after setting up GMB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After your profile is verified, it typically appears on Google Maps within 3 to 7 days. Verification itself takes anywhere from 24 hours to 14 days depending on the method chosen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which businesses in Gujarat need GMB the most?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Any business that serves local customers needs GMB. The businesses that see the most immediate impact are restaurants, clinics, salons, coaching centres, home services (plumbers, electricians), and retail shops.',
          },
        },
        {
          '@type': 'Question',
          name: 'Business Google Maps par kyun nahi dikhta?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Iske teen main reasons hote hain: (1) aapne abhi tak GMB profile banaya hi nahi hai, (2) profile bana hua hai lekin verify nahi hua hai, ya (3) profile incomplete hai — koi photo nahi, koi update nahi, galat information.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a website to set up Google My Business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. You can set up a Google Business Profile without a website. For many small businesses — especially shops, clinics, and service providers — the GMB profile alone is sufficient to start generating calls and walk-ins.',
          },
        },
      ],
    },
  ],
};

const faqItems = [
  {
    q: 'Google My Business kya hota hai?',
    a: "Google My Business (officially called Google Business Profile) aapke business ko Google Search aur Google Maps par dikhata hai. Jab koi aapke area mein aapki jaisi service dhundta hai, to aapka naam, number, rating, aur address seedha Google par show hota hai — bina kisi website ke bhi.",
  },
  {
    q: 'How long does it take to appear on Google Maps after setting up GMB?',
    a: 'After your profile is verified, it typically appears on Google Maps within 3 to 7 days. Verification itself takes anywhere from 24 hours to 14 days depending on the method chosen. Once live, your profile can start appearing in local search results almost immediately, though climbing into the Local Pack (top 3) takes consistent optimisation over weeks and months.',
  },
  {
    q: 'Which businesses in Gujarat need GMB the most?',
    a: "Any business that serves local customers needs GMB. The businesses that see the most immediate impact are those in competitive local categories: restaurants, clinics, salons, coaching centres, home services (plumbers, electricians), and retail shops. These are categories where customers decide based on Google ratings and proximity, making a strong GMB profile directly tied to daily revenue.",
  },
  {
    q: 'Business Google Maps par kyun nahi dikhta?',
    a: "Iske teen main reasons hote hain: (1) aapne abhi tak GMB profile banaya hi nahi hai, (2) profile bana hua hai lekin verify nahi hua hai, ya (3) profile incomplete hai — koi photo nahi, koi update nahi, galat information. Teeno problems ka solution ek hi hai — ek properly set up aur verified Google Business Profile.",
  },
  {
    q: 'Do I need a website to set up Google My Business?',
    a: "No. You can set up a Google Business Profile without a website. For many small businesses — especially shops, clinics, and service providers — the GMB profile alone is sufficient to start generating calls and walk-ins. A website strengthens your overall online presence, but it is not a requirement to get listed on Google Maps.",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <Navbar />

      <main className="pt-[100px]">
        {/* ── Breadcrumb ── */}
        <nav
          aria-label="Breadcrumb"
          className="px-4 sm:px-8 pt-8 pb-0 max-w-5xl mx-auto"
        >
          <ol className="flex items-center gap-2 text-xs text-on-surface-variant flex-wrap">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <span className="material-symbols-outlined text-[14px] text-outline-variant">
                chevron_right
              </span>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">
              <span className="material-symbols-outlined text-[14px] text-outline-variant">
                chevron_right
              </span>
            </li>
            <li className="text-primary font-medium truncate max-w-[200px] sm:max-w-none">
              Google My Business Gujarat
            </li>
          </ol>
        </nav>

        {/* ── Article Header ── */}
        <header className="px-4 sm:px-8 pt-8 pb-0 max-w-5xl mx-auto">
          <div className="mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[12px]">location_on</span>
              Local SEO
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-headline tracking-tight leading-tight mb-6 max-w-4xl">
            Google My Business for Small Business in Gujarat —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
              Why You Can&apos;t Afford to Ignore It
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-on-surface-variant mb-8 pb-8 border-b border-outline-variant/10">
            <span className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[14px]">
                  business
                </span>
              </div>
              <span>
                By{' '}
                <Link href="/about" className="text-primary font-semibold hover:underline">
                  Veyber Services Pvt. Ltd.
                </Link>
              </span>
            </span>
            <span className="w-1 h-1 rounded-full bg-outline-variant hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px]">calendar_today</span>
              <time dateTime="2026-05-01">May 2026</time>
            </span>
            <span className="w-1 h-1 rounded-full bg-outline-variant hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px]">schedule</span>
              8 min read
            </span>
          </div>
        </header>

        {/* ── Hero Image ── */}
        <div className="px-4 sm:px-8 pb-10 max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <Image
              src="/images/Blog-covers/gmb-blog-1-cover.jpg"
              alt="Google My Business for small businesses in Gujarat — local search visibility"
              width={1024}
              height={576}
              className="w-full h-auto object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
              loading="eager"
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
          </div>
        </div>

        {/* ── Article Body ── */}
        <article className="px-4 sm:px-8 max-w-3xl mx-auto" itemScope itemType="https://schema.org/BlogPosting">

          {/* Intro */}
          <div className="blog-intro mb-10">
            <p className="text-base sm:text-lg text-on-surface leading-relaxed mb-5">
              Every day, thousands of people in Ahmedabad, Surat, Vadodara, and Rajkot open Google
              and search for businesses just like yours. They type &ldquo;best salon near me&rdquo;,
              &ldquo;plumber in Vadodara&rdquo;, &ldquo;coaching centre Surat&rdquo;,
              &ldquo;chartered accountant Ahmedabad&rdquo;. These are people who are ready to buy —
              they just need to find the right business.
            </p>
            <p className="text-base sm:text-lg text-on-surface leading-relaxed mb-5">
              If your business doesn&apos;t appear when they search, they will call the first one
              that does. Not because your competitors are better — but because they&apos;re visible
              and you aren&apos;t.
            </p>
            <p className="text-base sm:text-lg text-on-surface leading-relaxed">
              The tool that makes local businesses visible on Google is called{' '}
              <strong className="text-white font-bold">Google My Business</strong>, now officially
              known as Google Business Profile. It works for every type of local business in
              Gujarat, and not having it is one of the most expensive mistakes a small business
              owner can make.
            </p>
          </div>

          {/* Stat callout */}
          <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-container/10 border border-primary/20">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-4">
              The Numbers That Matter
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { stat: '46%', label: 'of all Google searches have local intent' },
                {
                  stat: '76%',
                  label: 'of local mobile searchers visit a business within 24 hours',
                },
                { stat: '28%', label: 'of local searches result in a purchase' },
              ].map(({ stat, label }) => (
                <div key={stat} className="text-center">
                  <div className="text-3xl sm:text-4xl font-black font-headline text-primary mb-1">
                    {stat}
                  </div>
                  <div className="text-xs text-on-surface-variant leading-relaxed">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-headline mb-5 text-white">
              What Is Google My Business?
            </h2>
            <p className="text-on-surface leading-relaxed mb-5">
              Google My Business, officially rebranded as{' '}
              <strong className="text-white">Google Business Profile</strong> in 2022, is a
              platform by Google that lets businesses control how they appear on Google Search and
              Google Maps.
            </p>
            <p className="text-on-surface leading-relaxed mb-5">
              When you search for a service in a specific area — &ldquo;dentist in Surat&rdquo; or
              &ldquo;restaurant in Vadodara&rdquo; — the first results you see aren&apos;t website
              links. They&apos;re a map with three business listings highlighted below it. This is
              called the <strong className="text-white">Local Pack</strong> or Map Pack. It appears
              before all organic website results. The businesses that appear there are the ones with
              claimed and optimised Google Business Profiles.
            </p>
            <p className="text-on-surface leading-relaxed mb-5">Your GMB listing shows:</p>
            <ul className="space-y-2.5 mb-5">
              {[
                'Business name, address, and phone number',
                'Opening hours including holiday hours',
                'Category and services offered',
                'Customer reviews and star ratings',
                'Photos of your business, products, and team',
                'Posts, offers, and updates',
                'Direct messaging, website link, and booking options',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-on-surface">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mt-0.5">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontSize: '11px' }}
                    >
                      check
                    </span>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-on-surface leading-relaxed">
              For a customer deciding which business to call, this listing is often all the
              information they need. No website visit required.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-headline mb-5 text-white">
              Why Gujarat Businesses Cannot Afford to Be Invisible
            </h2>
            <p className="text-on-surface leading-relaxed mb-5">
              Gujarat has 6.6 crore people and one of the highest smartphone penetration rates in
              India — particularly in urban centres like Ahmedabad, Vadodara and Surat. It also has one of the
              most active and competitive local business ecosystems in the country.
            </p>
            <p className="text-on-surface leading-relaxed mb-5">
              Whether you operate a retail shop in Manek Chowk, a clinic in Satellite Ahmedabad, a
              coaching institute in Surat, An art gallery in Vadodara, or a manufacturing unit in Rajkot&apos;s industrial
              corridor — your customers are searching for you on Google right now.
            </p>
            <p className="text-on-surface leading-relaxed">
              For every ten people searching &ldquo;bakery in Ahmedabad&rdquo; right now, nearly
              three will walk into a bakery today. If your bakery doesn&apos;t appear in those
              results, all three of those customers go to a competitor — not because that competitor
              is better, but because they simply showed up.
            </p>
          </section>
        </article>

        {/* Section 3 — Benefits (wider layout) */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low/60">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-headline mb-4 text-white">
                What You Get With a Properly Optimised GMB Profile
              </h2>
              <p className="text-on-surface-variant">
                When your Google Business Profile is complete, verified, and actively maintained,
                here&apos;s what changes for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: 'search',
                  title: 'Visibility in Local Search',
                  desc: "Your business appears in the Local Pack for relevant searches in your area — before most website results and often before national brands with massive ad budgets.",
                },
                {
                  icon: 'call',
                  title: 'Direct Calls From Google',
                  desc: 'Your phone number appears prominently. Mobile users tap it and call you instantly — without visiting your website. For service businesses, this is the most direct path to revenue.',
                },
                {
                  icon: 'directions',
                  title: 'Footfall From Google Maps',
                  desc: "A customer looking for your shop uses Maps to get there. If your pin isn't on the map, they may walk into the shop next to where you should be.",
                },
                {
                  icon: 'star',
                  title: 'Reviews That Build Trust',
                  desc: 'Google reviews are the most trusted form of social proof for local businesses in India. A business with genuine reviews consistently beats a competitor with none.',
                },
                {
                  icon: 'campaign',
                  title: 'Posts, Offers & Updates',
                  desc: 'Publish new products, seasonal offers, event invitations, and photos. These posts keep your listing fresh and signal to Google that your business is active.',
                },
                {
                  icon: 'analytics',
                  title: 'Free Customer Intelligence',
                  desc: 'GMB Insights shows what keywords customers searched, whether they called or got directions, and how many viewed your photos — free data most businesses miss.',
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-surface-container hover:bg-surface-container-high transition-colors p-6 rounded-3xl border border-outline-variant/10"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-primary text-[22px]">
                      {icon}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-white mb-2">{title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back to article body */}
        <article className="px-4 sm:px-8 max-w-3xl mx-auto">

          {/* Section 4 */}
          <section className="pt-14 mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-headline mb-5 text-white">
              Which Businesses in Gujarat Need GMB Most
            </h2>
            <p className="text-on-surface leading-relaxed mb-8">
              While every locally-serving business benefits from GMB, certain sectors see immediate,
              high-impact results. Here are the categories where a strong Google Business Profile
              directly translates to daily revenue.
            </p>
            <div className="space-y-5">
              {[
                {
                  emoji: '🍽️',
                  type: 'Restaurants, Cafes & Food Businesses',
                  desc: 'Hungry customers make decisions based on Google Maps. Ratings, photos, and hours fill tables. A restaurant without GMB is invisible to this intent.',
                },
                {
                  emoji: '🏥',
                  type: 'Clinics, Hospitals & Healthcare Professionals',
                  desc: 'Patients searching for doctors, dentists, and specialists in their city use Google Maps first. A profile with verified hours and reviews drives appointment bookings.',
                },
                {
                  emoji: '💇',
                  type: 'Salons, Spas & Beauty Services',
                  desc: "One of the most competitive local categories. Customers choose based on photos, location, and reviews. A well-maintained profile levels the playing field between a new salon and one that's been around for years.",
                },
                {
                  emoji: '📚',
                  type: 'Coaching Centres & Educational Institutes',
                  desc: 'Parents and students across Gujarat actively search for local coaching options. A GMB profile with clear information and genuine reviews directly influences enrollment decisions.',
                },
                {
                  emoji: '🔧',
                  type: 'Home Services — Plumbers, Electricians, AC Repair',
                  desc: 'When something breaks, people search Google. Emergency and on-demand queries are almost entirely driven by Maps results. The businesses that appear are the ones that get called.',
                },
                {
                  emoji: '🏪',
                  type: 'Retail — Clothing, Electronics, General Merchandise',
                  desc: 'Customers increasingly search Google before visiting shops. A strong Maps presence with photos and current opening hours reduces friction and brings in walk-in customers.',
                },
                {
                  emoji: '🏭',
                  type: 'Manufacturers & Suppliers',
                  desc: "Even B2B businesses in Gujarat's industrial cities benefit. Procurement managers and buyers search Google for local suppliers. A professional, detailed profile signals credibility.",
                },
              ].map(({ emoji, type, desc }) => (
                <div
                  key={type}
                  className="flex gap-4 p-5 rounded-2xl bg-surface-container border border-outline-variant/10"
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">{emoji}</span>
                  <div>
                    <h3 className="font-bold text-white mb-1">{type}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-headline mb-5 text-white">
              Why Your Business Might Not Be Showing on Google
            </h2>
            <p className="text-on-surface leading-relaxed mb-8">
              If you&apos;ve tried searching for your business and it doesn&apos;t appear, there are
              usually three reasons. The good news: all three are fixable, and fixing them costs
              nothing.
            </p>
            <div className="space-y-5">
              {[
                {
                  num: '01',
                  title: "You haven't created a Google Business Profile yet",
                  desc: "This is the most common reason. Your business physically exists, your team works hard, your customers are satisfied — but Google doesn't know you exist because no one has ever told it. The fix is straightforward: create a profile at business.google.com.",
                },
                {
                  num: '02',
                  title: "Your profile exists but isn't verified",
                  desc: "Google requires verification before showing a listing in search results. Verification is done through a postcard with a PIN sent to your business address, or through phone/video verification for some business types. An unverified profile is essentially invisible to customers.",
                },
                {
                  num: '03',
                  title: 'Your profile is incomplete or inactive',
                  desc: "Google's algorithm actively rewards complete, accurate, and updated profiles. A listing with no photos, an outdated phone number, incorrect opening hours, or no recent activity will rank poorly — or not at all. Regular posts, fresh photos, and responding to reviews tell Google your business is legitimate and active.",
                },
              ].map(({ num, title, desc }) => (
                <div
                  key={num}
                  className="flex gap-5 p-6 rounded-2xl bg-surface-container border border-outline-variant/10"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-primary font-black text-sm">{num}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">{title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* ── FAQ Section ── */}
        <section className="px-4 sm:px-8 py-14 sm:py-20 bg-surface-container-low faq-section">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-4xl font-extrabold font-headline mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-on-surface-variant">
                Quick answers about Google My Business for businesses in Gujarat.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {faqItems.map((item, i) => (
                <details
                  key={i}
                  name="faq"
                  className="group bg-surface-container rounded-2xl border border-outline-variant/10 overflow-hidden open:border-primary/20 transition-all duration-200"
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none gap-4">
                    <h3 className="font-bold text-white text-base">{item.q}</h3>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-surface-variant group-open:bg-primary/10 group-open:border-primary/30 group-open:text-primary transition-all duration-200">
                      <span className="material-symbols-outlined text-[18px] group-open:rotate-45 transition-transform duration-200">
                        add
                      </span>
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-on-surface-variant leading-relaxed text-sm">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related / Back to Blog ── */}
        <section className="px-4 sm:px-8 py-12 bg-surface">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Back to Blog
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-on-surface-variant text-sm">Share:</span>
              <a
                href="https://www.linkedin.com/shareArticle?mini=true&url=https://veyber.co.in/blogs/google-my-business-gujarat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-outline-variant/20 bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-sky-400 hover:border-sky-400/30 transition-all"
                aria-label="Share on LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://wa.me/?text=Google%20My%20Business%20for%20Small%20Business%20in%20Gujarat%20%E2%80%94%20https://veyber.co.in/blogs/google-my-business-gujarat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-outline-variant/20 bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-green-400 hover:border-green-400/30 transition-all"
                aria-label="Share on WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-4 sm:px-8 py-16 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="force-dark max-w-4xl mx-auto text-center relative z-10 bg-neutral-900 rounded-[2rem] sm:rounded-[3rem] border border-white/15 overflow-hidden">
            <Image
              alt="Digital growth team helping businesses in Gujarat"
              className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=75"
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              loading="lazy"
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
            <div className="relative z-10 p-8 sm:p-12 md:p-16">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tight drop-shadow-xl">
                Want your business to dominate Google in Gujarat?
              </h2>
              <p className="text-base sm:text-lg text-white/75 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed drop-shadow">
                Veyber handles your complete Google My Business setup, optimisation, and ongoing
                management — so you show up when customers search.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 sm:px-10 py-3.5 sm:py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black rounded-full text-base sm:text-lg shadow-2xl hover:shadow-primary/40 transition-all active:scale-95 group"
                >
                  Get Free Consultation
                  <span className="material-symbols-outlined inline-block align-middle group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  href="/digital-marketing"
                  className="inline-flex items-center gap-2 px-7 sm:px-10 py-3.5 sm:py-5 text-white font-bold rounded-full border border-white/20 hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300 text-base sm:text-lg"
                >
                  Our Digital Marketing Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
