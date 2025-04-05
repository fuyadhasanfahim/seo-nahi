'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';

export function Navbar() {
    const [open, setOpen] = React.useState(false);
    const pathname = usePathname();
    const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);
    const [openNestedSubmenu, setOpenNestedSubmenu] = React.useState<
        string | null
    >(null);

    const routes = [
        {
            href: '/',
            label: 'Home',
        },
        {
            href: '/services',
            label: 'Services',
            submenu: [
                {
                    href: '/services/social-media-marketing',
                    label: 'Social Media Marketing',
                    nestedSubmenu: [
                        {
                            href: '/services/social-media-marketing/facebook',
                            label: 'Facebook Marketing',
                        },
                        {
                            href: '/services/social-media-marketing/instagram',
                            label: 'Instagram Marketing',
                        },
                    ],
                },
                {
                    href: '/services/search-engine-optimization',
                    label: 'Search Engine Optimization',
                },
                {
                    href: '/services/google-ads',
                    label: 'Google Ads',
                },
            ],
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

    const handleMouseEnter = (label: string) => {
        setOpenSubmenu(label);
    };

    const handleNestedMouseEnter = (label: string) => {
        setOpenNestedSubmenu(label);
    };

    const handleMouseLeave = () => {
        setOpenSubmenu(null);
        setOpenNestedSubmenu(null);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 padding-x">
            <div className="container flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="font-bold text-xl font-amulya">
                        SEOZEN<span className="text-primary">NAHI</span>
                    </Link>
                </div>

                <nav className="hidden mx-auto md:flex">
                    <ul className="flex items-center gap-8">
                        {routes.map((route) => (
                            <li
                                key={route.href}
                                className="relative"
                                onMouseEnter={() =>
                                    route.submenu &&
                                    handleMouseEnter(route.label)
                                }
                                onMouseLeave={handleMouseLeave}
                            >
                                {route.submenu ? (
                                    <div className="flex items-center cursor-pointer">
                                        <span
                                            className={cn(
                                                'text-sm font-semibold transition-colors hover:text-primary relative group flex items-center gap-1',
                                                pathname.startsWith(route.href)
                                                    ? 'text-foreground'
                                                    : 'text-foreground/60'
                                            )}
                                        >
                                            {route.label}
                                            <ChevronDown className="h-4 w-4" />
                                            <span
                                                className={cn(
                                                    'absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full',
                                                    pathname.startsWith(
                                                        route.href
                                                    )
                                                        ? 'w-full'
                                                        : ''
                                                )}
                                            ></span>
                                        </span>

                                        {openSubmenu === route.label && (
                                            <div className="absolute top-full left-0 mt-1 py-2 bg-white shadow-lg rounded-md min-w-56 z-50">
                                                {route.submenu.map(
                                                    (subItem) => (
                                                        <div
                                                            key={subItem.href}
                                                            className="relative"
                                                            onMouseEnter={() =>
                                                                subItem.nestedSubmenu &&
                                                                handleNestedMouseEnter(
                                                                    subItem.label
                                                                )
                                                            }
                                                        >
                                                            <Link
                                                                href={
                                                                    subItem.href
                                                                }
                                                                className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                                                            >
                                                                {subItem.label}
                                                                {subItem.nestedSubmenu && (
                                                                    <ChevronRight className="h-4 w-4 ml-2" />
                                                                )}
                                                            </Link>

                                                            {openNestedSubmenu ===
                                                                subItem.label &&
                                                                subItem.nestedSubmenu && (
                                                                    <div className="absolute top-0 left-full ml-1 py-2 bg-white shadow-lg rounded-md min-w-56 z-50">
                                                                        {subItem.nestedSubmenu.map(
                                                                            (
                                                                                nestedItem
                                                                            ) => (
                                                                                <Link
                                                                                    key={
                                                                                        nestedItem.href
                                                                                    }
                                                                                    href={
                                                                                        nestedItem.href
                                                                                    }
                                                                                    className="block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                                                                                >
                                                                                    {
                                                                                        nestedItem.label
                                                                                    }
                                                                                </Link>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                )}
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={route.href}
                                        className={cn(
                                            'text-sm font-semibold transition-colors hover:text-primary relative group',
                                            pathname === route.href
                                                ? 'text-foreground'
                                                : 'text-foreground/60'
                                        )}
                                    >
                                        {route.label}
                                        <span
                                            className={cn(
                                                'absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full',
                                                pathname === route.href
                                                    ? 'w-full'
                                                    : ''
                                            )}
                                        ></span>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden md:flex">
                    <Button
                        size="lg"
                        className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold cursor-pointer"
                    >
                        Free SEO Audit
                    </Button>
                </div>

                <div className="flex md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="overflow-y-auto padding-x"
                        >
                            <nav className="flex flex-col gap-2 mt-8">
                                {routes.map((route) =>
                                    route.submenu ? (
                                        <Collapsible
                                            key={route.href}
                                            className="w-full"
                                        >
                                            <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-sm font-semibold">
                                                {route.label}
                                                <ChevronDown className="h-4 w-4" />
                                            </CollapsibleTrigger>
                                            <CollapsibleContent className="pl-4">
                                                {route.submenu.map((subItem) =>
                                                    subItem.nestedSubmenu ? (
                                                        <Collapsible
                                                            key={subItem.href}
                                                            className="w-full"
                                                        >
                                                            <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-sm">
                                                                {subItem.label}
                                                                <ChevronDown className="h-4 w-4" />
                                                            </CollapsibleTrigger>
                                                            <CollapsibleContent className="pl-4">
                                                                {subItem.nestedSubmenu.map(
                                                                    (
                                                                        nestedItem
                                                                    ) => (
                                                                        <Link
                                                                            key={
                                                                                nestedItem.href
                                                                            }
                                                                            href={
                                                                                nestedItem.href
                                                                            }
                                                                            onClick={() =>
                                                                                setOpen(
                                                                                    false
                                                                                )
                                                                            }
                                                                            className="block py-2 text-sm text-foreground/60 hover:text-primary"
                                                                        >
                                                                            {
                                                                                nestedItem.label
                                                                            }
                                                                        </Link>
                                                                    )
                                                                )}
                                                            </CollapsibleContent>
                                                        </Collapsible>
                                                    ) : (
                                                        <Link
                                                            key={subItem.href}
                                                            href={subItem.href}
                                                            onClick={() =>
                                                                setOpen(false)
                                                            }
                                                            className="block py-2 text-sm text-foreground/60 hover:text-primary"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    )
                                                )}
                                            </CollapsibleContent>
                                        </Collapsible>
                                    ) : (
                                        <Link
                                            key={route.href}
                                            href={route.href}
                                            onClick={() => setOpen(false)}
                                            className={cn(
                                                'text-sm transition-colors hover:text-primary py-2 font-semibold',
                                                pathname === route.href
                                                    ? 'text-foreground'
                                                    : 'text-foreground/60'
                                            )}
                                        >
                                            {route.label}
                                        </Link>
                                    )
                                )}
                                <Button className="mt-4 rounded-full">
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
