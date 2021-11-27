import React, { useCallback, useContext, useMemo } from "react";
import { LinkOrButton } from ".";
import { LayoutContext, Section } from "../layouts";

const ModalContent: React.FC<{ items: number }> = ({ items }) => {
  const layoutContext = useContext(LayoutContext);
  const array = useMemo(() => new Array<number>(items).fill(1), [items]);
  return (
    <div className="bg-neon-green text-black p-m">
      <h2>Modal dialog</h2>
      <p>Array</p>
      {array.map((_, index) => (
        <p key={index}>Row {index}</p>
      ))}
      <p>Array end</p>

      <LinkOrButton
        isButton={true}
        colour="Blue"
        action={() => layoutContext.setModal()}
      >
        Close
      </LinkOrButton>
    </div>
  );
};

export const ModalDialog: React.FC = () => {
  const layoutContext = useContext(LayoutContext);

  const handleShowModal = useCallback(
    (items: number) => {
      layoutContext.setModal(<ModalContent items={items} />);
    },
    [layoutContext]
  );

  const showSmall = useCallback(() => handleShowModal(5), [handleShowModal]);
  const showLarge = useCallback(() => handleShowModal(100), [handleShowModal]);

  return (
    <Section componentName="Modal test">
      <LinkOrButton
        isButton={true}
        action={showSmall}
        colour="Blue"
        className="col-span-2"
      >
        Small modal
      </LinkOrButton>
      <LinkOrButton
        isButton={true}
        action={showLarge}
        colour="Green"
        className="col-span-2"
      >
        Large modal
      </LinkOrButton>
    </Section>
  );
};
