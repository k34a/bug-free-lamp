export function emailNotifier(emailid, emailSubject, emailBody) {
    const fromEmailId = process.env.FROM_EMAIL_ID;
    const fromEmailPassword = process.env.FROM_EMAIL_PASSWORD;
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.in',
        secure: true,
        port: 465,
        auth: {
            user: fromEmailId,
            pass: fromEmailPassword,
        },
    });
    const mailData = {
        from: fromEmailId,
        to: emailid,
        subject: emailSubject,
        html: emailBody
    }
    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else{
            transporter.close();
            console.log("Email sent.")
        }
    })
}