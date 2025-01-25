import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-light-primary/80 dark:bg-dark-primary/80 backdrop-blur-sm">
      {/* Eliminar el div del fondo con puntos */}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.p
            className="text-light-accent dark:text-dark-accent text-lg mb-4 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            &lt;Hello World/&gt;
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-light-text dark:text-dark-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Soy{' '}
            <span className="text-light-accent dark:text-dark-accent">
              <TypeAnimation
                sequence={[
                  'Angel Vergara',
                  2000,
                  'Desarrollador Web',
                  2000,
                  'Diseñador UI/UX',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-light-muted dark:text-dark-muted text-lg sm:text-xl mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Un desarrollador apasionado por crear experiencias digitales excepcionales.
            Especializado en desarrollo web moderno y soluciones creativas.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="#contact"
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contáctame
            </motion.a>
            <motion.a
              href="#projects"
              className="btn bg-transparent border-2 border-light-accent dark:border-dark-accent
                       text-light-accent dark:text-dark-primary 
                       hover:bg-light-accent/10 dark:hover:bg-dark-accent/10
                       dark:bg-dark-accent hover:text-light-accent dark:hover:text-dark-primary
                       transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Proyectos
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <div className="w-6 h-10 border-2 border-light-accent/30 dark:border-dark-accent/30 rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-light-accent/50 dark:bg-dark-accent/50 rounded-full mx-auto animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;