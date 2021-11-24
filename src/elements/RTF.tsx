import React, { useMemo } from "react";
import { CodeOrActionRenderer } from "./CodeOrActionRenderer";
import classNames from "classnames";
import { TableRenderer } from "./TableRenderer";
import {
  ClassNameOverrides,
  NodeRenderer,
  NodeRendererProps,
  RichText,
  RichTextProps,
} from "@bond-london/graphcms-rich-text";

const renderers: Partial<NodeRenderer> = {
  code: (props) => (
    <CodeOrActionRenderer {...(props as unknown as NodeRendererProps)} />
  ),
  table: (props) => (
    <TableRenderer {...(props as unknown as NodeRendererProps)} />
  ),
};

const headingClasses: (keyof ClassNameOverrides)[] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
];

export const RTF: React.FC<
  RichTextProps & { className?: string; fixedParagraphClassName?: string }
> = ({ classNameOverrides, className, fixedParagraphClassName, ...props }) => {
  const realClassNameOverrides = useMemo(() => {
    const result: ClassNameOverrides = {
      ol: classNames("list-decimal list-inside"),
      ul: classNames("list-disc list-inside"),
      ...classNameOverrides,
    };
    if (fixedParagraphClassName) {
      headingClasses.forEach((h) => {
        result[h] = fixedParagraphClassName;
      });
    }
    return result;
  }, [classNameOverrides, fixedParagraphClassName]);

  return (
    <div className={classNames(className, "space-y-xs")}>
      <RichText
        {...props}
        renderers={renderers}
        classNameOverrides={realClassNameOverrides}
      />
    </div>
  );
};
