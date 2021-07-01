import { getSrc, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import { Helmet } from "react-helmet";
import { SchemaOrg } from ".";

export interface Seo {
  title?: string | undefined | null;
  description?: string | undefined | null;
  image?: IGatsbyImageData | undefined;
  keywords?: string[] | undefined | null;
}
interface Props {
  siteMetadata: Seo;
  pageMetadata?: Seo;
  pageUrl: string;
}

export const SEO: React.FC<Props> = ({
  siteMetadata,
  pageMetadata,
  pageUrl,
}) => {
  const title = pageMetadata?.title || siteMetadata.title || "Page title";
  const description =
    pageMetadata?.description || siteMetadata.description || "Page description";
  const image = pageMetadata?.image || siteMetadata?.image || undefined;
  const imageSrc = image && getSrc(image);
  const imageUrl = imageSrc && pageUrl + imageSrc;
  const keywords = pageMetadata?.keywords || siteMetadata?.keywords || [];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={imageUrl} />
        <meta name="keywords" content={keywords.join()} />

        {/* Open graph tags */}
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />

        {/* Twitter card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

      <SchemaOrg
        pageUrl={pageUrl}
        title={title}
        defaultTitle={siteMetadata.title || "Page title"}
      />
    </>
  );
};
