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
import { FaWhatsapp } from 'react-icons/fa';

export default function HeroSection() {
    return (
        <section className="padding-x padding-y" id="home">
            <div className="container">
                <div className="grid items-center gap-8 md:grid-cols-2 lg:grid-cols-5">
                    <div className="lg:col-span-3 flex flex-col items-center text-center md:items-start md:text-left space-y-6">
                        <Badge variant="outline" className="bg-white">
                            <span>SEO Expert</span>
                            <ArrowUpRight className="ml-1 size-3" />
                        </Badge>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                            I&apos;m Naimur Rahman Nahi
                        </h1>

                        <p className="text-lg text-gray-600 max-w-xl">
                            I’m a Digital Marketing Expert focused on helping
                            businesses grow online. I specialize in SEO,
                            Facebook Ads, Google Ads, Social Media Marketing and
                            creating effective digital marketing strategies. My
                            goal is to drive more engagement and deliver
                            measurable results that help businesses succeed.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto pt-4">
                            <Link href="#portfolio">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full"
                                >
                                    View Portfolio
                                </Button>
                            </Link>
                            <Contact icon />
                        </div>
                    </div>

                    <div className="lg:col-span-2 relative">
                        <div className="relative aspect-square w-full max-w-md mx-auto">
                            <div className="absolute inset-0 bg-orange-600 rounded-2xl rotate-6 opacity-20"></div>
                            <figure className="absolute inset-0 overflow-hidden rounded-2xl">
                                <Image
                                    src="https://res.cloudinary.com/dgmq1unhw/image/upload/v1746540175/481112961_122103602306772342_2922704844520823945_n_angt0x.jpg"
                                    alt="Naimur Rahman Nahi - SEO Expert"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </figure>

                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 bg-white rounded-full p-2 shadow-lg">
                                <Link
                                    href="https://www.facebook.com/profile.php?id=61573541761783"
                                    target="_blank"
                                    className="bg-gray-100 p-2 rounded-full hover:bg-blue-100 transition-colors"
                                >
                                    <Facebook
                                        size={20}
                                        className="text-blue-500"
                                    />
                                </Link>
                                <Link
                                    href="https://www.instagram.com/naimur_rahman_nahi"
                                    target="_blank"
                                    className="bg-gray-100 p-2 rounded-full hover:bg-orange-100 transition-colors ease-in-out duration-200"
                                >
                                    <Instagram
                                        size={20}
                                        className="text-orange-500"
                                    />
                                </Link>
                                <Link
                                    href="https://www.x.com/nahi_naimur"
                                    target="_blank"
                                    className="bg-gray-100 p-2 rounded-full hover:bg-gray-100 transition-colors ease-in-out duration-200"
                                >
                                    <Twitter
                                        size={20}
                                        className="text-gray-500"
                                    />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/naimur1995"
                                    target="_blank"
                                    className="bg-gray-100 p-2 rounded-full hover:bg-blue-100 transition-colors ease-in-out duration-200"
                                >
                                    <Linkedin
                                        size={20}
                                        className="text-blue-500"
                                    />
                                </Link>
                                <Link
                                    href="https://wa.me/8801787523317"
                                    target="_blank"
                                    className="bg-gray-100 p-2 rounded-full hover:bg-lime-100 transition-colors ease-in-out duration-200"
                                >
                                    <FaWhatsapp
                                        size={20}
                                        className="text-lime-500"
                                    />
                                </Link>
                            </div>

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
            </div>
        </section>
    );
}
