import convert from "color-convert";
import colorNamer from "color-namer";

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

export { colorArrayLight, colorArrayDark };
