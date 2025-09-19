import { useLottie } from "lottie-react";
import { Link } from "react-router-dom";
import lottiRocketDisplay22Orbit from "../assets/lotti/lottiRocketDisplay22Orbit.json";
import lottiSoftware from "../assets/lotti/lottiSoftware.json";
import lottiSocialMedia from "../assets/lotti/lottiSocialMedia.json"; 

const services = [
  {
    title: "Webseiten",
    lottie: "rocket",
    angebote: ["Landingpages", "Websites", "Unternehmensseiten", "Online-Shops"],
    description: (
      <>
        Individuell  – modern und responsiv.<br />
        Dein Webauftritt wird zum digitalen Erlebnis, maßgeschneidert für deine Zielgruppe.
      </>
    ),
  },
  {
    title: "Individuelle Software",
    lottie: "software",
    angebote: ["Webanwendungen", "Schnittstellen", "Tools", "Automatisierungen", "AI-Lösungen"],
    description: (
      <>
        Maßgeschneidert  – exakt auf deine Anforderungen zugeschnitten.<br />
        Wir lösen komplexe Aufgaben mit smarten Lösungen, die wirklich zu dir passen.
      </>
    ),
  },
  {
    title: "Social Media Marketing",
    lottie: "socialMedia",
    angebote: ["Strategie", "Content", "Kampagnen", "Wachstum"],
    description: (
      <>
        
        Wir bringen deine Marke auf die relevanten Plattformen und sorgen für Reichweite, Interaktion und Wachstum.
      </>
    ),
  },
];

const lottieMap = {
  rocket: lottiRocketDisplay22Orbit,
  software: lottiSoftware,
  socialMedia: lottiSocialMedia,
 
};

const lottieStyle = { width: 220, height: 220 };

function ServicesSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0d1321] via-[#1d2d44] to-[#0d1321] flex flex-col items-center justify-center py-16 sm:py-24 px-4">
      <div className="w-full max-w-7xl mx-auto my-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">
            Unsere Leistungen
          </h2>
          <p className="text-[#f0ebd8] text-lg sm:text-xl md:text-2xl font-light max-w-4xl mx-auto px-4">
            Wir bieten dir alles, was du für deinen digitalen Erfolg brauchst – individuell, kreativ und immer direkt am Code.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {services.map((service, idx) => {
            const { View } = useLottie({
              animationData: lottieMap[service.lottie],
              loop: true,
              autoplay: true,
              style: lottieStyle,
            });
            return (
              <div key={service.title} className="relative bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#748cab]/30 hover:border-[#748cab]/60 transition-all duration-300 hover:scale-105 text-center shadow-xl max-w-xs w-full mx-auto flex flex-col items-center">
                <div className="mb-4">{View}</div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-[#f0ebd8] mb-3 tracking-wide">
                  {service.title}
                </h3>
                <div className="flex flex-col items-start w-full mb-2">
                    {Array.isArray(service.angebote)
                        ? service.angebote.map((wort, i) => (
                            <span key={wort} className="flex items-center mb-1">
                            <span className="text-[#748cab] font-bold mr-2">•</span>
                            <span className="text-[#748cab] text-base sm:text-xl text-[#f0ebd8] font-light">{wort}</span>
                            </span>
                        ))
                        : <span className="text-[#f0ebd8] text-base sm:text-lg font-light">{service.angebote}</span>
                    }
                    </div>
                <p className="text-[#748cab] text-base font-light mb-4 leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Technologien */}
        <div className="max-w-3xl mx-auto bg-[#3e5c76]/20 backdrop-blur-md rounded-2xl p-10 border border-[#748cab]/20 mb-16 flex flex-col items-center shadow-xl">
          <h3 className="font-bebas text-3xl sm:text-4xl text-[#f0ebd8] mb-6 tracking-wide text-center">
            Unsere Technologien
          </h3>
          <p className="text-[#748cab] text-lg font-light mb-8 leading-relaxed text-center max-w-2xl">
            Wir setzen auf moderne, bewährte Technologien und entwickeln alles direkt am Code – <span className="font-semibold text-[#f0ebd8]">Keine Baukästen</span>. Jedes Projekt ist ein Unikat, das wir mit Leidenschaft und Know-how umsetzen.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full justify-items-center mb-4">
            {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Python", "Ruby", "Node.js", "Express.js", "SQL"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-[#748cab]/20 text-[#f0ebd8] text-base rounded-full font-bebas tracking-wide shadow hover:bg-[#748cab]/40 transition"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-2 text-center text-[#748cab] text-sm">
            <span className="font-semibold text-[#f0ebd8]">100% individuell:</span> – für maximale Flexibilität und Performance.
          </div>
        </div>

        {/* CTA Knaller */}
        <div className="w-full flex flex-col items-center justify-center mt-40">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-4">
              Bereit für dein Projekt?
            </h2>
            <p className="text-[#f0ebd8] text-lg sm:text-xl font-light mb-6">
              Lass uns gemeinsam durchstarten – unverbindlich, persönlich und mit echter Leidenschaft!
            </p>
            <Link
              to="/kontakt"
              className="inline-block bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-xl px-10 py-5 rounded-full shadow-xl tracking-widest hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              Zum Kontaktformular
            </Link>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default ServicesSection;