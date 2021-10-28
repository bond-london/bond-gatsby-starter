import {
  RTFContent,
  VisualAsset,
  AutoVisual,
} from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { RTF } from "../elements";
import { Section } from "../layouts";

export const Message: React.FC<{
  heading: string;
  content?: RTFContent;
  visual?: VisualAsset;
  loop?: boolean;
}> = ({ heading, content, visual, loop }) => {
  return (
    <Section componentName="Headline">
      <div
        className={classNames(
          "col-start-1 col-span-4 md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-6",
          "border-l-6 border-neon-green pl-xs"
        )}
      >
        <h2 className="h1 pb-xs">{heading}</h2>
        <RTF content={content} fixedParagraphClassName="p2" />
      </div>
      <AutoVisual
        visual={visual}
        className={classNames(
          "col-start-2 col-span-2",
          "lg:col-start-10 lg:col-span-2"
        )}
        loop={loop}
      />
    </Section>
  );
};
