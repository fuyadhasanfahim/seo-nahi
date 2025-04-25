import { z } from 'zod';

export const contactValidation = z.object({
    name: z.string().nonempty('Please provide your name.'),
    email: z.string().nonempty('A valid email address is required.'),
    company: z.string().optional(),
    country: z.string().nonempty('Please specify your country.'),
    phoneNumber: z
        .string()
        .nonempty('A phone number is required for further communication.'),
    message: z
        .string()
        .nonempty('Kindly include a message detailing your inquiry.'),
});
