import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, MessageCircle, Clock, Mail } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-lg mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Entre em Contato</CardTitle>
          <p className="text-muted-foreground">Agende um horário e saiba mais informações.</p>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          <div className="flex flex-col items-center space-y-3 text-center">
            <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
              <a
                href="https://wa.me/5511940604293?text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Passeio%20com%20C%C3%A3es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Conversar no WhatsApp
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">Falar com Otavio - (11) 94060-4293</p>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div className="text-lg">
              <p className="font-semibold">E-mail</p>
              <a href="mailto:otaviotsouza@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                otaviotsouza@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div className="text-lg">
              <p className="font-semibold">Local de Atendimento</p>
              <p className="text-sm text-muted-foreground">Parque do Piqueri</p>
              <p className="text-sm text-muted-foreground">Espaço Pet (para moradores do Condomínio Scena)</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div className="text-lg">
              <p className="font-semibold">Horários de Atendimento</p>
              <p className="text-sm text-muted-foreground">Segunda a Sexta: 14:00 - 18:00</p>
              <p className="text-sm text-muted-foreground">Sábados e Feriados: 08:00 - 18:00</p>
              <p className="text-sm text-muted-foreground">Demais horários a combinar!!!</p>
            </div>
          </div>

          <Alert className="bg-primary/10 border-primary text-primary">
            <AlertDescription className="font-semibold text-center">
              Atendimento exclusivo para condomínios próximos ao Parque do Piqueri.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;