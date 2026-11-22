import React, { useState } from 'react';
import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { SIX_WEEK_PROGRAM, WeekCurriculum } from '../data/pawuahasData';
import { PawPrintIcon } from './PawDecorations';

interface SixWeekProgramSectionProps {
  onSelectWeek: (week: WeekCurriculum) => void;
}

export function SixWeekProgramSection({ onSelectWeek }: SixWeekProgramSectionProps) {
  const [hoveredWeek, setHoveredWeek] = useState<string | null>(null);

  return (
    <section
      id="program"
      className="py-20 lg:py-28 bg-gradient-to-b from-[#F8FBFE] via-[#EEF6FC] to-[#F8FBFE] relative overflow-hidden"
    >
      {/* Soft organic backdrop accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-14 -right-28 w-[380px] h-[380px] rounded-full bg-[#E8E3FA]/55 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 -left-24 w-[360px] h-[360px] rounded-full bg-[#DFEFF1]/65 blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#277D89] mb-2.5">
              The Six-Week Learning Journey
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#162B4D] text-balance">
              Six Weeks to a Happier, More Confident Puppy.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#415572] max-w-md leading-relaxed">
            Step week by week through gentle foundations to real-world confidence. Click any week to explore what your puppy will learn.
          </p>
        </div>

        {/* Interactive Journey Stepper Ribbon */}
        <div className="hidden md:flex items-center justify-between bg-white/85 backdrop-blur-sm rounded-full px-6 py-3 mb-10 paw-shadow-soft border border-[#DCEBFA]">
          {SIX_WEEK_PROGRAM.map((week, idx) => {
            const isHovered = hoveredWeek === week.weekNumber;
            return (
              <React.Fragment key={week.weekNumber}>
                <button
                  type="button"
                  onClick={() => onSelectWeek(week)}
                  onMouseEnter={() => setHoveredWeek(week.weekNumber)}
                  onMouseLeave={() => setHoveredWeek(null)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#277D89] ${
                    isHovered
                      ? 'bg-[#162B4D] text-white'
                      : 'text-[#162B4D] hover:bg-[#EAF4FC]'
                  }`}
                >
                  <span className="tabular-nums">Wk {week.weekNumber}</span>
                  <span className="hidden xl:inline font-normal opacity-80">
                    {week.shortTitle.split(' ')[0]}
                  </span>
                </button>
                {idx < SIX_WEEK_PROGRAM.length - 1 && (
                  <div className="flex-1 flex items-center justify-center px-1" aria-hidden="true">
                    <div className="h-[1.5px] w-full bg-gradient-to-r from-[#CFE5F7] via-[#B4ACEB]/60 to-[#CFE5F7]" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* 6 Interactive Journey Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {SIX_WEEK_PROGRAM.map((week, index) => {
            const isLast = index === SIX_WEEK_PROGRAM.length - 1;
            const isActive = hoveredWeek === week.weekNumber;

            return (
              <button
                key={week.weekNumber}
                type="button"
                onClick={() => onSelectWeek(week)}
                onMouseEnter={() => setHoveredWeek(week.weekNumber)}
                onMouseLeave={() => setHoveredWeek(null)}
                className={`group text-left rounded-[30px] p-6 sm:p-7 bg-white paw-shadow-soft border transition-all duration-200 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#277D89] ${
                  isActive
                    ? 'border-[#277D89]/60 shadow-[0_20px_44px_-14px_rgba(39,125,137,0.22)]'
                    : 'border-[#E2EEF9]'
                } ${index % 2 === 1 ? 'lg:translate-y-3' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span
                      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl text-xs font-semibold tabular-nums text-[#162B4D] ${week.surfaceClass}`}
                    >
                      {isLast ? (
                        <GraduationCap className="w-3.5 h-3.5 text-[#277D89]" />
                      ) : (
                        <PawPrintIcon className="w-3.5 h-3.5 text-[#277D89]" />
                      )}
                      <span>Week {week.weekNumber}</span>
                    </span>

                    <span className="w-9 h-9 rounded-full bg-[#F4F8FD] text-[#162B4D] flex items-center justify-center group-hover:bg-[#162B4D] group-hover:text-white transition-colors duration-150">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#162B4D] leading-snug">
                    {week.shortTitle}
                  </h3>

                  <p className="mt-2.5 text-sm text-[#415572] leading-relaxed">
                    {week.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EFF5FB] flex items-center justify-between text-xs font-semibold text-[#277D89]">
                  <span>View Week {week.weekNumber} Curriculum</span>
                  <span className="tabular-nums text-[#566C8A]">
                    {week.learnings.length} key skills
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
