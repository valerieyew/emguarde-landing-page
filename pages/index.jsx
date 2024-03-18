import SEO from "../components/SEO";
import CtaBanner from "../components/CtaBanner";
import WelcomeBanner from "../components/WelcomeBanner";
import PortableFeatureBanner from "../components/PortableFeatureBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RadiationIntroBanner from "../components/RadiationIntroBanner";
import CoverageBanner from "../components/CoverageBanner";
import JoinOurEvent from "../components/JoinOurEvent";
import TestimonialsBanner from "../components/TestimonialsBanner";
import SpecificationBanner from "../components/SpecificationBanner";
import HealthBenefitsBanner from "../components/HealthBenefitsBanner";
import RadiationImpactsBanner from "../components/RadiationImpactsBanner";
export default function Home() {
  return (
    <>
      <SEO />
      <main>
        <Navbar />
        <WelcomeBanner />
        <RadiationIntroBanner />
        <RadiationImpactsBanner />
        <SpecificationBanner />
        <CoverageBanner />
        <PortableFeatureBanner />
        <HealthBenefitsBanner />
        <TestimonialsBanner />
        {/* <JoinOurEvent /> */}
        <CtaBanner />
        <Footer />
      </main>
    </>
  );
}
