const colourTable = {
  Black: [
    "text-black",
    "bg-black",
    "text-white",
    "from-black",
    "to-black",
    "via-black",
    "to-black-0",
    "via-black-0",
  ],
  White: [
    "text-white",
    "bg-white",
    "text-black",
    "from-white",
    "to-white",
    "via-white",
    "to-white-0",
    "via-white-0",
  ],
  Red: [
    "text-red",
    "bg-red",
    "text-white",
    "from-red",
    "to-red",
    "via-red",
    "to-red-0",
    "via-red-0",
  ],
  Green: [
    "text-green",
    "bg-green",
    "text-black",
    "from-green",
    "to-green",
    "via-green",
    "to-green-0",
    "via-green-0",
  ],
  Blue: [
    "text-blue",
    "bg-blue",
    "text-white",
    "from-blue",
    "to-blue",
    "via-blue",
    "to-blue",
    "via-blue",
  ],
};

type ColourName = keyof typeof colourTable;
type ColourType =
  | "text"
  | "bg"
  | "textOnTop"
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
    case "from":
      return entry[3];
    case "to":
      return entry[4];
    case "via":
      return entry[5];
    case "to0":
      return entry[6];
    case "via0":
      return entry[7];
  }
}

export const Colours = Object.keys(colourTable) as ColourName[];
