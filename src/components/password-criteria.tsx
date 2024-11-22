import React from "react";
import { BiCheckCircle } from "react-icons/bi";

interface PasswordCriteriaProps {
    password: string;
}

const PasswordCriteria: React.FC<PasswordCriteriaProps> = ({ password }) => {
    const minLength = 8;
    const maxLength = 20;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLengthValid =
        password.length >= minLength && password.length <= maxLength;

    const getColor = (isValid: boolean) => {
        if (password.length == 0) {
            return "text-slate-500";
        }
        return isValid ? "text-green-600" : "text-red-600";
    };

    const conditions: Array<[string, boolean]> = [
        ["Between 8 and 20 characters long", isLengthValid],
        ["At least one uppercase letter (A-Z)", hasUpperCase],
        ["At least one lowercase letter (a-z)", hasLowerCase],
        ["At least one number (0-9)", hasDigits],
        [
            "At least one special character (e.g., !, @, #, $, %, ^, &,*)",
            hasSpecialChar,
        ],
    ];

    return (
        <div>
            <p className={`text-sm mt-2`}>
                Your password must satisfy the following security conditions:
            </p>

            <ul className="list-disc pl-5">
                {conditions.map((val, index) => {
                    return (
                        <li className={`${getColor(val[1])}`} key={index}>
                            {val[0]}{" "}
                            {val[1] && (
                                <BiCheckCircle className="inline" size={18} />
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default PasswordCriteria;
