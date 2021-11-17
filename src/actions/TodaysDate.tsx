import React from "react";
import { Icon } from "../components";

export const TodaysDate: React.FC = () => {
  return (
    <div className="grid grid-cols-icon-button gap-x-xs">
      <Icon type="Calendar" className="text-blue mt-icon" />
      <p>Today</p>
    </div>
  );
};
