/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./node_modules/flowbite-react/**/*.js",
        "./src/**/*.{js,jsx}",
        "./src/*.{js,jsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                animateMove: {
                    '0%, 100%': {
                        transform: 'translate3d(0px, -10px, 0px) rotate(0deg)'
                    },
                    '50%': {
                        transform: 'translate3d(10px, 5px, 5px) rotate(2deg)'
                    },
                }
            },
            aspectRatio: {
                '462/617': '462 / 617'
            }
        },
    },
    plugins: [
        require("flowbite/plugin"),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
