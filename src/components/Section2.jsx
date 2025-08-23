// src/components/Section2.jsx
export default function Section2() {
  return (
    <section className="py-16 bg-white" aria-labelledby="teaser">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    {/* Text Block */}
    <div className="text-center mb-12">
      <p className="text-blue-600 uppercase tracking-wide font-semibold" id="teaser">
        Teaser
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Discover what awaits you at CRGC 2025
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Keynotes, hands-on workshops, posters, and collaborations that accelerate 
        climate action, resilience and governance.
      </p>
    </div>

    {/* Grid for Video + Image */}
    <div className="grid md:grid-cols-2 gap-8">
      {/* Video Teaser */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-64 md:h-80 lg:h-96"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video teaser"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Decorative Image */}
      <div className="flex items-center justify-center">
        <img
          src="/images/decorative-pattern.png"
          alt="Decorative pattern"
          className="rounded-2xl shadow-lg object-cover w-full h-64 md:h-80 lg:h-96"
        />
      </div>
    </div>
  </div>
</section>

  );
}
