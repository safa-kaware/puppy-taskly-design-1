/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BackToTopButton } from './components/BackToTopButton';
import { ClassDetailsSection } from './components/ClassDetailsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { RegistrationModal } from './components/RegistrationModal';
import { SixWeekProgramSection } from './components/SixWeekProgramSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TrainerSection } from './components/TrainerSection';
import { WeekDetailModal } from './components/WeekDetailModal';
import { WhyTrainingSection } from './components/WhyTrainingSection';
import { WeekCurriculum } from './data/pawuahasData';

export default function App() {
  const [selectedWeek, setSelectedWeek] = useState<WeekCurriculum | null>(null);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const openRegistration = () => setIsRegistrationOpen(true);

  return (
    <div className="min-h-screen bg-[#F8FBFE] text-[#162B4D] flex flex-col">
      <Navbar onOpenRegistration={openRegistration} />

      <main className="flex-1">
        <HeroSection />
        <WhyTrainingSection />
        <SixWeekProgramSection onSelectWeek={setSelectedWeek} />
        <ExperienceSection />
        <TrainerSection />
        <ClassDetailsSection onOpenRegistration={openRegistration} />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection onOpenRegistration={openRegistration} />
      </main>

      <Footer onOpenRegistration={openRegistration} />
      <BackToTopButton />

      <WeekDetailModal
        week={selectedWeek}
        onClose={() => setSelectedWeek(null)}
        onSelectWeek={setSelectedWeek}
        onOpenRegistration={openRegistration}
      />

      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </div>
  );
}
