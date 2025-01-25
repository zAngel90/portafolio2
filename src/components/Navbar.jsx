import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const { scrollY } = useScroll();
  const { isDark, toggleTheme } = useTheme();

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
      transition: { type: "spring", stiffness: 100, damping: 20 }
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      animate={hidden ? "hidden" : "visible"}
      initial="visible"
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="absolute inset-0 bg-light-primary/70 dark:bg-dark-primary/70 backdrop-blur-md border-b border-light-border/20 dark:border-dark-border/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-light-accent/20 to-light-accent/0 dark:from-dark-accent/20 dark:to-dark-accent/0 blur-lg group-hover:opacity-75 transition duration-200 opacity-0 group-hover:opacity-100" />
            <Link 
              to="hero" 
              smooth={true} 
              duration={500}
              className="relative font-bold text-2xl bg-gradient-to-r from-light-accent to-light-text dark:from-dark-accent dark:to-dark-text bg-clip-text text-transparent"
            >
              AV
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative group px-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-light-accent/0 via-light-accent/10 to-light-accent/0 dark:from-dark-accent/0 dark:via-dark-accent/10 dark:to-dark-accent/0 opacity-0 group-hover:opacity-100 blur-sm transition duration-200" />
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors
                    ${activeSection === item.id
                      ? 'text-light-accent dark:text-dark-accent bg-light-accent/10 dark:bg-dark-accent/10'
                      : 'text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent'
                    }`}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className="relative group ml-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-light-accent/20 to-light-accent/0 dark:from-dark-accent/20 dark:to-dark-accent/0 blur-lg opacity-0 group-hover:opacity-100 transition duration-200" />
              <div className="relative flex items-center gap-2 px-4 py-2 rounded-lg bg-light-secondary/30 dark:bg-dark-secondary/30 border border-light-border/20 dark:border-dark-border/20">
                <span className="text-sm font-medium hidden lg:block">
                  {isDark ? 'Claro' : 'Oscuro'}
                </span>
                <motion.div
                  className="relative w-5 h-5"
                  animate={{ rotate: isDark ? 180 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {isDark ? (
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </motion.svg>
                  )}
                </motion.div>
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-light-accent/20 to-light-accent/0 dark:from-dark-accent/20 dark:to-dark-accent/0 blur-lg opacity-0 group-hover:opacity-100 transition duration-200" />
            <div className="relative p-2 rounded-lg bg-light-secondary/30 dark:bg-dark-secondary/30 border border-light-border/20 dark:border-dark-border/20">
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
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${activeSection === item.id
                    ? 'text-light-accent dark:text-dark-accent bg-light-accent/10 dark:bg-dark-accent/10'
                    : 'text-light-text dark:text-dark-text'
                  }`}
                onClick={() => {
                  setIsOpen(false);
                  setActiveSection(item.id);
                }}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent"
            >
              {isDark ? '🌞 Modo Claro' : '🌙 Modo Oscuro'}
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;