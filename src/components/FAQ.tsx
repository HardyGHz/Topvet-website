
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Ce animale tratați la cabinet?',
    answer:
      'Tratăm câini, pisici și alte animale de companie de mici dimensiuni. Ne ocupăm de monitorizarea sănătății, vaccinări, tratamente preventive și intervenții chirurgicale de rutină.',
  },
  {
    question: 'Este necesară programarea în avans?',
    answer:
      'Recomandăm programarea în avans pentru a evita așteptarea, dar acceptăm și cazuri de urgență fără programare. Puteți suna sau completa formularul de mai jos pentru a rezerva un slot.',
  },
  {
    question: 'Ce servicii de urgență oferiți?',
    answer:
      'Pentru urgențe în timpul programului (Luni–Vineri 09:00–20:00, Sâmbătă 09:00–15:00) vă rugăm să ne sunați imediat. Facem tot posibilul să vă preluăm cât mai repede.',
  },
  {
    question: 'Oferiți serviciu de îngrijire și tuns?',
    answer:
      'Da, oferim servicii de grooming — tuns, baie și îngrijire completă — în cadrul cabinetului nostru, asigurând un mediu calm și confortabil pentru animalul dumneavoastră.',
  },
  {
    question: 'Cum funcționează vaccinările și deparazitările?',
    answer:
      'Realizăm schema completă de vaccinare adaptată vârstei și stilului de viață al animalului. Deparazitarea internă și externă este efectuată periodic, conform recomandărilor medicale. La prima vizită vă oferim un plan detaliat.',
  },
  {
    question: 'Ce metode de plată acceptați?',
    answer:
      'Acceptăm plata atât în numerar, cât și cu cardul bancar. Nu solicităm plata în avans la programare.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 bg-[#f0fdf4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <HelpCircle size={15} />
            Întrebări frecvente
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Ai întrebări? Noi avem răspunsuri.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Găsești mai jos cele mai comune întrebări primite de la proprietarii de animale.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === i
                    ? 'border-emerald-300 bg-white shadow-md shadow-emerald-100'
                    : 'border-slate-200 bg-white hover:border-emerald-200 hover:shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 font-semibold text-slate-800 text-base md:text-lg"
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      openIndex === i
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
