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
            'gray-light': 'hsl(30, 18%, 87%)',
            'charcoal': 'hsl(24, 5%, 18%)',
            'brown': 'hsl(30, 10%, 34%)',
            'nutmeg': 'hsl(14, 45%, 36%)',
            'dark-raspberry': 'hsl(332, 51%, 32%)',
            'rose-white': 'hsl(330, 100%, 98%)',
            'eggshell': 'hsl(30, 54%, 90%)',
        },
        fontFamily: {
            sans: ['Outfit', 'sans-serif'],
            serif: ['Young Serif', 'serif'],
        },
        screens: {
            'sm': '480px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        extend: {}
    },
    plugins: [],
}