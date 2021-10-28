import {
  RTFContent,
  VisualAsset,
} from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { HeroContainer } from "./HeroContainer";
import { LinkOrButton, NamedLinkInformation } from "..";
import { RTF } from "../../elements";
import { useFirstVisible } from "../../utils";

export const Hero: React.FC<{
  title: string;
  message?: RTFContent;
  link?: NamedLinkInformation;
  visual?: VisualAsset;
  loop?: boolean;
}> = ({ title, message, link, visual, loop }) => {
  const [onVisible, animationMode] = useFirstVisible();
  return (
    <HeroContainer
      componentName="Hero"
      onVisible={onVisible}
      visual={visual}
      loop={loop}
    >
      <h1 className={classNames(animationMode, "h1 animate-enter-from-left")}>
        {title}
      </h1>
      <RTF
        fixedParagraphClassName="p2"
        className={classNames(animationMode, "animate-appear")}
        content={message}
      />
      {link && (
        <LinkOrButton
          className={classNames(animationMode, "animate-enter-from-bottom")}
          isButton={true}
          {...link}
        />
      )}
    </HeroContainer>
  );
};
