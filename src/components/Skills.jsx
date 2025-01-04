import { motion } from 'framer-motion';

const skillCategories = {
  frontend: {
    title: "Desarrollo Frontend",
    description: "Tecnologías y frameworks para crear interfaces de usuario modernas y responsivas",
    color: "#64ffda",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind", level: 90 }
    ]
  },
  backend: {
    title: "Desarrollo Backend",
    description: "Herramientas y lenguajes para construir servidores robustos y APIs escalables",
    color: "#64ffda",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "GraphQL", level: 70 }
    ]
  },
  tools: {
    title: "Herramientas y DevOps",
    description: "Herramientas de desarrollo y tecnologías para optimizar el flujo de trabajo",
    color: "#64ffda",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 80 },
      { name: "Linux", level: 85 },
      { name: "Testing", level: 80 }
    ]
  }
};

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen bg-darkBg py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold text-secondary text-center mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Mis Habilidades
        </motion.h2>
        <motion.p 
          className="text-lightText text-center text-lg mb-16 max-w-3xl mx-auto"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Un conjunto diverso de habilidades técnicas que me permiten crear soluciones completas y escalables
        </motion.p>

        <div className="grid gap-12">
          {Object.entries(skillCategories).map(([key, category], categoryIndex) => (
            <motion.div
              key={key}
              className="relative bg-primary/5 rounded-xl p-8 border border-secondary/10 backdrop-blur-sm
                         hover:border-secondary/20 transition-colors duration-300"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              {/* Efecto de brillo en la esquina */}
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-secondary/10 rounded-full blur-2xl" />
              
              <h3 
                className="text-2xl font-bold mb-4 text-secondary"
              >
                {category.title}
              </h3>
              <p className="text-lightText mb-8 text-sm">
                {category.description}
              </p>
              
              <div className="grid gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium group-hover:text-secondary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-secondary text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden
                                  group-hover:bg-white/10 transition-colors">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-secondary/50 to-secondary
                                 group-hover:from-secondary/70 group-hover:to-secondary transition-colors"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 