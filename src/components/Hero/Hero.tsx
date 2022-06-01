import { VisualAsset } from "@bond-london/gatsby-graphcms-components";
import classNames from "classnames";
import React from "react";
import { HeroContainer } from "./HeroContainer";
import { LinkOrButton, NamedLinkInformation } from "..";
import { RTF } from "../../elements";
import { useFirstVisible } from "../../utils";
import { CleanedRTF } from "@bond-london/graphcms-rich-text";

export const Hero: React.FC<{
  title?: string;
  content?: CleanedRTF;
  links?: NamedLinkInformation[];
  visual?: VisualAsset;
}> = ({ title, content, links, visual }) => {
  const [onVisible, animationMode] = useFirstVisible();
  return (
    <HeroContainer
      componentName="Hero"
      onVisible={onVisible}
      visual={visual}
      containerClassName="space-y-xs lg:space-y-s pb-xs"
    >
      {title && (
        <h1
          className={classNames(animationMode, "h1 animate-enter-from-bottom")}
        >
          {title}
        </h1>
      )}
      {content && (
        <RTF
          classNameOverrides={{
            h1: "p1 my-xs",
            h2: "p2 my-xs",
            h3: "p3 my-xs",
            h4: "p4 my-xs",
            h5: "p4 my-xs",
            h6: "p4 my-xs",
            p: "p2",
          }}
          className={classNames(
            animationMode,
            "animate-enter-from-bottom animation-delay-100"
          )}
          content={content}
        />
      )}
      {links && (
        <div
          className={classNames(
            animationMode,
            "animation-delay-200",
            "animate-appear",
            "flex space-x-xs"
          )}
        >
          {links.map((link, index) => (
            <LinkOrButton key={index} isButton={true} {...link} />
          ))}
        </div>
      )}
    </HeroContainer>
  );
};
