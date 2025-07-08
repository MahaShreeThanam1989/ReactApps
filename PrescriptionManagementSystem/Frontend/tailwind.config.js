/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#1E40AF', // Blue
            },
            // Override or add custom gridTemplateColumns
            gridTemplateColumns: {
                // This overrides the default 'grid-cols-3' for example
                // '3': 'repeat(3, minmax(0, 1fr))',
                // Custom class: 'grid-cols-auto'
                'auto': 'repeat(auto-fill,minmax(200px,1fr))'
            }
        },
    },
    plugins: [],
}; 