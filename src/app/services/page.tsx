import {
    Rocket,
    TrendingUp,
    Search,
    Globe,
    BarChart,
    Database,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const services = [
    {
        icon: Search,
        title: 'Comprehensive SEO Audit',
        description:
            "Detailed analysis of your website's current SEO performance, identifying strengths, weaknesses, and optimization opportunities.",
        details: [
            'Technical SEO evaluation',
            'Content analysis',
            'Competitor benchmarking',
            'Actionable improvement recommendations',
        ],
    },
    {
        icon: TrendingUp,
        title: 'Keyword Strategy & Research',
        description:
            'In-depth keyword research to target high-value, relevant search terms that drive qualified traffic to your website.',
        details: [
            'Comprehensive keyword mapping',
            'Search intent analysis',
            'Long-tail keyword identification',
            'Competitive keyword gap analysis',
        ],
    },
    {
        icon: Globe,
        title: 'Local SEO Optimization',
        description:
            'Maximize your local online presence and attract more customers from your geographical area.',
        details: [
            'Google My Business optimization',
            'Local directory listings',
            'Location-based keyword targeting',
            'Local review management',
        ],
    },
    {
        icon: BarChart,
        title: 'Content Strategy & Creation',
        description:
            'Develop and execute a content strategy that improves search rankings and engages your target audience.',
        details: [
            'SEO-optimized content writing',
            'Content calendar development',
            'Topic cluster creation',
            'Performance tracking',
        ],
    },
    {
        icon: Rocket,
        title: 'Technical SEO Optimization',
        description:
            "Enhance your website's technical performance to improve search engine crawling, indexing, and ranking.",
        details: [
            'Site speed optimization',
            'Mobile responsiveness',
            'Structured data implementation',
            'Crawl error resolution',
        ],
    },
    {
        icon: Database,
        title: 'Link Building & Authority',
        description:
            "Build high-quality, relevant backlinks to increase your website's domain authority and search rankings.",
        details: [
            'Strategic link acquisition',
            'Competitor backlink analysis',
            'Quality link prospecting',
            'White-hat link building techniques',
        ],
    },
];

export default function ServicesPage() {
    return (
        <section className="padding-x padding-y">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary mb-4">
                        Our SEO Services
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We provide comprehensive SEO solutions tailored to boost
                        your online visibility, drive organic traffic, and help
                        you outperform your competition.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group">
                            <Card className="hover:shadow-lg transition-all duration-300 group">
                                <CardHeader className="pb-2">
                                    <div className="flex items-center space-x-4">
                                        <service.icon
                                            className="text-primary group-hover:scale-110 transition-transform"
                                            size={32}
                                        />
                                        <CardTitle className="text-xl">
                                            {service.title}
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>

                            <div className="mt-4 pl-4">
                                <h4 className="text-lg font-semibold mb-2">
                                    {`What's Included:`}
                                </h4>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                    {service.details.map(
                                        (detail, detailIndex) => (
                                            <li key={detailIndex}>{detail}</li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <Separator className="my-12" />

                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Elevate Your Online Presence?
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Every business is unique. We offer customized SEO
                        strategies that align with your specific goals and
                        target audience.
                    </p>
                    <Button
                        size="lg"
                        className="hover:bg-primary-foreground hover:text-primary"
                    >
                        Get a Free SEO Consultation
                    </Button>
                </div>
            </div>
        </section>
    );
}
