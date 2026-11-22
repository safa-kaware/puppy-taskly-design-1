import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { EXPERIENCE_PILLARS, IMAGES } from '../data/pawuahasData';
import { PawPrintIcon, PuppyImage } from './PawDecorations';

export function ExperienceSection() {
  const [activeId, setActiveId] = useState<string>(EXPERIENCE_PILLARS[0].id);
  const activePillar =
    EXPERIENCE_PILLARS.find((p) => p.id === activeId) ?? EXPERIENCE_PILLARS[0];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#F8FBFE] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Overlapping Creative Photo Collage */}
          <div className="lg:col-span-6 relative">
            {/* Soft organic pastel backing */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 sm:-inset-6 rounded-[48px] bg-gradient-to-br from-[#EAE6FA]/75 via-[#EAF4FC]/85 to-[#DFEFF1]/75 rotate-1"
            />

            <div className="relative z-10 grid grid-cols-12 gap-4 items-start">
              {/* Primary large overlapping class image */}
              <div className="col-span-12 sm:col-span-10 aspect-[4/3] rounded-[32px] overflow-hidden border-4 border-white paw-shadow bg-white">
                <PuppyImage
                  src={IMAGES.experienceClass}
                  alt="Small group puppy training class in a bright contemporary Edmonton-style studio"
                  fallbackTitle="Small Group Puppy Classes"
                />
              </div>

              {/* Secondary overlapping socialisation image */}
              <div className="col-span-7 sm:col-span-6 sm:-mt-16 sm:ml-auto aspect-[4/3] rounded-[26px] overflow-hidden border-4 border-white paw-shadow bg-white z-20">
                <PuppyImage
                  src={IMAGES.whyFriends}
                  alt="Two puppies greeting gently on a pale blue mat during guided socialisation"
                  fallbackTitle="Guided Socialisation"
                />
              </div>

              {/* Playful floating studio experience card */}
              <div className="col-span-5 sm:col-span-5 sm:-mt-10 bg-white/95 backdrop-blur-sm rounded-[24px] p-4 sm:p-5 paw-shadow-soft border border-[#DCEBFA] z-20 self-end">
                <div className="w-9 h-9 rounded-xl bg-[#EAF4FC] text-[#277D89] flex items-center justify-center mb-2.5">
                  <PawPrintIcon className="w-4 h-4" />
                </div>
                <p className="font-display text-sm font-bold text-[#162B4D] leading-snug">
                  {activePillar.title}
                </p>
                <p className="mt-1 text-xs text-[#415572] leading-relaxed">
                  {activePillar.highlightNote}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Interactive 5-Pillar Class Experience */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-sm font-semibold text-[#277D89] mb-2.5">
                Inside Every Session
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#162B4D] text-balance">
                More Than Training. It&apos;s a Puppy Adventure.
              </h2>
              <p className="mt-4 text-base text-[#415572] leading-relaxed">
                Every class balances joyful learning, calm breathing room, and practical coaching so both you and your puppy look forward to each week.
              </p>
            </div>

            <div className="space-y-3" role="tablist" aria-label="Class experience pillars">
              {EXPERIENCE_PILLARS.map((pillar, idx) => {
                const isSelected = pillar.id === activeId;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveId(pillar.id)}
                    onMouseEnter={() => setActiveId(pillar.id)}
                    className={`w-full text-left rounded-[22px] p-4 sm:px-5 sm:py-4 transition-all duration-150 cursor-pointer flex items-start gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#277D89] ${
                      isSelected
                        ? 'bg-white paw-shadow-soft border border-[#CFE5F7]'
                        : 'bg-[#F1F7FC]/70 border border-transparent hover:bg-white/80'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isSelected
                          ? 'bg-[#162B4D] text-white'
                          : 'bg-[#D8EBFB] text-[#162B4D]'
                      }`}
                    >
                      {idx === 1 ? (
                        <Sparkles className="w-4 h-4" />
                      ) : (
                        <Check className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-[#162B4D]">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#415572] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
