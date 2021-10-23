import {
  AutoVisual,
  VisualAsset,
} from "@bond-london/gatsby-graphcms-components";
import React from "react";

export interface Individual {
  visual: VisualAsset;
  loop?: boolean;
  name: string;
  position: string;
}

export const Person: React.FC<Individual> = ({
  visual,
  loop,
  name,
  position,
}) => {
  return (
    <div className="relative text-center">
      <div className="aspect-w-1 aspect-h-1">
        <AutoVisual
          visual={visual}
          loop={loop}
          fitParent={true}
          className="bg-neon-green rounded-lg"
        />
      </div>
      <h3 className="h3 pt-s">{name}</h3>
      <p className="p3 pt-xxs">{position}</p>
    </div>
  );
};
