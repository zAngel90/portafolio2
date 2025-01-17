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
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-8 sm:mb-12">
            Contáctame
          </h2>
          
          <div className="bg-black/50 p-6 sm:p-8 rounded-xl border border-yellow-400/20">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-yellow-400 text-sm sm:text-base mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black/60 border border-yellow-400/20 rounded-lg 
                           focus:outline-none focus:border-yellow-400/60 text-yellow-100
                           placeholder-yellow-400/50 transition-colors duration-300"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-yellow-400 text-sm sm:text-base mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black/60 border border-yellow-400/20 rounded-lg 
                           focus:outline-none focus:border-yellow-400/60 text-yellow-100
                           placeholder-yellow-400/50 transition-colors duration-300"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-yellow-400 text-sm sm:text-base mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-black/60 border border-yellow-400/20 rounded-lg 
                           focus:outline-none focus:border-yellow-400/60 text-yellow-100
                           placeholder-yellow-400/50 transition-colors duration-300 resize-y min-h-[100px]"
                  placeholder="Tu mensaje..."
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold 
                           py-2 px-4 rounded-lg transition-colors duration-300
                           focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
            
            <div className="mt-8 sm:mt-12 text-center">
              <p className="text-yellow-400/80 mb-4 text-sm sm:text-base">También puedes encontrarme en:</p>
              <div className="flex justify-center space-x-4 sm:space-x-6">
                <a
                  href="https://github.com/zAngel90?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm sm:text-base text-yellow-400 hover:text-yellow-300 
                           border border-yellow-400/20 hover:border-yellow-400/60 rounded-lg
                           transition-colors duration-300"
                >
                  GitHub
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