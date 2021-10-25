import classNames from "classnames";
import React from "react";
import { MenuItem } from "..";
import { FooterMenuEntry } from "./FooterMenuEntry";

export const FooterMenuEntries: React.FC<{
  links: MenuItem[];
  withIcons: boolean;
  className?: string;
  separator?: string;
}> = ({ links, withIcons, className, separator }) => {
  return (
    <div className={classNames(className, "flex h-s")}>
      {links.map((link, index) => (
        <>
          {separator && index > 0 && <span>&nbsp;{separator}&nbsp;</span>}
          <FooterMenuEntry key={link.name} link={link} withIcon={withIcons} />
        </>
      ))}
    </div>
  );
};
