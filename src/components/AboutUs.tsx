import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  const features = [
    "Echipă medicală cu experiență internațională",
    "Aparatură de ultimă generație pentru diagnosticare rapidă",
    "Abordare cu multă empatie și răbdare pentru fiecare pacient",
    "Peste 130 de recenzii de 5 stele pe Google",
  ];

  return (
    <section id="despre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Decorative background blob */}
            <div className="absolute -inset-4 bg-emerald-100/50 rounded-[3rem] -rotate-3 blur-sm z-0"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800" 
              alt="Veterinar la Topvet" 
              className="relative z-10 w-full h-[500px] object-cover rounded-[2.5rem] shadow-2xl shadow-emerald-900/10"
            />
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-xl">
                10+
              </div>
              <div>
                <p className="text-slate-800 font-bold">Ani de experiență</p>
                <p className="text-slate-500 text-sm">în medicina veterinară</p>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 font-semibold text-sm">
              Despre Noi
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
              Excelență și pasiune pentru <br/>
              <span className="text-emerald-500">prietenii tăi necuvântători</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              La Topvet Farm Florești, credem că fiecare animal de companie merită cea mai înaltă calitate a îngrijirii medicale. 
              Suntem o echipă de medici veterinari pasionați, dedicați salvării și îmbunătățirii calității vieții animalelor pe care le iubim atât de mult.
            </p>

            <ul className="space-y-4 pt-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-[17px]">{feature}</span>
                </li>
              ))}
            </ul>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
