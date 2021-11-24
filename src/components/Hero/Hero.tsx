import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { HeroContainer } from "./HeroContainer";
import { LinkOrButton, NamedLinkInformation } from "..";
import { RTF } from "../../elements";
import { useFirstVisible } from "../../utils";
import { RTFContent } from "@bond-london/graphcms-rich-text";

export const Hero: React.FC<{
  title: string;
  message?: RTFContent;
  links?: NamedLinkInformation[];
  visual?: VisualAsset;
  loop?: boolean;
}> = ({ title, message, links, visual, loop }) => {
  const [onVisible, animationMode] = useFirstVisible();
  return (
    <HeroContainer
      componentName="Hero"
      onVisible={onVisible}
      visual={visual}
      loop={loop}
      containerClassName="space-y-xs lg:space-y-s pb-xs"
    >
      <h1 className={classNames(animationMode, "h1 animate-enter-from-left")}>
        {title}
      </h1>
      {message && (
        <RTF
          fixedParagraphClassName="p2"
          className={classNames(animationMode, "animate-appear")}
          content={message}
        />
      )}
      {links &&
        links.map((link) => (
          <LinkOrButton
            key={link.name}
            className={classNames(animationMode, "animate-enter-from-bottom")}
            isButton={true}
            {...link}
          />
        ))}
    </HeroContainer>
  );
};
