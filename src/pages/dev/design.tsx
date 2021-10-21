import classNames from "classnames";
import React, { Fragment } from "react";
import { Section } from "../../layouts";
import { Colours, lookupColourString } from "../../lookups";
import { DesignLayout } from "./DesignLayout";

function returnColumnColour(i: number) {
  if (i === 1) {
    return "bg-red";
  }
  if (i === 6) {
    return "bg-red md:bg-green";
  }

  if (i === 10) {
    return "bg-red lg:bg-green";
  }

  if (i === 14) {
    return "bg-red";
  }

  return "bg-green";
}

function returnColumnVisibility(i: number) {
  if (i > 10) {
    return "hidden lg:block";
  }

  if (i > 6) {
    return "hidden md:block";
  }

  return "block";
}

const Design: React.FC = () => {
  return (
    <DesignLayout title="Design">
      <Section componentName="Grid" contentClassName="h-xl">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => (
          <div
            key={i}
            className={classNames(
              "text-black text-center",
              "col-span-1",
              returnColumnColour(i),
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
        pageGrid={false}
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
        <table className="col-content">
          <thead>
            <tr className="content-grid-only text-left">
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
              <tr key={w} className="content-grid-only">
                <td className="col-start-1 col-span-1 md:col-start-1 md:col-span-3">
                  {w.replace("w-", "").toUpperCase()}
                </td>
                <td className="col-start-3 col-span-2 md:col-start-6 md:col-span-3">
                  <div className={classNames("h-m", w, "bg-red")} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section key="Headlines" componentName="Headlines">
        <h2 className="h2 col-content">Headlines:</h2>
        {["h1", "h2", "h3"].map((text) => (
          <Fragment key={text}>
            <p className={classNames("col-content", text)}>
              {text.toUpperCase()}
            </p>
            <p className={classNames("col-content", text, "pb-m")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </Fragment>
        ))}
      </Section>

      <Section key="Body copy" componentName="Body Copy">
        <h2 className="h2 col-content">Bodycopy:</h2>

        {["p1", "p1sb", "p2", "p2sb", "p3", "p4"].map((text) => (
          <Fragment key={text}>
            <p className={classNames("col-content", text)}>
              {text.toUpperCase()}
            </p>
            <p className={classNames("col-content", text, "pb-m")}>
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
