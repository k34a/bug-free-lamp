import mongoose, { Schema, model } from "mongoose";

export interface UserDocument {
    _id: string;
    email: string;
    password: string;
    name: string;
    phone: string;
    image: string;
    subscriptionExpiry: Date;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<UserDocument>(
    {
        email: {
            type: String,
            unique: true,
            required: [true, "Email is required"],
            match: [
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Email is invalid",
            ],
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: [true, "Name is required"],
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models?.User || model<UserDocument>("User", UserSchema);
export default User;
