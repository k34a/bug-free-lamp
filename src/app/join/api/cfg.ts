export const emailBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>New Application received for Larry Rowbs Foundation</title>
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

export const emailSubject =
    "New Application to join the Larry Rowbs Foundation";
