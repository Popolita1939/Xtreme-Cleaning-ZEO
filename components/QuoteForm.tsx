
import React, { useState } from 'react';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API
    alert('¡Gracias por tu solicitud! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="cotizacion" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 md:p-12 rounded-xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Obtén tu Presupuesto Gratis</h2>
          <p className="text-gray-600 text-center mb-8">
            Completa el formulario y te enviaremos una cotización personalizada sin compromiso.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                <input type="text" name="name" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" value={formData.email} onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input type="tel" name="phone" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" value={formData.phone} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Servicio</label>
                <select name="service" id="service" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" value={formData.service} onChange={handleChange}>
                  <option value="">Selecciona un servicio</option>
                  <option>Limpieza Residencial</option>
                  <option>Limpieza de Oficinas</option>
                  <option>Limpieza Profunda</option>
                  <option>Limpieza Post-Construcción</option>
                  <option>Otros</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea name="message" id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Cuéntanos más sobre lo que necesitas..." value={formData.message} onChange={handleChange}></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-600 text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-transform duration-300 hover:scale-105 shadow-md">
                Pedir Presupuesto
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
