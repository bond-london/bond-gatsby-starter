import { SEO } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { Section } from ".";
import { Site, SiteBuildMetadata } from "../generated/graphql-types";

export const Layout: React.FC<{ bodyClassName?: string }> = ({
  bodyClassName,
  children,
}) => {
  const siteData = useStaticQuery<{
    siteBuildMetadata: SiteBuildMetadata & { buildYear: string };
    site: Site;
  }>(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          description
          title
          siteUrl
        }
      }
      siteBuildMetadata {
        buildYear: buildTime(formatString: "YYYY")
        buildTime(formatString: "dddd, MMMM d YYYY, h:mm:ss A")
      }
    }
  `);

  return (
    <>
      <Helmet>
        <body
          className={classNames(
            bodyClassName || "bg-white",
            process.env.GATSBY_DEBUG_TAILWIND && "debug-screens"
          )}
        />
      </Helmet>
      <SEO
        siteBuildMetadata={siteData.siteBuildMetadata}
        siteMetadata={siteData.site.siteMetadata}
        pageUrl={siteData.site.siteMetadata?.siteUrl || "http://localhost:8000"}
      />
      {children}
      <Section
        key="Footer"
        componentName="Footer"
        element="footer"
        bottomSpacing={false}
      >
        <p className="col-content">
          © Bond London {siteData.siteBuildMetadata.buildYear}{" "}
          {siteData.siteBuildMetadata.buildTime}
        </p>
      </Section>
    </>
  );
};
