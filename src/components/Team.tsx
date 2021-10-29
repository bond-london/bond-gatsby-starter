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
        <div className="hidden lg:block col-start-1 col-span-3 row-start-4 row-span-3 bg-dark-blue" />
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
        <ButtonBack
          className={classNames(
            "row-start-1 self-end justify-self-start z-30",
            "col-start-1",
            "lg:col-start-1",
            "lg:grid lg:grid-cols-1 lg:grid-rows-3 lg:self-auto lg:justify-self-auto"
          )}
        >
          <ArrowBackIcon
            className={classNames(
              "stroke-current bg-neon-green text-dark-blue h-xs rounded-md",
              "lg:row-start-1 lg:row-span-2 lg:self-center"
            )}
          />
        </ButtonBack>
        <Slider
          className={classNames(
            "row-start-1",
            "col-start-1 col-span-4",
            "lg:col-start-2 lg:col-span-10",
            "text-dark-blue lg:text-grey"
          )}
          classNameTray="space-x-mobile-gap md:space-x-tablet-gap lg:space-x-desktop-gap"
        >
          {team.map((individual, index) => (
            <Slide key={individual.name} index={index}>
              <Person
                visual={individual.visual}
                loop={individual.loop}
                name={individual.name}
                position={individual.position}
              />
            </Slide>
          ))}
        </Slider>
        <ButtonNext
          className={classNames(
            "row-start-1 self-end justify-self-end z-30",
            "col-start-4",
            "lg:col-start-12",
            "lg:grid lg:grid-cols-1 lg:grid-rows-3 lg:self-auto lg:justify-self-auto"
          )}
        >
          <ArrowForwardIcon
            className={classNames(
              "stroke-current bg-neon-green text-dark-blue h-xs rounded-md",
              "lg:row-start-1 lg:row-span-2 lg:self-center"
            )}
          />
        </ButtonNext>
      </CarouselProvider>
    </Section>
  );
};
