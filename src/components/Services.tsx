
import { motion } from 'framer-motion';
import { Stethoscope, Syringe, HeartPulse, ShoppingBag, Scissors, CalendarCheck } from 'lucide-react';

const services = [
  {
    title: 'Consultații Generale',
    description: 'Baza unei vieți sănătoase începe cu un control de rutină amănunțit. Evaluări complete și sfaturi personalizate.',
    icon: Stethoscope,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
  },
  {
    title: 'Vaccinări & Prevenție',
    description: 'Programe personalizate de deparazitare și vaccinare pentru a-ți proteja prietenul de bolile infecțioase.',
    icon: Syringe,
    color: 'text-emerald-600',
    bg: 'bg-emerald-100',
  },
  {
    title: 'Chirurgie',
    description: 'Intervenții chirurgicale complexe, sterilizări și proceduri de urgență realizate cu maxim de siguranță.',
    icon: HeartPulse,
    color: 'text-rose-600',
    bg: 'bg-rose-100',
  },
  {
    title: 'Cosmetică & Toaletaj',
    description: 'Tunderi, spălări, tăiat unghii. Tot ce are nevoie blănosul tău pentru a se simți și arăta impecabil.',
    icon: Scissors,
    color: 'text-purple-600',
    bg: 'bg-purple-100',
  },
  {
    title: 'Farmacie & Pet Shop',
    description: 'Hrană premium, accesorii și medicamente recomandate. Peste 1000 de produse direct în incinta noastră.',
    icon: ShoppingBag,
    color: 'text-amber-600',
    bg: 'bg-amber-100',
  },
  {
    title: 'Consultanță Nutrițională',
    description: 'Dieta potrivită poate prelungi viața animalului tău de companie. Află ce se potrivește nevoilor sale.',
    icon: CalendarCheck,
    color: 'text-teal-600',
    bg: 'bg-teal-100',
  }
];

export default function Services() {
  return (
    <section id="servicii" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Servicii Veterinare <br/> <span className="text-emerald-500">De Top</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            O echipă dedicată de profesioniști gata să ofere tot ce este mai bun pentru sănătatea animalului tău, având la dispoziție aparatură modernă și empatie necondiționată.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-100/60 rounded-3xl p-8 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 ease-out hover:-translate-y-2 cursor-pointer group"
              >
                <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
