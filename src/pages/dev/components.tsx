import React, { useCallback, useState } from "react";
import { LinkOrButton, Menu, NavigationBar } from "../../components";
import { Section } from "../../layouts";
import { DesignLayout } from "./DesignLayout";

import logo from "../../images/bond-black.svg";
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
    <Section componentName={name}>
      <h2 className="h2 col-content">{name}</h2>
      <div className="col-start-1 col-span-full outline-debug-black">
        {children}
      </div>
    </Section>
  );
};

const Components: React.FC = () => {
  const [buttonCount, setButtonCount] = useState(0);
  const onButtonClick = useCallback(() => setButtonCount((n) => n + 1), []);

  return (
    <DesignLayout title="Design">
      <ComponentContainer name="Buttons">
        <div className="page-grid">
          <LinkOrButton
            internal="/dev"
            className="col-start-2 col-span-2"
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

          <p className="col-content p2">Current button count: {buttonCount}</p>
        </div>
      </ComponentContainer>

      <ComponentContainer name="Navigation Bar">
        <NavigationBar logoSvg={logo} menu={menu} />
      </ComponentContainer>
    </DesignLayout>
  );
};

export default Components;
