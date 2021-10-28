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
    buttonClassName?: string;
    iconClassName?: string;
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
  iconClassName,
  buttonClassName,
}) => {
  const realButtonClassName = classNames(
    isButton && "button",
    isButton && (buttonClassName || "green-button"),
    className
  );

  const inside = (
    <>
      {icon && (
        <Icon type={icon} className={classNames("mr-xs", iconClassName)} />
      )}
      {name || children}
    </>
  );

  if (internal) {
    return (
      <Link className={realButtonClassName} to={internal}>
        {inside}
      </Link>
    );
  }

  if (external) {
    if (newPage) {
      return (
        <a
          href={external}
          className={classNames(realButtonClassName, "inline-block")}
          target="_blank"
          rel="noreferrer"
        >
          {inside}
        </a>
      );
    }
    return (
      <a className={realButtonClassName} href={external}>
        {inside}
      </a>
    );
  }

  if (action) {
    return (
      <button onClick={action} className={realButtonClassName}>
        {inside}
      </button>
    );
  }

  return (
    <p className={classNames(realButtonClassName, "inline-flex")}>{inside}</p>
  );
};
