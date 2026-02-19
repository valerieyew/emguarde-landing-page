import SEO from '../components/SEO';
import CtaBanner from '../components/CtaBanner';
import WelcomeBanner from '../components/WelcomeBanner';
import PortableFeatureBanner from '../components/PortableFeatureBanner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DailyExposureBanner from '../components/2_DailyExposure';
import SurroundingRadiationBanner from '../components/3_SurroundingRadiation';
import CoverageBanner from '../components/CoverageBanner';
import JoinOurEvent from '../components/JoinOurEvent';
import TestimonialsBanner from '../components/TestimonialsBanner';
import SpecificationBanner from '../components/SpecificationBanner';
import HealthBenefitsBanner from '../components/HealthBenefitsBanner';
import RadiationImpactsBanner from '../components/RadiationImpactsBanner';
import SolutionBanner from '../components/SolutionBanner';

export default function Home() {
    return (
        <>
            <SEO />
            <main>
                <Navbar />
                {/* PROBLEM: Establish the threat and urgency */}
                <WelcomeBanner />
                {/* FEATURES: Additional product benefits */}
                <DailyExposureBanner />

                <SurroundingRadiationBanner />

                {/* IMPACT: Show the health consequences */}
                <RadiationImpactsBanner />

                {/* SOLUTION: Introduce emGuarde as the answer */}
                <SolutionBanner />

                {/* BENEFITS: Show real-world transformation results */}
                <HealthBenefitsBanner />

                {/* PROOF: Social proof and testimonials */}
                <TestimonialsBanner />

                {/* PRODUCT DETAILS: Technical specs and coverage */}
                <SpecificationBanner />
                <CoverageBanner />
                <PortableFeatureBanner />

                {/* EVENT: Community engagement (commented out as requested in original) */}
                {/* <JoinOurEvent /> */}

                {/* CTA: Final conversion push */}
                <CtaBanner />

                <Footer />
            </main>
        </>
    );
}
