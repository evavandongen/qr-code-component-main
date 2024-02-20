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
            'white': 'hsl(0, 0%, 100%)',
            'light-pink': 'hsl(275, 100%, 97%)',
            'grayish-purple': 'hsl(292, 16%, 49%)',
            'dark-purple': 'hsl(292, 42%, 14%)'
        },
        fontFamily: {
            sans: ['Work Sans', 'sans-serif'],
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