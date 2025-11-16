
import React from 'react';
import { HomeIcon, OfficeBuildingIcon, SparklesIcon, TruckIcon, BeakerIcon } from './Icons';

const services = [
  {
    icon: <HomeIcon className="h-12 w-12 text-blue-600 mb-4" />,
    title: 'House Cleaning',
    description: 'Dejamos tu hogar impecable, desde limpiezas regulares hasta profundas, para que disfrutes de tu espacio.',
  },
  {
    icon: <OfficeBuildingIcon className="h-12 w-12 text-blue-600 mb-4" />,
    title: 'Deep Cleaning',
    description: 'Un ambiente de trabajo limpio y ordenado para mejorar la productividad y el bienestar de tu equipo.',
  },
  {
    icon: <SparklesIcon className="h-12 w-12 text-blue-600 mb-4" />,
    title: 'Regular Cleaning',
    description: 'Eliminamos suciedad, gérmenes y bacterias de cada rincón, ideal para un nuevo comienzo.',
  },
  {
    icon: <TruckIcon className="h-12 w-12 text-blue-600 mb-4" />,
    title: 'Move In Cleaning',
    description: 'Nos encargamos del polvo y los residuos de obra para que puedas estrenar tu nuevo espacio sin preocupaciones.',
  },
  {
    icon: <BeakerIcon className="h-12 w-12 text-blue-600 mb-4" />,
    title: 'Move Out Cleaning',
    description: 'Servicios especializados para devolver la vida y el brillo a tus ventanas, alfombras y muebles.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Ofrecemos soluciones de limpieza a la medida de tus necesidades, garantizando siempre la máxima calidad.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <a
                href="#cotizacion"
                className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
              >
                Cotizar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
