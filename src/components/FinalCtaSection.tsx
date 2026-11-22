import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/pawuahasData';
import { FloatingPawTrail, PuppyImage } from './PawDecorations';

interface FinalCtaSectionProps {
  onOpenRegistration: () => void;
}

export function FinalCtaSection({ onOpenRegistration }: FinalCtaSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-[#F8FBFE] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[44px] bg-gradient-to-br from-[#DCEDF9] via-[#E8E3FA] to-[#DFEFF1] p-8 sm:p-12 lg:p-16 paw-shadow">
          <FloatingPawTrail className="absolute inset-0 opacity-75" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
            {/* Copy column */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm font-semibold text-[#246E78]">
                Pawuahas · Edmonton, Alberta
              </p>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#162B4D] leading-[1.1] text-balance">
                Your Puppy&apos;s Best Chapter Starts Here.
              </h2>

              <p className="text-base sm:text-lg text-[#364A66] max-w-xl leading-relaxed">
                Let&apos;s build confidence, create good habits and make puppyhood unforgettable.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenRegistration}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#162B4D] text-[#FAFBFD] text-base font-semibold whitespace-nowrap shrink-0 paw-shadow-soft hover:bg-[#213E6D] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#277D89] focus-visible:ring-offset-2"
                >
                  <span>Join the Puppy Class</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Puppy portrait visual column */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-[34px] overflow-hidden border-4 border-white paw-shadow bg-white max-w-md mx-auto lg:ml-auto rotate-1">
                <PuppyImage
                  src={IMAGES.finalCtaPuppy}
                  alt="Sweet Cavalier King Charles Spaniel puppy resting peacefully on a cream pillow"
                  fallbackTitle="Join Pawuahas"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
