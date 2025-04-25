'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
    CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
    CheckCircle,
    TrendingUp,
    Award,
    Zap,
    BarChart2,
    Target,
} from 'lucide-react';
import Contact from '../shared/Contact';
import GetQuote from '../shared/GetQuote';

const seoServices = [
    {
        id: 'service-1',
        title: 'Local SEO Package',
        icon: <Target className="size-6 text-orange-500" />,
        description:
            'Perfect for local businesses looking to dominate their service area',
        monthlyPrice: 499,
        features: [
            'Local keyword research',
            'Google Business Profile optimization',
            'Local citation building',
            'Review management',
            'Monthly ranking reports',
        ],
        popular: false,
        color: 'orange',
    },
    {
        id: 'service-2',
        title: 'E-commerce SEO Suite',
        icon: <TrendingUp className="size-6 text-purple-500" />,
        description:
            'Comprehensive optimization for online stores and product catalogs',
        monthlyPrice: 899,
        features: [
            'Product page optimization',
            'Category structure analysis',
            'Schema markup implementation',
            'Conversion rate optimization',
            'Competitor price monitoring',
        ],
        popular: true,
        color: 'purple',
    },
    {
        id: 'service-3',
        title: 'Content Marketing Pro',
        icon: <BarChart2 className="size-6 text-green-500" />,
        description:
            'Content-driven SEO strategy for sustainable organic growth',
        monthlyPrice: 699,
        features: [
            'Content gap analysis',
            '4 SEO-optimized articles/month',
            'Content performance tracking',
            'Internal linking strategy',
            'Keyword opportunity research',
        ],
        popular: false,
        color: 'green',
    },
    {
        id: 'service-4',
        title: 'Technical SEO Audit',
        icon: <Zap className="size-6 text-amber-500" />,
        description: 'Comprehensive site analysis and technical optimization',
        monthlyPrice: 1299,
        features: [
            'Full technical site audit',
            'Speed optimization',
            'Mobile usability fixes',
            'Indexing improvement',
            'XML sitemap optimization',
        ],
        popular: false,
        color: 'amber',
    },
    {
        id: 'service-5',
        title: 'Enterprise SEO Strategy',
        icon: <Award className="size-6 text-red-500" />,
        description:
            'Custom SEO solutions for large organizations and complex sites',
        monthlyPrice: 2499,
        features: [
            'Custom SEO strategy',
            'Advanced competitor analysis',
            'SEO team consultation',
            'International SEO support',
            'Executive dashboard reporting',
        ],
        popular: false,
        color: 'red',
    },
    {
        id: 'service-6',
        title: 'Link Building Campaign',
        icon: <TrendingUp className="size-6 text-indigo-500" />,
        description:
            'Strategic backlink acquisition for domain authority growth',
        monthlyPrice: 799,
        features: [
            'Link profile analysis',
            'Competitor backlink research',
            '10 quality backlinks/month',
            'Link toxic removal',
            'Monthly authority reports',
        ],
        popular: false,
        color: 'indigo',
    },
];

export default function Pricing() {
    const [showAll, setShowAll] = useState(false);
    const displayedServices = showAll ? seoServices : seoServices.slice(0, 3);

    return (
        <section className="padding-x padding-y bg-accent" id="pricing">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <Badge
                        variant="outline"
                        className="mb-4 px-4 py-1 bg-white"
                    >
                        Transparent Pricing
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        SEO Packages That{' '}
                        <span className="text-orange-600">Drive Results</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-10">
                        Customized SEO strategies to match your business goals
                        and budget. All packages include monthly reporting and a
                        dedicated SEO manager.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {displayedServices.map((service, index) => (
                        <Card
                            key={index}
                            className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl border-t-4 ${
                                service.popular
                                    ? 'shadow-lg scale-105 border-orange-500 z-10'
                                    : 'shadow-md hover:scale-102 border-' +
                                      service.color +
                                      '-400'
                            }`}
                        >
                            <CardHeader
                                className={`p-4 ${
                                    service.popular ? 'bg-orange-50' : ''
                                }`}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    {service.icon}
                                    <Badge
                                        variant="outline"
                                        className="font-normal text-xs"
                                    >
                                        Monthly Plan
                                    </Badge>
                                </div>
                                <CardTitle className="text-2xl font-bold">
                                    {service.title}
                                </CardTitle>
                                <CardDescription className="text-sm">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="pt-6">
                                <div className="flex items-baseline mb-6">
                                    <span className="text-4xl font-bold">
                                        ${service.monthlyPrice}
                                    </span>
                                    <span className="text-gray-500 ml-2">
                                        /month
                                    </span>
                                </div>

                                <Separator className="mb-6" />

                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle
                                                className={`size-5 mt-0.5 text-${service.color}-500`}
                                            />
                                            <span className="text-gray-700">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="pt-4">
                                <Contact className="w-full" icon={false} />
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button
                        variant="outline"
                        size="lg"
                        className="cursor-pointer border-orange-600 text-orange-600 hover:bg-orange-50"
                        onClick={() => setShowAll((prev) => !prev)}
                    >
                        {showAll ? 'Show Less Packages' : 'Show All Packages'}
                    </Button>
                </div>

                <div className="max-w-3xl mx-auto mt-20 bg-orange-50 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-center mb-6">
                        Looking for a custom SEO solution?
                    </h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <GetQuote />
                    </div>
                </div>
            </div>
        </section>
    );
}
