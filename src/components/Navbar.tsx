import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/pawuahasData';

interface NavbarProps {
  onOpenRegistration: () => void;
}

export function Navbar({ onOpenRegistration }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#F8FBFE]/92 backdrop-blur-md shadow-[0_6px_24px_-12px_rgba(22,43,77,0.12)]'
          : 'bg-[#F8FBFE]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
          className="font-display text-2xl font-bold tracking-tight text-[#162B4D] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#277D89] rounded-lg px-1"
        >
          Pawuahas
        </a>

        {/* Zone 2: Concise single-line nav links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#415572]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#162B4D] transition-colors duration-150 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#277D89] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#277D89] rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action + mobile drawer trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenRegistration}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#162B4D] text-[#FAFBFD] text-sm font-semibold whitespace-nowrap shrink-0 hover:bg-[#213E6D] active:scale-[0.98] transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#277D89] focus-visible:ring-offset-2"
          >
            Join the Class
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-[#EAF4FC] text-[#162B4D] hover:bg-[#D8EBFB] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#277D89]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#F8FBFE]/98 backdrop-blur-md border-t border-[#D8EBFB] px-5 pt-3 pb-5 paw-shadow-soft">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-3 rounded-2xl text-base font-medium text-[#162B4D] hover:bg-[#EAF4FC] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-1">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenRegistration();
                }}
                className="w-full py-3 px-5 rounded-full bg-[#162B4D] text-[#FAFBFD] text-base font-semibold hover:bg-[#213E6D] transition-colors cursor-pointer"
              >
                Join the Class
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
