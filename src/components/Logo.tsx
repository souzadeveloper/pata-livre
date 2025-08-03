import { Link } from "react-router-dom";
import logoSrc from "../assets/images/logotipo.png";

export const Logo = () => {
  return (
    <Link to="/">
      <img src={logoSrc} alt="Pata Livre Logo" className="h-14 w-auto" />
    </Link>
  );
};