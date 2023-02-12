export const validateCaptcha = async (token) => {
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