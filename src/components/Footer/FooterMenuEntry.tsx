import classNames from "classnames";
import React from "react";
import { sizeToHeightClassName } from ".";
import { FooterEntrySize, LinkOrButton, MenuItem } from "..";

export const FooterMenuEntry: React.FC<{
  link: MenuItem;
  withIcon?: boolean;
  size: FooterEntrySize;
}> = ({
  link: { isButton, name, icon, internal, external, newPage },
  withIcon,
  size,
}) => {
  return (
    <LinkOrButton
      iconClassName={classNames(sizeToHeightClassName(size), "text-blue")}
      icon={withIcon ? icon || "Blank" : undefined}
      name={name}
      internal={internal}
      external={external}
      newPage={newPage}
      isButton={isButton}
    />
  );
};
