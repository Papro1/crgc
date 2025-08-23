// src/components/Section3.jsx
import React from "react";

export default function Section3() {
  const logos = [
    {
      src: "https://placehold.co/220x60?text=Climarys+Logo",
      alt: "Logo UB",
    },
    {
      src: "https://placehold.co/200x60?text=CERD+Logo",
      alt: "Logo IGEBU",
    },
    {
      src: "https://placehold.co/200x60?text=MENSUR+Logo",
      alt: "Logo Climarys",
    },
  ];

  return (
    <section className="py-12 bg-gray-50" aria-labelledby="orgs">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow title */}
        <h2
          id="orgs"
          className="text-base font-semibold text-blue-600 uppercase tracking-wide"
        >
          Organized by
        </h2>

        {/* Logos grid */}
        <div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center"
          role="list"
          aria-label="Organizers logos"
        >
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Decorative line */}
        <div className="mt-12 h-1 w-24 bg-blue-600 mx-auto rounded-full" aria-hidden="true"></div>
      </div>
    </section>
  );
}
