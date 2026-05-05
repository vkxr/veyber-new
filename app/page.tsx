import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessTimeline from '@/components/ProcessTimeline';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

     

      <main className="pt-[100px]">
{/*  Hero Section  */}
<section className="relative px-4 sm:px-8 py-12 sm:py-20 md:py-28 flex flex-col items-center overflow-hidden" style={{background:'radial-gradient(ellipse 110% 55% at 50% -5%, rgba(174,198,255,0.07) 0%, transparent 70%)'}}>
{/* Subtle grid overlay */}
<div className="pointer-events-none absolute inset-0 opacity-[0.022]" style={{backgroundImage:'linear-gradient(rgba(174,198,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(174,198,255,0.6) 1px,transparent 1px)',backgroundSize:'64px 64px'}}/>
{/*  Background Glows — Hardware Accelerated  */}
<div className="pointer-events-none absolute -top-[20%] -left-[15%] w-[780px] h-[780px] rounded-full" style={{background: 'radial-gradient(circle, rgba(174,198,255,0.1) 0%, transparent 70%)'}}/>
<div className="pointer-events-none absolute -bottom-[20%] -right-[10%] w-[680px] h-[680px] rounded-full" style={{background: 'radial-gradient(circle, rgba(174,198,255,0.12) 0%, transparent 70%)'}}/>
<div className="pointer-events-none absolute top-[18%] left-1/2 -translate-x-1/2 w-[900px] h-[360px] rounded-full" style={{background: 'radial-gradient(circle, rgba(174,198,255,0.05) 0%, transparent 70%)'}}/>
<div className="relative z-10 text-center max-w-5xl mx-auto">
<span className="hero-content-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/[0.08] text-primary font-bold text-xs tracking-widest uppercase mb-5 shadow-[0_0_24px_rgba(174,198,255,0.12)]">
  <span className="relative flex h-1.5 w-1.5 shrink-0"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"/><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"/></span>
  Scale Your Digital Empire
</span>
<h1 className="hero-content-anim text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-5 leading-[1.05] text-white max-w-[650px] mx-auto" style={{animationDelay:'0.1s'}}>
                    Build. Scale. <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent" style={{filter:'drop-shadow(0 0 28px rgba(174,198,255,0.3))'}}>Dominate</span> with Veyber
                </h1>
<p className="hero-content-anim text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-8 font-medium leading-relaxed" style={{animationDelay:'0.2s'}}>
                    We help businesses grow with powerful eCommerce solutions, strategic account management, high-converting content, and result-driven digital marketing.
                </p>
<div className="hero-content-anim flex flex-col sm:flex-row gap-4 justify-center" style={{animationDelay:'0.3s'}}>
<Link href="/contact" className="group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#aec6ff] to-[#4f8eff] text-[#001a42] font-bold rounded-full text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_52px_rgba(174,198,255,0.38)] active:scale-95 cursor-pointer">
  <span className="relative z-10">Get Free Consultation</span>
  <div className="absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-[100%] transition-transform duration-700"/>
</Link>
<Link href="/services" className="px-6 sm:px-8 py-3.5 sm:py-4 text-white font-bold rounded-full text-base sm:text-lg border border-white/12 hover:border-primary/40 hover:bg-primary/[0.08] hover:shadow-[0_0_28px_rgba(174,198,255,0.10)] transition-all duration-300 cursor-pointer">
                        View Our Services
                    </Link>
</div>
</div>
{/*  Premium Visual  */}
<div className="hero-content-anim hidden sm:block mt-16 sm:mt-20 w-full max-w-6xl mx-auto relative px-4" style={{animationDelay:'0.45s'}}>
{/* Radial glow behind dashboard — Hardware Accelerated */}
<div className="pointer-events-none absolute inset-x-8 -top-20 h-[520px] rounded-full" style={{background: 'radial-gradient(circle, rgba(174,198,255,0.1) 0%, transparent 70%)'}}/>
<div className="pointer-events-none absolute inset-x-32 top-1/3 h-[200px] rounded-full" style={{background: 'radial-gradient(circle, rgba(79,142,255,0.08) 0%, transparent 70%)'}}/>
{/* Float + deep shadow wrapper */}
<div className="hero-dashboard-float" style={{filter:'drop-shadow(0 56px 100px rgba(0,0,0,0.70)) drop-shadow(0 0 80px rgba(174,198,255,0.09))'}}>
<div className="bg-surface-container-low rounded-3xl border border-primary/12 shadow-2xl p-4 overflow-hidden" style={{transform:'perspective(1600px) rotateX(4.5deg)'}}>

{/* Coded Dashboard Mockup — crisp at every resolution, matches site theme */}
<div className="force-dark w-full rounded-2xl overflow-hidden border border-outline-variant/10 bg-[#0b0c1f]" style={{fontFamily:'Inter,sans-serif'}}>
  {/* Window chrome */}
  <div className="flex items-center justify-between px-4 py-2.5 bg-[#0d0e21] border-b border-white/5">
    <div className="flex gap-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"/>
      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"/>
      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"/>
    </div>
    <span className="text-[10px] text-white/25 tracking-widest font-medium uppercase">Veyber Analytics Pro</span>
    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#aec6ff] to-[#4f8eff] opacity-70"/>
  </div>

  {/* Dashboard layout */}
  <div className="flex" style={{height:'420px'}}>
    {/* Sidebar */}
    <div className="w-10 md:w-48 bg-[#0d0e21] border-r border-white/5 flex flex-col shrink-0 py-3">
      <div className="px-3 pb-3 mb-2 border-b border-white/5 hidden md:flex items-center gap-2">
        {/* Mini V logo mark */}
        <svg width="18" height="16" viewBox="0 0 42 36" fill="none" aria-hidden="true">
          <polygon points="0,1 11,1 21,35 10,35" fill="#4f8eff"/>
          <polygon points="21,35 31,1 42,1 32,35" fill="#4f8eff"/>
        </svg>
        <span className="text-[11px] font-black text-white tracking-tight">EYBER</span>
      </div>
      <div className="flex flex-col gap-0.5 px-2 mt-1">
        <div className="flex items-center gap-2.5 px-2 py-2 rounded-lg bg-[#aec6ff]/10 text-[#aec6ff]">
          <span className="material-symbols-outlined" style={{fontSize:'15px'}}>grid_view</span>
          <span className="text-[10px] font-semibold hidden md:block">Overview</span>
        </div>
        <div className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-white/25">
          <span className="material-symbols-outlined" style={{fontSize:'15px'}}>shopping_bag</span>
          <span className="text-[10px] hidden md:block">Orders</span>
        </div>
        <div className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-white/25">
          <span className="material-symbols-outlined" style={{fontSize:'15px'}}>inventory_2</span>
          <span className="text-[10px] hidden md:block">Products</span>
        </div>
        <div className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-white/25">
          <span className="material-symbols-outlined" style={{fontSize:'15px'}}>bar_chart</span>
          <span className="text-[10px] hidden md:block">Analytics</span>
        </div>
        <div className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-white/25">
          <span className="material-symbols-outlined" style={{fontSize:'15px'}}>campaign</span>
          <span className="text-[10px] hidden md:block">Marketing</span>
        </div>
      </div>
    </div>

    {/* Main content */}
    <div className="flex-1 p-3 md:p-4 flex flex-col gap-3 overflow-hidden bg-[#111225]">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-bold text-white">Performance Overview</div>
          <div className="text-[9px] text-white/35">Last 30 days · Updated just now</div>
        </div>
        <div className="flex gap-1.5">
          <div className="px-2.5 py-1 rounded-full text-[8px] bg-[#1d1e32] text-white/35 border border-white/5">Export</div>
          <div className="px-2.5 py-1 rounded-full text-[8px] bg-[#aec6ff]/15 text-[#aec6ff] border border-[#aec6ff]/20 font-bold">+ Report</div>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-4 gap-2">
        <div className="bg-[#1d1e32] rounded-xl p-2.5 border border-white/5">
          <div className="text-[7px] text-white/35 mb-1 uppercase tracking-wider">Revenue</div>
          <div className="text-[13px] font-black text-white leading-none mb-1">₹2.4M</div>
          <div className="text-[8px] text-[#4ade80] font-semibold flex items-center gap-0.5">
            <span className="material-symbols-outlined" style={{fontSize:'9px'}}>arrow_upward</span>+32%
          </div>
        </div>
        <div className="bg-[#1d1e32] rounded-xl p-2.5 border border-white/5">
          <div className="text-[7px] text-white/35 mb-1 uppercase tracking-wider">Orders</div>
          <div className="text-[13px] font-black text-white leading-none mb-1">12.8K</div>
          <div className="text-[8px] text-[#4ade80] font-semibold flex items-center gap-0.5">
            <span className="material-symbols-outlined" style={{fontSize:'9px'}}>arrow_upward</span>+18%
          </div>
        </div>
        <div className="bg-[#1d1e32] rounded-xl p-2.5 border border-white/5">
          <div className="text-[7px] text-white/35 mb-1 uppercase tracking-wider">YoY Growth</div>
          <div className="text-[13px] font-black text-white leading-none mb-1">148%</div>
          <div className="text-[8px] text-[#4ade80] font-semibold flex items-center gap-0.5">
            <span className="material-symbols-outlined" style={{fontSize:'9px'}}>arrow_upward</span>+47pts
          </div>
        </div>
        <div className="bg-[#1d1e32] rounded-xl p-2.5 border border-white/5">
          <div className="text-[7px] text-white/35 mb-1 uppercase tracking-wider">Conv. Rate</div>
          <div className="text-[13px] font-black text-white leading-none mb-1">4.2%</div>
          <div className="text-[8px] text-[#4ade80] font-semibold flex items-center gap-0.5">
            <span className="material-symbols-outlined" style={{fontSize:'9px'}}>arrow_upward</span>+0.8%
          </div>
        </div>
      </div>

      {/* Chart row */}
      <div className="flex gap-2.5 flex-1 min-h-0">
        {/* Area chart */}
        <div className="flex-1 bg-[#1d1e32] rounded-xl p-3 border border-white/5 flex flex-col min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[9px] font-bold text-white">Revenue Trend</div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1"><div className="w-3 h-0.5 rounded bg-[#aec6ff]"/><span className="text-[7px] text-white/35">2025</span></div>
              <div className="flex items-center gap-1"><div className="w-3 h-0.5 rounded bg-white/15"/><span className="text-[7px] text-white/20">2024</span></div>
            </div>
          </div>
          <div className="flex-1 relative">
            <svg viewBox="0 0 280 110" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="vHeroGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#aec6ff" stopOpacity="0.28"/>
                  <stop offset="100%" stopColor="#aec6ff" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <line x1="0" y1="27" x2="280" y2="27" stroke="#ffffff06" strokeWidth="1"/>
              <line x1="0" y1="55" x2="280" y2="55" stroke="#ffffff06" strokeWidth="1"/>
              <line x1="0" y1="82" x2="280" y2="82" stroke="#ffffff06" strokeWidth="1"/>
              {/* 2024 comparison line */}
              <path d="M0,90 L28,87 L56,83 L84,79 L112,74 L140,70 L168,65 L196,60 L224,55 L252,51 L280,48"
                fill="none" stroke="#ffffff20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 3"/>
              {/* 2025 area fill */}
              <path d="M0,100 L28,96 L56,90 L84,82 L112,72 L140,60 L168,50 L196,40 L224,30 L252,18 L280,10 L280,110 L0,110 Z"
                fill="url(#vHeroGrad)"/>
              {/* 2025 line */}
              <path d="M0,100 L28,96 L56,90 L84,82 L112,72 L140,60 L168,50 L196,40 L224,30 L252,18 L280,10"
                fill="none" stroke="#aec6ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Highlight dot */}
              <circle cx="252" cy="18" r="3.5" fill="#111225" stroke="#aec6ff" strokeWidth="2"/>
              <circle cx="252" cy="18" r="7" fill="#aec6ff" fillOpacity="0.15"/>
              {/* Tooltip */}
              <rect x="218" y="1" width="52" height="20" rx="4" fill="#27283d"/>
              <text x="244" y="15" textAnchor="middle" fill="#aec6ff" fontSize="7.5" fontWeight="700">₹287K</text>
            </svg>
          </div>
          <div className="flex justify-between pt-1">
            {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'].map((m,i) => (
              <span key={i} className="text-[6.5px] text-white/20">{m}</span>
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div className="w-28 md:w-40 flex flex-col gap-2 shrink-0">
          {/* Channels donut */}
          <div className="bg-[#1d1e32] rounded-xl p-2.5 border border-white/5">
            <div className="text-[9px] font-bold text-white mb-2">Channels</div>
            <div className="flex items-center gap-2">
              {/* circumference of r=14 ≈ 87.96 */}
              <svg viewBox="0 0 36 36" className="w-10 h-10 shrink-0" style={{transform:'rotate(-90deg)'}}>
                <circle cx="18" cy="18" r="14" fill="none" stroke="#323348" strokeWidth="4"/>
                <circle cx="18" cy="18" r="14" fill="none" stroke="#aec6ff" strokeWidth="4" strokeDasharray="39.6 48.4" strokeDashoffset="0"/>
                <circle cx="18" cy="18" r="14" fill="none" stroke="#4f8eff" strokeWidth="4" strokeDasharray="26.4 61.6" strokeDashoffset="-39.6"/>
                <circle cx="18" cy="18" r="14" fill="none" stroke="#f0661b" strokeWidth="4" strokeDasharray="22 66" strokeDashoffset="-66"/>
              </svg>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#aec6ff]"/><span className="text-[7px] text-white/45">Amazon 45%</span></div>
                <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#4f8eff]"/><span className="text-[7px] text-white/45">Shopify 30%</span></div>
                <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#f0661b]"/><span className="text-[7px] text-white/45">Other 25%</span></div>
              </div>
            </div>
          </div>

          {/* Top brands */}
          <div className="bg-[#1d1e32] rounded-xl p-2.5 border border-white/5 flex-1">
            <div className="text-[9px] font-bold text-white mb-2.5">Top Brands</div>
            <div className="flex flex-col gap-2.5">
              {[
                {name:'NovaTech Pro', rev:'₹82K', pct:82},
                {name:'UrbanEdge', rev:'₹61K', pct:61},
                {name:'ZenHome Co.', rev:'₹44K', pct:44},
                {name:'PureLife', rev:'₹29K', pct:29},
              ].map((b,i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-[7px] text-white/45 truncate">{b.name}</span>
                    <span className="text-[7px] text-[#aec6ff] font-bold ml-1 shrink-0">{b.rev}</span>
                  </div>
                  <div className="h-1 bg-[#323348] rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#aec6ff] to-[#4f8eff]" style={{width:`${b.pct}%`}}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>{/* closes hero-dashboard-float */}

{/* ── Floating stat cards (glassmorphism — reduced blur for perf) ── */}

{/* Card 1 — Growth · top-right */}
<div className="stat-card-1 absolute -top-7 right-2 md:-right-8 hidden md:flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-white/12 bg-white/[0.055] backdrop-blur-lg shadow-[0_8px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] z-20">
  <div className="w-9 h-9 rounded-xl bg-[#4ade80]/15 border border-[#4ade80]/20 flex items-center justify-center shrink-0">
    <span className="material-symbols-outlined text-[#4ade80] text-[18px]">trending_up</span>
  </div>
  <div>
    <p className="text-[9px] text-white/40 uppercase tracking-wider font-semibold leading-none mb-1">YoY Growth</p>
    <p className="text-[17px] font-black text-white leading-none tracking-tight">+148%</p>
  </div>
</div>

{/* Card 2 — Revenue · bottom-left */}
<div className="stat-card-2 absolute -bottom-6 left-2 md:-left-8 hidden md:flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-white/12 bg-white/[0.055] backdrop-blur-lg shadow-[0_8px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] z-20">
  <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0">
    <span className="material-symbols-outlined text-primary text-[18px]">paid</span>
  </div>
  <div>
    <p className="text-[9px] text-white/40 uppercase tracking-wider font-semibold leading-none mb-1">Monthly Revenue</p>
    <p className="text-[17px] font-black text-white leading-none tracking-tight">₹287K</p>
  </div>
</div>

{/* Card 3 — Orders · left-center */}
<div className="stat-card-3 absolute top-[38%] -left-2 md:-left-14 hidden lg:flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-white/12 bg-white/[0.055] backdrop-blur-lg shadow-[0_8px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] z-20">
  <div className="w-9 h-9 rounded-xl bg-[#f0661b]/15 border border-[#f0661b]/20 flex items-center justify-center shrink-0">
    <span className="material-symbols-outlined text-[#f0661b] text-[18px]">shopping_bag</span>
  </div>
  <div>
    <p className="text-[9px] text-white/40 uppercase tracking-wider font-semibold leading-none mb-1">Total Orders</p>
    <p className="text-[17px] font-black text-white leading-none tracking-tight">12.8K</p>
  </div>
</div>

</div>{/* closes Premium Visual outer */}
</section>
{/*  About Section: Bento Grid  */}
<section className="px-4 sm:px-8 py-16 sm:py-32 bg-surface-container-low/50">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
<div className="lg:col-span-5 flex flex-col justify-center">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight">Who We Are</h2>
<p className="text-xl text-on-surface-variant mb-6 leading-relaxed">
                            At Veyber, we don't just provide services — <span className="text-primary font-bold">we build growth systems.</span>
</p>
<p className="text-on-surface-variant mb-4 leading-relaxed">
                            We are a results-focused digital solutions company specializing in:
                        </p>
<ul className="mb-6 space-y-2">
  {['eCommerce Development','Marketplace Account Management','Social Media Growth','Content Marketing','Business Consulting'].map((item) => (
    <li key={item} className="flex items-center gap-3 text-on-surface-variant">
      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
        <span className="material-symbols-outlined text-primary" style={{fontSize:'13px'}}>check</span>
      </span>
      <span>{item}</span>
    </li>
  ))}
</ul>
<p className="text-on-surface-variant mb-8 leading-relaxed font-medium">
                            Our mission is simple: <span className="text-primary">Help businesses scale faster, smarter, and more profitably.</span>
                        </p>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-4">
<div className="p-2 bg-primary/10 rounded-lg"><span className="material-symbols-outlined text-primary" data-icon="verified">verified</span></div>
<div><p className="font-bold text-white">Elite Expertise</p><p className="text-sm text-on-surface-variant">Marketplace specialists across all major platforms.</p></div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-primary/10 rounded-lg"><span className="material-symbols-outlined text-primary" data-icon="rocket_launch">rocket_launch</span></div>
<div><p className="font-bold text-white">Growth Systems</p><p className="text-sm text-on-surface-variant">Scalable frameworks designed for long-term dominance.</p></div>
</div>
</div>
</div>
<div className="lg:col-span-7 relative w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(174,198,255,0.1)] border border-white/10 group">
  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0"/>
  <Image
    src="/who_we_are_growth_v2.webp"
    alt="Digital Growth Systems and eCommerce Marketing by Veyber"
    fill
    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
    sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) 90vw, 55vw"
    priority
    quality={75}
  />
  <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0c1f] via-transparent to-[#4f8eff]/10 opacity-80 z-10"></div>
  <div className="absolute bottom-6 left-6 right-6 z-20">
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
      <span className="text-white text-xs font-bold uppercase tracking-widest">Building Growth</span>
    </div>
  </div>
</div>
</div>
</div>
</section>
{/*  Services Section  */}
<section className="cv-auto px-4 sm:px-8 py-16 sm:py-32 bg-surface">
<div className="max-w-7xl mx-auto text-center mb-12 sm:mb-20">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">Strategic Services</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto">Full-stack digital acceleration for modern brands who refuse to settle for average growth.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/*  eCommerce Development  */}
<div className="group bg-surface-container p-6 sm:p-10 rounded-[2rem] border border-outline-variant/10 hover:bg-surface-container-highest transition-all duration-300">
<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
<span className="material-symbols-outlined text-primary text-4xl group-hover:text-on-primary-container" data-icon="web">web</span>
</div>
<h3 className="text-2xl font-bold text-white mb-4">eCommerce Development</h3>
<p className="text-on-surface-variant leading-relaxed mb-4">We build high-performance, scalable eCommerce websites designed to convert visitors into customers.</p>
<ul className="space-y-2 mb-6">
  {['Shopify / WooCommerce Development','Custom eCommerce Solutions','Payment Gateway Integration','Mobile-Optimized Design','Conversion Optimization'].map((item) => (
    <li key={item} className="flex items-center gap-2 text-sm text-on-surface-variant">
      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"/>
      {item}
    </li>
  ))}
</ul>
<p className="text-primary font-semibold text-sm mb-4">Build your online store the right way.</p>
<Link href="/ecommerce-development" className="inline-flex items-center gap-1.5 text-sm font-bold text-white/70 hover:text-primary transition-colors duration-200 group/link">
  Learn More
  <span className="material-symbols-outlined text-[16px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
</Link>
</div>
{/*  Account Management  */}
<div className="group bg-surface-container p-6 sm:p-10 rounded-[2rem] border border-outline-variant/10 hover:bg-surface-container-highest transition-all duration-300">
<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
<span className="material-symbols-outlined text-primary text-4xl group-hover:text-on-primary-container" data-icon="inventory">inventory</span>
</div>
<h3 className="text-2xl font-bold text-white mb-4">eCommerce Account Management</h3>
<p className="text-on-surface-variant leading-relaxed mb-4">We manage and grow your presence on marketplaces like Amazon, Flipkart, Meesho, and more.</p>
<ul className="space-y-2 mb-6">
  {['Product Listing Optimization','Marketplace SEO','Ad Campaign Management','Inventory & Order Management','Performance Analytics'].map((item) => (
    <li key={item} className="flex items-center gap-2 text-sm text-on-surface-variant">
      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"/>
      {item}
    </li>
  ))}
</ul>
<p className="text-primary font-semibold text-sm">Focus on your business, we handle the marketplace.</p>
<Link href="/ecommerce-account-management" className="inline-flex items-center gap-1.5 text-sm font-bold text-white/70 hover:text-primary transition-colors duration-200 group/link mt-4">
  Learn More
  <span className="material-symbols-outlined text-[16px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
</Link>
</div>
{/*  Social Media Handling  */}
<div className="group bg-surface-container p-6 sm:p-10 rounded-[2rem] border border-outline-variant/10 hover:bg-surface-container-highest transition-all duration-300">
<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
<span className="material-symbols-outlined text-primary text-4xl group-hover:text-on-primary-container" data-icon="share">share</span>
</div>
<h3 className="text-2xl font-bold text-white mb-4">Social Media Handling</h3>
<p className="text-on-surface-variant leading-relaxed mb-4">Turn your social media into a powerful growth engine.</p>
<ul className="space-y-2 mb-6">
  {['Content Planning & Posting','Instagram & Facebook Growth','Paid Ads Campaigns','Engagement & Branding','Analytics Tracking'].map((item) => (
    <li key={item} className="flex items-center gap-2 text-sm text-on-surface-variant">
      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"/>
      {item}
    </li>
  ))}
</ul>
<p className="text-primary font-semibold text-sm mb-4">Build a brand people trust and follow.</p>
<Link href="/social-media-handling" className="inline-flex items-center gap-1.5 text-sm font-bold text-white/70 hover:text-primary transition-colors duration-200 group/link">
  Learn More
  <span className="material-symbols-outlined text-[16px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
</Link>
</div>
{/*  Content Marketing  */}
<div className="group bg-surface-container p-6 sm:p-10 rounded-[2rem] border border-outline-variant/10 hover:bg-surface-container-highest transition-all duration-300">
<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
<span className="material-symbols-outlined text-primary text-4xl group-hover:text-on-primary-container" data-icon="edit_note">edit_note</span>
</div>
<h3 className="text-2xl font-bold text-white mb-4">Content Marketing</h3>
<p className="text-on-surface-variant leading-relaxed mb-4">Content that ranks, engages, and converts.</p>
<ul className="space-y-2 mb-6">
  {['SEO Blog Writing','Website Content','Social Media Content','Sales Copywriting','Branding Content'].map((item) => (
    <li key={item} className="flex items-center gap-2 text-sm text-on-surface-variant">
      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"/>
      {item}
    </li>
  ))}
</ul>
<p className="text-primary font-semibold text-sm mb-4">Say the right things to the right audience.</p>
<Link href="/content-marketing" className="inline-flex items-center gap-1.5 text-sm font-bold text-white/70 hover:text-primary transition-colors duration-200 group/link">
  Learn More
  <span className="material-symbols-outlined text-[16px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
</Link>
</div>
{/*  Business Consulting  */}
<div className="group bg-surface-container p-6 sm:p-10 rounded-[2rem] border border-outline-variant/10 hover:bg-surface-container-highest transition-all duration-300">
<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
<span className="material-symbols-outlined text-primary text-4xl group-hover:text-on-primary-container" data-icon="psychology">psychology</span>
</div>
<h3 className="text-2xl font-bold text-white mb-4">Business Consulting</h3>
<p className="text-on-surface-variant leading-relaxed mb-4">We help you make smarter business decisions backed by data and strategy.</p>
<ul className="space-y-2 mb-6">
  {['Growth Strategy Planning','Market Analysis','Revenue Optimization','Digital Transformation','Startup Guidance'].map((item) => (
    <li key={item} className="flex items-center gap-2 text-sm text-on-surface-variant">
      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"/>
      {item}
    </li>
  ))}
</ul>
<p className="text-primary font-semibold text-sm mb-4">Turn ideas into profitable systems.</p>
<Link href="/business-consulting" className="inline-flex items-center gap-1.5 text-sm font-bold text-white/70 hover:text-primary transition-colors duration-200 group/link">
  Learn More
  <span className="material-symbols-outlined text-[16px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
</Link>
</div>
{/*  Call to Action Card  */}
<div className="relative bg-gradient-to-br from-primary to-primary-container p-6 sm:p-10 rounded-[2rem] overflow-hidden flex flex-col justify-center">
<div className="relative z-10">
<h3 className="text-3xl font-black text-on-primary-container mb-4">Need a Custom Strategy?</h3>
<p className="text-on-primary-container/80 mb-8 font-medium">Let's craft a solution tailored specifically to your unique business goals.</p>
<Link href="/contact" className="bg-surface text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform active:scale-95 cursor-pointer inline-block">Book Now</Link>
</div>
<div className="absolute -bottom-10 -right-10 opacity-20"><span className="material-symbols-outlined text-[150px]" data-icon="auto_awesome">auto_awesome</span></div>
</div>
</div>
</section>
{/*  Why Choose Veyber: Asymmetric Layout  */}
<section className="cv-auto px-4 sm:px-8 py-16 sm:py-32 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
<div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 sm:mb-10 tracking-tight leading-tight">The Veyber Advantage</h2>
<div className="space-y-8">
<div className="flex items-start gap-6 group">
<div className="mt-1 flex-shrink-0 w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center border border-primary/20 text-primary transition-all group-hover:shadow-[0_0_15px_rgba(174,198,255,0.3)]">
<span className="material-symbols-outlined" data-icon="data_thresholding">data_thresholding</span>
</div>
<div>
<h4 className="text-xl font-bold text-white mb-2">Data-Driven Strategies</h4>
<p className="text-on-surface-variant">We move only when the data says so. Every campaign is backed by quantitative insights.</p>
</div>
</div>
<div className="flex items-start gap-6 group">
<div className="mt-1 flex-shrink-0 w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center border border-primary/20 text-primary transition-all group-hover:shadow-[0_0_15px_rgba(174,198,255,0.3)]">
<span className="material-symbols-outlined" data-icon="target">target</span>
</div>
<div>
<h4 className="text-xl font-bold text-white mb-2">ROI-Oriented Execution</h4>
<p className="text-on-surface-variant">Vanity metrics don't pay bills. We focus on the bottom line: profit and growth.</p>
</div>
</div>
<div className="flex items-start gap-6 group">
<div className="mt-1 flex-shrink-0 w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center border border-primary/20 text-primary transition-all group-hover:shadow-[0_0_15px_rgba(174,198,255,0.3)]">
<span className="material-symbols-outlined" data-icon="chat">chat</span>
</div>
<div>
<h4 className="text-xl font-bold text-white mb-2">Transparent Communication</h4>
<p className="text-on-surface-variant">No jargon. No hidden fees. Just clear reporting and consistent updates.</p>
</div>
</div>
<div className="flex items-start gap-6 group">
<div className="mt-1 flex-shrink-0 w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center border border-primary/20 text-primary transition-all group-hover:shadow-[0_0_15px_rgba(174,198,255,0.3)]">
<span className="material-symbols-outlined" data-icon="factory">factory</span>
</div>
<div>
<h4 className="text-xl font-bold text-white mb-2">Industry-Focused Approach</h4>
<p className="text-on-surface-variant">Deep domain knowledge across eCommerce, retail, and digital-first sectors so strategies actually fit.</p>
</div>
</div>
<div className="flex items-start gap-6 group">
<div className="mt-1 flex-shrink-0 w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center border border-primary/20 text-primary transition-all group-hover:shadow-[0_0_15px_rgba(174,198,255,0.3)]">
<span className="material-symbols-outlined" data-icon="open_in_full">open_in_full</span>
</div>
<div>
<h4 className="text-xl font-bold text-white mb-2">Scalable Solutions</h4>
<p className="text-on-surface-variant">Systems built to grow with you — from startup to seven figures and beyond.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="force-dark aspect-square bg-neutral-900 rounded-[3rem] border border-white/10 relative z-10 flex flex-col justify-center overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.55)] hover:border-primary/30">
{/* High-quality background — city towers reaching up, matches "scale" narrative */}
<Image
  alt="Scale Without Friction — glass skyscrapers reaching upward"
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=75"
  fill
  sizes="(max-width: 1024px) 100vw, 50vw"
  loading="lazy"
  quality={75}
/>
{/* Dark gradient so text is readable in both light and dark mode */}
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25 transition-all duration-500 group-hover:from-black/95"></div>
{/* Blue accent tint — ties image to brand palette */}
<div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
{/* Content */}
<div className="relative z-20 p-6 sm:p-12">
<h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">Scale Without<br/>Friction.</h3>
<p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-sm leading-relaxed drop-shadow">Industry-focused approach combined with scalable solutions for high-performance brands.</p>
<div className="flex items-center gap-3 mt-8">
  <span className="text-white/90 font-bold uppercase tracking-[0.15em] text-xs sm:text-sm drop-shadow-md">Global Focus</span>
  <span className="text-primary/70 text-lg drop-shadow-md">|</span>
  <span className="text-white/90 font-bold uppercase tracking-[0.15em] text-xs sm:text-sm drop-shadow-md">Industry Led</span>
</div>
</div>
</div>
{/*  Glass decoration  */}
<div className="absolute -bottom-8 -left-8 w-48 h-48 bg-surface-variant/40 backdrop-blur-lg rounded-3xl border border-white/10 z-20 shadow-2xl hidden md:flex flex-col items-center justify-center gap-2 p-6 text-center hover:bg-surface-variant/60 transition-colors duration-300">
  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-2">
    <span className="material-symbols-outlined text-primary text-2xl" data-icon="rocket_launch">rocket_launch</span>
  </div>
  <p className="text-3xl font-black text-white">10x</p>
  <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Growth Multiplier</p>
</div>
</div>
</div>
</div>
</section>
{/*  Process Section  */}
<section className="cv-auto px-4 sm:px-8 py-16 sm:py-32 bg-surface">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 sm:mb-24">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">How We Work</h2>
<p className="text-on-surface-variant">A precision-engineered workflow designed for maximum efficiency and results.</p>
</div>
    <ProcessTimeline steps={[
      {label: 'Information Gathering', desc: 'We determine your needs, provide custom suggestions and outline the development process.', icon: 'lightbulb'},
      {label: 'Strategy & Planning', desc: 'We create requirements documents, wireframes, prototypes, and a complete sitemap.', icon: 'architecture'},
      {label: 'Design & Development', desc: 'We build HTML/CSS templates and code the programming functionalities for your brand.', icon: 'code'},
      {label: 'Testing & Launch', desc: 'We run beta testing, speed checks, get your final approval, and successfully go live.', icon: 'rocket_launch'}
    ]} />
</div>
</section>
{/*  Interactive Impact Gallery  */}
<section className="cv-auto px-4 sm:px-8 py-16 sm:py-32 bg-surface-container-low/50 relative overflow-hidden">
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"/>
  
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-12 sm:mb-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">The Veyber Edge</h2>
      <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">We are a modern digital growth agency. We combine agility, deep market research, and cutting-edge execution to give your brand an unfair advantage.</p>
    </div>

    {/* The Interactive Flex Grid */}
    <div className="flex flex-col lg:flex-row gap-4 lg:h-[500px] w-full">
      {/* Card 1 */}
      <div className="group relative flex-1 lg:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[2rem] overflow-hidden cursor-pointer border border-white/10 hover:border-primary/40 shadow-xl bg-neutral-900 min-h-[300px] lg:min-h-0">
        <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=75" alt="Analytics" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080f] via-[#07080f]/70 to-transparent group-hover:from-black/80 transition-colors duration-500"/>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-full">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30 text-primary shrink-0 transition-transform group-hover:scale-110 duration-500">
              <span className="material-symbols-outlined text-2xl">insights</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white whitespace-nowrap">Data First</h3>
          </div>
          <h4 className="text-lg font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-500">Strategy & Research</h4>
          
          <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
            <div className="overflow-hidden">
              <div className="pt-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                  We don&apos;t rely on guesswork. Every campaign, design choice, and line of code is driven by deep market research, competitor analysis, and clear analytics.
                </p>
                <div className="mt-4 px-4 py-1.5 bg-primary/20 inline-block rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
                  Analytics & SEO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 1.5: Planning */}
      <div className="group relative flex-1 lg:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[2rem] overflow-hidden cursor-pointer border border-white/10 hover:border-[#0ea5e9]/40 shadow-xl bg-neutral-900 min-h-[300px] lg:min-h-0">
        <Image src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=75" alt="Planning" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw" className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080f] via-[#07080f]/70 to-transparent group-hover:from-black/80 transition-colors duration-500"/>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-full">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-full bg-[#0ea5e9]/20 backdrop-blur-md flex items-center justify-center border border-[#0ea5e9]/30 text-[#0ea5e9] shrink-0 transition-transform group-hover:scale-110 duration-500">
              <span className="material-symbols-outlined text-2xl">account_tree</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white whitespace-nowrap">Planning</h3>
          </div>
          <h4 className="text-lg font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-500">Roadmap & Blueprint</h4>
          
          <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
            <div className="overflow-hidden">
              <div className="pt-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                  We outline the entire project roadmap, defining clear milestones, technology stacks, and user journeys before writing a single line of code.
                </p>
                <div className="mt-4 px-4 py-1.5 bg-[#0ea5e9]/20 inline-block rounded-full border border-[#0ea5e9]/30 text-[#0ea5e9] text-xs font-bold uppercase tracking-widest">
                  Architecture
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="group relative flex-1 lg:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[2rem] overflow-hidden cursor-pointer border border-white/10 hover:border-[#f0661b]/40 shadow-xl bg-neutral-900 min-h-[300px] lg:min-h-0">
        <Image src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=75" alt="Creative" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080f] via-[#07080f]/70 to-transparent group-hover:from-black/80 transition-colors duration-500"/>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-full">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-full bg-[#f0661b]/20 backdrop-blur-md flex items-center justify-center border border-[#f0661b]/30 text-[#f0661b] shrink-0 transition-transform group-hover:scale-110 duration-500">
              <span className="material-symbols-outlined text-2xl">design_services</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white whitespace-nowrap">Creative</h3>
          </div>
          <h4 className="text-lg font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-500">Design & Branding</h4>
          
          <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
            <div className="overflow-hidden">
              <div className="pt-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                  Standing out requires more than just templates. We craft bespoke, premium brand experiences and eye-catchy designs that capture attention and build trust.
                </p>
                <div className="mt-4 px-4 py-1.5 bg-[#f0661b]/20 inline-block rounded-full border border-[#f0661b]/30 text-[#f0661b] text-xs font-bold uppercase tracking-widest">
                  UI/UX & Branding
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group relative flex-1 lg:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[2rem] overflow-hidden cursor-pointer border border-white/10 hover:border-[#4ade80]/40 shadow-xl bg-neutral-900 min-h-[300px] lg:min-h-0">
        <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=75" alt="Code" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080f] via-[#07080f]/70 to-transparent group-hover:from-black/80 transition-colors duration-500"/>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-full">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-full bg-[#4ade80]/20 backdrop-blur-md flex items-center justify-center border border-[#4ade80]/30 text-[#4ade80] shrink-0 transition-transform group-hover:scale-110 duration-500">
              <span className="material-symbols-outlined text-2xl">code</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white whitespace-nowrap">Build</h3>
          </div>
          <h4 className="text-lg font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-500">eCommerce & Tech</h4>
          
          <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
            <div className="overflow-hidden">
              <div className="pt-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                  From high-converting Shopify stores to custom web applications, we build robust digital ecosystems that load blazing fast and scale effortlessly.
                </p>
                <div className="mt-4 px-4 py-1.5 bg-[#4ade80]/20 inline-block rounded-full border border-[#4ade80]/30 text-[#4ade80] text-xs font-bold uppercase tracking-widest">
                  Development
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="group relative flex-1 lg:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[2rem] overflow-hidden cursor-pointer border border-white/10 hover:border-purple-400/40 shadow-xl bg-neutral-900 min-h-[300px] lg:min-h-0">
        <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=75" alt="Scale" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080f] via-[#07080f]/70 to-transparent group-hover:from-black/80 transition-colors duration-500"/>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-full">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 backdrop-blur-md flex items-center justify-center border border-purple-500/30 text-purple-400 shrink-0 transition-transform group-hover:scale-110 duration-500">
              <span className="material-symbols-outlined text-2xl">rocket_launch</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white whitespace-nowrap">Scale</h3>
          </div>
          <h4 className="text-lg font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-500">Marketing & Ads</h4>
          
          <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
            <div className="overflow-hidden">
              <div className="pt-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                  We manage your ad spend as if it were our own. We deploy agile marketing strategies, test, iterate, and scale at a pace traditional agencies simply can&apos;t match.
                </p>
                <div className="mt-4 px-4 py-1.5 bg-purple-500/20 inline-block rounded-full border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-widest">
                  Growth Marketing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* FAQ Section */}
<section className="cv-auto px-4 sm:px-8 py-16 sm:py-32 bg-surface">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12 sm:mb-20">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">Frequently Asked Questions</h2>
<p className="text-on-surface-variant">Everything you need to know about working with Veyber.</p>
</div>
<div className="flex flex-col gap-4">
{[
  {
    q: 'What services does Veyber offer?',
    a: 'Veyber offers end-to-end digital growth services including eCommerce development (Shopify, WooCommerce), marketplace account management (Amazon, Flipkart, Meesho), social media handling, SEO content marketing, and strategic business consulting.'
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Absolutely. We specialize in helping startups and small businesses build scalable growth systems from the ground up. Our strategies are tailored to your budget, industry, and stage of growth.'
  },
  {
    q: 'Which marketplaces do you manage accounts on?',
    a: 'We manage accounts across major Indian and global marketplaces including Amazon, Flipkart, Meesho, Walmart, and more. From product listing optimization to ad campaigns and inventory management — we handle it all.'
  },
  {
    q: 'How do I get started with Veyber?',
    a: 'Simple. Book a free strategy call via our Contact page. We\'ll audit your current digital presence, understand your goals, and propose a customized growth plan — no commitment required.'
  },
  {
    q: 'How long does it take to see results?',
    a: 'Results vary by service and industry, but most clients see measurable improvements within 60–90 days. Our eCommerce and marketplace clients typically see revenue growth within the first month of optimized account management.'
  }
].map((item, i) => (
  <details key={i} name="faq" className="group bg-surface-container rounded-2xl border border-outline-variant/10 overflow-hidden open:border-primary/20 transition-all duration-200">
    <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none gap-4">
      <h3 className="font-bold text-white text-base sm:text-lg">{item.q}</h3>
      <span className="flex-shrink-0 w-8 h-8 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-surface-variant group-open:bg-primary/10 group-open:border-primary/30 group-open:text-primary transition-all duration-200">
        <span className="material-symbols-outlined text-[18px] group-open:rotate-45 transition-transform duration-200">add</span>
      </span>
    </summary>
    <div className="px-6 pb-5 text-on-surface-variant leading-relaxed text-sm sm:text-base">{item.a}</div>
  </details>
))}
</div>
</div>
</section>
{/*  Final CTA  */}
<section className="cv-auto px-4 sm:px-8 py-16 sm:py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-primary/5"></div>
<div className="force-dark max-w-5xl mx-auto text-center relative z-10 bg-neutral-900 rounded-[2rem] sm:rounded-[3rem] border border-white/15 overflow-hidden">
{/* Background image — thriving team / business energy */}
<Image
  alt="Ready to grow your business — energetic team celebrating success"
  className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=75"
  fill
  sizes="(max-width: 1280px) 100vw, 1280px"
  loading="lazy"
  quality={75}
/>
{/* Rich dark overlay ensures perfect readability in both modes */}
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85"></div>
{/* Subtle blue brand tint at top */}
<div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent"></div>
{/* Content */}
<div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-24">
<h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tight drop-shadow-xl">Ready to grow your business?</h2>
<p className="text-base sm:text-xl text-white/75 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow">Let's build something powerful together. Your journey to market dominance starts with a single conversation.</p>
<Link href="/contact" className="inline-flex items-center px-7 sm:px-10 py-3.5 sm:py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black rounded-full text-base sm:text-xl shadow-2xl hover:shadow-primary/40 transition-all active:scale-95 cursor-pointer group">
                    Get Free Strategy Call
                    <span className="material-symbols-outlined inline-block align-middle ml-2 group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</Link>
</div>
</div>
</section>
</main>
      <Footer />
      {/* ════════════════════════ FLOATING WHATSAPP ════════════════════════ */}
    </div>
    
  );
}
