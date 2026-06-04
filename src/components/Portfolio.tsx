import barberImg from '../assets/images/barber_web_showcase_1780590897180.png';
import salonImg from '../assets/images/salon_web_showcase_1780590915432.png';
import studioImg from '../assets/images/studio_web_showcase_1780590930485.png';

export default function Portfolio() {
  const items = [
    {name: 'Azhar Barbershop', url: 'https://azhar-baeber.vercel.app', img: barberImg},
    {name: 'Salon Cantik Permata', url: 'https://salo-cantik-permata.vercel.app', img: salonImg},
    {name: 'Studio Momen Indah', url: 'https://studio-momen-indah.vercel.app', img: studioImg},
  ];
  return (
    <section id="portofolio" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contoh Website yang Bisa Kami Buat</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i, idx) => (
            <a key={idx} href={i.url} target="_blank" rel="noreferrer" className="block group bg-slate-900 p-2 rounded-2xl border border-slate-800 hover:border-cyan-500 transition-all hover:-translate-y-2">
              <img src={i.img} alt={`Website ${i.name}`} className="rounded-xl w-full" />
              <p className="text-center py-4 font-semibold group-hover:text-cyan-400 transition">{i.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
