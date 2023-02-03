const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: "class",
    theme: {
        extend: {
            important: true,
            screens: {
                max: { max: "768px" },
            },
            fontFamily: {
                main: ["Sen, sans-serif"],
            },
            colors: {
                primary: "#ee8529",
                alt: "#eab308",
                accent: "#2A2A29",
                secondary: "#383838",
                text: "#666666",
                body: "#f0f1f5",
                "default": "#d2d3d4",
                "warn": "#e74c3c",
                "danger": "#e74c3c",

            },
            fontSize: {
                "md": ".9rem"
            },
            height: {
                nav: "calc(100% - 90px)"
            },
            width: {
                content: "calc(100% - 260px)",
                sidebar: "calc(100% - 60px)"
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents }) {
            addComponents({
                ".no-scrollbar": {
                    scrollbarWidth: "none",
                    "-ms-overflow-style": "none",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                },
                ".navDrop": {
                    top: "calc(100% + 10px)",
                    pointerEvents: "none",
                    opacity: "0",
                    "&.show": {
                        pointerEvents: "visible",
                        opacity: "1",
                        top: "100%"
                    }
                },
                ".transition-3s": {
                    transition: ".3s"
                },
            });
        }),
    ],
};
