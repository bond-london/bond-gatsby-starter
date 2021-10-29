import {
  AutoVisual,
  VisualAsset,
} from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { Section } from "../../layouts";

export const HeroContainer: React.FC<{
  componentName: string;
  visual?: VisualAsset;
  loop?: boolean;
  onVisible?: () => void;
  containerClassName?: string;
}> = ({
  onVisible,
  visual,
  loop,
  componentName,
  containerClassName,
  children,
}) => {
  return (
    <Section
      componentName={componentName}
      double={true}
      topSpacing={false}
      className="text-washed-blue"
      contentClassName="grid-rows-mobile-double-auto lg:grid-rows-desktop-double-auto"
      preChildren={
        <div
          className={classNames(
            "col-start-1 col-span-3 bg-dark-blue",
            "row-start-1 row-span-6",
            "lg:row-start-1 lg:row-span-4"
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
          "lg:col-start-1 lg:col-span-5",
          "lg:row-start-1 lg:row-span-5",
          containerClassName
        )}
      >
        {children}
      </div>
      {visual && (
        <div
          className={classNames(
            "relative",
            "col-start-1 col-span-4 row-start-2 row-span-2",
            "lg:col-start-7 lg:col-span-5 lg:row-start-2 lg:row-span-5"
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
