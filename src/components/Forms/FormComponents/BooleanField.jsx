import React from "react";
function BooleanField(props) {
    const name = props.name;
    const placeholder = props.placeholder || "";
    const value = props.value;
    const onValueChange = props.onValueChange;
    return (
        <div className="inline-flex items-center">
            <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                No
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    value={value}
                    className="sr-only peer"
                    onChange={(e) => {}}
                    name={name}
                    onClick={(e) => onValueChange(name, e.target.checked)}
                    checked={value}
                    placeholder={placeholder}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Yes
            </span>
        </div>
    );
}

export default BooleanField;
