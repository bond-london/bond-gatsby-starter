import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { LinkOrButton, NamedLinkInformation } from ".";
import { AspectRatioVisual, RTF } from "../elements";
import { Section } from "../layouts";
import { useFirstVisible } from "../utils";
import { RTFContent } from "@bond-london/graphcms-rich-text";

export const Product: React.FC<{
  right?: boolean;
  visual: VisualAsset;
  title: string;
  content?: RTFContent;
  links?: NamedLinkInformation[];
}> = ({ right = true, visual, title, content, links }) => {
  const [onVisible, animationMode] = useFirstVisible();
  return (
    <Section
      componentName={right ? "Product left" : "Product right"}
      onVisible={onVisible}
      contentClassName="items-center"
      className="bond-row-1-m bond-row-6-m"
    >
      <AspectRatioVisual
        className={classNames(
          "row-start-1 row-span-1",
          "col-start-1 col-span-4",
          "px-xs md:px-0",
          "self-center",
          right
            ? "md:col-start-6 lg:col-start-8"
            : "md:col-start-1 lg:col-start-3",
          "md:col-span-3 lg:col-span-3",
          "mb-s md:mb-0"
        )}
        aspectRatioClassName="aspect-4x3"
        visual={visual}
      />
      <div
        className={classNames(
          "row-start-2 row-span-1",
          "col-start-1 col-span-4",
          "md:row-start-1 md:row-span-1",
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
