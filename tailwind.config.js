const bondPlugin = require("@bond-london/bond-tailwind-plugin/dist/utils");
const config = require("./tailwind.config.json");
const defaulttheme = require("tailwindcss/defaultTheme");

const animationTiming = "cubic-bezier(0.22, 1, 0.36, 1)";
const animationDuration = "0.5s";

module.exports = {
  content: ["./src/**/!(*.d).ts", "./src/**/*.tsx"],
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    fontFamily: {
      sofiapro: ["Sofia Pro", ...defaulttheme.fontFamily.sans],
      poppins: ["Poppins", ...defaulttheme.fontFamily.serif],
    },
    extend: {
      borderRadius: {
        button: bondPlugin.calculateRemSize(4),
        normal: bondPlugin.calculateRemSize(40),
        small: bondPlugin.calculateRemSize(20),
        mobile: bondPlugin.calculateRemSize(10),
        form: bondPlugin.calculateRemSize(4),
        none: bondPlugin.calculateRemSize(0),
      },
      zIndex: {
        cookies: "1000",
        modal: "500",
      },
      maxHeight: {
        navClosed: bondPlugin.calculateRemSize(88),
        navOpen: bondPlugin.calculateRemSize(2000),
        modal: "80vh",
      },
      keyframes: {
        "enter-from-top": {
          "0%": { transform: "translateY(-20px)", opacity: 0 },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        "enter-from-bottom": {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        "enter-from-left": {
          "0%": { transform: "translateX(-20px)", opacity: 0 },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        "enter-from-right": {
          "0%": { transform: "translateX(20px)", opacity: 0 },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "enter-from-top": `enter-from-top ${animationDuration} ${animationTiming} both`,
        "enter-from-bottom": `enter-from-bottom ${animationDuration} ${animationTiming} both`,
        "enter-from-left": `enter-from-left ${animationDuration} ${animationTiming} both`,
        "enter-from-right": `enter-from-right ${animationDuration} ${animationTiming} both`,
        appear: `appear ${animationDuration} ${animationTiming} both`,
      },
      borderWidth: {
        6: "6px",
      },
    },
    transitionTimingFunction: {
      bond: animationTiming,
    },
    outline: {
      error: ["4px solid red", "2px"],
      "debug-white": "1px dashed white",
      "debug-black": "1px dashed black",
    },
  },
  variants: {
    extend: {
      borderRadius: ["last", "first"],
    },
  },
  plugins: [
    require("@bond-london/bond-tailwind-plugin")(config),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/forms"),
  ],
};
