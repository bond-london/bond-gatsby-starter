import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { AspectRatioVisual } from "../../elements";
import { Section } from "../../layouts";

export const HeroContainer: React.FC<{
  componentName: string;
  visual?: VisualAsset;
  onVisible?: () => void;
  containerClassName?: string;
}> = ({ onVisible, visual, componentName, containerClassName, children }) => {
  return (
    <Section
      componentName={componentName}
      spacingClassName="row-start-2 row-span-4"
      className="text-washed-blue bond-row-5-s"
      preChildren={
        <div
          className={classNames(
            "col-start-1 col-span-3 bg-dark-blue",
            "row-start-1 row-span-6",
            "md:row-start-1 md:row-span-4"
          )}
        />
      }
      onVisible={onVisible}
    >
      <div
        className={classNames(
          "pt-s lg:pt-0",
          "self-center",
          "col-start-1 col-span-4",
          "row-start-4 row-span-3",
          "md:col-start-1 md:col-span-3",
          "lg:col-start-1 lg:col-span-5",
          "md:row-start-1 md:row-span-5",
          containerClassName
        )}
      >
        {children}
      </div>
      {visual && (
        <AspectRatioVisual
          className={classNames(
            "col-start-1 col-span-4 row-start-2 row-span-2",
            "md:col-start-5 md:col-span-4 md:row-start-2 md:row-span-5",
            "lg:col-start-7 lg:col-span-5"
          )}
          aspectRatioClassName="aspect-hero"
          visual={visual}
        />
      )}
    </Section>
  );
};
