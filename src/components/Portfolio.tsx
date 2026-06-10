import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, Award } from 'lucide-react';
import lightBg from 'figma:asset/8dd429ad8c4ffc27cd2db8d6ca4c288dcfdf727b.png';

interface Product {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const products: Product[] = [
  {
    icon: <Users className="w-8 h-8 text-[#D4AD6F]" />,
    title: "Mentoria de Liderança",
    subtitle: "Consciência & Performance",
    description: "Acompanhamento estratégico para fundadores, CEOs e líderes que buscam evoluir sua gestão, conectar-se com seu propósito e gerar resultados humanizados sustentáveis.",
    features: [
      "Sessões estratégicas individuais ou coletivas",
      "Aplicação prática do Método PODER",
      "Foco em inteligência emocional e resolução de conflitos",
      "Plano tático personalizado de autoliderança"
    ]
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#D4AD6F]" />,
    title: "Consultoria Organizacional",
    subtitle: "Diagnóstico & Cultura",
    description: "Intervenção estruturada nas empresas para identificar as causas-raiz de desafios críticos como alta rotatividade (turnover), desengajamento e ruídos de comunicação.",
    features: [
      "Mapeamento cultural e escuta ativa com as equipes",
      "Análise profunda de processos e clima organizacional",
      "Relatório diagnóstico e plano de ação estrutural",
      "Diretrizes claras e aplicáveis para reter talentos"
    ]
  },
  {
    icon: <Award className="w-8 h-8 text-[#D4AD6F]" />,
    title: "Palestras & Imersões",
    subtitle: "Inspiração & Neurociência",
    description: "Eventos corporativos de alto impacto focados na capacitação de equipes e líderes, utilizando conceitos modernos de Neurociência e Psicologia Positiva.",
    features: [
      "Convenções de liderança e eventos corporativos",
      "Workshops práticos sobre Comunicação Assertiva",
      "Imersões de alinhamento estratégico de cultura",
      "Dinâmicas de alto engajamento para grandes públicos"
    ]
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section className="py-24 relative bg-neutral-50 overflow-hidden">
      {/* Light Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 pointer-events-none"
        style={{ backgroundImage: `url(${lightBg})` }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#D4AD6F] font-bold tracking-widest uppercase mb-2">Portfólio de Soluções</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#A08073] mb-6">
              Nossos Programas &amp; Serviços
            </h3>
            <p className="text-[#4B6066] text-lg leading-relaxed">
              Programas desenhados sob medida para transformar a cultura, alinhar a liderança e destravar os resultados da sua organização.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white/75 backdrop-blur-sm p-8 rounded-2xl border border-[#A08073]/20 hover:border-[#D4AD6F] shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-2xl bg-[#D4AD6F]/10 flex items-center justify-center mb-6 shadow-sm">
                  {product.icon}
                </div>

                <h4 className="text-2xl font-bold text-[#A08073] mb-1">{product.title}</h4>
                <p className="text-[#D4AD6F] text-xs font-semibold uppercase tracking-wider mb-4">{product.subtitle}</p>
                <p className="text-[#4B6066] text-sm leading-relaxed mb-6 border-b border-neutral-100 pb-6">
                  {product.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#4B6066] leading-relaxed">
                      <span className="text-[#D4AD6F] mt-1 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
