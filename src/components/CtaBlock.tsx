import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Bone } from 'lucide-react';

export default function CtaBlock() {
  return (
    <section className="py-24 bg-emerald-500 overflow-hidden relative">
      {/* Decorative Paws/Bone Elements in background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <Bone className="absolute top-10 left-[10%] w-24 h-24 rotate-45 text-white" />
        <Heart className="absolute bottom-10 right-[15%] w-32 h-32 -rotate-12 text-white" />
        <Bone className="absolute top-20 right-[30%] w-16 h-16 rotate-90 text-white" />
        <Heart className="absolute bottom-20 left-[20%] w-20 h-20 rotate-12 text-white" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center justify-center p-4 bg-white/20 backdrop-blur-md rounded-2xl mb-8">
            <Heart className="w-10 h-10 text-white fill-white" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Noul tău prieten <br className="hidden md:block"/>abia așteaptă să ne cunoască!
          </h2>
          
          <p className="text-emerald-50 text-xl mb-12 leading-relaxed">
            Fie că e vorba de o simplă ascuțire de gheruțe, un vaccin de rutină sau o problemă mai complexă de sănătate, noi te așteptăm cu brațele deschise și multe recompense gata pregătite!
          </p>
          
          <a 
            href="tel:+40756014828" 
            className="inline-flex items-center justify-center bg-white text-emerald-600 font-bold px-10 py-5 rounded-full text-lg shadow-xl shadow-emerald-900/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Programează o vizită chiar astăzi
          </a>
        </motion.div>
      </div>
    </section>
  );
}
