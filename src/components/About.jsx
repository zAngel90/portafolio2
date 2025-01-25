import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-light-primary/80 dark:bg-dark-primary/80 backdrop-blur-sm">
      {/* Fondo con líneas diagonales sutiles */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, currentColor 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-light-text dark:text-dark-text"
          {...fadeInUp}
        >
          Sobre Mí
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-light-accent dark:text-dark-accent">
              Mi Historia
            </h3>
            <p className="text-light-muted dark:text-dark-muted leading-relaxed">
              Comencé mi viaje en el desarrollo web por curiosidad y pasión por la tecnología.
              Autodidacta por naturaleza, he dedicado incontables horas a aprender y perfeccionar
              mis habilidades en desarrollo web moderno.
            </p>
            <p className="text-light-muted dark:text-dark-muted leading-relaxed">
              Mi enfoque se centra en crear experiencias web excepcionales que combinen
              diseño atractivo con funcionalidad robusta.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-light-accent dark:text-dark-accent">
                Educación
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-light-accent dark:bg-dark-accent mt-2" />
                  <div>
                    <h4 className="font-medium text-light-text dark:text-dark-text">Desarrollo Web Fullstack</h4>
                    <p className="text-light-muted dark:text-dark-muted">Autodidacta | 2020 - Presente</p>
                  </div>
                </li>
                {/* Añade más elementos de educación según necesites */}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-light-accent dark:text-dark-accent">
                Intereses
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Desarrollo Web', 'UI/UX', 'Tecnología', 'Innovación', 'Open Source'].map((interest, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-full text-sm 
                             bg-light-secondary dark:bg-dark-secondary
                             text-light-text dark:text-dark-text
                             border border-light-border dark:border-dark-border"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 p-6 rounded-xl bg-light-secondary dark:bg-dark-secondary border border-light-border dark:border-dark-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-light-accent dark:text-dark-accent text-center">
            Objetivos Profesionales
          </h3>
          <p className="text-light-muted dark:text-dark-muted text-center max-w-3xl mx-auto">
            Busco constantemente oportunidades para crecer como desarrollador y contribuir a
            proyectos innovadores. Mi objetivo es crear soluciones tecnológicas que marquen
            la diferencia y aprender continuamente en el proceso.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;