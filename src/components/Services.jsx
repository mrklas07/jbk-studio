// src/components/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Importamos iconos de la librería que instalamos
import { FaRocket, FaRobot, FaCrown, FaBullhorn, FaClock } from 'react-icons/fa';

const servicesList = [
  { icon: <FaRocket />, title: "Despega tu Negocio", desc: "Estrategias de lanzamiento para impacto inmediato." },
  { icon: <FaRobot />, title: "Automatiza Ventas", desc: "Sistemas que venden por ti 24/7 sin descanso." },
  { icon: <FaCrown />, title: "Domina tu Mercado", desc: "Posicionamiento líder para que seas la referencia." },
  { icon: <FaBullhorn />, title: "Impulsa tu Marca", desc: "Branding y contenido que conecta y enamora." },
  { icon: <FaClock />, title: "Optimiza tu Tiempo", desc: "Delega el marketing y enfócate en dirigir." },
];

const Services = () => {
  return (
    <section id="servicios" style={styles.section}>
      <div className="container" style={styles.container}>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={styles.title}
        >
          LO QUE HACEMOS <span className="text-outline">POR TI</span>
        </motion.h2>

        <div style={styles.grid}>
          {servicesList.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, background: 'rgba(255, 255, 255, 0.1)' }}
              style={styles.card}
            >
              <div style={styles.icon}>{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDesc}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 0',
    background: '#050505',
    position: 'relative'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    textAlign: 'center'
  },
  title: {
    fontSize: '3rem',
    marginBottom: '60px',
    fontWeight: '900'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Rejilla automática adaptable
    gap: '30px',
    justifyContent: 'center'
  },
  card: {
    background: 'rgba(255, 255, 255, 0.03)', // Fondo semitransparente
    backdropFilter: 'blur(10px)',             // Efecto vidrio
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '40px 20px',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'background 0.3s'
  },
  icon: {
    fontSize: '2.5rem',
    color: 'var(--secondary)', // Amarillo
    marginBottom: '20px'
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    fontWeight: 'bold'
  },
  cardDesc: {
    color: '#aaa',
    fontSize: '0.95rem',
    lineHeight: '1.5'
  }
};

export default Services;