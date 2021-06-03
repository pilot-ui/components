const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",
    purge: {
        enabled: true,
        content: ["./*.html"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ["Poppins"],
        },
        extend: {
            colors: {
                transparent: "transparent",
                primary: colors.blue,
                secondary: colors.blueGray,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
