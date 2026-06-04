import { Zap, Search, Megaphone, ShieldCheck, Briefcase, Sun, Moon } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50/80 backdrop-blur-md border-b border-slate-800 dark:border-slate-800 light:border-slate-200 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white dark:text-white light:text-slate-950 tracking-tighter transition-colors duration-300">HA<span className="text-cyan-400">DIGITAL</span></div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#beranda" className="hover:text-cyan-400 text-slate-200 dark:text-slate-200 light:text-slate-600 transition">Beranda</a>
          <a href="#layanan" className="hover:text-cyan-400 text-slate-200 dark:text-slate-200 light:text-slate-600 transition">Layanan</a>
          <a href="#paket" className="hover:text-cyan-400 text-slate-200 dark:text-slate-200 light:text-slate-600 transition">Paket</a>
          <a href="#portofolio" className="hover:text-cyan-400 text-slate-200 dark:text-slate-200 light:text-slate-600 transition">Portofolio</a>
          <a href="#faq" className="hover:text-cyan-400 text-slate-200 dark:text-slate-200 light:text-slate-600 transition">FAQ</a>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200 transition">
             {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
          </button>
          <WhatsAppButton className="hidden md:block bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-full font-semibold transition">
            Konsultasi Gratis
          </WhatsAppButton>
        </div>
      </div>
    </nav>
  );
}
