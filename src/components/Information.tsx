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

export const Information: React.FC<{
  left?: boolean;
  visual: VisualAsset;
  loop?: boolean;
  title: string;
  message?: RTFContent;
  link?: NamedLinkInformation;
}> = ({ left = true, visual, title, message, link, loop }) => {
  const [onVisible, animationMode] = useFirstVisible();
  return (
    <Section
      componentName={left ? "Information left" : "Information right"}
      preChildren={
        <div className="col-start-1 col-span-3 row-start-4 row-span-3 bg-dark-blue" />
      }
      onVisible={onVisible}
      contentClassName="grid-rows-mobile-portrait md:grid-rows-1"
    >
      <AutoVisual
        visual={visual}
        loop={loop}
        className={classNames(
          "row-start-1 row-span-3",
          "col-start-1 col-span-4",
          "md:row-start-1 md:row-span-1",
          left
            ? "md:col-start-5 lg:col-start-6"
            : "md:col-start-1 lg:col-start-1",
          "md:col-span-4 lg:col-span-7"
        )}
      />
      <div
        className={classNames(
          "relative",
          "row-start-3 row-span-3",
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
            "bg-off-white rounded-3xl px-xs lg:px-l py-s space-y-s lg:my-m"
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
