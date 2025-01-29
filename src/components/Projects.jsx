import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
        title: "SoundWave",
        description: "Aplicación móvil desarrollada en Flutter que permite reproducir música almacenada localmente. Cuenta con una interfaz moderna y minimalista, gestión de playlists, y controles de reproducción avanzados.",
        image: "https://imgur.com/Ix6lblN.jpg",
        tech: ["Flutter", "Dart", "Provider", "SQLite", "Audio Players"],
        github: "https://github.com/zAngel90/reproductorflutter"

    },
    {
      title: "TechDrop",
      description: "Plataforma innovadora de dropshipping tecnológico que ofrece análisis en tiempo real de productos, métricas de ventas y tendencias del mercado. Diseño moderno con interfaz intuitiva y visualización de datos avanzada.",
      image: "https://i.imgur.com/BuJ73Nr.png",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Query", "Recharts"],
      live: "https://techdrop-b3wq.vercel.app/",
    },
    {
      title: "Lobomat Shop",
      description: "Plataforma de comercio electrónico especializada en la venta de V-Bucks para Fortnite. Implementa pasarelas de pago seguras, autenticación avanzada y un diseño moderno con animaciones fluidas.",
      image: "https://i.imgur.com/jIpsuEg.png",
      tech: ["Next.js 14", "Prisma", "Bold", "tRPC", "TypeScript", "Tailwind CSS"],
      live: "https://lobomatshop.com",
    },
    {
      title: "BlackVortexGames",
      description: "Plataforma de juegos desarrollada con tecnologías modernas. Una experiencia inmersiva que combina diseño atractivo con funcionalidad avanzada.",
      image: "https://i.imgur.com/f7MSSZA.png",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      live: "https://blackvortexgames.com",
    },
    {
      title: "404 Page",
      description: "Una página de error 404 moderna y estética con animaciones suaves, diseño responsive y efectos visuales atractivos.",
      image: "https://i.imgur.com/xvbT4Tv.png",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      live: "https://zangel90.github.io/404/",
    },
    {
      title: "Weather App",
      description: "Aplicación del clima moderna y elegante que muestra información meteorológica en tiempo real.",
      image: "https://i.imgur.com/0dVnULe.png",
      tech: ["React", "Vite", "Tailwind CSS", "API REST"],
      live: "https://clima1-kappa.vercel.app/",
    },
    {
      title: "Starbucks Clone",
      description: "Réplica exacta de la página web de Starbucks con un diseño moderno y responsive.",
      image: "https://i.imgur.com/cGonmDC.png",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      live: "https://starbucks-gules-six.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-light-primary/80 dark:bg-dark-primary/80">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-light-text dark:text-dark-text"
        >
          Proyectos Destacados
        </motion.h2>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Imagen del proyecto */}
              <motion.div
                className={`relative overflow-hidden rounded-xl border border-light-border dark:border-dark-border
                           ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-video relative group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                    <div className="absolute inset-0 bg-light-accent/10 dark:bg-dark-accent/10 
                          transition-all duration-500" />
                </div>
              </motion.div>

              {/* Información del proyecto */}
              <div className={`space-y-4 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="text-2xl font-bold text-light-accent dark:text-dark-accent">
                  {project.title}
                </h3>
                
                <p className="text-light-muted dark:text-dark-muted leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full
                               bg-light-secondary dark:bg-dark-secondary
                               text-light-text dark:text-dark-text
                               border border-light-border dark:border-dark-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-light-secondary dark:bg-dark-secondary
                      text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent
                      transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiGithub className="w-6 h-6" />
                  </motion.a>
                  )}
                  {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-light-secondary dark:bg-dark-secondary
                      text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent
                      transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiExternalLink className="w-6 h-6" />
                  </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;