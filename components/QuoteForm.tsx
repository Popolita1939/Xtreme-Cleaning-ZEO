import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, 'quotes'), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        date: new Date().toLocaleString('en-US'),
        timestamp: new Date(),
      });

      alert('Thank you for your request! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      alert('Error submitting the form. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 md:p-12 rounded-xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Get Your Free Quote</h2>
          <p className="text-gray-600 text-center mb-8">
            Fill out the form and we'll send you a personalized quote with no obligation.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" name="name" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" value={formData.email} onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" name="phone" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" value={formData.phone} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <select name="service" id="service" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" value={formData.service} onChange={handleChange}>
                  <option value="">Select a service</option>
                  <option>House Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>Regular Cleaning</option>
                  <option>Move In/Out Cleaning</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea name="message" id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Tell us more about what you need..." value={formData.message} onChange={handleChange}></textarea>
            </div>
            <div className="text-center">
              <button type="submit" disabled={loading} className="bg-blue-600 text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-transform duration-300 hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? 'Sending...' : 'Request a Quote'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
