import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/AboutFaith" },
  { label: "Admissions", to: "/admission" },
  { label: "Results", to: "/results" },
  { label: "Contact", to: "/ContactFaith" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const isHome = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-[#0D3B2E] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border-2 border-[#C9A84C] flex items-center justify-center">
            <span className="text-[#C9A84C] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>FSS</span>
          </div>
          <span className="text-white font-semibold text-sm tracking-wide hidden sm:block" style={{ fontFamily: "'Inter', sans-serif" }}>
            Faith Secondary School
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                location.pathname === to
                  ? "text-[#C9A84C]"
                  : "text-white/80 hover:text-white"
              }`}
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/results"
            className="ml-2 px-4 py-1.5 bg-[#C9A84C] text-[#0D3B2E] text-sm font-semibold rounded tracking-wide hover:bg-[#E8C96A] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Check Results
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#081F18] border-t border-white/10 overflow-hidden"
          >
            <nav className="px-6 py-4 flex flex-col gap-4">
              {NAV.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className={`text-sm py-1 border-b border-white/5 ${
                    location.pathname === to ? "text-[#C9A84C]" : "text-white/80"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/results"
                className="mt-2 px-4 py-2 bg-[#C9A84C] text-[#0D3B2E] text-sm font-semibold rounded text-center"
              >
                Check Results
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
