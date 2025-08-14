import { Link } from "react-router-dom";
import logoSrc from "../assets/images/logotipo.png";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 sm:gap-3">
      <img src={logoSrc} alt="Pata Livre" className="h-[50px] sm:h-[60px] w-auto" />

    </Link>
  );
};