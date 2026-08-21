'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import { cn } from '@/lib/utils';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if device is desktop
    const checkIsDesktop = !window.matchMedia('(max-width: 768px)').matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDesktop(checkIsDesktop);
    
    if (!checkIsDesktop) {
      return;
    }

    const cursor = cursorRef.current;
    const cursorLabel = cursorLabelRef.current;
    
    if (!cursor || !cursorLabel) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Update cursor position using GSAP ticker for smoothness
    const updateCursor = () => {
      gsap.set(cursor, {
        x: mouseX,
        y: mouseY,
      });
      gsap.set(cursorLabel, {
        x: mouseX,
        y: mouseY,
      });
    };

    gsap.ticker.add(updateCursor);

    // Add hover states to all links and buttons
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hover-target')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      gsap.ticker.remove(updateCursor);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      {/* Small dot */}
      <div
        ref={cursorRef}
        className={cn(
          "fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out",
          isHovering ? "scale-0 opacity-0" : "scale-100 opacity-100"
        )}
      />
      {/* Large hover state */}
      <div
        ref={cursorLabelRef}
        className={cn(
          "fixed top-0 left-0 w-20 h-20 bg-white/10 backdrop-blur-md rounded-full pointer-events-none z-[99] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 ease-out border border-white/20",
          isHovering ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-white">
          View
        </span>
      </div>
    </>
  );
}
