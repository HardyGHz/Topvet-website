import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/30">
              T
            </div>
            <span className="text-xl font-extrabold text-slate-800 tracking-tight">
              Topvet<span className="text-emerald-500">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#despre" className="text-sm font-medium text-slate-600 hover:text-emerald-500 transition-colors">Despre Noi</a>
            <a href="#servicii" className="text-sm font-medium text-slate-600 hover:text-emerald-500 transition-colors">Servicii</a>
            <a href="#recenzii" className="text-sm font-medium text-slate-600 hover:text-emerald-500 transition-colors">Păreri clienți</a>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+40756014828" 
              className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
            >
              <PhoneCall size={16} />
              <span>0756 014 828</span>
            </a>
            
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg py-4 px-4 flex flex-col gap-4">
          <a href="#despre" className="text-base font-medium text-slate-700 p-2 rounded-lg hover:bg-emerald-50" onClick={() => setIsMobileMenuOpen(false)}>Despre Noi</a>
          <a href="#servicii" className="text-base font-medium text-slate-700 p-2 rounded-lg hover:bg-emerald-50" onClick={() => setIsMobileMenuOpen(false)}>Servicii</a>
          <a href="#recenzii" className="text-base font-medium text-slate-700 p-2 rounded-lg hover:bg-emerald-50" onClick={() => setIsMobileMenuOpen(false)}>Păreri clienți</a>
          <a href="tel:+40756014828" className="flex items-center justify-center gap-2 bg-emerald-500 text-white p-3 rounded-xl font-semibold mt-2">
            <PhoneCall size={18} /> Call Acum
          </a>
        </div>
      )}
    </header>
  );
}
