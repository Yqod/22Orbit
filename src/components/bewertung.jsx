import React, { useState, useRef } from "react";

const reviews = [
  {
    name: "Maja Bremer",
    rating: 5,
    text: "Ich bin mehr als zufrieden mit der Arbeit von 22Orbit! Ich habe meine Website hier erstellen lassen, und das Ergebnis hat meine Erwartungen bei weitem übertroffen. Nicht nur, dass die Website super professionell gestaltet wurde – es wurde auch richtig auf mein Unternehmen und meine Vorstellungen eingegangen. Besonders die Zusammenarbeit mit Georg war einfach großartig. Der Kontakt war jederzeit unkompliziert, freundlich und genau so, wie man es sich wünscht. Man merkt richtig, dass hier Menschen mit Herz und Expertise am Werk sind. Absolute Empfehlung!",
    link: "https://maps.app.goo.gl/LTPgfTmPYP9oMcSh9",
    source: "Google",
    date: "Juni 2025",
  },
  {
    name: "Dennis Stawertij",
    rating: 5,
    text: "Super Team, super Kommunikation - und sehr zufrieden mit der Arbeit. Weiter so!",
    link: "https://maps.app.goo.gl/VSW93LtsvDhRXpRT6",
    source: "Google",
    date: "Mai 2025",
  },
  {
    name: "Julius Lenz",
    rating: 5,
    text: "Sehr professionelle und versierte Arbeit. Super zuverlässig. Wir standen immer in Absprache. Alle Fragen wurden Fachgemäß und schnell beantwortet. Ich war sehr zufrieden! ",
    link: "https://de.trustpilot.com/reviews/68aae0193ac01a689d02264d",
    source: "Trustpilot",
    date: "Juni 2025",
  },
  {
    name: "Fabian Khan",
    rating: 5,
    text: "Wir sind sehr zufrieden mit der Zusammenarbeit! Der Kontakt mit Georg war von Anfang an freundlich, zuverlässig und professionell. Unsere Wünsche wurden immer berücksichtigt, und die Kommunikation war schnell und unkompliziert. Das Ergebnis – unsere neue Website – hat unsere Erwartungen voll erfüllt. Besonders schätzen wir auch die laufende Betreuung, bei der wir uns jederzeit gut aufgehoben fühlen. Absolut empfehlenswert!",
    link: "https://de.trustpilot.com/reviews/68b48a583915209874ce5944",
    source: "Trustpilot",
    date: "Juni 2025",
  },
  {
    name: "Yvonne",
    rating: 5,
    text: "Ich habe mir von Georg eine Website für mein Kurhotel erstellen lassen und bin absolut zufrieden! Professionelle Umsetzung, ansprechendes Design und schnelle Kommunikation. Die Seite spiegelt genau das wider, was ich mir vorgestellt habe – modern, einladend und benutzerfreundlich. Klare Weiterempfehlung!",
    link: "https://maps.app.goo.gl/ChF4o6w1WCT12MZ79",
    source: "Google",
    date: "Juni 2025",
  },
];

function StarRating({ count, source }) {
  if (source === "Google") {
    return (
      <img
        src="/Google5.png"
        alt="Google Bewertung 5 Sterne"
        className="w-24 h-auto mt-2"
      />
    );
  }
  else if (source === "Trustpilot") {
    return (
      <img
        src="/Trustpilo1.png"
        alt="Trustpilot Bewertung 5 Sterne"
        className="w-24 h-auto mt-2"
      />
    );
  }
  return (
    <span className="flex gap-1 mt-2">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-[#f0ebd8]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewText({ text, link }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 250;

  if (text.length <= maxLength) {
    return (
      <p className="text-[#f0ebd8] text-base font-light mb-2 text-center">
        {text}
      </p>
    );
  }

  return (
    <p className="text-[#f0ebd8] text-base font-light mb-2 text-center">
      {expanded ? text : text.slice(0, maxLength) + "... "}
      {!expanded ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#748cab] underline text-sm hover:text-[#f0ebd8] transition"
        >
          Mehr anzeigen
        </a>
      ) : (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#748cab] underline text-sm hover:text-[#f0ebd8] transition"
        >
          Bewertung ansehen
        </a>
      )}
      {!expanded && (
        <button
          className="hidden"
          onClick={() => setExpanded(true)}
        />
      )}
    </p>
  );
}

export default function Bewertungen() {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);

  // Zeigt auf Desktop 3, auf Mobile 1 Bewertung
  const getVisibleCount = () => (window.innerWidth >= 1024 ? 3 : 1);

  const prevReview = () => {
    setCurrent((prev) => Math.max(prev - getVisibleCount(), 0));
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  const nextReview = () => {
    setCurrent((prev) => Math.min(prev + getVisibleCount(), reviews.length - getVisibleCount()));
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  // Responsive update on resize
  React.useEffect(() => {
    const handleResize = () => setCurrent(0);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="rounded-2xl p-8 max-w-5xl mx-auto my-24">
      <h2 className="font-bebas text-5xl sm:text-6xl text-[#f0ebd8] mb-8 tracking-wide text-center">
         Das sagen unsere Partner
      </h2>
      <div className="flex items-center justify-center relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 px-2"
          style={{
            scrollSnapType: "x mandatory",
            width: "100%",
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#3e5c76]/30 rounded-xl p-6 shadow flex flex-col items-center gap-4 min-w-[320px] max-w-[340px] flex-shrink-0"
              style={{
                maxHeight: "290px",
                minHeight: "340px",
                scrollSnapAlign: "center"
              }}
            >
              <div className="flex flex-col items-center min-w-[120px]">
                <span className="font-bebas text-lg text-[#f0ebd8]">{review.name}</span>
                <span className="text-[#748cab] text-xs">{review.date}</span>
                <StarRating count={review.rating} source={review.source} />
              </div>
              <div className="flex-1 w-full">
                <ReviewText text={review.text} link={review.link} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Buttons dezent unter das Div */}
      <div className="flex justify-center items-center gap-12 mt-6">
        <button
          onClick={prevReview}
          className="bg-[#748cab] hover:bg-[#3e5c76] text-[#f0ebd8] rounded-full w-10 h-10 flex items-center justify-center shadow transition border border-[#f0ebd8] focus:outline-none"
          aria-label="Vorherige Bewertung"
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <path stroke="#f0ebd8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <span className="text-[#748cab] text-sm font-bebas lg:hidden">swipe</span>
        <button
          onClick={nextReview}
          className="bg-[#748cab] hover:bg-[#3e5c76] text-[#f0ebd8] rounded-full w-10 h-10 flex items-center justify-center shadow transition border border-[#f0ebd8] focus:outline-none"
          aria-label="Nächste Bewertung"
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <path stroke="#f0ebd8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
      <style>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}