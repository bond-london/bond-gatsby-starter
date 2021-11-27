import { SEO } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React, { ReactNode, useCallback, useMemo, useState } from "react";
import { Modal, Section } from ".";
import CookieConsent from "react-cookie-consent";
import { handleCookieAccepted } from "@bond-london/gatsby-plugin-cookie-scripts";

export const LayoutContext = React.createContext<{
  setModal: (node?: ReactNode) => void;
  modal?: ReactNode;
}>({
  setModal: () => {
    /* noop */
  },
});

export const Layout: React.FC<{
  bodyClassName?: string;
  title: string;
  description?: string;
  keywords?: string;
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

  const [modal, setModal] = useState<ReactNode>();
  const provider = useMemo(
    () => ({
      modal,
      setModal,
    }),
    [modal, setModal]
  );

  return (
    <LayoutContext.Provider value={provider}>
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
        pageUrl={siteMetadata.siteUrl}
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
        <p className="col-span-full">
          © Bond London {siteBuildMetadata.buildYear}{" "}
          {siteBuildMetadata.buildTime}
        </p>
      </Section>
      <CookieConsent
        containerClasses="bg-grey opacity-90 page-grid fixed w-full z-cookies py-xs gap-y-xs max-w-unset"
        contentClasses="col-central-mobile md:col-start-1 md:col-span-4 lg:col-start-1 lg:col-span-8 self-center"
        acceptOnScroll={true}
        acceptOnScrollPercentage={5}
        buttonWrapperClasses={classNames(
          "flex self-center",
          "col-central-mobile md:col-start-6 md:col-span-3 lg:col-start-9 lg:col-span-4",
          "justify-around lg:justify-end",
          "space-x-mobile-gap md:space-x-mobile-gap lg:space-x-desktop-gap"
        )}
        buttonClasses="button green-button"
        declineButtonClasses="button red-button"
        declineCookieValue="cookie-declined"
        enableDeclineButton={true}
        declineButtonText="No way!"
        cookieName={siteMetadata.cookieName}
        style={{ alignItems: "end" }}
        disableStyles={true}
        disableButtonStyles={true}
        location={"bottom"}
        buttonText="Got it!"
        onAccept={onAccept}
      >
        This website uses cookies to ensure you get the best experience on our
        website.
      </CookieConsent>
      <Modal
        containerClassName="bg-black bg-opacity-50"
        contentClassName="bg-washed-blue rounded-3xl p-s"
      />
    </LayoutContext.Provider>
  );
};
