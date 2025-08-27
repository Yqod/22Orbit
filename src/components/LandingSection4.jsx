import { Link } from "react-router-dom";
import Koenigskristall from "./Koenigskristall";
import HkiPortfolio from "./hki";
import SperryPortfolio from "./sperry";

const LandingSection4 = () => {
  return (
    <>
      <section id="portfolio-section" className="w-full bg-gradient-to-b from-[#0d1321] via-[#1d2d44] to-[#0d1321] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">
            Portfolio Highlights
          </h2>
          <p className="text-[#748cab] text-lg sm:text-xl md:text-2xl font-light max-w-4xl mx-auto px-4">
            Ausgewählte Projekte aus unserem Orbit – von Magdeburg bis Paris, digital und international. <br />
            Kreativ, individuell und weltweit im Einsatz.
          </p>
        </div>
      </section>
      <Koenigskristall />
      <HkiPortfolio />
      <SperryPortfolio />
    </>
  );
};

export default LandingSection4; 