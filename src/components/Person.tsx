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
    <div className="grid grid-cols-1 grid-rows-2 relative text-center">
      <div className="row-start-1 row-span-2">
        <div className="aspect-w-1 aspect-h-1">
          <AutoVisual
            visual={visual}
            loop={loop}
            fitParent={true}
            className="bg-neon-green rounded-lg transform-gpu"
          />
        </div>
      </div>
      <div className="row-start-3 row-span-1">
        <h3 className="h3 pt-s">{name}</h3>
        <p className="p3 pt-xxs">{position}</p>
      </div>
    </div>
  );
};
