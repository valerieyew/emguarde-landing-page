import SEO from "../components/SEO";
import Buy from "../components/Buy";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Fixedbg from "../components/FixedBg";
import Footer from "../components/Footer";
import WhyBuilt from "../components/WhyBuild";
import Testimonials from "../components/Testimonials";
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
        <Fixedbg />
        <Testimonials />
        <Buy />
        <Footer />
      </main>
    </>
  );
}
