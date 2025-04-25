/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X, Upload, Loader2 } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import * as z from 'zod';
import { ScrollArea } from '../ui/scroll-area';
import { toast } from 'sonner';

// Define the validation schema directly since we don't have access to the import
const getQuoteValidation = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    company: z.string().optional(),
    country: z.string().min(1, { message: 'Country is required' }),
    phoneNumber: z.string().min(1, { message: 'Phone number is required' }),
    driveLink: z.string().optional(),
    services: z
        .array(z.string())
        .min(1, { message: 'Select at least one service' }),
    message: z.string().min(1, { message: 'Message is required' }),
});

const services = [
    'eCommerce Photo Editing Service',
    'Clipping Path Service',
    'Background Editing Service',
    'Image Masking Service',
    'Shadow Creation Service',
    'Photo Retouching Service',
    'Ghost Mannequin Service',
    'Color Correction Service',
    'Raster To Vector',
];

export default function GetQuote() {
    const [uploadedImages, setUploadedImages] = useState<FileWithPreview[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm({
        resolver: zodResolver(getQuoteValidation),
        defaultValues: {
            name: '',
            email: '',
            company: '',
            country: '',
            phoneNumber: '',
            driveLink: '',
            services: [],
            message: '',
        },
    });

    const onSubmit = async (data: z.infer<typeof getQuoteValidation>) => {
        setIsSubmitting(true);

        const formData = new FormData();

        Object.keys(data).forEach((key) => {
            if (key === 'services') {
                formData.append(key, JSON.stringify(data[key]));
            } else {
                formData.append(key, data[key as keyof typeof data] as string);
            }
        });

        uploadedImages.forEach((image, index) => {
            formData.append(`image-${index}`, image);
        });

        try {
            const response = await fetch(`/api/quote`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                toast.success('Quote request submitted successfully!');

                form.reset();
                setUploadedImages([]);

                const closeButton =
                    document.getElementById('close-quote-dialog');
                if (closeButton) {
                    closeButton.click();
                }
            }
        } catch (error) {
            toast.error(
                (error as Error).message ||
                    'An error occurred while submitting your request. Please try again.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const files = Array.from(e.target.files || []) as File[];
        addFiles(files);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        setIsDragging(false);
        const files: File[] = Array.from(e.dataTransfer.files);
        addFiles(files);
    };

    interface FileWithPreview extends File {
        preview?: string;
    }

    const addFiles = (files: File[]) => {
        const imageFiles: FileWithPreview[] = files.filter((file) =>
            file.type.startsWith('image/')
        );
        const totalImages: number = uploadedImages.length + imageFiles.length;

        if (totalImages > 5) {
            alert('You can only upload up to 5 images');
            const allowedImages: FileWithPreview[] = imageFiles.slice(
                0,
                5 - uploadedImages.length
            );
            setUploadedImages([...uploadedImages, ...allowedImages]);
        } else {
            setUploadedImages([...uploadedImages, ...imageFiles]);
        }
    };

    const removeImage = (index: number): void => {
        setUploadedImages(uploadedImages.filter((_, i) => i !== index));
    };

    return (
        <Dialog>
            <DialogTrigger
                className="rounded-full inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 px-6 has-[>svg]:px-4 cursor-pointer"
                id="close-quote-dialog"
            >
                Get a Quote
            </DialogTrigger>

            <DialogContent className="max-w-md md:max-w-lg lg:max-w-2xl rounded-2xl">
                <ScrollArea className="h-[80vh] pr-6">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-amulya mb-4">
                            Request Quote Form
                        </DialogTitle>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-1">
                                    <div className="md:col-span-2 p-4 bg-gray-100 rounded-lg">
                                        <h3 className="font-medium mb-2">
                                            Upload Images (Max 5)
                                        </h3>

                                        <div
                                            className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                                                isDragging
                                                    ? 'border-primary bg-primary/5'
                                                    : 'border-gray-300 hover:border-primary/50'
                                            }`}
                                            onDragOver={handleDragOver}
                                            onDragLeave={handleDragLeave}
                                            onDrop={handleDrop}
                                            onClick={() => {
                                                const fileUploadInput =
                                                    document.getElementById(
                                                        'file-upload'
                                                    );
                                                if (fileUploadInput) {
                                                    fileUploadInput.click();
                                                }
                                            }}
                                        >
                                            <Upload className="mx-auto h-8 w-8 text-gray-500" />
                                            <p className="mt-2 text-sm text-gray-500">
                                                Drag and drop files here or{' '}
                                                <span className="text-primary font-medium">
                                                    browse
                                                </span>
                                            </p>
                                            <p className="mt-1 text-xs text-gray-400">
                                                Supported formats: JPG, PNG, PSD
                                                (Max 5 images)
                                            </p>
                                            <input
                                                id="file-upload"
                                                type="file"
                                                multiple
                                                accept="image/*"
                                                className="hidden"
                                                onChange={handleFileChange}
                                            />
                                        </div>

                                        {uploadedImages.length > 0 && (
                                            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                                                {uploadedImages.map(
                                                    (file, index) => (
                                                        <div
                                                            key={index}
                                                            className="relative group"
                                                        >
                                                            <div className="aspect-square rounded-md overflow-hidden bg-gray-100 border">
                                                                <img
                                                                    src={URL.createObjectURL(
                                                                        file
                                                                    )}
                                                                    alt={`Preview ${
                                                                        index +
                                                                        1
                                                                    }`}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            </div>
                                                            <button
                                                                type="button"
                                                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
                                                                onClick={() =>
                                                                    removeImage(
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                <X size={14} />
                                                            </button>
                                                            <p className="text-xs truncate mt-1">
                                                                {file.name}
                                                            </p>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        )}

                                        <div className="mt-4">
                                            <FormField
                                                control={form.control}
                                                name="driveLink"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-base">
                                                            Or provide a Google
                                                            Drive link
                                                            (optional)
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Paste Google Drive link with shared access"
                                                                type="text"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem className="col-span-2">
                                                <FormLabel className="text-base">
                                                    Name *
                                                </FormLabel>
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

                                    <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-base">
                                                        Email *
                                                    </FormLabel>
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
                                                    <FormLabel className="text-base">
                                                        Company
                                                    </FormLabel>
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
                                                    <FormLabel className="text-base">
                                                        Country *
                                                    </FormLabel>
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
                                                    <FormLabel className="text-base">
                                                        Phone *
                                                    </FormLabel>
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
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="services"
                                        render={() => (
                                            <FormItem className="space-y-2 col-span-2">
                                                <FormLabel className="text-base">
                                                    Services Required *
                                                </FormLabel>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {services.map(
                                                        (item, index) => (
                                                            <FormField
                                                                key={index}
                                                                control={
                                                                    form.control
                                                                }
                                                                name="services"
                                                                render={({
                                                                    field,
                                                                }) => {
                                                                    return (
                                                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                                            <FormControl>
                                                                                <Checkbox
                                                                                    checked={field.value?.includes(
                                                                                        item
                                                                                    )}
                                                                                    onCheckedChange={(
                                                                                        checked
                                                                                    ) => {
                                                                                        return checked
                                                                                            ? field.onChange(
                                                                                                  [
                                                                                                      ...field.value,
                                                                                                      item,
                                                                                                  ]
                                                                                              )
                                                                                            : field.onChange(
                                                                                                  field.value?.filter(
                                                                                                      (
                                                                                                          value
                                                                                                      ) =>
                                                                                                          value !==
                                                                                                          item
                                                                                                  )
                                                                                              );
                                                                                    }}
                                                                                />
                                                                            </FormControl>
                                                                            <FormLabel className="text-sm font-normal">
                                                                                {
                                                                                    item
                                                                                }
                                                                            </FormLabel>
                                                                        </FormItem>
                                                                    );
                                                                }}
                                                            />
                                                        )
                                                    )}
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem className="col-span-2">
                                                <FormLabel className="text-base">
                                                    Message *
                                                </FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Describe your project requirements in detail..."
                                                        className="min-h-20"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="md:col-span-2">
                                        <Button
                                            type="submit"
                                            className="w-full"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Submitting...
                                                </>
                                            ) : (
                                                'Submit Quote Request'
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </Form>
                    </DialogHeader>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
