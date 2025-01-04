import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
      filter: 'blur(10px)'
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="about" className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--yellow)_0%,_transparent_70%)] opacity-10"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-8 inline-block"
          >
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
              Sobre Mí
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-black/80 p-6 rounded-lg border border-yellow-400/30 hover:border-yellow-400/60 transition duration-300">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Mi Trayectoria</h3>
                <p className="text-yellow-100/90 leading-relaxed">
                  Soy un desarrollador apasionado por crear soluciones digitales innovadoras. 
                  Mi viaje en el desarrollo web comenzó con la curiosidad por entender cómo funcionan las cosas, 
                  y se convirtió en una pasión por construir experiencias digitales excepcionales.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-black/80 p-6 rounded-lg border border-yellow-400/30 hover:border-yellow-400/60 transition duration-300">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Mi Enfoque</h3>
                <p className="text-yellow-100/90 leading-relaxed">
                  Me especializo en desarrollar aplicaciones web modernas y escalables, 
                  combinando tecnologías frontend y backend para crear soluciones completas. 
                  Mi objetivo es siempre entregar productos que no solo funcionen perfectamente, 
                  sino que también proporcionen una experiencia de usuario excepcional.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 relative group max-w-3xl mx-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-black/80 p-6 rounded-lg border border-yellow-400/30 hover:border-yellow-400/60 transition duration-300">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Objetivos</h3>
              <p className="text-yellow-100/90 leading-relaxed">
                Busco constantemente nuevos desafíos que me permitan crecer como desarrollador 
                y contribuir a proyectos innovadores. Mi pasión por aprender y mejorar me impulsa 
                a mantenerme actualizado con las últimas tecnologías y mejores prácticas en el 
                desarrollo web.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-400/10 rounded-full blur-xl" />
    </section>
  );
};

export default About; 