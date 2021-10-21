import classNames from "classnames";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { LinkOrButton } from ".";
import { Section } from "../layouts";

export interface MenuItem {
  name: string;
  internal?: string;
  external?: string;
  newPage?: boolean;
  isButton?: boolean;
}

export interface Menu {
  items: readonly MenuItem[];
}

export const NavigationBar: React.FC<{
  logoImage?: IGatsbyImageData;
  logoSvg?: string;
  menu: Menu;
}> = ({ logoImage, logoSvg, menu }) => {
  return (
    <Section
      componentName="Navigation Bar"
      element="nav"
      className="bg-white text-black"
      contentClassName="items-center"
      topSpacing={false}
      bottomSpacing={false}
    >
      <LinkOrButton internal="/" className="col-start-2 col-span-2 py-xs">
        {logoImage ? (
          <GatsbyImage
            alt="logo"
            image={logoImage}
            className="h-m"
            objectFit="contain"
          />
        ) : logoSvg ? (
          <img src={logoSvg} alt="logo" className="h-m object-contain" />
        ) : (
          <p>Home</p>
        )}
      </LinkOrButton>
      <ul className="col-start-4 col-span-10 flex space-x-s justify-end items-center text-black">
        {menu.items.map((item) => (
          <li
            key={item.name}
            className={classNames(item.isButton && "button green-button")}
          >
            <LinkOrButton
              internal={item.internal}
              external={item.external}
              asButton={item.isButton}
            >
              {item.name}
            </LinkOrButton>
          </li>
        ))}
      </ul>
    </Section>
  );
};
