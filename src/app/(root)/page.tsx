import About from '@/components/root/About';
// import Experience from '@/components/root/Experience';
import FAQ from '@/components/root/FAQ';
import HeroSection from '@/components/root/HeroSection';
import Portfolio from '@/components/root/Portfolio';
import Pricing from '@/components/root/Pricing';
import Services from '@/components/root/Services';
import Stats from '@/components/root/Stats';
import CallToAction from '@/components/shared/CallToAction';
import Footer from '@/components/shared/Footer';
import Testimonials from '@/components/shared/Testimonials';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <Stats />
            {/* <Experience /> */}
            <Services />
            <About />
            <Portfolio />
            <Pricing />
            <Testimonials />
            <FAQ />
            <CallToAction />
            <Footer />
        </>
    );
}
