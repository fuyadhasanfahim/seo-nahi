import Image from 'next/image';
import { Button } from '../ui/button';

export default function ProcessSection() {
    return (
        <section className="padding-x padding-y bg-gray-50 dark:bg-gray-900">
            <div className="container max-w-screen-xl">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mx-auto">
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary font-amulya">
                            Our Process
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-amulya">
                            Data-Driven SEO That Delivers Results
                        </h2>
                        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                            We follow a proven methodology that has helped our
                            clients achieve sustainable growth in organic
                            traffic and conversions.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <Button className="size-8 rounded-full bg-primary text-white dark:bg-black font-amulya">
                                    1
                                </Button>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold font-amulya">
                                        Comprehensive Audit
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        We analyze your website, competitors,
                                        and industry to identify opportunities
                                        and challenges.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Button className="size-8 rounded-full bg-primary text-white dark:bg-black font-amulya">
                                    2
                                </Button>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold font-amulya">
                                        Custom Strategy Development
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        We create a tailored SEO roadmap based
                                        on your specific goals and market
                                        position.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Button className="size-8 rounded-full bg-primary text-white dark:bg-black font-amulya">
                                    3
                                </Button>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold font-amulya">
                                        Implementation & Optimization
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Our experts execute the strategy with
                                        precision and continuously refine based
                                        on performance.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Button className="size-8 rounded-full bg-primary text-white dark:bg-black font-amulya">
                                    4
                                </Button>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold font-amulya">
                                        Reporting & Adaptation
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        We provide transparent reporting and
                                        adapt strategies to maximize your ROI.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4 font-amulya">
                            <Button size="lg">Schedule a Strategy Call</Button>
                        </div>
                    </div>
                    <div className="mx-auto lg:mx-0 relative w-full max-w-[500px] aspect-square overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop"
                            alt="SEO strategy meeting"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
