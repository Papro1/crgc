// src/components/Section2.jsx
export default function Section2() {
  return (
    <section className="py-16 bg-gray-100" aria-labelledby="teaser">
      <div className="max-w-4xl mx-auto px-6 space-y-10">

        {/* Text Block */}
        <div className="text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            id="teaser"
          >
            Discover what awaits you at CRGC 2025
          </h2>
          <p className="mt-3 text-gray-700 text-lg">
            Keynotes, hands-on workshops, posters, and collaborations that accelerate 
            climate action, resilience, and governance.
          </p>
        </div>

        {/* Text + Image */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 md:p-8">
          
          {/* Text */}
          <div className="hidden md:block md:w-1/2">
            <h3 className="text-xl font-bold mb-3">
              Cut a tree, plant trees
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Every tree cut should be replaced. Trees clean the air, provide shade, shelter animals, and fight climate change. For every tree removed, plant at least three to keep nature thriving.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/tree.jpg"
              alt="Decorative pattern"
              className="rounded object-cover md:w-60 lg:w-72 h-48 md:h-60 lg:h-72"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
