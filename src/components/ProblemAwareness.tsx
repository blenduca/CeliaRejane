import React from 'react';
import { motion } from 'motion/react';
import lightBg from 'figma:asset/8dd429ad8c4ffc27cd2db8d6ca4c288dcfdf727b.png';
import bulletImg from 'figma:asset/27871757efc70c52bc9eb597ada086837bc69b41.png';

const problems = [
  "Alta rotatividade e perda constante de talentos.",
  "Desistência silenciosa e engajamento em queda.",
  "Esgotamento emocional nas equipes.",
  "Conflitos geracionais e distanciamento entre lideranças.",
  "Descompasso entre inovação tecnológica e a capacidade de adaptação do time."
];

export const ProblemAwareness: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-neutral-50">
      {/* Light Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 pointer-events-none"
        style={{ backgroundImage: `url(${lightBg})` }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[#D4AD6F] text-sm font-bold tracking-widest uppercase mb-4">Sinais de Alerta</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-[#A08073] mb-6">
              Você reconhece esses sinais dentro da sua organização?
            </h2>
            <p className="text-[#4B6066] text-lg leading-relaxed max-w-2xl mx-auto">
              Estamos vivendo uma era de profundas transformações. E elas exigem novas respostas, novas lideranças e uma nova forma de enxergar as pessoas.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/70 border border-[#A08073]/20 hover:border-[#D4AD6F] transition-all shadow-sm hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-10 h-10 mb-6">
                <img src={bulletImg} alt="bullet" className="w-full h-full object-contain" />
              </div>
              <p className="text-[#4B6066] font-medium text-lg leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto p-8 bg-[#A08073]/10 border-l-4 border-[#A08073] rounded-r-xl text-center"
        >
          <p className="text-lg text-[#4B6066]">
            <span className="text-[#D4AD6F] font-bold mr-2 text-xl">⚠</span>
            Se esses sintomas soam familiares, é hora de agir com coragem. O crescimento sustentável nasce do alinhamento entre propósito, pessoas e estratégia.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
