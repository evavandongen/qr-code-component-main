/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js}'],
    theme: {
        borderRadius: {
            'none': '0',
            'xs': '0.25rem',
            'sm': '0.5rem',
            'md': '1rem',
            'lg': '2rem',
            'xl': '3rem',
            '2xl': '4rem',
            '3xl': '5rem',
            '4xl': '6rem',
            '5xl': '7rem',
            'full': '50%',
        },
        colors: {
            'white': 'hsl(0, 0%, 100%)',
            'gray': 'hsl(0, 0%, 86%)',
            'gray-dark':'hsl(0, 1%, 44%)',
            'gray-light': 'hsl(0, 0%, 94%)',
            'black': 'hsl(0, 0%, 8%)',
            'purple': 'hsl(259, 100%, 65%)',
            'red': 'hsl(0, 100%, 67%)'
        },
        fontFamily: {
            'poppins': 'Poppins, sans-serif'
        },
        screens: {
            'sm': '480px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        extend: { }
    },
    plugins: [],
}