'use client';

import Link from 'next/link';
import { Search, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const services = [
    { text: 'SEO', url: '#services' },
    { text: "Facebook AD's", url: '#services' },
    { text: "Google AD's", url: '#services' },
    { text: 'Social Media Marketing', url: '#services' },
];

const quickLinks = [
    { title: 'Home', url: '#home' },
    { title: 'Services', url: '#services' },
    {
        title: 'About Me',
        url: '#about-me',
    },
    {
        title: 'Portfolio',
        url: '#portfolio',
    },
    {
        title: 'Contact Me',
        url: '#contact-me',
    },
];

const legalLinks = [
    { text: 'Privacy Policy', url: '#' },
    { text: 'Terms of Service', url: '#' },
    { text: 'Cookie Policy', url: '#' },
];

export default function Footer() {
    const form = useForm({
        defaultValues: {
            email: '',
        },
    });

    const onSubmit = async (data: { email: string }) => {
        try {
            const response = await fetch(`/api/news-letter`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success(
                    'You have successfully subscribed to our newsletter!'
                );
                form.reset();
            } else {
                toast.error('Failed to subscribe. Please try again later.');
            }
        } catch (error) {
            toast.error((error as Error).message);
        }
    };

    return (
        <footer className="bg-accent">
            <div className="border-b border-white/10">
                <div className="container mx-auto px-6 py-8">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <div className="max-w-md">
                            <h3 className="mb-2 flex items-center gap-2 text-xl font-bold">
                                <Search size={20} className="text-orange-400" />
                                Stay Updated on SEO Trends
                            </h3>
                            <p className="text-foreground">
                                Get the latest SEO tips, strategies, and
                                insights delivered straight to your inbox.
                            </p>
                        </div>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
                        >
                            <Input
                                type="email"
                                placeholder="Your email address"
                                className="bg-white"
                                {...form.register('email', { required: true })}
                                required
                            />
                            <Button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 rounded-md px-4 py-2 font-medium  transition-colors"
                                disabled={form.formState.isSubmitting}
                            >
                                {form.formState.isSubmitting
                                    ? 'Subscribing...'
                                    : 'Subscribe'}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <h2 className="text-2xl font-bold font-amulya">
                                <span className="">SEO</span>
                                <span className="text-orange-400">ZenNahi</span>
                            </h2>
                        </Link>
                        <p>
                            Helping businesses grow online by using smart,
                            data-driven SEO strategies that get real, measurable
                            results.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-6 text-lg font-bold ">Services</h3>
                        <ul className="space-y-3">
                            {services.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.url}
                                        className="group flex items-center transition-colors hover:text-orange-400"
                                    >
                                        <ArrowRight
                                            size={14}
                                            className="mr-2 opacity-0 transition-all group-hover:opacity-100"
                                        />
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-lg font-bold">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.url}
                                        className="group flex items-center transition-colors hover:text-orange-400"
                                    >
                                        <ArrowRight
                                            size={14}
                                            className="mr-2 opacity-0 transition-all group-hover:opacity-100"
                                        />
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-lg font-bold ">Contact</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href={'mailto:seozennahi@gmail.com'}
                                    target="_blank"
                                    className="flex items-start"
                                >
                                    <Mail
                                        className="mr-3 mt-1 text-orange-400"
                                        size={18}
                                    />
                                    <span>seozennahi@gmail.com</span>
                                </Link>
                            </li>
                            <li className="flex items-start">
                                <Link
                                    href={'tel:+8801787523317'}
                                    target="_blank"
                                    className="flex items-start"
                                >
                                    <Phone
                                        className="mr-3 mt-1 text-orange-400"
                                        size={18}
                                    />
                                    <span>+880 17-87 523317</span>
                                </Link>
                            </li>
                            <li className="flex items-start">
                                <MapPin
                                    className="mr-3 mt-1 text-orange-400"
                                    size={18}
                                />
                                <span>
                                    Gaibandha-5700, <br /> Rangpur, Bangladesh
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
                        <p>
                            © {new Date().getFullYear()} SEOExpert. All rights
                            reserved.
                        </p>
                        <ul className="flex flex-wrap gap-6">
                            {legalLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.url}
                                        className="transition-colors hover:"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
