'use client';

import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import GetQuote from './GetQuote';

interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
}

const menu = [
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

export default function Navbar() {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
        });

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <section className="py-4 padding-x border-b sticky top-0 z-50 bg-background">
            <div className="container">
                <nav className="hidden lg:flex items-center justify-between">
                    <Link href={'/'}>
                        <h2 className="text-2xl font-bold font-amulya">
                            <span className="">SEO</span>
                            <span className="text-orange-400">ZenNahi</span>
                        </h2>
                    </Link>

                    <div className="flex items-center">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {menu.map((item) =>
                                    renderMenuItem(item, activeSection)
                                )}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <GetQuote />
                </nav>

                <div className="block lg:hidden">
                    <div className="flex items-center justify-between">
                        <Link href={'/'}>
                            <span className="font-amulya text-xl">
                                MD Ashaduzzaman
                            </span>
                        </Link>

                        <Sheet>
                            <SheetTrigger asChild className="cursor-pointer">
                                <Menu className="size-4" />
                            </SheetTrigger>
                            <SheetContent className="overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle>
                                        <Link href={'/'}>
                                            <span className="font-amulya text-xl">
                                                MD Ashaduzzaman
                                            </span>
                                        </Link>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-6 p-4">
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="flex w-full flex-col gap-4"
                                    >
                                        {menu.map((item) =>
                                            renderMobileMenuItem(item)
                                        )}
                                    </Accordion>

                                    <GetQuote />
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </section>
    );
}

const renderMenuItem = (item: MenuItem, activeSection: string) => {
    const isActive = item.url === `#${activeSection}`;

    return (
        <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
                href={item.url}
                className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 font-medium transition-colors hover:bg-muted hover:text-accent-foreground ${
                    isActive ? 'text-primary' : ''
                }`}
            >
                {item.title}
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
};

const renderMobileMenuItem = (item: MenuItem) => {
    return (
        <Link
            key={item.title}
            href={item.url}
            className="text-md font-semibold"
        >
            {item.title}
        </Link>
    );
};
