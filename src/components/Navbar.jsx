import { useState } from "react";
import logo from "../assets/logo.png";

const links = ["About", "Services", "How We Work", "Why Us", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase().replace(/\s/g, "-"))?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#3a3a3a] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="SnagSure" className="h-10 w-10 object-contain" />
          <div>
            <div className="text-white font-bold text-lg leading-tight">SnagSure</div>
            <div className="text-blue-300 text-[10px] leading-tight">Snag Reporting Made Easy</div>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)}
              className="text-gray-300 hover:text-white text-sm font-medium transition">
              {l}
            </button>
          ))}
          <a href="mailto:mandwade.mahesh@gmail.com"
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition">
            Get In Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#4a4a4a] px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)}
              className="text-gray-300 hover:text-white text-sm font-medium text-left transition">
              {l}
            </button>
          ))}
          <a href="mailto:mandwade.mahesh@gmail.com"
            className="bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-lg text-center">
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  );
}
