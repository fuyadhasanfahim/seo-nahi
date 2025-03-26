'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const contactFormSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Invalid email address.' }),
    phone: z
        .string()
        .optional()
        .refine((val) => val === undefined || val.length >= 10, {
            message: 'Phone number must be at least 10 characters.',
        }),
    service: z.string().optional(),
    message: z
        .string()
        .min(10, { message: 'Message must be at least 10 characters.' })
        .max(500, { message: 'Message cannot exceed 500 characters.' }),
});

export default function ContactPage() {
    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
        },
    });

    const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
        try {
            console.log('Form submitted', values);

            toast('Message Sent Successfully', {
                description: 'Our team will contact you soon!',
            });

            form.reset();
        } catch (error) {
            toast((error as Error).message || 'Submission Error', {
                description: 'Unable to send message. Please try again.',
            });
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            content: 'contact@seoexpert.com',
            link: 'mailto:contact@seoexpert.com',
        },
        {
            icon: Phone,
            title: 'Phone',
            content: '(555) 123-4567',
            link: 'tel:5551234567',
        },
        {
            icon: MapPin,
            title: 'Address',
            content: '123 Digital Marketing St, Online City, IN 12345',
        },
    ];

    const services = [
        { value: 'seo-audit', label: 'SEO Audit' },
        { value: 'keyword-research', label: 'Keyword Research' },
        { value: 'content-strategy', label: 'Content Strategy' },
        { value: 'local-seo', label: 'Local SEO' },
        { value: 'technical-seo', label: 'Technical SEO' },
        { value: 'link-building', label: 'Link Building' },
    ];

    return (
        <section>
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary mb-4">
                        Contact Our SEO Experts
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Ready to elevate your online presence? Reach out for a
                        personalized SEO consultation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl">
                                Get in Touch
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-6"
                                >
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Full Name
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Your full name"
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
                                                    <FormLabel>
                                                        Email Address
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="email"
                                                            placeholder="you@company.com"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Phone Number
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="tel"
                                                            placeholder="(Optional) Your phone"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormDescription>
                                                        Optional, but helpful
                                                        for quick follow-up
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="service"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Service of Interest
                                                    </FormLabel>
                                                    <FormControl>
                                                        <select
                                                            {...field}
                                                            className="w-full p-2 border rounded"
                                                        >
                                                            <option value="">
                                                                Select a Service
                                                            </option>
                                                            {services.map(
                                                                (service) => (
                                                                    <option
                                                                        key={
                                                                            service.value
                                                                        }
                                                                        value={
                                                                            service.value
                                                                        }
                                                                    >
                                                                        {
                                                                            service.label
                                                                        }
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    </FormControl>
                                                    <FormDescription>
                                                        What SEO service are you
                                                        interested in?
                                                    </FormDescription>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Your Message
                                                </FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Tell us about your SEO goals..."
                                                        className="resize-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription>
                                                    Provide details about your
                                                    project or goals
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        className="w-full"
                                        disabled={form.formState.isSubmitting}
                                    >
                                        <Send className="mr-2" size={20} />
                                        {form.formState.isSubmitting
                                            ? 'Sending...'
                                            : 'Send Message'}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>

                    <div className="space-y-6 gird grid-cols-1 md:grid-cols-2">
                        {contactInfo.map((info) => (
                            <Card
                                key={info.title}
                                className="hover:shadow-md transition-shadow"
                            >
                                <CardContent className="flex items-center p-6 space-x-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <info.icon
                                            className="text-primary"
                                            size={32}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            {info.title}
                                        </h3>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                className="text-muted-foreground hover:text-primary"
                                            >
                                                {info.content}
                                            </a>
                                        ) : (
                                            <p className="text-muted-foreground">
                                                {info.content}
                                            </p>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            <Card className="bg-primary/10 mx-auto max-w-3xl">
                <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-4 text-primary">
                        Book a Free Consultation
                    </h3>
                    <p className="text-muted-foreground mb-4">
                        Schedule a 30-minute strategy session with our SEO
                        experts.
                    </p>
                    <Button variant="outline" className="w-full">
                        Schedule Consultation
                    </Button>
                </CardContent>
            </Card>
        </section>
    );
}
