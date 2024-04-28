/** @type {import('tailwindcss').Config} */
const themes = require('./theme-creator/my-themes');
console.log(JSON.stringify(themes.filter(x => Object.keys(x)[0] == "light")));
console.log("------------------------------------------------------------------");
console.log(JSON.stringify(themes.filter(x => Object.keys(x)[0] == "light")));
console.log(JSON.stringify(themes.filter(x => Object.keys(x)[0] == "light")[0]["light"].colors.primary));

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
    },
    theme: {
        colors: {
            'primary-dark': themes.filter(x => Object.keys(x)[0] == "dark")[0]["dark"].colors.primary,
            'primary-light': themes.filter(x => Object.keys(x)[0] == "light")[0]["light"].colors.primary,
            'secondary-dark': themes.filter(x => Object.keys(x)[0] == "dark")[0]["dark"].colors.secondary,
            'secondary-light': themes.filter(x => Object.keys(x)[0] == "light")[0]["light"].colors.secondary,
            'accent-dark': themes.filter(x => Object.keys(x)[0] == "dark")[0]["dark"].colors.accent,
            'accent-light': themes.filter(x => Object.keys(x)[0] == "light")[0]["light"].colors.accent,
        },
        extend: {},
    },
}
