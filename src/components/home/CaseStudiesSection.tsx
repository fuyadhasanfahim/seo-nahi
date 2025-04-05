import { ArrowRight, CheckCircle } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import Link from 'next/link';
import Image from 'next/image';

export default function CaseStudiesSection() {
    return (
        <section className="padding-x padding-y">
            <div className="container max-w-screen-xl">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary font-amulya">
                            Case Studies
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-amulya">
                            Our Success Stories
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            {`See how we've helped businesses like yours achieve
                            significant growth through strategic SEO.`}
                        </p>
                    </div>
                </div>
                <Tabs
                    defaultValue="ecommerce"
                    className="w-full max-w-4xl mx-auto mt-8"
                >
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="ecommerce" className="font-amulya">
                            E-commerce
                        </TabsTrigger>
                        <TabsTrigger value="saas" className="font-amulya">
                            SaaS
                        </TabsTrigger>
                        <TabsTrigger value="local" className="font-amulya">
                            Local Business
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ecommerce" className="mt-6">
                        <Card>
                            <CardHeader className="pb-4">
                                <CardTitle className="font-amulya">
                                    278% Organic Traffic Growth for Online
                                    Retailer
                                </CardTitle>
                                <CardDescription>
                                    Home furnishings e-commerce store
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6 lg:grid-cols-2">
                                <div className="space-y-4">
                                    <p>
                                        An established home furnishings retailer
                                        was struggling to compete with larger
                                        brands online. We implemented a
                                        comprehensive SEO strategy focused on
                                        product category optimization and
                                        content marketing.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="font-medium font-amulya">
                                            Results:
                                        </div>
                                        <ul className="space-y-1 text-sm">
                                            <li className="flex items-center">
                                                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                <span>
                                                    278% increase in organic
                                                    traffic within 8 months
                                                </span>
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                <span>
                                                    43% boost in conversion rate
                                                    from organic visitors
                                                </span>
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                <span>
                                                    $420,000 increase in annual
                                                    revenue from organic search
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link
                                        href="/case-studies/ecommerce"
                                        className="inline-flex items-center text-sm font-medium text-primary font-amulya"
                                    >
                                        Read full case study{' '}
                                        <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                                <div className="relative aspect-video overflow-hidden rounded-lg">
                                    <Image
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
                                        alt="E-commerce growth chart"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="saas" className="mt-6">
                        <Card>
                            <CardHeader className="pb-4">
                                <CardTitle>
                                    193% Increase in Trial Sign-ups for SaaS
                                    Platform
                                </CardTitle>
                                <CardDescription>
                                    B2B project management software
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6 lg:grid-cols-2">
                                <div className="space-y-4">
                                    <p>
                                        A growing project management SaaS
                                        company needed to improve their organic
                                        visibility and lead generation. We
                                        developed a content hub strategy
                                        targeting high-intent keywords in their
                                        niche.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="font-medium">
                                            Results:
                                        </div>
                                        <ul className="space-y-1 text-sm">
                                            <li className="flex items-center">
                                                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                <span>
                                                    193% increase in free trial
                                                    sign-ups from organic
                                                    traffic
                                                </span>
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                <span>
                                                    152% growth in organic
                                                    traffic to product pages
                                                </span>
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                <span>
                                                    27% reduction in customer
                                                    acquisition cost
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link
                                        href="/case-studies/saas"
                                        className="inline-flex items-center text-sm font-medium text-primary"
                                    >
                                        Read full case study{' '}
                                        <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                                <div className="relative aspect-video overflow-hidden rounded-lg">
                                    <Image
                                        src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2940&auto=format&fit=crop"
                                        alt="SaaS dashboard analytics"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="local" className="mt-6">
                        <Card>
                            <CardHeader className="pb-4">
                                <CardTitle>
                                    312% More Leads for Local Service Business
                                </CardTitle>
                                <CardDescription>
                                    Home services contractor
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6 lg:grid-cols-2">
                                <div className="space-y-4">
                                    <p>
                                        A local home services contractor was
                                        struggling to generate leads in a
                                        competitive market. We implemented a
                                        local SEO strategy focused on Google
                                        Business Profile optimization and
                                        service-area content.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="font-medium">
                                            Results:
                                        </div>
                                        <ul className="space-y-1 text-sm">
                                            <li className="flex items-center">
                                                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                <span>
                                                    312% increase in lead form
                                                    submissions within 6 months
                                                </span>
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                <span>
                                                    Top 3 rankings for 87% of
                                                    target keywords
                                                </span>
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                                <span>
                                                    485% increase in Google
                                                    Business Profile conversions
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link
                                        href="/case-studies/local"
                                        className="inline-flex items-center text-sm font-medium text-primary"
                                    >
                                        Read full case study{' '}
                                        <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                                <div className="relative aspect-video overflow-hidden rounded-lg">
                                    <Image
                                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop"
                                        alt="Local business growth"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
