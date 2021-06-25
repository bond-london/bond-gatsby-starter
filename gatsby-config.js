require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    FAST_DEV: true,
  },
  siteMetadata: {
    title: "Bond London Sample Site",
    description: "Site made using the Simple Bond Gatsby Starter",
    siteURL: process.env.GATSBY_SITE_URL || "http://localhost:8000",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
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
        path: "./src/videos/",
      },
      __key: "videos",
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "db",
        path: "./db/",
      },
      __key: "db",
    },
    {
      resolve: "@bond-london/gatsby-plugin-generate-typings",
      options: {
        dest: "./src/generated/graphql-types.d.ts",
      },
    },
  ],
};
