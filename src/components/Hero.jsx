import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient veil to blend with content - pointer events disabled to keep scene interactive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black"></div>
      </div>

      {/* Floating aurora accents */}
      <div className="pointer-events-none absolute -inset-x-20 -top-40 h-[40rem] bg-gradient-to-br from-fuchsia-500/20 via-purple-500/10 to-indigo-500/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[100svh]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm backdrop-blur-md ring-1 ring-white/20"
          >
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            Building immersive, animated web experiences
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1 }}
            className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
          >
            Futuristic Portfolio for the Modern Web
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-white/80 max-w-xl"
          >
            I craft interfaces where 3D, motion, and code converge. Scroll to explore projects brought to life with tactile interactions and cinematic motion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 1 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold shadow-lg shadow-purple-500/30 hover:-translate-y-0.5 hover:shadow-purple-500/50 transition-transform"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-semibold backdrop-blur-md ring-1 ring-white/20 hover:bg-white/20 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
