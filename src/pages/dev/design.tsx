import classNames from "classnames";
import React, { Fragment } from "react";
import { DesignLayout } from "../../components";
import { Section } from "../../layouts";
import { Colours, lookupColourString } from "../../lookups";

function returnColumnVisibility(i: number) {
  if (i > 8) {
    return "hidden lg:block";
  }

  if (i > 4) {
    return "hidden md:block";
  }

  return "block";
}

const Design: React.FC = () => {
  return (
    <DesignLayout title="Design">
      <section data-component="New Grids" className="w-full relative">
        <div className="col-span-full grid grid-cols-desktop-container grid-rows-desktop-single py-xs">
          <div className="col-start-1 col-span-1 row-start-1 row-span-1 bg-pink" />
          <div className="col-start-2 col-span-1 row-start-2 row-span-4 bg-blue h-m" />
          <div className="col-start-3 col-span-1 row-start-6 row-span-1 bg-pink" />
        </div>
        <div className="col-span-full grid grid-cols-desktop-container grid-rows-desktop-double py-xs">
          <div className="col-start-1 col-span-1 row-start-1 row-span-1 bg-pink" />
          <div className="col-start-2 col-span-1 row-start-2 row-span-1 bg-grey" />
          <div className="col-start-2 col-span-1 row-start-3 row-span-2 bg-blue h-xs" />
          <div className="col-start-2 col-span-1 row-start-5 row-span-1 bg-grey" />
          <div className="col-start-3 col-span-1 row-start-6 row-span-1 bg-pink" />
        </div>
      </section>

      <Section componentName="Grid" contentClassName="h-xl">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <div
            key={i}
            className={classNames(
              "text-center",
              "col-span-1",
              "bg-light-black",
              lookupColourString("LightBlack", "textOnTop"),
              returnColumnVisibility(i)
            )}
          >
            {i}
          </div>
        ))}
      </Section>
      <Section
        key="Colour Palette"
        componentName="Colour Palette"
        className="bg-off-white"
      >
        {Colours.map((colour) => (
          <div key={colour} className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <div className={lookupColourString(colour, "bg")} />
            </div>
            <p className="p3">{colour}</p>
          </div>
        ))}
      </Section>

      <Section key="Spacings" componentName="Spacings">
        <table className="col-span-full">
          <thead>
            <tr className="content-grid text-left">
              <th className="col-start-1 col-span-1 md:col-start-1 md:col-span-3">
                Name
              </th>
              <th className="col-start-3 col-span-2 md:col-start-6 md:col-span-3">
                Example
              </th>
            </tr>
          </thead>
          <tbody>
            {["w-xxs", "w-xs", "w-s", "w-m", "w-l", "w-xl"].map((w) => (
              <tr key={w} className="content-grid">
                <td className="col-start-1 col-span-1 md:col-start-1 md:col-span-3">
                  {w.replace("w-", "").toUpperCase()}
                </td>
                <td className="col-start-3 col-span-2 md:col-start-6 md:col-span-3">
                  <div className={classNames("h-m", w, "bg-blue")} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section
        key="Headlines"
        componentName="Headlines"
        className="bg-white-d9"
      >
        <h2 className="h2 col-span-full">Headlines:</h2>
        {["h1", "h2", "h3"].map((text) => (
          <Fragment key={text}>
            <p className={classNames("col-span-full", text)}>
              {text.toUpperCase()}
            </p>
            <p className={classNames("col-span-full", text, "pb-m")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </Fragment>
        ))}
      </Section>

      <Section key="Body copy" componentName="Body Copy" className="bg-white-5">
        <h2 className="h2 col-span-full">Bodycopy:</h2>

        {["p1", "p1sb", "p2", "p2sb", "p3", "p4"].map((text) => (
          <Fragment key={text}>
            <p className={classNames("col-span-full", text)}>
              {text.toUpperCase()}
            </p>
            <p className={classNames("col-span-full", text, "pb-m")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </Fragment>
        ))}
      </Section>
    </DesignLayout>
  );
};

export default Design;
