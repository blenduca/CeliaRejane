import image_b578631a62105f5ee0e09a5cecf9ab13aed15768 from 'figma:asset/b578631a62105f5ee0e09a5cecf9ab13aed15768.png'
import image_e9d44c746f0edb718208bf2bdaa2ba0cfb03db37 from 'figma:asset/e9d44c746f0edb718208bf2bdaa2ba0cfb03db37.png';
import image_3269d697272d3c58709c5a14f4c09e7b17b787fd from 'figma:asset/3269d697272d3c58709c5a14f4c09e7b17b787fd.png';
import image_0e2faec0e0bd9a32fa7245918e4ad6d336d5427d from 'figma:asset/0e2faec0e0bd9a32fa7245918e4ad6d336d5427d.png';
import React from 'react';
import { motion } from 'motion/react';
import logoImg from 'figma:asset/b1272cc2e910945051a0e5862286f1b5fdee2c55.png';

const mobileHeroImg = image_e9d44c746f0edb718208bf2bdaa2ba0cfb03db37;

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col md:block overflow-hidden bg-neutral-900">
      {/* Desktop Background Image - Hidden on Mobile */}
      <div className="hidden md:block absolute inset-0 z-0">
        <img 
          src={image_b578631a62105f5ee0e09a5cecf9ab13aed15768} 
          alt="Rejane Maciel Hero Desktop" 
          className="w-full h-full object-cover object-[100%_30%]"
        />
        {/* Gradient Overlay for Desktop - Left side fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-900/50 to-transparent z-10 w-[70%] pointer-events-none"></div>
      </div>

      {/* Mobile Image - Hidden on Desktop */}
      <div className="md:hidden w-full h-[55vh] sm:h-[62vh] relative z-0">
        <img 
          src={mobileHeroImg} 
          alt="Rejane Maciel Hero Mobile" 
          className="w-full h-full object-cover object-[center_22%] sm:object-[center_25%]"
        />
        {/* Mobile Gradient Overlay - Bottom fade */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, rgb(23,23,23) 0%, rgba(23,23,23,0.75) 15%, rgba(23,23,23,0.15) 45%, transparent 65%)' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-12 -mt-16 sm:-mt-12 md:mt-0 md:h-[90vh] flex items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-5">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-32 md:w-48 h-auto mb-1"
          >
            <div className="w-full relative">
              <img src={logoImg} alt="Rejane Maciel Logo" className="w-full h-auto object-contain" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-none md:leading-tight">
              <span className="text-white">A Evolução Exige </span>
              <span className="text-[#D4AD6F]">
                Coragem.
              </span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl font-light text-neutral-200 leading-tight">
              Chegou a Hora de Parar de Apagar Incêndios e Começar a <span className="text-[#D4AD6F] font-medium">Liderar o Futuro</span> da Sua Empresa.
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-neutral-400 max-w-lg leading-tight"
          >
            Descubra a raiz dos seus desafios com uma Sessão Estratégica e Diagnóstica Personalizada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-1"
          >
            <button 
              onClick={onCtaClick}
              className="bg-[#D4AD6F] hover:bg-[#bfa06f] text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-[#D4AD6F]/20 transform transition hover:scale-105 duration-300 uppercase tracking-wide text-xs sm:text-sm md:text-base w-full md:w-auto whitespace-nowrap"
            >
              <span className="hidden md:inline">Quero Agendar Minha Sessão Diagnóstica</span>
              <span className="md:hidden">Agendar Sessão Diagnóstica</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};