'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from './ModeToggle';

export function Navbar() {
    const [open, setOpen] = React.useState(false);
    const pathname = usePathname();

    const routes = [
        {
            href: '/',
            label: 'Home',
        },
        {
            href: '/services',
            label: 'Services',
        },
        {
            href: '/case-studies',
            label: 'Case Studies',
        },
        {
            href: '/about',
            label: 'About',
        },
        {
            href: '/blog',
            label: 'Blog',
        },
        {
            href: '/contact',
            label: 'Contact',
        },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 padding-x py-4">
            <div className="container flex items-center justify-between">
                <div className="mr-4 flex items-center md:mr-6">
                    <Link href="/" className="font-bold text-xl">
                        SEO<span className="text-primary">Expert</span>
                    </Link>
                </div>

                <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
                    <div className="flex items-center gap-6">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    'text-sm font-medium transition-colors hover:text-primary',
                                    pathname === route.href
                                        ? 'text-foreground'
                                        : 'text-foreground/60'
                                )}
                            >
                                {route.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-6">
                        <ModeToggle />
                        <Button size="lg" className="rounded-full">
                            Free SEO Audit
                        </Button>
                    </div>
                </nav>

                <div className="flex flex-1 items-center justify-end md:hidden">
                    <ModeToggle />
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="ml-2"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="flex flex-col gap-4 mt-8 p-4">
                                {routes.map((route) => (
                                    <Link
                                        key={route.href}
                                        href={route.href}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            'text-sm font-medium transition-colors hover:text-primary',
                                            pathname === route.href
                                                ? 'text-foreground'
                                                : 'text-foreground/60'
                                        )}
                                    >
                                        {route.label}
                                    </Link>
                                ))}
                                <Button className="mt-2 rounded-full">
                                    Free SEO Audit
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
