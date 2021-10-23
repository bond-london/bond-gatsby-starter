import { useFirstVisibleToUser } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";

export const CoreSection: React.FC<{
  componentName: string;
  className: string;
  contentClassName?: string;
  element?: keyof JSX.IntrinsicElements;
  double?: boolean;
  preChildren?: React.ReactNode;
  postChildren?: React.ReactNode;
  visibleThreshold?: number;
  visibleDelay?: number;
  onVisible?: () => void;
}> = ({
  componentName,
  className,
  contentClassName,
  children,
  element: Element = "section",
  double,
  preChildren,
  postChildren,
  visibleThreshold,
  visibleDelay,
  onVisible,
}) => {
  const [ref] = useFirstVisibleToUser<HTMLDivElement>(
    visibleThreshold,
    visibleDelay,
    onVisible
  );

  return (
    <Element
      data-component={componentName}
      className={classNames(
        "relative container-grid",
        double ? "container-double" : "container-single",
        className
      )}
    >
      {preChildren}
      <div ref={ref} className={classNames(contentClassName)}>
        {children}
      </div>
      {postChildren}
    </Element>
  );
};

export const Section: React.FC<{
  componentName: string;
  className?: string;
  contentClassName?: string;
  topSpacing?: boolean;
  bottomSpacing?: boolean;
  double?: boolean;
  element?: keyof JSX.IntrinsicElements;
  preChildren?: React.ReactNode;
  postChildren?: React.ReactNode;
  onVisible?: () => void;
}> = ({
  componentName,
  className,
  contentClassName,
  topSpacing = true,
  bottomSpacing = true,
  double,
  children,
  element,
  preChildren,
  postChildren,
  onVisible,
}) => {
  const spacingClassName =
    topSpacing && bottomSpacing
      ? "row-start-2 row-span-4"
      : topSpacing
      ? "row-start-2 row-span-5"
      : bottomSpacing
      ? "row-start-1 row-span-5"
      : "row-start-1 row-span-6";
  return (
    <CoreSection
      element={element}
      componentName={componentName}
      className={classNames(className)}
      contentClassName={classNames(
        spacingClassName,
        contentClassName,
        "relative col-start-2 col-span-1 content-grid"
      )}
      double={double}
      preChildren={preChildren}
      postChildren={postChildren}
      onVisible={onVisible}
    >
      {children}
    </CoreSection>
  );
};
