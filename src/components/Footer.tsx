import React from 'react';
import { NAV_LINKS } from '../data/pawuahasData';
import { PawPrintIcon } from './PawDecorations';

interface FooterProps {
  onOpenRegistration: () => void;
}

export function Footer({ onOpenRegistration }: FooterProps) {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#EEF6FC] pt-12 pb-10 text-[#415572]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[#D5E6F7]">
          <div className="space-y-2">
            <a
              href="#top"
              onClick={(e) => scrollTo(e, '#top')}
              className="inline-flex items-center gap-2 font-display text-2xl font-bold text-[#162B4D]"
            >
              <PawPrintIcon className="w-5 h-5 text-[#277D89]" />
              <span>Pawuahas</span>
            </a>
            <p className="text-sm text-[#415572]">
              Positive Reinforcement Puppy Training · Edmonton, Alberta, Canada
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="hover:text-[#162B4D] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={onOpenRegistration}
              className="text-[#277D89] font-semibold hover:text-[#162B4D] transition-colors cursor-pointer whitespace-nowrap"
            >
              Register
            </button>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#566C8A]">
          <p>© {new Date().getFullYear()} Pawuahas. Interactive Website Prototype.</p>
          <p>Designed for Edmonton puppy families.</p>
        </div>
      </div>
    </footer>
  );
}
