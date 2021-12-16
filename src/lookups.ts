const colourTable = {
  Black: [
    "text-black",
    "bg-black",
    "text-off-white",
    "bg-black-d9",
    "from-black",
    "to-black",
    "via-black",
    "to-black-0",
    "via-black-0",
  ],
  LightBlack: [
    "text-light-black",
    "bg-light-black",
    "text-off-white",
    "bg-light-black-d9",
    "from-light-black",
    "to-light-black",
    "via-light-black",
    "to-light-black-0",
    "via-light-black-0",
  ],
  DarkBlue: [
    "text-dark-blue",
    "bg-dark-blue",
    "text-off-white",
    "bg-dark-blue-d9",
    "from-dark-blue",
    "to-dark-blue",
    "via-dark-blue",
    "to-dark-blue-0",
    "via-dark-blue-0",
  ],
  NeonGreen: [
    "text-neon-green",
    "bg-neon-green",
    "text-dark-blue",
    "bg-neon-green-d9",
    "from-neon-green",
    "to-neon-green",
    "via-neon-green",
    "to-neon-green-0",
    "via-neon-green-0",
  ],
  Pink: [
    "text-pink",
    "bg-pink",
    "text-light-black",
    "bg-pink-d9",
    "from-pink",
    "to-pink",
    "via-pink",
    "to-pink-0",
    "via-pink-0",
  ],
  Blue: [
    "text-blue",
    "bg-blue",
    "text-black",
    "bg-blue-d9",
    "from-blue",
    "to-blue",
    "via-blue",
    "to-blue-0",
    "via-blue-0",
  ],
  LightBlue: [
    "text-light-blue",
    "bg-light-blue",
    "text-light-black",
    "bg-light-blue-d9",
    "from-light-blue",
    "to-light-blue",
    "via-light-blue",
    "to-light-blue-0",
    "via-light-blue-0",
  ],
  WashaedBlue: [
    "text-washed-blue",
    "bg-washed-blue",
    "text-light-black",
    "bg-washed-blue-d9",
    "from-washed-blue",
    "to-washed-blue",
    "via-washed-blue",
    "to-washed-blue-0",
    "via-washed-blue-0",
  ],
  Grey: [
    "text-grey",
    "bg-grey",
    "text-light-black",
    "bg-grey-d9",
    "from-grey",
    "to-grey",
    "via-grey",
    "to-grey-0",
    "via-grey-0",
  ],

  OffWhite: [
    "text-off-white",
    "bg-off-white",
    "text-black",
    "bg-off-white-d9",
    "from-white",
    "to-white",
    "via-white",
    "to-white-0",
    "via-white-0",
  ],
};

type ColourName = keyof typeof colourTable;
type ColourType =
  | "text"
  | "bg"
  | "textOnTop"
  | "hover"
  | "from"
  | "to"
  | "via"
  | "to0"
  | "via0";

export function lookupColourString(
  colour: ColourName,
  type: ColourType
): string {
  const entry = colourTable[colour];
  switch (type) {
    case "text":
      return entry[0];
    case "bg":
      return entry[1];
    case "textOnTop":
      return entry[2];
    case "hover":
      return entry[3];
    case "from":
      return entry[4];
    case "to":
      return entry[5];
    case "via":
      return entry[6];
    case "to0":
      return entry[7];
    case "via0":
      return entry[8];
  }
}

export const Colours = Object.keys(colourTable) as ColourName[];
