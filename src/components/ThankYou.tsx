import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, MessageCircle, ArrowLeft } from 'lucide-react';
import darkBg from 'figma:asset/0560227b2504f54ef1f5eba4862fef17ba06db1f.png';

interface ThankYouProps {
  onBack: () => void;
}

export const ThankYou: React.FC<ThankYouProps> = ({ onBack }) => {
  const whatsappUrl = "https://wa.me/558199244947";

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60 pointer-events-none"
        style={{ backgroundImage: `url(${darkBg})` }}
      ></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-2xl w-full bg-neutral-900/70 backdrop-blur-md border border-amber-600/30 rounded-2xl p-8 md:p-16 text-center shadow-2xl"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="w-24 h-24 mx-auto mb-8 bg-green-500/10 rounded-full flex items-center justify-center text-green-500"
        >
          <CheckCircle size={48} />
        </motion.div>

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Aplicação confirmada! 🚀
        </h1>
        
        <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
          Nosso time já recebeu sua solicitação e em breve entraremos em contato com você para agendar sua Sessão Estratégica.
        </p>

        <div className="bg-neutral-800/50 p-6 rounded-xl border border-neutral-700 mb-8">
          <p className="text-neutral-400 mb-6">
            Enquanto isso, se quiser acelerar o processo, clique no botão abaixo e fale direto com a nossa equipe:
          </p>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-green-900/20"
          >
            <MessageCircle size={24} />
            Falar no WhatsApp com a Equipe LW
          </a>
        </div>

        <button 
          onClick={onBack}
          className="text-neutral-500 hover:text-white flex items-center justify-center gap-2 mx-auto transition-colors font-medium"
        >
          <ArrowLeft size={16} />
          Voltar para o site
        </button>
      </motion.div>
    </div>
  );
};
