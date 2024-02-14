/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js}'],
    theme: {
        borderRadius: {
            'sm': '5px',
            default: '10px',
            'md': '15px',
            'lg': '20px'
        },
        colors: {
            'white': 'hsl(0,0%,100%)',
            'gray': 'hsl(212, 45%, 89%)',
            'blue': 'hsl(220, 15%, 55%)',
            'blue-dark': 'hsl(218, 44%, 22%)',
        },
        fontFamily: {
            sans: ['Outfit', 'sans-serif'],
        },
        screens: {
            'sm': '480px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        extend: {
            spacing: {
            'p-gutter': '20px',
            'p-gutter--large': '40px',
            }
        }
    },
    plugins: [],
}