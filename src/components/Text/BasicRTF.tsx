import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import {
  ClassNameOverrides,
  RTFContent,
} from "@bond-london/graphcms-rich-text";
import classNames from "classnames";
import React from "react";
import { AspectRatioVisual, RTF } from "../../elements";
import { Section } from "../../layouts";

export const BasicRTF: React.FC<{
  content: RTFContent;
  className?: string;
  classNameOverrides?: ClassNameOverrides;
  visual?: VisualAsset;
  right?: boolean;
}> = ({ right = true, content, className, classNameOverrides, visual }) => {
  const realClassName =
    className || visual
      ? classNames(
          "col-start-1 col-span-4",
          "md:row-start-1",
          right
            ? "md:col-start-2 md:col-span-6 lg:col-start-1 lg:col-span-7"
            : "md:col-start-5 md:col-span-4 lg:col-start-8 lg:col-span-4"
        )
      : "col-span-full";
  return (
    <Section
      componentName="Basic RTF"
      contentClassName="items-center gap-y-xs md:gap-y-0"
    >
      <RTF
        content={content}
        className={realClassName}
        classNameOverrides={classNameOverrides}
      />
      {visual && (
        <AspectRatioVisual
          aspectRatioClassName="aspect-square"
          className={classNames(
            "col-start-1 col-span-4",
            "md:row-start-1",
            right
              ? "md:col-start-3 md:col-span-4 lg:col-start-9 lg:col-span-4"
              : "md:col-start-1 md:col-span-4 lg:col-start-2 lg:col-span-4"
          )}
          visual={visual}
        />
      )}
    </Section>
  );
};
