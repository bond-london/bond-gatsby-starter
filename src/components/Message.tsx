import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { AspectRatioVisual, RTF } from "../elements";
import { Section } from "../layouts";
import { useFirstVisible } from "../utils";
import { CleanedRTF } from "@bond-london/graphcms-rich-text";
import { lookupColourString } from "../lookups";

export type BackgroundColour = "LightBlue" | "DarkBlue";
export function getBackgroundColourClassName(
  colour?: BackgroundColour
): string | undefined {
  if (colour) {
    return lookupColourString(colour, "bg");
  }
}

export const Message: React.FC<{
  title: string;
  content?: CleanedRTF;
  visual?: VisualAsset;
  className?: string;
  backgroundColour?: BackgroundColour;
}> = ({ title, content, visual, className, backgroundColour }) => {
  const backgroundColourClassName =
    getBackgroundColourClassName(backgroundColour);
  const [onVisible, animationMode] = useFirstVisible();
  return (
    <Section
      componentName="Message"
      onVisible={onVisible}
      className={classNames(
        className,
        "bond-row-1-s lg:bond-row-1-l bond-row-6-s lg:bond-row-6-l",
        backgroundColourClassName
      )}
      contentClassName="gap-y-s md:gap-y-0"
    >
      <div
        className={classNames(
          "row-start-1 row-span-1",
          "col-start-1 col-span-4 md:col-start-1 md:col-span-6 lg:col-start-2 lg:col-span-6",
          "border-l-6 border-neon-green pl-xs"
        )}
      >
        <h2
          className={classNames(animationMode, "h1 animate-enter-from-bottom")}
        >
          {title}
        </h2>
        {content && (
          <RTF
            content={content}
            fixedParagraphClassName="p2"
            className={classNames(
              animationMode,
              "mt-xs animate-enter-from-bottom animation-delay-200"
            )}
          />
        )}
      </div>
      <AspectRatioVisual
        visual={visual}
        className={classNames(
          "row-start-2 row-span-1",
          "md:row-start-1 md:row-span-1",
          "col-start-1 col-span-4 mx-s md:mx-0",
          "self-center",
          "md:col-start-7 md:col-span-2",
          "lg:col-start-10 lg:col-span-2"
        )}
        aspectRatioClassName="aspect-4x3"
      />
    </Section>
  );
};
