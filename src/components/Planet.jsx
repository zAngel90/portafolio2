import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const Planet = ({ name, level, color, size = 100, isSelected, onClick }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const rotation = useMotionValue(0);
  const scale = useMotionValue(1);

  // Transformaciones para efectos visuales
  const glowOpacity = useTransform(scale, [1, 1.2], [0.5, 0.8]);
  const atmosphereScale = useTransform(scale, [1, 1.2], [1.1, 1.3]);

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, [controls]);

  useEffect(() => {
    if (isSelected) {
      scale.set(1.2);
    } else {
      scale.set(1);
    }
  }, [isSelected, scale]);

  return (
    <motion.div
      className="relative cursor-pointer"
      style={{
        width: size,
        height: size,
      }}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={controls}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Anillo exterior luminoso */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at center, transparent 50%, ${color}33 70%, transparent 100%)`,
          transform: 'scale(1.4)',
          filter: 'blur(4px)',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Atmósfera exterior */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${color}22 0%, transparent 60%)`,
          transform: `scale(${atmosphereScale.get()})`,
          filter: 'blur(8px)',
        }}
      />

      {/* Planeta base */}
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 30% 30%,
              ${color}ee,
              ${color}cc 40%,
              ${color}99 60%,
              ${color}66 80%
            )
          `,
          boxShadow: `
            inset -${size * 0.15}px -${size * 0.15}px ${size * 0.3}px rgba(0,0,0,0.8),
            inset ${size * 0.05}px ${size * 0.05}px ${size * 0.1}px rgba(255,255,255,0.4),
            0 0 ${size * 0.2}px ${color}40
          `,
        }}
      >
        {/* Detalles de la superficie */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: `${Math.random() * 40 + 20}%`,
              height: `${Math.random() * 40 + 20}%`,
              background: `${color}33`,
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(4px)',
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Brillo superior */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `
            radial-gradient(circle at 30% 30%,
              rgba(255,255,255,0.4) 0%,
              transparent 50%
            )
          `,
          opacity: glowOpacity.get(),
        }}
      />

      {/* Partículas orbitales */}
      {isHovered && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: color,
                left: '50%',
                top: '50%',
                filter: 'blur(1px)',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
                x: [0, Math.cos(i * 30) * size * 0.7],
                y: [0, Math.sin(i * 30) * size * 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Planet; 