import React from "react";
import { h1 } from "../styles";
import classNames from "classnames";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { getSrc, IGatsbyImageData } from "gatsby-plugin-image";
import {
  ExtractedLottie,
  PageDoc,
  Site,
  SiteBuildMetadata,
  File,
} from "../generated/graphql-types";
import { AutoVideoOrThumbnail, LottieElement, SEO } from "../elements";

interface Props {
  data: {
    pageDoc: PageDoc;
    siteBuildMetadata: SiteBuildMetadata & { buildYear: string };
    site: Site;
  };
}
const Page: React.FC<Props> = (props) => {
  const {
    data: {
      pageDoc: { title, description, image, video, animation },
      siteBuildMetadata,
      site: { siteMetadata },
    },
  } = props;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const {
    siteUrl: possibleSiteUrl,
    title: siteTitle,
    description: siteDescription,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  } = siteMetadata!;

  const imageData = image?.childImageSharp?.gatsbyImageData as IGatsbyImageData;
  const imageSrc = getSrc(imageData);
  const videoSrc = video?.publicURL;
  const lottie = (animation as File)?.lottie as ExtractedLottie;
  const siteUrl = possibleSiteUrl || "http://localhost:8080";

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
    meta.push({ property: "og:image", content: `${siteUrl}/${imageSrc}` });
  }

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        title={title || siteTitle || "Bond starter"}
        meta={meta}
      ></Helmet>
      {siteMetadata && (
        <SEO
          siteMetadata={siteMetadata}
          pageMetadata={{ title, description, image: imageData }}
          pageUrl={siteMetadata.siteUrl || "http://localhost:8000"}
        />
      )}
      <h1 className={classNames(h1)}>
        {title || siteTitle || "Bond Sample Site"}
      </h1>

      <div className="aspect-w-16 aspect-h-9 w-full">
        <AutoVideoOrThumbnail
          videoSrc={videoSrc}
          alt={description}
          thumbnail={imageData}
          fitParent={true}
          loop={true}
          muted={true}
        />
      </div>
      {lottie && (
        <div className="aspect-w-1 aspect-h-1 w-full">
          <LottieElement
            animationJson={lottie.animationJson}
            encoded={lottie.encoded}
            loop={true}
          />
        </div>
      )}
      <footer className="">
        <p>
          © Bond London {siteBuildMetadata.buildYear}{" "}
          {siteBuildMetadata.buildTime}
        </p>
      </footer>
    </>
  );
};

export default Page;

export const indexPageQuery = graphql`
  query IndexPageQuery {
    pageDoc(
      fileInformation: {
        extension: { eq: "json" }
        name: { eq: "index" }
        relativeDirectory: { eq: "" }
      }
    ) {
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
      animation {
        lottie {
          animationJson
          encoded
        }
      }
    }
    site {
      siteMetadata {
        description
        title
        siteUrl
      }
    }
    siteBuildMetadata {
      buildYear: buildTime(formatString: "YYYY")
      buildTime(formatString: "dddd, MMMM dS YYYY, h:mm:ss A")
    }
  }
`;
