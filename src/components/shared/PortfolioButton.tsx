'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '../ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from 'react-compare-slider';
import { portfolioImages } from '@/data/portfolioImages';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function PortfolioButton() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="cursor-pointer">
                    See More
                </Button>
            </DialogTrigger>
            <DialogContent className="w-full rounded-2xl">
                <ScrollArea className="h-[90vh] pr-6">
                    <DialogHeader>
                        <DialogTitle>My Portfolio</DialogTitle>
                    </DialogHeader>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-6 py-6">
                        {loading
                            ? Array.from({ length: 8 }).map((_, index) => (
                                  <Skeleton
                                      key={index}
                                      className="h-[344px] w-full rounded-md"
                                  />
                              ))
                            : portfolioImages.map(({ images }, index) => (
                                  <figure className="relative" key={index}>
                                      <ReactCompareSlider
                                          itemOne={
                                              <ReactCompareSliderImage
                                                  src={images.before}
                                                  alt="before image"
                                              />
                                          }
                                          itemTwo={
                                              <ReactCompareSliderImage
                                                  src={images.after}
                                                  alt="after image"
                                              />
                                          }
                                          changePositionOnHover
                                          className="rounded-md border border-black/10"
                                      />
                                  </figure>
                              ))}
                    </div>

                    <DialogFooter>
                        <Link
                            href={
                                'https://webbriks.com/portfolio/photo-editing-service'
                            }
                            target="_blank"
                            className="flex items-center justify-center w-full"
                        >
                            <Button size={'lg'} className="cursor-pointer">
                                View More
                                <ExternalLink />
                            </Button>
                        </Link>
                    </DialogFooter>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
