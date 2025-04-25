'use client';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { contactValidation } from '@/validators/contact.validation.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Contact({
    className,
    icon,
}: {
    className?: string;
    icon?: boolean;
}) {
    const form = useForm({
        resolver: zodResolver(contactValidation),
        defaultValues: {
            name: '',
            email: '',
            company: '',
            country: '',
            phoneNumber: '',
            message: '',
        },
    });

    const onSubmit = async (data: z.infer<typeof contactValidation>) => {
        try {
            const response = await fetch(`/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success(
                    'Contact form submitted successfully. Wait for response.'
                );

                const dialogCloseButton = document.getElementById(
                    'close-dialog'
                ) as HTMLElement;
                dialogCloseButton?.click();
            }
        } catch (error) {
            toast.error((error as Error).message);
        }
    };

    return (
        <Dialog>
            <DialogTrigger
                className={cn(
                    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 cursor-pointer",
                    className
                )}
                id="close-dialog"
            >
                Contact Me
                {icon && <ArrowUpRight className="size-4" />}
            </DialogTrigger>
            <DialogContent className="pr-6 max-w-md">
                <DialogHeader>
                    <DialogTitle className="lg:text-xl font-amulya">
                        Fill all the required fields
                    </DialogTitle>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="py-4 grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2">
                                            <FormLabel>Name *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter your full name"
                                                    type="text"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter your email"
                                                    type="email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="company"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Company</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter company name"
                                                    type="text"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="country"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Country *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter country name"
                                                    type="text"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter your phone number"
                                                    type="tel"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2">
                                            <FormLabel>Message *</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Type your message here."
                                                    className="w-full"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    className="col-span-2"
                                    disabled={form.formState.isSubmitting}
                                >
                                    {form.formState.isSubmitting
                                        ? 'Submitting...'
                                        : 'Submit'}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
