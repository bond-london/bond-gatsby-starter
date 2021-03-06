import classNames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import { MenuItem } from "..";
import { Section } from "../../layouts";
import { FooterColumn } from "./FooterColumn";
import { FooterRow } from "./FooterRow";

export interface FooterInformation {
  columns: FooterEntry[][];
  lastRow: FooterEntry[][];
}

export type FooterEntrySize = "Small" | "Medium" | "Large";
export function sizeToTextClassName(size: FooterEntrySize) {
  switch (size) {
    case "Small":
      return "p4";
    case "Medium":
      return "p2";
    case "Large":
      return "p1";
  }
}

export interface FooterEntry {
  type: "Logo" | "Text" | "Links";
  size: FooterEntrySize;
  text?: string;
  links?: MenuItem[];
  separator?: string;
}

function formatEntry(entry: FooterEntry, buildYear: string, buildTime: string) {
  if (entry.text) {
    const text = entry.text
      .replaceAll("##BUILD_TIME##", buildTime)
      .replaceAll("##BUILD_YEAR##", buildYear);
    return { ...entry, text };
  }
  return entry;
}

function formatInformation(
  information: FooterInformation,
  buildYear: string,
  buildTime: string
) {
  return {
    columns: information.columns.map((c) =>
      c.map((e) => formatEntry(e, buildYear, buildTime))
    ),
    lastRow: information.lastRow.map((c) =>
      c.map((e) => formatEntry(e, buildYear, buildTime))
    ),
  };
}

export const Footer: React.FC<FooterInformation> = (information) => {
  const {
    siteBuildMetadata: { buildYear, buildTime },
  } = useStaticQuery<{
    siteBuildMetadata: { buildTime: string; buildYear: string };
  }>(graphql`
    query Footer {
      siteBuildMetadata {
        buildYear: buildTime(formatString: "YYYY")
        buildTime(formatString: "dddd, MMMM d YYYY, h:mm:ss A")
      }
    }
  `);
  const { columns, lastRow } = useMemo(
    () => formatInformation(information, buildYear, buildTime),
    [information, buildYear, buildTime]
  );

  return (
    <Section
      componentName="Footer"
      element="footer"
      className="bg-dark-blue text-washed-blue bond-row-1-m"
      contentClassName="space-y-s lg:space-y-0"
    >
      {columns.map((column, index) => (
        <FooterColumn
          key={index}
          entries={column}
          className={classNames(
            "col-start-1 col-span-4",
            "md:col-span-4",
            index === 0
              ? "md:col-start-1 lg:col-start-2 lg:col-span-4"
              : "md:col-start-auto lg:col-start-auto lg:col-span-3"
          )}
        />
      ))}
      <FooterRow
        entries={lastRow}
        className={classNames(
          "col-span-full md:pt-s lg:col-start-2 lg:col-span-10"
        )}
      />
    </Section>
  );
};
