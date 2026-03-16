import React from 'react';
import { motion } from 'motion/react';
import book1 from 'figma:asset/6a9860c0a170685e3aeaa9f7e8c0bd83895017b2.png';
import book2 from 'figma:asset/8f3a6b56c4e8c9e448a595df3624668f112aafb3.png';

export const Books: React.FC = () => {
  const books = [
    {
      title: "Sonho Sem Estratégia Não Vira Realidade",
      subtitle: "Crie um plano tático para aumentar seus resultados na vida e nos negócios",
      description: "Um guia prático para transformar visões em resultados tangíveis.",
      image: book1,
    },
    {
      title: "Líderes do Agora",
      subtitle: "Fortes na Estratégia, Profundos na Presença",
      description: "Uma nova abordagem para liderança que une competência técnica e inteligência emocional.",
      image: book2,
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#D4AD6F] font-bold tracking-widest uppercase mb-2">Coautora Best-Seller</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#A08073]">Obras Publicadas</h3>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(to right, #D4AD6F, #A08073 25%, #A08073 75%, #D4AD6F)' }}></div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-24">
          {books.map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative flex flex-col items-center max-w-sm"
            >
              {/* Book Glow Effect - Keeping this as it's a background effect, not a "shadow" on the book itself */}
              <div className="absolute inset-0 bg-[#D4AD6F] blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
              
              {/* Removed shadow-2xl and rounded-r-lg. Removed drop-shadow-xl from img */}
              <div className="relative z-10 w-full aspect-[2/3] md:h-[450px] transform group-hover:-translate-y-2 transition-transform duration-500">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="mt-8 text-center relative z-10">
                <h4 className="text-xl font-bold text-[#4B6066] mb-1">{book.title}</h4>
                {book.subtitle && (
                  <p className="text-[#D4AD6F] font-medium text-sm mb-3 uppercase tracking-wider px-4">{book.subtitle}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};