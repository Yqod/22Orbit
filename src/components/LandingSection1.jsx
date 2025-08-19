import React from "react";

const features = [
  {
    icon: "⚡",
    title: "Schnell & Responsiv",
    desc: "Deine Website lädt blitzschnell und sieht auf jedem Gerät perfekt aus.",
  },
  {
    icon: "🛒",
    title: "Von Landingpage bis Shop",
    desc: "Von einfachen Landingpages bis zur Individuellen Software – alles aus einer Hand.",
  },
  {
    icon: "🎨",
    title: "Design nach Maß",
    desc: "Modernes, einzigartiges Design, das zu deinem Unternehmen passt.",
  },
];

function LandingSection1() {
  return (
    <section id="section1" className="min-h-screen bg-gradient-to-b from-[#0d1321] to-[#1d2d44] flex flex-col items-center justify-center py-8 sm:py-28 px-4">
      <div className="w-full max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">
          Unsere Stärken
        </h2>
        <p className="text-[#748cab] text-lg sm:text-xl md:text-2xl font-light mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
          Wir verbinden Kreativität mit technischer Exzellenz und schaffen digitale Lösungen, 
          die nicht nur gut aussehen, sondern auch perfekt funktionieren.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#748cab]/30 hover:border-[#748cab]/60 hover:bg-[#3e5c76]/30 transition-all duration-300 hover:scale-105 flex flex-col items-center text-center"
            >
              <div className="text-4xl sm:text-5xl mb-4">{feature.icon}</div>
              <h3 className="font-bebas text-lg sm:text-xl text-[#f0ebd8] mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-[#748cab] text-sm sm:text-base leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

export default LandingSection1;