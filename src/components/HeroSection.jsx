import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sans = { fontFamily: "'DM Sans', sans-serif" };
const display = { fontFamily: "'DM Serif Display', Georgia, serif" };

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a1628]">

      {/* Full-bleed placeholder image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80&auto=format&fit=crop"
          alt="Students at Faith Secondary School"
          className="w-full h-full object-cover object-center opacity-40"
        />
        {/* Gradient: dark at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-[#0a1628]/20" />
      </div>

      {/* Content — pinned to bottom-left like editorial layouts */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 xl:px-10 flex flex-col justify-end min-h-screen pb-20 pt-32">
        <div className="max-w-2xl">

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={sans}
            className="text-[#c8102e] text-sm font-semibold tracking-widest uppercase mb-5"
          >
            Makurdi, Benue State · Est. Nigeria
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={display}
            className="text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-7"
          >
            Where Faith
            <br />
            Meets <em>Excellence</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={sans}
            className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg"
          >
            Faith Secondary School has shaped the minds and character of Benue's next generation for decades. A school built on discipline, values, and academic rigour.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
            style={sans}
          >
            <Link
              to="/admission"
              className="px-7 py-3.5 bg-[#c8102e] text-white text-[14px] font-semibold rounded hover:bg-[#a50d26] transition-colors"
            >
              Apply for Admission
            </Link>
            <Link
              to="/AboutFaith"
              className="px-7 py-3.5 border border-white/30 text-white text-[14px] font-medium rounded hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 max-w-lg"
          style={sans}
        >
          {[
            { n: "450+", label: "Graduates" },
            { n: "35+", label: "Years of Excellence" },
            { n: "92%", label: "WAEC Pass Rate" },
          ].map(({ n, label }) => (
            <div key={label}>
              <div className="text-white text-2xl font-bold mb-0.5" style={display}>{n}</div>
              <div className="text-white/40 text-xs">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
