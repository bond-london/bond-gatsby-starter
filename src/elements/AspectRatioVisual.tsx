import {
  AutoVisualNoLottie,
  VisualAsset,
} from "@bond-london/gatsby-graphcms-components";
import { AutoVisualWithLottie } from "@bond-london/gatsby-graphcms-components/dist/lottie";
import classNames from "classnames";
import React, { PropsWithChildren, Suspense } from "react";

export const AspectRatioVisual: React.FC<
  PropsWithChildren<{
    visual?: VisualAsset;
    className?: string;
    aspectRatioClassName: string;
    visualClassName?: string;
  }>
> = ({
  visual,
  className,
  aspectRatioClassName,
  visualClassName,
  children,
}) => {
  if (!visual) {
    return null;
  }

  const hasLottie = !!visual.animation;
  if (hasLottie) {
    return (
      <div className={classNames("relative", className)}>
        <div className={aspectRatioClassName}>
          {children}
          <Suspense fallback={<div>loading ...</div>}>
            <AutoVisualWithLottie
              visual={visual}
              fitParent={true}
              className={visualClassName}
            />
          </Suspense>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames("relative", className)}>
      <div className={aspectRatioClassName}>
        {children}
        <AutoVisualNoLottie
          visual={visual}
          fitParent={true}
          className={visualClassName}
        />
      </div>
    </div>
  );
};
