import { Resend } from "resend";
import { NextResponse } from "next/server";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    subject: z.string().min(5).max(80),
    message: z.string().min(20).max(500),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const parsed = contactSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid input" },
                { status: 400 },
            );
        }

        const { name, email, subject, message } = parsed.data;

        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "562mahdiyadegari@gmail.com",
            replyTo: email,
            subject: `[Portfolio] ${subject}`,
            text: `from: ${name} (${email})\n\n${message}`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 },
        );
    }
}
