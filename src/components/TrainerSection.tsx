import React from 'react';
import { Award, Heart, Quote } from 'lucide-react';
import { TRAINER_PROFILE } from '../data/pawuahasData';
import { PawPrintIcon, TrainerPortraitPlaceholderSvg } from './PawDecorations';

export function TrainerSection() {
  return (
    <section
      id="trainer"
      className="py-20 lg:py-28 bg-gradient-to-b from-[#F8FBFE] via-[#EFEBFB]/75 to-[#F8FBFE] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="rounded-[40px] bg-white/90 backdrop-blur-sm paw-shadow p-6 sm:p-10 lg:p-14 border border-[#E5E1F8]">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Editable Trainer Portrait Placeholder */}
            <div className="lg:col-span-5">
              <div className="relative max-w-sm mx-auto">
                <div className="rounded-[34px] overflow-hidden bg-[#EAF4FC] paw-shadow-soft border-4 border-white">
                  <TrainerPortraitPlaceholderSvg className="w-full h-auto block" />
                </div>

                <div className="mt-4 rounded-2xl bg-[#F4F8FD] border border-[#DCEBFA] px-4 py-3 text-center">
                  <p className="font-display text-xs font-semibold text-[#162B4D]">
                    Trainer Portrait Placeholder
                  </p>
                  <p className="text-[11px] text-[#566C8A] mt-0.5">
                    Replace with trainer studio headshot when ready
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Trainer Intro, Certifications Placeholder, Philosophy & Personal Message */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <p className="text-sm font-semibold text-[#277D89] mb-2">
                  Meet Your Trainer
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#162B4D]">
                  {TRAINER_PROFILE.namePlaceholder}
                </h2>
                <p className="mt-1.5 text-sm font-medium text-[#566C8A]">
                  {TRAINER_PROFILE.rolePlaceholder}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#415572] leading-relaxed">
                {TRAINER_PROFILE.introPlaceholder}
              </p>

              {/* Two clean info blocks: Certification placeholder & Philosophy */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-[24px] bg-[#EAF4FC] p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#277D89] mb-2">
                    <Award className="w-4 h-4" />
                    <span>Certifications &amp; Credentials</span>
                  </div>
                  <p className="text-sm text-[#162B4D]/90 leading-relaxed">
                    {TRAINER_PROFILE.certificationPlaceholder}
                  </p>
                </div>

                <div className="rounded-[24px] bg-[#E2F2F3] p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#246E78] mb-2">
                    <Heart className="w-4 h-4" />
                    <span>Training Philosophy</span>
                  </div>
                  <p className="text-sm text-[#162B4D]/90 leading-relaxed">
                    {TRAINER_PROFILE.philosophy}
                  </p>
                </div>
              </div>

              {/* Personal message to puppy parents */}
              <div className="rounded-[26px] bg-[#F5F3FC] p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#4C458F]">
                    <Quote className="w-4 h-4" />
                    <span>A Note to Puppy Parents</span>
                  </span>
                  <PawPrintIcon className="w-4 h-4 text-[#B4ACEB]" />
                </div>
                <p className="text-sm sm:text-base text-[#162B4D] leading-relaxed">
                  {TRAINER_PROFILE.personalMessage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
