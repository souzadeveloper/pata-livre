import { Link } from "react-router-dom";
import logoSrc from "../assets/images/logotipo.png";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img src={logoSrc} alt="Pata Livre" className="h-[60px] w-auto" />
      <span className="text-2xl font-bold text-gray-800 hidden sm:inline">Pata Livre</span>
    </Link>
  );
};