import SplitText from "./SplitText";
import React from "react";
  

const Hero = () => (
  <section className="relative w-full flex flex-col items-center justify-center pt-80 sm:pt-60 pb-40 sm:pb-24 px-4 ">
    <div className="max-w-3xl mx-auto text-center">
      
      <div className="font-bebas text-[2.7rem] sm:text-7xl md:text-8xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-8 whitespace-nowrap">
        <SplitText
          text=" Deine Webagentur"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <br />
        <SplitText
          text="-22Orbit-"
          delay={600}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
      
      <p className="text-[#748cab] text-xl sm:text-2xl md:text-3xl font-light mb-8">
        Webseiten, Shops, Plugins und Software – individuell und passgenau für dein Business.
      </p>

      <div className="relative z-[10001] flex justify-center">
        <a
          href="#section1"
          className="inline-block bg-gradient-to-r from-[#3e5c76] to-[#1d2d44] text-[#f0ebd8] font-bebas text-xl px-10 py-4 rounded-full shadow-lg tracking-widest hover:scale-105 transition-transform duration-300"
        >
          Los geht's!
        </a>
      </div>
    </div>
  </section>
);

export default Hero;