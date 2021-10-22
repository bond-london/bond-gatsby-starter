import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

export interface Individual {
  image: IGatsbyImageData;
  name: string;
  position: string;
}

export const Person: React.FC<Individual> = ({ image, name, position }) => {
  return (
    <div className="relative text-center">
      <div className="aspect-w-1 aspect-h-1">
        <GatsbyImage
          image={image}
          alt={name}
          imgClassName="bg-washed-blue rounded-lg"
        />
      </div>
      <h3 className="h3 pt-s">{name}</h3>
      <p className="p3 pt-xxs">{position}</p>
    </div>
  );
};
