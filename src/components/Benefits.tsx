import React from 'react';
import { motion } from 'motion/react';
import lightBg from 'figma:asset/8dd429ad8c4ffc27cd2db8d6ca4c288dcfdf727b.png';
import bulletImg from 'figma:asset/27871757efc70c52bc9eb597ada086837bc69b41.png';

const benefits = [
  {
    title: "Cultura, liderança e estratégia totalmente alinhadas",
    description: "Fortalecimento da conexão entre propósito, gestão e execução, criando equipes mais coerentes, produtivas e estratégicas."
  },
  {
    title: "Redução de ruídos e conflitos internos",
    description: "Melhoria da comunicação e dos relacionamentos, promovendo ambientes mais saudáveis, colaborativos e eficientes."
  },
  {
    title: "Líderes preparados para gerar performance com humanidade",
    description: "Desenvolvimento de lideranças capazes de alcançar resultados sem perder a escuta, a empatia e o cuidado com as pessoas."
  },
  {
    title: "Maior engajamento e senso de pertencimento no time",
    description: "Equipes mais conectadas com a cultura, os objetivos e os valores da organização, aumentando motivação e comprometimento."
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 relative bg-neutral-50 overflow-hidden">
      {/* Light Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 pointer-events-none"
        style={{ backgroundImage: `url(${lightBg})` }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#A08073] mb-6">
            Principais Benefícios da Mentoria
          </h2>
          <div className="w-24 h-1.5 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #D4AD6F, #A08073 25%, #A08073 75%, #D4AD6F)' }}></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-[#A08073]/20 hover:border-[#D4AD6F] transition-colors shadow-sm hover:shadow-md"
            >
              <div className="w-8 h-8 shrink-0 mt-1">
                <img src={bulletImg} alt="bullet" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-lg text-[#A08073] font-bold leading-snug">
                  {benefit.title}
                </h4>
                <p className="text-sm text-[#4B6066] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};