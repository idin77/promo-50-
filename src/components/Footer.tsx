import WhatsAppButton from './WhatsAppButton';

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Siap Bikin Bisnis Anda Tampil Lebih Profesional?</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">Ambil promo diskon 50% + gratis video iklan 60 detik sekarang juga sebelum kuota 10 pelanggan pertama habis.</p>
        <WhatsAppButton className="bg-cyan-600 hover:bg-cyan-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition inline-block glow-cyan">
          Chat WhatsApp Sekarang
        </WhatsAppButton>
      </div>
    </footer>
  );
}
