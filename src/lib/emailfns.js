export async function emailNotifier(emailID, emailSubject, emailBody) {
    const fromEmailId = process.env.FROM_EMAIL_ID;
    const fromEmailPassword = process.env.FROM_EMAIL_PASSWORD;
    let nodemailer = require('nodemailer');

    return new Promise((resolve, reject) => {
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
            to: emailID,
            subject: emailSubject,
            html: emailBody
        }
        console.info(`Trying to send email to ${emailID} with subject: ${emailSubject}.`)
        transporter.sendMail(mailData, function (err, info) {
            if (err) {
                console.error(err);
                reject(false);
            } else {
                console.info(info);
                transporter.close();
                resolve(true);
            }
        })
    });
}
