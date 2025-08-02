import { PawPrint } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <PawPrint className="h-8 w-8 text-orange-500" />
          <span className="text-2xl font-bold text-gray-800">Pata Livre</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-orange-500 transition-colors">Início</Link>
          <Link to="/about" className="text-gray-600 hover:text-orange-500 transition-colors">Sobre</Link>
          <Link to="/contact" className="text-gray-600 hover:text-orange-500 transition-colors">Contato</Link>
        </nav>
        <Button className="bg-orange-500 hover:bg-orange-600">
          Adote um Amigo
        </Button>
      </div>
    </header>
  );
};

export default Header;