import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sans = { fontFamily: "'DM Sans', sans-serif" };
const display = { fontFamily: "'DM Serif Display', Georgia, serif" };

// Campus life image grid section
export default function CampusSection() {
  const photos = [
    { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80&auto=format&fit=crop", label: "Student Life" },
    { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80&auto=format&fit=crop", label: "Academics" },
    { src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80&auto=format&fit=crop", label: "Athletics" },
  ];

  return (
    <section className="bg-[#0a1628] py-24 px-6 xl:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#c8102e] text-xs font-semibold tracking-widest uppercase mb-4" style={sans}>Life at Faith</p>
            <h2 className="text-white text-3xl sm:text-4xl font-normal leading-tight" style={display}>
              More than<br />a classroom
            </h2>
          </div>
          <Link
            to="/AboutFaith"
            style={sans}
            className="text-white/50 text-sm font-medium hover:text-white transition-colors shrink-0"
          >
            Explore campus life →
          </Link>
        </div>

        {/* 3-column photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {photos.map(({ src, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-lg ${i === 0 ? "sm:row-span-2" : ""}`}
              style={{ aspectRatio: i === 0 ? "3/4" : "4/3" }}
            >
              <img src={src} alt={label} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span style={sans} className="absolute bottom-4 left-4 text-white text-sm font-semibold">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
