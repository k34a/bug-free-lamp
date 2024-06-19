import { validateHCaptcha } from '../../lib/hcaptcha';

const { Client } = require('@notionhq/client');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const isTokenValid = await validateHCaptcha(req.body.token);
        if (!isTokenValid) {
            res.status(404).json({});
            return;
        }
        delete req.body.token;
        const dbId = req.body.notionDB
        const notion = new Client({
            auth: process.env.NOTION_WRITE_TOKEN,
        });
        delete req.body.notionDB;
        try {
            const properties = {}
            for (let key in req.body) {
                properties[key] = {
                    rich_text: [
                        {
                            text: {
                                content: req.body[key],
                            },
                        },
                    ],
                }
            }
            properties.Id = {
                title: [
                    {
                        text: {
                            content: Math.floor((Math.random() * 100000) + 1).toString(),
                        },
                    },
                ],
            },
                await notion.pages.create({
                    parent: {
                        database_id: process.env[dbId],
                    },
                    properties
                });
            res.status(200).json({});
        }
        catch (err) {
            console.error(err)
            res.status(400).json(err);
        }
    }
    else {
        res.status(404).json({})
    }
}
