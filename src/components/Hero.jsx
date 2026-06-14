import logo from "../assets/logo.png";

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="bg-white min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block bg-blue-600/10 border border-blue-500/30 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Professional Inspection Services
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a1940] leading-tight mb-6">
            Snag Inspection &<br />
            <span className="text-blue-600">Reporting Made</span><br />
            Easy
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-xl leading-relaxed">
            SnagSure provides professional room-by-room snag inspection and detailed PDF reporting for construction projects, handovers, and quality audits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={() => scrollTo("contact")}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition text-base shadow-lg shadow-blue-900/40">
              Get Started →
            </button>
            <button onClick={() => scrollTo("services")}
              className="border border-gray-300 hover:border-gray-600 text-gray-600 hover:text-gray-900 font-semibold px-8 py-3.5 rounded-xl transition text-base">
              Our Services
            </button>
          </div>
          {/* Stats */}
          <div className="flex gap-8 mt-12 justify-center md:justify-start">
            {[["500+", "Projects Completed"], ["100%", "Digital Reports"], ["24hr", "Turnaround Time"]].map(([num, label]) => (
              <div key={label} className="text-center md:text-left">
                <div className="text-2xl font-extrabold text-[#0a1940]">{num}</div>
                <div className="text-gray-500 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo card */}
        <div className="flex-shrink-0">
          <div className="bg-gray-100 border border-gray-200 rounded-3xl p-6 sm:p-10">
            <img src={logo} alt="SnagSure" className="w-36 h-36 sm:w-56 sm:h-56 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
