import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaPaperPlane, FaTimes, FaWhatsapp } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "¡Hola! Soy JBK AI 🤖. ¿Cómo te llamas?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  
  // Pasos: 'nombre' -> 'servicio' -> 'cierre'
  const [step, setStep] = useState('nombre'); 
  const [userName, setUserName] = useState('');

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // 1. Agregar mensaje del usuario
    const userMsg = { text: input, isBot: false };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // 2. Lógica del Cerebro
    setTimeout(() => {
      let botResponse = "";
      const lowerInput = input.toLowerCase();

      // --- LÓGICA DE FLUJO MEJORADA ---
      
      // PASO 1: NOMBRE
      if (step === 'nombre') {
        setUserName(input);
        botResponse = `Un gusto, ${input}. ¿En qué podemos ayudarte hoy? (Escribe: Marketing, Web o Asesoría)`;
        setStep('servicio');
      } 
      
      // PASO 2: SERVICIO (O si pregunta algo nuevo desde el cierre)
      else if (step === 'servicio' || step === 'cierre') {
        
        // Detección de Temas (Funciona siempre)
        if (lowerInput.includes("marketing") || lowerInput.includes("redes") || lowerInput.includes("instagram")) {
          botResponse = "¡Excelente! En Marketing gestionamos tus redes y creamos contenido viral. ¿Te gustaría ver nuestros planes?";
          setStep('cierre'); // Vamos al cierre para concretar
        } 
        else if (lowerInput.includes("web") || lowerInput.includes("pagina") || lowerInput.includes("sitio")) {
          botResponse = "Desarrollamos sitios web modernos, rápidos y responsivos (como este). ¿Te interesa una cotización?";
          setStep('cierre');
        } 
        else if (lowerInput.includes("asesor") || lowerInput.includes("ayuda") || lowerInput.includes("estrategia")) {
          botResponse = "Nuestros expertos pueden analizar tu negocio y darte una ruta clara de crecimiento. ¿Agendamos?";
          setStep('cierre');
        } 
        else if (lowerInput.includes("precio") || lowerInput.includes("costo") || lowerInput.includes("cuanto")) {
            botResponse = "Nuestros proyectos son personalizados, pero inician desde $200 USD. ¿Quieres que evaluemos tu caso?";
            setStep('cierre');
        }
        // Respuestas específicas del CIERRE (Si/No/WhatsApp)
        else if (step === 'cierre') {
            if (lowerInput.includes("si") || lowerInput.includes("claro") || lowerInput.includes("por favor")) {
                botResponse = "¡Genial! Hablemos directo por WhatsApp para darte atención VIP. Haz click en el botón de abajo 👇";
            } else if (lowerInput.includes("no") || lowerInput.includes("gracias")) {
                botResponse = "Entendido. Recuerda que puedes ver nuestros proyectos en la sección de arriba. ¡Avísame si cambias de opinión!";
                setStep('servicio'); // Volvemos a escuchar por si quiere otra cosa
            } else {
                // Si no entiende, reinicia el ciclo suavemente en lugar de repetir el link
                botResponse = "Entiendo. ¿Hay algo más en lo que pueda orientarte? (Marketing, Web, Precios...)";
                setStep('servicio'); // Regresa al estado de escuchar temas
            }
        }
        // Si está en 'servicio' y no entendió nada
        else {
          botResponse = "Mmm, no estoy seguro de haber entendido. ¿Buscas ayuda con Marketing, Desarrollo Web o una Asesoría?";
        }
      }

      setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
    }, 800);
  };

  return (
    <div style={styles.container}>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            style={styles.chatWindow}
          >
            <div style={styles.header}>
              <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                <FaRobot style={{ fontSize: '1.5rem', color: 'var(--secondary)' }}/>
                <div>
                    <h4 style={{margin:0}}>JBK AI</h4>
                    <span style={{fontSize:'0.7rem', color:'#0f0'}}>● En línea</span>
                </div>
              </div>
              <FaTimes onClick={() => setIsOpen(false)} style={{cursor:'pointer'}}/>
            </div>

            <div style={styles.body}>
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  style={{
                    ...styles.message, 
                    alignSelf: msg.isBot ? 'flex-start' : 'flex-end',
                    background: msg.isBot ? 'rgba(255,255,255,0.1)' : 'var(--primary)',
                    color: '#fff',
                    borderBottomLeftRadius: msg.isBot ? '0' : '10px',
                    borderBottomRightRadius: msg.isBot ? '10px' : '0'
                  }}
                >
                  {msg.text}
                </div>
              ))}
              
              {/* Botón WhatsApp solo aparece si la respuesta sugiere contacto */}
              {step === 'cierre' && messages[messages.length-1].text.includes("WhatsApp") && (
                <a 
                  href="https://wa.me/123456789" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.whatsappBtn}
                >
                  <FaWhatsapp /> Abrir WhatsApp
                </a>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <div style={styles.footer}>
              <input 
                type="text" 
                placeholder="Escribe tu respuesta..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                style={styles.input}
              />
              <button onClick={handleSend} style={styles.sendBtn}><FaPaperPlane /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        style={styles.fab}
      >
        {isOpen ? <FaTimes /> : <FaRobot />}
      </motion.button>

    </div>
  );
};

// ESTILOS (Sin cambios mayores, solo asegurando el diseño)
const styles = {
  container: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    zIndex: 2000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    fontFamily: 'Open Sans, sans-serif'
  },
  chatWindow: {
    width: '320px',
    height: '450px',
    background: 'rgba(15, 15, 15, 0.95)',
    backdropFilter: 'blur(10px)',
    border: '1px solid var(--primary)',
    borderRadius: '15px',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    boxShadow: '0 10px 40px rgba(0,0,0,0.6)'
  },
  header: {
    padding: '15px',
    background: 'var(--primary)',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
  },
  body: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  message: {
    padding: '12px 16px',
    borderRadius: '15px',
    fontSize: '0.95rem',
    maxWidth: '85%',
    lineHeight: '1.4',
    wordWrap: 'break-word'
  },
  whatsappBtn: {
    alignSelf: 'center',
    background: '#25D366',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '10px',
    boxShadow: '0 4px 10px rgba(37, 211, 102, 0.3)',
    fontSize: '0.9rem',
    cursor: 'pointer'
  },
  footer: {
    padding: '15px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    display: 'flex',
    gap: '10px',
    background: 'rgba(0,0,0,0.3)'
  },
  input: {
    flex: 1,
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '12px',
    borderRadius: '25px',
    color: 'white',
    outline: 'none',
    fontSize: '0.9rem'
  },
  sendBtn: {
    background: 'var(--secondary)',
    border: 'none',
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    cursor: 'pointer',
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.3s'
  },
  fab: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, var(--primary), #9d4edd)',
    color: 'white',
    border: 'none',
    fontSize: '1.8rem',
    cursor: 'pointer',
    boxShadow: '0 0 25px rgba(112, 0, 255, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default Chatbot;