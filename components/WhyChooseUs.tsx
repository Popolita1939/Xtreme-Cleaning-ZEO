
import React from 'react';
import { UserGroupIcon, GlobeAltIcon, ClockIcon, ChatAlt2Icon, CheckCircleIcon } from './Icons';

const advantages = [
  {
    icon: <UserGroupIcon className="h-10 w-10 text-white" />,
    title: 'Personal Capacitado y Confiable',
    description: 'Nuestro equipo está rigurosamente seleccionado y entrenado para ofrecer un servicio excepcional.',
  },
  {
    icon: <GlobeAltIcon className="h-10 w-10 text-white" />,
    title: 'Productos Ecológicos y Seguros',
    description: 'Utilizamos productos amigables con el medio ambiente, seguros para tu familia y mascotas.',
  },
  {
    icon: <ClockIcon className="h-10 w-10 text-white" />,
    title: 'Puntualidad Garantizada',
    description: 'Respetamos tu tiempo. Llegamos a la hora acordada y cumplimos con los plazos establecidos.',
  },
  {
    icon: <ChatAlt2Icon className="h-10 w-10 text-white" />,
    title: 'Atención Personalizada',
    description: 'Escuchamos tus necesidades para ofrecerte un plan de limpieza que se ajuste perfectamente a ti.',
  },
  {
    icon: <CheckCircleIcon className="h-10 w-10 text-white" />,
    title: 'Resultados Comprobables',
    description: 'Nos enorgullecemos de la calidad de nuestro trabajo, con clientes satisfechos que nos respaldan.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/600/500?random=2" 
              alt="Team of professional cleaners" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por Qué Elegirnos?</h2>
            <p className="text-gray-600 mb-8">
              En Xtreme Cleaning, no solo limpiamos, creamos ambientes saludables y armoniosos. Nuestra dedicación y atención al detalle nos diferencian.
            </p>
            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
