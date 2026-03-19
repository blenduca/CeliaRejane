import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ProblemAwareness } from './components/ProblemAwareness';
import { Solution } from './components/Solution';
import { TargetAudience } from './components/TargetAudience';
import { About } from './components/About';
import { Books } from './components/Books';
import { Methodology } from './components/Methodology';
import { Benefits } from './components/Benefits';
import { CTA } from './components/CTA';
import { ThankYou } from './components/ThankYou';
import { StrategySessionModal } from './components/StrategySessionModal';

export default function App() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (showThankYou) {
    return <ThankYou onBack={() => setShowThankYou(false)} />;
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-amber-500 selection:text-white overflow-x-hidden">
      <Hero onCtaClick={() => setIsModalOpen(true)} />
      <ProblemAwareness />
      <Solution onCtaClick={() => setIsModalOpen(true)} />
      <TargetAudience />
      <About />
      <Books />
      <Methodology />
      <Benefits />
      <CTA onCtaClick={() => setIsModalOpen(true)} />
      <StrategySessionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={() => {
          setIsModalOpen(false);
          setShowThankYou(true);
        }}
      />
    </div>
  );
}
