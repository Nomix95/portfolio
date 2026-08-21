'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from '@/lib/gsap';
import MagneticButton from '../ui/MagneticButton';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);
  const bottomRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3 }); // wait for preloader

    tl.fromTo(textRefs.current,
      { yPercent: 110, autoAlpha: 0 },
      { yPercent: 0, autoAlpha: 1, duration: 1.15, stagger: 0.18, ease: 'power4.out' }
    )
    .fromTo(lineRef.current,
      { scaleX: 0, autoAlpha: 0 },
      { scaleX: 1, autoAlpha: 1, duration: 1.4, ease: 'power4.inOut' },
      "-=0.4"
    )
    .fromTo(bottomRefs.current,
      { y: 42, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1, stagger: 0.12, ease: 'power3.out' },
      "-=0.9"
    );

    gsap.to(textRefs.current, {
      yPercent: 28,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        invalidateOnRefresh: true,
      }
    });
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.10),transparent_28%)] pointer-events-none" />
      <div className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[40vw] h-[40vw] bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex-1 flex flex-col justify-center max-w-[1400px] mx-auto w-full z-10 relative mt-20">
        <div className="absolute top-0 right-0 md:right-8 lg:right-16 -mt-8 md:-mt-4 flex flex-col items-end gap-3 text-gray-500 z-20 hover-target">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-[5px] border-white bg-white shadow-[0_20px_60px_rgba(17,17,17,0.15)]">
            <Image
              src="/images/profile/avatar.jpg"
              alt="Nouman Arif"
              width={320}
              height={320}
              priority
              className="w-full h-full object-cover object-center scale-105"
            />
          </div>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.35em] text-right text-gray-500">
            Daska, Punjab<br />Pakistan
          </p>
        </div>

        <div className="mb-4">
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-gray-700 backdrop-blur-sm shadow-sm">
            Full-stack engineer • digital product builder
          </span>
        </div>

        <div className="overflow-hidden">
          <h1
            ref={el => { textRefs.current[0] = el; }}
            className="text-[clamp(4.5rem,11vw,15rem)] md:text-[8vw] font-heading font-black leading-[0.78] uppercase text-foreground"
          >
            HELLO,
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            ref={el => { textRefs.current[1] = el; }}
            className="text-[clamp(4.5rem,11vw,15rem)] md:text-[8vw] font-heading font-black leading-[0.78] text-gradient uppercase pl-[10vw] md:pl-[8vw]"
          >
            I&apos;M NOUMAN
          </h1>
        </div>
        <div className="overflow-hidden mt-4 md:mt-0">
          <h1
            ref={el => { textRefs.current[2] = el; }}
            className="text-[clamp(3.2rem,8vw,11rem)] md:text-[6vw] font-heading font-bold leading-[0.9] text-gray-400 uppercase"
          >
            FULL-STACK DEV
          </h1>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto z-10">
        <div ref={lineRef} className="w-full h-[1px] bg-white/20 origin-left mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div
            ref={el => { bottomRefs.current[0] = el; }}
            className="max-w-xl text-base md:text-lg text-gray-700"
          >
            <p>
              I build immersive digital experiences, blending product thinking, engineering precision, and cinematic design for brands that want to stand out.
            </p>
          </div>
          <div ref={el => { bottomRefs.current[1] = el; }}>
            <MagneticButton className="flex items-center gap-2" onClick={scrollToProjects} type="button">
              <span>VIEW WORK</span>
              <ArrowDownRight className="w-5 h-5" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
