const colors = require("tailwindcss/colors");

// @ts-ignore
import colorNamer from "color-namer";
// @ts-ignore
import convert from "color-convert";


const colorChoicesPrimary   = ['#059669']
const colorChoicesSecondary = ['#a855f7']
const colorChoicesAccent    = ['#0369a1']

const CMY_HUES = [180, 300, 60];
const RGB_HUES = [360, 240, 120, 0];

export function getTextColor(color) {
    const rgbColor = convert.hex.rgb(color);

    if (!rgbColor) {
        return "#333";
    }

    const [r, g, b] = rgbColor;
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    return luma < 120 ? "#FFF" : "#333";
}

function hueShift(hues, hue, intensity) {
    const closestHue = hues.sort((a, b) => (Math.abs(a - hue) - Math.abs(b - hue)))[0],
        hueShift = closestHue - hue;
    return Math.round(intensity * hueShift * 0.5);
}

function lighten(hex, intensity) {
    if (!hex) {
        return "";
    }

    const [h, s, v] = convert.hex.hsv(hex);
    const hue = h + hueShift(CMY_HUES, h, intensity);
    const saturation = s - Math.round(s * intensity);
    const value = v + Math.round((100 - v) * intensity);

    return `#${convert.hsv.hex([hue, saturation, value])}`;
}

function darken(hex, intensity) {
    if (!hex) {
        return "";
    }

    const inverseIntensity =  (1 - intensity);
    const [h, s, v] = convert.hex.hsv(hex);
    const hue = h + hueShift(RGB_HUES, h, inverseIntensity);
    const saturation = s + Math.round((100 - s) * inverseIntensity);
    const value = v - Math.round(v * inverseIntensity);

    return `#${convert.hsv.hex([hue, saturation, value])}`;
}

export function isValidHexColorCode(str) {
    return /^#([0-9A-Fa-f]{3}){1,2}$/.test(str);
}

export function getColorName(color) {
    const { name } = colorNamer(`#${color}`.replace("##", "#")).ntc[0];
    const sanitizedName = name
        .replace(/['/]/gi, "")
        .replace(/\s+/g, "-")
        .toLowerCase();

    return sanitizedName;
}

export function sixDigitsColorHex (hexColor) {
    const hexValue = hexColor.replace('#', '')
    return `#${(hexValue.length === 3 ? hexValue.replace(/(.)/g, '$1$1') : hexValue.padEnd(6, '0'))}`;
}

// export default for light theme
const colorArrayLight = function (baseColor) {
    if (!baseColor) {
        return
    }

    const fullColorCode = sixDigitsColorHex(baseColor)

    const name = getColorName(fullColorCode);

    const response = {
        name,
        colors: {
            700: fullColorCode
        }
    };

    const intensityMap = {
        50: 0.9, //2
        100: 0.8, //3
        200: 0.7, //4
        300: 0.6, //5
        400: 0.5, //6
        500: 0.3, //7
        600: 0.2, //8
        800: 0.8, //10
        900: 0.7, //11
        950: 0.65 //12
    };

    [50, 100, 200, 300, 400, 500, 600].forEach(level => {
        response.colors[level] = lighten(fullColorCode, intensityMap[level]);
    });

    [800, 900, 950].forEach(level => {
        response.colors[level] = darken(fullColorCode, intensityMap[level]);
    });

    return response;
}
// export default
const colorArrayDark = function (baseColor) {
    if (!baseColor) {
        return
    }

    const fullColorCode = sixDigitsColorHex(baseColor)

    const name = getColorName(fullColorCode);

    const response = {
        name,
        colors: {
            400: fullColorCode
        }
    };

    const intensityMap = {
        50: 0.6, //2
        100: 0.7, //3
        200: 0.8, //4
        300: 0.9, //4
        500: 0.2, //7
        600: 0.3, //8
        700: 0.4, //9
        800: 0.5, //10
        900: 0.6, //11
        950: 0.7 //12
    };

    [950, 900, 800, 700, 600, 500].forEach(level => {
        response.colors[level] = lighten(fullColorCode, intensityMap[level]);
    });

    [300, 200, 100, 50].forEach(level => {
        response.colors[level] = darken(fullColorCode, intensityMap[level]);
    });

    return response;
}

let primaryColorChoice = colorChoicesPrimary[colorChoicesPrimary.length - 1];
let secondaryColorChoice = colorChoicesSecondary[colorChoicesSecondary.length - 1];
let accentColorChoice = colorChoicesAccent[colorChoicesAccent.length - 1];

const myThemes =[
    {
        myLight: {
            colors: {
                'primary': {
                    '50': '#CDE6D7', //12
                    '100': '#9FC3AE', //11
                    '200': '#688B77', //10
                    '300': '#749783', //9
                    '400': '#5B7566', //8
                    '500': '#4B6054', //7
                    '600': '#3D5045', //6
                    '700': '#314238', //5
                    '800': '#27362D', //4
                    '900': '#1F2A24', //3
                    '950': '#0F1210', //1
                },
                'secondary': {
                    '950': '#F9EBDB', //12
                    '900': '#CEAD84', //11
                    '800': '#94744D', //10
                    '700': '#866740', //9
                    '600': '#785A34', //8
                    '500': '#5E411B', //7
                    '400': '#4D3515', //6
                    '300': '#3F2D16', //5
                    '200': '#352715', //4
                    '100': '#2C2011', //3
                    '50': '#170F06', //1
                },
                'accent': {
                    '50': '#F9EBDB', //12
                    '100': '#CEAD84', //11
                    '200': '#94744D', //10
                    '300': '#866740', //9
                    '400': '#785A34', //8
                    '500': '#5E411B', //7
                    '600': '#4D3515', //6
                    '700': '#3F2D16', //5
                    '800': '#352715', //4
                    '900': '#2C2011', //3
                    '950': '#170F06', //1
                }
            },
            'primary': '#c3d6ce',         //300,
            'primary-focus': '#98b5a7',   //400
            'primary-content': '#184526', //900
            'secondary': '#a8dbd7',       //300
            'secondary-focus': '#67c1b8', //400
            'secondary-content': '#13514b', //900
            'accent': '#b3a482',
            'accent-focus': colors.fuchsia[400],
            'accent-content': colors.fuchsia[900],
            'neutral': colors.neutral[100],
            'neutral-focus': colors.neutral[200],
            'neutral-content': colors.neutral[900],
            'base-100': colors.slate[50],
            'base-200': colors.slate[100],
            'base-300': colors.slate[200],
            'base-content': colors.slate[900],
            'info': colors.sky[300],
            'info-content': colors.sky[900],
            'success': colors.emerald[400],
            'success-content': colors.emerald[900],
            'warning': colors.yellow[400],
            'warning-content': colors.yellow[900],
            'error': colors.rose[300],
            'error-content': colors.rose[900],
        },
        myDark: {
            colors: {
                'primary': {
                    '50': '#0F1210', //1
                    '100': '#1F2A24', //3
                    '200': '#27362D', //4
                    '300': '#314238', //5
                    '400': '#3D5045', //6
                    '500': '#4B6054', //7
                    '600': '#5B7566', //8
                    '700': '#749783', //9
                    '800': '#688B77', //10
                    '900': '#9FC3AE', //11
                    '950': '#CDE6D7', //12
                },
                'secondary': {
                    '50': '#170F06', //1
                    '100': '#2C2011', //3
                    '200': '#352715', //4
                    '300': '#3F2D16', //5
                    '400': '#4D3515', //6
                    '500': '#5E411B', //7
                    '600': '#785A34', //8
                    '700': '#866740', //9
                    '800': '#94744D', //10
                    '900': '#CEAD84', //11
                    '950': '#F9EBDB' //12
                },
                'accent': {
                    '50': '#170F06', //1
                    '100': '#2C2011', //3
                    '200': '#352715', //4
                    '300': '#3F2D16', //5
                    '400': '#4D3515', //6
                    '500': '#5E411B', //7
                    '600': '#785A34', //8
                    '700': '#866740', //9
                    '800': '#94744D', //10
                    '900': '#CEAD84', //11
                    '950': '#F9EBDB' //12
                }
            },
            'primary': '#314238',         //300,
            'primary-focus': '#3D5045',   //400
            'primary-content': '#9FC3AE', //900
            'secondary': '#3F2D16',       //300
            'secondary-focus': '#4D3515', //400
            'secondary-content': '#CEAD84', //900
            'accent': '#3F2D16', //300
            'accent-focus': '#4D3515', //400
            'accent-content': '#CEAD84', //900
            'neutral': colors.neutral[100],
            'neutral-focus': colors.neutral[200],
            'neutral-content': colors.neutral[900],
            'base-100': colors.slate[900],
            'base-200': colors.slate[800],
            'base-300': colors.slate[700],
            'base-content': colors.slate[50],
            'info': colors.sky[300],
            'info-content': colors.sky[900],
            'success': colors.emerald[400],
            'success-content': colors.emerald[900],
            'warning': colors.yellow[400],
            'warning-content': colors.yellow[900],
            'error': colors.rose[300],
            'error-content': colors.rose[900],
        }
    },
    {
        myLight2: {
            'main-50': colorArrayLight(primaryColorChoice).colors[50],
            'main-100': colorArrayLight(primaryColorChoice).colors[100],
            'main-200': colorArrayLight(primaryColorChoice).colors[200],
            'main-300': colorArrayLight(primaryColorChoice).colors[300],
            'main-400': colorArrayLight(primaryColorChoice).colors[400],
            'main-500': colorArrayLight(primaryColorChoice).colors[500],
            'main-600': colorArrayLight(primaryColorChoice).colors[600],
            'main-700': colorArrayLight(primaryColorChoice).colors[700],
            'main-800': colorArrayLight(primaryColorChoice).colors[800],
            'main-900': colorArrayLight(primaryColorChoice).colors[900],
            'main-950': colorArrayLight(primaryColorChoice).colors[950],
            colors: {
                'primary': colorArrayLight(primaryColorChoice).colors,
                'secondary': colorArrayLight(secondaryColorChoice).colors,
                'accent': colorArrayLight(accentColorChoice).colors
            },
            'primary': colorArrayLight(primaryColorChoice).colors[100],         //300,
            'primary-focus': colorArrayLight(primaryColorChoice).colors[200],   //400
            'primary-content': colorArrayLight(primaryColorChoice).colors[900], //900
            'secondary': colorArrayLight(secondaryColorChoice).colors[300],       //300
            'secondary-focus': colorArrayLight(secondaryColorChoice).colors[400], //400
            'secondary-content': colorArrayLight(secondaryColorChoice).colors[900], //900
            'accent': colorArrayLight(accentColorChoice).colors[300],          //300
            'accent-focus': colorArrayLight(accentColorChoice).colors[400],    //400
            'accent-content': colorArrayLight(accentColorChoice).colors[900],  //900
            'neutral': colors.neutral[100],
            'neutral-focus': colors.neutral[200],
            'neutral-content': colors.neutral[300],
            'base-100': colors.slate[100],
            'base-200': colors.slate[200],
            'base-300': colors.slate[300],
            'base-content': colors.slate[900],
            'info': colors.sky[300],
            'info-content': colors.sky[900],
            'success': colors.emerald[400],
            'success-content': colors.emerald[900],
            'warning': colors.yellow[400],
            'warning-content': colors.yellow[900],
            'error': colors.rose[300],
            'error-content': colors.rose[900],
        },
    },
    {
        myDark2: {
            colors: {
                'primary': colorArrayDark(primaryColorChoice).colors,
                'secondary': colorArrayDark(secondaryColorChoice).colors,
                'accent': colorArrayDark(accentColorChoice).colors
            },
            'primary': colorArrayDark(primaryColorChoice).colors[300],         //300,
            'primary-focus': colorArrayDark(primaryColorChoice).colors[400],   //400
            'primary-content': colorArrayDark(primaryColorChoice).colors[900], //900
            'secondary': colorArrayDark(secondaryColorChoice).colors[300],       //300
            'secondary-focus': colorArrayDark(secondaryColorChoice).colors[400], //400
            'secondary-content': colorArrayDark(secondaryColorChoice).colors[900], //900
            'accent': colorArrayDark(accentColorChoice).colors[300],          //300
            'accent-focus': colorArrayDark(accentColorChoice).colors[400],    //400
            'accent-content': colorArrayDark(accentColorChoice).colors[900],  //900
            'neutral': colors.neutral[100],
            'neutral-focus': colors.neutral[200],
            'neutral-content': colors.neutral[900],
            'base-100': colors.slate[900],
            'base-200': colors.slate[800],
            'base-300': colors.slate[700],
            'base-content': colors.slate[50],
            'info': colors.sky[300],
            'info-content': colors.sky[900],
            'success': colors.emerald[400],
            'success-content': colors.emerald[900],
            'warning': colors.yellow[400],
            'warning-content': colors.yellow[900],
            'error': colors.rose[300],
            'error-content': colors.rose[900],
        }
    },
    "light", "dark"];
export default myThemes;
