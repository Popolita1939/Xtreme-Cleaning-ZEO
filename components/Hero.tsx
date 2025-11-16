import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img src="https://papelmatic.com/wp-content/uploads/2025/08/papelmatic-higiene-profesional-material-limpieza-contaminacion-cruzada.jpg" alt="Sparkling clean living room" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-fade-in-down">
          Extreme Cleaning for Sparkling Results!
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md animate-fade-in-up">
          We transform your spaces with professional, reliable, and detailed cleaning service.
        </p>
        <a
          href="#quote"
          className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-transform duration-300 hover:scale-105 shadow-lg"
        >
          Request Your Cleaning Today
        </a>
      </div>
    </section>
  );
};

export default Hero;
