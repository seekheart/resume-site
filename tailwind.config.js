/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'midnight-green': '#073B3A',
                'emerald': '#21D375',
                'dartmouth-green': '#0B6E4F',
            },
            fontFamily: {
                lora: ['Lora', 'serif'],
            },
            fontSize: {
                "header": "2.25rem",
            },
            spacing: {
                "1.5": "1.5rem",
                "2.25": "2.25rem",
                "25": '25rem',
                "36px": "2.25rem",
            },
        },
    },
    plugins: [],
}

