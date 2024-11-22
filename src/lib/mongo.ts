import mongoose from "mongoose";
import { ENV } from "@/lib/cfg";

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(ENV.MONGODB_URI);
        if (connection.readyState === 1) {
            return Promise.resolve(true);
        }
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
};
