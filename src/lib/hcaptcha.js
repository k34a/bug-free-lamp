const { verify } = require('hcaptcha');

export const validateHCaptcha = async (token) => {
    const secret = process.env.HCAPTCHA_SECRET_KEY;
    try{
        const result = await verify(secret, token);
        return result.success;
    } catch(e){
        return false;
    }
}