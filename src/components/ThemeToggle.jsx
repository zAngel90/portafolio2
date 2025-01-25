import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-xl glass
                 flex items-center gap-2 text-light-text dark:text-dark-text
                 hover:scale-105 transition-all duration-300"
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-sm font-medium hidden sm:block">
        {isDark ? 'Modo Claro' : 'Modo Oscuro'}
      </span>
      <motion.div
        className="relative w-6 h-6"
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Sol */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute inset-0 transition-opacity duration-300 ${
            isDark ? 'opacity-0' : 'opacity-100'
          }`}
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

        {/* Luna */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute inset-0 transition-opacity duration-300 ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
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
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 