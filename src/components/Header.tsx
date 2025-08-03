import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";

const Header = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-lg font-medium transition-colors pb-1 ${
      isActive
        ? "text-primary border-b-2 border-primary"
        : "text-gray-600 hover:text-primary"
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={getNavLinkClass}>
            Início
          </NavLink>
          <NavLink to="/about" className={getNavLinkClass}>
            Sobre
          </NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>
            Contato
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;