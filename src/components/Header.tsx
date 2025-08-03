import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-primary transition-colors">Início</Link>
          <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">Sobre</Link>
          <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contato</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;