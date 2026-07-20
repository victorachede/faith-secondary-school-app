import { motion } from "framer-motion";
import { staffList } from "../data/StaffData";

const playfair = { fontFamily: "'Playfair Display', Georgia, serif" };
const inter = { fontFamily: "'Inter', sans-serif" };

const DEPT_COLORS = {
  Science: { bg: "#EBF4F0", dot: "#0D3B2E" },
  Arts: { bg: "#FBF5E8", dot: "#C9A84C" },
  Commercial: { bg: "#F0EBF4", dot: "#5B3A8A" },
};

export default function Staff() {
  // Show first 6 staff
  const featured = staffList.slice(0, 6);

  return (
    <section className="bg-white py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase" style={inter}>Our People</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <h2 className="text-[#0D3B2E] text-3xl sm:text-4xl font-bold leading-tight" style={playfair}>
            Faculty of<br />
            <em className="text-[#C9A84C]">Distinction</em>
          </h2>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed" style={inter}>
            Dedicated educators who bring expertise and passion to every classroom.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map(({ name, department, subjects, experience, waecPassRate }, i) => {
            const colors = DEPT_COLORS[department] || DEPT_COLORS.Science;
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="group p-5 rounded-lg border border-gray-100 hover:border-[#C9A84C]/40 hover:shadow-md transition-all duration-300 cursor-default"
              >
                {/* Dept badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[11px] tracking-wide px-2.5 py-1 rounded-full font-medium"
                    style={{ ...inter, backgroundColor: colors.bg, color: colors.dot }}
                  >
                    {department}
                  </span>
                  <span className="text-xs text-gray-400" style={inter}>{experience} yrs</span>
                </div>

                {/* Avatar initial */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mb-3"
                  style={{ backgroundColor: colors.dot, fontFamily: "'Playfair Display', serif" }}
                >
                  {name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                </div>

                <h3 className="text-[#0D3B2E] font-semibold text-sm mb-1" style={inter}>{name}</h3>
                <p className="text-gray-400 text-xs mb-4" style={inter}>{subjects.join(" · ")}</p>

                {/* WAEC bar */}
                <div>
                  <div className="flex justify-between text-[10px] text-gray-400 mb-1" style={inter}>
                    <span>WAEC pass rate</span>
                    <span className="font-semibold text-[#0D3B2E]">{waecPassRate}%</span>
                  </div>
                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${waecPassRate}%` }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-[#C9A84C]"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/AboutFaith"
            className="inline-flex items-center gap-2 text-sm text-[#0D3B2E] border border-[#0D3B2E]/20 px-6 py-2.5 rounded hover:bg-[#0D3B2E] hover:text-white transition-all duration-200"
            style={inter}
          >
            Meet the full faculty
            <span className="text-[#C9A84C]">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
