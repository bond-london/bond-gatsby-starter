import classNames from "classnames";
import React, { useCallback, useContext, useState } from "react";
import { BondLogoIcon, Icon, LinkInformation, LinkOrButton } from "..";
import { LayoutContext } from "../../layouts";
import { NavigationMenu } from "./NavigationMenu";

export interface NamedLinkInformation extends LinkInformation {
  name?: string;
}

export interface MenuItem extends NamedLinkInformation {
  isButton?: boolean;
}

export interface Menu {
  items: readonly MenuItem[];
}

export const NavigationBar: React.FC<{
  menu: Menu;
  className?: string;
}> = ({ menu, className }) => {
  const { setBodyLocked } = useContext(LayoutContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    const nextValue = !isOpen;
    setBodyLocked(nextValue);
    setIsOpen(nextValue);
  }, [isOpen, setBodyLocked]);

  return (
    <nav
      data-component="Navigation Bar"
      className={classNames(
        className,

        "bg-dark-blue text-washed-blue",
        "transition-all transition-duration-1000",
        "container-grid",
        isOpen
          ? "fixed max-h-navOpen top-0 left-0 h-screen z-50"
          : "relative max-h-navClosed h-nav"
      )}
    >
      <div
        className={classNames(
          "col-start-2 col-span-1",
          "content-grid items-center",
          isOpen ? "grid-rows-nav-open" : "grid-rows-nav-closed"
        )}
      >
        <LinkOrButton internal="/" className="col-start-1 col-span-2 py-xs">
          <BondLogoIcon className="h-m" />
        </LinkOrButton>
        <button
          aria-label="Toggle menu"
          className="col-start-4 col-span-1 md:col-start-8 justify-end lg:hidden"
          onClick={toggleMenu}
        >
          <Icon type="Hamburger" />
        </button>
        <NavigationMenu items={menu.items} isOpen={isOpen} />
      </div>
    </nav>
  );
};
