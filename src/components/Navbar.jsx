import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' },
  ];

  const navVariants = {
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    hidden: { 
      y: -100,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const glowVariants = {
    rest: {
      opacity: 0.1,
      scale: 1
    },
    hover: {
      opacity: 0.5,
      scale: 1.2,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      animate={hidden ? "hidden" : "visible"}
      initial="visible"
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-400/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="text-yellow-400 font-bold text-xl relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              duration={800}
              offset={-70}
              className="relative z-10"
            >
              Portfolio
            </ScrollLink>
            <motion.div
              className="absolute -inset-2 bg-yellow-400/20 rounded-lg blur-lg"
              variants={glowVariants}
              initial="rest"
              whileHover="hover"
            />
          </motion.div>

          {/* Navigation Items */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative px-4 py-2 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ScrollLink
                  to={item.id}
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={item.id === 'skills' ? -100 : -70}
                  onSetActive={() => setActiveSection(item.id)}
                  className={`relative z-10 ${
                    activeSection === item.id ? 'text-yellow-400' : 'text-yellow-200/70'
                  } transition-colors duration-200 group-hover:text-yellow-400 cursor-pointer`}
                >
                  {item.label}
                </ScrollLink>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-yellow-400/10 rounded-lg"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )}
                <motion.div
                  className="absolute -inset-1 bg-yellow-400/0 rounded-lg"
                  whileHover={{
                    backgroundColor: "rgba(250, 204, 21, 0.1)",
                    transition: { duration: 0.2 }
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-yellow-400 p-2 rounded-lg hover:bg-yellow-400/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
      <div className="absolute -bottom-[5px] left-0 right-0 h-[5px] bg-gradient-to-b from-yellow-400/10 to-transparent" />
    </motion.nav>
  );
};

export default Navbar; 