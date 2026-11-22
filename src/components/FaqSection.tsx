import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/pawuahasData';
import { PawPrintIcon } from './PawDecorations';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F8FBFE] relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-[#277D89] mb-2.5">
            Helpful Answers
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#162B4D] text-balance">
            Questions Before Your First Class.
          </h2>
          <p className="mt-4 text-base text-[#415572]">
            Everything puppy parents in Edmonton commonly ask before starting their six-week journey.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-[26px] transition-colors duration-200 ${
                  isOpen
                    ? 'bg-white paw-shadow-soft border border-[#CFE5F7]'
                    : 'bg-[#EEF6FC]/75 border border-transparent hover:bg-white/90'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#277D89] rounded-[26px]"
                >
                  <span className="font-display text-base sm:text-lg font-bold text-[#162B4D] flex items-center gap-3">
                    <PawPrintIcon
                      className={`w-4 h-4 shrink-0 transition-colors ${
                        isOpen ? 'text-[#277D89]' : 'text-[#9BC4E6]'
                      }`}
                    />
                    <span>{item.question}</span>
                  </span>

                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#162B4D] text-white rotate-180'
                        : 'bg-white text-[#162B4D]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {/* Smooth CSS grid-row transition */}
                <div
                  id={`faq-panel-${item.id}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-250 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pl-13 text-sm sm:text-base text-[#415572] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
