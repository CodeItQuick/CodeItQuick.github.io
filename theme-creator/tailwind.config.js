/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    daisyui: {
        themes: [{
            mytheme: {
                "primary": "#698A77",
                "secondary": "#977D5E",
                "accent": "#749783",
                "neutral": "#4D6E5C",
                "base-100": "#F6FBF8",
            },
        }],
    },
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
}
