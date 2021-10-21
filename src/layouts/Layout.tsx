import { SEO } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React, { useCallback } from "react";
import { Section } from ".";
import CookieConsent from "react-cookie-consent";
import { handleCookieAccepted } from "@bond-london/gatsby-plugin-cookie-scripts";

export const Layout: React.FC<{
  bodyClassName?: string;
  title: string;
  description?: string;
  keywords?: string[];
  image?: IGatsbyImageData;
}> = ({ bodyClassName, title, description, keywords, image, children }) => {
  const { siteBuildMetadata, site } = useStaticQuery<{
    siteBuildMetadata: { buildTime: string; buildYear: string };
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
        cookieName: string;
      };
    };
  }>(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          description
          title
          siteUrl
          cookieName
        }
      }
      siteBuildMetadata {
        buildYear: buildTime(formatString: "YYYY")
        buildTime(formatString: "dddd, MMMM d YYYY, h:mm:ss A")
      }
    }
  `);

  const siteMetadata = site.siteMetadata;

  const pageTitle = siteMetadata?.title
    ? `${siteMetadata.title} | ${title}`
    : title;

  const onAccept = useCallback(() => {
    handleCookieAccepted();
  }, []);

  return (
    <>
      <SEO
        pageTitle={pageTitle}
        siteBuildMetadata={siteBuildMetadata}
        pageMetadata={{
          title,
          description,
          image,
          keywords,
        }}
        siteMetadata={siteMetadata}
        pageUrl={siteMetadata?.siteUrl || "http://localhost:8000"}
        className={classNames(
          bodyClassName || "bg-white",
          process.env.GATSBY_DEBUG_TAILWIND && "debug-screens"
        )}
      />
      {children}
      <Section
        key="Footer"
        componentName="Footer"
        element="footer"
        bottomSpacing={false}
      >
        <p className="col-content">
          © Bond London {siteBuildMetadata.buildYear}{" "}
          {siteBuildMetadata.buildTime}
        </p>
      </Section>
      <CookieConsent
        declineCookieValue="cookie-declined"
        enableDeclineButton={true}
        declineButtonText="No way!"
        cookieName={siteMetadata.cookieName}
        containerClasses="bg-grey opacity-90 page-grid fixed w-full z-50 py-xs gap-y-xs"
        style={{ alignItems: "end" }}
        disableStyles={true}
        disableButtonStyles={true}
        location={"bottom"}
        buttonWrapperClasses={classNames(
          "flex self-center",
          "col-central-mobile md:col-start-7 md:col-span-3 lg:col-start-10 lg:col-span-4",
          "justify-around lg:justify-end",
          "space-x-mobile-gap md:space-x-mobile-gap lg:space-x-desktop-gap"
        )}
        declineButtonClasses="button red-button"
        buttonClasses="button green-button"
        buttonText="Got it!"
        contentClasses="col-central-mobile md:col-start-2 md:col-span-4 lg:col-start-2 lg:col-span-8 self-center"
        onAccept={onAccept}
      >
        This website uses cookies to ensure you get the best experience on our
        website.
      </CookieConsent>
    </>
  );
};
