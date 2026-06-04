import WhatsAppButton from './WhatsAppButton';

export default function Packages() {
  const packages = [
    {name: 'Paket Silver', price: 'Rp350.000', oldPrice: 'Rp700.000', features: ['Desain modern & responsif', 'Maksimal 5 halaman', 'Gratis domain .web.id 1 thn', 'Hosting 1 tahun', 'Bonus video iklan 60 detik'], popular: false},
    {name: 'Paket Gold', price: 'Rp750.000', oldPrice: 'Rp1.500.000', features: ['Desain premium & custom', 'Maksimal 10 halaman', 'Gratis domain .com 1 thn', 'Optimasi SEO Dasar', 'Integrasi WhatsApp', 'Bonus video iklan 60 detik'], popular: true},
    {name: 'Paket Platinum', price: 'Rp1.500.000', oldPrice: 'Rp3.000.000', features: ['Desain eksklusif & advanced', 'Unlimited halaman', 'Gratis domain .com/.co.id', 'Maintenance 3 bulan', 'Prioritas layanan teknis', 'Bonus video iklan 60 detik'], popular: false},
  ];

  const featuresList = [
    { name: 'Desain', silver: 'Modern & Responsif', gold: 'Premium & Custom', plat: 'Eksklusif & Advanced' },
    { name: 'Halaman', silver: 'Max 5', gold: 'Max 10', plat: 'Unlimited' },
    { name: 'Domain', silver: '.web.id', gold: '.com', plat: '.com/.co.id' },
    { name: 'Optimasi & Integrasi', silver: '-', gold: 'SEO Dasar + WhatsApp', plat: 'SEO Lanjutan + WhatsApp' },
    { name: 'Bonus', silver: 'Video 60s', gold: 'Video 60s', plat: 'Video 60s' },
  ];

  return (
    <section id="paket" className="py-20 bg-slate-950 dark:bg-slate-950 light:bg-slate-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white dark:text-white light:text-slate-950">Pilih Paket Sesuai Kebutuhan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((p, i) => (
            <div key={i} className={`bg-slate-900 dark:bg-slate-900 light:bg-slate-200 p-8 rounded-2xl border ${p.popular ? 'border-2 border-cyan-500 relative' : 'border border-slate-800 dark:border-slate-800 light:border-slate-300'}`}>
              {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">PALING POPULER</div>}
              <h3 className="text-xl font-bold mb-2 text-white dark:text-white light:text-slate-950">{p.name}</h3>
              <div className="mb-4">
                <span className="text-slate-500 light:text-slate-500 line-through">{p.oldPrice}</span>
                <span className="text-3xl font-bold text-white dark:text-white light:text-slate-950 block">{p.price}</span>
              </div>
              <ul className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 space-y-3 mb-8">
                {p.features.map((f, j) => <li key={j}>✅ {f}</li>)}
              </ul>
              <WhatsAppButton className={`block text-center ${p.popular ? 'bg-cyan-600 hover:bg-cyan-500' : 'bg-slate-800 dark:bg-slate-800 light:bg-slate-300 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-400'} text-white dark:text-white light:text-slate-950 py-3 rounded-lg font-bold transition`}>
                Pilih {p.name}
              </WhatsAppButton>
            </div>
          ))}
        </div>

        <div className="mt-20 overflow-x-auto bg-slate-900 dark:bg-slate-900 light:bg-slate-200 p-6 rounded-2xl border border-slate-800 dark:border-slate-800 light:border-slate-300">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700 dark:border-slate-700 light:border-slate-400">
                <th className="p-4 text-slate-400 dark:text-slate-400 light:text-slate-600">Fitur</th>
                <th className="p-4 text-slate-200 dark:text-slate-200 light:text-slate-900">Silver</th>
                <th className="p-4 text-slate-200 dark:text-slate-200 light:text-slate-900">Gold</th>
                <th className="p-4 text-slate-200 dark:text-slate-200 light:text-slate-900">Platinum</th>
              </tr>
            </thead>
            <tbody>
              {featuresList.map((f, i) => (
                <tr key={i} className="border-b border-slate-800 dark:border-slate-800 light:border-slate-300">
                  <td className="p-4 font-semibold text-slate-300 dark:text-slate-300 light:text-slate-800">{f.name}</td>
                  <td className="p-4 text-slate-400 dark:text-slate-400 light:text-slate-600">{f.silver}</td>
                  <td className="p-4 text-slate-400 dark:text-slate-400 light:text-slate-600">{f.gold}</td>
                  <td className="p-4 text-slate-400 dark:text-slate-400 light:text-slate-600">{f.plat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
