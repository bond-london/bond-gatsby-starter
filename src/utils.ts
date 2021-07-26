import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { RTFContent } from "./elements";
import { ExtractedLottie, ExtractedSvg, File } from "./generated/graphql-types";

interface GenericRichTextNode {
  readonly remoteTypeName: string | undefined;
  readonly raw?: unknown;
  readonly html?: string;
  readonly markdown?: string;
  readonly text?: string;
  readonly json?: RTFContent;
}

export function getRTF(
  node: GenericRichTextNode | string | undefined
): RTFContent | undefined {
  if (node) {
    if (typeof node === "string") {
      return [{ type: "paragraph", children: [{ text: node }] }];
    }

    if (node.json) {
      return node.json;
    }
    if (node.raw) {
      return node.raw as RTFContent;
    }

    throw new Error(`No json or raw in: ${JSON.stringify(node)}`);
  }
}

interface GenericAsset {
  localFile?: File;
  alternateText?: string;
}

export function getImageFromFile(file?: File): IGatsbyImageData | undefined {
  return file?.childImageSharp?.gatsbyImageData as IGatsbyImageData;
}

export function getImage(
  node: GenericAsset | undefined
): IGatsbyImageData | undefined {
  return getImageFromFile(node?.localFile);
}

export function getAlt(
  node: GenericAsset | undefined,
  defaultValue: string
): string {
  return node?.alternateText || defaultValue;
}

export function getVideoFromFile(file?: File): string | undefined {
  return file?.publicURL;
}

export function getVideo(node: GenericAsset | undefined): string | undefined {
  return getVideoFromFile(node?.localFile);
}

export function getLottieFromFile(file?: File): ExtractedLottie | undefined {
  return file?.lottie;
}

export function getLottie(
  node: GenericAsset | undefined
): ExtractedLottie | undefined {
  return getLottieFromFile(node?.localFile);
}

export function getSvgFromFile(file?: File): ExtractedSvg | undefined {
  return file?.svg;
}

export function getSvg(
  node: GenericAsset | undefined
): ExtractedSvg | undefined {
  return getSvgFromFile(node?.localFile);
}

export const imageFragment = graphql`
  fragment ImageFragment on GraphCMS_Asset {
    id
    alternateText
    localFile {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export const videoFragment = graphql`
  fragment VideoFragment on GraphCMS_Asset {
    id
    alternateText
    localFile {
      publicURL
    }
  }
`;

export const lottieFragment = graphql`
  fragment LottieFragment on GraphCMS_Asset {
    id
    alternateText
    localFile {
      lottie {
        animationJson
        encoded
      }
    }
  }
`;

export const svgFragment = graphql`
  fragment SvgFragment on GraphCMS_Asset {
    id
    alternateText
    localFile {
      svg {
        encoded
      }
    }
  }
`;
