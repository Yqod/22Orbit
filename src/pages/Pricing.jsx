import Navbar from "../components/Navbar";
import PricingComponent from "../components/PricingComponent";
import SEO, { seoConfig } from '../components/SEO';

const Pricing = () => (
  <>
    <SEO 
      title={seoConfig.services.title}
      description={seoConfig.services.description}
      keywords={seoConfig.services.keywords}
    />
    <div>
      <Navbar />  
      <PricingComponent />
    </div>
  </>
);

export default Pricing;