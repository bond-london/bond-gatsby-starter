const remSize = 16;
const maximumWidth = 1640;

const rounding = 1000;

const defaulttheme = require("tailwindcss/defaultTheme");

const animationTiming = "cubic-bezier(0.22, 1, 0.36, 1)";
const animationDuration = "1s";

const mobileMargin = 30;
const mobileGap = 7;
const mobileCols = 4;

const tabletMargin = 40;
const tabletGap = 16;
const tabletCols = 8;

const desktopMargin = 138;
const desktopGap = 16;
const desktopCols = 12;

const colorOptions = {
  black: "#000000",
  white: "#ffffff",
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "dark-green": "#008000",
  "dark-red": "#800000",
  grey: "#808080",
};

const defaultNumbers = {
  0: "0",
  full: "100%",
};

const sizes = [
  { name: "mobile", margin: mobileMargin, gap: mobileGap, cols: mobileCols },
  { name: "tablet", margin: tabletMargin, gap: tabletGap, cols: tabletCols },
  {
    name: "desktop",
    margin: desktopMargin,
    gap: desktopGap,
    cols: desktopCols,
  },
];

const spacing = {
  xxs: 16,
  xs: 24,
  s: 40,
  m: 64,
  l: 80,
  xl: 112,
};

const fontSizeRatios = [
  "42-125",
  "36-125",
  "24-125",
  "22-140",
  "18-140",
  "16-140",
  "14-140",
];

module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{tsx,ts}"],
  },
  theme: {
    fontFamily: {
      roboto: ["Roboto", ...defaulttheme.fontFamily.sans],
    },
    fontWeight: {
      regular: 400,
      semibold: 600,
    },
    colors: {
      ...buildColours(),
    },
    spacing: {
      ...defaultNumbers,
      ...buildSpacing(),
      ...buildGridSpacing(),
    },
    fontSize: {
      ...buildFontSizes(),
    },
    gridTemplateColumns: {
      ...createGrids(),
    },
    gridColumn: {
      ...calculateNumbers(
        1,
        Math.max(mobileCols, tabletCols, desktopCols) + 2,
        (v) => `span-${v}`,
        (v) => `span ${v} / span ${v}`
      ),
      "span-full": "1/-1",
      ...calculateSizes(
        ({ name }) => `central-${name}`,
        ({ cols }) => `2 / span ${cols}`
      ),
    },
    gridColumnStart: {
      ...calculateNumbers(
        1,
        Math.max(mobileCols, tabletCols, desktopCols) + 2,
        (v) => `${v}`,
        (v) => `${v}`
      ),
    },
    gridColumnEnd: {
      ...calculateNumbers(
        1,
        Math.max(mobileCols, tabletCols, desktopCols) + 2,
        (v) => `${v}`,
        (v) => `${v}`
      ),
    },
    extend: {
      maxWidth: {
        maxwidth: calculateRemSize(maximumWidth),
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
    outline: {
      error: ["4px solid red", "2px"],
      "debug-white": "1px dashed white",
      "debug-black": "1px dashed black",
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/forms"),
  ],
};

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

function calculateSizes(keyFn, valueFn) {
  const result = {};
  sizes.forEach((size) => {
    result[keyFn(size)] = valueFn(size);
  });
  return result;
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

  sizes.forEach(({ name, margin, gap, cols }) => {
    Object.assign(
      grids,
      calculateNumbers(
        1,
        cols,
        (v) => `${name}-left-${v}`,
        (v) => `${calculateRemSize(margin - gap)} repeat(${v}, 1fr)`
      )
    );
    Object.assign(
      grids,
      calculateNumbers(
        1,
        cols,
        (v) => `${name}-right-${v}`,
        (v) => `repeat(${v}, 1fr) ${calculateRemSize(margin - gap)}`
      )
    );
    grids[`${name}-full`] = `${calculateRemSize(
      margin - gap
    )} repeat(${cols}, 1fr) ${calculateRemSize(margin - gap)}`;
    grids[`${name}-content`] = `repeat(${cols}, 1fr)`;
  });
  return grids;
}

function buildGridSpacing() {
  const results = {};
  sizes.forEach(({ name, margin, gap, cols }) => {
    results[`${name}-gap`] = calculateRemSize(gap);
    results[`${name}-margin`] = calculateRemSize(margin);

    for (let i = 1; i < cols; i++) {
      results[`${name}-${i}-cols`] = `calc((((min(100vw, ${calculateRemSize(
        maximumWidth
      )}) - ${calculateRemSize(
        2 * margin + (cols + 1) * gap
      )}) / ${cols}) * ${i}) + ${calculateRemSize((i - 1) * gap)})`;
      results[
        `${name}-${i}-margin-cols`
      ] = `calc((((min(100vw, ${calculateRemSize(
        maximumWidth
      )}) - ${calculateRemSize(
        2 * margin + (cols + 1) * gap
      )}) / ${cols}) * ${i}) + ${calculateRemSize(margin)} + ${calculateRemSize(
        (i - 1) * gap
      )})`;
    }
  });
  return results;
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

function buildColours() {
  const colors = {
    transparent: "transparent",
    current: "current",
  };

  Object.entries(colorOptions).map(([colorName, colorValue]) => {
    colors[colorName] = colorValue;
    colors[`${colorName}-0`] = `${colorValue}00`;
  });

  return colors;
}

function buildSpacing() {
  const results = {};
  Object.entries(spacing).map(
    ([name, value]) => (results[name] = calculateRemSize(value))
  );
  return results;
}

function buildFontSizes() {
  const results = {};
  fontSizeRatios.forEach((fontSize) => {
    const split = fontSize.split("-");
    const pixels = parseInt(split[0]);
    const ratioName = split.length > 0 ? split[1] : undefined;
    const ratio = split.length > 0 ? parseInt(split[1]) / 100 : undefined;
    const name = `${pixels}-${ratioName || "0"}`;
    results[name] = calculateFontSizeRatio(pixels, ratio);
  });
  return results;
}
