import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-lg font-medium transition-colors pb-1 ${
      isActive
        ? "text-primary border-b-2 border-primary"
        : "text-gray-600 hover:text-primary"
    }`;

  const getMobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-4 text-lg rounded-md ${
      isActive
        ? "bg-primary/10 text-primary font-semibold"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
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

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <SheetClose asChild>
                  <NavLink to="/" className={getMobileNavLinkClass}>
                    Início
                  </NavLink>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink to="/about" className={getMobileNavLinkClass}>
                    Sobre
                  </NavLink>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink to="/contact" className={getMobileNavLinkClass}>
                    Contato
                  </NavLink>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;