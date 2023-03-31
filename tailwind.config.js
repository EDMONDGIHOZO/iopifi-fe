/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#479297',
                lightGreen: '#DAEEEF',
                orange: '#F18F01',
                lightGray: '#B2BABA'
            }
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    }
}

