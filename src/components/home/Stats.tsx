export default function Stats() {
    return (
        <section className="padding-x padding-y bg-white dark:bg-gray-950">
            <div className="container px-4 md:px-6 max-w-screen-xl">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
                    <div className="flex flex-col items-center justify-center space-y-2 p-4 text-center">
                        <div className="text-3xl font-bold md:text-4xl">
                            3.5x
                        </div>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Average Traffic Increase
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-2 p-4 text-center">
                        <div className="text-3xl font-bold md:text-4xl">
                            87%
                        </div>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Conversion Rate Improvement
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-2 p-4 text-center">
                        <div className="text-3xl font-bold md:text-4xl">
                            150+
                        </div>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Keywords Ranked #1
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-2 p-4 text-center">
                        <div className="text-3xl font-bold md:text-4xl">
                            $2.4M
                        </div>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Additional Revenue Generated
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
