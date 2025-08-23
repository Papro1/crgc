import { useEffect, useState } from "react";

export default function Section1() {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-10 text-center lg:text-left">
        {/* Eyebrow */}
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-blue-600">
          Climat, Résilience & Gouvernance
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Venez participer au{" "}
          <span className="text-blue-600">CRGC</span> et soyez acteur de la
          transition en Afrique&nbsp;!
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl">
          Le Sommet National sur le Climat, la Résilience et la Gouvernance
          Climatique (SNCRGC) constitue une plateforme majeure de dialogue,
          d’échange et d’action autour des enjeux climatiques au Burundi. Placé
          sous le thème&nbsp;: «&nbsp;Bâtir un Burundi résilient face aux
          changements climatiques par une gouvernance inclusive, innovante et
          durable&nbsp;», ce rendez-vous inédit rassemblera des responsables
          politiques, des chercheurs, des partenaires techniques et financiers,
          la société civile, le secteur privé et la jeunesse.
          <br />
          <br />
          L’objectif est clair&nbsp;: analyser les impacts du changement
          climatique sur le Burundi, partager des expériences nationales et
          internationales, promouvoir l’innovation scientifique et technologique,
          et renforcer une gouvernance climatique intégrée et durable.
          <br />
          <br />
          Organisé par l’Université du Burundi, l’Institut Géographique du
          Burundi (IGEBU) et leurs partenaires, ce Sommet se veut plus qu’une
          rencontre technique&nbsp;: c’est un espace de co-construction et
          d’engagement collectif, visant à transformer les discours en politiques
          publiques, et les engagements en actions concrètes.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <a
            href="#register"
            className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
          >
            Register Now
          </a>
          <a
            href="#abstract"
            className="px-8 py-4 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
          >
            Submit Abstract
          </a>
        </div>

        {/* Event info */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600 mt-8">
          <span className="flex items-center gap-2">📅 October 14–16, 2025</span>
          <span className="flex items-center gap-2">
            📍 Donatus Conference Hotel, Bujumbura
          </span>
          <span className="flex items-center gap-2">
            🏛️ Climate, Resilience, Governance – Bujumbura
          </span>
        </div>

        {/* Number badges */}
        <div className="mt-10 grid grid-cols-4 sm:grid-cols-8 gap-3 justify-center lg:justify-start">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-full bg-gray-100 text-gray-700 font-bold w-12 h-12 text-sm hover:bg-blue-600 hover:text-white transition cursor-pointer shadow-sm"
              title={`0${i + 1}`}
            >
              {`0${i + 1}`}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
