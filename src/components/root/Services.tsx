import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const services = [
    {
        title: 'Search Engine Optimization',
        description:
            "Enhance your website's visibility and achieve higher rankings on search engines with advanced SEO techniques.",
        image: 'https://res.cloudinary.com/dgmq1unhw/image/upload/v1745596200/seo_oduqta.png',
        features: [
            'Comprehensive Keyword Research',
            'On-Page Optimization',
            'Technical SEO Audits',
        ],
        url: 'seo',
    },
    {
        title: 'Social Media Marketing',
        description:
            'Strengthen your brand presence and foster audience engagement through tailored social media strategies.',
        image: 'https://res.cloudinary.com/dgmq1unhw/image/upload/v1745596430/social-media-marketing_a8ske3.png',
        features: [
            'Custom Content Strategies',
            'Community Engagement',
            'In-Depth Performance Analytics',
        ],
        url: 'social-media',
    },
    {
        title: 'Google Ads Management',
        description:
            'Maximize ROI and drive targeted traffic with expertly crafted and managed Google Ads campaigns.',
        image: 'https://res.cloudinary.com/dgmq1unhw/image/upload/v1745596432/google-ads_u2bulw.png',
        features: [
            'Strategic Campaign Setup',
            'Continuous Optimization',
            'Accurate Conversion Tracking',
        ],
        url: 'google-ads',
    },
];

export default function Services() {
    return (
        <section className="padding-x padding-y" id="services">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <Badge variant="outline" className="bg-white">
                        My Services
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Expert SEO & Digital Marketing{' '}
                        <span className="text-orange-500">Services</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Comprehensive digital marketing solutions designed to
                        grow your online presence and drive measurable business
                        results.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            id={service.url}
                            className="p-0 overflow-hidden space-y-0"
                        >
                            <CardHeader className="p-0">
                                <figure className="relative w-full h-64 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </figure>
                            </CardHeader>

                            <CardContent className="p-4 md:p-6 !pt-0">
                                <h3 className="text-xl font-bold mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {service.description}
                                </p>

                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center"
                                        >
                                            <CheckCircle
                                                size={16}
                                                className="text-green-500 mr-2"
                                            />
                                            <span className="text-sm">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
