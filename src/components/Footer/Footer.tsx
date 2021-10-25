import classNames from "classnames";
import React from "react";
import { MenuItem } from "..";
import { Section } from "../../layouts";
import { FooterColumn } from "./FooterColumn";
import { FooterRow } from "./FooterRow";

export interface FooterInformation {
  columns: FooterEntry[][];
  lastRow: FooterEntry[][];
}
export interface FooterEntry {
  type: "Logo" | "Text" | "Links";
  text?: string;
  links?: MenuItem[];
  separator?: string;
}

export const Footer: React.FC<FooterInformation> = ({ columns, lastRow }) => {
  return (
    <Section
      componentName="Footer"
      element="footer"
      className="bg-dark-blue text-washed-blue"
    >
      {columns.map((column, index) => (
        <FooterColumn
          key={index}
          entries={column}
          className={classNames(
            "col-start-1 col-span-4",
            index === 0 ? "lg:col-start-2 lg:col-span-4" : "lg:col-span-3"
          )}
        />
      ))}
      <FooterRow
        entries={lastRow}
        className={classNames(
          "col-span-full lg:pt-s lg:col-start-2 lg:col-span-10"
        )}
      />
    </Section>
  );
};
