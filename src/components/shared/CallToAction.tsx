import { Button } from '../ui/button';
import clsx from 'clsx';

export default function CallToAction() {
    return (
        <section
            className={clsx(
                'padding-x padding-y',
                'bg-gray-200 text-gray-900',
                'dark:bg-gray-900 dark:text-white'
            )}
        >
            <div className="container px-4 md:px-6 max-w-screen-xl">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Ready to Improve Your SEO Rankings?
                        </h2>
                        <p className="mx-auto max-w-[600px] text-gray-800 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Get a free, no-obligation SEO audit and discover
                            opportunities to improve your search rankings.
                        </p>
                    </div>
                    <div className="w-full max-w-sm space-y-2">
                        <form className="flex flex-col space-y-3 sm:flex-row sm:space-x-2 sm:space-y-0">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={clsx(
                                    'flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                                    'bg-background text-black border-input',
                                    'dark:bg-gray-800 dark:text-white dark:border-gray-700'
                                )}
                            />
                            <Button
                                type="submit"
                                size="lg"
                                className="bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                            >
                                Get Free Audit
                            </Button>
                        </form>
                        <p className="text-xs text-gray-200 dark:text-gray-400">
                            We respect your privacy. No spam, just actionable
                            SEO insights.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
