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
}> = ({ onVisible, visual, loop, componentName, children }) => {
  return (
    <Section
      componentName={componentName}
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
        {children}
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
