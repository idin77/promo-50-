import { Percent, Film, ShieldCheck, Headset } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    { icon: Percent, title: 'Diskon 50%', desc: 'Hemat biaya investasi website hingga 50% untuk profesionalisasi bisnis Anda.' },
    { icon: Film, title: 'Gratis Video Iklan 60s', desc: 'Dapatkan aset promosi berupa video profesional senilai Rp490.000 secara cuma-cuma.' },
    { icon: ShieldCheck, title: 'Website Resmi & Kredibel', desc: 'Meningkatkan kepercayaan calon pelanggan dengan tampilan profesional dan domain resmi.' },
    { icon: Headset, title: 'Dukungan Prioritas', desc: 'Tim kami siap membantu optimasi dan memberikan dukungan teknis selama masa awal peluncuran.' },
  ];

  return (
    <section className="py-20 bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-100/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white dark:text-white light:text-slate-950">Keuntungan Promo HADIGITAL</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="bg-slate-950 dark:bg-slate-950 light:bg-white p-6 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-200 transition-colors duration-300">
              <b.icon className="text-cyan-400 mb-4 w-10 h-10" />
              <h3 className="font-bold mb-2 text-white dark:text-white light:text-slate-950">{b.title}</h3>
              <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
