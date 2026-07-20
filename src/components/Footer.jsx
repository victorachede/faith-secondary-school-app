import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const playfair = { fontFamily: "'Playfair Display', Georgia, serif" };
const inter = { fontFamily: "'Inter', sans-serif" };

export default function Footer() {
  return (
    <footer className="bg-[#081F18] text-white">
      {/* CTA band */}
      <div className="border-b border-white/10 py-12 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1" style={playfair}>
              Ready to join Faith?
            </h3>
            <p className="text-white/50 text-sm" style={inter}>Applications are open for the next academic session.</p>
          </div>
          <Link
            to="/admission"
            className="shrink-0 px-7 py-3 bg-[#C9A84C] text-[#0D3B2E] text-sm font-semibold rounded hover:bg-[#E8C96A] transition-colors"
            style={inter}
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full border border-[#C9A84C] flex items-center justify-center">
              <span className="text-[#C9A84C] text-[10px] font-bold tracking-widest" style={playfair}>FSS</span>
            </div>
            <span className="text-white font-semibold text-sm" style={inter}>Faith Secondary</span>
          </div>
          <p className="text-white/40 text-xs leading-relaxed mb-6" style={inter}>
            Lux Mentis, Lux Orbis — The Light of the Mind is the Light of the World.
          </p>
          <div className="flex gap-3">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <a key={i} href="#" className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
                <Icon size={11} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white/60 text-[10px] tracking-[0.2em] uppercase mb-4" style={inter}>Explore</h4>
          <ul className="space-y-2.5">
            {[["Home", "/"], ["About", "/AboutFaith"], ["Admissions", "/admission"], ["Contact", "/ContactFaith"]].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="text-white/50 hover:text-white text-sm transition-colors" style={inter}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Academics */}
        <div>
          <h4 className="text-white/60 text-[10px] tracking-[0.2em] uppercase mb-4" style={inter}>Academics</h4>
          <ul className="space-y-2.5">
            {[["Results Portal", "/results"], ["Staff Directory", "/AboutFaith"], ["Register", "/register"]].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="text-white/50 hover:text-white text-sm transition-colors" style={inter}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white/60 text-[10px] tracking-[0.2em] uppercase mb-4" style={inter}>Contact</h4>
          <ul className="space-y-2.5 text-white/50 text-sm" style={inter}>
            <li>+234 123 456 7890</li>
            <li>info@faith.edu.ng</li>
            <li className="leading-relaxed">KM 7 Gboko Road,<br />Makurdi, Benue State</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-2 text-white/25 text-xs" style={inter}>
          <span>© {new Date().getFullYear()} Faith Secondary School. All rights reserved.</span>
          <span>Built by Black Sheep Co</span>
        </div>
      </div>
    </footer>
  );
}
