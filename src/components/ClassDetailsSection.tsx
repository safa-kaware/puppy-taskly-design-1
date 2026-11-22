import React from 'react';
import { CalendarDays, Clock, DollarSign, MapPin, Users } from 'lucide-react';
import { CLASS_DETAILS } from '../data/pawuahasData';

interface ClassDetailsSectionProps {
  onOpenRegistration: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  duration: <Clock className="w-5 h-5" />,
  location: <MapPin className="w-5 h-5" />,
  'class-size': <Users className="w-5 h-5" />,
  price: <DollarSign className="w-5 h-5" />,
  status: <CalendarDays className="w-5 h-5" />,
};

export function ClassDetailsSection({ onOpenRegistration }: ClassDetailsSectionProps) {
  return (
    <section id="details" className="py-20 lg:py-28 bg-[#F8FBFE] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-[#277D89] mb-2.5">
              Program Snapshot
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#162B4D] text-balance">
              Everything You Need to Plan Your Puppy&apos;s Spot.
            </h2>
          </div>

          <button
            type="button"
            onClick={onOpenRegistration}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#162B4D] text-[#FAFBFD] text-sm sm:text-base font-semibold whitespace-nowrap shrink-0 paw-shadow-soft hover:bg-[#213E6D] hover:-translate-y-0.5 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#277D89] focus-visible:ring-offset-2 self-start md:self-auto"
          >
            Save My Puppy&apos;s Spot
          </button>
        </div>

        {/* Asymmetric cards: top 2 wide cards + bottom 3 detail cards */}
        <div className="grid md:grid-cols-6 gap-6">
          {CLASS_DETAILS.map((detail, idx) => {
            const spanClass = idx < 2 ? 'md:col-span-3' : 'md:col-span-2';
            return (
              <div
                key={detail.id}
                className={`${spanClass} rounded-[28px] p-6 sm:p-7 ${detail.surfaceClass} paw-shadow-soft transition-transform duration-200 hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-white text-[#277D89] flex items-center justify-center paw-shadow-soft">
                      {ICON_MAP[detail.id]}
                    </div>
                    <span className="text-xs font-semibold text-[#566C8A]">
                      {detail.label}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#162B4D] leading-snug">
                    {detail.value}
                  </h3>
                </div>

                <p className="mt-3 text-sm text-[#415572] leading-relaxed">
                  {detail.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
