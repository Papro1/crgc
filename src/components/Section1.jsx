import { useState } from "react";
// src/components/LeavesBackground.jsx
import { motion } from "framer-motion";


export default function Section1() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-green-900 via-blue-900 to-gray-900 text-white py-20 overflow-hidden">
      {/* Animated falling leaves */}
      <LeavesBackground />

      {/* Decorative plant-like shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-72 h-72 opacity-10 text-green-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c2 5-2 8-2 12s4 7 2 12c-2-5-6-8-6-12s4-7 6-12z" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-96 h-96 opacity-10 text-blue-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c2 5-2 8-2 12s4 7 2 12c-2-5-6-8-6-12s4-7 6-12z" />
        </svg>
      </div>

      {/* Your existing content */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 space-y-10 text-center lg:text-left z-10">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Venez participer au{" "}
          <span className="text-green-400">CRGC</span> et soyez acteur de la
          transition en Afrique&nbsp;!
        </h1>

        {/* Description with truncation */}
        <div className="text-gray-200 text-base md:text-lg leading-relaxed max-w-4xl mx-auto lg:mx-0">
          <p className={!expanded ? "line-clamp-5 md:line-clamp-none" : ""}>
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
            {/* --- content stays the same --- */}
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 text-green-400 font-semibold hover:text-green-300 transition md:hidden"
          >
            {expanded ? "Lire moins" : "Lire plus"}
          </button>
        </div>

        {/* Buttons + event info + badges remain unchanged */}
      </div>
    </section>
  );
}


const leaves = Array.from({ length: 30 });

export const LeavesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {leaves.map((_, i) => {
        const randomX = Math.random() * 100; // % horizontal start
        const duration = 12 + Math.random() * 10; // 12–22s fall
        const delay = Math.random() * 10; // stagger
        const rotate = Math.random() * 360; // random spin start

        return (
          <motion.svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="green"
            className="absolute w-6 h-6 text-green-400 opacity-60"
            style={{
              left: `${randomX}%`,
              top: "-10%",
            }}
            initial={{ y: "-10%", rotate }}
            animate={{
              y: "110vh", // fall off screen
              rotate: rotate + 360,
              x: [0, 10, -10, 0], // sway left/right
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <path d="M12 2c2 5-2 8-2 12s4 7 2 12c-2-5-6-8-6-12s4-7 6-12z" />
          </motion.svg>
        );
      })}
    </div>
  );
}
