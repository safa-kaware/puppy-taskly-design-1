import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIAL_PLACEHOLDERS } from '../data/pawuahasData';
import { PawPrintIcon } from './PawDecorations';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = TESTIMONIAL_PLACEHOLDERS.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-gradient-to-b from-[#F8FBFE] via-[#EEF6FC]/85 to-[#F8FBFE] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Heading + Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold text-[#277D89] mb-2.5">
              Client Story Slots · Editable Placeholders
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#162B4D] text-balance">
              Happy Puppies. Happier Humans.
            </h2>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full bg-white text-[#162B4D] border border-[#CFE5F7] paw-shadow-soft hover:bg-[#EAF4FC] active:scale-95 transition-all duration-150 flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#277D89]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full bg-[#162B4D] text-white paw-shadow-soft hover:bg-[#213E6D] active:scale-95 transition-all duration-150 flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#277D89]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Viewport */}
        <div className="overflow-hidden rounded-[34px]">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {TESTIMONIAL_PLACEHOLDERS.map((item, idx) => (
              <div key={item.id} className="w-full shrink-0 px-1">
                <article
                  className={`rounded-[34px] p-7 sm:p-10 lg:p-12 ${item.surfaceClass} paw-shadow-soft border border-white/80`}
                >
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-white text-[#277D89] flex items-center justify-center paw-shadow-soft">
                      <Quote className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-[#566C8A] tabular-nums">
                      Placeholder {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </span>
                  </div>

                  <blockquote className="font-display text-xl sm:text-2xl font-semibold text-[#162B4D] leading-snug max-w-4xl">
                    {item.quote}
                  </blockquote>

                  <div className="mt-8 pt-6 border-t border-[#162B4D]/8 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-white text-[#277D89] flex items-center justify-center paw-shadow-soft">
                        <PawPrintIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-display text-sm sm:text-base font-bold text-[#162B4D]">
                          {item.authorPlaceholder}
                        </p>
                        <p className="text-xs sm:text-sm text-[#415572]">
                          {item.puppyPlaceholder} · {item.cohortPlaceholder}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs text-[#566C8A]">
                      Editable placeholder — replace with real client feedback
                    </span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="mt-7 flex items-center justify-center gap-2.5" role="tablist" aria-label="Testimonial slides">
          {TESTIMONIAL_PLACEHOLDERS.map((item, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isCurrent}
                aria-label={`View testimonial placeholder ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#277D89] ${
                  isCurrent ? 'w-8 bg-[#162B4D]' : 'w-2.5 bg-[#BFD7EC] hover:bg-[#8FB7DB]'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
