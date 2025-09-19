import WorkflowComponent from "../components/workflowComponent";
import Navbar from "../components/navbar";
import Footer from "../components/FooterLegal.jsx";
import { useEffect } from "react";

function WorkflowPage() {
   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <Navbar />
      <WorkflowComponent />
      <Footer />
    </div>
  );
}

export default WorkflowPage;
