import { motion } from 'framer-motion';
import { Code2, Sparkles, Smartphone, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Holographic UI Kit',
    description:
      'A component library with depth, parallax, and physically based light effects. Built with accessibility and performance in mind.',
    icon: Sparkles,
    tags: ['Framer Motion', 'WebGL', 'A11y'],
    color: 'from-fuchsia-500/30 to-indigo-500/30',
  },
  {
    title: 'Realtime Collab Space',
    description:
      'A multiplayer canvas for brainstorming with CRDT-powered syncing and buttery-smooth animations.',
    icon: Globe,
    tags: ['WebRTC', 'CRDT', 'Tailwind'],
    color: 'from-cyan-400/30 to-blue-500/30',
  },
  {
    title: 'Pocket Studio',
    description:
      'Mobile-first editing suite with haptic micro-interactions and timeline scrubbing.',
    icon: Smartphone,
    tags: ['React Native', 'Gesture', 'TS'],
    color: 'from-emerald-400/30 to-teal-500/30',
  },
  {
    title: 'Dev Tools DX',
    description:
      'CLI + dashboard to visualize performance and optimize bundle delivery in real-time.',
    icon: Code2,
    tags: ['Vite', 'FastAPI', 'DX'],
    color: 'from-amber-400/30 to-orange-500/30',
  },
];

const cardVariants = {
  off: { opacity: 0, y: 40, scale: 0.98 },
  on: (i) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-black to-[#06030f] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_50%_at_50%_0%,rgba(168,85,247,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-fuchsia-300/80">SELECTED WORK</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold">Projects with Motion at Heart</h2>
          <p className="mt-4 text-white/70">
            Interfaces that feel alive, purposeful, and delightful — tuned for both performance and aesthetics.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, description, icon: Icon, tags, color }, i) => (
            <motion.article
              key={title}
              custom={i}
              variants={cardVariants}
              initial="off"
              whileInView="on"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
            >
              <div className={`absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${color} blur-3xl opacity-60 group-hover:opacity-90 transition-opacity`} />
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/10 ring-1 ring-white/20">
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <p className="mt-3 text-white/70 leading-relaxed">{description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-black/40 ring-1 ring-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full rounded-xl bg-white text-black font-semibold py-2.5 shadow-lg shadow-purple-500/30 group-hover:-translate-y-0.5 transition-transform">
                  See Details
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
