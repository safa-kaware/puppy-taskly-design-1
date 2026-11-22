import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Home, X } from 'lucide-react';
import { SIX_WEEK_PROGRAM, WeekCurriculum } from '../data/pawuahasData';
import { PawPrintIcon, PuppyImage } from './PawDecorations';

interface WeekDetailModalProps {
  week: WeekCurriculum | null;
  onClose: () => void;
  onSelectWeek: (week: WeekCurriculum) => void;
  onOpenRegistration: () => void;
}

export function WeekDetailModal({
  week,
  onClose,
  onSelectWeek,
  onOpenRegistration,
}: WeekDetailModalProps) {
  useEffect(() => {
    if (!week) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [week, onClose]);

  if (!week) return null;

  const currentIndex = SIX_WEEK_PROGRAM.findIndex(
    (item) => item.weekNumber === week.weekNumber
  );
  const prevWeek = currentIndex > 0 ? SIX_WEEK_PROGRAM[currentIndex - 1] : null;
  const nextWeek =
    currentIndex < SIX_WEEK_PROGRAM.length - 1
      ? SIX_WEEK_PROGRAM[currentIndex + 1]
      : SIX_WEEK_PROGRAM[0];
  const isLastWeek = currentIndex === SIX_WEEK_PROGRAM.length - 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#162B4D]/45 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="week-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-[#FAFBFD] paw-shadow p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar inside modal */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-semibold text-[#277D89] flex items-center gap-1.5">
              <PawPrintIcon className="w-3.5 h-3.5" />
              <span>Week {week.weekNumber} of 06 · Pawuahas Curriculum</span>
            </p>
            <h3
              id="week-modal-title"
              className="font-display text-2xl sm:text-3xl font-bold text-[#162B4D] mt-1.5"
            >
              {week.fullTitle}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close week details"
            className="w-10 h-10 rounded-full bg-[#EAF4FC] text-[#162B4D] hover:bg-[#D8EBFB] flex items-center justify-center shrink-0 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#277D89]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image + Overview grid */}
        <div className="grid md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-5">
            <div className="aspect-[4/3] rounded-[24px] overflow-hidden bg-[#EAF4FC] paw-shadow-soft">
              <PuppyImage
                src={week.image}
                alt={week.imageAlt}
                fallbackTitle={week.shortTitle}
              />
            </div>

            <div className={`mt-4 rounded-2xl p-4 ${week.surfaceClass}`}>
              <p className="text-xs font-semibold text-[#162B4D] flex items-center gap-2 mb-1">
                <Home className="w-4 h-4 text-[#277D89]" />
                At-Home Practice Focus
              </p>
              <p className="text-xs sm:text-sm text-[#415572] leading-relaxed">
                {week.homeFocus}
              </p>
            </div>
          </div>

          <div className="md:col-span-7 space-y-5">
            <p className="text-sm sm:text-base text-[#415572] leading-relaxed">
              {week.description}
            </p>

            <div>
              <h4 className="font-display text-base font-bold text-[#162B4D] mb-3">
                What Your Puppy Will Learn
              </h4>
              <ul className="space-y-2.5">
                {week.learnings.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-[#162B4D]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#277D89] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Actions: Previous, Next Week, Save Spot */}
        <div className="mt-8 pt-5 border-t border-[#E1EEF9] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {prevWeek && (
              <button
                type="button"
                onClick={() => onSelectWeek(prevWeek)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#EAF4FC] text-[#162B4D] text-xs sm:text-sm font-semibold hover:bg-[#D8EBFB] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => onSelectWeek(nextWeek)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#E2F2F3] text-[#162B4D] text-xs sm:text-sm font-semibold hover:bg-[#CEE7EA] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>
                {isLastWeek ? 'Restart at Week 01' : `Next: Week ${nextWeek.weekNumber}`}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenRegistration();
            }}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#162B4D] text-[#FAFBFD] text-xs sm:text-sm font-semibold hover:bg-[#213E6D] transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Save My Puppy&apos;s Spot
          </button>
        </div>
      </div>
    </div>
  );
}
