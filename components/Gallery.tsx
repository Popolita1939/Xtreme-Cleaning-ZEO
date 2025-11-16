
import React from 'react';

const galleryImages = [
  { before: 'https://picsum.photos/400/300?random=10&grayscale', after: 'https://picsum.photos/400/300?random=11', alt: 'Kitchen cleaning' },
  { before: 'https://picsum.photos/400/300?random=12&grayscale', after: 'https://picsum.photos/400/300?random=13', alt: 'Bathroom cleaning' },
  { before: 'https://picsum.photos/400/300?random=14&grayscale', after: 'https://picsum.photos/400/300?random=15', alt: 'Office cleaning' },
  { before: 'https://picsum.photos/400/300?random=16&grayscale', after: 'https://picsum.photos/400/300?random=17', alt: 'Carpet cleaning' },
  { before: 'https://picsum.photos/400/300?random=18&grayscale', after: 'https://picsum.photos/400/300?random=19', alt: 'Window cleaning' },
  { before: 'https://picsum.photos/400/300?random=20&grayscale', after: 'https://picsum.photos/400/300?random=21', alt: 'Living room cleaning' },
];

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados que Hablan por Sí Mismos</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Mira la transformación que logramos. El antes y después de nuestro trabajo de limpieza extrema.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative rounded-lg overflow-hidden shadow-lg">
              <div className="flex">
                <div className="w-1/2 relative">
                  <img src={image.before} alt={`Antes - ${image.alt}`} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">ANTES</div>
                </div>
                <div className="w-1/2 relative">
                  <img src={image.after} alt={`Después - ${image.alt}`} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">DESPUÉS</div>
                </div>
              </div>
               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
