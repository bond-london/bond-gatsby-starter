import classNames from "classnames";
import React, { useCallback, useEffect, useState } from "react";
import { LinkOrButton } from "../components";

export const GetInformation: React.FC<{ className?: string }> = ({
  className,
}) => {
  const [information, setInformation] = useState<string>();
  const [busy, setBusy] = useState(false);
  const handleClick = useCallback(() => {
    setBusy(true);
    setInformation(undefined);
  }, []);
  useEffect(() => {
    if (busy) {
      const handle = setTimeout(() => {
        setInformation("Got information");
        setBusy(false);
      }, 2000);
      return () => clearTimeout(handle);
    }
  }, [busy]);

  return (
    <div
      className={classNames(
        className,
        "flex items-center",
        busy && "cursor-wait"
      )}
    >
      <LinkOrButton
        name="Get Information"
        action={handleClick}
        isButton={true}
      />
      {information && <p className="pl-xs">{information}</p>}
    </div>
  );
};
