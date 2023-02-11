const { Client } = require('@notionhq/client');

export default async function handler(req, res) {
  if (req.method === 'POST') {
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
        },
      });
      res.status(200).json({});
    }
    catch (err) {
      console.log(err.message)
      res.status(400).json({
        error: {
          message: "Unable to subscribe, please try again later."
        }
      });
    }
  }
  else{
    res.status(404).json({})
  }
}
