import BlogsSection from '@/components/home/BlogsSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import HeroSection from '@/components/home/HeroSection';
import ProcessSection from '@/components/home/ProcessSection';
import ServicesSection from '@/components/home/ServicesSection';
import Stats from '@/components/home/Stats';
import CallToAction from '@/components/shared/CallToAction';
import Testimonials from '@/components/shared/Testimonials';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <Stats />
            <ServicesSection />
            <ProcessSection />
            <CaseStudiesSection />
            <BlogsSection />
            <Testimonials />
            <CallToAction />
        </>
    );
}
