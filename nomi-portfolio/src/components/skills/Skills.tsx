'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { skills } from '@/data/skills';

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      }
    });

    tl.fromTo(titleRef.current, 
      { autoAlpha: 0, x: -50 },
      { autoAlpha: 1, x: 0, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(itemsRef.current,
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
      "-=0.4"
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-8 bg-background border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 ref={titleRef} className="text-5xl md:text-7xl font-heading font-black uppercase text-gray-200 break-words leading-none">
            TECHNOLOGIES
          </h2>
        </div>
        
        <div className="md:w-2/3 flex flex-col border-t border-gray-200">
          {skills.map((skill, index) => (
            <div 
              key={skill.id}
              ref={el => { itemsRef.current[index] = el; }}
              className="group flex justify-between items-center py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors hover-target px-4 -mx-4 cursor-pointer"
            >
              <div className="flex items-center gap-8">
                <span className="text-sm font-mono text-gray-400">{skill.id}</span>
                <h3 className="text-2xl md:text-4xl font-heading font-bold uppercase transition-transform duration-300 group-hover:translate-x-4 text-foreground group-hover:text-[#111111]">
                  {skill.name}
                </h3>
              </div>
              <span className="text-sm uppercase tracking-widest text-gray-500 group-hover:text-gray-900 transition-colors">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
