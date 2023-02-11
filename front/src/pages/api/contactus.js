const { Client } = require('@notionhq/client');

async function validateCaptcha(token) {
    const secret_key = process.env.RECAPTCHA_SERVER
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`
    const response = await fetch(
        url,
        {
            method: "POST"
        }    
    );
    const data = await response.json();
    return data.success;
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        if(!validateCaptcha(req.body.token)){
            res.status(404).json({});
            return;
        }
        delete req.body.token;
        const notion = new Client({
            auth: process.env.NOTION_WRITE_TOKEN,
        });
        try{
            await notion.pages.create({
                parent: {
                    database_id: process.env.NOTION_CONTACTUS,
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
                    Message: {
                        rich_text: [
                            {
                                text: {
                                    content: req.body.message,
                                },
                            },
                        ],
                    },
                },
            });
            res.status(200).json({});
        }
        catch(err){
            console.log(err.message)
            res.status(400).json(err);
        }
    }
    else {
        res.status(404).json({})
    }
}
