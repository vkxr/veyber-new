import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';

export const metadata: Metadata = {
  title: 'Web Services in Gujarat | Web Dev, Hosting & DevOps – Veyber',
  description: 'Professional web services including custom website development, managed hosting, and DevOps deployment for businesses in Gujarat.',
  keywords: 'web services Gujarat, web development Vadodara, website hosting Ahmedabad, DevOps services India',
  openGraph: {
    title: 'Web Services in Gujarat | Web Dev, Hosting & DevOps – Veyber',
    description: 'Professional web services including custom website development, managed hosting, and DevOps deployment for businesses in Gujarat.',
    url: 'https://veyber.co.in/web-services',
    type: 'website',
  }
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Services',
  provider: {
    '@type': 'Organization',
    name: 'Veyber',
    url: 'https://veyber.co.in',
  },
  areaServed: {
    '@type': 'State',
    name: 'Gujarat',
  },
  description: 'Professional web services including custom website development, managed hosting, and DevOps deployment for businesses in Gujarat.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What technologies do you use for web development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We specialize in modern web stacks including Next.js, React, Node.js, and Tailwind CSS to build blazing fast, highly interactive websites.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide web hosting services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We offer fully managed, high-performance cloud hosting with automated backups, SSL, and 24/7 uptime monitoring.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my website be mobile-friendly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Every website we build is developed with a mobile-first approach, ensuring flawless performance across smartphones, tablets, and desktops.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is DevOps and do I need it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DevOps involves automating server deployments and managing infrastructure. If you have a complex custom web application, DevOps ensures it scales smoothly and stays online during traffic spikes.',
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
              Web Services
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-5 leading-[1.05] text-white">
              Beyond eCommerce — <br/>
              <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{filter:'drop-shadow(0 0 28px rgba(174,198,255,0.3))'}}>digital infrastructure built to scale.</span>
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed">
              We build, host, and maintain the digital platforms your business runs on. From responsive business websites to reliable cloud infrastructure.
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
                { val: '200+', label: 'Websites Built' },
                { val: '99.9%', label: 'Uptime' },
                { val: '24/7', label: 'Monitoring' },
                { val: 'Secure', label: 'Cloud Hosting' },
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
                  Why You Need Professional Web Architecture
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Your website is the digital headquarters of your business. If it is slow, insecure, or difficult to navigate, you lose credibility instantly.
                </p>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  We provide end-to-end web services. From writing the first line of code to managing server deployments and ensuring daily backups, we handle the technical heavy lifting so you can focus on your business.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: 'speed', text: 'Lightning Fast Load Times' },
                    { icon: 'security', text: 'Enterprise-Grade Security' },
                    { icon: 'cloud_sync', text: 'Reliable Cloud Hosting' },
                    { icon: 'devices', text: 'Responsive Across All Devices' },
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
              <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">Our Web Architecture Services</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">Comprehensive solutions for building, hosting, and maintaining modern web applications.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[{"icon":"code","title":"Website Development","desc":"Fast, professional, and SEO-ready websites. We build business sites, landing pages, and custom web applications.","items":["Custom UI/UX Design","Next.js & React Development","Corporate Websites","SEO-Optimized Codebase"],"href":"/web-services/development"},{"icon":"dns","title":"Website Hosting","desc":"Fast, secure, and managed website hosting. Includes SSL, speed optimization, and daily backups.","items":["Managed Cloud Hosting","Free SSL Certificates","Automated Daily Backups","CDN Integration"],"href":"/web-services/hosting"},{"icon":"settings_ethernet","title":"DevOps & Deployment","desc":"Server setup, CI/CD pipelines, Docker containerization, and application deployment.","items":["AWS & DigitalOcean Setup","CI/CD Pipeline Automation","Server Monitoring","Scalable Architecture"],"href":"/web-services/devops"}].map((srv: any) => (
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
                <h2 className="text-2xl sm:text-4xl font-bold font-headline mb-5 leading-tight">Web Services in Gujarat — Local Advantage</h2>
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
            { n: '01', label: 'Requirements Gathering', desc: 'We define the technical stack, architecture requirements, and hosting needs.' },
            { n: '02', label: 'Design & Prototyping', desc: 'Creating wireframes and UI designs focused on user experience and conversion.' },
            { n: '03', label: 'Development', desc: 'Writing clean, scalable code using modern frameworks like React and Next.js.' },
            { n: '04', label: 'Infrastructure Setup', desc: 'Configuring servers, databases, and continuous integration pipelines.' },
            { n: '05', label: 'Testing & QA', desc: 'Rigorous testing for performance, security, and cross-browser compatibility.' },
            { n: '06', label: 'Deployment & Maintenance', desc: 'Going live with zero downtime and providing ongoing server monitoring and updates.' },
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
              {[{"q":"What technologies do you use for web development?","a":"We specialize in modern web stacks including Next.js, React, Node.js, and Tailwind CSS to build blazing fast, highly interactive websites."},{"q":"Do you provide web hosting services?","a":"Yes! We offer fully managed, high-performance cloud hosting with automated backups, SSL, and 24/7 uptime monitoring."},{"q":"Will my website be mobile-friendly?","a":"Absolutely. Every website we build is developed with a mobile-first approach, ensuring flawless performance across smartphones, tablets, and desktops."},{"q":"What is DevOps and do I need it?","a":"DevOps involves automating server deployments and managing infrastructure. If you have a complex custom web application, DevOps ensures it scales smoothly and stays online during traffic spikes."}].map((item: any, i: number) => (
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
