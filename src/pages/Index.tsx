import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, Dog, Home, ShieldCheck, Star } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Passeios Seguros",
    description: "Passeios supervisionados e cheios de diversão no Parque Piqueri, garantindo a segurança e o bem-estar do seu pet.",
  },
  {
    icon: <Dog className="h-10 w-10 text-primary" />,
    title: "Atividade e Distração",
    description: "Seu cãozinho gasta energia, socializa e se diverte, voltando para casa mais calmo e feliz.",
  },
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: "Home Pet",
    description: "Cuidamos do seu cão em domicílio, garantindo que ele tenha comida, água e companhia quando você não estiver.",
  },
];

const pricing = [
  {
    title: "Pacotes",
    subtitle: "Semanal ou Mensal",
    price: "R$ 30,00",
    per: "/ hora",
    features: ["Valor por cachorro", "Adicional por cachorro: R$ 10,00/hora"],
    popular: true,
  },
  {
    title: "Avulso",
    subtitle: "Passeio único",
    price: "R$ 40,00",
    per: "/ hora",
    features: ["Valor por cachorro", "Adicional por cachorro: R$ 15,00/hora"],
    popular: false,
  },
  {
    title: "Avulso",
    subtitle: "Passeio único",
    price: "R$ 40,00",
    per: "/ hora",
    features: ["Valor por cachorro", "Adicional por cachorro: R$ 15,00/hora"],
    popular: false,
  },
  {
    title: "Avulso",
    subtitle: "Passeio único",
    price: "R$ 40,00",
    per: "/ hora",
    features: ["Valor por cachorro", "Adicional por cachorro: R$ 15,00/hora"],
    popular: false,
  },
];

const Index = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 text-center z-10 relative">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Seu melhor amigo em boas mãos
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Oferecemos passeios divertidos e cuidados responsáveis para que seu cão seja sempre feliz e saudável.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Nossos Serviços</h2>
          <p className="text-center text-muted-foreground mb-12">Tudo o que seu pet precisa para um dia incrível.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="text-center shadow-lg">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Planos e Preços</h2>
          <p className="text-center text-muted-foreground mb-12">Escolha o plano ideal para você e seu melhor amigo.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricing.map((plan) => (
              <Card key={plan.title} className={`shadow-xl ${plan.popular ? 'border-primary border-2' : ''}`}>
                <CardHeader className="text-center">
                  {plan.popular && <div className="text-sm font-bold text-primary mb-2">MAIS POPULAR</div>}
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <CardDescription>{plan.subtitle}</CardDescription>
                  <div className="text-4xl font-bold my-4">
                    {plan.price}
                    <span className="text-lg font-normal text-muted-foreground">{plan.per}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
           <p className="text-center text-muted-foreground mt-8">Valores a combinar para necessidades especiais.</p>
        </div>
      </section>
      
      {/* Why Us Section */}
      <section id="why-us" className="py-16">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-gray-800 mb-12">Por que escolher a Pata Livre?</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 p-4">
                <Star className="h-8 w-8 text-accent"/>
                <div>
                  <h3 className="text-xl font-semibold text-left">Horários Flexíveis</h3>
                  <p className="text-muted-foreground text-left">Adaptamos nossos horários para melhor atender à sua rotina e a do seu pet.</p>
                </div>
              </div>
               <div className="flex items-center space-x-4 p-4">
                <Star className="h-8 w-8 text-accent"/>
                <div>
                  <h3 className="text-xl font-semibold text-left">Amor e Responsabilidade</h3>
                  <p className="text-muted-foreground text-left">Cuidamos do seu melhor amigo com o máximo de carinho, cuidado e segurança.</p>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Index;