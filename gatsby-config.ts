import type { GatsbyConfig } from "gatsby";
import { join, resolve } from "path";
import {
  allowIndex,
  COOKIE_NAME,
  GOOGLE_TAG,
  isProduction,
  showDevPages,
  siteUrl,
} from "./gatsby-env";

// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

const config: GatsbyConfig = {
  // graphqlTypegen: true,
  trailingSlash: "always",
  siteMetadata: {
    siteName: "Bond London Sample Site",
    description: "Site made using the Simple Bond Gatsby Starter",
    siteUrl,
    cookieName: COOKIE_NAME,
    logo: `${siteUrl}/icons/icon-512x512.png`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "static",
        openAnalyzer: false,
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be omitted or customized
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
        // Any additional eslint-webpack-plugin options below
        // ...
        overrideConfigFile: ".custom.eslintrc.json",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => {
          const robotsEnv = allowIndex ? "production" : "development";
          return robotsEnv;
        },
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/", disallow: ["/dev/"] }],
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: resolve("src/pages"),
        ignore: showDevPages
          ? undefined
          : {
              patterns: [`dev/**`],
              options: { nocase: true },
            },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "@bond-london/gatsby-graphql-typegen",
      options: {
        gatsbyTypesFile: "gatsby-types.d.ts",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-sharp",

      options: {
        defaults: {
          formats: isProduction ? ["auto", "webp", "avif"] : ["auto"],
          breakpoints: isProduction ? [400, 750, 1080, 1366, 1920] : [1920],
        },
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    "gatsby-transformer-json",
    "@bond-london/gatsby-transformer-extracted-svg",
    "@bond-london/gatsby-transformer-extracted-lottie",
    {
      resolve: "@bond-london/gatsby-transformer-expand",
      options: {
        unNest: 2,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "videos",
        path: "./videos/",
      },
      __key: "videos",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "animations",
        path: "./animations/",
      },
      __key: "animations",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "db",
        path: "./db/",
      },
      __key: "db",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: "./docs/",
      },
      __key: "docs",
    },
  ],
};

if (GOOGLE_TAG) {
  config.plugins?.push({
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: GOOGLE_TAG,
      includeInDevelopment: true,
      defaultDataLayer: { platform: "gatsby" },
      gtmAuth: process.env.GTM_AUTH,
      gtmPreview: process.env.GTM_PREVIEW,
      enableWebVitalsTracking: true,
    },
  });
}

export default config;
