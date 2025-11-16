import React from 'react';
import { UserGroupIcon, GlobeAltIcon, ClockIcon, ChatAlt2Icon, CheckCircleIcon } from './Icons';

const advantages = [
  {
    icon: <UserGroupIcon className="h-10 w-10 text-white" />,
    title: 'Trained and Reliable Staff',
    description: 'Our team is rigorously selected and trained to provide exceptional service.',
  },
  {
    icon: <GlobeAltIcon className="h-10 w-10 text-white" />,
    title: 'Eco-Friendly and Safe Products',
    description: 'We use environmentally friendly products that are safe for your family and pets.',
  },
  {
    icon: <ClockIcon className="h-10 w-10 text-white" />,
    title: 'Guaranteed Punctuality',
    description: 'We respect your time. We arrive on schedule and meet all established deadlines.',
  },
  {
    icon: <ChatAlt2Icon className="h-10 w-10 text-white" />,
    title: 'Personalized Attention',
    description: 'We listen to your needs to offer you a cleaning plan that fits you perfectly.',
  },
  {
    icon: <CheckCircleIcon className="h-10 w-10 text-white" />,
    title: 'Proven Results',
    description: 'We take pride in the quality of our work, with satisfied customers who back us up.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 mb-8">
              At Xtreme Cleaning, we don't just clean, we create healthy and harmonious environments. Our dedication and attention to detail set us apart.
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
