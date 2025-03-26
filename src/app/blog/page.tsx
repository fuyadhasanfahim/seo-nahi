import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import Image from 'next/image';

const posts = [
    {
        id: 'post-1',
        title: 'Getting Started with shadcn/ui Components',
        summary:
            "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
        label: 'Tutorial',
        author: 'Sarah Chen',
        published: '1 Jan 2024',
        url: '',
        image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'post-2',
        title: 'Building Accessible Web Applications',
        summary:
            "Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.",
        label: 'Accessibility',
        author: 'Marcus Rodriguez',
        published: '1 Jan 2024',
        url: '',
        image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'post-3',
        title: 'Modern Design Systems with Tailwind CSS',
        summary:
            'Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries.',
        label: 'Design Systems',
        author: 'Emma Thompson',
        published: '1 Jan 2024',
        url: '',
        image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
];

export default function BlogPage() {
    return (
        <section className="padding-x padding-y">
            <div className="container mx-auto flex flex-col items-center gap-16">
                <div className="text-center">
                    <Badge variant="secondary" className="mb-6">
                        Latest Updates
                    </Badge>
                    <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
                        Blog Posts
                    </h2>
                    <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Veniam blanditiis dignissimos similique fugiat
                        voluptatum! Quasi laboriosam optio corrupti sunt,
                        consequuntur aut unde voluptate praesentium debitis
                        aperiam porro est. Asperiores, eaque.
                    </p>
                    <Button variant="link" className="w-full sm:w-auto" asChild>
                        <a href="View all articles" target="_blank">
                            View all articles
                            <ArrowRight className="ml-2 size-4" />
                        </a>
                    </Button>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {posts.map((post) => (
                        <Card
                            key={post.id}
                            className="grid grid-rows-[auto_auto_1fr_auto]"
                        >
                            <div className="aspect-[16/9] w-full">
                                <a
                                    href={post.url}
                                    target="_blank"
                                    className="transition-opacity duration-200 fade-in hover:opacity-70"
                                >
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={500}
                                        height={500}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </a>
                            </div>
                            <CardHeader>
                                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                                    <a href={post.url} target="_blank">
                                        {post.title}
                                    </a>
                                </h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {post.summary}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <a
                                    href={post.url}
                                    target="_blank"
                                    className="flex items-center text-foreground hover:underline"
                                >
                                    Read more
                                    <ArrowRight className="ml-2 size-4" />
                                </a>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
