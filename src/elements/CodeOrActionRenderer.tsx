import React from "react";
import { Actions } from "../actions";

export const CodeOrActionRenderer: React.FC = ({ children }) => {
  if (children) {
    const childrenString = children?.toString();
    console.log("string", childrenString);
    if (
      childrenString.length > 4 &&
      childrenString.startsWith("##") &&
      childrenString.endsWith("##")
    ) {
      const actionName = childrenString.substring(2, childrenString.length - 2);
      console.log({ actionName });
      return <Actions name={actionName} />;
    }
  }
  return <code>{children}</code>;
};