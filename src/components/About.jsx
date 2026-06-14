import logo from "../assets/logo.png";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#3a3a3a]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Logo side */}
        <div className="flex-shrink-0">
          <div className="bg-[#4a4a4a] rounded-3xl p-6 sm:p-10 border border-gray-600">
            <img src={logo} alt="SnagSure" className="w-36 h-36 sm:w-52 sm:h-52 object-contain" />
          </div>
        </div>

        {/* Text side */}
        <div className="flex-1">
          <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">About Us</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
            Who We Are
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-5">
            SnagSure is a professional snag inspection and reporting firm dedicated to ensuring construction quality at every stage. We specialize in detailed room-by-room inspections, documenting every defect, snag, and rectification requirement with precision.
          </p>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            Our mission is to bridge the gap between builders and buyers by delivering transparent, accurate, and professional snag reports that protect your investment and ensure quality standards are met.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              ["🎯", "Precision Reporting"],
              ["🤝", "Trusted by Professionals"],
              ["📱", "100% Digital Process"],
              ["⚡", "Fast Turnaround"],
            ].map(([icon, text]) => (
              <div key={text} className="flex items-center gap-3 bg-[#555555] border border-gray-600 rounded-xl px-4 py-3">
                <span className="text-xl">{icon}</span>
                <span className="text-sm font-semibold text-gray-200">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
