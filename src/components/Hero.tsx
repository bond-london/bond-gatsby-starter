import {
  AutoVisual,
  RTF,
  RTFContent,
  VisualAsset,
} from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { LinkOrButton, NamedLinkInformation } from ".";
import { Section } from "../layouts";
import { useFirstVisible } from "../utils";

export const Hero: React.FC<{
  title: string;
  message?: RTFContent;
  link?: NamedLinkInformation;
  visual?: VisualAsset;
  loop?: boolean;
}> = ({ title, message, link, visual, loop }) => {
  const [onVisible, animationMode] = useFirstVisible();
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
      onVisible={onVisible}
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
        <h1 className={classNames(animationMode, "h1 animate-enter-from-left")}>
          {title}
        </h1>
        <RTF
          fixedParagraphClassName="p2"
          className={classNames(animationMode, "animate-appear")}
          content={message}
        />
        {link && (
          <LinkOrButton
            className={classNames(animationMode, "animate-enter-from-bottom")}
            asButton={true}
            {...link}
          />
        )}
      </div>
      {visual && (
        <div
          className={classNames(
            "relative",
            "col-start-1 col-span-4 row-start-1 row-span-3",
            "lg:col-start-7 lg:col-span-5 lg:row-start-2 lg:row-span-2"
          )}
        >
          <div className="aspect-w-1 aspect-h-1">
            <AutoVisual visual={visual} fitParent={true} loop={loop} />
          </div>
        </div>
      )}
    </Section>
  );
};
