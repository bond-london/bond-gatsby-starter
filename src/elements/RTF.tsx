import { CoreRTF, RTFProps } from "@bond-london/gatsby-graphcms-components";
import React, { useMemo } from "react";

export const RTF: React.FC<RTFProps> = (props) => {
  const { classNameOverrides } = props;
  const realClassNameOverrides = useMemo(
    () => ({ p: "p3", ...classNameOverrides }),
    [classNameOverrides]
  );
  return <CoreRTF {...props} classNameOverrides={realClassNameOverrides} />;
};
