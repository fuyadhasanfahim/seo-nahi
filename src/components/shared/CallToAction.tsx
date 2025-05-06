import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Contact from './Contact';

export default function CallToAction() {
    return (
        <section className="padding-x padding-y" id="contact-me">
            <div className="container">
                <div className="flex w-full flex-col gap-16 overflow-hidden rounded-lg bg-accent p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-16">
                    <div className="flex-1 text-center lg:text-start">
                        <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6 font-amulya">
                            Ready to Boost Your Business?
                        </h3>
                        <p className="max-w-xl mx-auto lg:mx-0 text-muted-foreground lg:text-lg">
                            Let’s get started today!
                        </p>
                    </div>

                    <div className="flex flex-col justify-center gap-2 sm:flex-row lg:justify-end">
                        <Link href={'#portfolio'}>
                            <Button
                                variant="outline"
                                size={'lg'}
                                className="w-full cursor-pointer"
                            >
                                Portfolio
                            </Button>
                        </Link>

                        <Contact icon />
                    </div>
                </div>
            </div>
        </section>
    );
}
