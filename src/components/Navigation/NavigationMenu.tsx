import classNames from "classnames";
import React from "react";
import { MenuItem } from ".";
import { LinkOrButton } from "..";

export const NavigationMenu: React.FC<{
  items: readonly MenuItem[];
  isOpen: boolean;
}> = ({ items, isOpen }) => {
  return (
    <ul
      className={classNames(
        isOpen ? "flex" : "hidden",
        "col-start-1 col-span-4 flex-col space-y-s",
        "row-start-3 row-span-1 self-start",
        "lg:flex lg:col-start-4 lg:col-span-10 lg:flex-row lg:space-y-0 lg:space-x-s lg:justify-end lg:items-center",
        "lg:row-start-1 lg:row-span-1 lg:self-center"
      )}
    >
      {items.map((item) => (
        <li key={item.name}>
          <LinkOrButton
            internal={item.internal}
            external={item.external}
            isButton={item.isButton}
          >
            {item.name}
          </LinkOrButton>
        </li>
      ))}
    </ul>
  );
};
