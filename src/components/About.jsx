// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="nosotros" style={styles.section}>
      <div className="container" style={styles.container}>
        
        {/* Caja de Texto con efecto Neón */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={styles.glassBox}
        >
          <h2 style={styles.title}>
            ¿QUIÉNES <span style={{ color: 'var(--secondary)' }}>SOMOS?</span>
          </h2>
          
          <div style={styles.divider}></div>

          <p style={styles.text}>
            En <strong style={{ color: 'var(--primary)' }}>JBK Studio</strong> somos una agencia de publicidad y marketing digital enfocada en crear 
            <span style={{ color: '#fff', fontWeight: 'bold' }}> marcas auténticas</span>.
          </p>

          <p style={styles.text}>
            Ofrecemos estrategias inteligentes y resultados reales. No seguimos tendencias, 
            <span className="text-outline"> LAS CREAMOS.</span>
          </p>

        </motion.div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 0',
    // Fondo con un toque sutil de púrpura en el centro
    background: 'radial-gradient(circle at center, #1a0033 0%, #050505 70%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px',
    textAlign: 'center'
  },
  glassBox: {
    background: 'rgba(10, 10, 10, 0.6)',
    backdropFilter: 'blur(20px)',
    border: '2px solid var(--primary)', // Borde Púrpura
    borderRadius: '30px',
    padding: '60px 40px',
    // Sombra de neón púrpura alrededor de la caja
    boxShadow: '0 0 50px rgba(112, 0, 255, 0.2), inset 0 0 20px rgba(112, 0, 255, 0.1)' 
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '900',
    marginBottom: '20px',
    textTransform: 'uppercase'
  },
  divider: {
    width: '100px',
    height: '4px',
    background: 'var(--secondary)', // Línea amarilla decorativa
    margin: '0 auto 40px auto',
    borderRadius: '2px'
  },
  text: {
    fontSize: '1.5rem', // Letra grande y legible
    color: '#ccc',
    lineHeight: '1.8',
    marginBottom: '20px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

export default About;