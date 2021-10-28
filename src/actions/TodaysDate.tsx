import React from "react";
import { Icon } from "../components";

export const TodaysDate: React.FC = () => {
  return (
    <div className="flex">
      <Icon type="Calendar" className="text-blue" />
      <p className="pl-xs">Today</p>
    </div>
  );
};
