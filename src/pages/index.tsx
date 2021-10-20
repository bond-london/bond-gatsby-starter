import React from "react";
import { h1 } from "../styles";
import classNames from "classnames";
import { graphql } from "gatsby";
import {
  AutoVideoOrThumbnail,
  getImageFromFile,
  getLottieFromFile,
  getVideoFromFile,
  LottieElement,
} from "@bond-london/gatsby-graphcms-components";

import {
  PageDoc,
  Site,
  SiteBuildMetadata,
  File,
} from "../generated/graphql-types";
import { Layout } from "../layouts";

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

  const imageData = getImageFromFile(image);
  const videoSrc = getVideoFromFile(video);
  const lottie = getLottieFromFile(animation as File);

  return (
    <Layout
      siteBuildMetadata={siteBuildMetadata}
      siteMetadata={siteMetadata}
      bodyClassName="bg-red"
    >
      <h1 className={classNames(h1)}>{title || "Bond Sample Site"}</h1>

      <div className="aspect-w-16 aspect-h-9 w-full">
        <AutoVideoOrThumbnail
          videoSrc={videoSrc}
          alt={description}
          thumbnail={imageData}
          fitParent={true}
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
    </Layout>
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
        ...ImageFragment
      }
      video {
        ...VideoFragment
      }
      animation {
        ...LottieFragment
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
      buildTime(formatString: "dddd, MMMM d YYYY, h:mm:ss A")
    }
  }
`;
