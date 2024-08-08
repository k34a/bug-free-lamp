import { createTransport } from "nodemailer";
import { ENV } from "./cfg";

export const emailNotifier = async (
    emailID: string,
    emailSubject: string,
    emailBody: string
) => {
    const fromEmailId = ENV.FROM_EMAIL_ID;
    const fromEmailPassword = ENV.FROM_EMAIL_PASSWORD;

    if (ENV.NODE_ENV === "development") {
        return true;
    }

    const transporter = createTransport({
        host: "smtp.zoho.in",
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
        html: emailBody,
    };

    console.info(
        `Trying to send email to '${emailID}' with subject: '${emailSubject}'.`
    );

    transporter.sendMail(mailData, function (err, info) {
        if (err) {
            console.error(err);
            return false;
        } else {
            console.info(info);
            transporter.close();
            return true;
        }
    });
};
