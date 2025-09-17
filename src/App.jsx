import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage.jsx";
import Impressum from "./pages/legal/Impressum.jsx";
import Datenschutz from "./pages/legal/Datenschutz.jsx";
import AGB from "./pages/legal/AGB.jsx";
import Karriere from "./pages/Karriere.jsx";
import FAQ from "./pages/FAQ.jsx";
import Kontakt from "./pages/Kontakt.jsx";
import Pricing from "./pages/Pricing.jsx";
import CookieBanner from "./components/cookieBanner"; 


function App() {
  return (
    <>
    <CookieBanner />
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/preisliste" element={<Pricing />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      <Route path="/agb" element={<AGB />} />
      <Route path="/karriere" element={<Karriere />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/kontakt" element={<Kontakt />} />
    </Routes>
    </>
  );
}

export default App;