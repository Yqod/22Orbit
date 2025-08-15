import Particles from '../components/Galaxy.jsx';
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import LandingSection1 from '../components/LandingSection1.jsx';
import LandingSection2 from '../components/LandingSection2.jsx';
import LandingSection3 from '../components/LandingSection3.jsx';
import LandingSection4 from '../components/LandingSection4.jsx';  

function Landingpage() {
  return (
    <div className="bg-[#0d1321] w-full relative">
      {/* Particles als fixer Hintergrund */}
      <div className="fixed inset-0 w-full h-full z-[9999] pointer-events-none">
        <Particles
          particleColors={['#f0ebd8', '#748cab']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={130}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Navbar mit extra hohem z-index */}
      <div className="fixed top-0 left-0 w-full z-[10000]">
        <Navbar
          items={[
            { href: "#leistungen", label: "Leistungen" },
            { href: "#referenzen", label: "Referenzen" },
            { href: "#kontakt", label: "Kontakt" },
          ]}
        />
      </div>
      {/* Content darunter */}
      <div className="relative z-10">
        <Hero />
        <LandingSection1 />
        <LandingSection2 />
        <LandingSection3 />
        <LandingSection4 />
      </div>
    </div>
  );
}

export default Landingpage;