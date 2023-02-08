// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const fetchParams = {
      method: "POST",
      body: JSON.stringify({"data": req.body}),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.STRAPI_TOKEN}`
      }
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/subscribers`, fetchParams);
    const json = await response.json();
    if(!response.ok){
      if (json.error.message === "This attribute must be unique"){
        json.error.message = "You have already subscribed to the newsletter."
      }
      else{
        json.error.message = "Unable to subscribe, please try again later."
      }
      res.status(400).json(json);
    }
    else{
      res.status(200).json({});
    }
  }
  else{
    res.status(404).json({})
  }
}
