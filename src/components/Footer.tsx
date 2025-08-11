import { Link } from "react-router-dom";
import logoSrc from "../assets/images/logotipo.png";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: About */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-3 mb-2">
              <img src={logoSrc} alt="Pata Livre" className="h-[40px] w-auto" />
              <span className="text-2xl font-bold text-white">Pata Livre</span>
            </Link>
            <p className="text-sm max-w-xs">
              Serviço completo de cuidados e passeios para o seu melhor amigo.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+5511940604293" className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>(11) 94060-4293</span>
                </a>
              </li>
              <li>
                <a href="mailto:otaviotsouza@gmail.com" className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>otaviotsouza@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Fale conosco</h3>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
              <a
                href="https://wa.me/5511940604293?text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Passeio%20com%20C%C3%A3es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Conversar no WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Pata Livre. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;