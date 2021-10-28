import React from "react";
import { GetInformation } from "./GetInformation";
import { GetUpdates } from "./GetUpdates";
import { TodaysDate } from "./TodaysDate";

const lookupTable: { [key: string]: React.FC<{ className?: string }> } = {
  TODAYS_DATE: TodaysDate,
  ACTION_GET_INFORMATION: GetInformation,
  ACTION_GET_UPDATES: GetUpdates,
};

export const Actions: React.FC<{ name: string; className?: string }> = ({
  name,
  className,
}) => {
  const Action = lookupTable[name];
  if (Action) {
    return <Action className={className} />;
  }
  return <pre>Action {name} not found</pre>;
};
