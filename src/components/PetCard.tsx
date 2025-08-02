import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface Pet {
  id: number;
  name: string;
  breed: string;
  age: string;
  imageUrl: string;
}

interface PetCardProps {
  pet: Pet;
}

const PetCard = ({ pet }: PetCardProps) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <img src={pet.imageUrl} alt={pet.name} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-bold">{pet.name}</CardTitle>
        <p className="text-gray-600">{pet.breed}</p>
        <p className="text-sm text-gray-500">{pet.age}</p>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center">
        <Button variant="outline">Saiba Mais</Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500">
          <Heart className="h-6 w-6" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PetCard;