import classNames from "classnames";
import { Link } from "gatsby";
import React from "react";

export const LinkOrButton: React.FC<{
  className?: string;
  internal?: string;
  external?: string;
  newPage?: boolean;
  asButton?: boolean;
  action?: () => void;
}> = ({
  className,
  internal,
  external,
  newPage,
  action,
  asButton,
  children,
}) => {
  const buttonClassName = classNames(
    asButton && "button green-button",
    className
  );

  if (internal) {
    return (
      <Link className={buttonClassName} to={internal}>
        {children}
      </Link>
    );
  }

  if (external) {
    if (newPage) {
      return (
        <a
          href={external}
          className={buttonClassName}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <a className={buttonClassName} href={external}>
        {children}
      </a>
    );
  }

  if (action) {
    return (
      <button onClick={action} className={buttonClassName}>
        {children}
      </button>
    );
  }

  return (
    <div className={classNames(buttonClassName, "outline-error")}>
      {children}
    </div>
  );
};
