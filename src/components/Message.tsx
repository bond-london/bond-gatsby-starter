import {
  RTFContent,
  VisualAsset,
  AutoVisual,
} from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { RTF } from "../elements";
import { Section } from "../layouts";
import { useFirstVisible } from "../utils";

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
      contentClassName="grid-rows-mobile-portrait lg:grid-rows-1"
    >
      <div
        className={classNames(
          "row-start-1 row-span-2",
          "lg:row-start-1 lg:row-span-1",
          "col-start-1 col-span-4 md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-6",
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
        <RTF
          content={content}
          fixedParagraphClassName="p2"
          className={classNames(animationMode, "animate-appear")}
        />
      </div>
      <AutoVisual
        visual={visual}
        className={classNames(
          "row-start-4 row-span-2",
          "lg:row-start-1 lg:row-span-1",
          "col-start-1 col-span-4 mx-s",
          "lg:col-start-10 lg:col-span-2"
        )}
        loop={loop}
      />
    </Section>
  );
};
