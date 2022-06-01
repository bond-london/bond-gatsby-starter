import React from "react";
import { graphql, PageProps } from "gatsby";
import {
  AutoVideoOrThumbnail,
  getImageFromFile,
  getLottieFromFile,
  getVideoFromFile,
} from "@bond-london/gatsby-graphcms-components";

import { LottieElement } from "@bond-london/gatsby-graphcms-components/dist/elements/LottieElement";

import { Layout, Section } from "../layouts";
import classNames from "classnames";

const Page: React.FC<PageProps<Queries.IndexPageQuery>> = ({ path, data }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const pageDoc = data.pageDoc!;
  const { image, video, animation, title, description } = pageDoc;

  const imageData = getImageFromFile(image);
  const videoSrc = getVideoFromFile(video);
  const lottie = getLottieFromFile(animation);

  return (
    <Layout bodyClassName="bg-white" title="Home" pagePath={path}>
      <Section componentName="Heading" className="bg-green">
        <h1
          className={classNames(
            "h1",
            "col-start-1 col-span-4",
            "md:col-start-2 md:col-span-6",
            "lg:col-start-3 lg:col-span-8"
          )}
        >
          {title || "Bond Sample Site"}
        </h1>
      </Section>

      <div className="aspect-w-16 aspect-h-9 w-full">
        <AutoVideoOrThumbnail
          videoSrc={videoSrc}
          alt={description || "description"}
          thumbnail={imageData}
          fitParent={true}
        />
      </div>
      {lottie && (
        <Section componentName="Animation">
          <LottieElement
            alt="Animation"
            className="aspect-w-1 aspect-h-1 col-span-full"
            animationUrl={lottie.animationUrl}
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
  query IndexPage {
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
