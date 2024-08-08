import { ENV } from "@/lib/cfg";
import { Client } from "@notionhq/client";
import { emailBody, emailSubject } from "./cfg";
import { emailNotifier } from "@/lib/emailfns";
import { validateEmail } from "@/lib/commonFrontEndFns";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        if (!validateEmail(data.email)) {
            throw Error(`Invalid email: ${data.email}`);
        }
        const notion = new Client({
            auth: ENV.NOTION_WRITE_TOKEN,
        });
        await notion.pages.create({
            parent: {
                database_id: ENV.NOTION_SUBSCRIBE,
            },
            properties: {
                Email: {
                    email: data.email,
                },
                FormType: {
                    rich_text: [
                        {
                            text: {
                                content: data.type,
                            },
                        },
                    ],
                },
            },
        });
        console.info("Added email to notion.");
        await emailNotifier(data.email, emailSubject, emailBody);
        console.info(`Sent email to: ${data.email}.`);
        return Response.json({});
    } catch (err) {
        console.error(err);
        return Response.json(
            { error: "Unable to subscribe, please try again later." },
            {
                status: 400,
            }
        );
    }
}
