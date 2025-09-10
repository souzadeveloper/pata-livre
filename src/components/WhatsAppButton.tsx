import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511940604293?text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Passeio%20com%20C%C3%A3es"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-600 transition-all duration-300 hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-semibold hidden sm:inline">Atendimento WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;