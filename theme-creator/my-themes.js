const colors = require("tailwindcss/colors");
const { colorArrayLight, colorArrayDark } = require("./color-converters");

// @ts-ignore
import colorNamer from "color-namer";
// @ts-ignore
import convert from "color-convert";


const colorChoicesPrimary   = ['#059669']
const colorChoicesSecondary = ['#a855f7']
const colorChoicesAccent    = ['#0369a1']

let primaryColorChoice = colorChoicesPrimary[colorChoicesPrimary.length - 1];
let secondaryColorChoice = colorChoicesSecondary[colorChoicesSecondary.length - 1];
let accentColorChoice = colorChoicesAccent[colorChoicesAccent.length - 1];

let primaryColorPalette = colorArrayLight(primaryColorChoice);
let secondaryColorPalette = colorArrayLight(secondaryColorChoice);
let accentColorPalette = colorArrayLight(accentColorChoice);
const myThemes =[
    {
        myDark: {
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
            'neutral': colors.neutral[100],
            'neutral-focus': colors.neutral[200],
            'neutral-content': colors.neutral[800],
            'base-100': colors.slate[100],
            'base-200': colors.slate[200],
            'base-300': colors.slate[300],
            'base-content': colors.slate[800],
            'info': colors.sky[200],
            'info-content': colors.sky[900],
            'success': colors.emerald[300],
            'success-content': colors.emerald[800],
            'warning': colors.yellow[300],
            'warning-content': colors.yellow[900],
            'error': colors.rose[200],
            'error-content': colors.rose[900],
        },
    },
    {
        myLight: {
            colors: {
                'primary': colorArrayDark(primaryColorChoice).colors,
                'secondary': colorArrayDark(secondaryColorChoice).colors,
                'accent': colorArrayDark(accentColorChoice).colors
            },
            'primary': colorArrayDark(primaryColorChoice).colors[700],         //300,
            'primary-focus': colorArrayDark(primaryColorChoice).colors[900],   //400
            'primary-content': colorArrayDark(primaryColorChoice).colors[200], //900
            'secondary': colorArrayDark(secondaryColorChoice).colors[700],       //300
            'secondary-focus': colorArrayDark(secondaryColorChoice).colors[900], //400
            'secondary-content': colorArrayDark(secondaryColorChoice).colors[200], //900
            'accent': accentColorPalette.colors[100],          //300
            'accent-focus': accentColorPalette.colors[200],    //400
            'accent-content': accentColorPalette.colors[900],  //900
            'neutral': colors.neutral[100],
            'neutral-focus': colors.neutral[200],
            'neutral-content': colors.neutral[900],
            'base-100': colors.slate[50],
            'base-200': colors.slate[100],
            'base-300': colors.slate[200],
            'base-content': colors.slate[200],
            'info': colors.sky[900],
            'info-content': colors.sky[200],
            'success': colors.emerald[800],
            'success-content': colors.emerald[300],
            'warning': colors.yellow[900],
            'warning-content': colors.yellow[300],
            'error': colors.rose[900],
            'error-content': colors.rose[200],
        }
    },
    "light", "dark"];
export default myThemes;
