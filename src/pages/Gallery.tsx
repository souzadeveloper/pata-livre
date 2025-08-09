import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import photo1 from "../assets/photos/foto-01.jpg";
import photo2 from "../assets/photos/foto-02.jpg";
import photo3 from "../assets/photos/foto-03.jpg";
import photo4 from "../assets/photos/foto-04.jpg";

const photos = [
  { src: photo1, alt: "Cachorro feliz passeando" },
  { src: photo2, alt: "Cachorro brincando no parque" },
  { src: photo3, alt: "Otavio com um cachorro" },
  { src: photo4, alt: "Outro cachorro feliz no passeio" },
];

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Galeria de Fotos</CardTitle>
          <p className="text-muted-foreground">
            Momentos especiais com nossos amigos de quatro patas.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md group">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-gray-800">Vídeos</h3>
            <p className="text-muted-foreground mt-2">
              Em breve, adicionaremos vídeos dos passeios e cuidados!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Gallery;