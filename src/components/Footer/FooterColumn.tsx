import classNames from "classnames";
import React from "react";
import { FooterEntry } from ".";
import { BondLogoIcon } from "..";
import { FooterMenuEntries } from "./FooterMenuEntries";

export const FooterColumn: React.FC<{
  entries: FooterEntry[];
  className?: string;
}> = ({ entries, className }) => {
  return (
    <div className={classNames(className, "space-y-s")}>
      {entries.map((entry, index) => {
        const defaultClassName = index === 0 ? "h-m" : "";
        switch (entry.type) {
          case "Logo":
            return (
              <BondLogoIcon
                key={index}
                className={classNames(defaultClassName, "w-m")}
              />
            );
          case "Text":
            return (
              <p
                key={index}
                className={classNames(
                  defaultClassName,
                  index === 0 ? "h3" : "p2"
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
  );
};
