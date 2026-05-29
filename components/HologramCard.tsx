'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function HologramCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: .65, ease: 'easeOut' }}
      whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
      className={`holo-border perspective-card rounded-3xl border border-white/10 bg-white/[.065] p-6 shadow-cyanGlow backdrop-blur-xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-bunker-green/10 opacity-70" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
