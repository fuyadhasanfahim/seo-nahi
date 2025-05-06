import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Trophy } from 'lucide-react';

export default function AboutMe() {
    return (
        <section id="about-me" className="padding-x padding-y bg-accent">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-2/5 relative">
                        <div className="relative rounded-xl overflow-hidden">
                            <div className="aspect-[4/5] relative">
                                <Image
                                    src="https://res.cloudinary.com/dgmq1unhw/image/upload/v1746540175/tinywow_480741922_122098173680784725_1195241694196450822_n_78031470_bkjdjl.jpg"
                                    alt="SEO Expert - Naimur Rahman"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>

                            <div className="absolute top-0 -right-0 bg-white p-3 rounded-bl-xl shadow-lg flex items-center gap-2">
                                <Trophy className="text-yellow-500 size-5" />
                                <div>
                                    <p className="text-xs text-gray-600">
                                        Google Certified
                                    </p>
                                    <p className="font-bold text-sm">
                                        SEO Professional
                                    </p>
                                </div>
                            </div>

                            <div className="absolute -bottom-0 left-0 bg-white p-4 rounded-tr-xl shadow-lg">
                                <div className="flex gap-4 text-center">
                                    <div>
                                        <p className="text-orange-600 font-bold text-xl">
                                            250+
                                        </p>
                                        <p className="text-xs text-gray-600">
                                            Websites Optimized
                                        </p>
                                    </div>
                                    <div className="border-l border-gray-200 pl-4">
                                        <p className="text-orange-600 font-bold text-xl">
                                            85%
                                        </p>
                                        <p className="text-xs text-gray-600">
                                            Avg. Traffic Increase
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-3/5 space-y-4">
                        <Badge variant="outline" className="bg-white">
                            About Me
                        </Badge>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Helping{' '}
                            <span className="text-orange-600">Businesses</span>{' '}
                            grow online by using smart, data-driven SEO
                            strategies that get real, measurable results.
                        </h2>

                        <div className="space-y-6 text-gray-700 mb-8">
                            <p>
                                Hello! I&apos;m{' '}
                                <strong className="text-orange-600">
                                    Naimur Rahman
                                </strong>
                                , a seasoned SEO strategist with over{' '}
                                <strong>5+ years</strong> of experience
                                transforming businesses&apos; digital presence.
                                As the{' '}
                                <strong>Founder and Lead Consultant</strong> at
                                DigiRank Solutions, I&apos;ve helped companies
                                of all sizes achieve sustainable growth through
                                data-driven SEO strategies.
                            </p>

                            <p>
                                I specialize in comprehensive technical SEO
                                audits, content strategy optimization, local SEO
                                domination, and implementing advanced analytics
                                that translate rankings into revenue. My
                                expertise lies at the intersection of technical
                                proficiency and strategic marketing.
                            </p>

                            <p>
                                My clients consistently achieve{' '}
                                <strong>first-page rankings</strong> for
                                competitive keywords, with an average of{' '}
                                <strong>67% increase in organic traffic</strong>{' '}
                                within the first 6 months of our partnership. I
                                take pride in demystifying SEO and providing
                                transparent, results-focused solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
