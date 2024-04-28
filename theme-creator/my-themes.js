const colors = require("tailwindcss/colors");
const { colorArrayLight, colorArrayDark } = require("./color-converters");

const colorChoicesPrimary   = ['#059669']
const colorChoicesSecondary = ['#a855f7']
const colorChoicesAccent    = ['#0369a1']

let primaryColorChoice = colorChoicesPrimary[colorChoicesPrimary.length - 1];
let secondaryColorChoice = colorChoicesSecondary[colorChoicesSecondary.length - 1];
let accentColorChoice = colorChoicesAccent[colorChoicesAccent.length - 1];

let primaryColorPalette = colorArrayDark(primaryColorChoice);
let secondaryColorPalette = colorArrayDark(secondaryColorChoice);
let accentColorPalette = colorArrayDark(accentColorChoice);
const myThemes =[
    {
        dark: {
            colors: {
                'primary': primaryColorPalette.colors,
                'secondary': secondaryColorPalette.colors,
                'accent': accentColorPalette.colors
            },
            'primary': primaryColorPalette.colors[100],             //300,
            'primary-focus': primaryColorPalette.colors[200],       //400
            'primary-content': primaryColorPalette.colors[800],     //900
            'secondary': secondaryColorPalette.colors[100],         //300
            'secondary-focus': secondaryColorPalette.colors[200],   //400
            'secondary-content': secondaryColorPalette.colors[800], //900
            'accent': accentColorPalette.colors[100],               //300
            'accent-focus': accentColorPalette.colors[200],         //400
            'accent-content': accentColorPalette.colors[800],       //900
            'neutral': colors.neutral[800],
            'neutral-focus': colors.neutral[900],
            'neutral-content': colors.neutral[200],
            'base-100': colors.slate[900],
            'base-200': colors.slate[800],
            'base-300': colors.slate[700],
            'base-content': colors.slate[100],
            'info': colors.sky[800],
            'info-content': colors.sky[200],
            'success': colors.emerald[800],
            'success-content': colors.emerald[200],
            'warning': colors.yellow[700],
            'warning-content': colors.yellow[300],
            'error': colors.rose[900],
            'error-content': colors.rose[200],
        },
    },
    {
        light: {
            colors: {
                'primary': colorArrayLight(primaryColorChoice).colors,
                'secondary': colorArrayLight(secondaryColorChoice).colors,
                'accent': colorArrayLight(accentColorChoice).colors
            },
            'primary': colorArrayLight(primaryColorChoice).colors[300],         //300,
            'primary-focus': colorArrayLight(primaryColorChoice).colors[400],   //400
            'primary-content': colorArrayLight(primaryColorChoice).colors[900], //900
            'secondary': colorArrayLight(secondaryColorChoice).colors[300],       //300
            'secondary-focus': colorArrayLight(secondaryColorChoice).colors[400], //400
            'secondary-content': colorArrayLight(secondaryColorChoice).colors[900], //900
            'accent': colorArrayLight(accentColorChoice).colors[300],          //300
            'accent-focus': colorArrayLight(accentColorChoice).colors[400],    //400
            'accent-content': colorArrayLight(accentColorChoice).colors[900],  //900
            'neutral': colors.neutral[100],
            'neutral-focus': colors.neutral[400],
            'neutral-content': colors.neutral[800],
            'base-100': colors.slate[100],
            'base-200': colors.slate[200],
            'base-300': colors.slate[300],
            'base-content': colors.slate[900],
            'info': colors.sky[200],
            'info-content': colors.sky[900],
            'success': colors.emerald[300],
            'success-content': colors.emerald[800],
            'warning': colors.yellow[300],
            'warning-content': colors.yellow[900],
            'error': colors.rose[200],
            'error-content': colors.rose[900],
        }
    },
    "light", "dark"];
export default myThemes;
