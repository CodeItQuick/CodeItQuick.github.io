/** @type {import('tailwindcss').Config} */
const myThemes = require('./my-themes');
console.log(JSON.stringify(myThemes.filter(x => Object.keys(x)[0] == "myLight")));
console.log("------------------------------------------------------------------");
console.log(JSON.stringify(myThemes.filter(x => Object.keys(x)[0] == "myLight")));
console.log(JSON.stringify(myThemes.filter(x => Object.keys(x)[0] == "myLight")[0]["myLight"].colors.primary));

module.exports = {
    content: ["./public/*.html", "./public/*.css"],
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: myThemes,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        darkTheme: "dark",
    },
    theme: {
        colors: {
            'primary-dark': myThemes.filter(x => Object.keys(x)[0] == "myDark")[0]["myDark"].colors.primary,
            'primary-light': myThemes.filter(x => Object.keys(x)[0] == "myLight")[0]["myLight"].colors.primary,
        },
        extend: {},
    },
}
