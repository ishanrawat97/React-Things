/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                mustard: "#FFC529",
                "pale-red": "#FE724C",
                "sky-green": "#2C887C",
                "light-black": "#272D2F",
                "very-light-gray": "#D7D7D7",
            },
        },
    },
    plugins: [],
};
