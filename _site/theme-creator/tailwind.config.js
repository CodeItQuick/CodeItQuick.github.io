/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
    content: ["./src/*.html"],
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: [
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
                    'neutral': colors.neutral[900],
                    'neutral-focus': colors.neutral[700],
                    'neutral-content': colors.neutral[50],
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
                    'primary': '#c3d6ce',         //300,
                    'primary-focus': '#98b5a7',   //400
                    'primary-content': '#184526', //900
                    'secondary': '#a8dbd7',       //300
                    'secondary-focus': '#67c1b8', //400
                    'secondary-content': '#13514b', //900
                    'accent': '#b3a482', //300
                    'accent-focus': '#786340', //400
                    'accent-content': '#1c0e04', //900
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
            "light", "dark"],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        darkTheme: "dark",
    },
    theme: {
        extend: {},
    },
}
