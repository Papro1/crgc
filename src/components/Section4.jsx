// src/components/Section4.jsx
import React from "react";

export default function Section4() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-20">
        {/* 1. Overview */}
        <div className="bg-white border  p-8">
          <h2
            className="text-3xl font-bold text-gray-900 mb-4"
            id="overview"
          >
            Climate, Resilience, Governance
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The Climate Change Research and Resilience Conference (CRGC) brings
            together experts from around the world to discuss the latest
            advancements in climate and environmental research. This event,
            held in Bujumbura, offers a unique platform to share knowledge,
            present innovations, and strengthen collaborations among various
            stakeholders in the field. Participants will have the opportunity to
            explore diverse themes ranging from modeling extreme climate events
            to green energy production and the impact of environmental
            contaminants on health. Join us to contribute to building a
            sustainable and resilient future in the face of climate challenges.
          </p>
        </div>

        {/* 2. Dates & Venue */}
        <div
          className="bg-white   p-8 grid md:grid-cols-2 gap-6 items-center"
          aria-labelledby="whenwhere"
        >
          <div>
            <p
              id="whenwhere"
              className="uppercase text-sm font-semibold text-blue-600 mb-2"
            >
              Dates & Venue
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              October 14–16, 2025 • Donatus Conference Hotel, Bujumbura
            </h2>
            <p className="text-gray-600 mb-6">
              Hosted by UB, IGEBU in collaboration with Climarys – Bujumbura.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#register"
                className="px-7 py-3  bg-blue-600 text-white border hover:bg-white border-blue-600 hover:text-blue-600"
              >
                Register Now
              </a>
              <a
                href="#abstract"
                className="px-5 py-3 border border-blue-600 hover:text-white text-blue-600 hover:bg-blue-600 hover:bg-blue-50"
              >
                Submit Abstract
              </a>
            </div>
          </div>
        </div>

        {/* 3. Call for Abstracts */}
        <div
          id="abstract"
          className="bg-white border p-8 grid md:grid-cols-2 gap-8"
          aria-labelledby="cfa"
        >
          <div>
            <p
              id="cfa"
              className="uppercase text-sm font-semibold text-blue-600 mb-2"
            >
              Invitation to Submit Abstract for CRGC Conference
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Call for Abstracts
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The Climate Change Research and Resilience Conference (CRGC)
              gathers experts worldwide to discuss the latest advances in
              climate and environmental research. Held in Bujumbura, the
              conference provides a platform to share knowledge, present
              innovations, and strengthen collaboration among stakeholders.
              Participants will explore themes including extreme climate event
              modeling, green energy solutions, and environmental health
              impacts. Join us to contribute to building a sustainable, resilient
              future in the face of climate challenges.
            </p>
          </div>

          <div>
            <strong className="block text-lg font-semibold text-gray-900 mb-4">
              Themes
            </strong>
            <ul className="space-y-2 text-gray-700 list-disc list-inside mb-6">
              <li>Climate Change and Monitoring</li>
              <li>Migration, Food and Water system</li>
              <li>Health and Biodiversity</li>
              <li>Water Resources and the Global Climate Crisis</li>
              <li>Soil, Land & Climate Change</li>
              <li>Youth Champion – A Catalyst for Climate Change Action</li>
            </ul>
            <a
              href="#abstract-form"
              className="px-5 py-3 bg-blue-600 text-white hover:bg-blue-700"
            >
              Submit Abstract
            </a>
          </div>
        </div>

        {/* 4. Objectives & Stats */}
        <div
          className="bg-white grid md:grid-cols-2 gap-8"
          aria-labelledby="objectives"
        >
          <div className="p-6">
            <p
              id="objectives"
              className="uppercase text-sm font-semibold text-blue-600 mb-2"
            >
              Our Vision for Impact
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Conference Objectives
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>
                Analyser et partager les connaissances sur les impacts
                différenciés du changement climatique au Burundi et dans la
                région, afin d’orienter les politiques et actions adaptées.
              </li>
              <li>
                Promouvoir l’intégration de la résilience climatique dans la
                planification territoriale, les politiques publiques et les
                stratégies sectorielles.
              </li>
              <li>
                Mettre en valeur l’innovation scientifique et technologique,
                incluant la modélisation, la prévision climatique et les
                solutions d’adaptation basées sur les données.
              </li>
              <li>
                Renforcer la gouvernance climatique et le financement vert, en
                favorisant la mobilisation de ressources et l’efficacité des
                mécanismes institutionnels.
              </li>
              <li>
                Développer des partenariats stratégiques entre acteurs publics,
                privés, et société civile pour améliorer la résilience aux
                changements climatiques.
              </li>
              <li>
                Encourager l’engagement de la jeunesse et de la société civile,
                en promouvant leur rôle actif dans les initiatives de résilience
                et d’adaptation au climat.
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 p-6 items-center text-center">
            <div className="bg-blue-50 p-6">
              <div className="text-3xl font-bold text-blue-600">90+</div>
              <div className="text-gray-700">Speakers</div>
            </div>
            <div className="bg-blue-50 p-6">
              <div className="text-3xl font-bold text-blue-600">6</div>
              <div className="text-gray-700">Sponsors</div>
            </div>
            <div className="bg-blue-50 p-6">
              <div className="text-3xl font-bold text-blue-600">5</div>
              <div className="text-gray-700">Workshops</div>
            </div>
            <div className="bg-blue-50 p-6">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-700">Participants</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
