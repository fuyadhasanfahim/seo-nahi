import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
    title: 'Naimur Rahman Nahi - SEO Expert',
    description:
        'Discover the expertise of Naimur Rahman Nahi, a seasoned SEO professional dedicated to optimizing online presence, driving organic traffic, and enhancing search engine rankings for businesses worldwide.',
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
