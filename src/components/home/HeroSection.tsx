import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="padding-x padding-y bg-gradient-to-r from-gray-50 to-rose-50 dark:from-gray-950 dark:to-rose-950">
            <div className="container">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-amulya">
                                Elevate Your Online Presence with Data-Driven
                                SEO
                            </h1>
                            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                We help businesses achieve sustainable growth
                                through strategic search engine optimization.
                                Start ranking higher and driving more qualified
                                traffic today.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row font-amulya">
                            <Button size="lg" className="px-8">
                                Get Free SEO Audit
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="lg">
                                Our Services
                            </Button>
                        </div>
                        <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                                <CheckCircle className="h-4 w-4 text-primary" />
                                <span>30+ Clients</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <CheckCircle className="h-4 w-4 text-primary" />
                                <span>95% Success Rate</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <CheckCircle className="h-4 w-4 text-primary" />
                                <span>Data-Driven</span>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto lg:mx-0 relative w-full max-w-[500px] aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
                            alt="SEO dashboard with analytics"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
