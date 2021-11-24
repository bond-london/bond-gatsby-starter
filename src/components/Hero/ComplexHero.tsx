import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { HeroContainer } from "./HeroContainer";
import { LinkOrButton, NamedLinkInformation } from "..";
import { RTF } from "../../elements";
import { useFirstVisible } from "../../utils";
import { RTFContent } from "@bond-london/graphcms-rich-text";

export const ComplexHero: React.FC<{
  title: string;
  message?: RTFContent;
  link?: NamedLinkInformation;
  visual?: VisualAsset;
  loop?: boolean;
}> = ({ title, message, link, visual, loop }) => {
  const [onVisible, animationMode] = useFirstVisible();
  return (
    <HeroContainer
      componentName="Complex Hero"
      onVisible={onVisible}
      visual={visual}
      loop={loop}
      containerClassName="space-y-xs lg:space-y-xs pb:xs"
    >
      <h1 className={classNames(animationMode, "h1 animate-enter-from-left")}>
        {title}
      </h1>
      {message && (
        <RTF
          classNameOverrides={{
            h1: "p1",
            h2: "p2",
            h3: "p3",
            h4: "p4",
            h5: "p4",
            h6: "p4",
            p: "p2",
          }}
          className={classNames(animationMode, "animate-appear", "space-y-xs")}
          content={message}
        />
      )}
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
