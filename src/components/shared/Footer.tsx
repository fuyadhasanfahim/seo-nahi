import Image from 'next/image';

const menuItems = [
    {
        title: 'Product',
        links: [
            { text: 'Overview', url: '#' },
            { text: 'Pricing', url: '#' },
            { text: 'Marketplace', url: '#' },
            { text: 'Features', url: '#' },
            { text: 'Integrations', url: '#' },
            { text: 'Pricing', url: '#' },
        ],
    },
    {
        title: 'Company',
        links: [
            { text: 'About', url: '#' },
            { text: 'Team', url: '#' },
            { text: 'Blog', url: '#' },
            { text: 'Careers', url: '#' },
            { text: 'Contact', url: '#' },
            { text: 'Privacy', url: '#' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { text: 'Help', url: '#' },
            { text: 'Sales', url: '#' },
            { text: 'Advertise', url: '#' },
        ],
    },
    {
        title: 'Social',
        links: [
            { text: 'Twitter', url: '#' },
            { text: 'Instagram', url: '#' },
            { text: 'LinkedIn', url: '#' },
        ],
    },
];

const bottomLinks = [
    { text: 'Terms and Conditions', url: '#' },
    { text: 'Privacy Policy', url: '#' },
];

export default function Footer() {
    return (
        <section className="py-32">
            <div className="container">
                <footer>
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                        <div className="col-span-2 mb-8 lg:mb-0">
                            <div className="flex items-center gap-2 lg:justify-start">
                                <a href="https://shadcnblocks.com">
                                    <Image
                                        src={
                                            'https://www.shadcnblocks.com/images/block/block-1.svg'
                                        }
                                        alt={
                                            'https://www.shadcnblocks.com/images/block/block-1.svg'
                                        }
                                        title={
                                            'https://www.shadcnblocks.com/images/block/block-1.svg'
                                        }
                                        height={40}
                                        width={40}
                                    />
                                </a>
                                <p className="text-xl font-semibold">
                                    Shadcnblocks.com
                                </p>
                            </div>
                            <p className="mt-4 font-bold">
                                Components made easy.
                            </p>
                        </div>
                        {menuItems.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className="mb-4 font-bold">
                                    {section.title}
                                </h3>
                                <ul className="space-y-4 text-muted-foreground">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className="font-medium hover:text-primary"
                                        >
                                            <a href={link.url}>{link.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
                        <p>© 2024 Shadcnblocks.com. All rights reserved.</p>
                        <ul className="flex gap-4">
                            {bottomLinks.map((link, linkIdx) => (
                                <li
                                    key={linkIdx}
                                    className="underline hover:text-primary"
                                >
                                    <a href={link.url}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
}
