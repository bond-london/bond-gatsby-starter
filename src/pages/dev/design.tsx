import classNames from "classnames";
import React, { Fragment } from "react";
import { Layout, Section } from "../../layouts";
import { Colours, lookupColourString } from "../../lookups";

const Design: React.FC = () => {
  return (
    <Layout bodyClassName="bg-white">
      <Section key="heading" componentName="Heading">
        <h1
          className={classNames(
            "h1",
            "col-start-2 col-span-4",
            "md:col-start-3 md:col-span-6",
            "lg:col-start-4 lg:col-span-8"
          )}
        >
          Design
        </h1>
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
            <tr className="content-grid-in-page-grid text-left">
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
              <tr key={w} className="content-grid-in-page-grid">
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
    </Layout>
  );
};

export default Design;
