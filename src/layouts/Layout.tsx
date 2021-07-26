import classNames from "classnames";
import React from "react";
import { Helmet } from "react-helmet";
import { SEO } from "../elements";
import {
  SiteBuildMetadata,
  SiteSiteMetadata,
} from "../generated/graphql-types";

interface Props {
  siteBuildMetadata: SiteBuildMetadata & { buildYear: string };
  siteMetadata: SiteSiteMetadata;
  bodyClassName?: string;
}

export const Layout: React.FC<Props> = ({
  siteBuildMetadata,
  siteMetadata,
  bodyClassName,
  children,
}) => {
  return (
    <>
      <Helmet>
        <body
          className={classNames(
            bodyClassName || "bg-light-grey",
            process.env.GATSBY_DEBUG_TAILWIND && "debug-screens"
          )}
        />
      </Helmet>
      <SEO
        siteBuildMetadata={siteBuildMetadata}
        siteMetadata={siteMetadata}
        pageUrl={siteMetadata.siteUrl || "http://localhost:8000"}
      />
      {children}
    </>
  );
};
