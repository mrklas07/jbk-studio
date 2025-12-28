// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

// IMPORTANTE: Aquí importamos TU imagen desde la carpeta assets
// Si tu archivo tiene otro nombre, cambia 'statue.png' por el tuyo
import statueImage from '../assets/statue.png'; 

const Hero = () => {
  return (
    <section id="inicio" style={styles.section}>
      <div className="container" style={styles.container}>
        
        {/* --- TEXTO (Izquierda) --- */}
        <div style={styles.content}>
          <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={styles.title}
          >
            DOMINA TU <br />
            <span className="text-outline">MERCADO</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={styles.subtitle}
          >
            Estrategias inteligentes. Resultados reales. <br />
            Creamos marcas auténticas que venden por sí solas.
          </motion.p>

          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            style={styles.btnGroup}
          >
            <button style={styles.btnPrimary}>DESPEGA TU NEGOCIO 🚀</button>
           <a href="#proyectos" style={{ textDecoration: 'none' }}>
    <button style={styles.btnSecondary}>VER PROYECTOS</button>
</a>
          </motion.div>
        </div>

        {/* --- IMAGEN (Derecha) --- */}
        <div style={styles.imageContainer}>
          {/* Luz de fondo detrás de la estatua */}
          <div style={styles.gradientOrb}></div>

          <motion.img 
            src={statueImage} 
            alt="Estatua JBK Studio"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: [0, -20, 0] }} // Animación de flotar
            transition={{ 
              x: { duration: 1 },
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" } // Flotar infinito
            }}
            style={styles.image}
          />
        </div>

      </div>
    </section>
  );
};

// --- ESTILOS (CSS en JS) ---
const styles = {
  section: {
    minHeight: '100vh', // Ocupa toda la pantalla
    display: 'flex',
    alignItems: 'center',
    // Degradado Vaporwave oscuro
    background: 'radial-gradient(circle at top right, #2a004d 0%, #050505 60%)',
    overflow: 'hidden',
    paddingTop: '80px', // Espacio para el Navbar
    paddingBottom: '40px'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    flexWrap: 'wrap' // Para que se adapte a móviles
  },
  content: {
    flex: 1,
    minWidth: '300px',
    zIndex: 2,
    marginBottom: '40px'
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', // Tamaño adaptable
    fontWeight: '900',
    lineHeight: '1.1',
    marginBottom: '20px'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#cccccc',
    marginBottom: '40px',
    lineHeight: '1.6',
    maxWidth: '500px'
  },
  btnGroup: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  },
  btnPrimary: {
    background: 'var(--secondary)',
    color: '#000',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '50px', // Botones redondos modernos
    boxShadow: '0 0 20px rgba(255, 214, 0, 0.4)',
    transition: 'transform 0.3s'
  },
  btnSecondary: {
    background: 'transparent',
    color: '#fff',
    border: '2px solid rgba(255,255,255,0.2)',
    padding: '15px 30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '50px',
    transition: 'background 0.3s'
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    minWidth: '300px'
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    maxHeight: '650px', // Altura máxima para que no se vea gigante
    filter: 'drop-shadow(-20px 10px 10px rgba(0,0,0,0.5))', // Sombra 3D
    zIndex: 2,
    objectFit: 'contain'
  },
  gradientOrb: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
    opacity: 0.4,
    zIndex: 1,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    filter: 'blur(40px)'
  }
};

export default Hero;