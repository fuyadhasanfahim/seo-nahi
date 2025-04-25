import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
    title: 'Home | MD Ashaduzzaman Asad',
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
