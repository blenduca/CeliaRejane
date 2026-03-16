import React from 'react';
import { motion } from 'motion/react';
import lightBg from 'figma:asset/8dd429ad8c4ffc27cd2db8d6ca4c288dcfdf727b.png';
import bulletImg from 'figma:asset/27871757efc70c52bc9eb597ada086837bc69b41.png';

const benefits = [
  "Cultura, liderança e estratégia totalmente alinhadas",
  "Redução de ruídos e conflitos internos",
  "Líderes preparados para gerar performance com humanidade",
  "Maior engajamento e senso de pertencimento no time"
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
              <div className="w-8 h-8 shrink-0">
                <img src={bulletImg} alt="bullet" className="w-full h-full object-contain" />
              </div>
              <p className="text-xl text-[#4B6066] font-medium leading-relaxed">
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};