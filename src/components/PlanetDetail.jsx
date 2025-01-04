import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import Planet from './Planet';

const PlanetDetail = ({ category, data, onClose }) => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Efecto parallax mejorado para el fondo
  const backgroundX = useTransform(mouseX, [-500, 500], [50, -50]);
  const backgroundY = useTransform(mouseY, [-500, 500], [50, -50]);

  // Prevenir scroll del body cuando el componente está montado
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <>
      {/* Capa de fondo sólido */}
      <div className="fixed inset-0 bg-[#0a192f] z-[9998]" />
      
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseMove={handleMouseMove}
      >
        {/* Fondo con efecto parallax mejorado */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at center, rgba(100,255,218,0.2) 0%, transparent 60%),
              linear-gradient(to bottom, rgba(10,25,47,0.98) 0%, rgba(10,25,47,1) 100%)
            `,
            x: backgroundX,
            y: backgroundY,
          }}
        >
          {/* Estrellas en movimiento mejoradas */}
          {[...Array(200)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                background: `rgba(255,255,255,${Math.random() * 0.5 + 0.3})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(1px)',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
                blur: ['1px', '2px', '1px'],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        {/* Contenedor principal */}
        <motion.div
          className="relative w-full h-full max-w-7xl mx-auto flex flex-col items-center justify-center"
        >
          {/* Título y descripción en contenedor fijo */}
          <div className="absolute top-16 left-0 right-0 z-10 mb-24">
            {/* Título del sistema */}
            <motion.h2
              className="text-5xl font-bold text-secondary text-center mb-6"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                textShadow: '0 0 30px rgba(100,255,218,0.3)'
              }}
            >
              {data.title}
            </motion.h2>

            {/* Descripción */}
            <motion.p
              className="text-lightText text-center text-lg max-w-2xl mx-auto"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {data.description}
            </motion.p>
          </div>

          {/* Sistema solar centrado */}
          <div className="relative w-[700px] h-[700px] mt-32">
            {/* Círculo central grande */}
            <div
              className="absolute left-1/2 top-1/2 w-[600px] h-[600px] rounded-full"
              style={{
                transform: 'translate(-50%, -50%)',
                border: '1px solid rgba(100,255,218,0.1)',
                boxShadow: `0 0 40px rgba(100,255,218,0.05)`,
              }}
            />

            {/* Sol central */}
            <motion.div
              className="absolute left-1/2 top-1/2 w-28 h-28 rounded-full z-20"
              style={{
                background: `
                  radial-gradient(circle at center,
                    ${data.color}ff,
                    ${data.color}dd 30%,
                    ${data.color}aa 60%,
                    ${data.color}44 80%,
                    transparent 100%
                  )
                `,
                transform: 'translate(-50%, -50%)',
                boxShadow: `
                  0 0 60px ${data.color}40,
                  0 0 100px ${data.color}20,
                  inset 0 0 60px ${data.color}60
                `,
              }}
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  `0 0 60px ${data.color}40, 0 0 100px ${data.color}20, inset 0 0 60px ${data.color}60`,
                  `0 0 80px ${data.color}60, 0 0 120px ${data.color}30, inset 0 0 80px ${data.color}80`,
                  `0 0 60px ${data.color}40, 0 0 100px ${data.color}20, inset 0 0 60px ${data.color}60`,
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Órbitas */}
            {data.skills.map((_, index) => {
              const orbitSize = 160 + index * 60;
              return (
                <motion.div
                  key={`orbit-${index}`}
                  className="absolute left-1/2 top-1/2 rounded-full"
                  style={{
                    width: orbitSize,
                    height: orbitSize,
                    transform: 'translate(-50%, -50%)',
                    border: '1px solid rgba(100,255,218,0.1)',
                    boxShadow: `0 0 20px rgba(100,255,218,0.05)`,
                  }}
                />
              );
            })}

            {/* Planetas */}
            {data.skills.map((skill, index) => {
              const orbitRadius = 80 + index * 30;
              const orbitDuration = 20 + index * 8;
              const startAngle = (index * (360 / data.skills.length)) + 45;

              return (
                <motion.div
                  key={skill.name}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    width: 0,
                    height: 0,
                  }}
                  initial={{
                    rotate: startAngle,
                  }}
                  animate={{
                    rotate: [startAngle, startAngle + 360],
                  }}
                  transition={{
                    duration: orbitDuration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    className="absolute"
                    style={{
                      left: orbitRadius,
                      top: 0,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="relative">
                      <Planet
                        name={skill.name}
                        level={skill.level}
                        color={data.color}
                        size={24}
                        isSelected={selectedPlanet === skill.name}
                        onClick={() => setSelectedPlanet(selectedPlanet === skill.name ? null : skill.name)}
                      />
                      
                      {/* Nombre y nivel */}
                      <motion.div 
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-center whitespace-nowrap"
                        style={{
                          transform: `translate(-50%, 0) rotate(${-startAngle}deg)`,
                        }}
                      >
                        <div className="text-white text-xs font-bold mb-1">{skill.name}</div>
                        <div className="flex items-center justify-center gap-1">
                          <div className="h-1 w-8 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ backgroundColor: '#e34c26' }}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1 }}
                            />
                          </div>
                          <span className="text-secondary text-[10px]">{skill.level}%</span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Instrucciones */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-lightText text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <p className="text-lg font-light tracking-wider">
              Interactúa con los planetas • Click para más detalles
            </p>
          </motion.div>
        </motion.div>

        {/* Botón para cerrar */}
        <motion.button
          className="fixed top-8 right-8 text-secondary hover:text-white
                     transition-colors duration-300 text-5xl font-bold z-[10000]"
          onClick={onClose}
          whileHover={{ scale: 1.2, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          style={{
            textShadow: '0 0 20px rgba(100,255,218,0.5)'
          }}
        >
          ×
        </motion.button>
      </motion.div>
    </>
  );
};

export default PlanetDetail; 