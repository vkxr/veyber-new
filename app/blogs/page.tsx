import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'Blog — Digital Marketing Insights | Veyber',
  description:
    'Expert insights on digital marketing, eCommerce, SEO, Google My Business, and local business growth — from Veyber, Vadodara\'s leading digital agency.',
  keywords:
    'digital marketing blog, SEO tips India, Google My Business Gujarat, ecommerce insights, local business growth, Veyber blog',
  alternates: {
    canonical: 'https://veyber.co.in/blogs',
  },
};

const blogs = [
  {
    slug: 'google-my-business-gujarat',
    title: "Google My Business for Small Business in Gujarat — Why You Can't Afford to Ignore It",
    excerpt:
      "Thousands of customers in Gujarat search Google every day for businesses like yours. If you're not on Google My Business, they're finding your competitors. Here's why that has to change.",
    category: 'Local SEO',
    categoryIcon: 'location_on',
    date: 'May 2026',
    readTime: '8 min read',
    src: '/images/Blog-covers/gmb-blog-1-cover.jpg',
    imageAlt: 'Google My Business for small businesses in Gujarat — local search visibility',
  },
];

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Veyber Blog',
  description:
    'Digital marketing insights, eCommerce strategies, and local business growth tips from Veyber Services Pvt. Ltd.',
  url: 'https://veyber.co.in/blogs',
  publisher: {
    '@type': 'Organization',
    name: 'Veyber Services Pvt. Ltd.',
    url: 'https://veyber.co.in',
  },
};

export default function BlogsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Navbar />

      <main className="pt-[100px] pb-16">
        {/* Hero */}
        <section className="relative px-4 sm:px-8 py-14 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-primary/8 blur-[80px]" />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-6">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              Insights &amp; Resources
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-headline tracking-tight leading-tight mb-5 max-w-2xl mx-auto">
              The Veyber{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
                Blog
              </span>
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-xl mx-auto">
              Digital marketing insights, eCommerce strategies, and local business growth tips —
              straight from the team at Veyber.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-4 sm:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Category filter bar */}
            <div className="flex items-center gap-3 mb-10 flex-wrap">
              <span className="px-4 py-2 rounded-full bg-primary text-on-primary text-xs font-bold uppercase tracking-wider">
                All Posts
              </span>
              {['Local SEO', 'Digital Marketing', 'eCommerce', 'Google Ads'].map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-2 rounded-full border border-outline-variant/20 text-on-surface-variant text-xs font-bold uppercase tracking-wider cursor-default hover:border-primary/30 hover:text-primary transition-all"
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blogs/${blog.slug}`}
                  className="group flex flex-col bg-surface-container hover:bg-surface-container-high transition-all duration-300 rounded-3xl border border-outline-variant/10 hover:border-primary/20 overflow-hidden"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={blog.src}
                      alt={blog.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                        <span className="material-symbols-outlined text-[12px]">
                          {blog.categoryIcon}
                        </span>
                        {blog.category}
                      </span>
                    </div>

                    <h2 className="text-base sm:text-lg font-bold font-headline text-white leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-3">
                      {blog.title}
                    </h2>

                    <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3 mb-5 flex-1">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/10">
                      <div className="flex items-center gap-3 text-xs text-on-surface-variant">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[13px]">
                            calendar_today
                          </span>
                          {blog.date}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-outline-variant" />
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[13px]">schedule</span>
                          {blog.readTime}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-primary text-xs font-bold group-hover:gap-2 transition-all">
                        Read
                        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}

              {/* Coming soon placeholder */}
              <div className="flex flex-col items-center justify-center bg-surface-container/50 rounded-3xl border border-dashed border-outline-variant/20 p-10 text-center min-h-[320px]">
                <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-[28px]">
                    edit_note
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm font-medium mb-1">More coming soon</p>
                <p className="text-on-surface-variant/60 text-xs">
                  New insights published regularly
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-8 py-16 sm:py-20 bg-surface-container-low">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-headline mb-4">
              Want us to grow your business?
            </h2>
            <p className="text-on-surface-variant mb-8 max-w-xl mx-auto">
              We don&apos;t just write about digital marketing — we execute it for businesses across
              Gujarat. Let&apos;s talk about yours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-bold rounded-full hover:shadow-[0_0_30px_rgba(174,198,255,0.35)] transition-all active:scale-95"
            >
              Get Free Consultation
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
