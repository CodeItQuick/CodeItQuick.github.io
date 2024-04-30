const colors = require("tailwindcss/colors");
const { colorArrayLight, colorArrayDark } = require("./color-converters");

const primaryColorChoice = '#059669';
const secondaryColorChoice = '#a855f7';
const accentColorChoice = '#0369a1';

let primaryColorPalette = colorArrayDark('#059669');
let secondaryColorPalette = colorArrayDark('#a855f7');
let accentColorPalette = colorArrayDark('#0369a1');
const myThemes =[
    {
        dark: {
            colors: {
                'primary': primaryColorPalette.colors,
                'secondary': secondaryColorPalette.colors,
                'accent': accentColorPalette.colors
            },
            'primary': primaryColorPalette.colors[300],             //300,
            'primary-focus': primaryColorPalette.colors[400],       //400
            'primary-content': primaryColorPalette.colors[900],     //900
            'secondary': secondaryColorPalette.colors[300],         //300
            'secondary-focus': secondaryColorPalette.colors[400],   //400
            'secondary-content': secondaryColorPalette.colors[900], //900
            'accent': accentColorPalette.colors[300],               //300
            'accent-focus': accentColorPalette.colors[400],         //400
            'accent-content': accentColorPalette.colors[900],       //900
            'neutral': colors.neutral[700],
            'neutral-focus': colors.neutral[800],
            'neutral-content': colors.neutral[100],
            'base-100': colors.coolGray[800],
            'base-200': colors.coolGray[900],
            'base-300': colors.coolGray[950],
            'base-content': colors.coolGray[50],
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
            'neutral-focus': colors.neutral[200],
            'neutral-content': colors.neutral[900],
            'base-100': colors.coolGray[50],
            'base-200': colors.coolGray[100],
            'base-300': colors.coolGray[200],
            'base-content': colors.coolGray[900],
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
