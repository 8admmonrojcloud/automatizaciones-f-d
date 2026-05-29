'use client';

import { motion } from 'framer-motion';

const links = [
  ['Soluciones', '#soluciones'],
  ['Beneficios', '#beneficios'],
  ['Demo', '#demo'],
  ['Contacto', '#contacto'],
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .6 }}
      className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-bunker-black/50 backdrop-blur-2xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#inicio" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-bunker-green to-bunker-cyan text-xl font-black text-bunker-black shadow-glow">∞</span>
          <span className="leading-tight">
            <span className="block text-sm font-black uppercase tracking-[.22em] text-bunker-green">Automatizaciones</span>
            <span className="block text-lg font-black text-white">F&D</span>
          </span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-semibold text-white/70 transition hover:text-bunker-green">{label}</a>
          ))}
        </div>
        {/*
         * Botón de WhatsApp en la cabecera.  Envía un mensaje general para expresar interés en
         * nuestros servicios de automatización.  Codificado con encodeURIComponent.
         */}
        <a
          href="https://wa.me/527361253507?text=Hola%20Automatizaciones%20F%26D%2C%20estoy%20interesado%20en%20sus%20soluciones%20de%20automatizaci%C3%B3n."
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-bunker-green/40 bg-bunker-green/10 px-4 py-2 text-sm font-bold text-bunker-green shadow-glow transition hover:bg-bunker-green hover:text-bunker-black"
        >
          WhatsApp
        </a>
      </nav>
    </motion.header>
  );
}
