import { Target, Globe, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const teamMembers = [
    {
        name: 'Emily Rodriguez',
        role: 'Founder & Lead SEO Strategist',
        bio: 'With over 12 years of digital marketing experience, Emily has helped hundreds of businesses dominate their online market.',
        expertise: [
            'Technical SEO',
            'Strategy Development',
            'Enterprise Solutions',
        ],
    },
    {
        name: 'Michael Chen',
        role: 'Head of Content & Keywords',
        bio: 'A content mastermind who transforms complex data into compelling SEO strategies that drive real results.',
        expertise: ['Content Marketing', 'Keyword Research', 'Copywriting'],
    },
    {
        name: 'Sarah Thompson',
        role: 'Technical SEO Specialist',
        bio: 'An expert in website optimization, site architecture, and performance enhancement.',
        expertise: ['Technical Optimization', 'Site Speed', 'Crawl Efficiency'],
    },
];

const coreValues = [
    {
        icon: Target,
        title: 'Data-Driven Approach',
        description:
            'We leverage advanced analytics and cutting-edge tools to craft precise, measurable SEO strategies.',
    },
    {
        icon: Globe,
        title: 'Transparent Reporting',
        description:
            'Complete visibility into our work with detailed, easy-to-understand performance reports.',
    },
    {
        icon: TrendingUp,
        title: 'Continuous Optimization',
        description:
            'SEO is an ongoing process. We constantly adapt and refine strategies to keep you ahead.',
    },
];

export default function AboutPage() {
    return (
        <section>
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-primary mb-4">
                        Transforming Online Visibility, One Strategy at a Time
                    </h1>
                    <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                        {`We're not just another SEO agency. We're strategic
                        partners dedicated to elevating your digital presence
                        through data-driven, innovative search optimization
                        techniques.`}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            Our Journey
                        </h2>
                        <p className="text-muted-foreground space-y-4 mb-6">
                            Founded in 2015, our agency emerged from a simple
                            belief: every business deserves to be found online.
                            What started as a small consultancy has grown into a
                            comprehensive SEO powerhouse, serving clients across
                            various industries.
                        </p>
                        <div className="flex space-x-4">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-primary">
                                    500+
                                </h3>
                                <p className="text-muted-foreground">
                                    Clients Served
                                </p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-primary">
                                    12+
                                </h3>
                                <p className="text-muted-foreground">
                                    Years Experience
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-6 flex items-center justify-center">
                        <Image
                            src="https://images.pexels.com/photos/19248278/pexels-photo-19248278/free-photo-of-red-leaves-on-tree-in-autumn.jpeg"
                            alt="SEO Team"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-primary text-center mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {coreValues.map((value, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-all"
                            >
                                <CardContent className="p-6 text-center">
                                    <div className="mb-4 flex justify-center">
                                        <value.icon
                                            className="text-primary"
                                            size={48}
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {value.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-primary text-center mb-12">
                        Meet Our Experts
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-all"
                            >
                                <CardContent className="p-6 text-center">
                                    <div className="mb-4 flex justify-center">
                                        <Image
                                            src={`https://images.pexels.com/photos/19248278/pexels-photo-19248278/free-photo-of-red-leaves-on-tree-in-autumn.jpeg`}
                                            alt={member.name}
                                            width={192}
                                            height={192}
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold">
                                        {member.name}
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        {member.role}
                                    </p>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {member.bio}
                                    </p>
                                    <div>
                                        <h4 className="font-semibold mb-2">
                                            Expertise:
                                        </h4>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {member.expertise.map(
                                                (skill, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                                                    >
                                                        {skill}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="bg-primary/10 rounded-lg p-12 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">
                        Ready to Unlock Your Digital Potential?
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        {`Whether you're a startup looking to make your mark or an
                        established business aiming to dominate search results,
                        we have the expertise to propel you forward.`}
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Button size="lg">Get Started</Button>
                        <Button variant="outline" size="lg">
                            Schedule Consultation
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
