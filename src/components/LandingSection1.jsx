import React from "react";

const features = [
  {
    icon: "⚡",
    title: "Schnell & Responsiv",
    desc: "Deine Website lädt blitzschnell und sieht auf jedem Gerät perfekt aus.",
    color: "#3e5c76",
  },
  {
    icon: "🛒",
    title: "Shop & Plugins",
    desc: "Von einfachen Plugins bis zum individuellen Shop – alles aus einer Hand.",
    color: "#748cab",
  },
  {
    icon: "🎨",
    title: "Design nach Maß",
    desc: "Modernes, einzigartiges Design, das zu deinem Unternehmen passt.",
    color: "#f0ebd8",
  },
];

function LandingSection1() {
  return (
    <div className="bg-[#0d1321] min-h-screen w-full flex flex-col items-center justify-start">
      
      {/* Features Section */}
      <section id="features" className="w-full py-20 px-4 flex flex-col items-center bg-[#1d2d44]/80 backdrop-blur-md">
        <h2 className="font-bebas text-4xl sm:text-5xl text-[#f0ebd8] mb-12 tracking-widest drop-shadow-lg text-center">
          Unsere Stärken
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          {features.map((f, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 shadow-xl flex flex-col items-center hover:scale-105 transition-transform duration-300`}
              style={{ background: f.color }}
            >
              <span className="text-4xl mb-4">{f.icon}</span>
              <h3 className="font-bebas text-xl text-[#1d2d44] mb-2 tracking-wide">{f.title}</h3>
              <p className="text-[#1d2d44] text-center opacity-80 text-base">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LandingSection1;