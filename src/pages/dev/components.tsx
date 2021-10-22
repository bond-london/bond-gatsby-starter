import React, { useCallback, useState } from "react";
import {
  Collection,
  DesignLayout,
  Headline,
  Hero,
  LinkOrButton,
  Menu,
  NavigationBar,
} from "../../components";
import { Section } from "../../layouts";
import { File } from "../../generated/graphql-types";

import logo from "../../images/bond-black.svg";
import { graphql, useStaticQuery } from "gatsby";
import {
  getImageFromFile,
  getRTF,
  getVideoFromFile,
} from "@bond-london/gatsby-graphcms-components";
const menu: Menu = {
  items: [
    { name: "Design", internal: "/dev/design" },
    { name: "London", external: "https://bond-agency.london", newPage: true },
    {
      name: "Helsinki",
      external: "http://bond.fi",
      newPage: true,
      isButton: true,
    },
  ],
};

const ComponentContainer: React.FC<{ name: string }> = ({ name, children }) => {
  return (
    <Section
      componentName={name}
      topSpacing={false}
      double={true}
      postChildren={
        <div className="relative col-span-full row-start-3 row-span-3 outline-debug-black">
          {children}
        </div>
      }
    >
      <h2 className="h2 col-span-full">{name}</h2>
    </Section>
  );
};

const Components: React.FC = () => {
  const allFiles = useStaticQuery<{
    allFile: { nodes: readonly File[] };
  }>(graphql`
    query MyQuery {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          name
          ext
          ...ImageFragment
          ...VideoFragment
        }
      }
    }
  `);

  const allFilesMap = allFiles.allFile.nodes.map((n) => n);
  const findFile = (name: string) =>
    allFilesMap.find((n) => name === n.name + n.ext);

  const heroThumbnail = getImageFromFile(findFile("small_web_loop.jpg"))!;
  const heroVideo = getVideoFromFile(findFile("small_web_loop.mp4"))!;

  const [buttonCount, setButtonCount] = useState(0);
  const onButtonClick = useCallback(() => setButtonCount((n) => n + 1), []);

  return (
    <DesignLayout title="Design">
      <ComponentContainer name="Buttons">
        <Section componentName="Buttons">
          <LinkOrButton
            internal="/dev"
            className="col-start-1 col-span-2"
            asButton={true}
          >
            Development
          </LinkOrButton>
          <LinkOrButton external="/dev" className="col-span-2" asButton={true}>
            Development (ext)
          </LinkOrButton>
          <LinkOrButton
            action={onButtonClick}
            className="col-span-2"
            asButton={true}
          >
            Click
          </LinkOrButton>
          <LinkOrButton className="col-span-2" asButton={true}>
            Nothing
          </LinkOrButton>

          <p className="col-span-full p2">
            Current button count: {buttonCount}
          </p>
        </Section>
      </ComponentContainer>

      <ComponentContainer name="Navigation Bar">
        <NavigationBar logoSvg={logo} menu={menu} />
      </ComponentContainer>

      <ComponentContainer name="Hero">
        <Hero
          title="Hero title"
          message={getRTF(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          )}
          image={heroThumbnail}
          videoUrl={heroVideo}
          alt="Mountain"
          link={{ name: "Click me" }}
        />
      </ComponentContainer>

      <ComponentContainer name="Hero with long text">
        <Hero
          title="Hero title"
          message={getRTF(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )}
          image={heroThumbnail}
          videoUrl={heroVideo}
          alt="Mountain"
          link={{ name: "Click me" }}
        />
      </ComponentContainer>

      <ComponentContainer name="Headline">
        <Headline
          content={
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            getRTF("Lorem ipsum dolor sit amet, consectetur adipiscing elit")!
          }
        />
      </ComponentContainer>

      <ComponentContainer name="Collection left">
        <Collection
          left={true}
          image={heroThumbnail}
          alt="Mountain"
          title="Lorem ipsum dolor sit amet"
          message={getRTF(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          )}
          link={{ name: "Click me" }}
        />
      </ComponentContainer>

      <ComponentContainer name="Collection right">
        <Collection
          left={false}
          image={heroThumbnail}
          alt="Mountain"
          title="Lorem ipsum dolor sit amet"
          message={getRTF(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          )}
          link={{ name: "Click me" }}
        />
      </ComponentContainer>
    </DesignLayout>
  );
};

export default Components;
