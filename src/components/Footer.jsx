import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const sans = { fontFamily: "'DM Sans', sans-serif" };
const display = { fontFamily: "'DM Serif Display', Georgia, serif" };

const LINKS = {
  School: [["About", "/AboutFaith"], ["Admissions", "/admission"], ["Contact", "/ContactFaith"]],
  Academics: [["Results Portal", "/results"], ["Register", "/register"]],
};

export default function Footer() {
  return (
    <footer style={sans} className="bg-[#0a1628] text-white">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 xl:px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-normal text-white mb-2" style={display}>
              Ready to be part of<br />
              <em>the Faith family?</em>
            </h3>
            <p className="text-white/40 text-sm">Applications open for the next academic session.</p>
          </div>
          <Link
            to="/admission"
            className="shrink-0 px-8 py-3.5 bg-[#c8102e] text-white text-[14px] font-semibold rounded hover:bg-[#a50d26] transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 xl:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-[#0a1628] text-xs font-bold tracking-wider">FSS</div>
            <span className="text-white font-medium text-[14px]">Faith Secondary</span>
          </div>
          <p className="text-white/35 text-sm leading-relaxed mb-6">
            Lux Mentis, Lux Orbis<br />
            Makurdi, Benue State, Nigeria
          </p>
          <div className="flex gap-3">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors">
                <Icon size={12} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(LINKS).map(([title, items]) => (
          <div key={title}>
            <h4 className="text-[11px] text-white/30 tracking-widest uppercase font-semibold mb-5">{title}</h4>
            <ul className="space-y-3">
              {items.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-white/50 text-sm hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4 className="text-[11px] text-white/30 tracking-widest uppercase font-semibold mb-5">Contact</h4>
          <ul className="space-y-3 text-white/50 text-sm">
            <li>+234 123 456 7890</li>
            <li>info@faith.edu.ng</li>
            <li className="leading-relaxed">KM 7 Gboko Road,<br />Makurdi, Benue State</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 xl:px-10 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-2 text-white/20 text-xs">
          <span>© {new Date().getFullYear()} Faith Secondary School. All rights reserved.</span>
          <span>Built by Black Sheep Co</span>
        </div>
      </div>
    </footer>
  );
}
