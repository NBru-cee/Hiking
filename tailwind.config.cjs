/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js, ts, jsx, tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Ubuntu: "Ubuntu",
            },
            color: {
                primary: "#3e82fc",
            },
        },
    },
    plugins: [],
};
