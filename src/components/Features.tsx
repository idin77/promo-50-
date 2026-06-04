import { Search, Megaphone, ShieldCheck, Briefcase } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: Search, title: 'Sulit Ditemukan', desc: 'Bisnis Anda tidak muncul di pencarian Google saat calon pelanggan mencari jasa Anda.' },
    { icon: Megaphone, title: 'Promosi Seadanya', desc: 'Promosi hanya melalui chat atau postingan biasa yang cepat tenggelam.' },
    { icon: ShieldCheck, title: 'Kurang Dipercaya', desc: 'Calon pelanggan ragu karena bisnis Anda belum memiliki website resmi yang profesional.' },
    { icon: Briefcase, title: 'Butuh Media', desc: 'Memerlukan media promosi yang otomatis bekerja 24/7 untuk menarik pelanggan.' },
  ];

  return (
    <section id="layanan" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Apakah Anda Mengalami Hal Ini?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500 transition">
              <f.icon className="text-cyan-400 mb-4 w-10 h-10" />
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
