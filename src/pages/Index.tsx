import { Button } from "@/components/ui/button";
import PetCard from "@/components/PetCard";

const pets = [
  { id: 1, name: "Rex", breed: "Vira-lata", age: "2 anos", imageUrl: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=1974&auto=format&fit=crop" },
  { id: 2, name: "Mia", breed: "Siamês", age: "1 ano", imageUrl: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=2080&auto=format&fit=crop" },
  { id: 3, name: "Thor", breed: "Golden Retriever", age: "3 anos", imageUrl: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&w=1974&auto=format&fit=crop" },
  { id: 4, name: "Luna", breed: "Persa", age: "4 anos", imageUrl: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?q=80&w=2070&auto=format&fit=crop" },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Encontre seu novo melhor amigo</h1>
          <p className="text-xl text-gray-600 mb-8">Milhares de cães e gatos esperando por um lar.</p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Procure um Pet
          </Button>
        </div>
      </section>

      {/* Pets Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Amigos esperando por você</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {pets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;