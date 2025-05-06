import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const services = [
    {
        title: 'SEO',
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
        title: 'Facebook ADs',
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
    {
        title: 'Google ADs',
        description:
            'Maximize ROI and drive targeted traffic with expertly crafted and managed Google Ads campaigns.',
        image: 'https://res.cloudinary.com/dgmq1unhw/image/upload/v1746539242/Marketing_consulting-pana_uv3r5j.png',
        features: [
            'Strategic Campaign Setup',
            'Continuous Optimization',
            'Accurate Conversion Tracking',
        ],
        url: 'google-ads',
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
];

export default function Services() {
    return (
        <section className="padding-x padding-y" id="services">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <Badge variant="outline" className="bg-white">
                        My Services
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-orange-500 mb-6">
                        Services
                    </h2>
                    <p className="text-lg text-gray-600">
                        Comprehensive digital marketing solutions designed to
                        grow your online presence and drive measurable business
                        results.
                    </p>
                </div>

                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 md:gap-10">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            id={service.url}
                            className="p-0 overflow-hidden space-y-0 group"
                        >
                            <CardHeader className="p-0">
                                <figure className="relative w-full aspect-video overflow-hidden border-b">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </figure>
                            </CardHeader>

                            <CardContent className="p-4 md:p-6 !pt-0">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
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
