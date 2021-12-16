import classNames from "classnames";
import React, { CSSProperties } from "react";

export const SmallSquareElement: React.FC<{
  className?: string;
  style?: CSSProperties;
}> = ({ className, children, style }) => {
  return (
    <div
      className={classNames(
        className,
        "w-xs h-xs bg-neon-green text-dark-blue border-square",
        "flex justify-center items-center"
      )}
      style={style}
    >
      {children}
    </div>
  );
};
