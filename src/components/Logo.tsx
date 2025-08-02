import { PawPrint } from "lucide-react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <PawPrint className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold text-gray-800">Passeio Feliz</span>
    </Link>
  );
};