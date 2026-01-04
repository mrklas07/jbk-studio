import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" style={styles.section}>
      <div className="container" style={styles.container}>
        
        {/* --- 1. TEXTO (Arriba en móvil) --- */}
        <div style={styles.content}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.badge}
          >
            ARETÉ: EXCELENCIA & AUTORIDAD
          </motion.div>

          <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
            Liderazgo estratégico para marcas que buscan poder. <br />
            No solo creamos webs, construimos tu autoridad digital.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={styles.btnGroup}
          >
            <button style={styles.btnPrimary}>TOMAR EL MANDO</button>
            <a href="#proyectos" style={{ textDecoration: 'none' }}>
              <button style={styles.btnSecondary}>VER ESTRATEGIA</button>
            </a>
          </motion.div>
        </div>

        {/* --- 2. EL ESTANDARTE (Abajo en móvil) --- */}
        <div style={styles.artContainer}>
          
          {/* Fondo Aura (Fijo) */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            style={styles.powerAura}
          />

          {/* --- GRUPO FLOTANTE (LEVITACIÓN) --- 
              Aquí está la magia: Todo lo de adentro flotará junto */}
          <motion.div
            animate={{ y: [0, -20, 0] }} // Sube y baja 20px
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >

            {/* Anillo Estrategia (Girando) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              style={styles.strategyRing}
            />

            {/* Eje Vertical (La Aguja) */}
            <motion.div
               initial={{ height: 0 }}
               animate={{ height: '400px' }} 
               transition={{ duration: 1.5, ease: "easeOut" }}
               style={styles.axisLine}
            >
               <div style={styles.axisCore}></div>
            </motion.div>

            {/* Joya Superior */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              style={styles.diamondContainer}
            >
              <div style={styles.diamond} />
              <div style={styles.diamondGlow} />
            </motion.div>

            {/* Base Flotante */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              style={styles.basePedestal}
            />

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
    background: '#050505',
    overflow: 'hidden',
    paddingTop: '80px',
    paddingBottom: '40px',
    position: 'relative'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    flexWrap: 'wrap' // Texto primero, arte abajo si no cabe
  },
  content: {
    flex: 1,
    minWidth: '300px',
    zIndex: 10,
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  badge: {
    display: 'inline-block',
    fontSize: '0.75rem',
    color: 'var(--secondary)', 
    letterSpacing: '3px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '15px',
    borderBottom: '1px solid var(--secondary)',
    paddingBottom: '5px'
  },
  title: {
    fontSize: 'clamp(3rem, 6vw, 5rem)',
    fontWeight: '900',
    lineHeight: '1',
    color: 'white',
    marginBottom: '25px',
    fontFamily: 'serif'
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#999',
    marginBottom: '40px',
    lineHeight: '1.6',
    maxWidth: '480px'
  },
  btnGroup: {
    display: 'flex',
    gap: '20px'
  },
  btnPrimary: {
    background: 'var(--secondary)',
    color: 'black',
    border: 'none',
    padding: '16px 40px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '2px', 
    letterSpacing: '1px',
    transition: '0.3s'
  },
  btnSecondary: {
    background: 'transparent',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.3)',
    padding: '16px 40px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '2px',
    letterSpacing: '1px',
    transition: '0.3s'
  },

  // --- ARTE ---
  artContainer: {
    flex: 1,
    minWidth: '300px',
    height: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    position: 'relative',
    flexDirection: 'column'
  },
  powerAura: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(112,0,255,0.15) 0%, transparent 60%)',
    zIndex: 0
  },
  strategyRing: {
    position: 'absolute',
    width: '350px',
    height: '350px',
    border: '1px dashed rgba(255,255,255,0.2)', // Aumenté un poco la visibilidad
    borderRadius: '50%',
    zIndex: 1
  },
  axisLine: {
    width: '40px', 
    position: 'relative',
    zIndex: 5,
    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
    display: 'flex',
    justifyContent: 'center'
  },
  axisCore: {
    width: '2px',
    height: '100%',
    background: 'linear-gradient(to top, transparent, var(--secondary), white)',
    boxShadow: '0 0 20px var(--secondary)'
  },
  diamondContainer: {
    position: 'absolute',
    top: '18%', 
    zIndex: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  diamond: {
    width: '60px',
    height: '60px',
    background: 'var(--secondary)', 
    transform: 'rotate(45deg)', 
    boxShadow: '0 0 30px rgba(255, 214, 0, 0.4), inset 0 0 10px rgba(255,255,255,0.5)',
    border: '2px solid white'
  },
  diamondGlow: {
    position: 'absolute',
    width: '120px',
    height: '120px',
    background: 'radial-gradient(circle, rgba(255, 214, 0, 0.2) 0%, transparent 70%)',
    zIndex: -1
  },
  basePedestal: {
    position: 'absolute',
    bottom: '15%',
    width: '200px',
    height: '4px',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
    zIndex: 5
  }
};

export default Hero;