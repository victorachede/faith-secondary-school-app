import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const playfair = { fontFamily: "'Playfair Display', Georgia, serif" };
const inter = { fontFamily: "'Inter', sans-serif" };

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0D3B2E] flex flex-col items-center justify-center overflow-hidden">

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gold arc — signature element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none">
        <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="600" cy="0" r="400" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
          <circle cx="600" cy="0" r="300" stroke="#C9A84C" strokeWidth="0.8" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="400" r="280" stroke="#C9A84C" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs tracking-[0.25em] uppercase" style={inter}>
            Est. Makurdi, Benue State
          </span>
          <div className="h-px w-12 bg-[#C9A84C]" />
        </motion.div>

        {/* Crest circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="w-20 h-20 mx-auto mb-8 rounded-full border-2 border-[#C9A84C] flex items-center justify-center"
        >
          <span className="text-[#C9A84C] font-bold text-xl tracking-wider" style={playfair}>FSS</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
          style={playfair}
        >
          Faith Secondary
          <br />
          <em className="text-[#C9A84C] not-italic">School</em>
        </motion.h1>

        {/* Motto */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-white/50 text-sm tracking-[0.15em] uppercase mb-6"
          style={inter}
        >
          Lux Mentis, Lux Orbis
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/70 text-base sm:text-lg max-w-md mx-auto leading-relaxed mb-12"
          style={inter}
        >
          A citadel of excellence, discipline, and godly heritage — shaping the next generation of Nigerian leaders.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/admission"
            className="px-8 py-3 bg-[#C9A84C] text-[#0D3B2E] font-semibold text-sm tracking-wide rounded hover:bg-[#E8C96A] transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A84C]/20"
            style={inter}
          >
            Apply for Admission
          </Link>
          <Link
            to="/AboutFaith"
            className="px-8 py-3 border border-white/30 text-white text-sm tracking-wide rounded hover:border-white/60 hover:bg-white/5 transition-all duration-200"
            style={inter}
          >
            Discover Our Story
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase" style={inter}>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
