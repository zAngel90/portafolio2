import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      href: 'https://wa.me/573105334580',
    },
    {
      name: 'Email',
      icon: FiMail,
      href: 'mailto:tu@email.com',
    },
    {
      name: 'GitHub',
      icon: FiGithub,
      href: 'https://github.com/zAngel90',
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      href: 'https://linkedin.com/in/tu-perfil',
    },
    {
      name: 'Twitter',
      icon: FiTwitter,
      href: 'https://twitter.com/tu-perfil',
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-light-primary/80 dark:bg-dark-primary/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light-text dark:text-dark-text">
            Contacto
          </h2>
          <p className="text-light-muted dark:text-dark-muted mb-12">
            ¿Tienes un proyecto en mente? Me encantaría colaborar contigo.
            Estoy disponible para trabajar en proyectos freelance o tiempo completo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Formulario de contacto */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-light-secondary dark:bg-dark-secondary
                         border border-light-border dark:border-dark-border
                         text-light-text dark:text-dark-text
                         focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-light-secondary dark:bg-dark-secondary
                         border border-light-border dark:border-dark-border
                         text-light-text dark:text-dark-text
                         focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-light-secondary dark:bg-dark-secondary
                         border border-light-border dark:border-dark-border
                         text-light-text dark:text-dark-text
                         focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
                placeholder="Tu mensaje..."
              />
            </div>
            <motion.button
              type="submit"
              className="w-full px-8 py-4 rounded-lg bg-light-accent dark:bg-dark-accent
                       text-light-primary dark:text-dark-primary font-medium
                       hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Mensaje
            </motion.button>
          </motion.form>

          {/* Enlaces sociales y información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 rounded-xl bg-light-secondary dark:bg-dark-secondary border border-light-border dark:border-dark-border">
              <h3 className="text-xl font-bold mb-4 text-light-text dark:text-dark-text">
                Conectemos
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-lg
                             bg-light-primary dark:bg-dark-primary
                             text-light-text dark:text-dark-text
                             hover:text-light-accent dark:hover:text-dark-accent
                             transition-colors ${link.name === 'WhatsApp' ? 'col-span-2' : ''}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className={`w-5 h-5 ${link.name === 'WhatsApp' ? 'text-green-500' : ''}`} />
                    <span className="text-sm font-medium">
                      {link.name === 'WhatsApp' ? '+57 310 533 4580' : link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-xl bg-light-secondary dark:bg-dark-secondary border border-light-border dark:border-dark-border">
              <h3 className="text-xl font-bold mb-4 text-light-text dark:text-dark-text">
                Disponibilidad
              </h3>
              <p className="text-light-muted dark:text-dark-muted">
                Actualmente disponible para proyectos freelance y oportunidades de tiempo completo.
                Respondo en menos de 24 horas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;