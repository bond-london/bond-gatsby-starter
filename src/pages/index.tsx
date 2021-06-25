import React from "react";
import { h1 } from "../styles";
import classNames from "classNames";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { getSrc } from "gatsby-plugin-image";
import { DocsJson, Site } from "../generated/graphql-types";

interface Props {
  data: {
    docsJson: DocsJson;
    site: Site;
  };
}
const Page: React.FC<Props> = (props) => {
  const {
    data: {
      docsJson: { index },
      site: { siteMetadata },
    },
  } = props;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { title, description, image, video } = index!;
  const {
    siteURL: possibleSiteURL,
    title: siteTitle,
    description: siteDescription,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  } = siteMetadata!;

  const imageSrc = getSrc(image?.childImageSharp?.gatsbyImageData);
  const videoSrc = video?.publicURL;
  const siteURL = possibleSiteURL || "http://localhost:8080";

  const meta: JSX.IntrinsicElements["meta"][] = [
    { name: "robots", content: "noindex" },
    {
      name: "description",
      content: description || siteDescription || "Bond Sample Site",
    },
    { property: "og:title", content: title || siteTitle || "Bond Sample Site" },
    {
      property: "og:description",
      content: description || siteDescription || "Bond Sample Site",
    },
    { property: "og:type", content: "website" },
    {
      name: "twitter:title",
      content: title || siteTitle || "Bond Sample Site",
    },
    {
      name: "twitter:description",
      content: description || siteTitle || "Bond Sample Site",
    },
    { name: "twitter:card", content: "summary_large_image" },
  ];

  if (imageSrc) {
    meta.push({ property: "og:image", content: `${siteURL}/${imageSrc}` });
  }

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        title={title || siteTitle || "Bond starter"}
        meta={meta}
      >
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "${siteURL}",
          "name": "${title || siteTitle || "Bond Sample Site"}"
        }`}
        </script>
      </Helmet>
      <h1 className={classNames(h1)}>
        {title || siteTitle || "Bond Sample Site"}
      </h1>
      {videoSrc && (
        <div className="aspect-w-16 aspect-h-9 w-full">
          <video src={videoSrc} autoPlay={true} muted={true} loop={true} />
        </div>
      )}
    </>
  );
};

export default Page;

export const indexPageQuery = graphql`
  query IndexPageQuery {
    docsJson {
      index {
        title
        description
        image {
          id
          childImageSharp {
            gatsbyImageData
          }
        }
        video {
          id
          publicURL
        }
      }
    }
    site {
      siteMetadata {
        description
        title
        siteURL
      }
    }
  }
`;
