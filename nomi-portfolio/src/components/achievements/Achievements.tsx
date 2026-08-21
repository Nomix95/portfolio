'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { achievements, statistics } from '@/data/achievements';

export default function Achievements() {
  const containerRef = useRef<HTMLElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Stat counter animation
    statsRef.current.forEach((stat) => {
      if (!stat) return;
      const numSpan = stat.querySelector('.stat-num');
      if (!numSpan) return;
      const endValue = parseFloat(numSpan.getAttribute('data-value') || '0');

      gsap.to(numSpan, {
        innerHTML: endValue,
        duration: 2,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: stat,
          start: "top 85%",
        }
      });
    });

    // Cards staggered fade in
    gsap.fromTo(cardsRef.current,
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-8 bg-background relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        
        <div className="md:w-1/2">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-8 font-bold">Key Stats</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {statistics.map((stat, i) => (
              <div 
                key={i} 
                ref={el => { statsRef.current[i] = el; }}
                className="flex flex-col"
              >
                <div className="flex items-baseline mb-2">
                  <span className="text-6xl md:text-8xl font-heading font-black text-foreground">
                    <span className="stat-num" data-value={stat.value}>0</span>
                  </span>
                  <span className="text-4xl md:text-6xl font-heading font-bold text-foreground">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 w-full flex flex-col gap-8">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-bold">Milestones & Ed.</h2>
          {achievements.map((item, index) => (
            <div 
              key={item.id}
              ref={el => { cardsRef.current[index] = el; }}
              className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-gray-400 transition-colors shadow-sm"
            >
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
