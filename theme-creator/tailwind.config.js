/** @type {import('tailwindcss').Config} */
const themes = require('./my-themes');

module.exports = {
    darkMode: 'class',
    lightMode: 'class',
    content: ["./public/*.html", "./public/*.css"],
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: themes,
        base: true,
        utils: true,
        logs: true,
        rtl: false
    }
}
