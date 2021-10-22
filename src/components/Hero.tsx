import {
  AutoVideoOrThumbnail,
  RTF,
  RTFContent,
} from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { LinkOrButton, NamedLinkInformation } from ".";
import { Section } from "../layouts";

export const Hero: React.FC<{
  title: string;
  message?: RTFContent;
  link?: NamedLinkInformation;
  image: IGatsbyImageData;
  videoUrl?: string;
  alt: string;
}> = ({ title, message, link, image, videoUrl, alt }) => {
  return (
    <Section
      componentName="Hero"
      double={true}
      topSpacing={false}
      className="text-washed-blue"
      contentClassName="container-basic"
      preChildren={
        <div className="col-start-1 col-span-3 row-start-1 row-span-4 bg-dark-blue" />
      }
    >
      <div
        className={classNames(
          "self-center",
          "col-start-1 col-span-4",
          "row-start-1 row-span-3",
          "lg:col-start-1 lg:col-span-5",
          "lg:row-start-1 lg:row-span-2",
          "space-y-s"
        )}
      >
        <h1 className="h1">{title}</h1>
        <RTF fixedParagraphClassName="p2" content={message} />
        {link && <LinkOrButton asButton={true} {...link} />}
      </div>
      {(image || videoUrl) && (
        <div
          className={classNames(
            "relative",
            "col-start-1 col-span-4 row-start-1 row-span-3",
            "lg:col-start-7 lg:col-span-5 lg:row-start-2 lg:row-span-2"
          )}
        >
          <div className="aspect-w-1 aspect-h-1">
            <AutoVideoOrThumbnail
              videoSrc={videoUrl}
              thumbnail={image}
              alt={alt}
              fitParent={true}
            />
          </div>
        </div>
      )}
    </Section>
  );
};
