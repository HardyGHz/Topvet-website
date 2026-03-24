
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      
      {/* Background Graphic Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-100/60 blur-[100px] mix-blend-multiply opacity-70"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-teal-50/80 blur-[120px] mix-blend-multiply opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Fading Branding Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            <img 
              src="/topvet-logo.png" 
              alt="Logo Topvet" 
              className="h-32 md:h-40 w-auto object-contain mix-blend-multiply" 
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </motion.div>

          {/* Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-100 shadow-sm mb-8"
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-slate-600">4.8 din 130+ recenzii Google</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Cea mai bună îngrijire pentru <span className="text-emerald-500 relative inline-block">
              prietenii tăi
              {/* Swoosh Underline */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-emerald-300 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
          >
            Consultații de specialitate, chirurgie avansată și pet shop complet integrat în Florești. Vino să descoperi de ce suntem alegerea #1 a iubitorilor de animale.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a 
              href="viber://chat?number=+40756014828" 
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-semibold text-lg transition-transform hover:-translate-y-1 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
            >
              Programează o vizită
            </a>
            <a 
              href="#servicii" 
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 border border-slate-200 shadow-sm flex items-center justify-center gap-2 group"
            >
              Vezi serviciile noastre
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
