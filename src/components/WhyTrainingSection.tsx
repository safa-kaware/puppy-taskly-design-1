import React from 'react';
import { WHY_TRAIN_CARDS } from '../data/pawuahasData';
import { PuppyBadgeIllustration, PuppyImage } from './PawDecorations';

export function WhyTrainingSection() {
  return (
    <section id="why-train" className="py-20 lg:py-28 bg-[#F8FBFE] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-[#277D89] mb-2.5">
            Why Puppy Training Matters
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#162B4D] text-balance">
            Small Paws. Big Potential.
          </h2>
          <p className="mt-4 text-base text-[#415572] leading-relaxed">
            Early puppyhood shapes how your dog sees the world. Thoughtful guidance during these first months builds habits that last a lifetime.
          </p>
        </div>

        {/* Three visually distinctive rounded organic cards */}
        <div className="grid md:grid-cols-3 gap-7 lg:gap-8">
          {WHY_TRAIN_CARDS.map((card, index) => (
            <article
              key={card.id}
              className={`group rounded-[32px] p-5 sm:p-6 ${card.surfaceBg} paw-shadow-soft transition-transform duration-200 hover:-translate-y-1.5 flex flex-col justify-between ${
                index === 1 ? 'md:translate-y-4' : ''
              }`}
            >
              <div>
                {/* Photo frame with overlapping custom puppy illustration */}
                <div className="relative mb-7">
                  <div className="aspect-[4/3] rounded-[24px] overflow-hidden bg-white">
                    <PuppyImage
                      src={card.image}
                      alt={card.imageAlt}
                      fallbackTitle={card.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="absolute -bottom-5 right-4 w-16 h-16 rounded-2xl bg-white p-1.5 paw-shadow-soft transition-transform duration-200 group-hover:rotate-3">
                    <PuppyBadgeIllustration
                      type={card.illustrationType}
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <div className="px-1">
                  <span className={`font-display text-xs font-semibold ${card.accentTint}`}>
                    {card.number}.
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#162B4D] mt-1">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base font-medium text-[#162B4D]/85">
                    {card.description}
                  </p>
                  <p className="mt-2.5 text-sm text-[#415572] leading-relaxed">
                    {card.detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
