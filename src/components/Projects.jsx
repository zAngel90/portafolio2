import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';

const Projects = () => {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (projectTitle) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [projectTitle]: !prev[projectTitle]
    }));
  };

  const projects = [
    {
      title: "BlackVortexGames",
      description: "Plataforma de juegos desarrollada con tecnologías modernas. Una experiencia inmersiva que combina diseño atractivo con funcionalidad avanzada.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/zAngel90/blackvortexgames",
      live: "https://blackvortexgames.com",
      preview: "https://blackvortexgames.com",
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
    },
    {
      title: "Starbucks Clone",
      description: "Réplica exacta de la página web de Starbucks con un diseño moderno y responsive. Incluye animaciones fluidas, menú interactivo y una experiencia de usuario similar a la página oficial.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/zAngel90/STARBUCKS",
      live: "https://starbucks-gules-six.vercel.app/",
      preview: "https://starbucks-gules-six.vercel.app/",
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
    <div className="min-h-screen bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-hidden">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-6 sm:mb-8 md:mb-12"
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
              stiffness: 50
            }}
          >
            Mis Proyectos
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={projectVariants}
                className="group relative bg-black/50 rounded-xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/50 transition-colors duration-300"
              >
                {project.preview && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block w-full aspect-video overflow-hidden rounded-t-xl border-b border-yellow-400/20"
                  >
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300 z-10" />
                    <iframe
                      src={project.preview}
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      title={`${project.title} Preview`}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <span className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium">
                        Visitar sitio
                      </span>
                    </div>
                  </a>
                )}

                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  
                  <p className={`text-sm sm:text-base text-yellow-100/80 mb-4 transition-all duration-300 ${
                    expandedDescriptions[project.title] ? '' : 'line-clamp-3'
                  }`}>
                    {project.description}
                  </p>
                  
                  {project.description.length > 150 && (
                    <button
                      onClick={() => toggleDescription(project.title)}
                      className="text-yellow-400 text-sm hover:text-yellow-300 mb-4 focus:outline-none"
                    >
                      {expandedDescriptions[project.title] ? 'Leer menos' : 'Leer más'}
                    </button>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="text-xs sm:text-sm px-2 py-1 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 items-center">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:text-yellow-300 transition-colors"
                      >
                        <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:text-yellow-300 transition-colors"
                      >
                        <FiExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;