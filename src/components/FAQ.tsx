import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    { q: 'Berapa lama proses pembuatan website?', a: 'Proses pembuatan website kami rata-rata memakan waktu 3 hingga 7 hari kerja, tergantung pada kompleksitas desain dan materi yang Anda siapkan.' },
    { q: 'Apakah harga sudah termasuk domain dan hosting?', a: 'Ya, semua paket kami sudah termasuk domain dan hosting selama 1 tahun pertama.' },
    { q: 'Bagaimana jika saya tidak bisa melakukan update konten?', a: 'Jangan khawatir, kami memberikan panduan dasar setelah website jadi. Jika membutuhkan perubahan besar, kami juga menyediakan layanan maintenance.' },
    { q: 'Bisakah saya request revisi desain?', a: 'Tentu, Anda bisa melakukan revisi desain hingga kesepakatan desain utama tercapai sesuai dengan paket yang dipilih.' },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-slate-900/50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pertanyaan Sering Diajukan</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden">
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-900 transition"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold">{f.q}</span>
                {openIndex === i ? <ChevronUp className="text-cyan-400" /> : <ChevronDown className="text-cyan-400" />}
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-slate-400 border-t border-slate-800">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
