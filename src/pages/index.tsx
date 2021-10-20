import React from "react";
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
import { Layout, Section } from "../layouts";
import classNames from "classnames";
import { Colours, lookupColourString } from "../lookups";

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
      bodyClassName="bg-white"
    >
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

      <Section componentName="Colour Palette" pageGrid={false}>
        {Colours.map((colour) => (
          <div key={colour} className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <div className={lookupColourString(colour, "bg")} />
            </div>
            <p className="p3">{colour}</p>
          </div>
        ))}
      </Section>

      <Section componentName="Spacings">
        <table className="col-content">
          <th className="content-grid-in-page-grid text-left">
            <td className="col-start-1 col-span-1 md:col-start-1 md:col-span-3">
              Name
            </td>
            <td className="col-start-3 col-span-2 md:col-start-6 md:col-span-3">
              Example
            </td>
          </th>
          {["w-xxs", "w-xs", "w-s", "w-m", "w-l", "w-xl"].map((w) => (
            <tr key={w} className="content-grid-in-page-grid">
              <td className="col-start-1 col-span-1 md:col-start-1 md:col-span-3">
                {w.replace("w-", "").toUpperCase()}
              </td>
              <td className="col-start-3 col-span-2 md:col-start-6 md:col-span-3">
                <div className={classNames("h-m", w, "bg-red")} />
              </td>
            </tr>
          ))}
        </table>
      </Section>

      <Section componentName="Headlines">
        <h2 className="h2 col-content">Headlines:</h2>
        {["h1", "h2", "h3"].map((text) => (
          <>
            <p className={classNames("col-content", text)}>
              {text.toUpperCase()}
            </p>
            <p className={classNames("col-content", text, "pb-m")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </>
        ))}
      </Section>

      <Section componentName="Body copy">
        <h2 className="h2 col-content">Bodycopy:</h2>
        {["p1", "p1sb", "p2", "p2sb", "p3", "p4"].map((text) => (
          <>
            <p className={classNames("col-content", text)}>
              {text.toUpperCase()}
            </p>
            <p className={classNames("col-content", text, "pb-m")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </>
        ))}
      </Section>

      <Section componentName="Footer" element="footer" bottomSpacing={false}>
        <p className="col-content">
          © Bond London {siteBuildMetadata.buildYear}{" "}
          {siteBuildMetadata.buildTime}
        </p>
      </Section>
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
