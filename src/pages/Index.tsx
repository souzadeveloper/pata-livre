import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, Dog, Home, ShieldCheck, Star, Info, Camera, Calendar, HeartHandshake, ListChecks, Smile, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const services = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Passeios Seguros",
    description: "Passeios supervisionados e cheios de diversão, garantindo a segurança e o bem-estar do seu Pet.",
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
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "Pet Delivery",
    description: "Levamos e buscamos seu cão nos Pet Shops e Creches das proximidades, nos horários definidos.",
  },
];

const pricing = [
  {
    title: "Pacotes (Individual)",
    subtitle: "Semanal ou Mensal",
    price: "R$ 30,00",
    per: "/ hora",
    features: ["Valor para apenas 01 (um) Pet", "Válido para Raças Pequenas e Grandes"],
    popular: true,
  },
  {
    title: "Avulso (Individual)",
    subtitle: "Passeio único",
    price: "R$ 40,00",
    per: "/ hora",
    features: ["Valor para apenas 01 (um) Pet", "Válido para Raças Pequenas e Grandes"],
    popular: false,
  },
  {
    title: "Pacotes (Em grupo)",
    subtitle: "Semanal ou Mensal",
    price: "R$ 50,00",
    per: "/ hora",
    features: ["Valor para até 03 (três) Pets do mesmo dono", "Válido apenas para Raças Pequenas"],
    popular: false,
  },
  {
    title: "Avulso (Em grupo)",
    subtitle: "Passeio único",
    price: "R$ 60,00",
    per: "/ hora",
    features: ["Valor para até 03 (três) Pets do mesmo dono", "Válido apenas para Raças Pequenas"],
    popular: false,
  },
];

const testimonials = [
  {
    quote: "Super indico!! Minhas cachorras já ficam doidas quando sabem que o Otavio está esperando. 🥰 🐶",
    author: "Ana Leticia",
    avatarFallback: "AL",
  },
  {
    quote: "Minha filha de 4 patas foi uma das ganhadoras do passeio. O Otávio é um graça, super jovem mas muito responsável, atencioso e carinhoso. A Alicia amou o passeio e mamãe ficou muito feliz. ❤️",
    author: "Sheila",
    avatarFallback: "S",
  },
];

const whyUsItems = [
  {
    icon: <Star className="h-8 w-8 text-accent"/>,
    title: "Horários Flexíveis",
    description: "Adaptamos nossos horários para melhor atender à sua rotina e a do seu Pet.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-accent"/>,
    title: "Amor e Responsabilidade",
    description: "Cuidamos do seu melhor amigo com o máximo de carinho, cuidado e segurança.",
  },
  {
    icon: <Calendar className="h-8 w-8 text-accent"/>,
    title: "Frequência Personalizada",
    description: "Passeios diários, alternados ou avulsos, conforme a sua necessidade.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent"/>,
    title: "Caminhadas Seguras",
    description: "Atenção total ao seu pet durante todo o percurso, garantindo um passeio tranquilo.",
  },
  {
    icon: <Camera className="h-8 w-8 text-accent"/>,
    title: "Acompanhamento Pós-Passeio",
    description: "Enviamos um relatório com fotos e informações após cada passeio.",
  },
];

const requirements = [
  {
    icon: <ListChecks className="h-10 w-10 text-primary" />,
    title: "Coleira e Guia",
    description: "O cão deve possuir coleira e guia em bom estado para garantir a segurança durante o passeio.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Vacinas em Dia",
    description: "Para a segurança de todos, é fundamental que o cão esteja com as vacinas em dia.",
  },
  {
    icon: <Smile className="h-10 w-10 text-primary" />,
    title: "Cão Sociável",
    description: "O cão precisa ser dócil para não estranhar pessoas que ele não conhece e interagir bem.",
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
          <Button asChild size="lg">
            <a
              href="https://wa.me/5511940604293?text=Quero%20Agendar%20um%20passeio%20para%20o%20meu%20Pet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                aria-hidden="true"
                className="mr-2 h-5 w-5"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
              Agendar Horário
            </a>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Nossos Serviços</h2>
          <p className="text-center text-muted-foreground mb-12">Tudo o que seu Pet precisa para um dia incrível.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <div className="max-w-2xl mx-auto mt-12">
            <Card className="bg-transparent border-2 border-dashed border-primary">
                <CardContent className="p-6 text-center flex items-center justify-center space-x-4">
                    <Info className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="text-lg font-medium text-gray-800">
                        Valores a combinar para necessidades especiais. <Link to="/contact" className="font-bold text-primary hover:underline">Entre em contato!</Link>
                    </p>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Why Us Section */}
      <section id="why-us" className="py-16">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-gray-800 mb-12">Por que escolher a Pata Livre?</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyUsItems.map((item) => (
                <div key={item.title} className="flex items-start space-x-4 p-4">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-left">{item.title}</h3>
                    <p className="text-muted-foreground text-left">{item.description}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Requisitos Essenciais</h2>
          <p className="text-center text-muted-foreground mb-12">Para garantir um passeio seguro e divertido, pedimos atenção aos seguintes pontos:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((req) => (
              <Card key={req.title} className="text-center shadow-lg">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    {req.icon}
                  </div>
                  <CardTitle>{req.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{req.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">O que nossos Clientes dizem</h2>
          <p className="text-center text-muted-foreground mb-12">A opinião de quem confia no nosso trabalho.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarFallback className="text-xl bg-primary/20 text-primary font-bold">{testimonial.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    <p>"{testimonial.quote}"</p>
                  </blockquote>
                  <p className="font-semibold text-gray-800">- {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;