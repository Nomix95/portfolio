'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElements = textRef.current?.querySelectorAll('.footer-line');
    if (!textElements) return;

    gsap.fromTo(textElements,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-background pt-32 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={textRef} className="flex flex-col mb-24">
          <h2 className="footer-line text-5xl md:text-8xl font-heading font-bold uppercase leading-none overflow-hidden clip-text-reveal">
            STILL BUILDING.
          </h2>
          <h2 className="footer-line text-5xl md:text-8xl font-heading font-bold uppercase leading-none overflow-hidden clip-text-reveal">
            STILL LEARNING.
          </h2>
          <div className="flex flex-col gap-4 text-center mt-12 md:mt-0">
          <h2 className="footer-line text-5xl md:text-8xl font-heading font-bold uppercase leading-none overflow-hidden clip-text-reveal text-foreground">
            THE BEST
          </h2>
          <h2 className="footer-line text-5xl md:text-8xl font-heading font-bold uppercase leading-none overflow-hidden clip-text-reveal text-primary">
            IS YET TO COME.
          </h2>
          {/* Social Links */}
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mt-12 md:mt-8 opacity-0 transform translate-y-10 footer-link text-center">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Socials</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/Nomix95" target="_blank" rel="noreferrer" className="text-lg hover:text-primary transition-colors hover-target text-foreground">GitHub</a></li>
                <li><a href="https://www.instagram.com/nomi_x95" target="_blank" rel="noreferrer" className="text-lg hover:text-primary transition-colors hover-target text-foreground">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="mailto:noumanarif501@gmail.com" className="text-lg hover:text-primary transition-colors hover-target text-foreground">Email</a></li>
                <li><a href="https://wa.me/923416566535" target="_blank" rel="noreferrer" className="text-lg hover:text-primary transition-colors hover-target text-foreground">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Nouman Arif. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://github.com/Nomix95" target="_blank" rel="noreferrer" className="hover:text-[#111111] transition-colors hover-target uppercase tracking-widest">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#111111] transition-colors hover-target uppercase tracking-widest">LinkedIn</a>
            <a href="https://www.instagram.com/nomi_x95" target="_blank" rel="noreferrer" className="hover:text-[#111111] transition-colors hover-target uppercase tracking-widest">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
