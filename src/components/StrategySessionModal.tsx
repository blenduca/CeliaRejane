import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

interface StrategySessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const StrategySessionModal: React.FC<StrategySessionModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      telefone: formData.get('telefone'),
      profissao: formData.get('profissao'),
      areaAtuacao: formData.get('areaAtuacao'),
      dataNascimento: formData.get('dataNascimento'),
    };

    try {
      const response = await fetch('https://automacao.bagents.cloud/webhook/c289f0e7-2686-48f5-be64-bc1e6954893b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar formulário');
      }

      onSuccess();
    } catch (err) {
      setError('Ocorreu um erro ao enviar seus dados. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return createPortal(
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.85)',
        zIndex: 999999,
        display: isOpen ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.5rem',
        backdropFilter: 'blur(10px)',
      }}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.95, y: isOpen ? 0 : 15 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} 
        className="relative w-[95%] sm:max-w-[600px] md:max-w-[650px] bg-[#111111] border border-[#D4AD6F]/30 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_-10px_rgba(212,173,111,0.15)] flex flex-col max-h-[90vh] overflow-hidden"
      >
        {/* Glow de destaque leve no topo */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AD6F]/50 to-transparent"></div>

        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-[#888888] hover:text-white bg-[#222222] hover:bg-[#333333] p-2.5 rounded-full transition-all duration-300 z-10 border border-transparent hover:border-[#D4AD6F]/30"
          title="Fechar"
          type="button"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        {/* Área rolável do formulário */}
        <div className="p-8 sm:p-10 overflow-y-auto hide-scrollbar flex flex-col">
          <div className="mb-8 pr-8">
            <h2 className="text-3xl font-bold mb-3 tracking-tight">
              <span className="text-white">Agendar </span>
              <span className="text-[#D4AD6F]">Sessão</span>
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-[90%] font-light">
              Mapeie a raiz dos seus desafios empresariais. Preencha seus dados para darmos o primeiro passo rumo à transformação.
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-4 rounded-xl mb-6 text-sm flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
              
              <div>
                <label htmlFor="nome" className="block text-xs font-semibold uppercase tracking-wider text-[#A08073] mb-2 ml-1">Nome Completo</label>
                <input required type="text" id="nome" name="nome" className="w-full bg-[#1A1A1A] border border-[#333333] text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#D4AD6F]/50 focus:border-[#D4AD6F] transition-all placeholder:text-[#666666] sm:text-sm" placeholder="Como devemos lhe chamar?" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#A08073] mb-2 ml-1">E-mail Profissional</label>
                  <input required type="email" id="email" name="email" className="w-full bg-[#1A1A1A] border border-[#333333] text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#D4AD6F]/50 focus:border-[#D4AD6F] transition-all placeholder:text-[#666666] sm:text-sm" placeholder="seu@email.com" />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-xs font-semibold uppercase tracking-wider text-[#A08073] mb-2 ml-1">WhatsApp</label>
                  <input required type="tel" id="telefone" name="telefone" className="w-full bg-[#1A1A1A] border border-[#333333] text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#D4AD6F]/50 focus:border-[#D4AD6F] transition-all placeholder:text-[#666666] sm:text-sm" placeholder="(00) 00000-0000" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="profissao" className="block text-xs font-semibold uppercase tracking-wider text-[#A08073] mb-2 ml-1">Cargo / Profissão</label>
                  <input required type="text" id="profissao" name="profissao" className="w-full bg-[#1A1A1A] border border-[#333333] text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#D4AD6F]/50 focus:border-[#D4AD6F] transition-all placeholder:text-[#666666] sm:text-sm" placeholder="Ex: CEO, Diretor..." />
                </div>

                <div>
                  <label htmlFor="areaAtuacao" className="block text-xs font-semibold uppercase tracking-wider text-[#A08073] mb-2 ml-1">Área de Atuação</label>
                  <input required type="text" id="areaAtuacao" name="areaAtuacao" className="w-full bg-[#1A1A1A] border border-[#333333] text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#D4AD6F]/50 focus:border-[#D4AD6F] transition-all placeholder:text-[#666666] sm:text-sm" placeholder="Ex: Tecnologia, Varejo..." />
                </div>
              </div>

              <div>
                <label htmlFor="dataNascimento" className="block text-xs font-semibold uppercase tracking-wider text-[#A08073] mb-2 ml-1">Data de Nascimento</label>
                <input required type="date" id="dataNascimento" name="dataNascimento" className="w-full bg-[#1A1A1A] border border-[#333333] text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#D4AD6F]/50 focus:border-[#D4AD6F] transition-all sm:text-sm" style={{ colorScheme: 'dark' }} />
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#333333]">
              <button 
                type="submit" 
                disabled={loading}
                className="group relative w-full flex items-center justify-center gap-2 bg-[#D4AD6F] hover:bg-white disabled:bg-[#333333] disabled:text-[#888888] text-[#111111] font-bold py-4 px-8 rounded-xl transition-all duration-500 uppercase tracking-widest text-sm overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
                <span className="relative z-10 flex items-center gap-2">
                  {loading ? <Loader2 className="animate-spin text-[#111111]" size={20} /> : 'Concluir Agendamento'}
                </span>
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>,
    document.body
  );
};
