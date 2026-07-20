import { motion } from "framer-motion";

const playfair = { fontFamily: "'Playfair Display', Georgia, serif" };
const inter = { fontFamily: "'Inter', sans-serif" };

const PILLARS = [
  {
    icon: "✦",
    title: "Academic Rigour",
    body: "Our curriculum challenges students to think critically, question deeply, and pursue knowledge with discipline.",
  },
  {
    icon: "✦",
    title: "Moral Formation",
    body: "Faith and character are not extras — they are the foundation on which every subject is built.",
  },
  {
    icon: "✦",
    title: "Qualified Faculty",
    body: "Over 50 experienced teachers, many with 10+ years of classroom excellence and proven WAEC results.",
  },
  {
    icon: "✦",
    title: "Safe Environment",
    body: "A structured, disciplined, and nurturing campus where every student is known, valued, and safe.",
  },
];

export default function WhySection() {
  return (
    <section className="bg-[#0D3B2E] py-24 px-6 lg:px-10 overflow-hidden relative">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase" style={inter}>Why Faith</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight" style={playfair}>
              More Than a School —<br />
              <em className="text-[#C9A84C]">A Community</em>
            </h2>
            <p className="text-white/50 mt-6 text-sm leading-relaxed max-w-sm" style={inter}>
              Parents choose Faith Secondary School because they know their children will be seen as individuals, not numbers — and pushed to become the best version of themselves.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {PILLARS.map(({ icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-5 rounded-lg border border-white/10 hover:border-[#C9A84C]/30 transition-colors duration-300"
              >
                <span className="text-[#C9A84C] text-xs mb-3 block" style={inter}>{icon}</span>
                <h3 className="text-white font-semibold text-sm mb-2" style={inter}>{title}</h3>
                <p className="text-white/40 text-xs leading-relaxed" style={inter}>{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
