import classNames from "classnames";
import React from "react";

export const CoreSection: React.FC<{
  componentName: string;
  className: string;
  element?: keyof JSX.IntrinsicElements;
  pageGrid?: boolean;
}> = ({
  componentName,
  className,
  children,
  element: Element = "section",
  pageGrid = true,
}) => {
  return (
    <Element
      data-component={componentName}
      className={classNames("relative", className)}
    >
      <div className={classNames(pageGrid ? "page-grid" : "content-grid")}>
        {children}
      </div>
    </Element>
  );
};

export const Section: React.FC<{
  componentName: string;
  className?: string;
  topSpacing?: boolean;
  bottomSpacing?: boolean;
  pageGrid?: boolean;
  element?: keyof JSX.IntrinsicElements;
}> = ({
  componentName,
  className,
  topSpacing = true,
  bottomSpacing = true,
  pageGrid,
  children,
  element,
}) => {
  const spacingClassName =
    topSpacing && bottomSpacing
      ? "py-section"
      : topSpacing
      ? "pt-section"
      : bottomSpacing
      ? "pb-section"
      : "";
  return (
    <CoreSection
      element={element}
      componentName={componentName}
      className={classNames(spacingClassName, className)}
      pageGrid={pageGrid}
    >
      {children}
    </CoreSection>
  );
};
