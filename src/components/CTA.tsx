import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import darkBg from 'figma:asset/0560227b2504f54ef1f5eba4862fef17ba06db1f.png';
import whatsappImg from 'figma:asset/520b1a07dc40b4597ac41a6a1afaeb9f7893efe6.png';
import linkedinImg from 'figma:asset/51b29c831ac049c7abe480d3695f13e6738e3fb1.png';
import instagramImg from 'figma:asset/65e0efa7f8dddde1c87064d522b61f8c408f08bf.png';
import facebookImg from 'figma:asset/0f53cf9904f912cb49a5b5132b9729cf842663c4.png';

interface CTAProps {
  onCtaClick: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onCtaClick }) => {
  const whatsappUrl = "https://wa.me/5587991592601";
  const currentYear = new Date().getFullYear();

  return (
    <section className="py-24 relative bg-neutral-900 overflow-hidden">
      {/* Dark Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60 pointer-events-none"
        style={{ backgroundImage: `url(${darkBg})` }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comece Agora Sua Transformação com <span className="text-[#D4AD6F]">Clareza e Coragem</span>
          </h2>
          <p className="text-xl text-neutral-300 mb-12">
            A Sessão Estratégica é o primeiro passo consciente para criar o futuro que sua empresa precisa.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {/* Primary CTA */}
            <button 
              onClick={onCtaClick}
              className="w-full md:w-auto bg-[#D4AD6F] hover:bg-[#bfa06f] text-white font-bold py-5 px-10 rounded-lg shadow-xl shadow-[#D4AD6F]/30 transform transition hover:scale-105 duration-300 uppercase tracking-wide text-lg"
            >
              Quero Agendar Minha Sessão Diagnóstica
            </button>

            {/* Secondary CTA */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-[#D4AD6F] hover:bg-[#D4AD6F]/10 text-white font-bold py-5 px-10 rounded-lg transition-all duration-300 uppercase tracking-wide text-lg shadow-lg shadow-[#D4AD6F]/10"
            >
              <MessageCircle size={20} />
              Fale Conosco
            </a>
          </div>

          <div className="mt-16 pt-16" style={{ borderTop: '1px solid rgba(160, 128, 115, 0.5)' }}>
            <h3 className="text-xl text-white mb-4">Deseja algo ainda mais completo?</h3>
            <p className="text-neutral-300 mb-8">
              Entre em contato para descobrir nossos programas de consultoria estratégica e imersões personalizadas para empresas.
            </p>
            
            {/* Social Icons Footer */}
            <div className="flex justify-center items-center gap-6 mb-8">
              <a href={whatsappUrl} className="w-10 h-10 hover:scale-110 transition-transform">
                <img src={whatsappImg} alt="WhatsApp" className="w-full h-full object-contain" />
              </a>
              <a href="#" className="w-10 h-10 hover:scale-110 transition-transform">
                <img src={linkedinImg} alt="LinkedIn" className="w-full h-full object-contain" />
              </a>
              <a href="#" className="w-10 h-10 hover:scale-110 transition-transform">
                <img src={instagramImg} alt="Instagram" className="w-full h-full object-contain" />
              </a>
              <a href="#" className="w-10 h-10 hover:scale-110 transition-transform">
                <img src={facebookImg} alt="Facebook" className="w-full h-full object-contain" />
              </a>
            </div>

            <p className="text-white text-sm opacity-80">
              © {currentYear} Rejane Maciel. Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};