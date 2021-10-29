import {
  AutoVisual,
  VisualAsset,
} from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";

export const AspectRatioVisual: React.FC<{
  visual?: VisualAsset;
  className?: string;
  aspectRatioClassName: string;
  visualClassName?: string;
  loop?: boolean;
}> = ({ visual, className, aspectRatioClassName, loop, visualClassName }) => {
  return (
    <div className={classNames("relative", className)}>
      <div className={aspectRatioClassName}>
        <AutoVisual
          visual={visual}
          loop={loop}
          fitParent={true}
          className={visualClassName}
        />
      </div>
    </div>
  );
};
