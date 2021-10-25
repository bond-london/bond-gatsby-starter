import classNames from "classnames";
import { Link } from "gatsby";
import React from "react";
import { Icon, IconType } from ".";

export interface LinkInformation {
  icon?: IconType;
  internal?: string;
  external?: string;
  newPage?: boolean;
}

export const LinkOrButton: React.FC<
  LinkInformation & {
    className?: string;
    isButton?: boolean;
    name?: string;
    action?: () => void;
  }
> = ({
  className,
  internal,
  external,
  newPage,
  action,
  isButton,
  name,
  children,
  icon,
}) => {
  const buttonClassName = classNames(
    isButton && "button green-button",
    className
  );

  const inside = (
    <>
      {icon && <Icon type={icon} className="mr-xs h-xs" />}
      {name || children}
    </>
  );

  if (internal) {
    return (
      <Link className={buttonClassName} to={internal}>
        {inside}
      </Link>
    );
  }

  if (external) {
    if (newPage) {
      return (
        <a
          href={external}
          className={classNames(buttonClassName, "inline-block")}
          target="_blank"
          rel="noreferrer"
        >
          {inside}
        </a>
      );
    }
    return (
      <a className={buttonClassName} href={external}>
        {inside}
      </a>
    );
  }

  if (action) {
    return (
      <button onClick={action} className={buttonClassName}>
        {inside}
      </button>
    );
  }

  return <p className={classNames(buttonClassName, "inline-flex")}>{inside}</p>;
};
