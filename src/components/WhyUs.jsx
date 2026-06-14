const reasons = [
  { icon: "⚡", title: "Fast Turnaround", desc: "Receive your complete snag report within 24 hours of inspection. No delays, no waiting." },
  { icon: "📱", title: "100% Digital Reports", desc: "Professional PDF reports delivered directly to your email. No paper, no hassle." },
  { icon: "🎯", title: "Accurate & Detailed", desc: "Every snag photographed, numbered, and described clearly. Nothing is missed." },
  { icon: "🤝", title: "Trusted by Professionals", desc: "Builders, architects, buyers and engineers rely on SnagSure for unbiased reporting." },
  { icon: "🏠", title: "Room-wise Organization", desc: "Reports organized by room for easy tracking and rectification follow-up." },
  { icon: "🔒", title: "Independent & Unbiased", desc: "We work for you, not the builder. Our reports are fully independent and objective." },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-[#3a3a3a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Our Advantage</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Why Choose SnagSure?</h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            We combine professional expertise with digital efficiency to deliver the best snag reporting experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-200">
              <div className="text-3xl mb-4">{r.icon}</div>
              <h3 className="text-base font-bold text-white mb-2">{r.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Who is it for */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-white font-bold text-lg mb-6 text-center">Who Is It For?</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["🏗️ Builders & Contractors", "🏠 Home Buyers", "👷 Site Engineers", "📐 Architects", "🏢 Property Developers", "🔑 Real Estate Agents"].map((item) => (
              <span key={item}
                className="bg-blue-600/20 border border-blue-500/30 text-blue-200 text-sm px-4 py-2 rounded-full font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
