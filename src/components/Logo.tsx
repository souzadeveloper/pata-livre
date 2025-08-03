import { Link } from "react-router-dom";
import logoSrc from "../assets/images/logotipo.png";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <img src={logoSrc} alt="Pata Livre Logo" className="h-10 w-auto" />
      <span className="text-2xl font-bold text-gray-800">Pata Livre</span>
    </Link>
  );
};