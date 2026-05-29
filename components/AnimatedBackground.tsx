'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, .45, 1], [.7, .35, .2]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bunker-black">
      <div className="absolute inset-0 bg-radial-grid" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
      <motion.div style={{ y: y1, opacity }} className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-bunker-green/25 blur-3xl" />
      <motion.div style={{ y: y2, opacity }} className="absolute -right-28 top-40 h-96 w-96 rounded-full bg-bunker-purple/30 blur-3xl" />
      <motion.div style={{ y: y1 }} className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-bunker-cyan/20 blur-3xl" />
    </div>
  );
}
