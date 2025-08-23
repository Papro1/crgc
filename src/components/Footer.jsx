import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "When and where will the conference take place?",
      a: "October 14–16, 2025 at Donatus Conference Hotel, Bujumbura.",
    },
    {
      q: "What is the deadline for abstract submission?",
      a: "Please refer to the Call for Abstracts page; typical deadlines are 6–8 weeks before the event.",
    },
    {
      q: "Is there a virtual attendance option?",
      a: "Yes, a virtual track is planned for keynotes and selected sessions.",
    },
    {
      q: "How can I become a sponsor for the conference?",
      a: "Contact the organizing committee via the contact section to request the sponsorship kit.",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-white"
              >
                {item.q}
                <span>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-gray-400">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-400 mb-6">
              Email us — Our team will respond within 24 hours.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  required
                  className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Subject *"
                  required
                  className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white"
                />
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white"
                />
              </div>
              <textarea
                placeholder="Your Question *"
                required
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Submit Question
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Contact Information
              </h4>
              <p className="text-gray-400">
                <strong>Climarys - Climate & Environment Research Hub</strong>
              </p>
              <p className="text-gray-400">
                <a href="https://www.climarys.net" className="underline">
                  www.Climarys.net
                </a>
                <br />
                <a href="mailto:info@climarys.net" className="underline">
                  info@Climarys.net
                </a>
                <br />
                +257 79 735 017
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Locate Us</h4>
              <p className="text-gray-400 mb-3">
                République de Bujumbura, 4th Floor, Premium House, Av. de la
                Revolution, Rohero 1, Bujumbura Burundi | BP 313
              </p>
              <div className="h-40 w-full rounded-lg bg-gray-700 flex items-center justify-center text-gray-400">
                🗺️ Map placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Climate Resilience Governance Conference. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
