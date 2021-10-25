import React, { useCallback, useState } from "react";
import {
  Information,
  DesignLayout,
  Headline,
  Hero,
  Individual,
  LinkOrButton,
  Menu,
  Message,
  NavigationBar,
  Product,
  Team,
  FooterInformation,
  Footer,
} from "../../components";
import { Section } from "../../layouts";
import { File } from "../../generated/graphql-types";

import logo from "../../images/bond-black.svg";
import { graphql, useStaticQuery } from "gatsby";
import {
  getImageFromFile,
  getLottieFromFile,
  getRTF,
  getSvgFromFile,
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

const footer: FooterInformation = {
  columns: [
    [
      { type: "Logo" },
      {
        type: "Text",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      { type: "Text", text: "Follow us" },
      {
        type: "Links",
        links: [
          {
            icon: "Facebook",
            external: "https://www.facebook.com",
            newPage: true,
          },
          {
            icon: "LinkedIn",
            external: "https://www.linkedin.com",
            newPage: true,
          },
        ],
      },
    ],
    [
      { type: "Text", text: "Information" },
      { type: "Links", links: [{ name: "Home", internal: "/" }] },
    ],
    [
      { type: "Text", text: "Contact us" },
      {
        type: "Links",
        links: [
          { icon: "Location", name: "22 Acacia Avenue, London, TW17 0AY" },
        ],
      },
      { type: "Links", links: [{ icon: "Phone", name: "(555) 666 6666" }] },
      {
        type: "Links",
        links: [
          {
            icon: "Email",
            name: "eddie@ironmaiden.com",
            external: "mailto:eddie@ironmaiden.com",
          },
        ],
      },
    ],
  ],
  lastRow: [
    [
      {
        type: "Links",
        separator: "/",
        links: [
          { name: "Privacy Policy", internal: "/privacy" },
          {
            name: "Google",
            external: "https://www.google.co.uk",
            newPage: true,
          },
        ],
      },
    ],
    [{ type: "Text", text: "Copyright © 2021 | Bond London" }],
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
          ...LottieFragment
          ...SvgFragment
        }
      }
    }
  `);

  const allFilesMap = allFiles.allFile.nodes.map((n) => n);
  const findFile = (name: string) =>
    allFilesMap.find((n) => name === n.name + n.ext);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const heroThumbnail = getImageFromFile(findFile("small_web_loop.jpg"))!;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const heroVideo = getVideoFromFile(findFile("small_web_loop.mp4"))!;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const person = getImageFromFile(findFile("female-silhouette.png"))!;
  const animation = getLottieFromFile(findFile("80703-data-in-move.json"));
  const svg = getSvgFromFile(findFile("1545429216.svg"));
  const pumpkinHead = getLottieFromFile(
    findFile("81388-pumpkin-evil-laugh-loop.json")
  );
  const faceSvg = getSvgFromFile(findFile("Constipated-Emoji.svg"));
  const personThumbnail = getImageFromFile(
    findFile("small_pexels-karolina-grabowska-6031698.jpg")
  );
  const personVideo = getVideoFromFile(
    findFile("small_pexels-karolina-grabowska-6031698.mp4")
  );

  const team: Individual[] = [
    {
      visual: { image: person, alt: "Headshot" },
      name: "Abigail",
      position: "Left wing",
    },
    {
      visual: { animation: pumpkinHead, alt: "Headshot" },
      loop: true,
      name: "Bernard",
      position: "Right wing",
    },
    {
      visual: { svg: faceSvg, alt: "Headshot" },
      name: "Cameron",
      position: "Forward",
    },
    {
      visual: {
        image: personThumbnail,
        videoUrl: personVideo,
        alt: "Headshot",
      },
      loop: true,
      name: "Duncan",
      position: "Centre",
    },
    {
      visual: { image: person, alt: "Headshot" },
      name: "Eloise",
      position: "Drummer",
    },
    {
      visual: { animation: pumpkinHead, alt: "Headshot" },
      name: "Fred",
      position: "Tea boy",
    },
  ];

  const [buttonCount, setButtonCount] = useState(0);
  const onButtonClick = useCallback(() => setButtonCount((n) => n + 1), []);

  return (
    <DesignLayout title="Design">
      <ComponentContainer name="Buttons">
        <Section componentName="Buttons">
          <LinkOrButton
            internal="/dev"
            className="col-start-1 col-span-2"
            isButton={true}
          >
            Development
          </LinkOrButton>
          <LinkOrButton external="/dev" className="col-span-2" isButton={true}>
            Development (ext)
          </LinkOrButton>
          <LinkOrButton
            action={onButtonClick}
            className="col-span-2"
            isButton={true}
          >
            Click
          </LinkOrButton>
          <LinkOrButton className="col-span-2" isButton={true}>
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
          visual={{
            image: heroThumbnail,
            videoUrl: heroVideo,
            alt: "Mountain",
          }}
          loop={false}
          link={{ name: "Click me" }}
        />
      </ComponentContainer>

      <ComponentContainer name="Hero Image">
        <Hero
          title="Hero image"
          message={getRTF(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          )}
          visual={{
            image: heroThumbnail,
            alt: "Mountain",
          }}
          link={{ name: "Click me" }}
        />
      </ComponentContainer>

      <ComponentContainer name="Hero with long text">
        <Hero
          title="Long hero video"
          message={getRTF(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )}
          visual={{
            image: heroThumbnail,
            videoUrl: heroVideo,
            alt: "Mountain",
          }}
          loop={false}
          link={{ name: "Click me" }}
        />
      </ComponentContainer>

      <ComponentContainer name="Hero animation">
        <Hero
          title="Hero animation"
          message={getRTF(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          )}
          visual={{
            animation,
            alt: "Data",
          }}
          loop={true}
          link={{ name: "Click me" }}
        />
      </ComponentContainer>

      <ComponentContainer name="Hero svg">
        <Hero
          title="Hero svg"
          message={getRTF(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          )}
          visual={{
            svg,
            alt: "Circuit",
          }}
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
        <Information
          left={true}
          visual={{ image: heroThumbnail, alt: "Mountain" }}
          title="Lorem ipsum dolor sit amet"
          message={getRTF(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          )}
          link={{ name: "Click me" }}
        />
      </ComponentContainer>

      <ComponentContainer name="Collection right with video">
        <Information
          left={false}
          visual={{
            image: heroThumbnail,
            videoUrl: heroVideo,
            alt: "Mountain",
          }}
          title="Lorem ipsum dolor sit amet"
          message={getRTF(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          )}
          link={{ name: "Click me" }}
        />
      </ComponentContainer>

      <ComponentContainer name="Product left with animation">
        <Product
          left={true}
          visual={{
            animation,
            alt: "Data",
          }}
          title="Lorem ipsum dolor sit amet"
          message={getRTF(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          )}
          link={{ name: "Click me" }}
        />
      </ComponentContainer>

      <ComponentContainer name="Product right">
        <Product
          left={false}
          visual={{
            image: heroThumbnail,
            alt: "Mountain",
          }}
          title="Lorem ipsum dolor sit amet"
          message={getRTF(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          )}
          link={{ name: "Click me" }}
        />
      </ComponentContainer>

      <ComponentContainer name="Product right">
        <Product
          left={false}
          visual={{
            image: heroThumbnail,
            alt: "Mountain",
          }}
          title="Lorem ipsum dolor sit amet"
          message={getRTF(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          )}
          link={{ name: "Click me" }}
        />
      </ComponentContainer>

      <ComponentContainer name="Team">
        <Team team={team} />
      </ComponentContainer>

      <ComponentContainer name="Message">
        <Message
          heading="Lorem ipsum dolor sit amet"
          content={getRTF(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          )}
          visual={{ image: heroThumbnail, alt: "Mountain" }}
        />
      </ComponentContainer>

      <ComponentContainer name="Footer">
        <Footer {...footer} />
      </ComponentContainer>
    </DesignLayout>
  );
};

export default Components;
