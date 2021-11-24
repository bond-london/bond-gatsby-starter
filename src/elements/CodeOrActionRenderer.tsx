import { NodeRendererProps } from "@bond-london/graphcms-rich-text";
import React from "react";
import { Actions } from "../actions";

export const CodeOrActionRenderer: React.FC<NodeRendererProps> = (props) => {
  console.log("code or action renderer", props);
  const { children } = props;
  if (children) {
    const childrenString = children?.toString();
    if (
      childrenString.length > 4 &&
      childrenString.startsWith("##") &&
      childrenString.endsWith("##")
    ) {
      const actionName = childrenString.substring(2, childrenString.length - 2);
      return <Actions name={actionName} />;
    }
  }
  return <code>{children}</code>;
};
