/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
    content: [
        "./node_modules/flowbite-react/**/*.js",
        "./src/**/*.{js,jsx}",
        "./src/*.{js,jsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                animateMove: {
                    "0%, 100%": {
                        transform: "translate3d(0px, -10px, 0px) rotate(0deg)",
                    },
                    "50%": {
                        transform: "translate3d(10px, 5px, 5px) rotate(2deg)",
                    },
                },
            },
            aspectRatio: {
                "462/617": "462 / 617",
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui(),
        require("flowbite/plugin"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
    ],
};
