const services = [
  { icon: "🏗️", title: "Pre-Handover Snag Inspection", desc: "Thorough inspection of every room and area before property handover to identify all defects and snags." },
  { icon: "📋", title: "Detailed Snag Reports", desc: "Comprehensive PDF reports with photos, room-wise categorization, and clear descriptions of every issue found." },
  { icon: "🔍", title: "Quality Audit & Verification", desc: "Independent quality audit to verify construction standards, materials, and workmanship compliance." },
  { icon: "🏠", title: "Room-by-Room Assessment", desc: "Systematic room-wise inspection covering Living Room, Bedrooms, Kitchen, Bathrooms, Balconies and all areas." },
  { icon: "📄", title: "Professional PDF Documentation", desc: "Professionally formatted reports with photos, numbered snags, and all details needed for rectification." },
  { icon: "✅", title: "Post-Rectification Verification", desc: "Follow-up inspection to verify all reported snags have been properly rectified by the builder." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#f4f6fb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">What We Offer</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1940] mb-4">Our Services</h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            End-to-end snag inspection and reporting services for builders, buyers, and property professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-4">
                {s.icon}
              </div>
              <h3 className="text-base font-bold text-[#0a1940] mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
