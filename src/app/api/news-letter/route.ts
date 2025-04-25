import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        if (!data) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'The data is required',
                },
                {
                    status: 404,
                }
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
            from: data.email,
            to: process.env.EMAIL_USER,
            subject: 'For news letter',
            text: 'Subscribe for news letter',
        };

        await transport.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: 'Subscribed successfully',
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: 'Failed to subscribe.', error },
            { status: 500 }
        );
    }
}
