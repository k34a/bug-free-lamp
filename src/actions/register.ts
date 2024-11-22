"use server";
import {
    titleCase,
    validateEmail,
    validatePassword,
} from "@/lib/commonFrontEndFns";
import { connectDB } from "@/lib/mongo";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
    const { email, password, name } = values;

    if (!name || name.length < 4) {
        return {
            error: "Please provide a valid name.",
        };
    }

    if (!email || !validateEmail(email)) {
        return {
            error: "Please provide a valid email.",
        };
    }

    if (!password || !validatePassword(password)) {
        return {
            error: "Please ensure the password meets the specified security requirements.",
        };
    }

    const formattedName = titleCase(name);
    const formattedEmail = email.toLowerCase();

    try {
        await connectDB();
        const userFound = await User.findOne({ formattedEmail });
        if (userFound) {
            return {
                error: "Email already exists!",
            };
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name: formattedName,
            email: formattedEmail,
            password: hashedPassword,
        });
        const savedUser = await user.save();
    } catch (e) {
        console.log(e);
    }
};
