import React from 'react';
import { HomeIcon, OfficeBuildingIcon, SparklesIcon, TruckIcon, BeakerIcon } from './Icons';

const services = [
  {
    icon: <HomeIcon className="h-12 w-12 text-blue-600 mb-4" />,
    title: 'Residential Cleaning',
    description: 'We leave your home spotless, from regular cleanings to deep cleans, so you can enjoy your space.',
  },
  {
    icon: <OfficeBuildingIcon className="h-12 w-12 text-blue-600 mb-4" />,
    title: 'Office Cleaning',
    description: 'A clean and organized work environment to improve productivity and your team\'s well-being.',
  },
  {
    icon: <SparklesIcon className="h-12 w-12 text-blue-600 mb-4" />,
    title: 'Deep Cleaning',
    description: 'We eliminate dirt, germs, and bacteria from every corner, ideal for a fresh new beginning.',
  },
  {
    icon: <TruckIcon className="h-12 w-12 text-blue-600 mb-4" />,
    title: 'Post-Construction Cleaning',
    description: 'We handle dust and construction debris so you can enjoy your new space without worries.',
  },
  {
    icon: <BeakerIcon className="h-12 w-12 text-blue-600 mb-4" />,
    title: 'Specialized Services',
    description: 'Specialized services to restore life and shine to your windows, carpets, and furniture.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We offer customized cleaning solutions tailored to your needs, always guaranteeing the highest quality.
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
                href="#quote"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Get a Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
