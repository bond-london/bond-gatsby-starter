import { RTFContent } from "@bond-london/gatsby-graphcms-components";
import React from "react";
import { RTF } from "../../elements";
import { Section } from "../../layouts";

export const BasicRTF: React.FC<{ content?: RTFContent }> = ({ content }) => {
  return (
    <Section componentName="Basic RTF">
      <RTF content={content} className="col-span-full" />
    </Section>
  );
};
