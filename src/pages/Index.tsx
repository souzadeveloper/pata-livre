import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";

const services = [
  {
    title: "Banho e Tosa",
    description: "Banhos relaxantes e tosas estilosas para manter seu pet limpo e feliz.",
    price: "A partir de R$ 80,00",
  },
  {
    title: "Tosa Higiênica",
    description: "Corte de unhas, limpeza de ouvidos e cuidados essenciais para o bem-estar.",
    price: "A partir de R$ 50,00",
  },
  {
    title: "Hidratação",
    description: "Tratamentos para deixar a pelagem do seu amigo macia, brilhante e saudável.",
    price: "A partir de R$ 40,00",
  },
];

const features = [
  "Profissionais qualificados e apaixonados por animais.",
  "Produtos de alta qualidade, seguros para seu pet.",
  "Ambiente climatizado, limpo e seguro.",
  "Atendimento exclusivo e com hora marcada.",
  "Comodidade de um serviço dentro do seu condomínio.",
];

const Index = () => {
  const heroImage = "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop";

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Cuidado e Carinho para seu Pet</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">O melhor serviço de banho e tosa com a comodidade que você e seu melhor amigo merecem, dentro do seu condomínio.</p>
            <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/contact">Agende um Horário</Link>
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <p className="text-lg font-semibold">{service.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Alert className="mt-8 max-w-md mx-auto bg-primary/10 border-primary text-primary">
              <Info className="h-5 w-5" />
              <AlertDescription className="font-semibold">
                Valores a combinar para necessidades especiais.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a Pata Livre?</h2>
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;