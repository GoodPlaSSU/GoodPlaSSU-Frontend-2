/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#397EDF",
                click: "#f1f1f1",
                icon: "#e7e7e7",
                text: "#323232",
                title: "#535353",
            },
        },
    },
    plugins: [],
};
