import { NumberTicker } from '../ui/number-ticker';

const stats = [
    {
        id: 'stat-1',
        value: 5,
        status: '+',
        label: 'Years of experience',
    },
    {
        id: 'stat-2',
        value: 120,
        status: '+',
        label: 'Jobs done successfully',
    },
    {
        id: 'stat-3',
        value: 5,
        status: '+',
        label: 'Awards Achievement',
    },
    {
        id: 'stat-4',
        value: 50,
        status: '+',
        label: 'Worldwide client',
    },
];

export default function Stats() {
    return (
        <section className="padding-x padding-y bg-accent">
            <div className="container">
                <div className="flex flex-col gap-4 text-center">
                    <h2 className="text-2xl font-bold md:text-4xl font-amulya">
                        Platform performance insights
                    </h2>
                    <p>Ensuring stability and scalability for all users</p>
                </div>
                <div className="mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="flex flex-col gap-4 items-center"
                        >
                            <div className="text-6xl">
                                <NumberTicker
                                    value={stat.value}
                                    className="text-6xl font-amulya text-primary"
                                />
                                {stat.status}
                            </div>
                            <p className="text-base text-center md:text-lg text-accent-foreground">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
