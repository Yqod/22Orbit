import WorkflowComponent from "../components/workflowComponent.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/FooterLegal.jsx";
import SEO, { seoConfig } from '../components/SEO.jsx';
import { useEffect } from "react";

function WorkflowPage() {
   useEffect(() => {
  setTimeout(() => window.scrollTo(0, 0), 0);
}, []);
  return (
    <><SEO
      title={seoConfig.services.title}
      description={seoConfig.services.description}
      keywords={seoConfig.services.keywords} /><div>
        <Navbar />
        <WorkflowComponent />
        <Footer />
      </div></>
  );
}

export default WorkflowPage;
