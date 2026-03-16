import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText } from 'lucide-react';
import lightBg from 'figma:asset/8dd429ad8c4ffc27cd2db8d6ca4c288dcfdf727b.png';
import bulletImg from 'figma:asset/27871757efc70c52bc9eb597ada086837bc69b41.png';

interface SolutionProps {
  onCtaClick: () => void;
}

const deliverables = [
  "Análise Cultural e Escuta Estratégica",
  "Diagnóstico das Causas-Raiz dos Problemas",
  "Avaliação de Prioridades Críticas",
  "Mapeamento de Oportunidades Reais de Evolução"
];

export const Solution: React.FC<SolutionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 relative bg-neutral-50 overflow-hidden">
      {/* Light Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 pointer-events-none"
        style={{ backgroundImage: `url(${lightBg})` }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#A08073] mb-6"
          >
            Transforme Sintomas em Soluções com a <span className="text-[#D4AD6F]">Consultoria Diagnóstica Personalizada</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B6066] text-lg max-w-2xl mx-auto"
          >
            A Sessão Estratégica é um encontro individual, profundo e direto ao ponto, conduzido por Rejane Maciel – CEO com 20 anos de mercado.
          </motion.p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {deliverables.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/60 p-6 rounded-xl border border-[#A08073]/20 hover:border-[#D4AD6F] shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center gap-4"
            >
              <div className="w-8 h-8 shrink-0">
                <img src={bulletImg} alt="bullet" className="w-full h-full object-contain" />
              </div>
              <span className="text-[#4B6066] font-medium">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Final Delivery Highlight */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#A08073]/10 to-white p-8 md:p-12 rounded-2xl border border-[#D4AD6F]/30 shadow-xl text-center relative overflow-hidden group"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(to right, #D4AD6F, #A08073 25%, #A08073 75%, #D4AD6F)' }}></div>

          <div className="inline-block p-4 bg-[#D4AD6F]/10 rounded-full mb-6 text-[#D4AD6F]">
            <FileText size={32} />
          </div>
          
          <h3 className="text-xl font-bold text-[#D4AD6F] mb-4 uppercase tracking-wider">
            Entrega Final
          </h3>
          
          <p className="text-2xl md:text-3xl font-bold text-[#A08073] mb-8 leading-relaxed max-w-2xl mx-auto">
            Um <span className="text-[#D4AD6F] underline decoration-2 underline-offset-4">Plano Diagnóstico Inicial</span> com diretrizes claras e aplicáveis para transformar sua cultura.
          </p>

          <div className="flex justify-center">
            <button 
              onClick={onCtaClick}
              className="group flex items-center gap-3 bg-[#D4AD6F] hover:bg-[#bfa06f] text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg shadow-[#D4AD6F]/20"
            >
              Agendar Sessão Estratégica
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        <p className="text-[#4B6066] mt-12 text-center italic max-w-2xl mx-auto border-t border-[#A08073]/20 pt-8">
          "Com olhar apurado e escuta ativa, você sairá com clareza sobre o que está travando sua organização – e quais passos tomar para destravar."
        </p>
      </div>
    </section>
  );
};