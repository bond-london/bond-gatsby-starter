import classNames from "classnames";
import React from "react";

export const CoreSection: React.FC<{
  componentName: string;
  className: string;
  contentClassName?: string;
  element?: keyof JSX.IntrinsicElements;
  double?: boolean;
  coreChildren?: React.ReactNode;
}> = ({
  componentName,
  className,
  contentClassName,
  children,
  element: Element = "section",
  double,
  coreChildren,
}) => {
  return (
    <Element
      data-component={componentName}
      className={classNames(
        "relative container-grid",
        double ? "container-double" : "container-single",
        className
      )}
    >
      <div className={classNames(contentClassName)}>{children}</div>
      {coreChildren}
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
  coreChildren?: React.ReactNode;
}> = ({
  componentName,
  className,
  contentClassName,
  topSpacing = true,
  bottomSpacing = true,
  double,
  children,
  element,
  coreChildren,
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
        "col-start-2 col-span-1 content-grid"
      )}
      double={double}
      coreChildren={coreChildren}
    >
      {children}
    </CoreSection>
  );
};
