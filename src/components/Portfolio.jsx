import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './Portfolio.css'; 

// --- IMPORTACIONES (Tus rutas) ---
import imgRs1 from '../assets/portfolio/Rs/pierdesclientes.webp';
import imgDw1 from '../assets/portfolio/DW/quienessomos.webp';
import imgDiseno1 from '../assets/portfolio/diseno/pg1.jpeg';
import imgLogo1 from '../assets/portfolio/Logos/pg3.jpeg'; 
// Asegúrate de tener las imágenes del 4to proyecto importadas
import imgLogo2 from '../assets/portfolio/Logos/pg4.jpeg'; 

const projects = [
  { 
    id: 1, 
    title: "Campaña Instagram", 
    category: "Redes Sociales", 
    image: imgRs1, 
    desc: "Estrategia de contenido diseñada para aumentar la retención.",
    gallery: [imgRs1] 
  },
  { 
    id: 2, 
    title: "Tienda Online", 
    category: "Desarrollo Web", 
    image: imgDw1, 
    desc: "Plataforma E-commerce completa.",
    gallery: [imgDw1] 
  },
  { 
    id: 3, 
    title: "Flyer Publicitario", 
    category: "Diseño Gráfico", 
    image: imgDiseno1, 
    desc: "Material gráfico de alto impacto.",
    gallery: [imgDiseno1] 
  },
  { 
    id: 4, 
    title: "Identidad Visual", 
    category: "Logos", 
    image: imgLogo1, 
    desc: "Creación de marca y manual corporativo.",
    gallery: [imgLogo1, imgLogo2] // Asegúrate de tener al menos una imagen aquí
  },
];

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="proyectos" className="portfolio-section">
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '50px' }}>
          NUESTROS <span className="text-outline">PROYECTOS</span>
        </h2>

        {/* --- GRID PRINCIPAL --- */}
        <div className="portfolio-grid">
          {projects.map((item) => (
            <motion.div 
              key={item.id}
              layoutId={`card-${item.id}`} 
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedId(item.id)}
              className="card-container" // Clase CSS aplicada aquí
            >
              <img src={item.image} alt={item.title} className="card-image" loading="lazy" />
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="card-overlay"
              >
                <h3 style={{fontSize:'1.5rem', fontWeight:'bold'}}>{item.title}</h3>
                <span style={{color:'var(--secondary)', textTransform:'uppercase'}}>{item.category}</span>
                <span className="btn-fake">Ver Detalles</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* --- MODAL --- */}
        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div 
                className="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
              >
                <motion.div 
                  className="modal-content"
                  layoutId={`card-${selectedId}`} 
                  onClick={(e) => e.stopPropagation()}
                >
                  {projects.map((item) => {
                    if (item.id === selectedId) {
                      return (
                        <React.Fragment key={item.id}>
                          <button onClick={() => setSelectedId(null)} className="close-btn">
                            <FaTimes size={18} />
                          </button>

                          <div className="modal-scroll-area">
                            <span className="modal-category">{item.category}</span>
                            <h2 className="modal-title">{item.title}</h2>
                            <p className="modal-desc">{item.desc}</p>

                            {/* --- GALERÍA TIPO TARJETAS --- */}
                            <div className="modal-gallery">
                              {item.gallery.map((pic, index) => (
                                <div key={index} className="gallery-card">
                                  <img src={pic} alt="Detalle" className="gallery-img" />
                                </div>
                              ))}
                            </div>
                            
                          </div>
                        </React.Fragment>
                      );
                    }
                    return null;
                  })}
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Portfolio;