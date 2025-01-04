/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFD700",
        darkBg: "#111111",
        lightBg: "#222222",
        lightText: "#CCCCCC",
        accent: "#FFB700",
        highlight: "#FFED4A",
      },
      animation: {
        'cyber-glitch': 'cyberGlitch 1s infinite',
        'neon-pulse': 'neonPulse 2s infinite',
        'matrix-fade': 'matrixFade 0.8s ease-out forwards',
        'hologram': 'hologram 2s infinite',
        'glitch-skew': 'glitchSkew 1s infinite',
        'cyber-spin': 'cyberSpin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'digital-fade': 'digitalFade 0.5s ease-out forwards',
        'laser-scan': 'laserScan 2s infinite',
        'energy-pulse': 'energyPulse 1.5s infinite',
        'data-stream': 'dataStream 1s ease-out forwards',
        'cyber-slide': 'cyberSlide 0.8s ease-out forwards',
        'tech-bounce': 'techBounce 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'pixel-dissolve': 'pixelDissolve 0.8s ease-out forwards',
      },
      keyframes: {
        cyberGlitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-3px, 3px) skewX(2deg)' },
          '40%': { transform: 'translate(-3px, -3px) skewX(-2deg)' },
          '60%': { transform: 'translate(3px, 3px) skewX(2deg)' },
          '80%': { transform: 'translate(3px, -3px) skewX(-2deg)' }
        },
        neonPulse: {
          '0%, 100%': { 
            textShadow: '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700',
            boxShadow: '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700'
          },
          '50%': { 
            textShadow: '0 0 20px #FFD700, 0 0 30px #FFD700, 0 0 40px #FFD700',
            boxShadow: '0 0 20px #FFD700, 0 0 30px #FFD700, 0 0 40px #FFD700'
          }
        },
        matrixFade: {
          '0%': { 
            opacity: '0',
            transform: 'perspective(500px) translateZ(-50px)',
            filter: 'brightness(2) saturate(1.2)'
          },
          '100%': { 
            opacity: '1',
            transform: 'perspective(500px) translateZ(0)',
            filter: 'brightness(1) saturate(1)'
          }
        },
        hologram: {
          '0%, 100%': { 
            opacity: '1',
            filter: 'hue-rotate(0deg) brightness(1)'
          },
          '50%': { 
            opacity: '0.8',
            filter: 'hue-rotate(180deg) brightness(1.2)'
          }
        },
        glitchSkew: {
          '0%': { transform: 'skew(0deg)' },
          '20%': { transform: 'skew(10deg)' },
          '40%': { transform: 'skew(-10deg)' },
          '60%': { transform: 'skew(8deg)' },
          '80%': { transform: 'skew(-8deg)' },
          '100%': { transform: 'skew(0deg)' }
        },
        cyberSpin: {
          '0%': { 
            transform: 'rotate(-180deg) scale(0)',
            filter: 'brightness(2) contrast(1.2)'
          },
          '100%': { 
            transform: 'rotate(0) scale(1)',
            filter: 'brightness(1) contrast(1)'
          }
        },
        digitalFade: {
          '0%': { 
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            filter: 'brightness(2)'
          },
          '100%': { 
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            filter: 'brightness(1)'
          }
        },
        laserScan: {
          '0%': { 
            backgroundPosition: '-100% 0',
            backgroundImage: 'linear-gradient(90deg, transparent 0%, #FFD700 50%, transparent 100%)'
          },
          '100%': { 
            backgroundPosition: '200% 0',
            backgroundImage: 'linear-gradient(90deg, transparent 0%, #FFD700 50%, transparent 100%)'
          }
        },
        energyPulse: {
          '0%, 100%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(255, 215, 0, 0.4)'
          },
          '50%': { 
            transform: 'scale(1.05)',
            boxShadow: '0 0 20px 10px rgba(255, 215, 0, 0.2)'
          }
        },
        dataStream: {
          '0%': { 
            transform: 'translateY(-100%) skewY(-10deg)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0) skewY(0)',
            opacity: '1'
          }
        },
        cyberSlide: {
          '0%': {
            transform: 'translateX(-100%) skewX(-20deg)',
            filter: 'brightness(2) contrast(1.5)'
          },
          '100%': {
            transform: 'translateX(0) skewX(0)',
            filter: 'brightness(1) contrast(1)'
          }
        },
        techBounce: {
          '0%': { 
            transform: 'scale(0.3) rotate(-45deg)',
            filter: 'brightness(2)'
          },
          '50%': { 
            transform: 'scale(1.1) rotate(10deg)',
            filter: 'brightness(1.5)'
          },
          '70%': { 
            transform: 'scale(0.9) rotate(-5deg)',
            filter: 'brightness(1.2)'
          },
          '100%': { 
            transform: 'scale(1) rotate(0)',
            filter: 'brightness(1)'
          }
        },
        pixelDissolve: {
          '0%': { 
            transform: 'scale(0.9) translateY(20px)',
            filter: 'brightness(0) blur(10px)'
          },
          '100%': { 
            transform: 'scale(1) translateY(0)',
            filter: 'brightness(1) blur(0)'
          }
        }
      }
    },
  },
  plugins: [],
}

