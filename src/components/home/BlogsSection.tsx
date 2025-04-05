import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogsSection() {
    return (
        <section className="padding-x padding-y bg-gray-50 dark:bg-gray-900">
            <div className="container max-w-screen-xl">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary font-amulya">
                            Latest Insights
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-amulya">
                            SEO Blog & Resources
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Stay up-to-date with the latest SEO strategies,
                            industry trends, and best practices.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
                    <div className="group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=2801&auto=format&fit=crop"
                                alt="Core Web Vitals article"
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                            />
                        </div>
                        <div className="p-4">
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                March 15, 2025
                            </div>
                            <h3 className="mt-1 text-xl font-bold font-amulya">
                                Core Web Vitals: How Page Experience Impacts
                                Your Rankings
                            </h3>
                            <p className="mt-2 text-gray-500 dark:text-gray-400 line-clamp-2">
                                {`Learn how Google's page experience signals
                                affect your search rankings and how to optimize
                                for them.`}
                            </p>
                            <Link
                                href="/blog/core-web-vitals"
                                className="mt-3 inline-flex items-center text-sm font-medium text-primary font-amulya"
                            >
                                Read more{' '}
                                <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2787&auto=format&fit=crop"
                                alt="AI in SEO article"
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                            />
                        </div>
                        <div className="p-4">
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                March 8, 2025
                            </div>
                            <h3 className="mt-1 text-xl font-bold font-amulya">
                                The Impact of AI on SEO: What You Need to Know
                            </h3>
                            <p className="mt-2 text-gray-500 dark:text-gray-400 line-clamp-2">
                                Discover how artificial intelligence is
                                reshaping search engine optimization and content
                                strategies.
                            </p>
                            <Link
                                href="/blog/ai-in-seo"
                                className="mt-3 inline-flex items-center text-sm font-medium text-primary font-amulya"
                            >
                                Read more{' '}
                                <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2940&auto=format&fit=crop"
                                alt="Local SEO article"
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                            />
                        </div>
                        <div className="p-4">
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                February 28, 2025
                            </div>
                            <h3 className="mt-1 text-xl font-bold font-amulya">
                                Local SEO in 2025: Strategies for Dominating
                                Regional Search
                            </h3>
                            <p className="mt-2 text-gray-500 dark:text-gray-400 line-clamp-2">
                                Master the latest local SEO tactics to ensure
                                your business appears in local search results.
                            </p>
                            <Link
                                href="/blog/local-seo-2025"
                                className="mt-3 inline-flex items-center text-sm font-medium text-primary font-amulya"
                            >
                                Read more{' '}
                                <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-sm font-medium text-primary font-amulya"
                    >
                        Explore all articles{' '}
                        <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
