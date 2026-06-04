import WhatsAppButton from './WhatsAppButton';
import heroImage from '../assets/images/hero_portfolio_1780590578850.png';

export default function Hero() {
  return (
    <section id="beranda" className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-400 text-xs font-bold border border-cyan-500/30 mb-6">PROMO TERBATAS 10 PELANGGAN PERTAMA</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">Website Profesional <span className="text-cyan-400">Diskon 50%</span></h1>
          <p className="text-lg text-slate-400 mb-8">Bonus Gratis Video Iklan 60 Detik Senilai Rp490.000 untuk 10 Pelanggan Pertama. Buat bisnis Anda tampil lebih profesional, mudah ditemukan di Google, dan siap dipromosikan di Facebook, Instagram, & WhatsApp.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppButton className="bg-cyan-600 hover:bg-cyan-500 text-white text-center px-8 py-4 rounded-xl font-bold transition glow-cyan">
              Ambil Promo Sekarang
            </WhatsAppButton>
            <a href="#paket" className="border border-slate-700 hover:border-cyan-500 text-white text-center px-8 py-4 rounded-xl font-bold transition">Lihat Paket</a>
          </div>
        </div>
        <div className="relative">
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl glow-cyan">
            <img src={heroImage} alt="Website Portfolio Showcase" className="rounded-lg w-full" />
            <div className="absolute -top-4 -right-4 bg-red-500 text-white font-bold px-4 py-2 rounded-lg rotate-3 shadow-lg">DISKON 50%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
