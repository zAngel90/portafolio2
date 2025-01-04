import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const Portal = ({ onEnter }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transformaciones para efectos de parallax
  const portalX = useTransform(mouseX, [-300, 300], [20, -20]);
  const portalY = useTransform(mouseY, [-300, 300], [20, -20]);
  const glowX = useTransform(mouseX, [-300, 300], [30, -30]);
  const glowY = useTransform(mouseY, [-300, 300], [30, -30]);

  useEffect(() => {
    // Animación continua del portal
    controls.start({
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, [controls]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.div
      className="relative w-screen h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Fondo con estrellas */}
      <div className="absolute inset-0 bg-darkBg">
        {[...Array(200)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              background: 'white',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Contenedor del portal */}
      <motion.div
        className="relative"
        style={{
          width: 400,
          height: 400,
          x: portalX,
          y: portalY,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Anillos del portal */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{
              border: `${4 - i * 0.5}px solid rgba(100,255,218,${0.1 + i * 0.05})`,
              borderRadius: '50%',
              transform: `scale(${1 + i * 0.1})`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1 + i * 0.1, 1.1 + i * 0.1, 1 + i * 0.1],
            }}
            transition={{
              rotate: {
                duration: 20 - i * 2,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}

        {/* Agujero negro central */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(10,25,47,0.8) 0%, rgba(100,255,218,0.2) 50%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(20px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Partículas que son absorbidas */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              background: '#64ffda',
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [
                Math.cos(i * 18) * 200,
                Math.cos(i * 18) * 100,
                Math.cos(i * 18) * 50,
                0,
              ],
              y: [
                Math.sin(i * 18) * 200,
                Math.sin(i * 18) * 100,
                Math.sin(i * 18) * 50,
                0,
              ],
              scale: [1, 0.8, 0.4, 0],
              opacity: [1, 0.8, 0.4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeIn",
            }}
          />
        ))}
      </motion.div>

      {/* Contenedor fijo para el botón */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        {/* Botón de entrada */}
        <motion.button
          className="relative px-8 py-4 bg-transparent border-2 border-secondary text-secondary
                     rounded-full font-bold text-lg hover:bg-secondary hover:text-darkBg
                     transition-colors duration-300 cursor-pointer"
          style={{
            textShadow: '0 0 10px rgba(100,255,218,0.5)',
            boxShadow: '0 0 20px rgba(100,255,218,0.3)',
          }}
          whileHover={{
            scale: 1.1,
            textShadow: '0 0 20px rgba(100,255,218,0.8)',
            boxShadow: '0 0 30px rgba(100,255,218,0.5)',
          }}
          onClick={onEnter}
        >
          Entrar al Portal de Habilidades
        </motion.button>
      </div>

      {/* Resplandor exterior */}
      <motion.div
        className="absolute"
        style={{
          width: 600,
          height: 600,
          x: glowX,
          y: glowY,
          background: 'radial-gradient(circle at center, rgba(100,255,218,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%',
        }}
      />
    </motion.div>
  );
};

export default Portal; 