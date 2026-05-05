import Link from 'next/link';
import VeyberLogo from './VeyberLogo';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/veyberservicespvtltd',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    hoverColor: 'hover:text-pink-400 hover:border-pink-400/40 hover:bg-pink-400/10',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Veyberservicespvtltd/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    hoverColor: 'hover:text-blue-500 hover:border-blue-500/40 hover:bg-blue-500/10',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/veyber-services-pvt-ltd/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    hoverColor: 'hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-400/10',
  },
  
  {
    label: 'Email',
    href: 'mailto:veyberservicespvtltd@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    hoverColor: 'hover:text-[#aec6ff] hover:border-[#aec6ff]/40 hover:bg-[#aec6ff]/10',
  },
];

export default function Footer() {
  return (
    <footer className="force-dark bg-[#07080f] w-full relative overflow-hidden">
      {/* Top accent line + glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#aec6ff]/30 to-transparent"/>
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-primary/6 blur-[70px]"/>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-14 sm:pt-20 pb-8 sm:pb-10">
        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-10 sm:pb-16 border-b border-white/[0.06]">

          {/* Brand column */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-5">
              <VeyberLogo height={30} theme="dark" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-7 max-w-xs">
              High-end digital growth agency specialising in eCommerce and marketplace dominance. We turn ambition into authority.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5 mb-7">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 border border-white/[0.08] bg-white/[0.04] transition-all duration-200 ${s.hoverColor} hover:scale-110`}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Location */}
            <a
              href="https://www.google.com/maps?q=veyber+services+pvt+ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 text-sm"
            >
              <svg viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0 mt-0.5 self-start">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="text-white mb-6 uppercase tracking-widest text-[11px]">
                Vadodara - 390019
              </span>
            </a>
            
             <a
                href="tel:+916355183655"
                className="flex items-center gap-2 text-slate-500 text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                  <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z"/>
                </svg>
                <span className="text-white  text-[11px]">+91 6355183655</span>
              </a>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[11px]">Services</h4>
            <ul className="space-y-3.5">
              {[
                ['eCommerce Development', '/ecommerce-development'],
                ['Account Management',    '/ecommerce-account-management'],
                ['Social Media Handling', '/social-media-handling'],
                ['Content Marketing',     '/content-marketing'],
                ['Business Consulting',   '/business-consulting'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-slate-500 text-sm hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-primary transition-colors shrink-0"/>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[11px]">Locations</h4>
            <ul className="space-y-3.5">
              {[
                ['Vadodara', '/digital-marketing-vadodara'],
                ['Ahmedabad', '/digital-marketing-ahmedabad'],
                ['Surat', '/digital-marketing-surat'],
                ['Rajkot', '/digital-marketing-rajkot'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-slate-500 text-sm hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-primary transition-colors shrink-0"/>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[11px]">Company</h4>
            <ul className="space-y-3.5">
              {[
                ['Blog', '/blogs'],
                ['About Us', '/about'],
                ['Contact',  '/contact'],
                ['Sitemap', '/sitemap'],
                ['Locations Index', '/service-locations'],
                ['Privacy Policy', '/privacy-policy'],
                ['Terms & Conditions', '/terms-and-conditions'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-slate-500 text-sm hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-primary transition-colors shrink-0"/>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          
            
            <a
                href="https://veyber.co.in"
                className="flex items-center gap-2 text-slate-500 text-sm"
              >
                 <p className="text-slate-600 text-xs tracking-tight">
            Developed by Veyber.</p>
              </a>
            
             
          
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"/>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.7)]"/>
            </span>
            <span className="text-slate-600 text-[10px] uppercase font-bold tracking-widest">All Systems Operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
