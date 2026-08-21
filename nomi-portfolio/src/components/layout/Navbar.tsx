'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Navbar slide down on load
    gsap.from(navRef.current, {
      yPercent: -100,
      duration: 1.5,
      ease: "power4.out",
      delay: 2.8, // Wait for preloader
    });
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;
    
    if (isOpen) {
      gsap.to(menuRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.8,
        ease: "power4.inOut"
      });
      gsap.fromTo(
        ".mobile-link",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.3, ease: "power3.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.8,
        ease: "power4.inOut"
      });
    }
  }, [isOpen]);

  return (
    <>
      <nav 
        ref={navRef} 
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference text-white"
      >
        <div className="text-xl font-bold font-heading uppercase tracking-widest hover-target cursor-pointer">
          Nomi.
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold uppercase tracking-widest hover:text-primary transition-colors hover-target"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side: Social/Contact */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="https://github.com/Nomix95" target="_blank" rel="noreferrer" className="text-sm font-medium uppercase tracking-widest text-foreground hover:text-gray-500 transition-colors">Github</a>
          <a href="https://www.instagram.com/nomi_x95" target="_blank" rel="noreferrer" className="text-sm font-medium uppercase tracking-widest text-foreground hover:text-gray-500 transition-colors">Instagram</a>
          <a
            href="https://wa.me/923416566535"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-gray-300 hover:border-foreground transition-colors bg-foreground text-background"
          >
            WhatsApp Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-[60] relative w-10 h-10 flex flex-col items-center justify-center gap-2 hover-target"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-8 h-[2px] bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[10px]' : ''}`} />
          <span className={`block w-8 h-[2px] bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-8 h-[2px] bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[10px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className="fixed inset-0 z-[55] bg-background flex items-center justify-center"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
      >
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="mobile-link text-4xl font-heading font-bold uppercase tracking-widest text-white hover-target"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
