import React from 'react';
import { Trophy, Gauge, Zap, Flag } from 'lucide-react';

const items = [
  {
    icon: Trophy,
    title: 'Precision Wins',
    text: 'Races are decided by milliseconds—every braking point, apex, and throttle trace matters.'
  },
  {
    icon: Gauge,
    title: 'Engineering Power',
    text: 'Aero, tyres, and hybrid systems turn physics into lap time through relentless iteration.'
  },
  {
    icon: Zap,
    title: 'Data-Driven',
    text: 'Hundreds of live telemetry channels feed strategy calls and unlock driver performance.'
  },
  {
    icon: Flag,
    title: 'Safer and Faster',
    text: 'Modern safety tech protects drivers while pushing performance to new limits.'
  }
];

export default function Highlights() {
  return (
    <section id="highlights" className="container mx-auto px-6 py-16">
      <div className="mb-8 md:mb-12 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Racing, Distilled</h2>
          <p className="mt-2 text-neutral-300">Four pillars that turn speed into victory.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 hover:bg-neutral-900 transition-colors">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-red-600/10 p-2 text-red-400">
                <item.icon size={22} />
              </div>
              <h3 className="font-semibold">{item.title}</h3>
            </div>
            <p className="mt-3 text-sm text-neutral-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
