import logo from "../assets/logo.png";

const quickLinks = ["About", "Services", "How We Work", "Why Us", "Contact"];

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id.toLowerCase().replace(/\s/g, "-"))?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-[#3a3a3a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="SnagSure" className="h-12 w-12 object-contain" />
            <div>
              <div className="font-bold text-lg leading-tight">SnagSure</div>
              <div className="text-blue-300 text-xs">Snag Reporting Made Easy</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Professional snag inspection and reporting services for construction projects, property handovers, and quality audits.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-sm mb-4 text-gray-200 uppercase tracking-wider">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {quickLinks.map((l) => (
              <button key={l} onClick={() => scrollTo(l)}
                className="text-gray-400 hover:text-white text-sm text-left transition w-fit">
                → {l}
              </button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-sm mb-4 text-gray-200 uppercase tracking-wider">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-gray-400">
            <a href="https://www.snagsure.in" className="hover:text-white transition">🌐 www.snagsure.in</a>
            <a href="mailto:mandwade.mahesh@gmail.com" className="hover:text-white transition">📧 mandwade.mahesh@gmail.com</a>
            <a href="tel:9665609876" className="hover:text-white transition">📱 9665609876</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} SnagSure. All rights reserved.</span>
          <span>Professional Snag Inspection & Reporting Services</span>
        </div>
      </div>
    </footer>
  );
}
