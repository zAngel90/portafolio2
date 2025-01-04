import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Efecto de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 py-12 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
              Angel Vergara
            </h2>
            <p className="text-yellow-200/80">
              Desarrollador Full Stack & Creador Digital
            </p>
          </motion.div>

          {/* Columna derecha */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3 group">
              <FiMail className="text-yellow-400 group-hover:text-yellow-200 transition-colors" />
              <a 
                href="mailto:av020431@gmail.com"
                className="text-yellow-200/80 hover:text-yellow-400 transition-colors"
              >
                av020431@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3 group">
              <FiPhone className="text-yellow-400 group-hover:text-yellow-200 transition-colors" />
              <a 
                href="tel:+573105334580"
                className="text-yellow-200/80 hover:text-yellow-400 transition-colors"
              >
                +57 3105334580
              </a>
            </div>
          </motion.div>
        </div>

        {/* Línea divisoria */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent my-8"
        />

        {/* Copyright y redes sociales */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-yellow-200/60 text-sm"
          >
            © 2024 Angel Vergara. Todos los derechos reservados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            <a
              href="#"
              className="text-yellow-400 hover:text-yellow-200 transition-colors p-2 hover:bg-yellow-400/10 rounded-full"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="#"
              className="text-yellow-400 hover:text-yellow-200 transition-colors p-2 hover:bg-yellow-400/10 rounded-full"
            >
              <FiLinkedin size={20} />
            </a>
          </motion.div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-yellow-400/5 rounded-full blur-2xl" />
      </div>
    </footer>
  );
};

export default Footer; 