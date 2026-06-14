import { useState } from "react";

const EMPTY = { name: "", email: "", mobile: "", description: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.mobile.trim() || !form.description.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    // Send WhatsApp message
    const wpText = encodeURIComponent(
      `Hello SnagSure,\n\nName: ${form.name}\nEmail: ${form.email}\nMobile: ${form.mobile}\n\nMessage:\n${form.description}`
    );
    window.open(`https://wa.me/919322700682?text=${wpText}`, "_blank");
    setSubmitted(true);
    setForm(EMPTY);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#f4f6fb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">Get In Touch</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1940] mb-4">Contact Us</h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Ready to book an inspection or have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 mb-6 text-sm font-medium">
                ✅ Thank you! We'll get back to you shortly.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                <input
                  type="text" value={form.name} onChange={(e) => set("name", e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                <input
                  type="email" value={form.email} onChange={(e) => set("email", e.target.value)}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
                <input
                  type="tel" value={form.mobile} onChange={(e) => set("mobile", e.target.value)}
                  placeholder="Enter your mobile number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Description / Message <span className="text-red-500">*</span></label>
                <textarea
                  rows={5} value={form.description} onChange={(e) => set("description", e.target.value)}
                  placeholder="Tell us about your project, inspection requirements..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
              <button type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl text-sm transition shadow-md">
                Send Message →
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#3a3a3a] rounded-2xl p-8 text-white">
              <h3 className="text-lg font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  { icon: "🌐", label: "Website", value: "www.snagsure.in", href: "https://www.snagsure.in" },
                  { icon: "📧", label: "Email", value: "snagsure.india@gmail.com", href: "mailto:snagsure.india@gmail.com" },
                  { icon: "📱", label: "Mobile", value: "9665609876", href: "tel:9665609876" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600/30 rounded-xl flex items-center justify-center text-xl shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs mb-0.5">{c.label}</div>
                      <a href={c.href} className="text-white text-sm font-medium hover:text-blue-300 transition">
                        {c.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response time card */}
            <div className="bg-blue-600 rounded-2xl p-6 text-white">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-bold text-base mb-2">Quick Response Guaranteed</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                We respond to all enquiries within 2 hours during business hours. Book your inspection today and receive your report within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
