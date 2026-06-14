const steps = [
  {
    step: "01",
    icon: "📞",
    title: "Book an Inspection",
    desc: "Contact us with your project details. We schedule a convenient site visit and confirm all inspection requirements.",
  },
  {
    step: "02",
    icon: "🔍",
    title: "Site Inspection & Documentation",
    desc: "Our inspector performs a thorough room-by-room walkthrough, photographing and documenting every snag found.",
  },
  {
    step: "03",
    icon: "📄",
    title: "Receive Your PDF Report",
    desc: "Within 24 hours you receive a professionally formatted PDF report with photos, descriptions, and all snag details.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">Our Process</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1940] mb-4">How We Work</h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Simple, fast, and professional — from booking to report delivery in 3 easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-blue-100 z-0" />

          {steps.map((s, i) => (
            <div key={s.step} className="relative z-10 flex flex-col items-center text-center">
              {/* Step number + icon */}
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-[#3a3a3a] rounded-full flex items-center justify-center text-4xl shadow-lg">
                  {s.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0a1940] mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
