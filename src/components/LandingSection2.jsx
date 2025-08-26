import React, { useRef, useEffect } from "react";


const reasons = [
  {
    icon: "💡",
    title: "Leidenschaft für Code",
    description: "Software-Entwicklung ist unsere Passion. Jede Zeile Code wird mit Herzblut geschrieben."
  },
  {
    icon: "🚀",
    title: "Innovation im Fokus",
    description: "Wir setzen auf modernste Technologien und kreative Ansätze für deine Projekte."
  },
  {
    icon: "🎯",
    title: "Maßgeschneidert",
    description: "Individuelle Lösungen, die perfekt zu deinem Business und deinen Zielen passen."
  },
  {
    icon: "⚡",
    title: "Schnell & Zuverlässig",
    description: "Effiziente Entwicklung ohne Kompromisse bei Qualität und Performance."
  },
  {
    icon: "🤝",
    title: "Partnerschaftlich",
    description: "Wir arbeiten eng mit dir zusammen – von der Idee bis zum erfolgreichen Launch."
  },
  {
    icon: "🔧",
    title: "Full-Service",
    description: "Alles aus einer Hand: Design, Development, Hosting und Support."
  }
];

const LandingSection2 = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.8;
    let isAnimating = true;
    let isInteracting = false; 
    let isDragging = false;

    const animate = () => {
      if (!isAnimating || !scrollContainer || isInteracting) return;

      scrollPosition += scrollSpeed;
      const containerWidth = scrollContainer.scrollWidth / 2;
      
      if (scrollPosition >= containerWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animationId = requestAnimationFrame(animate);

    // Desktop Mouse Events
    const handleMouseEnter = () => {
      isInteracting = true;
      scrollContainer.style.overflowX = 'auto';
      scrollContainer.style.cursor = 'grab';
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      isInteracting = false;
      isDragging = false;
      scrollContainer.style.overflowX = 'auto'; 
      scrollContainer.style.cursor = 'pointer';
      
      scrollPosition = scrollContainer.scrollLeft;
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseDown = () => {
      if (isInteracting) {
        isDragging = true;
        scrollContainer.style.cursor = 'grabbing';
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
      if (isInteracting) {
        scrollContainer.style.cursor = 'grab';
      }
    };

    // Touch Events für Mobile
    const handleTouchStart = (e) => {
      isInteracting = true;
      isDragging = true;
      scrollContainer.style.overflowX = 'auto';
      cancelAnimationFrame(animationId);
    };

    const handleTouchEnd = () => {
      isDragging = false;
      isInteracting = false;
      scrollContainer.style.overflowX = 'auto'; 
      
      scrollPosition = scrollContainer.scrollLeft;
      animationId = requestAnimationFrame(animate);
    };

    // Desktop Events
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('mousedown', handleMouseDown);
    scrollContainer.addEventListener('mouseup', handleMouseUp);

    // Touch Events
    scrollContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    scrollContainer.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      isAnimating = false;
      cancelAnimationFrame(animationId);
      
      if (scrollContainer) {
        // Desktop Events
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollContainer.removeEventListener('mousedown', handleMouseDown);
        scrollContainer.removeEventListener('mouseup', handleMouseUp);
        
        // Touch Events
        scrollContainer.removeEventListener('touchstart', handleTouchStart);
        scrollContainer.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  return (
    <section className="min-h-[80vh] sm:min-h-screen bg-gradient-to-b from-[#0d1321] via-[#1d2d44] to-[#0d1321] flex flex-col items-center justify-center py-12 sm:py-20 px-4">
      <div className="w-full max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-4 sm:mb-6">
          Warum 22Orbit?
        </h2>
        <p className="text-[#748cab] text-lg sm:text-xl md:text-2xl font-light mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
          Software-Entwicklung ist mehr als nur Code – es ist unsere Leidenschaft. 
          Wir brennen für innovative Lösungen und digitale Erlebnisse, die begeistern.
        </p>

        {/* Auto-Scroll Container */}
        <div 
          ref={scrollRef}
          className="overflow-x-auto overflow-y-hidden cursor-pointer transition-all duration-300 touch-pan-x mb-12 sm:mb-16"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x'
          }}
        >
          <div className="inline-flex space-x-4 sm:space-x-6 md:space-x-8 pl-4 pr-4" style={{ width: 'max-content' }}>
            {/* Doppelte Items für nahtloses Looping */}
            {[...reasons, ...reasons].map((reason, index) => (
              <div 
                key={`${reason.title}-${index}`} 
                className="flex-shrink-0 w-72 sm:w-80 md:w-80 bg-[#3e5c76]/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#748cab]/20 hover:border-[#748cab]/50 hover:bg-[#3e5c76]/40 transition-all duration-300 hover:scale-105 select-none"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{reason.icon}</div>
                <h3 className="font-bebas text-lg sm:text-xl text-[#f0ebd8] mb-2 sm:mb-3 tracking-wide">
                  {reason.title}
                </h3>
                <p className="text-[#748cab] text-sm sm:text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        
        </div>
      </section>
  );
};

export default LandingSection2;