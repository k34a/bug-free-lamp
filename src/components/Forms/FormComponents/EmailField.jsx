import React from "react";

function EmailField(props) {
    const name = props.name;
    const required = props.required || false;
    const placeholder = props.placeholder || "";
    const value = props.value;
    const onValueChange = props.onValueChange;
    const isInvalid = props.isInvalid || false;
    return (
        <div>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name={name}
                required={required}
                type="email"
                onChange={(e) => onValueChange(name, e.target.value)}
                value={value}
                placeholder={placeholder}
            />
            <>
                {isInvalid && (
                    <p className="text-red-500 italic">
                        Please enter a valid email.
                    </p>
                )}
            </>
        </div>
    );
}

export default EmailField;
