import { z } from 'zod';

const getQuoteValidation = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    company: z.string().optional(),
    country: z.string().min(1),
    phoneNumber: z.string().min(1),
    upload: z.string().optional(),
    services: z.array(z.string()).min(1, 'Select at least one service'),
    message: z.string().min(1),
});

export default getQuoteValidation;
