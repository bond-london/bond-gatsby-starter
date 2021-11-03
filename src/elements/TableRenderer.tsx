import React from "react";
import {
  RichTextProps,
  RichTextContent,
  ElementNode,
  isElement,
} from "@graphcms/rich-text-types";
import classNames from "classnames";
import { RichText } from "@graphcms/rich-text-react-renderer";

type TableCell = ElementNode;
type TableRow = TableCell[];

interface TableInformation {
  header: TableRow;
  body: TableRow[];
}

function getTableRow(node: ElementNode): TableRow | undefined {
  switch (node.type) {
    case "table_row":
      return node.children as TableRow;
    default:
      throw new Error(`Cannot find table row: ${node.type}`);
  }
}

function getTable(node: ElementNode[]): TableInformation {
  const rows = node
    .filter((n) => {
      switch (n.type) {
        case "table_head":
        case "table_body":
          return true;
        default:
          return false;
      }
    })
    .flatMap((e) => e.children.filter(isElement).map(getTableRow))
    .filter((e) => e);

  const [header, ...body] = rows as TableRow[];
  return { header, body };
}

function buildTableInformation(content: RichTextContent) {
  if (Array.isArray(content)) {
    return getTable(content);
  }
  return getTable(content.children);
}

export const TableRenderer: React.FC = ({ children }) => {
  const element = children as React.ReactElement<RichTextProps>;
  const { props } = element;
  const { content, renderers, references } = props;
  const table = buildTableInformation(content);
  console.log(table);

  const tdClassName = classNames(
    "table-row lg:table-cell",
    "lg:py-xs",
    "lg:not-first:pl-desktop-gap",
    "lg:first:rounded-l-md lg:last:rounded-r-md lg:first:pl-desktop-1-cols lg:last:pr-desktop-1-cols"
  );

  return (
    <table
      className={classNames(
        "border-spacing-0",
        "border-separate",
        "table-auto",
        "col-start-1 col-span-4",
        "md:col-start-1 md:col-span-8",
        "lg:col-start-2 lg:col-span-10"
      )}
    >
      <thead className="hidden md:table-header-group bg-light-blue">
        <tr>
          {table.header.map((cell, index) => (
            <td key={index} className={tdClassName}>
              <RichText
                content={cell as RichTextContent}
                renderers={renderers}
                references={references}
              />
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.body.map((row, index) => (
          <tr
            key={index}
            className="table not-first:pt-s lg:pt-0 lg:table-row lg:even:bg-off-white"
          >
            {row.map((cell, index) => (
              <td key={index} className={tdClassName}>
                <div className="lg:hidden inline-block pr-mobile-gap">
                  <RichText
                    content={table.header[index] as RichTextContent}
                    renderers={renderers}
                    references={references}
                  />
                </div>
                <RichText
                  content={[cell]}
                  renderers={renderers}
                  references={references}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
