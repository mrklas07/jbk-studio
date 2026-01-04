import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" style={styles.section}>
      <div className="container" style={styles.container}>
        
        {/* --- IZQUIERDA: TEXTO --- */}
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

        {/* --- DERECHA: EL ESTANDARTE (Símbolo de Areté) --- */}
        <div style={styles.artContainer}>
          
          {/* 1. EL AURA DE PODER (Fondo) */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            style={styles.powerAura}
          />

          {/* 2. EL ANILLO DE ESTRATEGIA (Laurel abstracto) 
              Gira lento alrededor del centro */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            style={styles.strategyRing}
          />

          {/* 3. EL EJE DE AUTORIDAD (Línea Vertical) */}
          <motion.div
             initial={{ height: 0 }}
             animate={{ height: '400px' }} // Crece desde abajo
             transition={{ duration: 1.5, ease: "easeOut" }}
             style={styles.axisLine}
          >
             {/* Luz interior del eje */}
             <div style={styles.axisCore}></div>
          </motion.div>

          {/* 4. LA JOYA DE LA EXCELENCIA (Rombo Superior) 
              Representa la virtud coronando la estructura */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1, type: "spring" }}
            style={styles.diamondContainer}
          >
            {/* El Rombo Dorado */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} // Flota suavemente (Respiración)
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={styles.diamond}
            />
            {/* Destello del rombo */}
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={styles.diamondGlow}
            />
          </motion.div>

          {/* 5. LA BASE (Fundamento Sólido) */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            style={styles.basePedestal}
          />

        </div>

      </div>
    </section>
  );
};

// --- ESTILOS "ARETÉ" (Militar/Político/Elegante) ---
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
    flexWrap: 'wrap-reverse'
  },
  content: {
    flex: 1,
    minWidth: '300px',
    zIndex: 10,
    marginTop: '40px'
  },
  badge: {
    display: 'inline-block',
    fontSize: '0.75rem',
    color: 'var(--secondary)', // Dorado
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
    fontFamily: 'serif' // Importante para el toque clásico
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
    borderRadius: '2px', // Bordes rectos = Disciplina
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

  // --- ARTE: EL ESTANDARTE ---
  artContainer: {
    flex: 1,
    minWidth: '300px',
    height: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Centramos todo en el eje
    position: 'relative',
    flexDirection: 'column' // Importante para apilar verticalmente
  },
  powerAura: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(112,0,255,0.2) 0%, transparent 70%)',
    zIndex: 0
  },
  strategyRing: {
    position: 'absolute',
    width: '350px',
    height: '350px',
    border: '1px dashed rgba(255,255,255,0.1)', // Línea discontinua = Estrategia
    borderRadius: '50%',
    zIndex: 1
  },
  // La Línea Vertical (El Eje Moral)
  axisLine: {
    width: '40px', // Un poco ancho para parecer una columna fina
    position: 'relative',
    zIndex: 5,
    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
    display: 'flex',
    justifyContent: 'center'
  },
  axisCore: {
    width: '2px', // El núcleo de luz pura
    height: '100%',
    background: 'linear-gradient(to top, transparent, var(--secondary), white)',
    boxShadow: '0 0 15px var(--secondary)'
  },
  // La Joya Superior
  diamondContainer: {
    position: 'absolute',
    top: '18%', // Ubicación de la "cabeza"
    zIndex: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  diamond: {
    width: '60px',
    height: '60px',
    background: 'var(--secondary)', // Oro sólido
    transform: 'rotate(45deg)', // Forma de rombo
    boxShadow: '0 0 30px rgba(255, 214, 0, 0.4), inset 0 0 10px rgba(255,255,255,0.5)',
    border: '2px solid white'
  },
  diamondGlow: {
    position: 'absolute',
    width: '100px',
    height: '100px',
    background: 'radial-gradient(circle, rgba(255, 214, 0, 0.3) 0%, transparent 70%)',
    zIndex: -1
  },
  // La Base (Fundamento)
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