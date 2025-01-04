import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Contáctame</h2>
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lightText mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-tertiary border border-lightestText/20 rounded-lg focus:outline-none focus:border-secondary text-lightText"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lightText mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-tertiary border border-lightestText/20 rounded-lg focus:outline-none focus:border-secondary text-lightText"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lightText mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-tertiary border border-lightestText/20 rounded-lg focus:outline-none focus:border-secondary text-lightText"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="btn btn-primary w-full">
                  Enviar Mensaje
                </button>
              </div>
            </form>
            <div className="mt-12 text-center">
              <p className="text-lightText mb-4">También puedes encontrarme en:</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lightText hover:text-secondary transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lightText hover:text-secondary transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="mailto:tu@email.com"
                  className="text-lightText hover:text-secondary transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 