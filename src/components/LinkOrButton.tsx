import classNames from "classnames";
import { Link } from "gatsby";
import React from "react";

export interface LinkInformation {
  internal?: string;
  external?: string;
  newPage?: boolean;
}

export const LinkOrButton: React.FC<
  LinkInformation & {
    className?: string;
    asButton?: boolean;
    name?: string;
    action?: () => void;
  }
> = ({
  className,
  internal,
  external,
  newPage,
  action,
  asButton,
  name,
  children,
}) => {
  const buttonClassName = classNames(
    asButton && "button green-button",
    className
  );

  if (internal) {
    return (
      <Link className={buttonClassName} to={internal}>
        {name || children}
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
          {name || children}
        </a>
      );
    }
    return (
      <a className={buttonClassName} href={external}>
        {name || children}
      </a>
    );
  }

  if (action) {
    return (
      <button onClick={action} className={buttonClassName}>
        {name || children}
      </button>
    );
  }

  return (
    <p className={classNames(buttonClassName, "inline-flex outline-error")}>
      {name || children}
    </p>
  );
};
