import {
  AutoVisual,
  RTFContent,
  VisualAsset,
} from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { LinkOrButton, NamedLinkInformation } from ".";
import { RTF } from "../elements";
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
      preChildren={
        <div className="hidden lg:block col-start-1 col-span-3 row-start-4 row-span-3 bg-dark-blue" />
      }
      onVisible={onVisible}
      contentClassName="grid-rows-mobile-portrait lg:grid-rows-1"
    >
      <AutoVisual
        visual={visual}
        loop={loop}
        className={classNames(
          "row-start-1 row-span-2",
          "col-start-1 col-span-4",
          "lg:row-start-1 lg:row-span-1",
          left ? "lg:col-start-8" : "lg:col-start-3",
          " lg:col-span-3"
        )}
      />
      <div
        className={classNames(
          "relative",
          "row-start-4 row-span-2",
          "col-start-1 col-span-4",
          "lg:row-start-1 lg:row-span-1",
          left ? "lg:col-start-1" : "lg:col-start-7",
          "lg:col-span-6",
          "flex"
        )}
      >
        <div
          className={classNames(
            "bg-off-white rounded-3xl lg:px-l py-s space-y-s"
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
