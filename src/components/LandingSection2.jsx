import React from "react";

const reasons = [
  {
    icon: "💡",
    title: "Leidenschaft für Code",
    description: "Software-Entwicklung ist unsere Passion. Jede Zeile Code wird mit Herzblut geschrieben."
  },
  {
    icon: "🚀",
    title: "Innovation im Fokus",
    description: "Wir setzen auf modernste Technologien und kreative Ansätze für deine Projekte."
  },
  {
    icon: "🎯",
    title: "Maßgeschneidert",
    description: "Individuelle Lösungen, die perfekt zu deinem Business und deinen Zielen passen."
  },
  {
    icon: "⚡",
    title: "Schnell & Zuverlässig",
    description: "Effiziente Entwicklung ohne Kompromisse bei Qualität und Performance."
  },
  {
    icon: "🤝",
    title: "Partnerschaftlich",
    description: "Wir arbeiten eng mit dir zusammen – von der Idee bis zum erfolgreichen Launch."
  },
  {
    icon: "🔧",
    title: "Full-Service",
    description: "Alles aus einer Hand: Design, Development, Hosting und Support."
  }
];

const LandingSection2 = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1d2d44] to-[#0d1321] flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">
          Warum 22Orbit?
        </h2>
        <p className="text-[#748cab] text-xl sm:text-2xl font-light mb-16 max-w-3xl mx-auto">
          Software-Entwicklung ist mehr als nur Code – es ist unsere Leidenschaft. 
          Wir brennen für innovative Lösungen und digitale Erlebnisse, die begeistern.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-[#3e5c76]/30 backdrop-blur-sm rounded-2xl p-8 border border-[#748cab]/20 hover:border-[#748cab]/50 hover:bg-[#3e5c76]/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="font-bebas text-xl text-[#f0ebd8] mb-3 tracking-wide">
                {reason.title}
              </h3>
              <p className="text-[#748cab] text-base leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <a
            href="#kontakt"
            className="inline-block bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-xl px-12 py-5 rounded-full shadow-xl tracking-widest hover:scale-105 transition-all duration-300 hover:shadow-2xl"
          >
            Lass uns sprechen
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingSection2;