import {
  RTFContent,
  VisualAsset,
} from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { LinkOrButton, NamedLinkInformation } from ".";
import { AspectRatioVisual, RTF } from "../elements";
import { Section } from "../layouts";
import { useFirstVisible } from "../utils";

export const Product: React.FC<{
  left?: boolean;
  visual: VisualAsset;
  loop?: boolean;
  title: string;
  message?: RTFContent;
  link?: NamedLinkInformation;
}> = ({ left = true, visual, loop, title, message, link }) => {
  const [onVisible, animationMode] = useFirstVisible();
  return (
    <Section
      componentName={left ? "Collection left" : "Collection right"}
      onVisible={onVisible}
      contentClassName="grid-rows-mobile-portrait md:grid-rows-1"
    >
      <AspectRatioVisual
        className={classNames(
          "row-start-1 row-span-2",
          "col-start-1 col-span-4",
          "px-xs md:px-0",
          "self-center",
          "md:row-start-1 md:row-span-1",
          left
            ? "md:col-start-6 lg:col-start-8"
            : "md:col-start-1 lg:col-start-3",
          "md:col-span-3 lg:col-span-3"
        )}
        aspectRatioClassName="aspect-4x3"
        visual={visual}
        loop={loop}
      />
      <div
        className={classNames(
          "relative",
          "row-start-4 row-span-2",
          "col-start-1 col-span-4",
          "md:row-start-1 md:row-span-1",
          left
            ? "md:col-start-1 lg:col-start-1"
            : "md:col-start-4 lg:col-start-7",
          "md:col-span-5 lg:col-span-6",
          "flex"
        )}
      >
        <div
          className={classNames(
            "bg-off-white rounded-3xl px-xs lg:px-l py-s space-y-s"
          )}
        >
          <h2
            className={classNames(animationMode, "h2 animate-enter-from-left")}
          >
            {title}
          </h2>
          <RTF
            fixedParagraphClassName="p2"
            content={message}
            className={classNames(animationMode, "animate-appear")}
          />
          {link && (
            <LinkOrButton
              className={classNames(animationMode, "animate-enter-from-bottom")}
              isButton={true}
              {...link}
            />
          )}
        </div>
      </div>
    </Section>
  );
};
