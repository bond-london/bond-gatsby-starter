import React from "react";
import { graphql } from "gatsby";
import {
  AutoVideoOrThumbnail,
  getImageFromFile,
  getLottieFromFile,
  getVideoFromFile,
  LottieElement,
} from "@bond-london/gatsby-graphcms-components";

import { PageDoc, File } from "../generated/graphql-types";
import { Layout, Section } from "../layouts";
import classNames from "classnames";

interface Props {
  data: {
    pageDoc: PageDoc;
  };
}
const Page: React.FC<Props> = (props) => {
  const {
    data: {
      pageDoc: { title, description, image, video, animation },
    },
  } = props;

  const imageData = getImageFromFile(image);
  const videoSrc = getVideoFromFile(video);
  const lottie = getLottieFromFile(animation as File);

  return (
    <Layout bodyClassName="bg-white" title="Home">
      <Section componentName="Heading" className="bg-green">
        <h1
          className={classNames(
            "h1",
            "col-start-2 col-span-4",
            "md:col-start-3 md:col-span-6",
            "lg:col-start-4 lg:col-span-8"
          )}
        >
          {title || "Bond Sample Site"}
        </h1>
      </Section>

      <div className="aspect-w-16 aspect-h-9 w-full">
        <AutoVideoOrThumbnail
          videoSrc={videoSrc}
          alt={description}
          thumbnail={imageData}
          fitParent={true}
        />
      </div>
      {lottie && (
        <Section componentName="Animation">
          <LottieElement
            className="aspect-w-1 aspect-h-1 col-content"
            animationJson={lottie.animationJson}
            encoded={lottie.encoded}
            loop={true}
          />
        </Section>
      )}
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
  }
`;
