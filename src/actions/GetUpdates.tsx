import classNames from "classnames";
import React from "react";
import { LinkOrButton } from "../components";

export const GetUpdates: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <LinkOrButton
      name="Get updates"
      internal="/"
      isButton={true}
      className={classNames(className)}
      buttonClassName="blue-button"
    />
  );
};
