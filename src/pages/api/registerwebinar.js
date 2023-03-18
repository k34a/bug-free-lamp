import { emailNotifier } from '@/lib/emailfns';
import { validateCaptcha } from '../../lib/recaptcha';

const { Client } = require('@notionhq/client');

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
    
    /* Button */
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
    <h1 class="heading">You're Registered for the Free Webinar!</h1>
    <h2 class="sub-heading">Stylish Sustainability Webinar</h2>
    <p>We are thrilled to have you as a registered participant for our upcoming Stylish Sustainability Webinar! You have taken an important step towards contributing to a sustainable future for the African fashion industry and the planet at large.</p>
    <p>During the webinar, we will introduce you to cutting-edge recycling techniques that have the potential to revolutionize the African fashion industry. You will learn how recycling and reusing can not only reduce waste but also create new opportunities for growth and development.</p>
    <p>We understand that your time is valuable, so we have made sure that the webinar will be informative, engaging, and interactive. You will have the opportunity to ask questions, network with other like-minded individuals, and be a part of a community that cares deeply about sustainable development.</p>
    <p>Please mark your calendar for the webinar, which will take place on <b>March 24th at 9AM EST.</b></p>
    <center><a href="https://tinyurl.com/stylishsustainabilitywebinar" class='button'>Join Webinar</a></center>
    <p>Also, don't forget to spread the word and invite others who share your passion for sustainability and fashion. Let's work together towards a better future for the African fashion industry and the planet!</p>
    <p>If you want to learn more about our initiatives, or about the effects of fast fashion, you can have a look at our <a href="https://larryrowbsfoundation.org/blog"><b>blog</b></a>.</p>
    <p>Thank you for registering for the Stylish Sustainability Webinar, and we can't wait to see you there!</p>
    <p class="footer"><a href="https://larryrowbsfoundation.org" style="color: green">Larry Rowbs Foundation</a> &copy; 2023 All rights reserved.</p>
  </div>
</body>
</html>
`

const emailSubject = "Thanks for registering to the webinar";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const isTokenValid = await validateCaptcha(req.body.token);
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
                    database_id: process.env.NOTION_WEBINAR,
                },
                properties: {
                    Firstname: {
                        title: [
                            {
                                text: {
                                    content: req.body.firstname,
                                },
                            },
                        ],
                    },
                    Lastname: {
                        rich_text: [
                            {
                                text: {
                                    content: req.body.lastname,
                                },
                            },
                        ],
                    },
                    Email: {
                        email: req.body.email,
                    }
                },
            });
            emailNotifier(req.body.email, emailSubject, emailBody);
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
