import nodemailer from 'nodemailer';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const company = formData.get('company') as string;
        const country = formData.get('country') as string;
        const phoneNumber = formData.get('phoneNumber') as string;
        const driveLink = formData.get('driveLink') as string;
        const servicesJson = formData.get('services') as string;
        const message = formData.get('message') as string;

        const services = JSON.parse(servicesJson || '[]');

        if (
            !name ||
            !email ||
            !country ||
            !phoneNumber ||
            !message ||
            !services.length
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'All required fields must be filled.',
                },
                { status: 400 }
            );
        }

        // Process attachments directly from formData
        const attachments: { filename: string; content: Buffer }[] = [];

        for (let i = 0; i < 5; i++) {
            const file = formData.get(`image-${i}`) as File;

            if (file && file.size > 0) {
                const fileBuffer = Buffer.from(await file.arrayBuffer());
                attachments.push({
                    filename: file.name,
                    content: fileBuffer,
                });
            }
        }

        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER || '',
                pass: process.env.EMAIL_PASS || '',
            },
        });

        const emailContent = `
            === QUOTE REQUEST ===
            
            Name: ${name}
            Email: ${email}
            Company: ${company || 'Not provided'}
            Country: ${country}
            Phone Number: ${phoneNumber}
            
            Services Requested:
            ${services.map((service: string) => `- ${service}`).join('\n')}
            
            Google Drive Link: ${driveLink || 'Not provided'}
            
            Message:
            ${message}
        `;

        const htmlContent = `
            <h2>New Quote Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Phone Number:</strong> ${phoneNumber}</p>
            
            <h3>Services Requested:</h3>
            <ul>
                ${services
                    .map((service: string) => `<li>${service}</li>`)
                    .join('')}
            </ul>
            
            <p><strong>Google Drive Link:</strong> ${
                driveLink
                    ? `<a href="${driveLink}" target="_blank">${driveLink}</a>`
                    : 'Not provided'
            }</p>
            
            <h3>Message:</h3>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `;

        const mailOptions = {
            from: `"Quote System" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: `Quote Request from ${name}`,
            text: emailContent,
            html: htmlContent,
            attachments: attachments,
        };

        await transport.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: 'Quote request sent successfully',
        });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log(String(error));
        }
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to process quote request',
                error: error instanceof Error ? error.message : String(error),
            },
            { status: 500 }
        );
    }
}

export const config = {
    api: {
        bodyParser: false,
        responseLimit: '30mb',
    },
};
