require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const languages = ["en"];
const siteUrl = process.env.GATSBY_SITE_URL || "http://localhost:8000";
const showDevPages = !!process.env.SHOW_DEV_PAGES;

const path = require("path");
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

module.exports = {
  flags: {
    FAST_DEV: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    LMDB_STORE: true,
  },
  siteMetadata: {
    title: "Bond London Sample Site",
    description: "Site made using the Simple Bond Gatsby Starter",
    siteUrl,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be ommitted or customized
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
        ignore: showDevPages
          ? undefined
          : {
              patterns: [`dev/**.tsx`],
              options: { nocase: true },
            },
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
    {
      resolve: "@bond-london/gatsby-plugin-generate-typings",
      options: {
        dest: "./src/generated/graphql-types.d.ts",
      },
    },
  ].filter((x) => x),
};
