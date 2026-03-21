import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Intro */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/20">
                T
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Topvet<span className="text-emerald-500">.</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Sănătatea și fericirea animalului tău de companie sunt pe primul loc. Oferim îngrijire veterinară de top în Florești.
            </p>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                <span className="text-slate-400 leading-relaxed">Str. Stejarului nr. 18,<br />407280 Florești, România</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-emerald-500 flex-shrink-0" />
                <a href="tel:+40756014828" className="text-slate-400 hover:text-white transition-colors">+40 756 014 828</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-emerald-500 flex-shrink-0" />
                <a href="mailto:contact@topvet.ro" className="text-slate-400 hover:text-white transition-colors">contact@topvet.ro</a>
              </div>
            </div>
          </div>

          {/* Program (Opening Hours) */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-white mb-6">Program</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                <Clock size={20} className="text-emerald-500 flex-shrink-0" />
                <div className="w-full">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Luni - Vineri</span>
                    <span className="text-white font-medium">09:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-slate-300">Sâmbătă</span>
                    <span className="text-white font-medium">09:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-slate-300">Duminică</span>
                    <span className="text-rose-400 font-medium tracking-wide text-xs uppercase mt-0.5">Închis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation/Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-white mb-6">Linkuri utile</h4>
            <ul className="space-y-3">
              <li><a href="#despre" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Despre Cabinet</a></li>
              <li><a href="#servicii" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Serviciile noastre</a></li>
              <li><a href="#recenzii" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Păreri clienți</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Politica de Confidențialitate</a></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom / Copyright / Built by Novusolv */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Topvet Farm SRL. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            Powered with <span className="text-rose-500">♥</span> by 
            <a href="https://novusolv.com" target="_blank" rel="noopener noreferrer" className="text-white font-semibold flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              Novusolv
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
