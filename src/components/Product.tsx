import { RTF, RTFContent } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { LinkOrButton, NamedLinkInformation } from ".";
import { Section } from "../layouts";

export const Product: React.FC<{
  left?: boolean;
  image: IGatsbyImageData;
  alt: string;
  title: string;
  message?: RTFContent;
  link?: NamedLinkInformation;
}> = ({ left = true, image, alt, title, message, link }) => {
  return (
    <Section
      componentName={left ? "Collection left" : "Collection right"}
      preChildren={
        <div className="col-start-1 col-span-3 row-start-4 row-span-3 bg-dark-blue" />
      }
    >
      <GatsbyImage
        image={image}
        className={classNames(
          "row-start-2 row-span-4",
          "col-start-2 col-span-2",
          left ? "lg:col-start-8" : "lg:col-start-3",
          " lg:col-span-3"
        )}
        alt={alt}
      />
      <div
        className={classNames(
          "relative",
          "row-start-2 row-span-4",
          "col-start-1 col-span-4",
          left ? "lg:col-start-1" : "lg:col-start-7",
          "lg:col-span-6",
          "flex"
        )}
      >
        <div
          className={classNames("bg-off-white rounded-3xl px-l py-s space-y-s")}
        >
          <h2 className="h2">{title}</h2>
          <RTF fixedParagraphClassName="p2" content={message} />
          {link && <LinkOrButton asButton={true} {...link} />}
        </div>
      </div>
    </Section>
  );
};
