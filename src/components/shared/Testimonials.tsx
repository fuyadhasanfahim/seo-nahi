import { cn } from '@/lib/utils';
import { Marquee } from '../ui/marquee';
import { Badge } from '../ui/badge';

const reviews = [
    {
        name: 'Jenna Hartley',
        username: '@jenna_h',
        body: 'Incredible experience from start to finish. The communication was clear, the results were flawless, and everything was delivered right on time. Truly professional work!',
        stars: 5,
        img: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744625555/sample-avatar1.webp',
    },
    {
        name: 'Olivier Gray',
        username: '@olivierg',
        body: 'The team was super responsive and paid great attention to detail. Our brand visuals look sharper than ever — couldn’t be more pleased with the outcome!',
        stars: 5,
        img: '',
    },
    {
        name: 'ThePixelRoom',
        username: '@thepixelroom',
        body: 'Fast, friendly, and top-quality service. We’ve used them for multiple campaigns now and each time the delivery has exceeded our expectations.',
        stars: 5,
        img: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744625620/sample-avatar2.webp',
    },
    {
        name: 'MartaDesigns',
        username: '@martadesigns',
        body: 'Everything went smoothly — super happy with the final results! Will definitely be back for more projects soon. Thank you for the great work!',
        stars: 5,
        img: '',
    },
    {
        name: 'Tom Kline',
        username: '@tomkline',
        body: 'A flawless experience every single time. The team delivers high-quality work with fast turnaround and excellent communication. Highly recommended!',
        stars: 5,
        img: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744625665/sample-avatar3.webp',
    },
];

const ReviewCard = ({
    name,
    username,
    body,
    stars = 5,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
    stars?: number;
}) => {
    return (
        <figure
            className={cn(
                'relative w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition'
            )}
        >
            <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-semibold">
                    {name[0].toUpperCase()}
                </div>
                <div>
                    <figcaption className="text-sm font-semibold dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        {username}
                    </p>
                </div>
            </div>
            <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                        key={i}
                        className={`h-4 w-4 ${
                            i < stars ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.943a1 1 0 00.95.69h4.145c.969 0 1.371 1.24.588 1.81l-3.356 2.44a1 1 0 00-.364 1.118l1.287 3.943c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.357 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.943a1 1 0 00-.364-1.118L2.671 9.37c-.783-.57-.38-1.81.588-1.81h4.145a1 1 0 00.95-.69l1.286-3.943z" />
                    </svg>
                ))}
            </div>
            <blockquote className="text-sm text-gray-700 dark:text-white/80">
                {body}
            </blockquote>
        </figure>
    );
};

export default function Testimonials() {
    return (
        <section className="padding-x padding-y bg-white">
            <div className="text-center mb-3 md:mb-4 lg:mb-6">
                <Badge variant="outline" className="mb-6">
                    Latest Updates
                </Badge>
                <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl font-amuly mx-auto">
                    Testimonials
                </h2>
                <p>See what clients says</p>
            </div>

            <div className="relative flex container flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:25s]">
                    {reviews.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
        </section>
    );
}
