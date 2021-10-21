import classNames from "classnames";
import React from "react";

export const CoreSection: React.FC<{
  componentName: string;
  className: string;
  contentClassName?: string;
  element?: keyof JSX.IntrinsicElements;
  pageGrid?: boolean;
}> = ({
  componentName,
  className,
  contentClassName,
  children,
  element: Element = "section",
  pageGrid = true,
}) => {
  return (
    <Element
      data-component={componentName}
      className={classNames("relative", className)}
    >
      <div
        className={classNames(
          pageGrid ? "page-grid" : "content-grid",
          contentClassName
        )}
      >
        {children}
      </div>
    </Element>
  );
};

export const Section: React.FC<{
  componentName: string;
  className?: string;
  contentClassName?: string;
  topSpacing?: boolean;
  bottomSpacing?: boolean;
  pageGrid?: boolean;
  element?: keyof JSX.IntrinsicElements;
}> = ({
  componentName,
  className,
  contentClassName,
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
      contentClassName={contentClassName}
      pageGrid={pageGrid}
    >
      {children}
    </CoreSection>
  );
};
