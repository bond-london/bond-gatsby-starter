import {
  ElementsRendererProps,
  RenderElements,
} from "@bond-london/graphcms-rich-text";
import classNames from "classnames";
import React from "react";

export const RoundedListRenderer: React.FC<ElementsRendererProps> = (props) => {
  return (
    <ol
      className={classNames(
        "col-start-1 col-span-4 mt-s",
        "md:col-start-5 md:col-span-3 md:mt-0",
        "lg:col-start-8 lg:col-span-5",
        "space-y-xs",
        "flex flex-col justify-between"
      )}
    >
      <RenderElements {...props} />
    </ol>
  );
};

export const RoundedListElementRenderer: React.FC<ElementsRendererProps> = (
  props
) => {
  const index = props.index;
  return (
    <li className={classNames("px-s py-xs bg-off-white rounded-normal flex")}>
      <div className="mt-icon flex-shrink-0 h-xs w-xs rounded-button bg-neon-green flex justify-center items-center">
        <p className="p3 tabular-nums">{index + 1}</p>
      </div>
      <div className="ml-xs h3">
        <RenderElements {...props} />
      </div>
    </li>
  );
};
