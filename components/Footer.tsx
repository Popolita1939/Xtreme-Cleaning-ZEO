
import React from 'react';
import { FacebookIcon, InstagramIcon, TikTokIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Xtreme Cleaning</h3>
            <p className="text-gray-400">Limpieza extrema para resultados brillantes. Tu satisfacción es nuestra prioridad.</p>
             <div className="flex space-x-4 mt-4">
                <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-colors"><FacebookIcon className="h-6 w-6" /></a>
                <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors"><InstagramIcon className="h-6 w-6" /></a>
                <a href="#" aria-label="TikTok" className="hover:text-gray-300 transition-colors"><TikTokIcon className="h-6 w-6" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-white">Servicios</a></li>
              <li><a href="#nosotros" className="text-gray-400 hover:text-white">Nosotros</a></li>
              <li><a href="#galeria" className="text-gray-400 hover:text-white">Galería</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+1 (347)-232-4984</li>
              <li>contacto@xtremecleaning.com</li>
              <li>123 Clean Street, Tidyville</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Horario</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Lunes - Viernes: 8:00 AM - 6:00 PM</li>
              <li>Sábado: 9:00 AM - 3:00 PM</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Xtreme Cleaning. Todos los derechos reservados.</p>
          <p className="mt-1">
            <a href="#" className="hover:text-white">Política de Privacidad</a> | <a href="#" className="hover:text-white">Términos de Servicio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
