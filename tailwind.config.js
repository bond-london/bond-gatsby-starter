const remSize = 16;
const maximumWidth = 1640;

const rounding = 1000;

const defaulttheme = require("tailwindcss/defaultTheme");

const animationTiming = "cubic-bezier(0.22, 1, 0.36, 1)";
const animationDuration = "0.5s";

const mobileMargin = 20;
const mobileGap = 20;
const mobileCols = 4;

const tabletMargin = 40;
const tabletGap = 16;
const tabletCols = 8;

const desktopMargin = 48;
const desktopGap = 24;
const desktopCols = 12;

const colorOptions = {
  black: "#070707",
  "light-black": "#121f28",
  "dark-blue": "#002641",
  "neon-green": "#bcff03",
  "neon-green-hover": "#B0f000",
  pink: "#F7E4E0",
  blue: "#83E4FA",
  "blue-hover": "#3FC8E7",
  "light-blue": "#D4FBFF",
  "washed-blue": "#EBFFFE",
  grey: "#F2F2F2",
  "off-white": "#f9ffff",
  error: "#e53935",
};

const defaultNumbers = {
  0: "0",
  full: "100%",
  unset: "unset",
};

const spacing = {
  icon: 6,
  xxxs: 8,
  xxs: 16,
  xs: 24,
  square: 32,
  s: 40,
  m: 64,
  l: 80,
  xl: 112,
};

const navHeight = spacing.xxxs + spacing.m + spacing.xxs;

const sizes = [
  {
    name: "mobile",
    margin: mobileMargin,
    gap: mobileGap,
    cols: mobileCols,
    spacing: spacing.s,
  },
  {
    name: "tablet",
    margin: tabletMargin,
    gap: tabletGap,
    cols: tabletCols,
    spacing: spacing.s,
  },
  {
    name: "desktop",
    margin: desktopMargin,
    maxWidth: maximumWidth,
    gap: desktopGap,
    cols: desktopCols,
    spacing: spacing.s,
  },
];

const fontSizeRatios = [
  "42-125",
  "36-125",
  "32-125",
  "24-125",
  "22-140",
  "18-140",
  "18-125",
  "16-140",
  "14-140",
  "14-125",
  "12-140",
];

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    fontFamily: {
      sofiapro: ["Sofia Pro", ...defaulttheme.fontFamily.sans],
      poppins: ["Poppins", ...defaulttheme.fontFamily.serif],
    },
    fontWeight: {
      light: 300,
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
      ...mapNumbers([1, 2, 3], defaultKeyFn, remValueFn),
    },
    fontSize: {
      ...buildFontSizes(),
    },
    borderRadius: {
      ...defaultNumbers,
      square: calculateRemSize(2),
      button: calculateRemSize(4),
      normal: calculateRemSize(24),
      full: "9999px",
    },
    extend: {
      zIndex: {
        cookies: "1000",
        modal: "500",
      },
      maxHeight: {
        navClosed: calculateRemSize(88),
        navOpen: calculateRemSize(2000),
        modal: "80vh",
      },
      maxWidth: {
        maxwidth: calculateRemSize(maximumWidth),
        unset: "unset",
      },
      gridTemplateColumns: {
        ...createGridCols(),
      },
      gridTemplateRows: {
        ...createGridRows(),
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
    addContainerGrid,
    addAnimationUtilities,
    addBorderSpacing,
    addExtraVariants,
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

function createGridRows() {
  const grids = {};

  grids["nav-closed"] = `${calculateRemSize(navHeight)} 1fr`;
  grids["nav-open"] = `${calculateRemSize(navHeight)} ${calculateRemSize(
    spacing.s
  )} 1fr ${calculateRemSize(spacing.s)}`;
  grids["mobile-overlap"] = `auto ${calculateRemSize(spacing.s)} auto`;

  return grids;
}

function createGridCols() {
  const grids = {};

  sizes.forEach(({ name, margin, gap, cols, maxWidth }) => {
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

    if (maxWidth) {
      grids[`${name}-container`] = `minmax(${calculateRemSize(
        margin
      )},1fr) minmax(auto, ${calculateRemSize(
        maxWidth
      )}) minmax(${calculateRemSize(margin)},1fr)`;
    } else {
      grids[`${name}-container`] = `${calculateRemSize(
        margin
      )} auto ${calculateRemSize(margin)}`;
    }
  });

  grids["icon-button"] = `${calculateRemSize(spacing.xxs)} 1fr`;
  return grids;
}

function buildGridSpacing() {
  const results = {};
  sizes.forEach(({ name, margin, gap, cols }) => {
    results[`${name}-gap`] = calculateRemSize(gap);
    results[`${name}-margin`] = calculateRemSize(margin);
    results[`${name}-half-col`] = `calc((((min(100vw, ${calculateRemSize(
      maximumWidth
    )}) - ${calculateRemSize(
      2 * margin + (cols + 1) * gap
    )}) / ${cols}) * 0.5))`;

    for (let i = 1; i < cols; i++) {
      results[`${name}-${i}-cols`] = `calc((((min(100vw, ${calculateRemSize(
        maximumWidth
      )}) - ${calculateRemSize(
        2 * margin + (cols + 1) * gap
      )}) / ${cols}) * ${i}) + ${calculateRemSize((i - 1) * gap)})`;
      results[`${name}-${i}-gap-cols`] = `calc((((min(100vw, ${calculateRemSize(
        maximumWidth
      )}) - ${calculateRemSize(
        2 * margin + cols * gap
      )}) / ${cols}) * ${i}) + ${calculateRemSize(i * gap)})`;
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

function addExtraVariants({ addVariant, e }) {
  addVariant("not-first", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`not-first${separator}${className}`)}:not(:first-child)`;
    });
  });
  addVariant("not-last", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`not-last${separator}${className}`)}:not(:last-child)`;
    });
  });
}

function addBorderSpacing({ addUtilities }) {
  addUtilities({
    ".border-spacing-0": { "border-spacing": "0" },
  });
}

function addContainerGrid({ addUtilities }) {
  addUtilities({
    ".grid-container": {
      "--bond-container-row-1": calculateRemSize(spacing.s),
      "--bond-container-row-2": "1fr",
      "--bond-container-row-3": "1fr",
      "--bond-container-row-4": "1fr",
      "--bond-container-row-5": "1fr",
      "--bond-container-row-6": calculateRemSize(spacing.s),
      "grid-template-rows": `var(--bond-container-row-1) var(--bond-container-row-2) var(--bond-container-row-3) var(--bond-container-row-4) var(--bond-container-row-5) var(--bond-container-row-6)`,
    },
  });

  const values = {};
  for (let row = 1; row <= 6; row++) {
    Object.entries(spacing).forEach(([name, value]) => {
      const properties = {};
      properties[`--bond-container-row-${row}`] = calculateRemSize(value);
      values[`.bond-row-${row}-${name}`] = properties;
    });
  }
  addUtilities(values);
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

function LightenDarkenColor(col, amt) {
  var num = parseInt(col.slice(1), 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return "#" + (g | (b << 8) | (r << 16)).toString(16);
}

function buildColours() {
  const colors = {
    transparent: "transparent",
    current: "currentColor",
  };

  Object.entries(colorOptions).map(([colorName, colorValue]) => {
    colors[colorName] = colorValue;
    for (let i = 0; i < 10; i++) {
      colors[`${colorName}-${i}`] = `${colorValue}${Math.round((i / 10) * 255)
        .toString(16)
        .padStart(2, "0")}`;

      colors[`${colorName}-d${i}`] = `${LightenDarkenColor(
        colorValue,
        -i * 10
      )}`;
      colors[`${colorName}-l${i}`] = `${LightenDarkenColor(
        colorValue,
        i * 10
      )}`;
    }
  });

  return colors;
}

function defaultKeyFn(value) {
  return `${value}`;
}

function remValueFn(value) {
  return `${calculateRemSize(value)}`;
}

function processSpacing(keyFn, valueFn) {
  const results = {};
  Object.entries(spacing).map(
    ([name, value]) => (results[keyFn(name)] = valueFn(value))
  );
  return results;
}

function buildSpacing() {
  const results = processSpacing(defaultKeyFn, remValueFn);
  results["nav"] = calculateRemSize(navHeight);
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
