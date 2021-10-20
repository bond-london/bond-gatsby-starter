const remSize = 16;

const rounding = 1000;

const defaulttheme = require("tailwindcss/defaultTheme");

const animationTiming = "cubic-bezier(0.22, 1, 0.36, 1)";
const animationDuration = "1s";

const mobileMargin = 30;
const mobileGap = 7;

const tabletMargin = 40;
const tabletGap = 16;

const desktopMargin = 138;
const desktopGap = 16;

const sizes = [
  { name: "mobile", margin: mobileMargin, gap: mobileGap },
  { name: "tablet", margin: tabletMargin, gap: tabletGap },
  { name: "desktop", margin: desktopMargin, gap: desktopGap },
];

function calculateRemSize(pixels) {
  const rems = pixels / remSize;
  const rounded = Math.floor(rems * rounding) / rounding;
  return `${rounded}rem`;
}

function calculateFontSize(pixels, lineHeightPixels) {
  const fontSize = calculateRemSize(pixels);
  if (lineHeightPixels) {
    const lineHeight = calculateRemSize(lineHeightPixels);
    return [fontSize, lineHeight];
  }

  return [fontSize];
}

function calculateFontSizeRatio(pixels, lineHeightRatio) {
  const fontSize = calculateRemSize(pixels);
  if (lineHeightRatio) {
    const lineHeight = calculateRemSize(pixels * lineHeightRatio);
    return [fontSize, lineHeight];
  }

  return [fontSize];
}

function calculateNumbers(min, max, keyFn, valueFn, by = 1) {
  const result = {};
  for (let i = min; i <= max; i += by) {
    result[keyFn(i)] = valueFn(i);
  }
  return result;
}

function mapNumbers(numbers, keyFn, valueFn, by = 1) {
  const result = {};
  numbers.forEach((i) => {
    result[keyFn(i)] = valueFn(i);
  });
  return result;
}

function buildRatios(max) {
  return calculateNumbers(
    1,
    max,
    (i) => `${i}/${max}`,
    (i) => `${(i / max) * 100}%`
  );
}

function calculateSpan(min, max, by = 1) {
  return calculateNumbers(
    min,
    max,
    (i) => `span-${i}`,
    (i) => `span ${i} / span ${i}`
  );
}

function createGrids() {
  const grids = {};

  sizes.forEach(({ name, margin, gap }) => {
    grids[`${name}`] = `${calculateRemSize(
      margin - gap
    )} repeat(12, 1fr) ${calculateRemSize(margin - gap)}`;
  });
  return grids;
}

function addAnimationUtilities({ addUtilities }) {
  addUtilities(
    calculateNumbers(
      100,
      10000,
      (v) => `.animation-delay-${v}`,
      (v) => ({ "animation-delay": `${v}ms` }),
      100
    )
  );

  addUtilities({
    ".animation-running": { "animation-play-state": "running" },
    ".animation-paused": { "animation-play-state": "paused" },
  });

  addUtilities(
    calculateNumbers(
      100,
      10000,
      (v) => `.animation-duration-${v}`,
      (v) => ({ "animation-duration": `${v}ms` }),
      100
    )
  );
  addUtilities(
    calculateNumbers(
      100,
      10000,
      (v) => `.transition-duration-${v}`,
      (v) => ({ "transition-duration": `${v}ms` }),
      100
    )
  );
}

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "gatsby-*.js"],
  },
  theme: {
    fontFamily: {
      roboto: ["Roboto", ...defaulttheme.fontFamily.sans],
    },
    extend: {
      spacing: {
        ...mapNumbers([5, 10, 20, 30, 40], (v) => `${v}px`, calculateRemSize),
      },
      fontSize: {
        "65-80": calculateFontSize(65, 80),
      },
      gridTemplateColumns: {
        ...createGrids(),
      },
      gridColumn: {
        ...calculateNumbers(
          13,
          14,
          (v) => `span-${v}`,
          (v) => `span ${v} / span ${v}`
        ),
      },
      gridColumnStart: {
        ...calculateNumbers(
          13,
          14,
          (v) => `${v}`,
          (v) => `${v}`
        ),
      },
      gridColumnEnd: {
        ...calculateNumbers(
          13,
          14,
          (v) => `${v}`,
          (v) => `${v}`
        ),
      },

      keyframes: {
        fromBottom: {
          "0%": { transform: "translateY(100vh)" },
          "100%": { transform: "translateY(0)" },
        },
        toTop: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100vh)" },
        },
      },
      animation: {
        fromBottom: "fromBottom 0.5s ease-in",
        toTop: "toTop 0.5s ease-out",
      },
    },
    transitionTimingFunction: {
      bond: animationTiming,
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/forms"),
  ],
};
