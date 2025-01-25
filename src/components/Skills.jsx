import { motion } from 'framer-motion';
import { SiJavascript, SiReact, SiNodedotjs, SiTailwindcss, SiMongodb, 
         SiGit, SiTypescript, SiNextdotjs, SiPython, SiDocker } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "JavaScript", icon: SiJavascript, level: 90 },
        { name: "React", icon: SiReact, level: 85 },
        { name: "TypeScript", icon: SiTypescript, level: 80 },
        { name: "Next.js", icon: SiNextdotjs, level: 75 },
        { name: "TailwindCSS", icon: SiTailwindcss, level: 90 },
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: SiNodedotjs, level: 85 },
        { name: "Python", icon: SiPython, level: 75 },
        { name: "MongoDB", icon: SiMongodb, level: 80 },
        { name: "Docker", icon: SiDocker, level: 70 },
        { name: "Git", icon: SiGit, level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-light-primary/80 dark:bg-dark-primary/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-light-text dark:text-dark-text"
        >
          Habilidades Técnicas
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, x: categoryIndex === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-light-accent dark:text-dark-accent">
                {skillCategory.category}
              </h3>
              
              <div className="space-y-6">
                {skillCategory.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <tech.icon className="w-5 h-5 text-light-accent dark:text-dark-accent" />
                        <span className="font-medium text-light-text dark:text-dark-text">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-sm text-light-muted dark:text-dark-muted">
                        {tech.level}%
                      </span>
                    </div>
                    
                    <div className="h-2 bg-light-secondary dark:bg-dark-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-light-accent dark:bg-dark-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sección de habilidades adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-light-secondary dark:bg-dark-secondary border border-light-border dark:border-dark-border"
        >
          <h3 className="text-2xl font-bold mb-6 text-light-accent dark:text-dark-accent text-center">
            Habilidades Blandas
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Liderazgo de equipo",
              "Colaboración efectiva",
              "Mentoría y enseñanza",
              "Resolución creativa de problemas",
              "Comunicación asertiva",
              "Adaptabilidad rápida",
              "Gestión de proyectos",
              "Pensamiento analítico",
              "Empatía y escucha activa",
              "Toma de decisiones",
              "Resiliencia",
              "Proactividad"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 rounded-full text-sm
                         bg-light-primary dark:bg-dark-primary
                         text-light-text dark:text-dark-text
                         border border-light-border dark:border-dark-border
                         hover:border-light-accent dark:hover:border-dark-accent
                         transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 