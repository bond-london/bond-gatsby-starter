import React, { useMemo } from "react";
import classNames from "classnames";
import {
  buildTableInformationFromChildren,
  NodeRenderer,
  NodeRendererProps,
  RenderElements,
  TableInformation,
} from "@bond-london/graphcms-rich-text";
import { RTFContext } from "./ClassRenderer";

export const RenderTable: React.FC<{
  table: TableInformation;
  renderers: NodeRenderer;
  headingClassName?: string;
  rowClassName?: string;
  className?: string;
}> = ({
  table,
  renderers,
  className,
  headingClassName = "bg-neon-green",
  rowClassName = "even:bg-light-blue",
}) => {
  const tableColumns = useMemo(() => {
    const tableColumns = table.body.reduce(
      (highest, row) => Math.max(highest, row.length),
      0
    );
    return tableColumns;
  }, [table]);

  const tdClassName = classNames(
    "flex lg:table-cell",
    "not-last:mb-xxxs not-last:lg:mb-0",
    "lg:py-xs",
    "lg:not-first:pl-desktop-gap",
    "lg:first:rounded-l-normal lg:last:rounded-r-normal lg:first:pl-desktop-1-gap-cols lg:last:pr-desktop-1-gap-cols"
  );

  return (
    <table
      className={classNames(
        "border-spacing-0",
        "border-separate",
        "table-auto",
        "col-start-1 col-span-4",
        "md:col-start-1 md:col-span-8",
        "lg:col-start-2 lg:col-span-10",
        "w-full",
        className
      )}
    >
      <thead
        className={classNames(
          "hidden md:table-header-group font-semibold",
          headingClassName
        )}
      >
        <tr>
          {table.header.map((cell, index) => {
            return (
              <td
                key={index}
                className={tdClassName}
                colSpan={
                  table.header.length === tableColumns
                    ? undefined
                    : index < table.header.length - 1
                    ? undefined
                    : tableColumns - index
                }
              >
                <RenderElements
                  index={index}
                  contents={cell}
                  renderers={renderers}
                />
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {table.body.map((row, index) => (
          <tr
            key={index}
            className={classNames(
              "table p-xxs w-full lg:table-row not-first:mt-xs lg:mt-0",
              "rounded-normal lg:rounded-0",
              rowClassName
            )}
          >
            {row.map((cell, index) => {
              const header = table.header[index];
              return (
                <td key={index} className={tdClassName}>
                  <div className="lg:hidden inline-block w-1/3 pr-mobile-gap p4">
                    {header && (
                      <RenderElements
                        index={index}
                        contents={table.header[index]}
                        renderers={renderers}
                      />
                    )}
                  </div>
                  <div className="w-2/3 inline-block lg:w-auto">
                    <RenderElements
                      index={index}
                      contents={cell}
                      renderers={renderers}
                    />
                  </div>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const TableRenderer: React.FC<NodeRendererProps> = (mainProps) => {
  const { children, renderers, context } = mainProps;
  const table = useMemo(() => {
    const table = buildTableInformationFromChildren(children);
    return table;
  }, [children]);

  const isLightBlueHeading =
    (context as RTFContext)?.type === "light-blue-heading";

  const headingClassName = isLightBlueHeading ? "bg-light-blue" : undefined;

  const rowClassName = isLightBlueHeading ? "even:bg-off-white" : undefined;
  const className = isLightBlueHeading ? "not-last:mb-l" : undefined;

  return (
    <RenderTable
      table={table}
      renderers={renderers}
      headingClassName={headingClassName}
      rowClassName={rowClassName}
      className={className}
    />
  );
};
