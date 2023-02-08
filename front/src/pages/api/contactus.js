// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

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
        const fetchParams = {
            method: "POST",
            body: JSON.stringify({ "data": req.body }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.STRAPI_TOKEN}`
            }
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/contacts`, fetchParams);
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
