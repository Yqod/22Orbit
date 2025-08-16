import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage.jsx";
import Impressum from "./pages/legal/Impressum.jsx";
import Datenschutz from "./pages/legal/Datenschutz.jsx";
import AGB from "./pages/legal/AGB.jsx";
import Karriere from "./pages/Karriere.jsx";
import FAQ from "./pages/FAQ.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      <Route path="/agb" element={<AGB />} />
      <Route path="/karriere" element={<Karriere />} />
      <Route path="/faq" element={<FAQ />} />
      
    </Routes>
  );
}

export default App;