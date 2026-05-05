"use client";

import { usePathname } from 'next/navigation';

const HIDDEN_ROUTES = ['/terms-and-conditions', '/privacy-policy'];

export default function OfferBanner() {
  const pathname = usePathname();

  if (HIDDEN_ROUTES.includes(pathname)) return null;

  return (
    <>
      <style>{`
        .offer-banner-root {
          top: 60px !important;
        }
        @media (min-width: 640px) {
          .offer-banner-root {
            top: 68px !important;
          }
        }
      `}</style>

      <div
        className="offer-banner-root"
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          zIndex: 45,
          height: '42px',
          overflow: 'hidden',
          background: 'linear-gradient(90deg, #070a18 0%, #0c1230 30%, #111a40 50%, #0c1230 70%, #070a18 100%)',
          borderBottom: '1px solid rgba(79, 142, 255, 0.15)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(174,198,255,0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 16px',
          gap: '6px',
        }}
      >
        {/* Google My Business logo */}
        <img
          src="/images/gmb-logo.svg"
          alt="Google My Business"
          style={{
            width: '28px',
            height: '28px',
            flexShrink: 0,
            objectFit: 'contain',
          }}
        />

        {/* Divider */}
        <span style={{
          width: '1px',
          height: '18px',
          background: 'rgba(79,142,255,0.25)',
          margin: '0 6px',
          flexShrink: 0,
        }} />

        {/* Main offer text */}
        <span style={{
          fontSize: '13px',
          fontWeight: 800,
          color: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '0.02em',
          flexShrink: 0,
        }}>
          🔥 FREE GMB Setup
        </span>

        {/* Separator dot */}
        <span style={{ color: 'rgba(79,142,255,0.4)', fontSize: '8px', padding: '0 4px', flexShrink: 0 }}>●</span>

        {/* Features - hidden on small screens */}
        <span style={{
          fontSize: '12px',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.7)',
          fontFamily: 'Inter, sans-serif',
          flexShrink: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
          className="hidden sm:inline"
        >
          GMB Optimization • Google Map Listing • Call Button • Google Ads Setup
        </span>

        {/* Separator dot - hidden on small screens */}
        <span style={{ color: 'rgba(79,142,255,0.4)', fontSize: '8px', padding: '0 4px', flexShrink: 0 }} className="hidden md:inline">●</span>

        {/* Price badge */}
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', flexShrink: 0 }} className="hidden md:inline-flex">
          <span style={{
            textDecoration: 'line-through',
            color: 'rgba(255,255,255,0.35)',
            fontSize: '12px',
            fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
          }}>₹2,000</span>
          <span style={{
            background: 'linear-gradient(90deg, #16a34a, #22c55e)',
            color: '#fff',
            fontSize: '10px',
            fontWeight: 800,
            padding: '2px 8px',
            borderRadius: '4px',
            letterSpacing: '0.06em',
          }}>FREE</span>
        </span>

        {/* Separator */}
        <span style={{ color: 'rgba(79,142,255,0.4)', fontSize: '8px', padding: '0 4px', flexShrink: 0 }} className="hidden lg:inline">●</span>

        {/* Limited badge */}
        <span style={{
          color: '#fbbf24',
          fontSize: '12px',
          fontWeight: 700,
          fontFamily: 'Inter, sans-serif',
          textShadow: '0 0 10px rgba(251,191,36,0.3)',
          flexShrink: 0,
        }} className="hidden lg:inline">
          Limited Customers Only!
        </span>

        {/* Separator */}
        <span style={{ color: 'rgba(79,142,255,0.4)', fontSize: '8px', padding: '0 4px', flexShrink: 0 }} className="hidden xl:inline">●</span>

        {/* Phone */}
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }} className="hidden xl:inline-flex">
          <span style={{ fontSize: '12px' }}>📞</span>
          <a href="tel:+916355183655" style={{ color: '#aec6ff', textDecoration: 'none', fontSize: '12px', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>
            +91 6355183655
          </a>
        </span>
      </div>
    </>
  );
}
