import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "BlackVortexGames",
      description: "Plataforma de juegos desarrollada con tecnologías modernas. Una experiencia inmersiva que combina diseño atractivo con funcionalidad avanzada.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/tuUsuario/blackvortexgames",
      live: "https://blackvortexgames.com",
      featured: true
    },
    {
      title: "Página de Error 404 Moderna",
      description: "Una página de error 404 moderna y estética con animaciones suaves, diseño responsive y efectos visuales atractivos. Perfecta para mostrar mensajes de error de manera elegante.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Pages"],
      github: "https://github.com/zAngel90/404",
      live: "https://zangel90.github.io/404/",
      preview: "https://zangel90.github.io/404/",
      featured: true
    },
    {
      title: "App del Clima",
      description: "Aplicación del clima moderna y elegante que muestra información meteorológica en tiempo real. Incluye búsqueda por ciudad, visualización de temperatura, humedad y velocidad del viento.",
      tech: ["React", "Vite", "Tailwind CSS", "API REST", "GitHub Actions"],
      github: "https://github.com/zAngel90/clima1",
      live: "https://clima1-kappa.vercel.app/",
      preview: "https://clima1-kappa.vercel.app/",
      featured: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-black py-20 px-4 md:px-8" id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="overflow-hidden">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-4"
            initial={{ 
              y: 100,
              opacity: 0,
              filter: 'blur(10px) brightness(2)',
              textShadow: '0 0 20px rgba(255, 215, 0, 0.8)'
            }}
            animate={{ 
              y: 0,
              opacity: 1,
              filter: 'blur(0px) brightness(1)',
              textShadow: '0 0 10px rgba(255, 215, 0, 0.3)'
            }}
            transition={{ 
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          >
            <motion.span
              initial={{ display: "inline-block" }}
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,215,0,0.8)",
                  "0 0 10px rgba(255,215,0,0.3)",
                  "0 0 20px rgba(255,215,0,0.8)",
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Mis Proyectos
            </motion.span>
          </motion.h2>
        </div>

        <div className="overflow-hidden">
          <motion.p 
            className="text-yellow-200 text-center text-lg mb-12 max-w-2xl mx-auto"
            initial={{ 
              clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              opacity: 0,
              filter: 'blur(4px)'
            }}
            animate={{ 
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              opacity: 1,
              filter: 'blur(0px)'
            }}
            transition={{ 
              duration: 1,
              delay: 0.5,
              ease: "easeOut"
            }}
          >
            <motion.span
              initial={{ display: "inline-block" }}
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Una selección de proyectos que demuestran mi experiencia y pasión por el desarrollo
            </motion.span>
          </motion.p>
        </div>

        <motion.div 
          className="grid gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative group"
              variants={projectVariants}
            >
              {project.featured && (
                <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden
                              border border-yellow-400/30
                              transition-all duration-300 group-hover:border-yellow-400/60">
                  <div className="absolute inset-0 bg-black/60
                                group-hover:bg-black/40 transition-all duration-300 z-10" />
                  <iframe
                    src={project.preview || project.live}
                    className="absolute inset-0 w-full h-full"
                    title={`${project.title} Preview`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    style={{ 
                      filter: 'none',
                      transform: 'scale(1)',
                      willChange: 'transform'
                    }}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-center text-sm text-yellow-400/90
                                bg-black/70 py-2 px-4 rounded-md border border-yellow-400/30
                                opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    Hover para interactuar con la preview
                  </div>
                </div>
              )}

              <div className="relative bg-black/40 rounded-lg p-6 md:p-8 border border-yellow-400/30
                            backdrop-blur-sm transition-all duration-300
                            hover:border-yellow-400/60 hover:bg-black/50">
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-yellow-400/10 rounded-full blur-xl" />

                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3 transition-colors duration-300
                               hover:text-yellow-200">
                    {project.title}
                  </h3>
                  <p className="text-yellow-200/90 text-sm md:text-base mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs md:text-sm text-black bg-yellow-400/90
                                 rounded-full font-mono transition-transform duration-200
                                 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-400/90 hover:text-yellow-400 transition-colors duration-200"
                      aria-label="Ver código en GitHub"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-400/90 hover:text-yellow-400 transition-colors duration-200"
                      aria-label="Visitar sitio web"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 