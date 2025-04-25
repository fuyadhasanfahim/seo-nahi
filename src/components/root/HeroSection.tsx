import React from 'react';
import {
    ArrowUpRight,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import Contact from '../shared/Contact';

export default function HeroSection() {
    return (
        <section
            className="padding-x padding-y"
            id="home"
        >
            <div className="container">
                <div className="grid items-center gap-8 md:grid-cols-2 lg:grid-cols-5">
                    <div className="lg:col-span-3 flex flex-col items-center text-center md:items-start md:text-left space-y-6">
                        <Badge variant="outline" className="bg-white">
                            <span>SEO Expert</span>
                            <ArrowUpRight className="ml-1 size-3" />
                        </Badge>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                            I&apos;m Naimur Rahman Nahi,{' '}
                            <span className="text-orange-500">
                                Expertise in Search Engine Optimization
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 max-w-xl">
                            I specialize in Facebook and Instagram marketing,
                            Google Ads, SEO, and comprehensive digital marketing
                            strategies. My goal is to help businesses grow by
                            creating impactful campaigns that drive engagement
                            and deliver measurable results.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto pt-4">
                            <Link href="#portfolio">
                                <Button variant="outline" size="lg">
                                    View Portfolio
                                </Button>
                            </Link>
                            <Contact icon />
                        </div>
                    </div>

                    <div className="lg:col-span-2 relative">
                        <div className="relative aspect-square w-full max-w-md mx-auto">
                            <div className="absolute inset-0 bg-orange-600 rounded-2xl rotate-6 opacity-20"></div>
                            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                <Image
                                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                                    alt="Naimur Rahman Nahi - SEO Expert"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 bg-white rounded-full p-2 shadow-lg">
                                <Link
                                    href="#"
                                    className="bg-gray-100 p-2 rounded-full hover:bg-blue-100 transition-colors"
                                >
                                    <Facebook
                                        size={20}
                                        className="text-blue-500"
                                    />
                                </Link>
                                <a
                                    href="#"
                                    className="bg-gray-100 p-2 rounded-full hover:bg-orange-100 transition-colors ease-in-out duration-200"
                                >
                                    <Instagram
                                        size={20}
                                        className="text-orange-500"
                                    />
                                </a>
                                <a
                                    href="#"
                                    className="bg-gray-100 p-2 rounded-full hover:bg-blue-100 transition-colors ease-in-out duration-200"
                                >
                                    <Linkedin
                                        size={20}
                                        className="text-blue-500"
                                    />
                                </a>
                                <a
                                    href="#"
                                    className="bg-gray-100 p-2 rounded-full hover:bg-sky-100 transition-colors ease-in-out duration-200"
                                >
                                    <Twitter
                                        size={20}
                                        className="text-sky-500"
                                    />
                                </a>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute top-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-md">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="text-sm font-medium">
                                        Available for projects
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Stats Row */}
                <div className="grid grid-cols-3 gap-4 mt-12 md:hidden">
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <p className="text-2xl font-bold text-orange-600">
                            120+
                        </p>
                        <p className="text-gray-600 text-xs">Projects Done</p>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <p className="text-2xl font-bold text-orange-600">
                            98%
                        </p>
                        <p className="text-gray-600 text-xs">
                            Client Satisfaction
                        </p>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <p className="text-2xl font-bold text-orange-600">5+</p>
                        <p className="text-gray-600 text-xs">
                            Years Experience
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
