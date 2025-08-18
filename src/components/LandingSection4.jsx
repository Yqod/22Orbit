import React, { useState } from "react";

// Beispiel für ein Bildimport


const portfolioProjects = [
  {
    id: 1,
    title: "E-Commerce für Kristallhändler",
    category: "Online Shop",
    description: "Moderner Online-Shop mit Payment-Integration und Admin-Dashboard",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "Stripe", "SQLite", "JWT"],
    image: "/public/koenigskristall.png", // Hier fügst du deine Screenshots ein
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 2,
    title: "Restaurant Landing Page",
    category: "Landing Page",
    description: "Responsive Landing Page mit Reservierungssystem und interaktiver Karte",
    technologies: ["React", "TypeScript", "Express.js"],
    image: "/screenshots/project2.jpg", // Hier fügst du deine Screenshots ein
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    category: "Web App",
    description: "Analytics Dashboard mit Echtzeit-Daten und Benutzer-Management",
    technologies: ["React", "Node.js", "JWT", "Sequelize"],
    image: "/screenshots/project3.jpg", // Hier fügst du deine Screenshots ein
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Landing Page",
    description: "Kreative Portfolio-Website für einen Fotografen mit Galerie",
    technologies: ["React", "CSS", "JavaScript"],
    image: "/screenshots/project4.jpg", // Hier fügst du deine Screenshots ein
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 5,
    title: "Booking System",
    category: "Web App",
    description: "Terminbuchungssystem für Dienstleister mit Kalender-Integration",
    technologies: ["React", "Node.js", "SQLite", "Express.js"],
    image: "/screenshots/project5.jpg", // Hier fügst du deine Screenshots ein
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    id: 6,
    title: "Inventory Management",
    category: "Custom Software",
    description: "Maßgeschneiderte Lagerverwaltung mit Barcode-Scanner Integration",
    technologies: ["React", "Rust", "TypeScript", "SQLite"],
    image: "/screenshots/project6.jpg", // Hier fügst du deine Screenshots ein
    color: "from-indigo-500/20 to-purple-500/20"
  }
];

const categories = ["Alle", "Landing Page", "Online Shop", "Web App", "Custom Software"];

const LandingSection4 = () => {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeCategory === "Alle" 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio-section" className="min-h-screen bg-gradient-to-b from-[#1d2d44] to-[#0d1321] flex flex-col items-center justify-center py-12 sm:py-20 px-4">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">
            Portfolio & Referenzen
          </h2>
          <p className="text-[#748cab] text-lg sm:text-xl md:text-2xl font-light max-w-4xl mx-auto px-4">
            Ein Einblick in unsere Arbeit – von eleganten Landing Pages bis zu komplexen Web-Anwendungen. 
            Jedes Projekt erzählt eine eigene Erfolgsgeschichte.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bebas text-sm sm:text-base tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] shadow-lg"
                  : "bg-[#3e5c76]/20 text-[#748cab] hover:bg-[#3e5c76]/40 hover:text-[#f0ebd8]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#748cab]/30 hover:border-[#748cab]/60 transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
             {/* Project Image */}
                    <div className={`h-48 sm:h-56 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                      <img
                        src={project.image.startsWith("/") ? project.image : project.image.replace("../public", "")}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay bei Hover */}
                      <div className={`absolute inset-0 bg-[#0d1321]/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                        hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <div className="text-center p-4">
                          <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {project.technologies.map((tech, index) => (
                              <span 
                                key={index}
                                className="px-2 py-1 bg-[#748cab]/20 text-[#f0ebd8] text-xs rounded-full border border-[#748cab]/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                  </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-[#748cab]/20 text-[#748cab] text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-bebas text-lg sm:text-xl text-[#f0ebd8] mb-2 tracking-wide">
                  {project.title}
                </h3>
                <p className="text-[#748cab] text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        

        {/* CTA */}
        <div className="text-center">
          <a
            href="#kontakt"
            className="inline-block bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-xl tracking-widest hover:scale-105 transition-all duration-300 hover:shadow-2xl"
          >
            Dein Projekt starten
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingSection4;