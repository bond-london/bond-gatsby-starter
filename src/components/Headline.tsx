import classNames from "classnames";
import React from "react";
import { RTF } from "../elements";
import { Section } from "../layouts";
import { useFirstVisible } from "../utils";
import { CleanedRTF } from "@bond-london/graphcms-rich-text";

export const Headline: React.FC<{ content: CleanedRTF }> = ({ content }) => {
  const [onVisible, animationMode] = useFirstVisible();
  return (
    <Section componentName="Headline" onVisible={onVisible}>
      <RTF
        content={content}
        className={classNames(
          "col-start-1 col-span-4 md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-6",
          "border-l-6 border-neon-green pl-xs",
          animationMode,
          "animate-enter-from-bottom"
        )}
        fixedParagraphClassName="h1"
      />
    </Section>
  );
};
