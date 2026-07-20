import { motion } from "framer-motion";
import { staffList } from "../data/StaffData";
import { Link } from "react-router-dom";

const sans = { fontFamily: "'DM Sans', sans-serif" };
const display = { fontFamily: "'DM Serif Display', Georgia, serif" };

const DEPT_ACCENT = {
  Science: "#0a1628",
  Arts: "#c8102e",
  Commercial: "#4b5563",
};

export default function Staff() {
  const featured = staffList.slice(0, 6);

  return (
    <section className="bg-[#faf9f7] py-24 px-6 xl:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#c8102e] text-xs font-semibold tracking-widest uppercase mb-4" style={sans}>Our Faculty</p>
            <h2 className="text-[#0a1628] text-3xl sm:text-4xl font-normal leading-tight" style={display}>
              Teachers who<br />know your child
            </h2>
          </div>
          <Link to="/AboutFaith" style={sans} className="text-gray-400 text-sm font-medium hover:text-[#0a1628] transition-colors shrink-0">
            View all faculty →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(({ name, department, subjects, experience, waecPassRate }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow"
              style={sans}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: DEPT_ACCENT[department] || "#0a1628", fontFamily: "'DM Serif Display', serif" }}
                >
                  {name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                </div>
                <span className="text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">{department}</span>
              </div>

              <h3 className="text-[#0a1628] font-semibold text-[15px] mb-1">{name}</h3>
              <p className="text-gray-400 text-[13px] mb-5">{subjects.slice(0, 2).join(", ")}</p>

              <div className="flex items-center justify-between text-[12px] text-gray-400 mb-2">
                <span>{experience} yrs experience</span>
                <span className="font-semibold text-[#0a1628]">{waecPassRate}%</span>
              </div>
              <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-[#c8102e]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${waecPassRate}%` }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
              <p className="text-[11px] text-gray-300 mt-1">WAEC pass rate</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
