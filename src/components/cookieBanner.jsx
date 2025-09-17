import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Banner nur zeigen, wenn noch nicht akzeptiert
    if (!localStorage.getItem("cookiesAccepted")) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-[#1d2d44] text-[#f0ebd8] px-6 py-4 rounded-xl shadow-lg flex flex-col sm:flex-row items-center gap-4">
      <span>
        Diese Website verwendet Cookies, um Ihnen das beste Erlebnis zu bieten.{" "}
        <a href="/datenschutz" className="underline text-[#748cab]">Mehr erfahren</a>
      </span>
      <button
        onClick={acceptCookies}
        className="bg-[#748cab] text-[#f0ebd8] px-4 py-2 rounded hover:bg-[#3e5c76] transition"
      >
        Akzeptieren
      </button>
    </div>
  );
};

export default CookieBanner;