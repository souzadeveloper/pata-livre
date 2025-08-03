import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-lg mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Entre em Contato</CardTitle>
          <p className="text-muted-foreground">Agende um horário e saiba mais informações.</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <Phone className="h-6 w-6 text-primary" />
            <div className="text-lg">
              <p className="font-semibold">(11) 94060-4293 (WhatsApp)</p>
              <p className="text-sm text-muted-foreground">Falar com Otavio</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="h-6 w-6 text-primary" />
            <div className="text-lg">
              <p className="font-semibold">Local de Atendimento</p>
              <p className="text-sm text-muted-foreground">Atendimento exclusivo para moradores do condomínio.</p>
            </div>
          </div>

          <Alert className="bg-primary/10 border-primary text-primary">
            <Info className="h-5 w-5" />
            <AlertDescription className="font-semibold">
              Em breve atenderemos a outros condomínios da região.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;