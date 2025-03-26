import { Linkedin, Facebook, Instagram } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

export default function Footer() {
    return (
        <>
            <Separator />

            <footer className="bg-background padding-x padding-y">
                <div className="container mx-auto">
                    <Card className="bg-card text-card-foreground border-border shadow-lg">
                        <CardContent className="p-6 md:p-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-primary">
                                        SEO Expert
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Elevating your online presence through
                                        strategic SEO solutions that drive real
                                        results.
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                                    >
                                        Get Free Consultation
                                    </Button>
                                </div>

                                {/* Quick Links */}
                                <div className="space-y-4">
                                    <h4 className="text-xl font-semibold text-foreground">
                                        Quick Navigation
                                    </h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {[
                                            {
                                                href: '/services',
                                                label: 'Services',
                                            },
                                            {
                                                href: '/portfolio',
                                                label: 'Portfolio',
                                            },
                                            { href: '/blog', label: 'Blog' },
                                            {
                                                href: '/contact',
                                                label: 'Contact',
                                            },
                                        ].map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact & Social */}
                                <div className="space-y-4">
                                    <h4 className="text-xl font-semibold text-foreground">
                                        Connect With Us
                                    </h4>
                                    <div className="flex space-x-4 mb-4">
                                        {[
                                            {
                                                icon: Linkedin,
                                                href: 'https://linkedin.com/company/seoexpert',
                                                className:
                                                    'hover:text-[#0A66C2]',
                                            },
                                            {
                                                icon: Facebook,
                                                href: 'https://facebook.com/seoexpert',
                                                className:
                                                    'hover:text-[#1877F2]',
                                            },
                                            {
                                                icon: Instagram,
                                                href: 'https://instagram.com/seoexpert',
                                                className:
                                                    'hover:text-[#E1306C]',
                                            },
                                        ].map(
                                            ({
                                                icon: Icon,
                                                href,
                                                className,
                                            }) => (
                                                <Link
                                                    key={href}
                                                    href={href}
                                                    target="_blank"
                                                    className={`text-muted-foreground ${className} transition-colors`}
                                                >
                                                    <Icon size={24} />
                                                </Link>
                                            )
                                        )}
                                    </div>
                                    <div className="text-muted-foreground text-sm space-y-2">
                                        <p>📧 contact@seoexpert.com</p>
                                        <p>📞 (555) 123-4567</p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Bottom */}
                            <div className="border-t border-border mt-8 pt-6 text-center">
                                <p className="text-muted-foreground text-sm">
                                    © {new Date().getFullYear()} SEO Expert. All
                                    Rights Reserved.
                                </p>
                                <div className="mt-2 space-x-4">
                                    <Link
                                        href="/privacy"
                                        className="text-muted-foreground hover:text-primary text-xs"
                                    >
                                        Privacy Policy
                                    </Link>
                                    <Link
                                        href="/terms"
                                        className="text-muted-foreground hover:text-primary text-xs"
                                    >
                                        Terms of Service
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </footer>
        </>
    );
}
