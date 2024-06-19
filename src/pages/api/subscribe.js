import { emailNotifier } from "@/lib/emailfns";
import { validateHCaptcha } from "../../lib/hcaptcha";

const { Client } = require("@notionhq/client");

const emailBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Stylish Sustainability Webinar</title>
  <style>
    /* Global styles */
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
    
    /* Container for the email */
    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      box-shadow: 0px 3px 5px rgba(0,0,0,0.1);
    }
    
    /* Main heading */
    .heading {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
    }
    
    /* Sub heading */
    .sub-heading {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
    }
    
    /* Footer */
    .footer {
      font-size: 14px;
      text-align: center;
      margin-top: 20px;
    }
    
    /* Responsive styles */
    @media screen and (max-width: 600px) {
      .container {
        max-width: 100%;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="heading">You're Subscribed to the Larry Rowbs Foundation Newsletter!</h1>
    <p>Thank you for subscribing to the Larry Rowbs Foundation newsletter. We're excited to have you on board and to share updates on our work and the harms caused by the Fast Fashion Industry in Africa.</p>
		<p>If you have any questions, comments, or suggestions, please feel free to reach out to us at <a href="mailto:info@larryrowbsfoundation.org">info@larryrowbsfoundation.org<a/>. We value your opinion and appreciate your support.</p>
		<p>Stay tuned for our upcoming newsletters, and be sure to follow us on social media to stay up-to-date on our latest activities and initiatives.</p>
		<p>Best regards,</p>
		<p>The Larry Rowbs Foundation team</p>
    <p class="footer"><a href="https://larryrowbsfoundation.org" style="color: green">Larry Rowbs Foundation</a> &copy; 2023 All rights reserved.</p>
  </div>
</body>
</html>
`;

const emailSubject =
    "You're in! Welcome to the Larry Rowbs Foundation Newsletter";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const isTokenValid = await validateHCaptcha(req.body.token);
        if (!isTokenValid) {
            res.status(404).json({
                error: {
                    message:
                        "Please verify that you are not a robot! Try refreshing the page and resubmit.",
                },
            });
            return;
        }
        const notion = new Client({
            auth: process.env.NOTION_WRITE_TOKEN,
        });
        try {
            await notion.pages.create({
                parent: {
                    database_id: process.env.NOTION_SUBSCRIBE,
                },
                properties: {
                    Email: {
                        email: req.body.email,
                    },
                    FormType: {
                        rich_text: [
                            {
                                text: {
                                    content: req.body.type,
                                },
                            },
                        ],
                    },
                },
            });
            await emailNotifier(req.body.email, emailSubject, emailBody);
            res.status(200).json({});
        } catch (err) {
            console.log(err);
            res.status(400).json({
                error: {
                    message: "Unable to subscribe, please try again later.",
                },
            });
        }
    } else {
        res.status(404).json({});
    }
}
