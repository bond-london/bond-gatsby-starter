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
    <Section componentName="Hero" className="bg-dark-blue text-white">
      <div
        className={classNames(
          "col-start-2 col-span-4",
          "lg:col-start-2 lg:col-span-5",
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
            "col-start-2 col-span-4",
            "lg:col-start-8 lg:col-span-5 lg:row-start-1 lg:row-span-2"
          )}
        >
          <AutoVideoOrThumbnail
            videoSrc={videoUrl}
            thumbnail={image}
            alt={alt}
            fitParent={true}
          />
        </div>
      )}
    </Section>
  );
};
