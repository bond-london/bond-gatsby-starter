import {
  SEO,
  SiteBuildMetadata,
  SiteMetadata,
} from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Modal, Section } from ".";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

export const LayoutContext = createContext<{
  setModal: (node?: ReactNode) => void;
  modal?: ReactNode;
}>({
  setModal: () => {
    /* noop */
  },
});

export const Layout: React.FC<
  PropsWithChildren<{
    pagePath: string;
    bodyClassName?: string;
    title: string;
    description?: string;
    keywords?: string;
    image?: IGatsbyImageData;
  }>
> = ({
  pagePath,
  bodyClassName,
  title,
  description,
  keywords,
  image,
  children,
}) => {
  const { siteBuildMetadata, site } =
    useStaticQuery<Queries.LayoutQuery>(graphql`
      query Layout {
        site {
          siteMetadata {
            description
            siteName
            siteUrl
            cookieName
            logo
          }
        }
        siteBuildMetadata {
          buildYear: buildTime(formatString: "YYYY")
          buildTime(formatString: "dddd, MMMM d YYYY, h:mm:ss A")
        }
      }
    `);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const siteMetadata = site!.siteMetadata!;

  const pageTitle = title
    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      `${title} | ${siteMetadata.siteName!}`
    : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      siteMetadata.siteName!;

  const onAccept = useCallback(() => {
    window.gtag?.("consent", "update", { ad_storage: "granted" });
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const cookieValue = getCookieConsentValue(siteMetadata.cookieName!);
    if (cookieValue) {
      onAccept();
    }
  }, [siteMetadata.cookieName, onAccept]);

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
        siteBuildMetadata={siteBuildMetadata as SiteBuildMetadata}
        pageMetadata={{
          title,
          description,
          image,
          keywords,
        }}
        pagePath={pagePath}
        siteMetadata={siteMetadata as SiteMetadata}
        className={classNames(
          bodyClassName || "bg-washed-blue",
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
          © Bond London {siteBuildMetadata?.buildYear as string}{" "}
          {siteBuildMetadata?.buildTime as string}
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
        cookieName={siteMetadata.cookieName as string}
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
        contentClassName="bg-washed-blue rounded-normal p-s"
      />
    </LayoutContext.Provider>
  );
};
