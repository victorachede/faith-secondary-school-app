import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const playfair = { fontFamily: "'Playfair Display', Georgia, serif" };
const inter = { fontFamily: "'Inter', sans-serif" };

const STATS = [
  { value: 450, suffix: "+", label: "Graduates" },
  { value: 35, suffix: "+", label: "Years of Excellence" },
  { value: 50, suffix: "+", label: "Qualified Teachers" },
  { value: 92, suffix: "%", label: "WAEC Pass Rate" },
];

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const increment = (target / duration) * step;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [active, target]);

  return <>{count}{suffix}</>;
}

export default function AboutSection() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#F7F3EC] py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase" style={inter}>Our Impact</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#0D3B2E] text-3xl sm:text-4xl font-bold leading-tight mb-6" style={playfair}>
              Building Character,<br />
              <em className="text-[#C9A84C]">Shaping Futures</em>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-[15px]" style={inter}>
              For over three decades, Faith Secondary School has stood as a beacon of academic excellence in Benue State. We believe that education goes beyond textbooks — it is the cultivation of integrity, resilience, and purpose.
            </p>
            <p className="text-gray-600 leading-relaxed text-[15px]" style={inter}>
              Our students leave not just with qualifications, but with the confidence to lead and the character to serve.
            </p>
          </motion.div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map(({ value, suffix, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg ${i === 0 ? "bg-[#0D3B2E] text-white" : "bg-white border border-gray-100"}`}
              >
                <div
                  className={`text-3xl sm:text-4xl font-bold mb-1 ${i === 0 ? "text-[#C9A84C]" : "text-[#0D3B2E]"}`}
                  style={playfair}
                >
                  <CountUp target={value} suffix={suffix} active={active} />
                </div>
                <div className={`text-xs tracking-wide uppercase ${i === 0 ? "text-white/60" : "text-gray-500"}`} style={inter}>
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
