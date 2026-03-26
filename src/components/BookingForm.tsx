
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, User, Phone, PawPrint, StickyNote, CheckCircle2 } from 'lucide-react';

const services = [
  'Consultație generală',
  'Vaccinare',
  'Deparazitare',
  'Analize de laborator',
  'Chirurgie',
  'Grooming / Îngrijire',
  'Sterilizare',
  'Ecografie / Radiografie',
  'Altele',
];

type FormState = 'idle' | 'sending' | 'success';

export default function BookingForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    pet: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate async submit (replace with real API/email endpoint)
    setTimeout(() => {
      setFormState('success');
    }, 1400);
  };

  return (
    <section id="programare" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <CalendarCheck size={15} />
            Programare online
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Rezervă o consultație
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Completează formularul și te vom contacta în cel mai scurt timp pentru a confirma programarea.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-8 md:p-10"
        >
          {formState === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              className="flex flex-col items-center justify-center py-12 text-center gap-5"
            >
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle2 size={40} className="text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Cerere trimisă cu succes!</h3>
              <p className="text-slate-500 text-base max-w-sm leading-relaxed">
                Vă mulțumim! Vă vom contacta în curând pe numărul furnizat pentru a confirma programarea.
              </p>
              <button
                onClick={() => {
                  setFormState('idle');
                  setForm({ name: '', phone: '', pet: '', service: '', message: '' });
                }}
                className="mt-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
              >
                Trimite altă cerere
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Numele dumneavoastră *
                </label>
                <div className="relative">
                  <User size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="ex. Andrei Popescu"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Număr de telefon *
                </label>
                <div className="relative">
                  <Phone size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="ex. 0756 014 828"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Pet name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Numele animalului & specia
                </label>
                <div className="relative">
                  <PawPrint size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="pet"
                    value={form.pet}
                    onChange={handleChange}
                    placeholder="ex. Max, câine ciobănesc"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Motivul consultației
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition appearance-none"
                  >
                    <option value="">Selectează un serviciu…</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Detalii suplimentare
                </label>
                <div className="relative">
                  <StickyNote size={17} className="absolute left-4 top-4 text-slate-400" />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Descrieți pe scurt problema sau ce doriți să verificați…"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === 'sending'}
                className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-bold py-4 rounded-xl text-base shadow-lg shadow-emerald-400/30 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formState === 'sending' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    Se trimite…
                  </>
                ) : (
                  <>
                    <CalendarCheck size={19} />
                    Trimite cererea de programare
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-400">
                * Câmpuri obligatorii. Datele dumneavoastră sunt utilizate exclusiv pentru confirmarea programării.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
