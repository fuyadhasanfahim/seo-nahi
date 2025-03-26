import {
    ArrowRight,
    BarChart2,
    CheckCircle,
    Globe,
    Search,
} from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui/card';
import Link from 'next/link';

export default function ServicesSection() {
    return (
        <section className="padding-x padding-y">
            <div className="container">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                            Our Services
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            Comprehensive SEO Solutions
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            We offer a full spectrum of search engine
                            optimization services to improve your online
                            visibility and drive organic growth.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
                    <Card className="relative overflow-hidden">
                        <CardHeader className="pb-0">
                            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <Search className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle>Technical SEO</CardTitle>
                            <CardDescription>
                                {`Optimize your website's infrastructure for
                                search engines`}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-4">
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                    <span>Site architecture optimization</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                    <span>Page speed improvement</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                    <span>Mobile-friendly enhancements</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Link
                                href="/services/technical-seo"
                                className="inline-flex items-center text-sm font-medium text-primary"
                            >
                                Learn more{' '}
                                <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card className="relative overflow-hidden">
                        <CardHeader className="pb-0">
                            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <BarChart2 className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle>Content Strategy</CardTitle>
                            <CardDescription>
                                Develop high-quality content that ranks and
                                converts
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-4">
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                    <span>Keyword research & planning</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                    <span>Content gap analysis</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                    <span>SEO copywriting services</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Link
                                href="/services/content-strategy"
                                className="inline-flex items-center text-sm font-medium text-primary"
                            >
                                Learn more{' '}
                                <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card className="relative overflow-hidden">
                        <CardHeader className="pb-0">
                            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <Globe className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle>Link Building</CardTitle>
                            <CardDescription>
                                Build authority with strategic backlink
                                acquisition
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-4">
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                    <span>Backlink profile analysis</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                    <span>
                                        Outreach & relationship building
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                    <span>Competitor link gap analysis</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Link
                                href="/services/link-building"
                                className="inline-flex items-center text-sm font-medium text-primary"
                            >
                                Learn more{' '}
                                <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}
