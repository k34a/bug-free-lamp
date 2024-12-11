import { ENV } from "@/lib/cfg";
import { Client } from "@notionhq/client";
import { emailBody, emailSubject } from "./cfg";
import { emailNotifier } from "@/lib/emailfns";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        const { token, ...formData } = data;

        if (ENV.NODE_ENV === "production") {
            // check for validity of request in production
            console.info({ token });
            const response = await fetch(
                `https://challenges.cloudflare.com/turnstile/v0/siteverify`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams({
                        secret: ENV.TURNSTILE_SECRET_KEY,
                        response: token,
                    }),
                }
            );
            const turnstileData = await response.json();
            if (!turnstileData.success) {
                return Response.json(
                    {
                        error: "Invalid token",
                    },
                    {
                        status: 400,
                    }
                );
            }
        }

        const notion = new Client({
            auth: ENV.NOTION_WRITE_TOKEN,
        });

        await notion.pages.create({
            parent: {
                database_id: ENV.NOTION_CONTACTUS,
            },
            properties: {
                FirstName: {
                    title: [
                        {
                            text: {
                                content: formData.firstName,
                            },
                        },
                    ],
                },
                LastName: {
                    rich_text: [
                        {
                            text: {
                                content: formData.lastName,
                            },
                        },
                    ],
                },
                Email: {
                    email: formData.email,
                },
                Message: {
                    rich_text: [
                        {
                            text: {
                                content: formData.message,
                            },
                        },
                    ],
                },
            },
        });
        const mainBody = `
                <div class="container">
                    <h1 class="heading">Message from Larry Rowbs Foundation Website</h1>
                    <h2 class="sub-heading">Kindly reach out to:</h2>
                    <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
                    <p><strong>Message:</strong> ${formData.message}</p>
                    <p><strong>Email:</strong> ${formData.email}</p>
                    <a href="mailto:${formData.email}" class="button">Contact Member</a>
                    <p class="footer"><a href="https://larryrowbsfoundation.org" style="color: green">Larry Rowbs Foundation</a> &copy; 2023 All rights reserved.</p>
                </div>
            `;
        console.info("Saved data to notion.");
        await emailNotifier(
            "info@larryrowbsfoundation.org",
            emailSubject,
            emailBody.replace("{{EmailBody}}", mainBody)
        );
        console.info("Email sent to the admins.");
        return Response.json({});
    } catch (err) {
        console.error(err);
        return Response.json(
            { error: "Unable to send your query, please try again later." },
            {
                status: 400,
            }
        );
    }
}
