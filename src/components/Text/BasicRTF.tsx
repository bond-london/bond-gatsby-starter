import { RTFContent } from "@bond-london/graphcms-rich-text";
import React from "react";
import { RTF } from "../../elements";
import { Section } from "../../layouts";

export const BasicRTF: React.FC<{ content?: RTFContent }> = ({ content }) => {
  if (!content) {
    return null;
  }
  return (
    <Section componentName="Basic RTF">
      <RTF content={content} className="col-span-full" />
    </Section>
  );
};
