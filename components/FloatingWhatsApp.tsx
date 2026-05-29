'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

// Mensaje general para el botón flotante.  Invita al usuario a pedir más información sin
// especificar un servicio concreto.  Codificado con encodeURIComponent.
const whatsappUrl =
  'https://wa.me/527361253507?text=Hola%20Automatizaciones%20F%26D%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20automatizaci%C3%B3n%20de%20mi%20negocio.';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.1, type: 'spring', stiffness: 180 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-bunker-green text-bunker-black shadow-glow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="absolute -inset-2 -z-10 animate-ping rounded-full bg-bunker-green/35" />
    </motion.a>
  );
}
