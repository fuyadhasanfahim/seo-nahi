import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const portfolioItems = [
    {
        title: 'Search Engine Optimization',
        image: 'https://res.cloudinary.com/dgmq1unhw/image/upload/v1745600690/freepik__upload__51969_adh6tm.png',
    },
    {
        title: 'Facebook Ads',
        image: 'https://res.cloudinary.com/dgmq1unhw/image/upload/v1745600690/freepik__upload__51969_adh6tm.png',
    },
    {
        title: 'Google Ads',
        image: 'https://res.cloudinary.com/dgmq1unhw/image/upload/v1745600690/freepik__upload__51969_adh6tm.png',
    },
    {
        title: 'Social Media Marketing',
        image: 'https://res.cloudinary.com/dgmq1unhw/image/upload/v1745600690/freepik__upload__51969_adh6tm.png',
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
                        <span className="text-orange-600">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Explore real-world examples of how strategic SEO has
                        transformed businesses and delivered measurable results.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {portfolioItems.map((item, index) => (
                        <Card key={index} className="overflow-hidden group p-0">
                            <CardTitle>
                                <figure className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </figure>
                            </CardTitle>

                            <CardContent className="pb-4">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                                    {item.title}
                                </h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
