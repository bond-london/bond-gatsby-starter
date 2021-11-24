import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { AspectRatioVisual, RTF } from "../elements";
import { Section } from "../layouts";
import { useFirstVisible } from "../utils";
import { RTFContent } from "@bond-london/graphcms-rich-text";

export const Message: React.FC<{
  heading: string;
  content?: RTFContent;
  visual?: VisualAsset;
  loop?: boolean;
}> = ({ heading, content, visual, loop }) => {
  const [onVisible, animationMode] = useFirstVisible();
  return (
    <Section
      componentName="Headline"
      onVisible={onVisible}
      contentClassName="grid-rows-mobile-portrait md:grid-rows-1"
    >
      <div
        className={classNames(
          "row-start-1 row-span-2",
          "md:row-start-1 md:row-span-1",
          "col-start-1 col-span-4 md:col-start-1 md:col-span-6 lg:col-start-2 lg:col-span-6",
          "border-l-6 border-neon-green pl-xs"
        )}
      >
        <h2
          className={classNames(
            animationMode,
            "h1 pb-xs animate-enter-from-left"
          )}
        >
          {heading}
        </h2>
        {content && (
          <RTF
            content={content}
            fixedParagraphClassName="p2"
            className={classNames(animationMode, "animate-appear")}
          />
        )}
      </div>
      <AspectRatioVisual
        visual={visual}
        className={classNames(
          "row-start-4 row-span-2",
          "md:row-start-1 md:row-span-1",
          "col-start-1 col-span-4 mx-s md:mx-0",
          "self-center",
          "md:col-start-7 md:col-span-2",
          "lg:col-start-10 lg:col-span-2"
        )}
        aspectRatioClassName="aspect-4x3"
        loop={loop}
      />
    </Section>
  );
};
