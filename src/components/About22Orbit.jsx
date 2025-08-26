import React from "react";

const About22Orbit = () => (
  <section id="About22Orbit" className="w-full bg-gradient-to-b from-[#0d1321] via-[#1d2d44] to-[#0d1321] py-20 px-4 my-12 flex items-center justify-center">
    <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-0 md:gap-20">
      {/* Bildbereich */}
      <div className="flex-1 flex justify-end items-center">
        {/* Desktop-Bild */}
        <img
          src="AstronautLaptop.png"
          alt="Astronaut mit Laptop"
          className="hidden md:block w-[340px] max-w-full md:w-[400px] lg:w-[480px] object-contain drop-shadow-2xl"
          style={{ pointerEvents: "none" }}
        />
        {/* Mobile-Bild */}
        <img
          src="astronautNachUnten.png"
          alt="Astronaut mit schaut nach unten"
          className="block md:hidden w-[220px] max-w-full object-contain drop-shadow-2xl"
          style={{ pointerEvents: "none", marginRight: "64px" }}
        />
      </div>
      
      {/* Textbereich */}
      <div className="flex-1 w-full max-w-xl mx-auto text-center md:max-w-none md:mx-0 md:text-left
        px-4 py-8 sm:px-0 sm:py-0
      ">
        <div className="block md:hidden mb-8">
          <h2 className="font-bebas text-4xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-8">
            Wer wir sind?
          </h2>
          <p className="text-[#748cab] text-base text-lg font-light leading-relaxed">
            <span className="font-bebas text-xl text-[#f0ebd8]">22Orbit</span> ist eine junge Webagentur im Herzen <span className="font-bebas text-xl text-[#f0ebd8]">Magdeburgs</span>, gegründet von zwei Freunden mit einer großen Liebe zur <span className="font-bebas text-xl text-[#f0ebd8]">Webentwicklung</span> und digitalen Innovation.
            <br /><br />
            
          </p>
        </div>
        <div className="hidden md:block">
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-[#f0ebd8] font-bold tracking-widest mb-6 drop-shadow-lg">
            Wer wir sind ? 
          </h2>
          <p className="text-[#748cab] text-lg sm:text-2xl font-light mb-6 leading-relaxed">
            <span className="font-bebas text-2xl text-[#f0ebd8]">22Orbit</span> ist eine junge Webagentur im Herzen <span className="font-bebas text-2xl text-[#f0ebd8]">Magdeburgs</span>, gegründet von zwei Freunden mit einer großen Liebe zur <span className="font-bebas text-2xl text-[#f0ebd8]">Webentwicklung</span> und digitalen Innovation.
            
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About22Orbit;