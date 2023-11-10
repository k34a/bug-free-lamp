import React from "react";
function TextField(props) {
    const name = props.name;
    const required = props.required || false;
    const placeholder = props.placeholder || "";
    const value = props.value;
    const onValueChange = props.onValueChange;
    const isInvalid = props.isInvalid || false;
    const makeTitleCase = props.makeTitleCase;
    return (
        <div>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name={name}
                required={required}
                type="text"
                onChange={(e) =>
                    onValueChange(name, e.target.value, makeTitleCase)
                }
                value={value}
                placeholder={placeholder}
            />
            <>
                {isInvalid && (
                    <p className="text-red-500 italic">
                        Please enter a valid value.
                    </p>
                )}
            </>
        </div>
    );
}

export default TextField;
