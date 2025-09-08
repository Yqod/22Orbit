import React from "react";
import heart from "../assets/heart.svg";
import rocket from "../assets/rocket.svg";
import united from "../assets/united.svg";

const teamMembers = [
  {
    id: 1,
    name: "Georg Reinicke ",
    role: "Unser Entwickler und Teamleiter",
    description: "Leitet das Team und entwickelt mit Leidenschaft innovative Webanwendungen.",
    skills: ["React", "Node.js"],
    image: "/team/alex.jpg",
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    id: 2,
    name: "Maja Liebemann",
    role: "Frontend Specialist", 
    description: "Verwandelt Designs in perfekte, responsive Benutzeroberflächen mit einem Auge für Details.",
    skills: ["React", "TypeScript", "CSS"],
    image: "/team/sarah.jpg",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    name: "Kozato Kaizo",
    role: "Backend Engineer",
    description: "Sorgt für performante APIs und sichere Datenbanken - unser Experte für Server-Architektur.",
    skills: ["Node.js", "Express.js", "SQLite"],
    image: "/team/marcus.jpg",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 4,
    name: "Annabell Lenz",
    role: "UI/UX Designer",
    description: "Entwirft benutzerfreundliche Interfaces und sorgt für optimale User Experience.",
    skills: ["Figma", "Design Systems", "UX Research"],
    image: "/team/lisa.jpg",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 5,
    name: "Julius Behrend",
    role: "DevOps & Security",
    description: "Kümmert sich um Deployment, Performance-Optimierung und die Sicherheit unserer Systeme.",
    skills: ["Rust", "Security", "Performance"],
    image: "/team/tom.jpg",
    color: "from-cyan-500/20 to-blue-500/20"
  }
];

const Team = () => {
  return (
    <section id="team-section" className="min-h-screen bg-gradient-to-b from-[#0d1321] via-[#1d2d44] to-[#0d1321] flex flex-col items-center justify-center py-12 sm:py-20 px-4">
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

        {/* Team Grid - Alle gleiche Größe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#748cab]/30 hover:border-[#748cab]/60 transition-all duration-300 hover:scale-105"
            >
              {/* Profile Image */}
              <div className={`h-48 bg-gradient-to-br ${member.color} relative overflow-hidden`}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#f0ebd8]/20 rounded-full flex items-center justify-center">
                    <div className="text-2xl">👤</div>
                  </div>
                </div>
                
                {/* Skills Overlay */}
                <div className="absolute inset-0 bg-[#0d1321]/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-center p-3">
                    <h4 className="font-bebas text-sm text-[#f0ebd8] mb-3 tracking-wide">Skills</h4>
                    <div className="flex flex-wrap justify-center gap-1">
                      {member.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-[#748cab]/30 text-[#f0ebd8] text-xs rounded-full border border-[#748cab]/40"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
                {/* Member Info */}
                  <div className="p-4 flex flex-col justify-between min-h-[140px]">
                    <div>
                      <h3 className="font-bebas text-lg text-[#f0ebd8] mb-1 tracking-wide line-clamp-1">
                        {member.name}
                      </h3>
                      <p className="text-[#748cab] font-medium text-sm mb-2 line-clamp-2">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-[#748cab] text-xs leading-relaxed line-clamp-4">
                      {member.description}
                    </p>
                  </div>
              
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-6 border border-[#748cab]/30 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-bebas text-[#f0ebd8] mb-2">50+</div>
            <p className="text-[#748cab] text-sm">Projekte realisiert</p>
          </div>
          <div className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-6 border border-[#748cab]/30 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-bebas text-[#f0ebd8] mb-2">5</div>
            <p className="text-[#748cab] text-sm">Jahre Erfahrung</p>
          </div>
          <div className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-6 border border-[#748cab]/30 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-bebas text-[#f0ebd8] mb-2">24/7</div>
            <p className="text-[#748cab] text-sm">Support verfügbar</p>
          </div>
          <div className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-6 border border-[#748cab]/30 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-bebas text-[#f0ebd8] mb-2">100%</div>
            <p className="text-[#748cab] text-sm">Kundenzufriedenheit</p>
          </div>
        </div>

        {/* Team Values */}
        <div className="bg-[#3e5c76]/20 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#748cab]/30 mb-16">
          <h3 className="font-bebas text-2xl sm:text-3xl text-[#f0ebd8] mb-8 tracking-wide text-center">
            Was uns antreibt
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"><img src={heart} alt="Echte Leidenschaft" className="w-14 h-14 mx-auto" /></div>
              <h4 className="font-bebas text-lg text-[#f0ebd8] mb-3 tracking-wide">Leidenschaft</h4>
              <p className="text-[#748cab] leading-relaxed">
                Wir lieben, was wir tun und bringen diese Begeisterung in jedes Projekt ein.
              </p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"><img src={rocket} alt="Innovation" className="w-14 h-14 mx-auto" /></div>
              <h4 className="font-bebas text-lg text-[#f0ebd8] mb-3 tracking-wide">Innovation</h4>
              <p className="text-[#748cab] leading-relaxed">
                Immer auf dem neuesten Stand der Technik und offen für neue Wege.
              </p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"><img src={united} alt="Teamwork" className="w-14 h-14 mx-auto" /></div>
              <h4 className="font-bebas text-lg text-[#f0ebd8] mb-3 tracking-wide">Teamwork</h4>
              <p className="text-[#748cab] leading-relaxed">
                Gemeinsam sind wir stärker - sowohl intern als auch mit unseren Kunden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;