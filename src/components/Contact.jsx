import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-black text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(79,70,229,0.25),transparent)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold">Let’s build something extraordinary</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            I’m available for select freelance work, product collaborations, and motion design consultations.
          </p>
        </motion.div>

        <div className="mt-12 mx-auto grid max-w-3xl grid-cols-1 sm:grid-cols-3 gap-4">
          <motion.a
            href="mailto:hello@example.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex items-center justify-center gap-2 rounded-xl bg-white text-black py-3 font-semibold shadow-lg hover:-translate-y-0.5 transition-transform"
          >
            <Mail size={18} /> Email
          </motion.a>
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-2 rounded-xl bg-white/10 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/20 transition-colors"
          >
            <Github size={18} /> GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-2 rounded-xl bg-white/10 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/20 transition-colors"
          >
            <Linkedin size={18} /> LinkedIn
          </motion.a>
        </div>

        <p className="mt-12 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} NeoPortfolio — designed with motion first.
        </p>
      </div>
    </section>
  );
}
