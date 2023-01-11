/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ["./app/**/*.{js,jsx}", "./video/**/*.{js,jsx}"],
    theme: {
        extend: {
            transitionProperty: {
                modal: "transform, opacity",
            },
            fontFamily: {
                "main-cute": "var(--font-main-cute)",
                "main-hand": "var(--font-main-hand)",
                "main-sans": "var(--font-main-sans)",
            },
        },
    },
    plugins: [],
}
