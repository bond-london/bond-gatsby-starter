import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { LinkOrButton, NamedLinkInformation } from ".";
import { AspectRatioVisual, RTF } from "../elements";
import { Section } from "../layouts";
import { useFirstVisible } from "../utils";
import { CleanedRTF } from "@bond-london/graphcms-rich-text";

export const Information: React.FC<{
  right?: boolean;
  visual: VisualAsset;
  title: string;
  content?: CleanedRTF;
  links?: NamedLinkInformation[];
}> = ({ right = false, visual, title, content, links }) => {
  const [onVisible, animationMode] = useFirstVisible();
  return (
    <Section
      componentName={right ? "Information right" : "Information left"}
      preChildren={
        <div className="col-start-1 col-span-3 row-start-4 row-span-3 bg-dark-blue" />
      }
      onVisible={onVisible}
      contentClassName="items-center grid-rows-mobile-overlap md:auto-rows-auto"
    >
      <AspectRatioVisual
        aspectRatioClassName="aspect-7x4"
        visual={visual}
        className={classNames(
          "row-start-1 row-span-2",
          "col-start-1 col-span-4",
          "md:row-start-1 md:row-span-1",
          right
            ? "md:col-start-5 lg:col-start-6"
            : "md:col-start-1 lg:col-start-1",
          "md:col-span-4 lg:col-span-7"
        )}
      />
      <div
        className={classNames(
          "relative",
          "row-start-2 row-span-2",
          "col-start-1 col-span-4",
          "md:row-start-1 md:row-span-1 md:h-full",
          right
            ? "md:col-start-1 lg:col-start-1"
            : "md:col-start-4 lg:col-start-7",
          "md:col-span-5 lg:col-span-6",
          "flex items-center"
        )}
      >
        <div
          className={classNames(
            "bg-off-white rounded-normal px-xs lg:px-m py-s space-y-s"
          )}
        >
          <h2
            className={classNames(
              animationMode,
              "h2 animate-enter-from-bottom"
            )}
          >
            {title}
          </h2>
          {content && (
            <RTF
              fixedParagraphClassName="p2"
              content={content}
              className={classNames(
                animationMode,
                "animate-enter-from-bottom animation-delay-100"
              )}
            />
          )}
          {links && (
            <div
              className={classNames(
                animationMode,
                "animate-appear animation-delay-200",
                "flex space-x-xs"
              )}
            >
              {links.map((link, index) => (
                <LinkOrButton key={index} isButton={true} {...link} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};
