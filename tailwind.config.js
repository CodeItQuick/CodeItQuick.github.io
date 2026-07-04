/** @type {import('tailwindcss').Config} */
const themes = require('./theme-creator/my-themes');
console.log(JSON.stringify(themes.filter(x => Object.keys(x)[0] == "light")));
console.log("------------------------------------------------------------------");
console.log(JSON.stringify(themes.filter(x => Object.keys(x)[0] == "light")));
console.log('last line')
console.log(JSON.stringify(themes.filter(x => Object.keys(x)[0] == "light")[0]["light"].colors.primary));

module.exports = {
    darkMode: 'class',
    lightMode: 'class',
    content: ["./_site/*/*.html", "./_site/*/*.css", "./_includes/*.html", "./_layouts/*.html"],
    plugins: [require("rippleui")],
    /** @type {import('rippleui').Config} */
    // rippleui: {
    //     themes: [
    //         {
    //             themeName: "light",
    //             colorScheme: "light",
    //             colors: {
    //                 primary: themes.filter(x => Object.keys(x)[0] == "light")[0]["light"].colors.primary['400'],
    //                 backgroundPrimary: themes.filter(x => Object.keys(x)[0] == "dark")[0]["dark"].colors.primary['400'],
    //                 secondary: themes.filter(x => Object.keys(x)[0] == "light")[0]["light"].colors.secondary['400'],
    //                 backgroundSecondary: themes.filter(x => Object.keys(x)[0] == "dark")[0]["dark"].colors.secondary['400']
    //             },
    //         },
    //         {
    //             themeName: "dark",
    //             colorScheme: "dark",
    //             colors: {
    //                 primary: themes.filter(x => Object.keys(x)[0] == "dark")[0]["dark"].colors.primary['400'],
    //                 backgroundPrimary: themes.filter(x => Object.keys(x)[0] == "light")[0]["light"].colors.primary['400'],
    //                 secondary: themes.filter(x => Object.keys(x)[0] == "dark")[0]["dark"].colors.secondary['400'],
    //                 backgroundSecondary: themes.filter(x => Object.keys(x)[0] == "light")[0]["light"].colors.secondary['400']
    //             },
    //         },
    //     ],
    // },
    // daisyui: {
    //     styled: true,
    //     themes: themes,
    //     base: true,
    //     utils: true,
    //     logs: true,
    //     rtl: false
    // },
    // theme: {
    //     fontFamily: {
    //         "sans": ['News Cycle', 'ui-sans-serif'],
    //         "serif": ['Spectral', 'ui-serif'],
    //         "display": ['Spectral'],
    //         "body": ['News Cycle']
    //     },
    //     colors: {
    //         'primary-dark': themes.filter(x => Object.keys(x)[0] == "dark")[0]["dark"].colors.primary,
    //         'primary-light': themes.filter(x => Object.keys(x)[0] == "light")[0]["light"].colors.primary,
    //         'secondary-dark': themes.filter(x => Object.keys(x)[0] == "dark")[0]["dark"].colors.secondary,
    //         'secondary-light': themes.filter(x => Object.keys(x)[0] == "light")[0]["light"].colors.secondary,
    //         'accent-dark': themes.filter(x => Object.keys(x)[0] == "dark")[0]["dark"].colors.accent,
    //         'accent-light': themes.filter(x => Object.keys(x)[0] == "light")[0]["light"].colors.accent,
    //     },
    //     extend: {},
    // },
}
