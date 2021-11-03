import { CoreRTF, RTFProps } from "@bond-london/gatsby-graphcms-components";
import React, { useMemo } from "react";
import { NodeRendererType } from "@graphcms/rich-text-types";
import { CodeOrActionRenderer } from "./CodeOrActionRenderer";
import classNames from "classnames";
import { TableRenderer } from "./TableRenderer";

const renderers: NodeRendererType = {
  code: ({ children }) => (
    <CodeOrActionRenderer>{children}</CodeOrActionRenderer>
  ),
  table: ({ children }) => <TableRenderer>{children}</TableRenderer>,
};

export const RTF: React.FC<RTFProps> = ({
  classNameOverrides,
  className,
  ...props
}) => {
  const realClassNameOverrides = useMemo(
    () => ({
      // table: classNames(
      //   "block overflow-x-auto whitespace-nowrap md:whitespace-normal",
      //   "border-spacing-0",
      //   "border-separate",
      //   "table-auto",
      //   "col-start-1 col-span-4",
      //   "md:col-start-1 md:col-span-8",
      //   "lg:col-start-2 lg:col-span-10"
      // ),
      // thead: classNames("bg-light-blue"),
      // tr: classNames("even:bg-off-white"),
      // td: classNames(
      //   "py-xxs lg:py-xs",
      //   "not-first:pl-mobile-gap not-first:md:pl-tablet-gap not-first:lg:pl-desktop-gap",
      //   "first:rounded-l-md last:rounded-r-md first:pl-xxs last:pr-xxs lg:first:pl-desktop-1-cols lg:last:pr-desktop-1-cols"
      // ),
      ol: classNames("list-decimal list-inside"),
      ul: classNames("list-disc list-inside"),
      ...classNameOverrides,
    }),
    [classNameOverrides]
  );
  return (
    <CoreRTF
      {...props}
      renderers={renderers}
      classNameOverrides={realClassNameOverrides}
      className={classNames(className, "space-y-xs")}
    />
  );
};
