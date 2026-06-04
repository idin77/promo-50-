import { MessageCircle } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function WhatsAppFloat() {
  return (
    <WhatsAppButton className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center gap-2 transition animate-bounce">
      <MessageCircle size={24} />
      <span className="hidden md:inline font-semibold">Butuh bantuan? Chat via WhatsApp.</span>
    </WhatsAppButton>
  );
}
