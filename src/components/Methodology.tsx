import React from 'react';
import { motion } from 'motion/react';
import lightBg from 'figma:asset/8dd429ad8c4ffc27cd2db8d6ca4c288dcfdf727b.png';

const acronym = [
  { letter: 'P', word: 'Prosperidade', desc: 'Crescimento financeiro aliado ao bem-estar.' },
  { letter: 'O', word: 'Organização', desc: 'Processos claros e eficientes para escalar.' },
  { letter: 'D', word: 'Desenvolvimento', desc: 'Evolução contínua de líderes e equipes.' },
  { letter: 'E', word: 'Estratégia', desc: 'Visão de longo prazo e ações assertivas.' },
  { letter: 'R', word: 'Realização', desc: 'Sentimento de propósito e conquista.' },
];

export const Methodology: React.FC = () => {
  return (
    <section className="py-24 relative bg-neutral-50 overflow-hidden">
      {/* Light Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 pointer-events-none"
        style={{ backgroundImage: `url(${lightBg})` }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#A08073] mb-6"
          >
            Método <span className="text-[#D4AD6F]">PODER</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#4B6066] text-lg max-w-2xl mx-auto"
          >
            A mentoria é sustentada pelo método exclusivo PODER, que guia líderes rumo à realização com consciência.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-[40px] top-0 bottom-0 w-1 rounded-full" style={{ background: 'linear-gradient(to bottom, #D4AD6F, #A08073 25%, #A08073 75%, #D4AD6F)' }}></div>

          <div className="space-y-12">
            {acronym.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-center gap-6 md:gap-12"
              >
                {/* Letter Bubble */}
                <div className="shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#D4AD6F] to-[#A08073] flex items-center justify-center shadow-lg border-4 border-white relative z-10">
                  <span className="text-2xl md:text-4xl font-bold text-white font-serif">{item.letter}</span>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[#A08073]/10 hover:border-[#D4AD6F]/50 transition-colors shadow-sm hover:shadow-md">
                  <h3 className="text-xl md:text-2xl font-bold text-[#A08073] mb-2">{item.word}</h3>
                  <p className="text-[#4B6066] text-base md:text-lg">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};