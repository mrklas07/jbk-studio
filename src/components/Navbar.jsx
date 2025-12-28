// src/components/Navbar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileMenu();
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* LOGO */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="nav-logo" 
          onClick={scrollToTop}
        >
          JBK <span style={{ color: 'var(--secondary)' }}>STUDIO.</span>
        </motion.div>

        {/* ICONO HAMBURGUESA (Móvil) */}
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        {/* MENU */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <span className="nav-links" onClick={() => scrollToSection('inicio')}>
              Inicio
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-links" onClick={() => scrollToSection('nosotros')}>
              Nosotros
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-links" onClick={() => scrollToSection('servicios')}>
              Servicios
            </span>
          </li>

          {/* BOTÓN MÓVIL (Clase especial: mobile-btn-container) */}
          <li className="mobile-btn-container">
             <button 
                className="btn-mobile" 
                onClick={() => scrollToSection('contacto')}
             >
                Agendar Asesoría
             </button>
          </li>
        </ul>

        {/* BOTÓN ESCRITORIO (Clase especial: btn-desktop) */}
        <motion.button 
           whileHover={{ scale: 1.05 }}
           className="btn-desktop"
           onClick={() => scrollToSection('contacto')}
        >
           Agendar Asesoría
        </motion.button>

      </div>
    </nav>
  );
};

export default Navbar;