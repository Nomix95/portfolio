'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { cn } from '@/lib/utils';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function MagneticButton({ children, className, ...props }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    if (!button || !text) return;

    const moveEvent = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      gsap.to(button, { x: x * 0.4, y: y * 0.4, duration: 1, ease: 'power3.out' });
      gsap.to(text, { x: x * 0.2, y: y * 0.2, duration: 1, ease: 'power3.out' });
    };

    const leaveEvent = () => {
      gsap.to(button, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)' });
      gsap.to(text, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.3)' });
    };

    button.addEventListener('mousemove', moveEvent);
    button.addEventListener('mouseleave', leaveEvent);

    return () => {
      button.removeEventListener('mousemove', moveEvent);
      button.removeEventListener('mouseleave', leaveEvent);
    };
  }, []);

  return (
    <button
      suppressHydrationWarning
      ref={buttonRef}
      className={cn(
        "relative rounded-full px-8 py-4 bg-primary text-white overflow-hidden hover-target group",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 w-full h-full bg-secondary translate-y-full rounded-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
      <span ref={textRef} className="relative z-10 block font-semibold">
        {children}
      </span>
    </button>
  );
}
