import { CoreRTF, RTFProps } from "@bond-london/gatsby-graphcms-components";
import React, { useMemo } from "react";
import { NodeRendererType } from "@graphcms/rich-text-types";
import { CodeOrActionRenderer } from "./CodeOrActionRenderer";

const renderers: NodeRendererType = {
  code: ({ children }) => (
    <CodeOrActionRenderer>{children}</CodeOrActionRenderer>
  ),
};

export const RTF: React.FC<RTFProps> = (props) => {
  const { classNameOverrides } = props;
  const realClassNameOverrides = useMemo(
    () => ({ p: "p3", ...classNameOverrides }),
    [classNameOverrides]
  );
  return (
    <CoreRTF
      {...props}
      renderers={renderers}
      classNameOverrides={realClassNameOverrides}
    />
  );
};
