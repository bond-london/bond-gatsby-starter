import classNames from "classnames";
import React from "react";
import { FooterEntry, sizeToTextClassName } from ".";
import { FooterMenuEntries } from "./FooterMenuEntries";

export const FooterRow: React.FC<{
  entries: FooterEntry[][];
  className?: string;
}> = ({ className, entries }) => {
  return (
    <div
      className={classNames(
        className,
        "flex gap-y-xxs",
        "flex-col",
        "md:flex-row md:justify-between md:items-center"
      )}
    >
      {entries.map((entryArray, index) => (
        <div key={index} className="">
          {entryArray.map((entry, index) => {
            switch (entry.type) {
              case "Text":
                return (
                  <p
                    key={index}
                    className={classNames(
                      sizeToTextClassName(entry.size),
                      "inline-block"
                    )}
                  >
                    {entry.text}
                  </p>
                );

              case "Links": {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const links = entry.links!;
                const hasIcon = !!links.find((l) => !!l.icon);
                return (
                  <FooterMenuEntries
                    size={entry.size}
                    separator={entry.separator}
                    key={index}
                    links={links}
                    withIcons={hasIcon}
                  />
                );
              }
            }
          })}
        </div>
      ))}
    </div>
  );
  return <h3 className={className}>Footer row</h3>;
};
