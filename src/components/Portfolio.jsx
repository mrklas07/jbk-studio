import React from 'react';
import { motion } from 'framer-motion';

const projects = [1, 2, 3, 4, 5, 6]; // Simulamos 6 proyectos

const Portfolio = () => {
  return (
    <section id="proyectos" style={{ padding: '80px 0', background: '#080808' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '50px' }}>
          NUESTROS <span className="text-outline">PROYECTOS</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {projects.map((item) => (
            <motion.div 
              key={item}
              whileHover={{ scale: 1.02 }}
              style={{
                height: '250px',
                background: '#1a1a1a',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <span style={{ color: '#555', fontWeight: 'bold' }}>Proyecto {item}</span>
              {/* Efecto Hover Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute', inset: 0, background: 'rgba(112, 0, 255, 0.8)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold'
                }}
              >
                Ver Caso de Éxito
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;