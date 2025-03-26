import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Testimonials() {
    return (
        <section className="padding-x padding-y bg-gray-50 dark:bg-gray-900">
            <div className="container max-w-screen-xl">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                            Testimonials
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            What Our Clients Say
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            {`Don't just take our word for it. Hear from
                            businesses that have transformed their online
                            presence with our SEO services.`}
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
                    <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                        <div className="space-y-4">
                            <div className="flex space-x-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5 fill-primary text-primary"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-500 dark:text-gray-400">
                                {`"Working with this SEO team has been
                                transformative for our business. Our organic
                                traffic has more than doubled in 6 months, and
                                we're seeing a significant increase in qualified
                                leads."`}
                            </p>
                        </div>
                        <div className="mt-4 flex items-center space-x-3">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                <Image
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop"
                                    alt="Sarah Johnson"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-medium">Sarah Johnson</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Marketing Director, TechSolutions Inc.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                        <div className="space-y-4">
                            <div className="flex space-x-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5 fill-primary text-primary"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-500 dark:text-gray-400">
                                {`"The ROI we've seen from our SEO campaign has
                                been outstanding. The team is data-driven,
                                transparent, and genuinely invested in our
                                success. I couldn't recommend them more highly."`}
                            </p>
                        </div>
                        <div className="mt-4 flex items-center space-x-3">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                <Image
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop"
                                    alt="Michael Rodriguez"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-medium">Michael Rodriguez</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    CEO, GrowthBox E-commerce
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                        <div className="space-y-4">
                            <div className="flex space-x-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5 fill-primary text-primary"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-500 dark:text-gray-400">
                                {`"As a local business, we were struggling to
                                stand out online. This team helped us dominate
                                local search results and we've seen a 200%
                                increase in appointment bookings from Google."`}
                            </p>
                        </div>
                        <div className="mt-4 flex items-center space-x-3">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                <Image
                                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop"
                                    alt="Jennifer Lee"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-medium">Jennifer Lee</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Owner, Bright Smile Dental Clinic
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-center">
                    <Link
                        href="/testimonials"
                        className="inline-flex items-center text-sm font-medium text-primary"
                    >
                        View all testimonials{' '}
                        <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
