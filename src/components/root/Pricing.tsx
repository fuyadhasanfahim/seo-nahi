'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Contact from '../shared/Contact';
import { Badge } from '../ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui/card';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';

const digitalMarketingPackages = [
    {
        id: 'pkg-1',
        title: 'SEO Package',
        category: 'SEO',
        tiers: [
            {
                label: 'Small Website (up to 10 pages)',
                setup: 500,
                monthly: 300,
            },
            {
                label: 'Medium Website (10–50 pages)',
                setup: 1000,
                monthly: 500,
            },
            { label: 'Large Website (50+ pages)', setup: 1500, monthly: 700 },
        ],
        features: [
            'SEO Audit & Setup',
            'On-Page & Off-Page SEO',
            'Technical SEO & Mobile Optimization',
            'Monthly Reporting & Analytics',
        ],
        color: 'orange',
    },
    {
        id: 'pkg-2',
        title: 'Facebook Ads Package',
        category: 'Advertising',
        tiers: [
            { label: 'Small Campaign (Ad spend up to $500)', monthly: 300 },
            { label: 'Medium Campaign ($500–$2,000)', monthly: 500 },
            { label: 'Large Campaign ($2,000+)', monthly: 800 },
            { label: 'One-Time Setup', setup: 100 },
        ],
        features: [
            'Ad Setup & Strategy',
            'Audience Targeting',
            'Monthly Optimization & Reporting',
        ],
        color: 'blue',
    },
    {
        id: 'pkg-3',
        title: 'Google Ads Package',
        category: 'Advertising',
        tiers: [
            { label: 'Small Campaign (Ad spend up to $500)', monthly: 300 },
            { label: 'Medium Campaign ($500–$2,000)', monthly: 500 },
            { label: 'Large Campaign ($2,000+)', monthly: 800 },
            { label: 'One-Time Setup', setup: 100 },
        ],
        features: [
            'Campaign Setup & Keyword Research',
            'Ad Creation & Optimization',
            'Monthly Reporting & Adjustments',
        ],
        color: 'green',
    },
    {
        id: 'pkg-4',
        title: 'Social Media Marketing Package',
        category: 'SMM',
        tiers: [
            { label: 'Basic Plan (1–2 platforms)', monthly: 400 },
            { label: 'Medium Plan (2–3 platforms)', monthly: 700 },
            { label: 'Large Plan (3+ platforms)', monthly: 1000 },
            { label: 'One-Time Setup', setup: 150 },
        ],
        features: [
            'Content Creation & Scheduling',
            'Community Engagement & Management',
            'Social Media Ads (Basic)',
        ],
        color: 'rose',
    },
    {
        id: 'pkg-5',
        title: 'Complete Digital Marketing Package',
        category: 'All-in-One',
        tiers: [
            { label: 'Small Campaign', monthly: 1200 },
            { label: 'Medium Campaign', monthly: 2000 },
            { label: 'Large Campaign', monthly: 3500 },
        ],
        features: [
            'Full SEO Services',
            'Facebook & Google Ads Management',
            'Social Media Marketing',
            'Monthly Reports & Analytics',
        ],
        color: 'teal',
    },
];

export default function Pricing() {
    const [showAll, setShowAll] = useState(false);
    const displayedServices = showAll
        ? digitalMarketingPackages
        : digitalMarketingPackages.slice(0, 3);

    return (
        <section className="bg-accent py-20 px-4" id="pricing">
            <div className="container max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <Badge
                        variant="outline"
                        className="mb-4 bg-white px-4 py-1 text-sm"
                    >
                        Transparent Pricing
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        SEO Packages That{' '}
                        <span className="text-orange-600">Drive Results</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Customized strategies for your business goals and budget
                        — all with dedicated support and detailed reporting.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {displayedServices.map((pkg) => (
                        <Card
                            key={pkg.id}
                            className="rounded-2xl shadow-md border-t-4"
                            style={{
                                borderTopColor: `var(--${pkg.color}-500, ${pkg.color})`,
                            }}
                        >
                            <CardHeader>
                                <CardTitle className="text-xl">
                                    {pkg.title}
                                </CardTitle>
                                <CardDescription className="capitalize">
                                    {pkg.category}
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                <ul className="space-y-2 mb-4">
                                    {pkg.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2 text-sm"
                                        >
                                            <CheckCircle
                                                className={`size-5 text-${pkg.color}-500`}
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Separator className="my-4" />

                                <ul className="space-y-2 text-sm">
                                    {pkg.tiers.map((tier, i) => (
                                        <li key={i}>
                                            <strong>{tier.label}</strong>:{' '}
                                            {tier.setup
                                                ? `$${tier.setup} (Setup)`
                                                : ''}
                                            {tier.setup && tier.monthly
                                                ? ' + '
                                                : ''}
                                            {tier.monthly
                                                ? `$${tier.monthly}/month`
                                                : ''}
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

                <div className="text-center mt-12">
                    <Button
                        variant="outline"
                        size="lg"
                        className="text-orange-600 border-orange-600 hover:bg-orange-50"
                        onClick={() => setShowAll((prev) => !prev)}
                    >
                        {showAll ? 'Show Less Packages' : 'Show All Packages'}
                    </Button>
                </div>

                <div className="max-w-3xl mx-auto mt-20 bg-orange-50 p-8 rounded-2xl shadow-sm text-center">
                    <h3 className="text-2xl font-bold mb-6">
                        Looking for a custom SEO solution?
                    </h3>
                    <Contact className="rounded-full" icon />
                </div>
            </div>
        </section>
    );
}
