import React from "react";
import { ArrowBackIcon, ArrowForwardIcon, Individual, Person } from ".";
import { useMediaQuery } from "react-responsive";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Section } from "../layouts";
import classNames from "classnames";

export const Team: React.FC<{ team: Individual[] }> = ({ team }) => {
  const isSm = useMediaQuery({ query: "(min-width: 640px)" });
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <Section
      componentName="Team"
      className="bg-light-blue"
      preChildren={
        <div className="col-start-1 col-span-3 row-start-4 row-span-3 bg-dark-blue" />
      }
    >
      <CarouselProvider
        className={classNames("col-span-full content-grid")}
        totalSlides={team.length}
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        isIntrinsicHeight={true}
        visibleSlides={isLg ? 4 : isMd ? 3 : isSm ? 2 : 1}
      >
        <ButtonBack className={classNames("col-start-1", "lg:col-start-1")}>
          <ArrowBackIcon className="stroke-current bg-neon-green text-dark-blue h-xs rounded-md" />
        </ButtonBack>
        <Slider
          className={classNames(
            "col-start-1 col-span-4",
            "lg:col-start-2 lg:col-span-10",
            "text-grey"
          )}
          classNameTray="space-x-mobile-gap md:space-x-tablet-gap lg:space-x-desktop-gap"
        >
          {team.map((individual, index) => (
            <Slide key={individual.name} index={index}>
              <Person
                image={individual.image}
                name={individual.name}
                position={individual.position}
              />
            </Slide>
          ))}
        </Slider>
        <ButtonNext className={classNames("col-start-4", "lg:col-start-12")}>
          <ArrowForwardIcon className="stroke-current bg-neon-green text-dark-blue h-xs rounded-md" />
        </ButtonNext>
      </CarouselProvider>
    </Section>
  );
};