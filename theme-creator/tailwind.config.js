/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    daisyui: {
        themes: [{
            light: {
                ...require("daisyui/src/theming/themes")["light"],
                "primary": "#4D6E5C",
                "secondary": "#F6FBF8",
                "accent": "#749783",
                "neutral": "#698A77",
                "base-100": "#977D5E",
            },
        }],
    },
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
}
