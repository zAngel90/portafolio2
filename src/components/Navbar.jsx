import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
              onClick={() => setIsOpen(false)}
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

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-yellow-400 hover:bg-yellow-400/20 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
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
                  offset={-70}
                  className={`text-sm font-medium relative z-10 ${
                    activeSection === item.id ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                  }`}
                  onSetActive={() => setActiveSection(item.id)}
                >
                  {item.label}
                </ScrollLink>
                <motion.div
                  className="absolute -inset-2 bg-yellow-400/20 rounded-lg blur-lg"
                  variants={glowVariants}
                  initial="rest"
                  whileHover="hover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-2 space-y-1">
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                duration={800}
                offset={-70}
                className={`block px-4 py-2 text-base font-medium rounded-md ${
                  activeSection === item.id
                    ? 'text-yellow-400 bg-yellow-400/20'
                    : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10'
                }`}
                onClick={() => {
                  setIsOpen(false);
                  setActiveSection(item.id);
                }}
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;