import SEO from "../components/SEO";
import Buy from "../components/Buy";
import Hero from "../components/Hero";
import Video from "../components/Video";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhyBuilt from "../components/WhyBuild";
import JoinOurEvent from "../components/JoinOurEvent";
import Testimonials from "../components/Testimonials";
import Specification from "../components/Specification";
import HealthBenefits from "../components/HealthBenefits";
import ImpactsOfRadiation from "../components/ImapactsOfRadiation";
export default function Home() {
  return (
    <>
      <SEO />
      <main>
        <Header />
        <Hero />
        <WhyBuilt />
        <ImpactsOfRadiation />
        <HealthBenefits />
        <Specification />
        <Video />
        <Testimonials />
        <JoinOurEvent />
        <Buy />
        <Footer />
      </main>
    </>
  );
}
