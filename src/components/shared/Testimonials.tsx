import { cn } from '@/lib/utils';
import { Marquee } from '../ui/marquee';
import Image from 'next/image';
import { Badge } from '../ui/badge';

export const reviews = [
    {
        name: 'kaiserstudios',
        username: '@kaiserstudios',
        body: 'There’s a reason I keep coming back here – and it’s not without reason! The quality and service are simply outstanding. The quick response to inquiries shows that great attention to detail is given. You truly feel understood because they know...',
        stars: 5,
        img: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744623733/vyyg1frmricrgc6xv7xt.webp',
    },
    {
        name: 'Rickzb',
        username: '@rickzb',
        body: 'We’ve used Asad multiple times now for clear cutting our product images, and he consistently delivers exceptional results. Every time we have a job like this, we go straight to him—his attention to detail and fast turnaround are second to...',
        img: '',
        stars: 5,
    },
    {
        name: 'Bykmdesigns',
        username: '@bykmdesigns',
        body: 'Md was easy to work with from the start. Very communicative and responsive. The work was delivered to me within the delivery time frame and everything was easy to access. The whole process was pretty seamless and I have no complaints. Thank you!',
        img: '',
        stars: 5,
    },
    {
        name: 'Fabianheigel',
        username: '@fabianheigel',
        body: 'As always I am completely satisfied with the results that I got! Communication was super convenient, delivery time was very quick and the result is 100% what I requested. Would absolutely recommend and will definitely come back with more requests! Thank you!',
        img: '',
        stars: 5,
    },
    {
        name: 'Berqen',
        username: '@berqen',
        body: 'Great job well done, once again. Been using this seller for a lot of different work recently, and every time the results are great!',
        img: 'https://res.cloudinary.com/dny7zfbg9/image/upload/v1744624523/uh3vvlum0ibdza6sp9ab.webp',
        stars: 5,
    },
];

const ReviewCard = ({
    img,
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
                {img ? (
                    <Image
                        className="rounded-full object-cover border"
                        width={40}
                        height={40}
                        alt={name}
                        src={img}
                    />
                ) : (
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-semibold">
                        {name[0].toUpperCase()}
                    </div>
                )}
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
