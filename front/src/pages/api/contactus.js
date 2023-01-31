// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const fetchParams = {
            method: "POST",
            body: JSON.stringify({ "data": req.body }),
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${process.env.STRAPITOKEN}`
            }
        }
        const response = await fetch(`${process.env.STRAPIBASEURL}/api/contacts`, fetchParams);
        const json = await response.json();
        if (!response.ok) {
            res.status(400).json(json);
        }
        else {
            res.status(200).json({});
        }
    }
    else {
        res.status(404).json({})
    }
}
