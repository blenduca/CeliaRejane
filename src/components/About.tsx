import React from 'react';
import { motion } from 'motion/react';
import profileImg from 'figma:asset/e786f469c800fc3873a2d82b52f16d62f6f67bbe.png';
import lightBg from 'figma:asset/8dd429ad8c4ffc27cd2db8d6ca4c288dcfdf727b.png';

export const About: React.FC = () => {
  return (
    <section className="py-24 relative bg-neutral-50 overflow-hidden">
      {/* Light Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 pointer-events-none"
        style={{ backgroundImage: `url(${lightBg})` }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-5/12 relative md:sticky md:top-10"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4]">
              <img 
                src={profileImg} 
                alt="Rejane Maciel" 
                className="w-full h-full object-cover"
              />
              {/* Subtle gold overlay for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#A08073]/30 to-transparent mix-blend-overlay"></div>
            </div>
            
            {/* Decorative Gold Square */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4AD6F] rounded-lg -z-10 hidden md:block opacity-50"></div>
          </motion.div>

          {/* Content */}
          <div className="w-full md:w-7/12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#D4AD6F] font-bold tracking-widest uppercase mb-2">Quem é</h2>
              <h1 className="text-4xl md:text-5xl font-bold text-[#A08073] mb-6">Rejane Maciel</h1>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {['Palestrante', 'Mentora', 'Consultora'].map((role, i) => (
                  <span key={i} className="px-5 py-1.5 border border-[#D4AD6F] rounded-full text-[#A08073] font-medium text-sm tracking-wide bg-[#D4AD6F]/10">
                    {role}
                  </span>
                ))}
              </div>

              <div className="space-y-6 text-[#4B6066] text-lg leading-relaxed">
                <p>
                  <strong className="text-[#A08073]">Empreendedora e CEO do Grupo LW</strong>, uma rede com mais de 30 lojas e 300 colaboradores, há mais de 20 anos no mercado.
                </p>
                <p>
                  Administradora de empresas, professora, especialista em Neurociência e Psicologia Positiva, além de coautora dos livros <strong>"Sonho sem Estratégia Não Vira Realidade"</strong> e <strong>"Líderes do Agora - Fortes na Estratégia, Profundos na Presença"</strong>.
                </p>
                <p>
                  Minha trajetória também foi marcada por experiências transformadoras, como a peregrinação no <strong>Caminho de Santiago</strong> (2015 e 2019), percorrendo 930 km do trajeto francês e 670 km do português a pé — uma das maiores imersões que um ser humano pode vivenciar. Essa experiência trouxe mais espiritualidade e profundidade à minha forma de liderar.
                </p>
                <p>
                  Criadora de projetos sociais de impacto - <strong>Escrevendo um Mundo Melhor, Costurando Vidas e Saúde Legal</strong>.
                </p>
                
                <div className="p-6 bg-[#A08073]/5 border-l-4 border-[#D4AD6F] rounded-r-lg mt-8">
                  <p className="text-xl text-[#A08073] font-medium italic">
                    "Minha missão é clara: formar líderes conscientes e empreendedores com propósito, ajudando a construir empresas mais humanas, felizes e produtivas."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
