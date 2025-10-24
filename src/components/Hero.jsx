import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/20 to-neutral-950"></div>

      <div className="relative z-10 h-full flex items-end">
        <div className="container mx-auto px-6 pb-10 md:pb-16">
          <span className="inline-block rounded-full bg-red-600/10 text-red-300 px-3 py-1 text-xs tracking-wide uppercase">Feature</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            Full Throttle: The Art and Science of Car Racing
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-300 text-base md:text-lg">
            From split-second decisions to bleeding-edge engineering, modern racing blends courage, precision, and technology into the ultimate pursuit of speed.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#read"
              className="inline-flex items-center rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600/50"
            >
              Start Reading
            </a>
            <a
              href="#highlights"
              className="inline-flex items-center rounded-md border border-neutral-700 px-5 py-2.5 text-sm font-semibold hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-700"
            >
              Quick Highlights
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
