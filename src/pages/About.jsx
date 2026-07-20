import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sans = { fontFamily: "'DM Sans', sans-serif" };
const display = { fontFamily: "'DM Serif Display', Georgia, serif" };

const PILLARS = [
  { label: "Academic Rigour", body: "A curriculum that challenges students to think critically and pursue knowledge with discipline and purpose." },
  { label: "Moral Formation", body: "Character and faith are the foundation — every subject is built on values that last a lifetime." },
  { label: "Proven Results", body: "Over 92% WAEC pass rate year on year, with graduates excelling in universities across Nigeria and beyond." },
  { label: "Dedicated Faculty", body: "50+ experienced teachers who know every student by name and are invested in their individual success." },
];

export default function AboutSection() {
  return (
    <>
      {/* Mission strip */}
      <section className="bg-[#faf9f7] py-24 px-6 xl:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80&auto=format&fit=crop"
                alt="Classroom"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -right-5 bg-[#c8102e] text-white rounded-lg px-6 py-4 shadow-xl"
              style={sans}
            >
              <div className="text-3xl font-bold" style={display}>35+</div>
              <div className="text-xs text-white/70 mt-0.5">Years Shaping Leaders</div>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={sans}
          >
            <p className="text-[#c8102e] text-xs font-semibold tracking-widest uppercase mb-4">Our Mission</p>
            <h2 className="text-[#0a1628] text-3xl sm:text-4xl font-normal mb-6 leading-tight" style={display}>
              Building Character,<br />
              Shaping Futures
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Faith Secondary School was built on a simple conviction: that every child from Benue deserves world-class education. For over three decades, we have honoured that conviction — producing graduates who lead in medicine, law, engineering, and public service.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We are not just a school. We are a community — where students are seen, challenged, and prepared for everything life demands.
            </p>
            <Link
              to="/AboutFaith"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0a1628] border-b-2 border-[#c8102e] pb-0.5 hover:text-[#c8102e] transition-colors"
            >
              Our full story →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-24 px-6 xl:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-[#c8102e] text-xs font-semibold tracking-widest uppercase mb-4" style={sans}>Why Choose Faith</p>
            <h2 className="text-[#0a1628] text-3xl sm:text-4xl font-normal leading-tight" style={display}>
              Four pillars every<br />parent cares about
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded-lg overflow-hidden">
            {PILLARS.map(({ label, body }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-white p-8 hover:bg-[#faf9f7] transition-colors group"
                style={sans}
              >
                <div className="w-8 h-0.5 bg-[#c8102e] mb-6 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-[#0a1628] font-semibold text-[15px] mb-3">{label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
