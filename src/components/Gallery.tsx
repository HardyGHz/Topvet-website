
import { motion } from 'framer-motion';

export default function Gallery() {
  return (
    <section className="py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-6 lg:pr-10"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-600 font-semibold text-sm">
              Pacienți Fericiți
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
              Fiecare animăluț este <br/>
              <span className="text-emerald-500">tratat ca membru al familiei</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Ne mândrim cu mii de pacienți sănătoși și fericiți care ne-au trecut pragul. De la primele controale ale puilor, până la tratamente complexe de specialitate, echipa noastră abordează fiecare caz cu maximă blândețe și profesionalism.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Zâmbetele proprietarilor (și torsul fericit) sunt cea mai mare răsplată pentru noi!
            </p>
          </motion.div>

          {/* Media Composition with 2 Kitten images */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 relative h-[500px]"
          >
            {/* Background Blob */}
            <div className="absolute inset-0 bg-emerald-50 rounded-full blur-[80px] z-0"></div>
            
            {/* Image 1 - Top Right */}
            <motion.div 
              whileHover={{ scale: 1.05, zIndex: 30 }}
              className="absolute top-4 right-4 md:right-10 w-2/3 h-72 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-300 transform rotate-3 border-[6px] border-white z-20 transition-transform duration-300"
            >
              <img 
                src="/Kitten 1.png" 
                alt="Pui de pisică Topvet" 
                className="w-full h-full object-cover bg-slate-100"
              />
            </motion.div>

            {/* Image 2 - Bottom Left */}
            <motion.div 
              whileHover={{ scale: 1.05, zIndex: 30 }}
              className="absolute bottom-4 left-4 md:left-0 w-3/5 h-64 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-300 transform -rotate-3 border-[6px] border-white z-10 transition-transform duration-300"
            >
              <img 
                src="/Kitten 2.png" 
                alt="Pisicuță neagră Topvet" 
                className="w-full h-full object-cover bg-slate-100"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
