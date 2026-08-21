'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { experiences } from '@/data/experience';

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const items = itemsRef.current;
    
    items.forEach((item, index) => {
      if (!item) return;
      
      const card = item.querySelector('.timeline-card');
      const node = item.querySelector('.timeline-node');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        }
      });

      tl.fromTo(node,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      )
      .fromTo(card,
        { autoAlpha: 0, x: index % 2 === 0 ? -30 : 30 },
        { autoAlpha: 1, x: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );
    });

  }, []);

  return (
    <section ref={containerRef} className="py-32 px-8 bg-background relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <span className="px-4 py-1.5 rounded-full bg-gray-100 text-xs font-semibold uppercase tracking-widest text-gray-600 mb-6 inline-block border border-gray-200">
            How I Work
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4">
            Experience & Process
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A proven track record of delivering high-quality software, from first conversation to successful launch.
          </p>
        </div>
        
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-2 md:-ml-[1px] bg-[#333333] rounded-full" />

          <div className="flex flex-col gap-12 md:gap-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  ref={el => { itemsRef.current[index] = el; }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                >
                  
                  {/* Content Card */}
                  <div className={`timeline-card w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className="card-dark inline-block w-full text-left p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center font-mono text-sm text-gray-400">
                          0{index + 1}
                        </span>
                        <h4 className="text-primary font-mono uppercase text-sm tracking-widest text-gray-400">
                          {exp.year}
                        </h4>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-white/60 font-medium mb-4">
                        {exp.company}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="timeline-node absolute left-[11px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-[#333333] z-10 shadow-lg" />
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
