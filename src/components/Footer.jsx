import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      href: 'https://github.com/zAngel90'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      href: 'https://linkedin.com/in/tu-perfil'
    },
    {
      name: 'Twitter',
      icon: FiTwitter,
      href: 'https://twitter.com/tu-perfil'
    },
    {
      name: 'Email',
      icon: FiMail,
      href: 'mailto:tu@email.com'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative overflow-hidden bg-light-primary/80 dark:bg-dark-primary/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center border-t border-light-border dark:border-dark-border pt-8">
          {/* Columna izquierda */}
          <div className="text-center md:text-left">
            <motion.h3 
              className="text-xl font-bold text-light-text dark:text-dark-text mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Angel Vergara
            </motion.h3>
            <motion.p 
              className="text-light-muted dark:text-dark-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Desarrollador Web Full Stack
            </motion.p>
          </div>

          {/* Columna central - Enlaces sociales */}
          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-light-text dark:text-dark-text
                         hover:text-light-accent dark:hover:text-dark-accent
                         transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Columna derecha */}
          <div className="flex justify-center md:justify-end">
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-light-secondary dark:bg-dark-secondary
                       text-light-text dark:text-dark-text
                       hover:text-light-accent dark:hover:text-dark-accent
                       transition-colors group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Volver arriba"
            >
              <FiArrowUp className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="text-center mt-8 text-light-muted dark:text-dark-muted text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>© {new Date().getFullYear()} Angel Vergara. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 