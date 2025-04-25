'use client';

import { Calendar, Briefcase, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Experience() {
    const experiences = [
        {
            id: 1,
            title: 'Founder & CEO',
            company: 'Web Briks LLC',
            period: '2023 - Present',
            description:
                'Established a cutting-edge digital agency specializing in innovative web development solutions.',
            logo: 'WB',
            link: 'https://webbriks.com',
            avatar: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744614859/f7iqbgxhai50imrrdrdl.jpg',
            color: 'text-orange-500',
        },
        {
            id: 2,
            title: 'Founder & CEO',
            company: 'Clipping Path Action',
            period: '2018 - Present',
            description:
                'Founded a premier image editing studio renowned for high-end photo manipulation services.',
            logo: 'COE',
            link: 'https://clippingpathaction.com',
            avatar: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744614859/f7iqbgxhai50imrrdrdl.jpg',
            color: 'text-blue-500',
        },
        {
            id: 3,
            title: 'Freelance Professional',
            company: 'Fiverr',
            period: '2018 - Present',
            description:
                'Recognized as a top-rated and level 2 freelancer for tailored web development solutions.',
            logo: 'FV',
            link: 'https://www.fiverr.com/cutoutexpertbd',
            avatar: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744614859/f7iqbgxhai50imrrdrdl.jpg',
            color: 'text-lime-500',
        },
        {
            id: 4,
            title: 'Freelance Professional',
            company: 'Upwork',
            period: '2018 - Present',
            description:
                'Highly rated professional offering expert image editing, web design and development services.',
            logo: 'UP',
            link: 'https://www.upwork.com/freelancers/asad4nur',
            avatar: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744614859/f7iqbgxhai50imrrdrdl.jpg',
            color: 'text-green-500',
        },
    ];

    return (
        <section className="padding-x padding-y">
            <div className="container">
                <div className="mb-16 text-center space-y-5">
                    <Badge
                        variant="outline"
                        className="font-amulya font-medium"
                    >
                        Professional Journey
                    </Badge>
                    <h2 className="text-4xl font-amulya font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
                        My Experience
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Over a decade of expertise in web development, design,
                        and digital solutions. Building success stories one
                        project at a time.
                    </p>
                </div>

                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {experiences.map((exp) => (
                        <Card
                            key={exp.id}
                            className="overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-center mb-2">
                                    <Avatar>
                                        <AvatarImage
                                            src={exp.avatar}
                                            alt="My avatar"
                                        />
                                        <AvatarFallback>MD</AvatarFallback>
                                    </Avatar>
                                    <span className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {exp.period}
                                    </span>
                                </div>
                                <CardTitle className="text-xl font-amulya">
                                    {exp.title}
                                </CardTitle>
                                <CardDescription className="flex items-center">
                                    <Briefcase
                                        className={cn(
                                            'w-4 h-4 mr-1',
                                            exp.color
                                        )}
                                    />
                                    {exp.company}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-2">
                                <p className="text-slate-600 dark:text-slate-300 text-sm">
                                    {exp.description}
                                </p>
                            </CardContent>
                            <CardFooter className="pt-2 pb-4">
                                <Button asChild size="sm" className="w-full">
                                    <a
                                        href={exp.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center"
                                    >
                                        Learn more
                                        <ExternalLink className="w-3 h-3 ml-1" />
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
