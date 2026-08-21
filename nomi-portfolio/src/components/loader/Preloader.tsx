'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Fake loading progress
    const progressObj = { value: 0 };
    tl.to(progressObj, {
      value: 100,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => {
        setProgress(Math.round(progressObj.value));
      },
    })
    .to(wipeRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "power4.inOut",
    }, "+=0.2")
    .to(containerRef.current, {
      autoAlpha: 0,
      duration: 0.1,
    });

  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background pointer-events-none"
    >
      <div className="absolute bottom-10 right-10 overflow-hidden">
        <span
          ref={progressRef}
          className="text-[120px] font-heading font-bold text-white/10 leading-none"
        >
          {progress}%
        </span>
      </div>
      <div className="w-64 h-[2px] bg-white/20 relative overflow-hidden mt-8 rounded-full">
        <div 
          className="absolute top-0 left-0 h-full bg-primary"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Wipe element */}
      <div 
        ref={wipeRef} 
        className="absolute inset-0 z-10 bg-primary translate-y-full"
      />
    </div>
  );
}
