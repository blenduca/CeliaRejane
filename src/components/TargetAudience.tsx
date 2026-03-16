import React from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import darkBg from 'figma:asset/0560227b2504f54ef1f5eba4862fef17ba06db1f.png';
import bulletImg from 'figma:asset/27871757efc70c52bc9eb597ada086837bc69b41.png';

const forYou = [
  "Você é líder, CEO ou empreendedor(a) e entende que cultura e humanização são chaves para performance sustentável.",
  "Sua empresa está em processo de transição, sucessão ou passa por momentos críticos que exigem visão clara e decisões estratégicas.",
  "Você busca alinhar propósito, liderança e resultados – e está pronto(a) para começar agora."
];

const notForYou = [
  "Você procura soluções instantâneas ou \"fórmulas mágicas\".",
  "Você não acredita que escuta ativa, comunicação e gestão de conflitos sejam habilidades essenciais de liderança.",
  "Sua empresa não está aberta a receber um diagnóstico real e implementar mudanças estruturais."
];

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 relative bg-neutral-900 overflow-hidden">
       {/* Dark Background Image */}
       <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60 pointer-events-none"
        style={{ backgroundImage: `url(${darkBg})` }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* For You */}
          <div className="bg-neutral-800/80 backdrop-blur-sm border border-[#D4AD6F]/40 rounded-2xl p-8 md:p-12 hover:border-[#D4AD6F] transition-colors shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="bg-[#D4AD6F] text-white p-2 rounded-full shadow-lg w-10 h-10 flex items-center justify-center">
                 <img src={bulletImg} alt="check" className="w-6 h-6 object-contain brightness-0 invert" />
              </span>
              Essa Sessão É Para Você Se...
            </h3>
            <ul className="space-y-6">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-5 h-5 shrink-0 mt-1">
                    <img src={bulletImg} alt="bullet" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-neutral-200 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 md:p-12 opacity-90 hover:opacity-100 transition-opacity">
            <h3 className="text-2xl font-bold text-neutral-400 mb-8 flex items-center gap-3">
              <span className="bg-neutral-700 text-neutral-400 p-2 rounded-full"><X size={20} /></span>
              E Não É Para Você Se...
            </h3>
            <ul className="space-y-6">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <X className="text-red-500/70 shrink-0 mt-1" size={20} />
                  <p className="text-neutral-400 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
