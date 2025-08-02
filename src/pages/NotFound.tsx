import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="container mx-auto py-20 text-center">
      <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-4">Oops! Página não encontrada.</p>
      <p className="text-gray-500 mb-8">A página que você está procurando não existe ou foi movida.</p>
      <a href="/" className="text-orange-500 hover:text-orange-700 underline font-semibold">
        Voltar para o Início
      </a>
    </div>
  );
};

export default NotFound;