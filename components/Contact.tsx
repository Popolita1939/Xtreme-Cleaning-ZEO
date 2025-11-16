import React from 'react';
import { PhoneIcon, MailIcon, LocationMarkerIcon, FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions or ready to schedule? Contact us. We're here to help!
            </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <LocationMarkerIcon className="h-6 w-6 text-blue-600 mr-4" />
                <span>56 Bradrick Ln. West Milford, NJ 07480</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-blue-600 mr-4" />
                <span>+1 (347)-232-4984</span>
              </div>
              <div className="flex items-center">
                <MailIcon className="h-6 w-6 text-blue-600 mr-4" />
                <span>contacto@xtremecleaning.com</span>
              </div>
            </div>
            <div className="mt-8">
              <a href="https://wa.me/13472324984" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300 w-full text-center">
                <WhatsAppIcon className="h-6 w-6 mr-2" />
                Chat with us on WhatsApp
              </a>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold mb-4 text-center">Follow Us</h4>
                 <div className="flex justify-center space-x-6">
                    <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-blue-800 transition-colors"><FacebookIcon className="h-8 w-8" /></a>
                    <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-pink-600 transition-colors"><InstagramIcon className="h-8 w-8" /></a>
                    <a href="#" aria-label="TikTok" className="text-gray-500 hover:text-black transition-colors"><TikTokIcon className="h-8 w-8" /></a>
                </div>
            </div>
          </div>
          <div className="lg:w-1/2 h-96 lg:h-auto rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.257591322036!2d-122.42172048468158!3d37.78336997975767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4451%3A0x23171d37413d5621!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1628000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Xtreme Cleaning Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
