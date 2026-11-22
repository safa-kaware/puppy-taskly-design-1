import React from 'react';
import { ArrowRight, Calendar, HeartHandshake } from 'lucide-react';
import { IMAGES } from '../data/pawuahasData';
import { FloatingPawTrail, PawPrintIcon, PuppyImage } from './PawDecorations';

export function HeroSection() {
  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-[#EDF6FD] via-[#F4F8FD] to-[#F8FBFE]"
    >
      {/* Organic soft pastel backdrop shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-24 w-[420px] h-[420px] rounded-full bg-[#D8EBFB]/55 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 right-[-8%] w-[460px] h-[460px] rounded-full bg-[#E8E3FA]/65 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 w-[360px] h-[220px] rounded-full bg-[#DFEFF1]/55 blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Copy Column */}
          <div className="lg:col-span-6 space-y-7">
            <p className="text-sm font-medium text-[#277D89] flex flex-wrap items-center gap-2">
              <span>Edmonton, Alberta</span>
              <span aria-hidden="true">·</span>
              <span>Small-Group Puppy Studio</span>
            </p>

            <h1 className="font-display text-[clamp(2.35rem,4.4vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-[#162B4D] text-balance">
              Big Adventures Start With Little Paws.
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#415572] max-w-xl">
              Give your puppy the confidence, skills and social experiences they need to grow into a happy, well-mannered companion.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                type="button"
                onClick={() => scrollToSection('#program')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#162B4D] text-[#FAFBFD] text-sm sm:text-base font-semibold whitespace-nowrap shrink-0 paw-shadow-soft hover:bg-[#213E6D] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#277D89] focus-visible:ring-offset-2"
              >
                <span>Explore Puppy Classes</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('#trainer')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white/90 text-[#162B4D] text-sm sm:text-base font-semibold whitespace-nowrap shrink-0 border border-[#CFE5F7] hover:bg-[#EAF4FC] hover:-translate-y-0.5 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#277D89] focus-visible:ring-offset-2"
              >
                Meet Your Trainer
              </button>
            </div>

            {/* Subtle unboxed trust summary strip */}
            <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#415572]">
              <span className="inline-flex items-center gap-2">
                <PawPrintIcon className="w-3.5 h-3.5 text-[#277D89]" />
                6-Week Curriculum
              </span>
              <span aria-hidden="true" className="text-[#9CB7D1]">·</span>
              <span>Kind, Reward-Based Coaching</span>
              <span aria-hidden="true" className="text-[#9CB7D1]">·</span>
              <span>Ages 8–20 Weeks</span>
            </div>
          </div>

          {/* Right Visual Showcase Column */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[540px]">
              {/* Organic layered pastel backing shape */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 sm:-inset-5 rounded-[44px] bg-gradient-to-tr from-[#D8EBFB] via-[#EAE6FA] to-[#DFEFF1] -rotate-2"
              />

              {/* Decorative animated paw trail */}
              <FloatingPawTrail className="absolute -inset-6 z-20" />

              {/* Main Puppy Image Frame */}
              <div className="relative z-10 aspect-[4/3] rounded-[36px] overflow-hidden bg-white paw-shadow border-4 border-white">
                <PuppyImage
                  src={IMAGES.heroPuppy}
                  alt="Golden Retriever puppy sitting attentively on a cream mat in the Pawuahas training studio"
                  fallbackTitle="Pawuahas Puppy Foundations"
                />
              </div>

              {/* Floating badge: Positive Reinforcement Training */}
              <div className="relative sm:absolute z-20 mt-4 sm:mt-0 sm:-top-5 sm:-left-6 bg-white/96 backdrop-blur-sm rounded-2xl px-4 py-3 paw-shadow-soft border border-[#DCEBFA] flex items-center gap-3 max-w-[270px] animate-soft-drift">
                <div className="w-9 h-9 rounded-xl bg-[#DFEFF1] text-[#277D89] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-display text-xs sm:text-sm font-semibold text-[#162B4D] leading-snug">
                    Positive Reinforcement Training
                  </p>
                  <p className="text-[11px] text-[#566C8A]">Confidence without pressure</p>
                </div>
              </div>

              {/* Floating mini-card: 6 Weeks of Learning & Growing */}
              <div
                className="relative sm:absolute z-20 mt-3 sm:mt-0 sm:-bottom-6 sm:-right-4 bg-white/96 backdrop-blur-sm rounded-2xl px-4 py-3 paw-shadow-soft border border-[#E4E0FA] flex items-center gap-3 max-w-[270px] animate-soft-drift"
                style={{ animationDelay: '1.1s' }}
              >
                <div className="w-9 h-9 rounded-xl bg-[#EAE6FA] text-[#4C458F] flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-display text-xs sm:text-sm font-semibold text-[#162B4D] leading-snug">
                    6 Weeks of Learning &amp; Growing
                  </p>
                  <p className="text-[11px] text-[#566C8A]">Weekly guided sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organic curved section transition */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 72" fill="none" className="w-full h-10 sm:h-14" preserveAspectRatio="none">
          <path
            d="M0 48C280 8 560 72 880 38C1120 12 1300 22 1440 42V72H0V48Z"
            fill="#F8FBFE"
          />
        </svg>
      </div>
    </section>
  );
}
