/* eslint-disable react/display-name */
import React, { useMemo } from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { RichTextContent } from "@graphcms/rich-text-types";
import classNames from "classnames";

export type RTFContent = RichTextContent;
export type ClassNameOverrides = { [key: string]: string };

interface Props {
  content?: RTFContent;
  className?: string;
  classNameOverrides?: ClassNameOverrides;
}

function getClassName(
  classNameOverrides: ClassNameOverrides | undefined,
  className: string,
  defaultValue: string
) {
  const value = classNameOverrides && classNameOverrides[className];
  return value || defaultValue;
}

export const RTF: React.FC<Props> = ({
  className,
  content,
  classNameOverrides,
}) => {
  const gcn = useMemo(
    () => (name: string, defaultValue?: string) =>
      getClassName(classNameOverrides, name, defaultValue || name),
    [classNameOverrides]
  );
  if (!content) {
    return null;
  }

  return (
    <div className={classNames(className, "space-y-20px")}>
      <RichText
        content={content}
        renderers={{
          h1: ({ children }) => <h2 className={gcn("h1")}>{children}</h2>,
          h2: ({ children }) => <h2 className={gcn("h2")}>{children}</h2>,
          h3: ({ children }) => <h3 className={gcn("h3")}>{children}</h3>,
          h4: ({ children }) => <h4 className={gcn("h4")}>{children}</h4>,
          p: ({ children }) => <p className={gcn("p", "p3")}>{children}</p>,
        }}
      />
    </div>
  );
};
