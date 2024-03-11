/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#f3f4f9",
        white: "#fff",
        whitesmoke: {
          "100": "#f7f8fb",
          "200": "#f3f6f9",
          "300": "#eeefef",
          "400": "#edeef1",
        },
        gray: {
          "100": "#888a8e",
          "200": "#7e8084",
          "300": "#74767a",
          "400": "#1f2937",
          "500": "#0f172a",
          "600": "rgba(255, 255, 255, 0.3)",
        },
        seagreen: "#52924c",
        gainsboro: {
          "100": "#e7e8e8",
          "200": "#e3e4e7",
          "300": "#dddede",
          "400": "rgba(217, 217, 217, 0.5)",
        },
        darkgray: "#a6a8ac",
        orange: "#fc9d03",
        black: "#000",
        lavender: "#dae4ee",
        slategray: {
          "100": "#707494",
          "200": "#67768e",
          "300": "#5f677a",
          "400": "rgba(112, 116, 148, 0.1)",
        },
        mediumslateblue: {
          "100": "#5d5fef",
          "200": "rgba(102, 106, 246, 0.2)",
        },
        dimgray: "#4b5563",
        darkslateblue: "#23235f",
        lightsteelblue: "#b7c6de",
      },
      spacing: {
        "navigations-breadcrumb-separator-height": "12px",
        "navigations-breadcrumb-inline-gap-between": "10px",
        "navigations-breadcrumb-icon-size": "16px",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "8xs": "5px",
        "21xl": "40px",
        "4xs-1": "8.1px",
        "10xs": "3px",
      },
    },
    fontSize: {
      smi: "13px",
      "2xs": "11px",
      xs: "12px",
      "3xs": "10px",
      "4xs": "9px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
