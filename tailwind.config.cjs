/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ["./app/**/*.{js,jsx}", "./video/**/*.{js,jsx}"],
    theme: {
        extend: {
            transitionProperty: {
                modal: "transform, opacity",
            },
        },
    },
    plugins: [],
}
