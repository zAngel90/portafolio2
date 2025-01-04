import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('█');
  const fullName = "Angel Vergara";
  
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const updateText = () => {
      if (!isDeleting) {
        // Escribiendo
        if (currentIndex <= fullName.length) {
          setDisplayText(fullName.substring(0, currentIndex) + '█');
          currentIndex++;
          timeoutId = setTimeout(updateText, 100);
        } else {
          // Esperar antes de empezar a borrar
          timeoutId = setTimeout(() => {
            isDeleting = true;
            updateText();
          }, 2000);
        }
      } else {
        // Borrando
        if (currentIndex > 0) {
          setDisplayText(fullName.substring(0, currentIndex - 1) + '█');
          currentIndex--;
          timeoutId = setTimeout(updateText, 50);
        } else {
          // Reiniciar después de borrar
          isDeleting = false;
          timeoutId = setTimeout(updateText, 500);
        }
      }
    };

    updateText();
    return () => clearTimeout(timeoutId);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const codeBlockVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 1,
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-tertiary to-primary opacity-90" />
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_65%)] from-secondary/20"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-secondary text-lg font-mono">{"<FullStackDeveloper>"}</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-secondary text-lg mb-4">
            ¡Hola! Mi nombre es
          </motion.h2>

          <motion.div
            className="minecraft-font text-3xl sm:text-4xl font-bold mb-4 text-white tracking-wide"
            style={{ 
              WebkitTextStroke: "0.5px rgba(255,255,255,0.1)",
              textShadow: "2px 2px 0px rgba(0,0,0,0.2)"
            }}
          >
            <h1 className="inline-block">
              {displayText}
            </h1>
          </motion.div>

          <motion.h3 variants={itemVariants} className="text-2xl sm:text-4xl text-lightestText mb-8">
            Desarrollador Full Stack & Creador Digital
          </motion.h3>

          <motion.p variants={itemVariants} className="text-lightestText max-w-2xl mx-auto mb-8">
            Especializado en crear experiencias digitales excepcionales tanto en el frontend como en el backend.
            Transformo ideas en soluciones tecnológicas completas y escalables con un enfoque en la innovación y la calidad.
          </motion.p>

          {/* Código animado */}
          <motion.div
            variants={codeBlockVariants}
            className="bg-tertiary p-4 rounded-lg max-w-lg mx-auto mb-8 text-left font-mono text-sm overflow-hidden"
          >
            <pre className="text-lightText">
              <code>{`const angel = {
  fullName: "Angel",
  role: "Full Stack Developer",
  passions: ["Web Development", "Innovation", "Problem Solving"],
  skills: {
    frontend: ["React", "Tailwind", "JavaScript"],
    backend: ["Node.js", "Python", "SQL"],
    architecture: ["REST", "GraphQL", "Microservices"]
  },
  currentlyLearning: "Always something new"
};`}</code>
            </pre>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              Ver Proyectos
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline"
            >
              ¡Contáctame!
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-4">
            <span className="text-secondary text-lg font-mono">{"</FullStackDeveloper>"}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-secondary rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-secondary rounded-full mx-auto animate-scroll" />
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
    </section>
  );
};

export default Hero; 