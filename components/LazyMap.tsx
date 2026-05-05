"use client";

import { useEffect, useRef, useState } from 'react';

export default function LazyMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-outline-variant/10 shadow-2xl"
      style={{ height: '240px' }}
    >
      {show ? (
        <iframe
          title="Veyber location - Vadodara, Gujarat"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.288131823084!2d73.23085737518437!3d22.30494024272751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf720bfa9e3f%3A0x6a19fd666f82fc50!2sVeyber%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1777100125013!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'saturate(0.85) brightness(0.92)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-surface-container-high">
          <span className="text-sm text-on-surface-variant">Loading map...</span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-[0_0_24px_rgba(79,142,255,0.7)]">
          <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
            <circle cx="12" cy="10" r="3" fill="#001a42" />
          </svg>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 inset-x-0 flex items-end bg-gradient-to-t from-black/60 to-transparent px-4 pb-3 pt-8">
        <span className="text-xs font-semibold leading-tight text-white drop-shadow">
          310, Maa Darshan Flats, near Panchvati,
          <br />
          Ajwa Road, Vadodara - 390019
        </span>
      </div>
    </div>
  );
}
