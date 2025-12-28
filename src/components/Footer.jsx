// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Importamos los iconos sociales
import { FaInstagram, FaWhatsapp, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  
  // Función para volver arriba suavemente
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacto" style={styles.footer}>
      {/* Barra de degradado superior */}
      <div style={styles.gradientLine}></div>

      <div className="container" style={styles.container}>
        
        {/* --- SECCIÓN SUPERIOR: CTA --- */}
        <div style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>¿LISTO PARA <span className="text-outline">EMPEZAR?</span></h2>
          <p style={styles.ctaText}>Lleva tu marca al siguiente nivel hoy mismo.</p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px var(--secondary)' }}
            style={styles.ctaButton}
          >
            Agendar Asesoría Ahora
          </motion.button>
        </div>

        {/* --- SECCIÓN MEDIA: REDES --- */}
        <div style={styles.socialSection}>
          <div style={styles.brand}>
            JBK <span style={{ color: 'var(--secondary)' }}>STUDIO.</span>
          </div>
          
          <div style={styles.icons}>
            <motion.a 
              href="https://instagram.com/jbkstudio" 
              target="_blank" 
              whileHover={{ y: -5, color: '#E1306C' }}
              style={styles.iconLink}
            >
              <FaInstagram />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ y: -5, color: '#25D366' }}
              style={styles.iconLink}
            >
              <FaWhatsapp />
            </motion.a>
            <motion.a 
              href="mailto:contacto@jbkstudio.com" 
              whileHover={{ y: -5, color: 'var(--primary)' }}
              style={styles.iconLink}
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </div>

        {/* --- SECCIÓN INFERIOR: COPYRIGHT (Modificado) --- */}
        <div style={styles.copyright}>
          <p>© {new Date().getFullYear()} JBK Studio. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#020202',
    position: 'relative',
    paddingTop: '0px'
  },
  gradientLine: {
    height: '4px',
    background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
    width: '100%'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px 20px 20px',
  },
  ctaSection: {
    textAlign: 'center',
    marginBottom: '80px'
  },
  ctaTitle: {
    fontSize: '3rem',
    marginBottom: '10px',
    fontWeight: '900'
  },
  ctaText: {
    color: '#888',
    marginBottom: '30px',
    fontSize: '1.2rem'
  },
  ctaButton: {
    background: 'var(--primary)',
    color: 'white',
    border: 'none',
    padding: '15px 40px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: '0.3s'
  },
  socialSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: '40px',
    flexWrap: 'wrap',
    gap: '20px'
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    letterSpacing: '1px'
  },
  icons: {
    display: 'flex',
    gap: '20px',
    fontSize: '1.5rem'
  },
  iconLink: {
    color: 'white',
    cursor: 'pointer',
    transition: 'color 0.3s'
  },
  copyright: {
    paddingTop: '30px',
    textAlign: 'center',       // <--- Esto centra el texto
    color: '#555',
    fontSize: '0.9rem',
    width: '100%',             // Asegura que ocupe todo el ancho
    borderTop: '1px solid rgba(255,255,255,0.05)', // Una línea sutil para separar
    marginTop: '40px'
  },
  
};

export default Footer;