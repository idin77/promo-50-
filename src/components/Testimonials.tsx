import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { name: 'Budi Santoso', role: 'Owner Barbershop', content: 'Website yang dibuat sangat profesional dan cepat. Promosi bisnis saya jadi jauh lebih efektif setelah punya website sendiri.' },
    { name: 'Siska Amelia', role: 'Owner Salon', content: 'Sangat puas dengan pelayanan HADIGITAL. Bonus video iklannya sangat membantu saya untuk promosi di Instagram.' },
    { name: 'Andi Wijaya', role: 'Fotografer', content: 'Desain website sangat elegan. Sangat membantu portofolio saya terlihat jauh lebih berkelas di mata calon klien.' },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Kata Mereka Tentang HADIGITAL</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <div className="flex text-cyan-400 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-400 mb-6 italic">"{t.content}"</p>
              <div className="font-bold text-white">{t.name}</div>
              <div className="text-sm text-slate-500">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
