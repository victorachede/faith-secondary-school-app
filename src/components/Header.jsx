import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const NAV = [
  { label: "About", to: "/AboutFaith" },
  { label: "Admissions", to: "/admission" },
  { label: "Academics", to: "/AboutFaith" },
  { label: "Student Life", to: "/AboutFaith" },
  { label: "Contact", to: "/ContactFaith" },
];

const sans = { fontFamily: "'DM Sans', sans-serif" };

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solidBg = scrolled || !isHome;

  return (
    <header
      style={sans}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solidBg ? "bg-white border-b border-gray-100 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 xl:px-10 h-[68px] flex items-center justify-between gap-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold tracking-wider ${solidBg ? "bg-[#0a1628] text-white" : "bg-white text-[#0a1628]"}`}>
            FSS
          </div>
          <span className={`font-semibold text-[15px] hidden sm:block ${solidBg ? "text-[#0a1628]" : "text-white"}`}>
            Faith Secondary School
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className={`text-[14px] font-medium transition-colors hover:opacity-100 ${
                solidBg ? "text-gray-600 hover:text-[#0a1628]" : "text-white/80 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            to="/results"
            className={`text-[13px] font-medium px-4 py-2 rounded transition-colors ${
              solidBg
                ? "text-[#0a1628] hover:bg-gray-100"
                : "text-white/80 hover:text-white"
            }`}
          >
            Check Results
          </Link>
          <Link
            to="/admission"
            className="text-[13px] font-semibold px-5 py-2 rounded bg-[#c8102e] text-white hover:bg-[#a50d26] transition-colors"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          className={`md:hidden p-1 ${solidBg ? "text-[#0a1628]" : "text-white"}`}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-1"
          >
            {NAV.map(({ label, to }) => (
              <Link key={label} to={to} className="text-[15px] text-gray-700 py-2.5 border-b border-gray-50 font-medium">
                {label}
              </Link>
            ))}
            <div className="flex gap-3 pt-4">
              <Link to="/results" className="flex-1 text-center text-[13px] font-medium py-2.5 border border-gray-200 rounded text-gray-700">
                Check Results
              </Link>
              <Link to="/admission" className="flex-1 text-center text-[13px] font-semibold py-2.5 rounded bg-[#c8102e] text-white">
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
