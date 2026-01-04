import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- IMPORTA TUS IMÁGENES AQUÍ ---
// Puedes agregar cuantas quieras. Asegúrate de tenerlas en la carpeta assets.
import img1 from '../assets/portfolio/dw/logo.jpg'; // Imagen 1 (Tu estatua original o la que quieras)
import img2 from '../assets/portfolio/rs/pierdesclientes.webp'; // Ejemplo Imagen 2
import img3 from '../assets/portfolio/dw/tienda.webp'; // Ejemplo Imagen 3

// Las metemos en un arreglo para facilitar el manejo
const heroImages = [img1, img2, img3];

const Hero = () => {
  // Estado para controlar qué imagen se muestra (0, 1, 2...)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Efecto para cambiar la imagen automáticamente cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        // Si llegamos al final, volvemos al 0 (loop infinito)
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4000ms = 4 segundos

    return () => clearInterval(timer); // Limpieza al desmontar
  }, []);

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

        {/* --- CARRUSEL DE IMÁGENES (Derecha) --- */}
        <div style={styles.imageContainer}>
          {/* Luz de fondo */}
          <div style={styles.gradientOrb}></div>

          {/* Contenedor Flotante: Animamos el contenedor para que flote,
              y adentro cambiamos las imágenes con fade */}
          <motion.div
            animate={{ y: [0, -20, 0] }} // Flotar infinito
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <AnimatePresence mode='wait'>
              <motion.img 
                key={currentIndex} // La clave es vital para que React sepa que cambió la imagen
                src={heroImages[currentIndex]} 
                alt="JBK Studio Slide"
                
                // Animación de entrada y salida (Fade + Slide suave)
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                
                style={styles.image}
              />
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// --- ESTILOS ---
const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    background: 'radial-gradient(circle at top right, #2a004d 0%, #050505 60%)',
    overflow: 'hidden',
    paddingTop: '80px',
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
    flexWrap: 'wrap'
  },
  content: {
    flex: 1,
    minWidth: '300px',
    zIndex: 2,
    marginBottom: '40px'
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
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
    borderRadius: '50px',
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
    alignItems: 'center', // Centrado vertical
    position: 'relative',
    minWidth: '300px',
    height: '500px' // IMPORTANTE: Altura fija para evitar saltos cuando cambie la imagen
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%', // Se ajusta al contenedor
    height: 'auto',
    filter: 'drop-shadow(-20px 10px 10px rgba(0,0,0,0.5))',
    zIndex: 2,
    objectFit: 'contain', // Asegura que la imagen no se recorte
    position: 'absolute' // Para que las imágenes se superpongan en la transición
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