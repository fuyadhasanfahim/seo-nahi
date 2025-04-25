import nodemailer from 'nodemailer';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { name, email, company, country, phoneNumber, message } =
            await req.json();

        if (!name || !email || !country || !phoneNumber || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'All required fields must be filled.',
                },
                { status: 400 }
            );
        }

        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: 'New Contact Form Submission',
            text: `
                Name: ${name}
                Email: ${email}
                Company: ${company}
                Country: ${country}
                Phone Number: ${phoneNumber}
                Message: ${message}
            `,
        };

        await transport.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: 'Email sent successfully',
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: 'Failed to send email', error },
            { status: 500 }
        );
    }
}
