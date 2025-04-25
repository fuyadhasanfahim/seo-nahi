import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const portfolioItems = [
    {
        title: 'E-commerce SEO Strategy',
        description:
            'Increased organic traffic by 156% and boosted conversion rate by 23% for a national retail brand.',
        image: 'https://res.cloudinary.com/dgmq1unhw/image/upload/v1745600690/freepik__upload__51969_adh6tm.png',
        category: 'E-commerce',
    },
    {
        title: 'Local SEO Campaign',
        description:
            'Dominated local search results for a multi-location dental practice, increasing new patient inquiries by 78%.',
        image: 'https://res.cloudinary.com/dgmq1unhw/image/upload/v1745600690/freepik__upload__51969_adh6tm.png',
        category: 'Local SEO',
    },
    {
        title: 'Content Strategy Overhaul',
        description:
            'Developed a comprehensive content strategy that doubled organic traffic and improved SERP rankings by 34%.',
        image: 'https://res.cloudinary.com/dgmq1unhw/image/upload/v1745600690/freepik__upload__51969_adh6tm.png',
        category: 'Content Marketing',
    },
    {
        title: 'Technical SEO Audit & Fix',
        description:
            'Resolved critical technical issues resulting in a 45% improvement in crawl efficiency and page indexing.',
        image: 'https://res.cloudinary.com/dgmq1unhw/image/upload/v1745600690/freepik__upload__51969_adh6tm.png',
        category: 'Technical SEO',
    },
    {
        title: 'B2B Lead Generation',
        description:
            'Implemented keyword strategy that increased qualified lead generation by 89% for a SaaS company.',
        image: 'https://res.cloudinary.com/dgmq1unhw/image/upload/v1745600690/freepik__upload__51969_adh6tm.png',
        category: 'B2B SEO',
    },
    {
        title: 'International SEO Strategy',
        description:
            'Expanded digital presence across 5 countries with multilingual SEO, increasing global traffic by 124%.',
        image: 'https://res.cloudinary.com/dgmq1unhw/image/upload/v1745600690/freepik__upload__51969_adh6tm.png',
        category: 'International SEO',
    },
];

export default function Portfolio() {
    return (
        <section className="padding-x padding-y " id="portfolio">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <Badge variant="outline" className="bg-white">
                        Success Stories
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Featured{' '}
                        <span className="text-orange-600">SEO Projects</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Explore real-world examples of how strategic SEO has
                        transformed businesses and delivered measurable results.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {portfolioItems.map((item, index) => (
                        <Card key={index} className="overflow-hidden group p-0">
                            <div className="relative aspect-video">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-orange-600 hover:bg-orange-700 text-white">
                                            {item.category}
                                        </Badge>
                                    </div>
                                </div>
                            </div>

                            <CardContent className="py-6">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
