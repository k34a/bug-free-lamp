import { emailNotifier } from '@/lib/emailfns';
import { validateHCaptcha } from '../../lib/hcaptcha';

const { Client } = require('@notionhq/client');

let emailBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Larry Rowbs Foundation Membership Request</title>
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      font-family: Arial, sans-serif;
      font-size: 16px;
      line-height: 1.5;
      margin: 0;
      padding: 0;
      background-color: #f8f8f8;
      word-break: break-word;
      width: 100%;
    }
    
    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      box-shadow: 0px 3px 5px rgba(0,0,0,0.1);
    }
    
    .heading {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
    }
    
    .sub-heading {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
    }
    
    .button {
      display: inline-block;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      color: green;
      padding: 10px 20px;
      border-radius: 5px;
      margin-top: 20px;
      border: 2px solid green;
    }
    
    .footer {
      font-size: 14px;
      text-align: center;
      margin-top: 20px;
    }
    
    @media screen and (max-width: 600px) {
      .container {
        max-width: 100%;
      }
    }
  </style>
</head>
<body>
  {{EmailBody}}
</body>
</html>
`;

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const isTokenValid = await validateHCaptcha(req.body.token);
        if (!isTokenValid) {
            res.status(404).json({});
            return;
        }
        delete req.body.token;
        const notion = new Client({
            auth: process.env.NOTION_WRITE_TOKEN,
        });
        try {
            await notion.pages.create({
                parent: {
                    database_id: process.env.NOTION_JOINUS,
                },
                properties: {
                    FirstName: {
                        title: [
                            {
                                text: {
                                    content: req.body.firstName,
                                },
                            },
                        ],
                    },
                    LastName: {
                        rich_text: [
                            {
                                text: {
                                    content: req.body.lastName,
                                },
                            },
                        ],
                    },
                    Email: {
                        email: req.body.email,
                    },
                    Contact: {
                        rich_text: [
                            {
                                text: {
                                    content: req.body.contact,
                                },
                            },
                        ],
                    },
                    LinkedIn: {
                        rich_text: [
                            {
                                text: {
                                    content: req.body.linkedin,
                                },
                            },
                        ],
                    },
                    Location: {
                        rich_text: [
                            {
                                text: {
                                    content: req.body.location,
                                },
                            },
                        ],
                    },
                    Skills: {
                        rich_text: [
                            {
                                text: {
                                    content: req.body.skills,
                                },
                            },
                        ],
                    },
                    Resume: {
                        rich_text: [
                            {
                                text: {
                                    content: req.body.resume,
                                },
                            },
                        ],
                    },
                },
            });
            const mainBody = `
                <div class="container">
                    <h1 class="heading">A new application to join LRF!</h1>
                    <h2 class="sub-heading">Kindly reach out to the applicant with the details below.</h2>
                    <p><strong>Name:</strong> ${req.body.firstName} ${req.body.lastName}</p>
                    <p><strong>Email:</strong> ${req.body.email}</p>
                    <p><strong>Contact:</strong> ${req.body.contact}</p>
                    <p><strong>LinkedIn:</strong> ${req.body.linkedin}</p>
                    <p><strong>Location:</strong> ${req.body.location}</p>
                    <p><strong>Skills:</strong> ${req.body.skills}</p>
                    <p><strong>Resume:</strong> ${req.body.resume}</p>
                    <a href="mailto:${req.body.email}" class="button">Contact Member</a>
                    <p class="footer"><a href="https://larryrowbsfoundation.org" style="color: green">Larry Rowbs Foundation</a> &copy; 2023 All rights reserved.</p>
                </div>
            `;
            emailBody = emailBody.replace("{{EmailBody}}", mainBody)
            emailNotifier("info@larryrowbs.com", "New Application to join the Larry Rowbs Foundation", emailBody)
            res.status(200).json({});
        }
        catch (err) {
            console.log(err)
            res.status(400).json(err);
        }
    }
    else {
        res.status(404).json({})
    }
}
