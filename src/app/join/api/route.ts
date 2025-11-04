import { ENV } from '@/lib/cfg'
import { Client } from '@notionhq/client'
import { emailBody, emailSubject } from './cfg'
import { emailNotifier } from '@/lib/emailfns'

export async function POST(request: Request) {
    try {
        const data = await request.json()

        const { token, ...formData } = data

        const notion = new Client({
            auth: ENV.NOTION_WRITE_TOKEN,
        })

        await notion.pages.create({
            parent: {
                database_id: ENV.NOTION_JOINUS,
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
                Contact: {
                    rich_text: [
                        {
                            text: {
                                content: formData.contact,
                            },
                        },
                    ],
                },
                LinkedIn: {
                    rich_text: [
                        {
                            text: {
                                content: formData.linkedin,
                            },
                        },
                    ],
                },
                Location: {
                    rich_text: [
                        {
                            text: {
                                content: formData.location,
                            },
                        },
                    ],
                },
                Skills: {
                    rich_text: [
                        {
                            text: {
                                content: formData.skills,
                            },
                        },
                    ],
                },
                Resume: {
                    rich_text: [
                        {
                            text: {
                                content: formData.resume,
                            },
                        },
                    ],
                },
            },
        })
        console.info('Saved data to notion.')
        const mainBody = `
                <div class="container">
                    <h1 class="heading">A new application to join LRF!</h1>
                    <h2 class="sub-heading">Kindly reach out to the applicant with the details below.</h2>
                    <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
                    <p><strong>Email:</strong> ${formData.email}</p>
                    <p><strong>Contact:</strong> ${formData.contact}</p>
                    <p><strong>LinkedIn:</strong> ${formData.linkedin}</p>
                    <p><strong>Location:</strong> ${formData.location}</p>
                    <p><strong>Skills:</strong> ${formData.skills}</p>
                    <p><strong>Resume:</strong> ${formData.resume}</p>
                    <a href="mailto:${formData.email}" class="button">Contact Member</a>
                    <p class="footer"><a href="https://larryrowbsfoundation.org" style="color: green">Larry Rowbs Foundation</a> &copy; 2023 All rights reserved.</p>
                </div>
            `
        await emailNotifier(
            'info@larryrowbsfoundation.org',
            emailSubject,
            emailBody.replace('{{EmailBody}}', mainBody)
        )
        console.info('Email sent to the admins.')
        return Response.json({})
    } catch (err) {
        console.error(err)
        return Response.json(
            {
                error: 'Unable to submit your application, please try again later.',
            },
            {
                status: 400,
            }
        )
    }
}
