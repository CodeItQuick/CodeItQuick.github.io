/** @type {import('tailwindcss').Config} */
const myThemes = require('./my-themes');
console.log(JSON.stringify(myThemes.filter(x => Object.keys(x)[0] == "myLight")));
console.log("------------------------------------------------------------------");
console.log(JSON.stringify(myThemes.filter(x => Object.keys(x)[0] == "myLight2")));
console.log(JSON.stringify(myThemes.filter(x => Object.keys(x)[0] == "myLight2")[0]["myLight2"].colors.primary));

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
            'primary-dark': myThemes.filter(x => Object.keys(x)[0] == "myDark2")[0]["myDark2"].colors.primary,
            'primary-light': myThemes.filter(x => Object.keys(x)[0] == "myLight2")[0]["myLight2"].colors.primary,
        },
        extend: {},
    },
}
