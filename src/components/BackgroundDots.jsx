import { motion } from 'framer-motion';
import { useMemo } from 'react';

const BackgroundDots = () => {
  // Usamos useMemo para evitar recrear el array en cada render
  const dots = useMemo(() => [...Array(400)], []); // Reducido de 800 a 400 puntos

  return (
    <div className="fixed inset-0 grid grid-cols-[repeat(40,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] pointer-events-none">
      {dots.map((_, i) => (
        <motion.div
          key={i}
          className="w-[2px] h-[2px] bg-light-accent/10 dark:bg-dark-accent/10 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundDots; 