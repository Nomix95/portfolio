'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from '@/lib/gsap';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textLines = textRef.current?.querySelectorAll('.reveal-line');
    
    if (textLines) {
      gsap.fromTo(textLines,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
    }

    if (imageRef.current) {
      gsap.fromTo(imageRef.current,
        { scale: 1.2, autoAlpha: 0, clipPath: 'inset(20% 20% 20% 20%)' },
        {
          scale: 1,
          autoAlpha: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          }
        }
      );
    }
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-32 px-8 bg-background relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 w-full relative" ref={imageRef}>
          <div className="aspect-[4/5] w-full bg-white/5 rounded-[28px] overflow-hidden relative group shadow-[0_30px_80px_rgba(17,17,17,0.08)] border border-black/5">
            <Image
              src="/images/profile/avatar.jpg"
              alt="Nouman Arif"
              fill
              className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 pointer-events-none" />
          </div>
        </div>

        <div className="flex-1" ref={textRef}>
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-8 font-bold">About Me</h2>
          
          <div className="text-3xl md:text-5xl font-heading font-semibold leading-tight text-foreground mb-8">
            <div className="overflow-hidden"><div className="reveal-line">AI & DATA</div></div>
            <div className="overflow-hidden"><div className="reveal-line">FULL-STACK</div></div>
            <div className="overflow-hidden"><div className="reveal-line text-gradient">ENGINEERING</div></div>
          </div>

          <div className="text-gray-600 space-y-6 text-lg max-w-lg">
            <div className="overflow-hidden"><p className="reveal-line">I am a results-driven Computer Science undergraduate with proven experience across full-stack web development, AI-powered systems, and WordPress development.</p></div>
            <div className="overflow-hidden"><p className="reveal-line">I deliver end-to-end solutions — from LLM pipelines and cross-platform apps to WooCommerce stores, SEO copy, and branded video assets.</p></div>
            <div className="overflow-hidden"><p className="reveal-line">Combining strong engineering fundamentals with creative execution across multiple media formats.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
