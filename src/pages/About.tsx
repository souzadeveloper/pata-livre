import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import otavioSrc from "../assets/images/otavio.png";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={otavioSrc} alt="Otavio" />
              <AvatarFallback>O</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-3xl">Sobre o Otavio</CardTitle>
        </CardHeader>
        <CardContent className="text-lg text-gray-700 space-y-4">
          <p>
            Otavio é um jovem de 13 anos, extremamente responsável e um verdadeiro amante dos animais. Desde pequeno, ele tem uma conexão especial com os Pets, especialmente com cães.
          </p>
          <p>
            Vendo a necessidade de muitos vizinhos que trabalham fora e não têm tempo para passear com seus cãezinhos, Otavio decidiu usar seu tempo livre para oferecer serviços de passeio e cuidados.
          </p>
          <p>
            Ele não só garante a atividade física e a diversão do seu melhor amigo, mas também oferece visitas em domicílio para verificar se está tudo bem, garantindo que seu Pet tenha água, comida e muito carinho na sua ausência.
          </p>
          <p>
            Com a "Pata Livre", Otavio une sua paixão por animais ao desejo de ajudar, sempre com muita responsabilidade e amor, a todos que buscam cuidado profissional e de qualidade com os seus Pets.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;