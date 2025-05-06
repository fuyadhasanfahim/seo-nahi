import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
    title: 'Naimur Rahman Nahi - SEO Expert',
    description:
        'A Digital Marketing Expert specializing in driving online growth and engagement through innovative strategies. I specialize in Facebook and Instagram marketing, Google Ads, SEO, and comprehensive digital marketing strategies. My goal is to help businesses grow by creating impactful campaigns that drive engagement and deliver measurable results.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://api.fontshare.com/v2/css?f[]=synonym@500&f[]=amulya@700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className={`antialiased`}>
                <Navbar />
                {children}
                <Toaster />
            </body>
        </html>
    );
}
