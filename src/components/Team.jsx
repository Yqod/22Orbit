import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Alex Schmidt",
    role: "CEO & Full-Stack Developer",
    description: "Leitet das Team und entwickelt sowohl Frontend als auch Backend mit Leidenschaft für sauberen Code.",
    skills: ["React", "Node.js", "Leadership"],
    image: "/team/alex.jpg", // Hier fügst du die Bilder ein
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    id: 2,
    name: "Sarah Weber",
    role: "Frontend Specialist",
    description: "Verwandelt Designs in perfekte, responsive Benutzeroberflächen mit einem Auge für Details.",
    skills: ["React", "TypeScript", "CSS"],
    image: "/team/sarah.jpg",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    name: "Marcus Klein",
    role: "Backend Engineer",
    description: "Sorgt für performante APIs und sichere Datenbanken - unser Experte für Server-Architektur.",
    skills: ["Node.js", "Express.js", "SQLite"],
    image: "/team/marcus.jpg",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 4,
    name: "Lisa Müller",
    role: "UI/UX Designer",
    description: "Entwirft benutzerfreundliche Interfaces und sorgt für optimale User Experience.",
    skills: ["Figma", "Design Systems", "UX Research"],
    image: "/team/lisa.jpg",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 5,
    name: "Tom Fischer",
    role: "DevOps & Security",
    description: "Kümmert sich um Deployment, Performance-Optimierung und die Sicherheit unserer Systeme.",
    skills: ["Rust", "Security", "Performance"],
    image: "/team/tom.jpg",
    color: "from-cyan-500/20 to-blue-500/20"
  }
];

const Team = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0d1321] to-[#1d2d44] flex flex-col items-center justify-center py-12 sm:py-20 px-4">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">
            Unser Team
          </h2>
          <p className="text-[#748cab] text-lg sm:text-xl md:text-2xl font-light max-w-4xl mx-auto px-4">
            Fünf Experten, eine Vision: Gemeinsam entwickeln wir digitale Lösungen, 
            die nicht nur funktionieren, sondern begeistern.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`group relative bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#748cab]/30 hover:border-[#748cab]/60 transition-all duration-300 hover:scale-105 ${
                index === 2 ? 'lg:col-start-2' : '' // Zentriert das 5. Element bei 3 Spalten
              }`}
            >
              {/* Profile Image */}
              <div className={`h-64 sm:h-72 bg-gradient-to-br ${member.color} relative overflow-hidden`}>
                {/* Placeholder für Profilbild */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#f0ebd8]/20 rounded-full flex items-center justify-center">
                    <div className="text-3xl sm:text-4xl">👤</div>
                  </div>
                </div>
                
                {/* Overlay mit Skills */}
                <div className="absolute inset-0 bg-[#0d1321]/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-center p-4">
                    <h4 className="font-bebas text-lg text-[#f0ebd8] mb-3 tracking-wide">Skills</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-[#748cab]/30 text-[#f0ebd8] text-xs rounded-full border border-[#748cab]/40"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-2 tracking-wide">
                  {member.name}
                </h3>
                <p className="text-[#748cab] font-medium mb-3 text-sm sm:text-base">
                  {member.role}
                </p>
                <p className="text-[#748cab] text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Values */}
        <div className="bg-[#3e5c76]/20 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#748cab]/30 mb-16">
          <h3 className="font-bebas text-2xl sm:text-3xl text-[#f0ebd8] mb-8 tracking-wide text-center">
            Was uns antreibt
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🔥</div>
              <h4 className="font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">Leidenschaft</h4>
              <p className="text-[#748cab] text-sm">
                Wir lieben, was wir tun und bringen diese Begeisterung in jedes Projekt ein.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">Innovation</h4>
              <p className="text-[#748cab] text-sm">
                Immer auf dem neuesten Stand der Technik und offen für neue Wege.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">Teamwork</h4>
              <p className="text-[#748cab] text-sm">
                Gemeinsam sind wir stärker - sowohl intern als auch mit unseren Kunden.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#kontakt"
            className="inline-block bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-xl tracking-widest hover:scale-105 transition-all duration-300 hover:shadow-2xl"
          >
            Lerne uns kennen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;