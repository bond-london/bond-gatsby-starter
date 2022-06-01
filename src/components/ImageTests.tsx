import {
  AutoVisualNoLottie,
  HorizontalPosition,
  VerticalPosition,
  VisualAsset,
} from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import { graphql, PageProps, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { Layout, Section } from "../layouts";

const SingleAsset: React.FC<{
  image?: IGatsbyImageData;
  videoUrl?: string;
  alt: string;
  loop?: boolean;
  dontCrop?: boolean;
  verticalCropPosition?: VerticalPosition;
  horizontalCropPosition?: HorizontalPosition;
  containerClassName?: string;
  fitParent?: boolean;
  description: string;
}> = ({
  image,
  videoUrl,
  alt,
  loop,
  dontCrop,
  verticalCropPosition,
  horizontalCropPosition,
  containerClassName,
  fitParent,
  description,
}) => {
  const imageOnly: VisualAsset = {
    image,
    alt,
    dontCrop,
    verticalCropPosition,
    horizontalCropPosition,
  };
  const videoOnly: VisualAsset = {
    videoUrl,
    alt,
    loop,
    dontCrop,
    verticalCropPosition,
    horizontalCropPosition,
  };
  const combined: VisualAsset = {
    image,
    videoUrl,
    alt,
    loop,
    dontCrop,
    verticalCropPosition,
    horizontalCropPosition,
  };

  if (containerClassName) {
    return (
      <>
        <h2 className="h2 col-span-full laptop:col-span-3">{description}</h2>
        <div
          className={classNames(
            containerClassName,
            "col-span-full laptop:col-span-3"
          )}
        >
          <AutoVisualNoLottie visual={imageOnly} fitParent={fitParent} />
        </div>
        <div
          className={classNames(
            containerClassName,
            "col-span-full laptop:col-span-3"
          )}
        >
          <AutoVisualNoLottie visual={videoOnly} fitParent={fitParent} />
        </div>
        <div
          className={classNames(
            containerClassName,
            "col-span-full laptop:col-span-3"
          )}
        >
          <AutoVisualNoLottie visual={combined} fitParent={fitParent} />
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className="h2 col-span-full laptop:col-span-3">{description}</h2>
      <AutoVisualNoLottie
        visual={imageOnly}
        fitParent={fitParent}
        className="col-span-full laptop:col-span-3"
      />
      <AutoVisualNoLottie
        visual={videoOnly}
        fitParent={fitParent}
        className="col-span-full laptop:col-span-3"
      />
      <AutoVisualNoLottie
        visual={combined}
        fitParent={fitParent}
        className="col-span-full laptop:col-span-3"
      />
    </>
  );
};

export const ImageTests: React.FC<PageProps> = ({ path }) => {
  const testImages = useStaticQuery<Queries.TestImagesQuery>(graphql`
    query TestImages {
      allFile(filter: { name: { regex: "/^small_extracted2.*/" } }) {
        nodes {
          id
          uid
          name
          extension
          ...VideoFragment
          ...ImageFragment
        }
      }
    }
  `);

  const video = testImages.allFile.nodes.find((n) => n.extension === "mp4")
    ?.publicURL as string;
  const image = testImages.allFile.nodes.find((n) => n.extension === "jpg")
    ?.childImageSharp?.gatsbyImageData as IGatsbyImageData;

  return (
    <Layout bodyClassName="bg-white" title="Home" pagePath={path}>
      <Section componentName="Heading" className="bg-green">
        <h1 className="h1 col-span-full">Image tests</h1>
      </Section>
      <Section componentName="Image grids">
        <h2 className="col-span-full laptop:col-span-4 h2">Image only</h2>
        <h2 className="col-span-full laptop:col-span-4 h2">Video only</h2>
        <h2 className="col-span-full laptop:col-span-4 h2">Combined</h2>
        <SingleAsset
          description="Simple"
          alt="Test image"
          image={image}
          videoUrl={video}
          loop={true}
          dontCrop={true}
          verticalCropPosition="Middle"
          horizontalCropPosition="Middle"
        />
        <SingleAsset
          description="Square no crop"
          alt="Test image"
          image={image}
          videoUrl={video}
          loop={true}
          dontCrop={true}
          verticalCropPosition="Bottom"
          horizontalCropPosition="Left"
          containerClassName="aspect-w-1 aspect-h-1"
          fitParent={true}
        />
        <SingleAsset
          description="Square with crop"
          alt="Test image"
          image={image}
          videoUrl={video}
          loop={true}
          dontCrop={false}
          verticalCropPosition="Top"
          horizontalCropPosition="Right"
          containerClassName="aspect-w-1 aspect-h-1"
          fitParent={true}
        />
      </Section>
    </Layout>
  );
};
