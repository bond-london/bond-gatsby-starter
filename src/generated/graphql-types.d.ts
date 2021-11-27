export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type File = Node & {
  readonly __typename?: 'File';
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs?: Maybe<Scalars['Float']>;
  readonly blksize?: Maybe<Scalars['Int']>;
  readonly blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp?: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type PageDoc */
  readonly childrenPageDoc?: Maybe<ReadonlyArray<Maybe<PageDoc>>>;
  /** Returns the first child node of type PageDoc or null if there are no children of given type on this node */
  readonly childPageDoc?: Maybe<PageDoc>;
  /** Returns all children nodes filtered by type ImagesJson */
  readonly childrenImagesJson?: Maybe<ReadonlyArray<Maybe<ImagesJson>>>;
  /** Returns the first child node of type ImagesJson or null if there are no children of given type on this node */
  readonly childImagesJson?: Maybe<ImagesJson>;
  /** Returns all children nodes filtered by type DocsJson */
  readonly childrenDocsJson?: Maybe<ReadonlyArray<Maybe<DocsJson>>>;
  /** Returns the first child node of type DocsJson or null if there are no children of given type on this node */
  readonly childDocsJson?: Maybe<DocsJson>;
  /** Returns all children nodes filtered by type AnimationsJson */
  readonly childrenAnimationsJson?: Maybe<ReadonlyArray<Maybe<AnimationsJson>>>;
  /** Returns the first child node of type AnimationsJson or null if there are no children of given type on this node */
  readonly childAnimationsJson?: Maybe<AnimationsJson>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly svg?: Maybe<ExtractedSvg>;
  readonly lottie?: Maybe<ExtractedLottie>;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type Internal = {
  readonly __typename?: 'Internal';
  readonly content?: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly fieldOwners?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType?: Maybe<Scalars['Boolean']>;
  readonly mediaType?: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

export type Directory = Node & {
  readonly __typename?: 'Directory';
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs?: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  readonly __typename?: 'Site';
  readonly buildTime?: Maybe<Scalars['Date']>;
  readonly siteMetadata?: Maybe<SiteSiteMetadata>;
  readonly flags?: Maybe<SiteFlags>;
  readonly polyfill?: Maybe<Scalars['Boolean']>;
  readonly pathPrefix?: Maybe<Scalars['String']>;
  readonly jsxRuntime?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteFlags = {
  readonly __typename?: 'SiteFlags';
  readonly FAST_DEV?: Maybe<Scalars['Boolean']>;
};

export type SiteSiteMetadata = {
  readonly __typename?: 'SiteSiteMetadata';
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly siteUrl?: Maybe<Scalars['String']>;
  readonly cookieName?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  readonly __typename?: 'SiteFunction';
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type SitePage = Node & {
  readonly __typename?: 'SitePage';
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath?: Maybe<Scalars['String']>;
  readonly pageContext?: Maybe<Scalars['JSON']>;
  readonly pluginCreator?: Maybe<SitePlugin>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type SitePlugin = Node & {
  readonly __typename?: 'SitePlugin';
  readonly resolve?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly nodeAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath?: Maybe<Scalars['String']>;
  readonly pluginOptions?: Maybe<Scalars['JSON']>;
  readonly packageJson?: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type SiteBuildMetadata = Node & {
  readonly __typename?: 'SiteBuildMetadata';
  readonly buildTime?: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  readonly turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  readonly turdSize?: InputMaybe<Scalars['Float']>;
  readonly alphaMax?: InputMaybe<Scalars['Float']>;
  readonly optCurve?: InputMaybe<Scalars['Boolean']>;
  readonly optTolerance?: InputMaybe<Scalars['Float']>;
  readonly threshold?: InputMaybe<Scalars['Int']>;
  readonly blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  readonly color?: InputMaybe<Scalars['String']>;
  readonly background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  readonly __typename?: 'ImageSharp';
  readonly fixed?: Maybe<ImageSharpFixed>;
  readonly fluid?: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original?: Maybe<ImageSharpOriginal>;
  readonly resize?: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<ReadonlyArray<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  readonly __typename?: 'ImageSharpFixed';
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  readonly __typename?: 'ImageSharpFluid';
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  readonly quality?: InputMaybe<Scalars['Int']>;
  readonly progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  readonly quality?: InputMaybe<Scalars['Int']>;
  readonly compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  readonly quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  readonly quality?: InputMaybe<Scalars['Int']>;
  readonly lossless?: InputMaybe<Scalars['Boolean']>;
  readonly speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  readonly grayscale?: InputMaybe<Scalars['Boolean']>;
  readonly duotone?: InputMaybe<DuotoneGradient>;
  readonly rotate?: InputMaybe<Scalars['Int']>;
  readonly trim?: InputMaybe<Scalars['Float']>;
  readonly cropFocus?: InputMaybe<ImageCropFocus>;
  readonly fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  readonly __typename?: 'ImageSharpOriginal';
  readonly width?: Maybe<Scalars['Float']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  readonly __typename?: 'ImageSharpResize';
  readonly src?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly width?: Maybe<Scalars['Int']>;
  readonly height?: Maybe<Scalars['Int']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly originalName?: Maybe<Scalars['String']>;
};

export type ExtractedSvg = Node & {
  readonly __typename?: 'ExtractedSvg';
  readonly content: Scalars['String'];
  readonly encoded: Scalars['String'];
  readonly path: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type ExtractedLottie = Node & {
  readonly __typename?: 'ExtractedLottie';
  readonly animationJson: Scalars['String'];
  readonly content: Scalars['String'];
  readonly encoded: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type PageDoc = Node & {
  readonly __typename?: 'PageDoc';
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly image?: Maybe<File>;
  readonly video?: Maybe<File>;
  readonly animation?: Maybe<File>;
  readonly fileInformation?: Maybe<PageDocFileInformation>;
};

export type PageDocFileInformation = {
  readonly __typename?: 'PageDocFileInformation';
  readonly relativeDirectory?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly ext?: Maybe<Scalars['String']>;
  readonly extension?: Maybe<Scalars['String']>;
};

export type ImagesJson = Node & {
  readonly __typename?: 'ImagesJson';
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly v?: Maybe<Scalars['String']>;
  readonly fr?: Maybe<Scalars['Int']>;
  readonly ip?: Maybe<Scalars['Int']>;
  readonly op?: Maybe<Scalars['Int']>;
  readonly w?: Maybe<Scalars['Int']>;
  readonly h?: Maybe<Scalars['Int']>;
  readonly nm?: Maybe<Scalars['String']>;
  readonly ddd?: Maybe<Scalars['Int']>;
  readonly assets?: Maybe<ReadonlyArray<Maybe<ImagesJsonAssets>>>;
  readonly layers?: Maybe<ReadonlyArray<Maybe<ImagesJsonLayers>>>;
};

export type ImagesJsonAssets = {
  readonly __typename?: 'ImagesJsonAssets';
  readonly id?: Maybe<Scalars['String']>;
  readonly layers?: Maybe<ReadonlyArray<Maybe<ImagesJsonAssetsLayers>>>;
};

export type ImagesJsonAssetsLayers = {
  readonly __typename?: 'ImagesJsonAssetsLayers';
  readonly ddd?: Maybe<Scalars['Int']>;
  readonly ind?: Maybe<Scalars['Int']>;
  readonly ty?: Maybe<Scalars['Int']>;
  readonly nm?: Maybe<Scalars['String']>;
  readonly parent?: Maybe<Scalars['Int']>;
  readonly sr?: Maybe<Scalars['Int']>;
  readonly ks?: Maybe<ImagesJsonAssetsLayersKs>;
  readonly ao?: Maybe<Scalars['Int']>;
  readonly hasMask?: Maybe<Scalars['Boolean']>;
  readonly masksProperties?: Maybe<ReadonlyArray<Maybe<ImagesJsonAssetsLayersMasksProperties>>>;
  readonly shapes?: Maybe<ReadonlyArray<Maybe<ImagesJsonAssetsLayersShapes>>>;
  readonly ip?: Maybe<Scalars['Int']>;
  readonly op?: Maybe<Scalars['Int']>;
  readonly st?: Maybe<Scalars['Int']>;
  readonly bm?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersKs = {
  readonly __typename?: 'ImagesJsonAssetsLayersKs';
  readonly o?: Maybe<ImagesJsonAssetsLayersKsO>;
  readonly r?: Maybe<ImagesJsonAssetsLayersKsR>;
  readonly p?: Maybe<ImagesJsonAssetsLayersKsP>;
  readonly a?: Maybe<ImagesJsonAssetsLayersKsA>;
  readonly s?: Maybe<ImagesJsonAssetsLayersKsS>;
};

export type ImagesJsonAssetsLayersKsO = {
  readonly __typename?: 'ImagesJsonAssetsLayersKsO';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersKsR = {
  readonly __typename?: 'ImagesJsonAssetsLayersKsR';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersKsP = {
  readonly __typename?: 'ImagesJsonAssetsLayersKsP';
  readonly a?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
  readonly l?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersKsA = {
  readonly __typename?: 'ImagesJsonAssetsLayersKsA';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
  readonly l?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersKsS = {
  readonly __typename?: 'ImagesJsonAssetsLayersKsS';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
  readonly l?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersMasksProperties = {
  readonly __typename?: 'ImagesJsonAssetsLayersMasksProperties';
  readonly inv?: Maybe<Scalars['Boolean']>;
  readonly mode?: Maybe<Scalars['String']>;
  readonly pt?: Maybe<ImagesJsonAssetsLayersMasksPropertiesPt>;
  readonly o?: Maybe<ImagesJsonAssetsLayersMasksPropertiesO>;
  readonly x?: Maybe<ImagesJsonAssetsLayersMasksPropertiesX>;
  readonly nm?: Maybe<Scalars['String']>;
};

export type ImagesJsonAssetsLayersMasksPropertiesPt = {
  readonly __typename?: 'ImagesJsonAssetsLayersMasksPropertiesPt';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ImagesJsonAssetsLayersMasksPropertiesPtK>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersMasksPropertiesPtK = {
  readonly __typename?: 'ImagesJsonAssetsLayersMasksPropertiesPtK';
  readonly i?: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>>>;
  readonly o?: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>>>;
  readonly v?: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>>>;
  readonly c?: Maybe<Scalars['Boolean']>;
};

export type ImagesJsonAssetsLayersMasksPropertiesO = {
  readonly __typename?: 'ImagesJsonAssetsLayersMasksPropertiesO';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersMasksPropertiesX = {
  readonly __typename?: 'ImagesJsonAssetsLayersMasksPropertiesX';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapes = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapes';
  readonly ty?: Maybe<Scalars['String']>;
  readonly it?: Maybe<ReadonlyArray<Maybe<ImagesJsonAssetsLayersShapesIt>>>;
  readonly nm?: Maybe<Scalars['String']>;
  readonly np?: Maybe<Scalars['Int']>;
  readonly cix?: Maybe<Scalars['Int']>;
  readonly bm?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
  readonly mn?: Maybe<Scalars['String']>;
  readonly hd?: Maybe<Scalars['Boolean']>;
};

export type ImagesJsonAssetsLayersShapesIt = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesIt';
  readonly ty?: Maybe<Scalars['String']>;
  readonly it?: Maybe<ReadonlyArray<Maybe<ImagesJsonAssetsLayersShapesItIt>>>;
  readonly nm?: Maybe<Scalars['String']>;
  readonly np?: Maybe<Scalars['Int']>;
  readonly cix?: Maybe<Scalars['Int']>;
  readonly bm?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
  readonly mn?: Maybe<Scalars['String']>;
  readonly hd?: Maybe<Scalars['Boolean']>;
  readonly p?: Maybe<ImagesJsonAssetsLayersShapesItP>;
  readonly a?: Maybe<ImagesJsonAssetsLayersShapesItA>;
  readonly s?: Maybe<ImagesJsonAssetsLayersShapesItS>;
  readonly o?: Maybe<ImagesJsonAssetsLayersShapesItO>;
  readonly sk?: Maybe<ImagesJsonAssetsLayersShapesItSk>;
  readonly sa?: Maybe<ImagesJsonAssetsLayersShapesItSa>;
  readonly d?: Maybe<Scalars['Int']>;
  readonly c?: Maybe<ImagesJsonAssetsLayersShapesItC>;
  readonly ind?: Maybe<Scalars['Int']>;
  readonly ks?: Maybe<ImagesJsonAssetsLayersShapesItKs>;
};

export type ImagesJsonAssetsLayersShapesItIt = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItIt';
  readonly ty?: Maybe<Scalars['String']>;
  readonly it?: Maybe<ReadonlyArray<Maybe<ImagesJsonAssetsLayersShapesItItIt>>>;
  readonly nm?: Maybe<Scalars['String']>;
  readonly np?: Maybe<Scalars['Int']>;
  readonly cix?: Maybe<Scalars['Int']>;
  readonly bm?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
  readonly mn?: Maybe<Scalars['String']>;
  readonly hd?: Maybe<Scalars['Boolean']>;
  readonly p?: Maybe<ImagesJsonAssetsLayersShapesItItP>;
  readonly a?: Maybe<ImagesJsonAssetsLayersShapesItItA>;
  readonly s?: Maybe<ImagesJsonAssetsLayersShapesItItS>;
  readonly o?: Maybe<ImagesJsonAssetsLayersShapesItItO>;
  readonly sk?: Maybe<ImagesJsonAssetsLayersShapesItItSk>;
  readonly sa?: Maybe<ImagesJsonAssetsLayersShapesItItSa>;
  readonly ind?: Maybe<Scalars['Int']>;
  readonly ks?: Maybe<ImagesJsonAssetsLayersShapesItItKs>;
  readonly c?: Maybe<ImagesJsonAssetsLayersShapesItItC>;
};

export type ImagesJsonAssetsLayersShapesItItIt = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItItIt';
  readonly ind?: Maybe<Scalars['Int']>;
  readonly ty?: Maybe<Scalars['String']>;
  readonly ix?: Maybe<Scalars['Int']>;
  readonly ks?: Maybe<ImagesJsonAssetsLayersShapesItItItKs>;
  readonly nm?: Maybe<Scalars['String']>;
  readonly mn?: Maybe<Scalars['String']>;
  readonly hd?: Maybe<Scalars['Boolean']>;
  readonly c?: Maybe<ImagesJsonAssetsLayersShapesItItItC>;
  readonly o?: Maybe<ImagesJsonAssetsLayersShapesItItItO>;
  readonly bm?: Maybe<Scalars['Int']>;
  readonly p?: Maybe<ImagesJsonAssetsLayersShapesItItItP>;
  readonly a?: Maybe<ImagesJsonAssetsLayersShapesItItItA>;
  readonly s?: Maybe<ImagesJsonAssetsLayersShapesItItItS>;
  readonly sk?: Maybe<ImagesJsonAssetsLayersShapesItItItSk>;
  readonly sa?: Maybe<ImagesJsonAssetsLayersShapesItItItSa>;
};

export type ImagesJsonAssetsLayersShapesItItItKs = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItItItKs';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ImagesJsonAssetsLayersShapesItItItKsK>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItItItKsK = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItItItKsK';
  readonly i?: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>>>;
  readonly o?: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>>>;
  readonly v?: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>>>;
  readonly c?: Maybe<Scalars['Boolean']>;
};

export type ImagesJsonAssetsLayersShapesItItItC = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItItItC';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItItItO = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItItItO';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItItItP = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItItItP';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItItItA = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItItItA';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItItItS = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItItItS';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItItItSk = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItItItSk';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItItItSa = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItItItSa';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItItP = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItItP';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItItA = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItItA';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItItS = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItItS';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItItO = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItItO';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItItSk = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItItSk';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItItSa = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItItSa';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItItKs = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItItKs';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ImagesJsonAssetsLayersShapesItItKsK>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItItKsK = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItItKsK';
  readonly i?: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>>>;
  readonly o?: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>>>;
  readonly v?: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>>>;
  readonly c?: Maybe<Scalars['Boolean']>;
};

export type ImagesJsonAssetsLayersShapesItItC = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItItC';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItP = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItP';
  readonly a?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItA = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItA';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItS = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItS';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItO = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItO';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItSk = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItSk';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItSa = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItSa';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItC = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItC';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItKs = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItKs';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ImagesJsonAssetsLayersShapesItKsK>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonAssetsLayersShapesItKsK = {
  readonly __typename?: 'ImagesJsonAssetsLayersShapesItKsK';
  readonly i?: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>>>;
  readonly o?: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>>>;
  readonly v?: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>>>;
  readonly c?: Maybe<Scalars['Boolean']>;
};

export type ImagesJsonLayers = {
  readonly __typename?: 'ImagesJsonLayers';
  readonly ddd?: Maybe<Scalars['Int']>;
  readonly ind?: Maybe<Scalars['Int']>;
  readonly ty?: Maybe<Scalars['Int']>;
  readonly nm?: Maybe<Scalars['String']>;
  readonly sr?: Maybe<Scalars['Int']>;
  readonly ks?: Maybe<ImagesJsonLayersKs>;
  readonly ao?: Maybe<Scalars['Int']>;
  readonly ip?: Maybe<Scalars['Int']>;
  readonly op?: Maybe<Scalars['Int']>;
  readonly st?: Maybe<Scalars['Int']>;
  readonly bm?: Maybe<Scalars['Int']>;
  readonly parent?: Maybe<Scalars['Int']>;
  readonly shapes?: Maybe<ReadonlyArray<Maybe<ImagesJsonLayersShapes>>>;
  readonly refId?: Maybe<Scalars['String']>;
  readonly w?: Maybe<Scalars['Int']>;
  readonly h?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersKs = {
  readonly __typename?: 'ImagesJsonLayersKs';
  readonly o?: Maybe<ImagesJsonLayersKsO>;
  readonly r?: Maybe<ImagesJsonLayersKsR>;
  readonly p?: Maybe<ImagesJsonLayersKsP>;
  readonly a?: Maybe<ImagesJsonLayersKsA>;
  readonly s?: Maybe<ImagesJsonLayersKsS>;
};

export type ImagesJsonLayersKsO = {
  readonly __typename?: 'ImagesJsonLayersKsO';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersKsR = {
  readonly __typename?: 'ImagesJsonLayersKsR';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersKsP = {
  readonly __typename?: 'ImagesJsonLayersKsP';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
  readonly l?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersKsA = {
  readonly __typename?: 'ImagesJsonLayersKsA';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
  readonly l?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersKsS = {
  readonly __typename?: 'ImagesJsonLayersKsS';
  readonly a?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
  readonly l?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersShapes = {
  readonly __typename?: 'ImagesJsonLayersShapes';
  readonly ty?: Maybe<Scalars['String']>;
  readonly it?: Maybe<ReadonlyArray<Maybe<ImagesJsonLayersShapesIt>>>;
  readonly nm?: Maybe<Scalars['String']>;
  readonly np?: Maybe<Scalars['Int']>;
  readonly cix?: Maybe<Scalars['Int']>;
  readonly bm?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
  readonly mn?: Maybe<Scalars['String']>;
  readonly hd?: Maybe<Scalars['Boolean']>;
};

export type ImagesJsonLayersShapesIt = {
  readonly __typename?: 'ImagesJsonLayersShapesIt';
  readonly ind?: Maybe<Scalars['Int']>;
  readonly ty?: Maybe<Scalars['String']>;
  readonly ix?: Maybe<Scalars['Int']>;
  readonly ks?: Maybe<ImagesJsonLayersShapesItKs>;
  readonly nm?: Maybe<Scalars['String']>;
  readonly mn?: Maybe<Scalars['String']>;
  readonly hd?: Maybe<Scalars['Boolean']>;
  readonly c?: Maybe<ImagesJsonLayersShapesItC>;
  readonly o?: Maybe<ImagesJsonLayersShapesItO>;
  readonly bm?: Maybe<Scalars['Int']>;
  readonly p?: Maybe<ImagesJsonLayersShapesItP>;
  readonly a?: Maybe<ImagesJsonLayersShapesItA>;
  readonly s?: Maybe<ImagesJsonLayersShapesItS>;
  readonly sk?: Maybe<ImagesJsonLayersShapesItSk>;
  readonly sa?: Maybe<ImagesJsonLayersShapesItSa>;
  readonly it?: Maybe<ReadonlyArray<Maybe<ImagesJsonLayersShapesItIt>>>;
  readonly np?: Maybe<Scalars['Int']>;
  readonly cix?: Maybe<Scalars['Int']>;
  readonly w?: Maybe<ImagesJsonLayersShapesItW>;
  readonly lc?: Maybe<Scalars['Int']>;
  readonly lj?: Maybe<Scalars['Int']>;
  readonly mm?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersShapesItKs = {
  readonly __typename?: 'ImagesJsonLayersShapesItKs';
  readonly a?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersShapesItC = {
  readonly __typename?: 'ImagesJsonLayersShapesItC';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersShapesItO = {
  readonly __typename?: 'ImagesJsonLayersShapesItO';
  readonly a?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersShapesItP = {
  readonly __typename?: 'ImagesJsonLayersShapesItP';
  readonly a?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersShapesItA = {
  readonly __typename?: 'ImagesJsonLayersShapesItA';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersShapesItS = {
  readonly __typename?: 'ImagesJsonLayersShapesItS';
  readonly a?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersShapesItSk = {
  readonly __typename?: 'ImagesJsonLayersShapesItSk';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersShapesItSa = {
  readonly __typename?: 'ImagesJsonLayersShapesItSa';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersShapesItIt = {
  readonly __typename?: 'ImagesJsonLayersShapesItIt';
  readonly ind?: Maybe<Scalars['Int']>;
  readonly ty?: Maybe<Scalars['String']>;
  readonly ix?: Maybe<Scalars['Int']>;
  readonly ks?: Maybe<ImagesJsonLayersShapesItItKs>;
  readonly nm?: Maybe<Scalars['String']>;
  readonly mn?: Maybe<Scalars['String']>;
  readonly hd?: Maybe<Scalars['Boolean']>;
  readonly c?: Maybe<ImagesJsonLayersShapesItItC>;
  readonly o?: Maybe<ImagesJsonLayersShapesItItO>;
  readonly bm?: Maybe<Scalars['Int']>;
  readonly p?: Maybe<ImagesJsonLayersShapesItItP>;
  readonly a?: Maybe<ImagesJsonLayersShapesItItA>;
  readonly s?: Maybe<ImagesJsonLayersShapesItItS>;
  readonly sk?: Maybe<ImagesJsonLayersShapesItItSk>;
  readonly sa?: Maybe<ImagesJsonLayersShapesItItSa>;
};

export type ImagesJsonLayersShapesItItKs = {
  readonly __typename?: 'ImagesJsonLayersShapesItItKs';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ImagesJsonLayersShapesItItKsK>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersShapesItItKsK = {
  readonly __typename?: 'ImagesJsonLayersShapesItItKsK';
  readonly i?: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>>>;
  readonly o?: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>>>;
  readonly v?: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>>>;
  readonly c?: Maybe<Scalars['Boolean']>;
};

export type ImagesJsonLayersShapesItItC = {
  readonly __typename?: 'ImagesJsonLayersShapesItItC';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersShapesItItO = {
  readonly __typename?: 'ImagesJsonLayersShapesItItO';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersShapesItItP = {
  readonly __typename?: 'ImagesJsonLayersShapesItItP';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersShapesItItA = {
  readonly __typename?: 'ImagesJsonLayersShapesItItA';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersShapesItItS = {
  readonly __typename?: 'ImagesJsonLayersShapesItItS';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersShapesItItSk = {
  readonly __typename?: 'ImagesJsonLayersShapesItItSk';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersShapesItItSa = {
  readonly __typename?: 'ImagesJsonLayersShapesItItSa';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type ImagesJsonLayersShapesItW = {
  readonly __typename?: 'ImagesJsonLayersShapesItW';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Float']>;
  readonly ix?: Maybe<Scalars['Int']>;
};

export type DocsJson = Node & {
  readonly __typename?: 'DocsJson';
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly type?: Maybe<Scalars['String']>;
  readonly module?: Maybe<DocsJsonModule>;
};

export type DocsJsonModule = {
  readonly __typename?: 'DocsJsonModule';
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly image?: Maybe<File>;
  readonly video?: Maybe<File>;
  readonly animation?: Maybe<File>;
};

export type AnimationsJson = Node & {
  readonly __typename?: 'AnimationsJson';
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly tgs?: Maybe<Scalars['Int']>;
  readonly v?: Maybe<Scalars['String']>;
  readonly fr?: Maybe<Scalars['Int']>;
  readonly ip?: Maybe<Scalars['Int']>;
  readonly op?: Maybe<Scalars['Int']>;
  readonly w?: Maybe<Scalars['Int']>;
  readonly h?: Maybe<Scalars['Int']>;
  readonly nm?: Maybe<Scalars['String']>;
  readonly ddd?: Maybe<Scalars['Int']>;
  readonly layers?: Maybe<ReadonlyArray<Maybe<AnimationsJsonLayers>>>;
};

export type AnimationsJsonLayers = {
  readonly __typename?: 'AnimationsJsonLayers';
  readonly ddd?: Maybe<Scalars['Int']>;
  readonly ind?: Maybe<Scalars['Int']>;
  readonly ty?: Maybe<Scalars['Int']>;
  readonly nm?: Maybe<Scalars['String']>;
  readonly sr?: Maybe<Scalars['Int']>;
  readonly ks?: Maybe<AnimationsJsonLayersKs>;
  readonly ao?: Maybe<Scalars['Int']>;
  readonly shapes?: Maybe<ReadonlyArray<Maybe<AnimationsJsonLayersShapes>>>;
  readonly ip?: Maybe<Scalars['Int']>;
  readonly op?: Maybe<Scalars['Int']>;
  readonly st?: Maybe<Scalars['Int']>;
  readonly bm?: Maybe<Scalars['Int']>;
};

export type AnimationsJsonLayersKs = {
  readonly __typename?: 'AnimationsJsonLayersKs';
  readonly o?: Maybe<AnimationsJsonLayersKsO>;
  readonly r?: Maybe<AnimationsJsonLayersKsR>;
  readonly p?: Maybe<AnimationsJsonLayersKsP>;
  readonly a?: Maybe<AnimationsJsonLayersKsA>;
  readonly s?: Maybe<AnimationsJsonLayersKsS>;
};

export type AnimationsJsonLayersKsO = {
  readonly __typename?: 'AnimationsJsonLayersKsO';
  readonly a?: Maybe<Scalars['Int']>;
};

export type AnimationsJsonLayersKsR = {
  readonly __typename?: 'AnimationsJsonLayersKsR';
  readonly a?: Maybe<Scalars['Int']>;
};

export type AnimationsJsonLayersKsP = {
  readonly __typename?: 'AnimationsJsonLayersKsP';
  readonly a?: Maybe<Scalars['Int']>;
};

export type AnimationsJsonLayersKsA = {
  readonly __typename?: 'AnimationsJsonLayersKsA';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

export type AnimationsJsonLayersKsS = {
  readonly __typename?: 'AnimationsJsonLayersKsS';
  readonly a?: Maybe<Scalars['Int']>;
};

export type AnimationsJsonLayersShapes = {
  readonly __typename?: 'AnimationsJsonLayersShapes';
  readonly ty?: Maybe<Scalars['String']>;
  readonly it?: Maybe<ReadonlyArray<Maybe<AnimationsJsonLayersShapesIt>>>;
  readonly nm?: Maybe<Scalars['String']>;
  readonly bm?: Maybe<Scalars['Int']>;
  readonly hd?: Maybe<Scalars['Boolean']>;
};

export type AnimationsJsonLayersShapesIt = {
  readonly __typename?: 'AnimationsJsonLayersShapesIt';
  readonly ind?: Maybe<Scalars['Int']>;
  readonly ty?: Maybe<Scalars['String']>;
  readonly ks?: Maybe<AnimationsJsonLayersShapesItKs>;
  readonly nm?: Maybe<Scalars['String']>;
  readonly hd?: Maybe<Scalars['Boolean']>;
  readonly c?: Maybe<AnimationsJsonLayersShapesItC>;
  readonly o?: Maybe<AnimationsJsonLayersShapesItO>;
  readonly w?: Maybe<AnimationsJsonLayersShapesItW>;
  readonly lc?: Maybe<Scalars['Int']>;
  readonly lj?: Maybe<Scalars['Int']>;
  readonly bm?: Maybe<Scalars['Int']>;
  readonly p?: Maybe<AnimationsJsonLayersShapesItP>;
  readonly a?: Maybe<AnimationsJsonLayersShapesItA>;
  readonly s?: Maybe<AnimationsJsonLayersShapesItS>;
  readonly sk?: Maybe<AnimationsJsonLayersShapesItSk>;
  readonly sa?: Maybe<AnimationsJsonLayersShapesItSa>;
  readonly ml?: Maybe<Scalars['Float']>;
};

export type AnimationsJsonLayersShapesItKs = {
  readonly __typename?: 'AnimationsJsonLayersShapesItKs';
  readonly a?: Maybe<Scalars['Int']>;
};

export type AnimationsJsonLayersShapesItC = {
  readonly __typename?: 'AnimationsJsonLayersShapesItC';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

export type AnimationsJsonLayersShapesItO = {
  readonly __typename?: 'AnimationsJsonLayersShapesItO';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
};

export type AnimationsJsonLayersShapesItW = {
  readonly __typename?: 'AnimationsJsonLayersShapesItW';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Float']>;
};

export type AnimationsJsonLayersShapesItP = {
  readonly __typename?: 'AnimationsJsonLayersShapesItP';
  readonly a?: Maybe<Scalars['Int']>;
};

export type AnimationsJsonLayersShapesItA = {
  readonly __typename?: 'AnimationsJsonLayersShapesItA';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

export type AnimationsJsonLayersShapesItS = {
  readonly __typename?: 'AnimationsJsonLayersShapesItS';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

export type AnimationsJsonLayersShapesItSk = {
  readonly __typename?: 'AnimationsJsonLayersShapesItSk';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
};

export type AnimationsJsonLayersShapesItSa = {
  readonly __typename?: 'AnimationsJsonLayersShapesItSa';
  readonly a?: Maybe<Scalars['Int']>;
  readonly k?: Maybe<Scalars['Int']>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly file?: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory?: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site?: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction?: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage?: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly sitePlugin?: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly imageSharp?: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly extractedSvg?: Maybe<ExtractedSvg>;
  readonly allExtractedSvg: ExtractedSvgConnection;
  readonly extractedLottie?: Maybe<ExtractedLottie>;
  readonly allExtractedLottie: ExtractedLottieConnection;
  readonly pageDoc?: Maybe<PageDoc>;
  readonly allPageDoc: PageDocConnection;
  readonly imagesJson?: Maybe<ImagesJson>;
  readonly allImagesJson: ImagesJsonConnection;
  readonly docsJson?: Maybe<DocsJson>;
  readonly allDocsJson: DocsJsonConnection;
  readonly animationsJson?: Maybe<AnimationsJson>;
  readonly allAnimationsJson: AnimationsJsonConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childrenPageDoc?: InputMaybe<PageDocFilterListInput>;
  childPageDoc?: InputMaybe<PageDocFilterInput>;
  childrenImagesJson?: InputMaybe<ImagesJsonFilterListInput>;
  childImagesJson?: InputMaybe<ImagesJsonFilterInput>;
  childrenDocsJson?: InputMaybe<DocsJsonFilterListInput>;
  childDocsJson?: InputMaybe<DocsJsonFilterInput>;
  childrenAnimationsJson?: InputMaybe<AnimationsJsonFilterListInput>;
  childAnimationsJson?: InputMaybe<AnimationsJsonFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  flags?: InputMaybe<SiteFlagsFilterInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryExtractedSvgArgs = {
  content?: InputMaybe<StringQueryOperatorInput>;
  encoded?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllExtractedSvgArgs = {
  filter?: InputMaybe<ExtractedSvgFilterInput>;
  sort?: InputMaybe<ExtractedSvgSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryExtractedLottieArgs = {
  animationJson?: InputMaybe<StringQueryOperatorInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  encoded?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllExtractedLottieArgs = {
  filter?: InputMaybe<ExtractedLottieFilterInput>;
  sort?: InputMaybe<ExtractedLottieSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryPageDocArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<FileFilterInput>;
  video?: InputMaybe<FileFilterInput>;
  animation?: InputMaybe<FileFilterInput>;
  fileInformation?: InputMaybe<PageDocFileInformationFilterInput>;
};


export type QueryAllPageDocArgs = {
  filter?: InputMaybe<PageDocFilterInput>;
  sort?: InputMaybe<PageDocSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImagesJsonArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  v?: InputMaybe<StringQueryOperatorInput>;
  fr?: InputMaybe<IntQueryOperatorInput>;
  ip?: InputMaybe<IntQueryOperatorInput>;
  op?: InputMaybe<IntQueryOperatorInput>;
  w?: InputMaybe<IntQueryOperatorInput>;
  h?: InputMaybe<IntQueryOperatorInput>;
  nm?: InputMaybe<StringQueryOperatorInput>;
  ddd?: InputMaybe<IntQueryOperatorInput>;
  assets?: InputMaybe<ImagesJsonAssetsFilterListInput>;
  layers?: InputMaybe<ImagesJsonLayersFilterListInput>;
};


export type QueryAllImagesJsonArgs = {
  filter?: InputMaybe<ImagesJsonFilterInput>;
  sort?: InputMaybe<ImagesJsonSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDocsJsonArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  module?: InputMaybe<DocsJsonModuleFilterInput>;
};


export type QueryAllDocsJsonArgs = {
  filter?: InputMaybe<DocsJsonFilterInput>;
  sort?: InputMaybe<DocsJsonSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryAnimationsJsonArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  tgs?: InputMaybe<IntQueryOperatorInput>;
  v?: InputMaybe<StringQueryOperatorInput>;
  fr?: InputMaybe<IntQueryOperatorInput>;
  ip?: InputMaybe<IntQueryOperatorInput>;
  op?: InputMaybe<IntQueryOperatorInput>;
  w?: InputMaybe<IntQueryOperatorInput>;
  h?: InputMaybe<IntQueryOperatorInput>;
  nm?: InputMaybe<StringQueryOperatorInput>;
  ddd?: InputMaybe<IntQueryOperatorInput>;
  layers?: InputMaybe<AnimationsJsonLayersFilterListInput>;
};


export type QueryAllAnimationsJsonArgs = {
  filter?: InputMaybe<AnimationsJsonFilterInput>;
  sort?: InputMaybe<AnimationsJsonSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['String']>;
  readonly ne?: InputMaybe<Scalars['String']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly regex?: InputMaybe<Scalars['String']>;
  readonly glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['Int']>;
  readonly ne?: InputMaybe<Scalars['Int']>;
  readonly gt?: InputMaybe<Scalars['Int']>;
  readonly gte?: InputMaybe<Scalars['Int']>;
  readonly lt?: InputMaybe<Scalars['Int']>;
  readonly lte?: InputMaybe<Scalars['Int']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['Date']>;
  readonly ne?: InputMaybe<Scalars['Date']>;
  readonly gt?: InputMaybe<Scalars['Date']>;
  readonly gte?: InputMaybe<Scalars['Date']>;
  readonly lt?: InputMaybe<Scalars['Date']>;
  readonly lte?: InputMaybe<Scalars['Date']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['Float']>;
  readonly ne?: InputMaybe<Scalars['Float']>;
  readonly gt?: InputMaybe<Scalars['Float']>;
  readonly gte?: InputMaybe<Scalars['Float']>;
  readonly lt?: InputMaybe<Scalars['Float']>;
  readonly lte?: InputMaybe<Scalars['Float']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  readonly elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  readonly fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  readonly fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  readonly original?: InputMaybe<ImageSharpOriginalFilterInput>;
  readonly resize?: InputMaybe<ImageSharpResizeFilterInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  readonly base64?: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  readonly aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  readonly width?: InputMaybe<FloatQueryOperatorInput>;
  readonly height?: InputMaybe<FloatQueryOperatorInput>;
  readonly src?: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet?: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp?: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  readonly originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  readonly base64?: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  readonly aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  readonly src?: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet?: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp?: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  readonly sizes?: InputMaybe<StringQueryOperatorInput>;
  readonly originalImg?: InputMaybe<StringQueryOperatorInput>;
  readonly originalName?: InputMaybe<StringQueryOperatorInput>;
  readonly presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  readonly presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['JSON']>;
  readonly ne?: InputMaybe<Scalars['JSON']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly regex?: InputMaybe<Scalars['JSON']>;
  readonly glob?: InputMaybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  readonly width?: InputMaybe<FloatQueryOperatorInput>;
  readonly height?: InputMaybe<FloatQueryOperatorInput>;
  readonly src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  readonly src?: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  readonly width?: InputMaybe<IntQueryOperatorInput>;
  readonly height?: InputMaybe<IntQueryOperatorInput>;
  readonly aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  readonly originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  readonly elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  readonly content?: InputMaybe<StringQueryOperatorInput>;
  readonly contentDigest?: InputMaybe<StringQueryOperatorInput>;
  readonly description?: InputMaybe<StringQueryOperatorInput>;
  readonly fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  readonly ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  readonly mediaType?: InputMaybe<StringQueryOperatorInput>;
  readonly owner?: InputMaybe<StringQueryOperatorInput>;
  readonly type?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['Boolean']>;
  readonly ne?: InputMaybe<Scalars['Boolean']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
};

export type PageDocFilterListInput = {
  readonly elemMatch?: InputMaybe<PageDocFilterInput>;
};

export type PageDocFilterInput = {
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly title?: InputMaybe<StringQueryOperatorInput>;
  readonly description?: InputMaybe<StringQueryOperatorInput>;
  readonly image?: InputMaybe<FileFilterInput>;
  readonly video?: InputMaybe<FileFilterInput>;
  readonly animation?: InputMaybe<FileFilterInput>;
  readonly fileInformation?: InputMaybe<PageDocFileInformationFilterInput>;
};

export type FileFilterInput = {
  readonly sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  readonly absolutePath?: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath?: InputMaybe<StringQueryOperatorInput>;
  readonly extension?: InputMaybe<StringQueryOperatorInput>;
  readonly size?: InputMaybe<IntQueryOperatorInput>;
  readonly prettySize?: InputMaybe<StringQueryOperatorInput>;
  readonly modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  readonly accessTime?: InputMaybe<DateQueryOperatorInput>;
  readonly changeTime?: InputMaybe<DateQueryOperatorInput>;
  readonly birthTime?: InputMaybe<DateQueryOperatorInput>;
  readonly root?: InputMaybe<StringQueryOperatorInput>;
  readonly dir?: InputMaybe<StringQueryOperatorInput>;
  readonly base?: InputMaybe<StringQueryOperatorInput>;
  readonly ext?: InputMaybe<StringQueryOperatorInput>;
  readonly name?: InputMaybe<StringQueryOperatorInput>;
  readonly relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  readonly dev?: InputMaybe<IntQueryOperatorInput>;
  readonly mode?: InputMaybe<IntQueryOperatorInput>;
  readonly nlink?: InputMaybe<IntQueryOperatorInput>;
  readonly uid?: InputMaybe<IntQueryOperatorInput>;
  readonly gid?: InputMaybe<IntQueryOperatorInput>;
  readonly rdev?: InputMaybe<IntQueryOperatorInput>;
  readonly ino?: InputMaybe<FloatQueryOperatorInput>;
  readonly atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly atime?: InputMaybe<DateQueryOperatorInput>;
  readonly mtime?: InputMaybe<DateQueryOperatorInput>;
  readonly ctime?: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime?: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly blksize?: InputMaybe<IntQueryOperatorInput>;
  readonly blocks?: InputMaybe<IntQueryOperatorInput>;
  readonly publicURL?: InputMaybe<StringQueryOperatorInput>;
  readonly childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  readonly childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  readonly childrenPageDoc?: InputMaybe<PageDocFilterListInput>;
  readonly childPageDoc?: InputMaybe<PageDocFilterInput>;
  readonly childrenImagesJson?: InputMaybe<ImagesJsonFilterListInput>;
  readonly childImagesJson?: InputMaybe<ImagesJsonFilterInput>;
  readonly childrenDocsJson?: InputMaybe<DocsJsonFilterListInput>;
  readonly childDocsJson?: InputMaybe<DocsJsonFilterInput>;
  readonly childrenAnimationsJson?: InputMaybe<AnimationsJsonFilterListInput>;
  readonly childAnimationsJson?: InputMaybe<AnimationsJsonFilterInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
};

export type ImagesJsonFilterListInput = {
  readonly elemMatch?: InputMaybe<ImagesJsonFilterInput>;
};

export type ImagesJsonFilterInput = {
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly v?: InputMaybe<StringQueryOperatorInput>;
  readonly fr?: InputMaybe<IntQueryOperatorInput>;
  readonly ip?: InputMaybe<IntQueryOperatorInput>;
  readonly op?: InputMaybe<IntQueryOperatorInput>;
  readonly w?: InputMaybe<IntQueryOperatorInput>;
  readonly h?: InputMaybe<IntQueryOperatorInput>;
  readonly nm?: InputMaybe<StringQueryOperatorInput>;
  readonly ddd?: InputMaybe<IntQueryOperatorInput>;
  readonly assets?: InputMaybe<ImagesJsonAssetsFilterListInput>;
  readonly layers?: InputMaybe<ImagesJsonLayersFilterListInput>;
};

export type ImagesJsonAssetsFilterListInput = {
  readonly elemMatch?: InputMaybe<ImagesJsonAssetsFilterInput>;
};

export type ImagesJsonAssetsFilterInput = {
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly layers?: InputMaybe<ImagesJsonAssetsLayersFilterListInput>;
};

export type ImagesJsonAssetsLayersFilterListInput = {
  readonly elemMatch?: InputMaybe<ImagesJsonAssetsLayersFilterInput>;
};

export type ImagesJsonAssetsLayersFilterInput = {
  readonly ddd?: InputMaybe<IntQueryOperatorInput>;
  readonly ind?: InputMaybe<IntQueryOperatorInput>;
  readonly ty?: InputMaybe<IntQueryOperatorInput>;
  readonly nm?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<IntQueryOperatorInput>;
  readonly sr?: InputMaybe<IntQueryOperatorInput>;
  readonly ks?: InputMaybe<ImagesJsonAssetsLayersKsFilterInput>;
  readonly ao?: InputMaybe<IntQueryOperatorInput>;
  readonly hasMask?: InputMaybe<BooleanQueryOperatorInput>;
  readonly masksProperties?: InputMaybe<ImagesJsonAssetsLayersMasksPropertiesFilterListInput>;
  readonly shapes?: InputMaybe<ImagesJsonAssetsLayersShapesFilterListInput>;
  readonly ip?: InputMaybe<IntQueryOperatorInput>;
  readonly op?: InputMaybe<IntQueryOperatorInput>;
  readonly st?: InputMaybe<IntQueryOperatorInput>;
  readonly bm?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersKsFilterInput = {
  readonly o?: InputMaybe<ImagesJsonAssetsLayersKsOFilterInput>;
  readonly r?: InputMaybe<ImagesJsonAssetsLayersKsRFilterInput>;
  readonly p?: InputMaybe<ImagesJsonAssetsLayersKsPFilterInput>;
  readonly a?: InputMaybe<ImagesJsonAssetsLayersKsAFilterInput>;
  readonly s?: InputMaybe<ImagesJsonAssetsLayersKsSFilterInput>;
};

export type ImagesJsonAssetsLayersKsOFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersKsRFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersKsPFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
  readonly l?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersKsAFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
  readonly l?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersKsSFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
  readonly l?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersMasksPropertiesFilterListInput = {
  readonly elemMatch?: InputMaybe<ImagesJsonAssetsLayersMasksPropertiesFilterInput>;
};

export type ImagesJsonAssetsLayersMasksPropertiesFilterInput = {
  readonly inv?: InputMaybe<BooleanQueryOperatorInput>;
  readonly mode?: InputMaybe<StringQueryOperatorInput>;
  readonly pt?: InputMaybe<ImagesJsonAssetsLayersMasksPropertiesPtFilterInput>;
  readonly o?: InputMaybe<ImagesJsonAssetsLayersMasksPropertiesOFilterInput>;
  readonly x?: InputMaybe<ImagesJsonAssetsLayersMasksPropertiesXFilterInput>;
  readonly nm?: InputMaybe<StringQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersMasksPropertiesPtFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<ImagesJsonAssetsLayersMasksPropertiesPtKFilterInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersMasksPropertiesPtKFilterInput = {
  readonly i?: InputMaybe<FloatQueryOperatorInput>;
  readonly o?: InputMaybe<FloatQueryOperatorInput>;
  readonly v?: InputMaybe<FloatQueryOperatorInput>;
  readonly c?: InputMaybe<BooleanQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersMasksPropertiesOFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersMasksPropertiesXFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesFilterListInput = {
  readonly elemMatch?: InputMaybe<ImagesJsonAssetsLayersShapesFilterInput>;
};

export type ImagesJsonAssetsLayersShapesFilterInput = {
  readonly ty?: InputMaybe<StringQueryOperatorInput>;
  readonly it?: InputMaybe<ImagesJsonAssetsLayersShapesItFilterListInput>;
  readonly nm?: InputMaybe<StringQueryOperatorInput>;
  readonly np?: InputMaybe<IntQueryOperatorInput>;
  readonly cix?: InputMaybe<IntQueryOperatorInput>;
  readonly bm?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
  readonly mn?: InputMaybe<StringQueryOperatorInput>;
  readonly hd?: InputMaybe<BooleanQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItFilterListInput = {
  readonly elemMatch?: InputMaybe<ImagesJsonAssetsLayersShapesItFilterInput>;
};

export type ImagesJsonAssetsLayersShapesItFilterInput = {
  readonly ty?: InputMaybe<StringQueryOperatorInput>;
  readonly it?: InputMaybe<ImagesJsonAssetsLayersShapesItItFilterListInput>;
  readonly nm?: InputMaybe<StringQueryOperatorInput>;
  readonly np?: InputMaybe<IntQueryOperatorInput>;
  readonly cix?: InputMaybe<IntQueryOperatorInput>;
  readonly bm?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
  readonly mn?: InputMaybe<StringQueryOperatorInput>;
  readonly hd?: InputMaybe<BooleanQueryOperatorInput>;
  readonly p?: InputMaybe<ImagesJsonAssetsLayersShapesItPFilterInput>;
  readonly a?: InputMaybe<ImagesJsonAssetsLayersShapesItAFilterInput>;
  readonly s?: InputMaybe<ImagesJsonAssetsLayersShapesItSFilterInput>;
  readonly o?: InputMaybe<ImagesJsonAssetsLayersShapesItOFilterInput>;
  readonly sk?: InputMaybe<ImagesJsonAssetsLayersShapesItSkFilterInput>;
  readonly sa?: InputMaybe<ImagesJsonAssetsLayersShapesItSaFilterInput>;
  readonly d?: InputMaybe<IntQueryOperatorInput>;
  readonly c?: InputMaybe<ImagesJsonAssetsLayersShapesItCFilterInput>;
  readonly ind?: InputMaybe<IntQueryOperatorInput>;
  readonly ks?: InputMaybe<ImagesJsonAssetsLayersShapesItKsFilterInput>;
};

export type ImagesJsonAssetsLayersShapesItItFilterListInput = {
  readonly elemMatch?: InputMaybe<ImagesJsonAssetsLayersShapesItItFilterInput>;
};

export type ImagesJsonAssetsLayersShapesItItFilterInput = {
  readonly ty?: InputMaybe<StringQueryOperatorInput>;
  readonly it?: InputMaybe<ImagesJsonAssetsLayersShapesItItItFilterListInput>;
  readonly nm?: InputMaybe<StringQueryOperatorInput>;
  readonly np?: InputMaybe<IntQueryOperatorInput>;
  readonly cix?: InputMaybe<IntQueryOperatorInput>;
  readonly bm?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
  readonly mn?: InputMaybe<StringQueryOperatorInput>;
  readonly hd?: InputMaybe<BooleanQueryOperatorInput>;
  readonly p?: InputMaybe<ImagesJsonAssetsLayersShapesItItPFilterInput>;
  readonly a?: InputMaybe<ImagesJsonAssetsLayersShapesItItAFilterInput>;
  readonly s?: InputMaybe<ImagesJsonAssetsLayersShapesItItSFilterInput>;
  readonly o?: InputMaybe<ImagesJsonAssetsLayersShapesItItOFilterInput>;
  readonly sk?: InputMaybe<ImagesJsonAssetsLayersShapesItItSkFilterInput>;
  readonly sa?: InputMaybe<ImagesJsonAssetsLayersShapesItItSaFilterInput>;
  readonly ind?: InputMaybe<IntQueryOperatorInput>;
  readonly ks?: InputMaybe<ImagesJsonAssetsLayersShapesItItKsFilterInput>;
  readonly c?: InputMaybe<ImagesJsonAssetsLayersShapesItItCFilterInput>;
};

export type ImagesJsonAssetsLayersShapesItItItFilterListInput = {
  readonly elemMatch?: InputMaybe<ImagesJsonAssetsLayersShapesItItItFilterInput>;
};

export type ImagesJsonAssetsLayersShapesItItItFilterInput = {
  readonly ind?: InputMaybe<IntQueryOperatorInput>;
  readonly ty?: InputMaybe<StringQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
  readonly ks?: InputMaybe<ImagesJsonAssetsLayersShapesItItItKsFilterInput>;
  readonly nm?: InputMaybe<StringQueryOperatorInput>;
  readonly mn?: InputMaybe<StringQueryOperatorInput>;
  readonly hd?: InputMaybe<BooleanQueryOperatorInput>;
  readonly c?: InputMaybe<ImagesJsonAssetsLayersShapesItItItCFilterInput>;
  readonly o?: InputMaybe<ImagesJsonAssetsLayersShapesItItItOFilterInput>;
  readonly bm?: InputMaybe<IntQueryOperatorInput>;
  readonly p?: InputMaybe<ImagesJsonAssetsLayersShapesItItItPFilterInput>;
  readonly a?: InputMaybe<ImagesJsonAssetsLayersShapesItItItAFilterInput>;
  readonly s?: InputMaybe<ImagesJsonAssetsLayersShapesItItItSFilterInput>;
  readonly sk?: InputMaybe<ImagesJsonAssetsLayersShapesItItItSkFilterInput>;
  readonly sa?: InputMaybe<ImagesJsonAssetsLayersShapesItItItSaFilterInput>;
};

export type ImagesJsonAssetsLayersShapesItItItKsFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<ImagesJsonAssetsLayersShapesItItItKsKFilterInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItItItKsKFilterInput = {
  readonly i?: InputMaybe<FloatQueryOperatorInput>;
  readonly o?: InputMaybe<FloatQueryOperatorInput>;
  readonly v?: InputMaybe<FloatQueryOperatorInput>;
  readonly c?: InputMaybe<BooleanQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItItItCFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItItItOFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItItItPFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItItItAFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItItItSFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItItItSkFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItItItSaFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItItPFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItItAFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItItSFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItItOFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItItSkFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItItSaFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItItKsFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<ImagesJsonAssetsLayersShapesItItKsKFilterInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItItKsKFilterInput = {
  readonly i?: InputMaybe<FloatQueryOperatorInput>;
  readonly o?: InputMaybe<FloatQueryOperatorInput>;
  readonly v?: InputMaybe<FloatQueryOperatorInput>;
  readonly c?: InputMaybe<BooleanQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItItCFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItPFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItAFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItSFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItOFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItSkFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItSaFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItCFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItKsFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<ImagesJsonAssetsLayersShapesItKsKFilterInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonAssetsLayersShapesItKsKFilterInput = {
  readonly i?: InputMaybe<FloatQueryOperatorInput>;
  readonly o?: InputMaybe<FloatQueryOperatorInput>;
  readonly v?: InputMaybe<FloatQueryOperatorInput>;
  readonly c?: InputMaybe<BooleanQueryOperatorInput>;
};

export type ImagesJsonLayersFilterListInput = {
  readonly elemMatch?: InputMaybe<ImagesJsonLayersFilterInput>;
};

export type ImagesJsonLayersFilterInput = {
  readonly ddd?: InputMaybe<IntQueryOperatorInput>;
  readonly ind?: InputMaybe<IntQueryOperatorInput>;
  readonly ty?: InputMaybe<IntQueryOperatorInput>;
  readonly nm?: InputMaybe<StringQueryOperatorInput>;
  readonly sr?: InputMaybe<IntQueryOperatorInput>;
  readonly ks?: InputMaybe<ImagesJsonLayersKsFilterInput>;
  readonly ao?: InputMaybe<IntQueryOperatorInput>;
  readonly ip?: InputMaybe<IntQueryOperatorInput>;
  readonly op?: InputMaybe<IntQueryOperatorInput>;
  readonly st?: InputMaybe<IntQueryOperatorInput>;
  readonly bm?: InputMaybe<IntQueryOperatorInput>;
  readonly parent?: InputMaybe<IntQueryOperatorInput>;
  readonly shapes?: InputMaybe<ImagesJsonLayersShapesFilterListInput>;
  readonly refId?: InputMaybe<StringQueryOperatorInput>;
  readonly w?: InputMaybe<IntQueryOperatorInput>;
  readonly h?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersKsFilterInput = {
  readonly o?: InputMaybe<ImagesJsonLayersKsOFilterInput>;
  readonly r?: InputMaybe<ImagesJsonLayersKsRFilterInput>;
  readonly p?: InputMaybe<ImagesJsonLayersKsPFilterInput>;
  readonly a?: InputMaybe<ImagesJsonLayersKsAFilterInput>;
  readonly s?: InputMaybe<ImagesJsonLayersKsSFilterInput>;
};

export type ImagesJsonLayersKsOFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersKsRFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersKsPFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
  readonly l?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersKsAFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
  readonly l?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersKsSFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
  readonly l?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersShapesFilterListInput = {
  readonly elemMatch?: InputMaybe<ImagesJsonLayersShapesFilterInput>;
};

export type ImagesJsonLayersShapesFilterInput = {
  readonly ty?: InputMaybe<StringQueryOperatorInput>;
  readonly it?: InputMaybe<ImagesJsonLayersShapesItFilterListInput>;
  readonly nm?: InputMaybe<StringQueryOperatorInput>;
  readonly np?: InputMaybe<IntQueryOperatorInput>;
  readonly cix?: InputMaybe<IntQueryOperatorInput>;
  readonly bm?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
  readonly mn?: InputMaybe<StringQueryOperatorInput>;
  readonly hd?: InputMaybe<BooleanQueryOperatorInput>;
};

export type ImagesJsonLayersShapesItFilterListInput = {
  readonly elemMatch?: InputMaybe<ImagesJsonLayersShapesItFilterInput>;
};

export type ImagesJsonLayersShapesItFilterInput = {
  readonly ind?: InputMaybe<IntQueryOperatorInput>;
  readonly ty?: InputMaybe<StringQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
  readonly ks?: InputMaybe<ImagesJsonLayersShapesItKsFilterInput>;
  readonly nm?: InputMaybe<StringQueryOperatorInput>;
  readonly mn?: InputMaybe<StringQueryOperatorInput>;
  readonly hd?: InputMaybe<BooleanQueryOperatorInput>;
  readonly c?: InputMaybe<ImagesJsonLayersShapesItCFilterInput>;
  readonly o?: InputMaybe<ImagesJsonLayersShapesItOFilterInput>;
  readonly bm?: InputMaybe<IntQueryOperatorInput>;
  readonly p?: InputMaybe<ImagesJsonLayersShapesItPFilterInput>;
  readonly a?: InputMaybe<ImagesJsonLayersShapesItAFilterInput>;
  readonly s?: InputMaybe<ImagesJsonLayersShapesItSFilterInput>;
  readonly sk?: InputMaybe<ImagesJsonLayersShapesItSkFilterInput>;
  readonly sa?: InputMaybe<ImagesJsonLayersShapesItSaFilterInput>;
  readonly it?: InputMaybe<ImagesJsonLayersShapesItItFilterListInput>;
  readonly np?: InputMaybe<IntQueryOperatorInput>;
  readonly cix?: InputMaybe<IntQueryOperatorInput>;
  readonly w?: InputMaybe<ImagesJsonLayersShapesItWFilterInput>;
  readonly lc?: InputMaybe<IntQueryOperatorInput>;
  readonly lj?: InputMaybe<IntQueryOperatorInput>;
  readonly mm?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersShapesItKsFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersShapesItCFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersShapesItOFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersShapesItPFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersShapesItAFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersShapesItSFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersShapesItSkFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersShapesItSaFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersShapesItItFilterListInput = {
  readonly elemMatch?: InputMaybe<ImagesJsonLayersShapesItItFilterInput>;
};

export type ImagesJsonLayersShapesItItFilterInput = {
  readonly ind?: InputMaybe<IntQueryOperatorInput>;
  readonly ty?: InputMaybe<StringQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
  readonly ks?: InputMaybe<ImagesJsonLayersShapesItItKsFilterInput>;
  readonly nm?: InputMaybe<StringQueryOperatorInput>;
  readonly mn?: InputMaybe<StringQueryOperatorInput>;
  readonly hd?: InputMaybe<BooleanQueryOperatorInput>;
  readonly c?: InputMaybe<ImagesJsonLayersShapesItItCFilterInput>;
  readonly o?: InputMaybe<ImagesJsonLayersShapesItItOFilterInput>;
  readonly bm?: InputMaybe<IntQueryOperatorInput>;
  readonly p?: InputMaybe<ImagesJsonLayersShapesItItPFilterInput>;
  readonly a?: InputMaybe<ImagesJsonLayersShapesItItAFilterInput>;
  readonly s?: InputMaybe<ImagesJsonLayersShapesItItSFilterInput>;
  readonly sk?: InputMaybe<ImagesJsonLayersShapesItItSkFilterInput>;
  readonly sa?: InputMaybe<ImagesJsonLayersShapesItItSaFilterInput>;
};

export type ImagesJsonLayersShapesItItKsFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<ImagesJsonLayersShapesItItKsKFilterInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersShapesItItKsKFilterInput = {
  readonly i?: InputMaybe<IntQueryOperatorInput>;
  readonly o?: InputMaybe<IntQueryOperatorInput>;
  readonly v?: InputMaybe<FloatQueryOperatorInput>;
  readonly c?: InputMaybe<BooleanQueryOperatorInput>;
};

export type ImagesJsonLayersShapesItItCFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersShapesItItOFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersShapesItItPFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersShapesItItAFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersShapesItItSFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersShapesItItSkFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersShapesItItSaFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type ImagesJsonLayersShapesItWFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
  readonly ix?: InputMaybe<IntQueryOperatorInput>;
};

export type DocsJsonFilterListInput = {
  readonly elemMatch?: InputMaybe<DocsJsonFilterInput>;
};

export type DocsJsonFilterInput = {
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly type?: InputMaybe<StringQueryOperatorInput>;
  readonly module?: InputMaybe<DocsJsonModuleFilterInput>;
};

export type DocsJsonModuleFilterInput = {
  readonly title?: InputMaybe<StringQueryOperatorInput>;
  readonly description?: InputMaybe<StringQueryOperatorInput>;
  readonly image?: InputMaybe<FileFilterInput>;
  readonly video?: InputMaybe<FileFilterInput>;
  readonly animation?: InputMaybe<FileFilterInput>;
};

export type AnimationsJsonFilterListInput = {
  readonly elemMatch?: InputMaybe<AnimationsJsonFilterInput>;
};

export type AnimationsJsonFilterInput = {
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly tgs?: InputMaybe<IntQueryOperatorInput>;
  readonly v?: InputMaybe<StringQueryOperatorInput>;
  readonly fr?: InputMaybe<IntQueryOperatorInput>;
  readonly ip?: InputMaybe<IntQueryOperatorInput>;
  readonly op?: InputMaybe<IntQueryOperatorInput>;
  readonly w?: InputMaybe<IntQueryOperatorInput>;
  readonly h?: InputMaybe<IntQueryOperatorInput>;
  readonly nm?: InputMaybe<StringQueryOperatorInput>;
  readonly ddd?: InputMaybe<IntQueryOperatorInput>;
  readonly layers?: InputMaybe<AnimationsJsonLayersFilterListInput>;
};

export type AnimationsJsonLayersFilterListInput = {
  readonly elemMatch?: InputMaybe<AnimationsJsonLayersFilterInput>;
};

export type AnimationsJsonLayersFilterInput = {
  readonly ddd?: InputMaybe<IntQueryOperatorInput>;
  readonly ind?: InputMaybe<IntQueryOperatorInput>;
  readonly ty?: InputMaybe<IntQueryOperatorInput>;
  readonly nm?: InputMaybe<StringQueryOperatorInput>;
  readonly sr?: InputMaybe<IntQueryOperatorInput>;
  readonly ks?: InputMaybe<AnimationsJsonLayersKsFilterInput>;
  readonly ao?: InputMaybe<IntQueryOperatorInput>;
  readonly shapes?: InputMaybe<AnimationsJsonLayersShapesFilterListInput>;
  readonly ip?: InputMaybe<IntQueryOperatorInput>;
  readonly op?: InputMaybe<IntQueryOperatorInput>;
  readonly st?: InputMaybe<IntQueryOperatorInput>;
  readonly bm?: InputMaybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersKsFilterInput = {
  readonly o?: InputMaybe<AnimationsJsonLayersKsOFilterInput>;
  readonly r?: InputMaybe<AnimationsJsonLayersKsRFilterInput>;
  readonly p?: InputMaybe<AnimationsJsonLayersKsPFilterInput>;
  readonly a?: InputMaybe<AnimationsJsonLayersKsAFilterInput>;
  readonly s?: InputMaybe<AnimationsJsonLayersKsSFilterInput>;
};

export type AnimationsJsonLayersKsOFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersKsRFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersKsPFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersKsAFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
};

export type AnimationsJsonLayersKsSFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesFilterListInput = {
  readonly elemMatch?: InputMaybe<AnimationsJsonLayersShapesFilterInput>;
};

export type AnimationsJsonLayersShapesFilterInput = {
  readonly ty?: InputMaybe<StringQueryOperatorInput>;
  readonly it?: InputMaybe<AnimationsJsonLayersShapesItFilterListInput>;
  readonly nm?: InputMaybe<StringQueryOperatorInput>;
  readonly bm?: InputMaybe<IntQueryOperatorInput>;
  readonly hd?: InputMaybe<BooleanQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItFilterListInput = {
  readonly elemMatch?: InputMaybe<AnimationsJsonLayersShapesItFilterInput>;
};

export type AnimationsJsonLayersShapesItFilterInput = {
  readonly ind?: InputMaybe<IntQueryOperatorInput>;
  readonly ty?: InputMaybe<StringQueryOperatorInput>;
  readonly ks?: InputMaybe<AnimationsJsonLayersShapesItKsFilterInput>;
  readonly nm?: InputMaybe<StringQueryOperatorInput>;
  readonly hd?: InputMaybe<BooleanQueryOperatorInput>;
  readonly c?: InputMaybe<AnimationsJsonLayersShapesItCFilterInput>;
  readonly o?: InputMaybe<AnimationsJsonLayersShapesItOFilterInput>;
  readonly w?: InputMaybe<AnimationsJsonLayersShapesItWFilterInput>;
  readonly lc?: InputMaybe<IntQueryOperatorInput>;
  readonly lj?: InputMaybe<IntQueryOperatorInput>;
  readonly bm?: InputMaybe<IntQueryOperatorInput>;
  readonly p?: InputMaybe<AnimationsJsonLayersShapesItPFilterInput>;
  readonly a?: InputMaybe<AnimationsJsonLayersShapesItAFilterInput>;
  readonly s?: InputMaybe<AnimationsJsonLayersShapesItSFilterInput>;
  readonly sk?: InputMaybe<AnimationsJsonLayersShapesItSkFilterInput>;
  readonly sa?: InputMaybe<AnimationsJsonLayersShapesItSaFilterInput>;
  readonly ml?: InputMaybe<FloatQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItKsFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItCFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItOFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItWFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<FloatQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItPFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItAFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItSFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItSkFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItSaFilterInput = {
  readonly a?: InputMaybe<IntQueryOperatorInput>;
  readonly k?: InputMaybe<IntQueryOperatorInput>;
};

export type PageDocFileInformationFilterInput = {
  readonly relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  readonly name?: InputMaybe<StringQueryOperatorInput>;
  readonly ext?: InputMaybe<StringQueryOperatorInput>;
  readonly extension?: InputMaybe<StringQueryOperatorInput>;
};

export type FileConnection = {
  readonly __typename?: 'FileConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  readonly __typename?: 'FileEdge';
  readonly next?: Maybe<File>;
  readonly node: File;
  readonly previous?: Maybe<File>;
};

export type PageInfo = {
  readonly __typename?: 'PageInfo';
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage?: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childrenPageDoc'
  | 'childrenPageDoc___id'
  | 'childrenPageDoc___parent___id'
  | 'childrenPageDoc___parent___parent___id'
  | 'childrenPageDoc___parent___parent___children'
  | 'childrenPageDoc___parent___children'
  | 'childrenPageDoc___parent___children___id'
  | 'childrenPageDoc___parent___children___children'
  | 'childrenPageDoc___parent___internal___content'
  | 'childrenPageDoc___parent___internal___contentDigest'
  | 'childrenPageDoc___parent___internal___description'
  | 'childrenPageDoc___parent___internal___fieldOwners'
  | 'childrenPageDoc___parent___internal___ignoreType'
  | 'childrenPageDoc___parent___internal___mediaType'
  | 'childrenPageDoc___parent___internal___owner'
  | 'childrenPageDoc___parent___internal___type'
  | 'childrenPageDoc___children'
  | 'childrenPageDoc___children___id'
  | 'childrenPageDoc___children___parent___id'
  | 'childrenPageDoc___children___parent___children'
  | 'childrenPageDoc___children___children'
  | 'childrenPageDoc___children___children___id'
  | 'childrenPageDoc___children___children___children'
  | 'childrenPageDoc___children___internal___content'
  | 'childrenPageDoc___children___internal___contentDigest'
  | 'childrenPageDoc___children___internal___description'
  | 'childrenPageDoc___children___internal___fieldOwners'
  | 'childrenPageDoc___children___internal___ignoreType'
  | 'childrenPageDoc___children___internal___mediaType'
  | 'childrenPageDoc___children___internal___owner'
  | 'childrenPageDoc___children___internal___type'
  | 'childrenPageDoc___internal___content'
  | 'childrenPageDoc___internal___contentDigest'
  | 'childrenPageDoc___internal___description'
  | 'childrenPageDoc___internal___fieldOwners'
  | 'childrenPageDoc___internal___ignoreType'
  | 'childrenPageDoc___internal___mediaType'
  | 'childrenPageDoc___internal___owner'
  | 'childrenPageDoc___internal___type'
  | 'childrenPageDoc___title'
  | 'childrenPageDoc___description'
  | 'childrenPageDoc___image___sourceInstanceName'
  | 'childrenPageDoc___image___absolutePath'
  | 'childrenPageDoc___image___relativePath'
  | 'childrenPageDoc___image___extension'
  | 'childrenPageDoc___image___size'
  | 'childrenPageDoc___image___prettySize'
  | 'childrenPageDoc___image___modifiedTime'
  | 'childrenPageDoc___image___accessTime'
  | 'childrenPageDoc___image___changeTime'
  | 'childrenPageDoc___image___birthTime'
  | 'childrenPageDoc___image___root'
  | 'childrenPageDoc___image___dir'
  | 'childrenPageDoc___image___base'
  | 'childrenPageDoc___image___ext'
  | 'childrenPageDoc___image___name'
  | 'childrenPageDoc___image___relativeDirectory'
  | 'childrenPageDoc___image___dev'
  | 'childrenPageDoc___image___mode'
  | 'childrenPageDoc___image___nlink'
  | 'childrenPageDoc___image___uid'
  | 'childrenPageDoc___image___gid'
  | 'childrenPageDoc___image___rdev'
  | 'childrenPageDoc___image___ino'
  | 'childrenPageDoc___image___atimeMs'
  | 'childrenPageDoc___image___mtimeMs'
  | 'childrenPageDoc___image___ctimeMs'
  | 'childrenPageDoc___image___atime'
  | 'childrenPageDoc___image___mtime'
  | 'childrenPageDoc___image___ctime'
  | 'childrenPageDoc___image___birthtime'
  | 'childrenPageDoc___image___birthtimeMs'
  | 'childrenPageDoc___image___blksize'
  | 'childrenPageDoc___image___blocks'
  | 'childrenPageDoc___image___publicURL'
  | 'childrenPageDoc___image___childrenImageSharp'
  | 'childrenPageDoc___image___childrenImageSharp___gatsbyImageData'
  | 'childrenPageDoc___image___childrenImageSharp___id'
  | 'childrenPageDoc___image___childrenImageSharp___children'
  | 'childrenPageDoc___image___childImageSharp___gatsbyImageData'
  | 'childrenPageDoc___image___childImageSharp___id'
  | 'childrenPageDoc___image___childImageSharp___children'
  | 'childrenPageDoc___image___childrenPageDoc'
  | 'childrenPageDoc___image___childrenPageDoc___id'
  | 'childrenPageDoc___image___childrenPageDoc___children'
  | 'childrenPageDoc___image___childrenPageDoc___title'
  | 'childrenPageDoc___image___childrenPageDoc___description'
  | 'childrenPageDoc___image___childPageDoc___id'
  | 'childrenPageDoc___image___childPageDoc___children'
  | 'childrenPageDoc___image___childPageDoc___title'
  | 'childrenPageDoc___image___childPageDoc___description'
  | 'childrenPageDoc___image___childrenImagesJson'
  | 'childrenPageDoc___image___childrenImagesJson___id'
  | 'childrenPageDoc___image___childrenImagesJson___children'
  | 'childrenPageDoc___image___childrenImagesJson___v'
  | 'childrenPageDoc___image___childrenImagesJson___fr'
  | 'childrenPageDoc___image___childrenImagesJson___ip'
  | 'childrenPageDoc___image___childrenImagesJson___op'
  | 'childrenPageDoc___image___childrenImagesJson___w'
  | 'childrenPageDoc___image___childrenImagesJson___h'
  | 'childrenPageDoc___image___childrenImagesJson___nm'
  | 'childrenPageDoc___image___childrenImagesJson___ddd'
  | 'childrenPageDoc___image___childrenImagesJson___assets'
  | 'childrenPageDoc___image___childrenImagesJson___layers'
  | 'childrenPageDoc___image___childImagesJson___id'
  | 'childrenPageDoc___image___childImagesJson___children'
  | 'childrenPageDoc___image___childImagesJson___v'
  | 'childrenPageDoc___image___childImagesJson___fr'
  | 'childrenPageDoc___image___childImagesJson___ip'
  | 'childrenPageDoc___image___childImagesJson___op'
  | 'childrenPageDoc___image___childImagesJson___w'
  | 'childrenPageDoc___image___childImagesJson___h'
  | 'childrenPageDoc___image___childImagesJson___nm'
  | 'childrenPageDoc___image___childImagesJson___ddd'
  | 'childrenPageDoc___image___childImagesJson___assets'
  | 'childrenPageDoc___image___childImagesJson___layers'
  | 'childrenPageDoc___image___childrenDocsJson'
  | 'childrenPageDoc___image___childrenDocsJson___id'
  | 'childrenPageDoc___image___childrenDocsJson___children'
  | 'childrenPageDoc___image___childrenDocsJson___type'
  | 'childrenPageDoc___image___childDocsJson___id'
  | 'childrenPageDoc___image___childDocsJson___children'
  | 'childrenPageDoc___image___childDocsJson___type'
  | 'childrenPageDoc___image___childrenAnimationsJson'
  | 'childrenPageDoc___image___childrenAnimationsJson___id'
  | 'childrenPageDoc___image___childrenAnimationsJson___children'
  | 'childrenPageDoc___image___childrenAnimationsJson___tgs'
  | 'childrenPageDoc___image___childrenAnimationsJson___v'
  | 'childrenPageDoc___image___childrenAnimationsJson___fr'
  | 'childrenPageDoc___image___childrenAnimationsJson___ip'
  | 'childrenPageDoc___image___childrenAnimationsJson___op'
  | 'childrenPageDoc___image___childrenAnimationsJson___w'
  | 'childrenPageDoc___image___childrenAnimationsJson___h'
  | 'childrenPageDoc___image___childrenAnimationsJson___nm'
  | 'childrenPageDoc___image___childrenAnimationsJson___ddd'
  | 'childrenPageDoc___image___childrenAnimationsJson___layers'
  | 'childrenPageDoc___image___childAnimationsJson___id'
  | 'childrenPageDoc___image___childAnimationsJson___children'
  | 'childrenPageDoc___image___childAnimationsJson___tgs'
  | 'childrenPageDoc___image___childAnimationsJson___v'
  | 'childrenPageDoc___image___childAnimationsJson___fr'
  | 'childrenPageDoc___image___childAnimationsJson___ip'
  | 'childrenPageDoc___image___childAnimationsJson___op'
  | 'childrenPageDoc___image___childAnimationsJson___w'
  | 'childrenPageDoc___image___childAnimationsJson___h'
  | 'childrenPageDoc___image___childAnimationsJson___nm'
  | 'childrenPageDoc___image___childAnimationsJson___ddd'
  | 'childrenPageDoc___image___childAnimationsJson___layers'
  | 'childrenPageDoc___image___id'
  | 'childrenPageDoc___image___parent___id'
  | 'childrenPageDoc___image___parent___children'
  | 'childrenPageDoc___image___children'
  | 'childrenPageDoc___image___children___id'
  | 'childrenPageDoc___image___children___children'
  | 'childrenPageDoc___image___internal___content'
  | 'childrenPageDoc___image___internal___contentDigest'
  | 'childrenPageDoc___image___internal___description'
  | 'childrenPageDoc___image___internal___fieldOwners'
  | 'childrenPageDoc___image___internal___ignoreType'
  | 'childrenPageDoc___image___internal___mediaType'
  | 'childrenPageDoc___image___internal___owner'
  | 'childrenPageDoc___image___internal___type'
  | 'childrenPageDoc___video___sourceInstanceName'
  | 'childrenPageDoc___video___absolutePath'
  | 'childrenPageDoc___video___relativePath'
  | 'childrenPageDoc___video___extension'
  | 'childrenPageDoc___video___size'
  | 'childrenPageDoc___video___prettySize'
  | 'childrenPageDoc___video___modifiedTime'
  | 'childrenPageDoc___video___accessTime'
  | 'childrenPageDoc___video___changeTime'
  | 'childrenPageDoc___video___birthTime'
  | 'childrenPageDoc___video___root'
  | 'childrenPageDoc___video___dir'
  | 'childrenPageDoc___video___base'
  | 'childrenPageDoc___video___ext'
  | 'childrenPageDoc___video___name'
  | 'childrenPageDoc___video___relativeDirectory'
  | 'childrenPageDoc___video___dev'
  | 'childrenPageDoc___video___mode'
  | 'childrenPageDoc___video___nlink'
  | 'childrenPageDoc___video___uid'
  | 'childrenPageDoc___video___gid'
  | 'childrenPageDoc___video___rdev'
  | 'childrenPageDoc___video___ino'
  | 'childrenPageDoc___video___atimeMs'
  | 'childrenPageDoc___video___mtimeMs'
  | 'childrenPageDoc___video___ctimeMs'
  | 'childrenPageDoc___video___atime'
  | 'childrenPageDoc___video___mtime'
  | 'childrenPageDoc___video___ctime'
  | 'childrenPageDoc___video___birthtime'
  | 'childrenPageDoc___video___birthtimeMs'
  | 'childrenPageDoc___video___blksize'
  | 'childrenPageDoc___video___blocks'
  | 'childrenPageDoc___video___publicURL'
  | 'childrenPageDoc___video___childrenImageSharp'
  | 'childrenPageDoc___video___childrenImageSharp___gatsbyImageData'
  | 'childrenPageDoc___video___childrenImageSharp___id'
  | 'childrenPageDoc___video___childrenImageSharp___children'
  | 'childrenPageDoc___video___childImageSharp___gatsbyImageData'
  | 'childrenPageDoc___video___childImageSharp___id'
  | 'childrenPageDoc___video___childImageSharp___children'
  | 'childrenPageDoc___video___childrenPageDoc'
  | 'childrenPageDoc___video___childrenPageDoc___id'
  | 'childrenPageDoc___video___childrenPageDoc___children'
  | 'childrenPageDoc___video___childrenPageDoc___title'
  | 'childrenPageDoc___video___childrenPageDoc___description'
  | 'childrenPageDoc___video___childPageDoc___id'
  | 'childrenPageDoc___video___childPageDoc___children'
  | 'childrenPageDoc___video___childPageDoc___title'
  | 'childrenPageDoc___video___childPageDoc___description'
  | 'childrenPageDoc___video___childrenImagesJson'
  | 'childrenPageDoc___video___childrenImagesJson___id'
  | 'childrenPageDoc___video___childrenImagesJson___children'
  | 'childrenPageDoc___video___childrenImagesJson___v'
  | 'childrenPageDoc___video___childrenImagesJson___fr'
  | 'childrenPageDoc___video___childrenImagesJson___ip'
  | 'childrenPageDoc___video___childrenImagesJson___op'
  | 'childrenPageDoc___video___childrenImagesJson___w'
  | 'childrenPageDoc___video___childrenImagesJson___h'
  | 'childrenPageDoc___video___childrenImagesJson___nm'
  | 'childrenPageDoc___video___childrenImagesJson___ddd'
  | 'childrenPageDoc___video___childrenImagesJson___assets'
  | 'childrenPageDoc___video___childrenImagesJson___layers'
  | 'childrenPageDoc___video___childImagesJson___id'
  | 'childrenPageDoc___video___childImagesJson___children'
  | 'childrenPageDoc___video___childImagesJson___v'
  | 'childrenPageDoc___video___childImagesJson___fr'
  | 'childrenPageDoc___video___childImagesJson___ip'
  | 'childrenPageDoc___video___childImagesJson___op'
  | 'childrenPageDoc___video___childImagesJson___w'
  | 'childrenPageDoc___video___childImagesJson___h'
  | 'childrenPageDoc___video___childImagesJson___nm'
  | 'childrenPageDoc___video___childImagesJson___ddd'
  | 'childrenPageDoc___video___childImagesJson___assets'
  | 'childrenPageDoc___video___childImagesJson___layers'
  | 'childrenPageDoc___video___childrenDocsJson'
  | 'childrenPageDoc___video___childrenDocsJson___id'
  | 'childrenPageDoc___video___childrenDocsJson___children'
  | 'childrenPageDoc___video___childrenDocsJson___type'
  | 'childrenPageDoc___video___childDocsJson___id'
  | 'childrenPageDoc___video___childDocsJson___children'
  | 'childrenPageDoc___video___childDocsJson___type'
  | 'childrenPageDoc___video___childrenAnimationsJson'
  | 'childrenPageDoc___video___childrenAnimationsJson___id'
  | 'childrenPageDoc___video___childrenAnimationsJson___children'
  | 'childrenPageDoc___video___childrenAnimationsJson___tgs'
  | 'childrenPageDoc___video___childrenAnimationsJson___v'
  | 'childrenPageDoc___video___childrenAnimationsJson___fr'
  | 'childrenPageDoc___video___childrenAnimationsJson___ip'
  | 'childrenPageDoc___video___childrenAnimationsJson___op'
  | 'childrenPageDoc___video___childrenAnimationsJson___w'
  | 'childrenPageDoc___video___childrenAnimationsJson___h'
  | 'childrenPageDoc___video___childrenAnimationsJson___nm'
  | 'childrenPageDoc___video___childrenAnimationsJson___ddd'
  | 'childrenPageDoc___video___childrenAnimationsJson___layers'
  | 'childrenPageDoc___video___childAnimationsJson___id'
  | 'childrenPageDoc___video___childAnimationsJson___children'
  | 'childrenPageDoc___video___childAnimationsJson___tgs'
  | 'childrenPageDoc___video___childAnimationsJson___v'
  | 'childrenPageDoc___video___childAnimationsJson___fr'
  | 'childrenPageDoc___video___childAnimationsJson___ip'
  | 'childrenPageDoc___video___childAnimationsJson___op'
  | 'childrenPageDoc___video___childAnimationsJson___w'
  | 'childrenPageDoc___video___childAnimationsJson___h'
  | 'childrenPageDoc___video___childAnimationsJson___nm'
  | 'childrenPageDoc___video___childAnimationsJson___ddd'
  | 'childrenPageDoc___video___childAnimationsJson___layers'
  | 'childrenPageDoc___video___id'
  | 'childrenPageDoc___video___parent___id'
  | 'childrenPageDoc___video___parent___children'
  | 'childrenPageDoc___video___children'
  | 'childrenPageDoc___video___children___id'
  | 'childrenPageDoc___video___children___children'
  | 'childrenPageDoc___video___internal___content'
  | 'childrenPageDoc___video___internal___contentDigest'
  | 'childrenPageDoc___video___internal___description'
  | 'childrenPageDoc___video___internal___fieldOwners'
  | 'childrenPageDoc___video___internal___ignoreType'
  | 'childrenPageDoc___video___internal___mediaType'
  | 'childrenPageDoc___video___internal___owner'
  | 'childrenPageDoc___video___internal___type'
  | 'childrenPageDoc___animation___sourceInstanceName'
  | 'childrenPageDoc___animation___absolutePath'
  | 'childrenPageDoc___animation___relativePath'
  | 'childrenPageDoc___animation___extension'
  | 'childrenPageDoc___animation___size'
  | 'childrenPageDoc___animation___prettySize'
  | 'childrenPageDoc___animation___modifiedTime'
  | 'childrenPageDoc___animation___accessTime'
  | 'childrenPageDoc___animation___changeTime'
  | 'childrenPageDoc___animation___birthTime'
  | 'childrenPageDoc___animation___root'
  | 'childrenPageDoc___animation___dir'
  | 'childrenPageDoc___animation___base'
  | 'childrenPageDoc___animation___ext'
  | 'childrenPageDoc___animation___name'
  | 'childrenPageDoc___animation___relativeDirectory'
  | 'childrenPageDoc___animation___dev'
  | 'childrenPageDoc___animation___mode'
  | 'childrenPageDoc___animation___nlink'
  | 'childrenPageDoc___animation___uid'
  | 'childrenPageDoc___animation___gid'
  | 'childrenPageDoc___animation___rdev'
  | 'childrenPageDoc___animation___ino'
  | 'childrenPageDoc___animation___atimeMs'
  | 'childrenPageDoc___animation___mtimeMs'
  | 'childrenPageDoc___animation___ctimeMs'
  | 'childrenPageDoc___animation___atime'
  | 'childrenPageDoc___animation___mtime'
  | 'childrenPageDoc___animation___ctime'
  | 'childrenPageDoc___animation___birthtime'
  | 'childrenPageDoc___animation___birthtimeMs'
  | 'childrenPageDoc___animation___blksize'
  | 'childrenPageDoc___animation___blocks'
  | 'childrenPageDoc___animation___publicURL'
  | 'childrenPageDoc___animation___childrenImageSharp'
  | 'childrenPageDoc___animation___childrenImageSharp___gatsbyImageData'
  | 'childrenPageDoc___animation___childrenImageSharp___id'
  | 'childrenPageDoc___animation___childrenImageSharp___children'
  | 'childrenPageDoc___animation___childImageSharp___gatsbyImageData'
  | 'childrenPageDoc___animation___childImageSharp___id'
  | 'childrenPageDoc___animation___childImageSharp___children'
  | 'childrenPageDoc___animation___childrenPageDoc'
  | 'childrenPageDoc___animation___childrenPageDoc___id'
  | 'childrenPageDoc___animation___childrenPageDoc___children'
  | 'childrenPageDoc___animation___childrenPageDoc___title'
  | 'childrenPageDoc___animation___childrenPageDoc___description'
  | 'childrenPageDoc___animation___childPageDoc___id'
  | 'childrenPageDoc___animation___childPageDoc___children'
  | 'childrenPageDoc___animation___childPageDoc___title'
  | 'childrenPageDoc___animation___childPageDoc___description'
  | 'childrenPageDoc___animation___childrenImagesJson'
  | 'childrenPageDoc___animation___childrenImagesJson___id'
  | 'childrenPageDoc___animation___childrenImagesJson___children'
  | 'childrenPageDoc___animation___childrenImagesJson___v'
  | 'childrenPageDoc___animation___childrenImagesJson___fr'
  | 'childrenPageDoc___animation___childrenImagesJson___ip'
  | 'childrenPageDoc___animation___childrenImagesJson___op'
  | 'childrenPageDoc___animation___childrenImagesJson___w'
  | 'childrenPageDoc___animation___childrenImagesJson___h'
  | 'childrenPageDoc___animation___childrenImagesJson___nm'
  | 'childrenPageDoc___animation___childrenImagesJson___ddd'
  | 'childrenPageDoc___animation___childrenImagesJson___assets'
  | 'childrenPageDoc___animation___childrenImagesJson___layers'
  | 'childrenPageDoc___animation___childImagesJson___id'
  | 'childrenPageDoc___animation___childImagesJson___children'
  | 'childrenPageDoc___animation___childImagesJson___v'
  | 'childrenPageDoc___animation___childImagesJson___fr'
  | 'childrenPageDoc___animation___childImagesJson___ip'
  | 'childrenPageDoc___animation___childImagesJson___op'
  | 'childrenPageDoc___animation___childImagesJson___w'
  | 'childrenPageDoc___animation___childImagesJson___h'
  | 'childrenPageDoc___animation___childImagesJson___nm'
  | 'childrenPageDoc___animation___childImagesJson___ddd'
  | 'childrenPageDoc___animation___childImagesJson___assets'
  | 'childrenPageDoc___animation___childImagesJson___layers'
  | 'childrenPageDoc___animation___childrenDocsJson'
  | 'childrenPageDoc___animation___childrenDocsJson___id'
  | 'childrenPageDoc___animation___childrenDocsJson___children'
  | 'childrenPageDoc___animation___childrenDocsJson___type'
  | 'childrenPageDoc___animation___childDocsJson___id'
  | 'childrenPageDoc___animation___childDocsJson___children'
  | 'childrenPageDoc___animation___childDocsJson___type'
  | 'childrenPageDoc___animation___childrenAnimationsJson'
  | 'childrenPageDoc___animation___childrenAnimationsJson___id'
  | 'childrenPageDoc___animation___childrenAnimationsJson___children'
  | 'childrenPageDoc___animation___childrenAnimationsJson___tgs'
  | 'childrenPageDoc___animation___childrenAnimationsJson___v'
  | 'childrenPageDoc___animation___childrenAnimationsJson___fr'
  | 'childrenPageDoc___animation___childrenAnimationsJson___ip'
  | 'childrenPageDoc___animation___childrenAnimationsJson___op'
  | 'childrenPageDoc___animation___childrenAnimationsJson___w'
  | 'childrenPageDoc___animation___childrenAnimationsJson___h'
  | 'childrenPageDoc___animation___childrenAnimationsJson___nm'
  | 'childrenPageDoc___animation___childrenAnimationsJson___ddd'
  | 'childrenPageDoc___animation___childrenAnimationsJson___layers'
  | 'childrenPageDoc___animation___childAnimationsJson___id'
  | 'childrenPageDoc___animation___childAnimationsJson___children'
  | 'childrenPageDoc___animation___childAnimationsJson___tgs'
  | 'childrenPageDoc___animation___childAnimationsJson___v'
  | 'childrenPageDoc___animation___childAnimationsJson___fr'
  | 'childrenPageDoc___animation___childAnimationsJson___ip'
  | 'childrenPageDoc___animation___childAnimationsJson___op'
  | 'childrenPageDoc___animation___childAnimationsJson___w'
  | 'childrenPageDoc___animation___childAnimationsJson___h'
  | 'childrenPageDoc___animation___childAnimationsJson___nm'
  | 'childrenPageDoc___animation___childAnimationsJson___ddd'
  | 'childrenPageDoc___animation___childAnimationsJson___layers'
  | 'childrenPageDoc___animation___id'
  | 'childrenPageDoc___animation___parent___id'
  | 'childrenPageDoc___animation___parent___children'
  | 'childrenPageDoc___animation___children'
  | 'childrenPageDoc___animation___children___id'
  | 'childrenPageDoc___animation___children___children'
  | 'childrenPageDoc___animation___internal___content'
  | 'childrenPageDoc___animation___internal___contentDigest'
  | 'childrenPageDoc___animation___internal___description'
  | 'childrenPageDoc___animation___internal___fieldOwners'
  | 'childrenPageDoc___animation___internal___ignoreType'
  | 'childrenPageDoc___animation___internal___mediaType'
  | 'childrenPageDoc___animation___internal___owner'
  | 'childrenPageDoc___animation___internal___type'
  | 'childrenPageDoc___fileInformation___relativeDirectory'
  | 'childrenPageDoc___fileInformation___name'
  | 'childrenPageDoc___fileInformation___ext'
  | 'childrenPageDoc___fileInformation___extension'
  | 'childPageDoc___id'
  | 'childPageDoc___parent___id'
  | 'childPageDoc___parent___parent___id'
  | 'childPageDoc___parent___parent___children'
  | 'childPageDoc___parent___children'
  | 'childPageDoc___parent___children___id'
  | 'childPageDoc___parent___children___children'
  | 'childPageDoc___parent___internal___content'
  | 'childPageDoc___parent___internal___contentDigest'
  | 'childPageDoc___parent___internal___description'
  | 'childPageDoc___parent___internal___fieldOwners'
  | 'childPageDoc___parent___internal___ignoreType'
  | 'childPageDoc___parent___internal___mediaType'
  | 'childPageDoc___parent___internal___owner'
  | 'childPageDoc___parent___internal___type'
  | 'childPageDoc___children'
  | 'childPageDoc___children___id'
  | 'childPageDoc___children___parent___id'
  | 'childPageDoc___children___parent___children'
  | 'childPageDoc___children___children'
  | 'childPageDoc___children___children___id'
  | 'childPageDoc___children___children___children'
  | 'childPageDoc___children___internal___content'
  | 'childPageDoc___children___internal___contentDigest'
  | 'childPageDoc___children___internal___description'
  | 'childPageDoc___children___internal___fieldOwners'
  | 'childPageDoc___children___internal___ignoreType'
  | 'childPageDoc___children___internal___mediaType'
  | 'childPageDoc___children___internal___owner'
  | 'childPageDoc___children___internal___type'
  | 'childPageDoc___internal___content'
  | 'childPageDoc___internal___contentDigest'
  | 'childPageDoc___internal___description'
  | 'childPageDoc___internal___fieldOwners'
  | 'childPageDoc___internal___ignoreType'
  | 'childPageDoc___internal___mediaType'
  | 'childPageDoc___internal___owner'
  | 'childPageDoc___internal___type'
  | 'childPageDoc___title'
  | 'childPageDoc___description'
  | 'childPageDoc___image___sourceInstanceName'
  | 'childPageDoc___image___absolutePath'
  | 'childPageDoc___image___relativePath'
  | 'childPageDoc___image___extension'
  | 'childPageDoc___image___size'
  | 'childPageDoc___image___prettySize'
  | 'childPageDoc___image___modifiedTime'
  | 'childPageDoc___image___accessTime'
  | 'childPageDoc___image___changeTime'
  | 'childPageDoc___image___birthTime'
  | 'childPageDoc___image___root'
  | 'childPageDoc___image___dir'
  | 'childPageDoc___image___base'
  | 'childPageDoc___image___ext'
  | 'childPageDoc___image___name'
  | 'childPageDoc___image___relativeDirectory'
  | 'childPageDoc___image___dev'
  | 'childPageDoc___image___mode'
  | 'childPageDoc___image___nlink'
  | 'childPageDoc___image___uid'
  | 'childPageDoc___image___gid'
  | 'childPageDoc___image___rdev'
  | 'childPageDoc___image___ino'
  | 'childPageDoc___image___atimeMs'
  | 'childPageDoc___image___mtimeMs'
  | 'childPageDoc___image___ctimeMs'
  | 'childPageDoc___image___atime'
  | 'childPageDoc___image___mtime'
  | 'childPageDoc___image___ctime'
  | 'childPageDoc___image___birthtime'
  | 'childPageDoc___image___birthtimeMs'
  | 'childPageDoc___image___blksize'
  | 'childPageDoc___image___blocks'
  | 'childPageDoc___image___publicURL'
  | 'childPageDoc___image___childrenImageSharp'
  | 'childPageDoc___image___childrenImageSharp___gatsbyImageData'
  | 'childPageDoc___image___childrenImageSharp___id'
  | 'childPageDoc___image___childrenImageSharp___children'
  | 'childPageDoc___image___childImageSharp___gatsbyImageData'
  | 'childPageDoc___image___childImageSharp___id'
  | 'childPageDoc___image___childImageSharp___children'
  | 'childPageDoc___image___childrenPageDoc'
  | 'childPageDoc___image___childrenPageDoc___id'
  | 'childPageDoc___image___childrenPageDoc___children'
  | 'childPageDoc___image___childrenPageDoc___title'
  | 'childPageDoc___image___childrenPageDoc___description'
  | 'childPageDoc___image___childPageDoc___id'
  | 'childPageDoc___image___childPageDoc___children'
  | 'childPageDoc___image___childPageDoc___title'
  | 'childPageDoc___image___childPageDoc___description'
  | 'childPageDoc___image___childrenImagesJson'
  | 'childPageDoc___image___childrenImagesJson___id'
  | 'childPageDoc___image___childrenImagesJson___children'
  | 'childPageDoc___image___childrenImagesJson___v'
  | 'childPageDoc___image___childrenImagesJson___fr'
  | 'childPageDoc___image___childrenImagesJson___ip'
  | 'childPageDoc___image___childrenImagesJson___op'
  | 'childPageDoc___image___childrenImagesJson___w'
  | 'childPageDoc___image___childrenImagesJson___h'
  | 'childPageDoc___image___childrenImagesJson___nm'
  | 'childPageDoc___image___childrenImagesJson___ddd'
  | 'childPageDoc___image___childrenImagesJson___assets'
  | 'childPageDoc___image___childrenImagesJson___layers'
  | 'childPageDoc___image___childImagesJson___id'
  | 'childPageDoc___image___childImagesJson___children'
  | 'childPageDoc___image___childImagesJson___v'
  | 'childPageDoc___image___childImagesJson___fr'
  | 'childPageDoc___image___childImagesJson___ip'
  | 'childPageDoc___image___childImagesJson___op'
  | 'childPageDoc___image___childImagesJson___w'
  | 'childPageDoc___image___childImagesJson___h'
  | 'childPageDoc___image___childImagesJson___nm'
  | 'childPageDoc___image___childImagesJson___ddd'
  | 'childPageDoc___image___childImagesJson___assets'
  | 'childPageDoc___image___childImagesJson___layers'
  | 'childPageDoc___image___childrenDocsJson'
  | 'childPageDoc___image___childrenDocsJson___id'
  | 'childPageDoc___image___childrenDocsJson___children'
  | 'childPageDoc___image___childrenDocsJson___type'
  | 'childPageDoc___image___childDocsJson___id'
  | 'childPageDoc___image___childDocsJson___children'
  | 'childPageDoc___image___childDocsJson___type'
  | 'childPageDoc___image___childrenAnimationsJson'
  | 'childPageDoc___image___childrenAnimationsJson___id'
  | 'childPageDoc___image___childrenAnimationsJson___children'
  | 'childPageDoc___image___childrenAnimationsJson___tgs'
  | 'childPageDoc___image___childrenAnimationsJson___v'
  | 'childPageDoc___image___childrenAnimationsJson___fr'
  | 'childPageDoc___image___childrenAnimationsJson___ip'
  | 'childPageDoc___image___childrenAnimationsJson___op'
  | 'childPageDoc___image___childrenAnimationsJson___w'
  | 'childPageDoc___image___childrenAnimationsJson___h'
  | 'childPageDoc___image___childrenAnimationsJson___nm'
  | 'childPageDoc___image___childrenAnimationsJson___ddd'
  | 'childPageDoc___image___childrenAnimationsJson___layers'
  | 'childPageDoc___image___childAnimationsJson___id'
  | 'childPageDoc___image___childAnimationsJson___children'
  | 'childPageDoc___image___childAnimationsJson___tgs'
  | 'childPageDoc___image___childAnimationsJson___v'
  | 'childPageDoc___image___childAnimationsJson___fr'
  | 'childPageDoc___image___childAnimationsJson___ip'
  | 'childPageDoc___image___childAnimationsJson___op'
  | 'childPageDoc___image___childAnimationsJson___w'
  | 'childPageDoc___image___childAnimationsJson___h'
  | 'childPageDoc___image___childAnimationsJson___nm'
  | 'childPageDoc___image___childAnimationsJson___ddd'
  | 'childPageDoc___image___childAnimationsJson___layers'
  | 'childPageDoc___image___id'
  | 'childPageDoc___image___parent___id'
  | 'childPageDoc___image___parent___children'
  | 'childPageDoc___image___children'
  | 'childPageDoc___image___children___id'
  | 'childPageDoc___image___children___children'
  | 'childPageDoc___image___internal___content'
  | 'childPageDoc___image___internal___contentDigest'
  | 'childPageDoc___image___internal___description'
  | 'childPageDoc___image___internal___fieldOwners'
  | 'childPageDoc___image___internal___ignoreType'
  | 'childPageDoc___image___internal___mediaType'
  | 'childPageDoc___image___internal___owner'
  | 'childPageDoc___image___internal___type'
  | 'childPageDoc___video___sourceInstanceName'
  | 'childPageDoc___video___absolutePath'
  | 'childPageDoc___video___relativePath'
  | 'childPageDoc___video___extension'
  | 'childPageDoc___video___size'
  | 'childPageDoc___video___prettySize'
  | 'childPageDoc___video___modifiedTime'
  | 'childPageDoc___video___accessTime'
  | 'childPageDoc___video___changeTime'
  | 'childPageDoc___video___birthTime'
  | 'childPageDoc___video___root'
  | 'childPageDoc___video___dir'
  | 'childPageDoc___video___base'
  | 'childPageDoc___video___ext'
  | 'childPageDoc___video___name'
  | 'childPageDoc___video___relativeDirectory'
  | 'childPageDoc___video___dev'
  | 'childPageDoc___video___mode'
  | 'childPageDoc___video___nlink'
  | 'childPageDoc___video___uid'
  | 'childPageDoc___video___gid'
  | 'childPageDoc___video___rdev'
  | 'childPageDoc___video___ino'
  | 'childPageDoc___video___atimeMs'
  | 'childPageDoc___video___mtimeMs'
  | 'childPageDoc___video___ctimeMs'
  | 'childPageDoc___video___atime'
  | 'childPageDoc___video___mtime'
  | 'childPageDoc___video___ctime'
  | 'childPageDoc___video___birthtime'
  | 'childPageDoc___video___birthtimeMs'
  | 'childPageDoc___video___blksize'
  | 'childPageDoc___video___blocks'
  | 'childPageDoc___video___publicURL'
  | 'childPageDoc___video___childrenImageSharp'
  | 'childPageDoc___video___childrenImageSharp___gatsbyImageData'
  | 'childPageDoc___video___childrenImageSharp___id'
  | 'childPageDoc___video___childrenImageSharp___children'
  | 'childPageDoc___video___childImageSharp___gatsbyImageData'
  | 'childPageDoc___video___childImageSharp___id'
  | 'childPageDoc___video___childImageSharp___children'
  | 'childPageDoc___video___childrenPageDoc'
  | 'childPageDoc___video___childrenPageDoc___id'
  | 'childPageDoc___video___childrenPageDoc___children'
  | 'childPageDoc___video___childrenPageDoc___title'
  | 'childPageDoc___video___childrenPageDoc___description'
  | 'childPageDoc___video___childPageDoc___id'
  | 'childPageDoc___video___childPageDoc___children'
  | 'childPageDoc___video___childPageDoc___title'
  | 'childPageDoc___video___childPageDoc___description'
  | 'childPageDoc___video___childrenImagesJson'
  | 'childPageDoc___video___childrenImagesJson___id'
  | 'childPageDoc___video___childrenImagesJson___children'
  | 'childPageDoc___video___childrenImagesJson___v'
  | 'childPageDoc___video___childrenImagesJson___fr'
  | 'childPageDoc___video___childrenImagesJson___ip'
  | 'childPageDoc___video___childrenImagesJson___op'
  | 'childPageDoc___video___childrenImagesJson___w'
  | 'childPageDoc___video___childrenImagesJson___h'
  | 'childPageDoc___video___childrenImagesJson___nm'
  | 'childPageDoc___video___childrenImagesJson___ddd'
  | 'childPageDoc___video___childrenImagesJson___assets'
  | 'childPageDoc___video___childrenImagesJson___layers'
  | 'childPageDoc___video___childImagesJson___id'
  | 'childPageDoc___video___childImagesJson___children'
  | 'childPageDoc___video___childImagesJson___v'
  | 'childPageDoc___video___childImagesJson___fr'
  | 'childPageDoc___video___childImagesJson___ip'
  | 'childPageDoc___video___childImagesJson___op'
  | 'childPageDoc___video___childImagesJson___w'
  | 'childPageDoc___video___childImagesJson___h'
  | 'childPageDoc___video___childImagesJson___nm'
  | 'childPageDoc___video___childImagesJson___ddd'
  | 'childPageDoc___video___childImagesJson___assets'
  | 'childPageDoc___video___childImagesJson___layers'
  | 'childPageDoc___video___childrenDocsJson'
  | 'childPageDoc___video___childrenDocsJson___id'
  | 'childPageDoc___video___childrenDocsJson___children'
  | 'childPageDoc___video___childrenDocsJson___type'
  | 'childPageDoc___video___childDocsJson___id'
  | 'childPageDoc___video___childDocsJson___children'
  | 'childPageDoc___video___childDocsJson___type'
  | 'childPageDoc___video___childrenAnimationsJson'
  | 'childPageDoc___video___childrenAnimationsJson___id'
  | 'childPageDoc___video___childrenAnimationsJson___children'
  | 'childPageDoc___video___childrenAnimationsJson___tgs'
  | 'childPageDoc___video___childrenAnimationsJson___v'
  | 'childPageDoc___video___childrenAnimationsJson___fr'
  | 'childPageDoc___video___childrenAnimationsJson___ip'
  | 'childPageDoc___video___childrenAnimationsJson___op'
  | 'childPageDoc___video___childrenAnimationsJson___w'
  | 'childPageDoc___video___childrenAnimationsJson___h'
  | 'childPageDoc___video___childrenAnimationsJson___nm'
  | 'childPageDoc___video___childrenAnimationsJson___ddd'
  | 'childPageDoc___video___childrenAnimationsJson___layers'
  | 'childPageDoc___video___childAnimationsJson___id'
  | 'childPageDoc___video___childAnimationsJson___children'
  | 'childPageDoc___video___childAnimationsJson___tgs'
  | 'childPageDoc___video___childAnimationsJson___v'
  | 'childPageDoc___video___childAnimationsJson___fr'
  | 'childPageDoc___video___childAnimationsJson___ip'
  | 'childPageDoc___video___childAnimationsJson___op'
  | 'childPageDoc___video___childAnimationsJson___w'
  | 'childPageDoc___video___childAnimationsJson___h'
  | 'childPageDoc___video___childAnimationsJson___nm'
  | 'childPageDoc___video___childAnimationsJson___ddd'
  | 'childPageDoc___video___childAnimationsJson___layers'
  | 'childPageDoc___video___id'
  | 'childPageDoc___video___parent___id'
  | 'childPageDoc___video___parent___children'
  | 'childPageDoc___video___children'
  | 'childPageDoc___video___children___id'
  | 'childPageDoc___video___children___children'
  | 'childPageDoc___video___internal___content'
  | 'childPageDoc___video___internal___contentDigest'
  | 'childPageDoc___video___internal___description'
  | 'childPageDoc___video___internal___fieldOwners'
  | 'childPageDoc___video___internal___ignoreType'
  | 'childPageDoc___video___internal___mediaType'
  | 'childPageDoc___video___internal___owner'
  | 'childPageDoc___video___internal___type'
  | 'childPageDoc___animation___sourceInstanceName'
  | 'childPageDoc___animation___absolutePath'
  | 'childPageDoc___animation___relativePath'
  | 'childPageDoc___animation___extension'
  | 'childPageDoc___animation___size'
  | 'childPageDoc___animation___prettySize'
  | 'childPageDoc___animation___modifiedTime'
  | 'childPageDoc___animation___accessTime'
  | 'childPageDoc___animation___changeTime'
  | 'childPageDoc___animation___birthTime'
  | 'childPageDoc___animation___root'
  | 'childPageDoc___animation___dir'
  | 'childPageDoc___animation___base'
  | 'childPageDoc___animation___ext'
  | 'childPageDoc___animation___name'
  | 'childPageDoc___animation___relativeDirectory'
  | 'childPageDoc___animation___dev'
  | 'childPageDoc___animation___mode'
  | 'childPageDoc___animation___nlink'
  | 'childPageDoc___animation___uid'
  | 'childPageDoc___animation___gid'
  | 'childPageDoc___animation___rdev'
  | 'childPageDoc___animation___ino'
  | 'childPageDoc___animation___atimeMs'
  | 'childPageDoc___animation___mtimeMs'
  | 'childPageDoc___animation___ctimeMs'
  | 'childPageDoc___animation___atime'
  | 'childPageDoc___animation___mtime'
  | 'childPageDoc___animation___ctime'
  | 'childPageDoc___animation___birthtime'
  | 'childPageDoc___animation___birthtimeMs'
  | 'childPageDoc___animation___blksize'
  | 'childPageDoc___animation___blocks'
  | 'childPageDoc___animation___publicURL'
  | 'childPageDoc___animation___childrenImageSharp'
  | 'childPageDoc___animation___childrenImageSharp___gatsbyImageData'
  | 'childPageDoc___animation___childrenImageSharp___id'
  | 'childPageDoc___animation___childrenImageSharp___children'
  | 'childPageDoc___animation___childImageSharp___gatsbyImageData'
  | 'childPageDoc___animation___childImageSharp___id'
  | 'childPageDoc___animation___childImageSharp___children'
  | 'childPageDoc___animation___childrenPageDoc'
  | 'childPageDoc___animation___childrenPageDoc___id'
  | 'childPageDoc___animation___childrenPageDoc___children'
  | 'childPageDoc___animation___childrenPageDoc___title'
  | 'childPageDoc___animation___childrenPageDoc___description'
  | 'childPageDoc___animation___childPageDoc___id'
  | 'childPageDoc___animation___childPageDoc___children'
  | 'childPageDoc___animation___childPageDoc___title'
  | 'childPageDoc___animation___childPageDoc___description'
  | 'childPageDoc___animation___childrenImagesJson'
  | 'childPageDoc___animation___childrenImagesJson___id'
  | 'childPageDoc___animation___childrenImagesJson___children'
  | 'childPageDoc___animation___childrenImagesJson___v'
  | 'childPageDoc___animation___childrenImagesJson___fr'
  | 'childPageDoc___animation___childrenImagesJson___ip'
  | 'childPageDoc___animation___childrenImagesJson___op'
  | 'childPageDoc___animation___childrenImagesJson___w'
  | 'childPageDoc___animation___childrenImagesJson___h'
  | 'childPageDoc___animation___childrenImagesJson___nm'
  | 'childPageDoc___animation___childrenImagesJson___ddd'
  | 'childPageDoc___animation___childrenImagesJson___assets'
  | 'childPageDoc___animation___childrenImagesJson___layers'
  | 'childPageDoc___animation___childImagesJson___id'
  | 'childPageDoc___animation___childImagesJson___children'
  | 'childPageDoc___animation___childImagesJson___v'
  | 'childPageDoc___animation___childImagesJson___fr'
  | 'childPageDoc___animation___childImagesJson___ip'
  | 'childPageDoc___animation___childImagesJson___op'
  | 'childPageDoc___animation___childImagesJson___w'
  | 'childPageDoc___animation___childImagesJson___h'
  | 'childPageDoc___animation___childImagesJson___nm'
  | 'childPageDoc___animation___childImagesJson___ddd'
  | 'childPageDoc___animation___childImagesJson___assets'
  | 'childPageDoc___animation___childImagesJson___layers'
  | 'childPageDoc___animation___childrenDocsJson'
  | 'childPageDoc___animation___childrenDocsJson___id'
  | 'childPageDoc___animation___childrenDocsJson___children'
  | 'childPageDoc___animation___childrenDocsJson___type'
  | 'childPageDoc___animation___childDocsJson___id'
  | 'childPageDoc___animation___childDocsJson___children'
  | 'childPageDoc___animation___childDocsJson___type'
  | 'childPageDoc___animation___childrenAnimationsJson'
  | 'childPageDoc___animation___childrenAnimationsJson___id'
  | 'childPageDoc___animation___childrenAnimationsJson___children'
  | 'childPageDoc___animation___childrenAnimationsJson___tgs'
  | 'childPageDoc___animation___childrenAnimationsJson___v'
  | 'childPageDoc___animation___childrenAnimationsJson___fr'
  | 'childPageDoc___animation___childrenAnimationsJson___ip'
  | 'childPageDoc___animation___childrenAnimationsJson___op'
  | 'childPageDoc___animation___childrenAnimationsJson___w'
  | 'childPageDoc___animation___childrenAnimationsJson___h'
  | 'childPageDoc___animation___childrenAnimationsJson___nm'
  | 'childPageDoc___animation___childrenAnimationsJson___ddd'
  | 'childPageDoc___animation___childrenAnimationsJson___layers'
  | 'childPageDoc___animation___childAnimationsJson___id'
  | 'childPageDoc___animation___childAnimationsJson___children'
  | 'childPageDoc___animation___childAnimationsJson___tgs'
  | 'childPageDoc___animation___childAnimationsJson___v'
  | 'childPageDoc___animation___childAnimationsJson___fr'
  | 'childPageDoc___animation___childAnimationsJson___ip'
  | 'childPageDoc___animation___childAnimationsJson___op'
  | 'childPageDoc___animation___childAnimationsJson___w'
  | 'childPageDoc___animation___childAnimationsJson___h'
  | 'childPageDoc___animation___childAnimationsJson___nm'
  | 'childPageDoc___animation___childAnimationsJson___ddd'
  | 'childPageDoc___animation___childAnimationsJson___layers'
  | 'childPageDoc___animation___id'
  | 'childPageDoc___animation___parent___id'
  | 'childPageDoc___animation___parent___children'
  | 'childPageDoc___animation___children'
  | 'childPageDoc___animation___children___id'
  | 'childPageDoc___animation___children___children'
  | 'childPageDoc___animation___internal___content'
  | 'childPageDoc___animation___internal___contentDigest'
  | 'childPageDoc___animation___internal___description'
  | 'childPageDoc___animation___internal___fieldOwners'
  | 'childPageDoc___animation___internal___ignoreType'
  | 'childPageDoc___animation___internal___mediaType'
  | 'childPageDoc___animation___internal___owner'
  | 'childPageDoc___animation___internal___type'
  | 'childPageDoc___fileInformation___relativeDirectory'
  | 'childPageDoc___fileInformation___name'
  | 'childPageDoc___fileInformation___ext'
  | 'childPageDoc___fileInformation___extension'
  | 'childrenImagesJson'
  | 'childrenImagesJson___id'
  | 'childrenImagesJson___parent___id'
  | 'childrenImagesJson___parent___parent___id'
  | 'childrenImagesJson___parent___parent___children'
  | 'childrenImagesJson___parent___children'
  | 'childrenImagesJson___parent___children___id'
  | 'childrenImagesJson___parent___children___children'
  | 'childrenImagesJson___parent___internal___content'
  | 'childrenImagesJson___parent___internal___contentDigest'
  | 'childrenImagesJson___parent___internal___description'
  | 'childrenImagesJson___parent___internal___fieldOwners'
  | 'childrenImagesJson___parent___internal___ignoreType'
  | 'childrenImagesJson___parent___internal___mediaType'
  | 'childrenImagesJson___parent___internal___owner'
  | 'childrenImagesJson___parent___internal___type'
  | 'childrenImagesJson___children'
  | 'childrenImagesJson___children___id'
  | 'childrenImagesJson___children___parent___id'
  | 'childrenImagesJson___children___parent___children'
  | 'childrenImagesJson___children___children'
  | 'childrenImagesJson___children___children___id'
  | 'childrenImagesJson___children___children___children'
  | 'childrenImagesJson___children___internal___content'
  | 'childrenImagesJson___children___internal___contentDigest'
  | 'childrenImagesJson___children___internal___description'
  | 'childrenImagesJson___children___internal___fieldOwners'
  | 'childrenImagesJson___children___internal___ignoreType'
  | 'childrenImagesJson___children___internal___mediaType'
  | 'childrenImagesJson___children___internal___owner'
  | 'childrenImagesJson___children___internal___type'
  | 'childrenImagesJson___internal___content'
  | 'childrenImagesJson___internal___contentDigest'
  | 'childrenImagesJson___internal___description'
  | 'childrenImagesJson___internal___fieldOwners'
  | 'childrenImagesJson___internal___ignoreType'
  | 'childrenImagesJson___internal___mediaType'
  | 'childrenImagesJson___internal___owner'
  | 'childrenImagesJson___internal___type'
  | 'childrenImagesJson___v'
  | 'childrenImagesJson___fr'
  | 'childrenImagesJson___ip'
  | 'childrenImagesJson___op'
  | 'childrenImagesJson___w'
  | 'childrenImagesJson___h'
  | 'childrenImagesJson___nm'
  | 'childrenImagesJson___ddd'
  | 'childrenImagesJson___assets'
  | 'childrenImagesJson___assets___id'
  | 'childrenImagesJson___assets___layers'
  | 'childrenImagesJson___assets___layers___ddd'
  | 'childrenImagesJson___assets___layers___ind'
  | 'childrenImagesJson___assets___layers___ty'
  | 'childrenImagesJson___assets___layers___nm'
  | 'childrenImagesJson___assets___layers___parent'
  | 'childrenImagesJson___assets___layers___sr'
  | 'childrenImagesJson___assets___layers___ao'
  | 'childrenImagesJson___assets___layers___hasMask'
  | 'childrenImagesJson___assets___layers___masksProperties'
  | 'childrenImagesJson___assets___layers___shapes'
  | 'childrenImagesJson___assets___layers___ip'
  | 'childrenImagesJson___assets___layers___op'
  | 'childrenImagesJson___assets___layers___st'
  | 'childrenImagesJson___assets___layers___bm'
  | 'childrenImagesJson___layers'
  | 'childrenImagesJson___layers___ddd'
  | 'childrenImagesJson___layers___ind'
  | 'childrenImagesJson___layers___ty'
  | 'childrenImagesJson___layers___nm'
  | 'childrenImagesJson___layers___sr'
  | 'childrenImagesJson___layers___ao'
  | 'childrenImagesJson___layers___ip'
  | 'childrenImagesJson___layers___op'
  | 'childrenImagesJson___layers___st'
  | 'childrenImagesJson___layers___bm'
  | 'childrenImagesJson___layers___parent'
  | 'childrenImagesJson___layers___shapes'
  | 'childrenImagesJson___layers___shapes___ty'
  | 'childrenImagesJson___layers___shapes___it'
  | 'childrenImagesJson___layers___shapes___nm'
  | 'childrenImagesJson___layers___shapes___np'
  | 'childrenImagesJson___layers___shapes___cix'
  | 'childrenImagesJson___layers___shapes___bm'
  | 'childrenImagesJson___layers___shapes___ix'
  | 'childrenImagesJson___layers___shapes___mn'
  | 'childrenImagesJson___layers___shapes___hd'
  | 'childrenImagesJson___layers___refId'
  | 'childrenImagesJson___layers___w'
  | 'childrenImagesJson___layers___h'
  | 'childImagesJson___id'
  | 'childImagesJson___parent___id'
  | 'childImagesJson___parent___parent___id'
  | 'childImagesJson___parent___parent___children'
  | 'childImagesJson___parent___children'
  | 'childImagesJson___parent___children___id'
  | 'childImagesJson___parent___children___children'
  | 'childImagesJson___parent___internal___content'
  | 'childImagesJson___parent___internal___contentDigest'
  | 'childImagesJson___parent___internal___description'
  | 'childImagesJson___parent___internal___fieldOwners'
  | 'childImagesJson___parent___internal___ignoreType'
  | 'childImagesJson___parent___internal___mediaType'
  | 'childImagesJson___parent___internal___owner'
  | 'childImagesJson___parent___internal___type'
  | 'childImagesJson___children'
  | 'childImagesJson___children___id'
  | 'childImagesJson___children___parent___id'
  | 'childImagesJson___children___parent___children'
  | 'childImagesJson___children___children'
  | 'childImagesJson___children___children___id'
  | 'childImagesJson___children___children___children'
  | 'childImagesJson___children___internal___content'
  | 'childImagesJson___children___internal___contentDigest'
  | 'childImagesJson___children___internal___description'
  | 'childImagesJson___children___internal___fieldOwners'
  | 'childImagesJson___children___internal___ignoreType'
  | 'childImagesJson___children___internal___mediaType'
  | 'childImagesJson___children___internal___owner'
  | 'childImagesJson___children___internal___type'
  | 'childImagesJson___internal___content'
  | 'childImagesJson___internal___contentDigest'
  | 'childImagesJson___internal___description'
  | 'childImagesJson___internal___fieldOwners'
  | 'childImagesJson___internal___ignoreType'
  | 'childImagesJson___internal___mediaType'
  | 'childImagesJson___internal___owner'
  | 'childImagesJson___internal___type'
  | 'childImagesJson___v'
  | 'childImagesJson___fr'
  | 'childImagesJson___ip'
  | 'childImagesJson___op'
  | 'childImagesJson___w'
  | 'childImagesJson___h'
  | 'childImagesJson___nm'
  | 'childImagesJson___ddd'
  | 'childImagesJson___assets'
  | 'childImagesJson___assets___id'
  | 'childImagesJson___assets___layers'
  | 'childImagesJson___assets___layers___ddd'
  | 'childImagesJson___assets___layers___ind'
  | 'childImagesJson___assets___layers___ty'
  | 'childImagesJson___assets___layers___nm'
  | 'childImagesJson___assets___layers___parent'
  | 'childImagesJson___assets___layers___sr'
  | 'childImagesJson___assets___layers___ao'
  | 'childImagesJson___assets___layers___hasMask'
  | 'childImagesJson___assets___layers___masksProperties'
  | 'childImagesJson___assets___layers___shapes'
  | 'childImagesJson___assets___layers___ip'
  | 'childImagesJson___assets___layers___op'
  | 'childImagesJson___assets___layers___st'
  | 'childImagesJson___assets___layers___bm'
  | 'childImagesJson___layers'
  | 'childImagesJson___layers___ddd'
  | 'childImagesJson___layers___ind'
  | 'childImagesJson___layers___ty'
  | 'childImagesJson___layers___nm'
  | 'childImagesJson___layers___sr'
  | 'childImagesJson___layers___ao'
  | 'childImagesJson___layers___ip'
  | 'childImagesJson___layers___op'
  | 'childImagesJson___layers___st'
  | 'childImagesJson___layers___bm'
  | 'childImagesJson___layers___parent'
  | 'childImagesJson___layers___shapes'
  | 'childImagesJson___layers___shapes___ty'
  | 'childImagesJson___layers___shapes___it'
  | 'childImagesJson___layers___shapes___nm'
  | 'childImagesJson___layers___shapes___np'
  | 'childImagesJson___layers___shapes___cix'
  | 'childImagesJson___layers___shapes___bm'
  | 'childImagesJson___layers___shapes___ix'
  | 'childImagesJson___layers___shapes___mn'
  | 'childImagesJson___layers___shapes___hd'
  | 'childImagesJson___layers___refId'
  | 'childImagesJson___layers___w'
  | 'childImagesJson___layers___h'
  | 'childrenDocsJson'
  | 'childrenDocsJson___id'
  | 'childrenDocsJson___parent___id'
  | 'childrenDocsJson___parent___parent___id'
  | 'childrenDocsJson___parent___parent___children'
  | 'childrenDocsJson___parent___children'
  | 'childrenDocsJson___parent___children___id'
  | 'childrenDocsJson___parent___children___children'
  | 'childrenDocsJson___parent___internal___content'
  | 'childrenDocsJson___parent___internal___contentDigest'
  | 'childrenDocsJson___parent___internal___description'
  | 'childrenDocsJson___parent___internal___fieldOwners'
  | 'childrenDocsJson___parent___internal___ignoreType'
  | 'childrenDocsJson___parent___internal___mediaType'
  | 'childrenDocsJson___parent___internal___owner'
  | 'childrenDocsJson___parent___internal___type'
  | 'childrenDocsJson___children'
  | 'childrenDocsJson___children___id'
  | 'childrenDocsJson___children___parent___id'
  | 'childrenDocsJson___children___parent___children'
  | 'childrenDocsJson___children___children'
  | 'childrenDocsJson___children___children___id'
  | 'childrenDocsJson___children___children___children'
  | 'childrenDocsJson___children___internal___content'
  | 'childrenDocsJson___children___internal___contentDigest'
  | 'childrenDocsJson___children___internal___description'
  | 'childrenDocsJson___children___internal___fieldOwners'
  | 'childrenDocsJson___children___internal___ignoreType'
  | 'childrenDocsJson___children___internal___mediaType'
  | 'childrenDocsJson___children___internal___owner'
  | 'childrenDocsJson___children___internal___type'
  | 'childrenDocsJson___internal___content'
  | 'childrenDocsJson___internal___contentDigest'
  | 'childrenDocsJson___internal___description'
  | 'childrenDocsJson___internal___fieldOwners'
  | 'childrenDocsJson___internal___ignoreType'
  | 'childrenDocsJson___internal___mediaType'
  | 'childrenDocsJson___internal___owner'
  | 'childrenDocsJson___internal___type'
  | 'childrenDocsJson___type'
  | 'childrenDocsJson___module___title'
  | 'childrenDocsJson___module___description'
  | 'childrenDocsJson___module___image___sourceInstanceName'
  | 'childrenDocsJson___module___image___absolutePath'
  | 'childrenDocsJson___module___image___relativePath'
  | 'childrenDocsJson___module___image___extension'
  | 'childrenDocsJson___module___image___size'
  | 'childrenDocsJson___module___image___prettySize'
  | 'childrenDocsJson___module___image___modifiedTime'
  | 'childrenDocsJson___module___image___accessTime'
  | 'childrenDocsJson___module___image___changeTime'
  | 'childrenDocsJson___module___image___birthTime'
  | 'childrenDocsJson___module___image___root'
  | 'childrenDocsJson___module___image___dir'
  | 'childrenDocsJson___module___image___base'
  | 'childrenDocsJson___module___image___ext'
  | 'childrenDocsJson___module___image___name'
  | 'childrenDocsJson___module___image___relativeDirectory'
  | 'childrenDocsJson___module___image___dev'
  | 'childrenDocsJson___module___image___mode'
  | 'childrenDocsJson___module___image___nlink'
  | 'childrenDocsJson___module___image___uid'
  | 'childrenDocsJson___module___image___gid'
  | 'childrenDocsJson___module___image___rdev'
  | 'childrenDocsJson___module___image___ino'
  | 'childrenDocsJson___module___image___atimeMs'
  | 'childrenDocsJson___module___image___mtimeMs'
  | 'childrenDocsJson___module___image___ctimeMs'
  | 'childrenDocsJson___module___image___atime'
  | 'childrenDocsJson___module___image___mtime'
  | 'childrenDocsJson___module___image___ctime'
  | 'childrenDocsJson___module___image___birthtime'
  | 'childrenDocsJson___module___image___birthtimeMs'
  | 'childrenDocsJson___module___image___blksize'
  | 'childrenDocsJson___module___image___blocks'
  | 'childrenDocsJson___module___image___publicURL'
  | 'childrenDocsJson___module___image___childrenImageSharp'
  | 'childrenDocsJson___module___image___childrenPageDoc'
  | 'childrenDocsJson___module___image___childrenImagesJson'
  | 'childrenDocsJson___module___image___childrenDocsJson'
  | 'childrenDocsJson___module___image___childrenAnimationsJson'
  | 'childrenDocsJson___module___image___id'
  | 'childrenDocsJson___module___image___children'
  | 'childrenDocsJson___module___video___sourceInstanceName'
  | 'childrenDocsJson___module___video___absolutePath'
  | 'childrenDocsJson___module___video___relativePath'
  | 'childrenDocsJson___module___video___extension'
  | 'childrenDocsJson___module___video___size'
  | 'childrenDocsJson___module___video___prettySize'
  | 'childrenDocsJson___module___video___modifiedTime'
  | 'childrenDocsJson___module___video___accessTime'
  | 'childrenDocsJson___module___video___changeTime'
  | 'childrenDocsJson___module___video___birthTime'
  | 'childrenDocsJson___module___video___root'
  | 'childrenDocsJson___module___video___dir'
  | 'childrenDocsJson___module___video___base'
  | 'childrenDocsJson___module___video___ext'
  | 'childrenDocsJson___module___video___name'
  | 'childrenDocsJson___module___video___relativeDirectory'
  | 'childrenDocsJson___module___video___dev'
  | 'childrenDocsJson___module___video___mode'
  | 'childrenDocsJson___module___video___nlink'
  | 'childrenDocsJson___module___video___uid'
  | 'childrenDocsJson___module___video___gid'
  | 'childrenDocsJson___module___video___rdev'
  | 'childrenDocsJson___module___video___ino'
  | 'childrenDocsJson___module___video___atimeMs'
  | 'childrenDocsJson___module___video___mtimeMs'
  | 'childrenDocsJson___module___video___ctimeMs'
  | 'childrenDocsJson___module___video___atime'
  | 'childrenDocsJson___module___video___mtime'
  | 'childrenDocsJson___module___video___ctime'
  | 'childrenDocsJson___module___video___birthtime'
  | 'childrenDocsJson___module___video___birthtimeMs'
  | 'childrenDocsJson___module___video___blksize'
  | 'childrenDocsJson___module___video___blocks'
  | 'childrenDocsJson___module___video___publicURL'
  | 'childrenDocsJson___module___video___childrenImageSharp'
  | 'childrenDocsJson___module___video___childrenPageDoc'
  | 'childrenDocsJson___module___video___childrenImagesJson'
  | 'childrenDocsJson___module___video___childrenDocsJson'
  | 'childrenDocsJson___module___video___childrenAnimationsJson'
  | 'childrenDocsJson___module___video___id'
  | 'childrenDocsJson___module___video___children'
  | 'childrenDocsJson___module___animation___sourceInstanceName'
  | 'childrenDocsJson___module___animation___absolutePath'
  | 'childrenDocsJson___module___animation___relativePath'
  | 'childrenDocsJson___module___animation___extension'
  | 'childrenDocsJson___module___animation___size'
  | 'childrenDocsJson___module___animation___prettySize'
  | 'childrenDocsJson___module___animation___modifiedTime'
  | 'childrenDocsJson___module___animation___accessTime'
  | 'childrenDocsJson___module___animation___changeTime'
  | 'childrenDocsJson___module___animation___birthTime'
  | 'childrenDocsJson___module___animation___root'
  | 'childrenDocsJson___module___animation___dir'
  | 'childrenDocsJson___module___animation___base'
  | 'childrenDocsJson___module___animation___ext'
  | 'childrenDocsJson___module___animation___name'
  | 'childrenDocsJson___module___animation___relativeDirectory'
  | 'childrenDocsJson___module___animation___dev'
  | 'childrenDocsJson___module___animation___mode'
  | 'childrenDocsJson___module___animation___nlink'
  | 'childrenDocsJson___module___animation___uid'
  | 'childrenDocsJson___module___animation___gid'
  | 'childrenDocsJson___module___animation___rdev'
  | 'childrenDocsJson___module___animation___ino'
  | 'childrenDocsJson___module___animation___atimeMs'
  | 'childrenDocsJson___module___animation___mtimeMs'
  | 'childrenDocsJson___module___animation___ctimeMs'
  | 'childrenDocsJson___module___animation___atime'
  | 'childrenDocsJson___module___animation___mtime'
  | 'childrenDocsJson___module___animation___ctime'
  | 'childrenDocsJson___module___animation___birthtime'
  | 'childrenDocsJson___module___animation___birthtimeMs'
  | 'childrenDocsJson___module___animation___blksize'
  | 'childrenDocsJson___module___animation___blocks'
  | 'childrenDocsJson___module___animation___publicURL'
  | 'childrenDocsJson___module___animation___childrenImageSharp'
  | 'childrenDocsJson___module___animation___childrenPageDoc'
  | 'childrenDocsJson___module___animation___childrenImagesJson'
  | 'childrenDocsJson___module___animation___childrenDocsJson'
  | 'childrenDocsJson___module___animation___childrenAnimationsJson'
  | 'childrenDocsJson___module___animation___id'
  | 'childrenDocsJson___module___animation___children'
  | 'childDocsJson___id'
  | 'childDocsJson___parent___id'
  | 'childDocsJson___parent___parent___id'
  | 'childDocsJson___parent___parent___children'
  | 'childDocsJson___parent___children'
  | 'childDocsJson___parent___children___id'
  | 'childDocsJson___parent___children___children'
  | 'childDocsJson___parent___internal___content'
  | 'childDocsJson___parent___internal___contentDigest'
  | 'childDocsJson___parent___internal___description'
  | 'childDocsJson___parent___internal___fieldOwners'
  | 'childDocsJson___parent___internal___ignoreType'
  | 'childDocsJson___parent___internal___mediaType'
  | 'childDocsJson___parent___internal___owner'
  | 'childDocsJson___parent___internal___type'
  | 'childDocsJson___children'
  | 'childDocsJson___children___id'
  | 'childDocsJson___children___parent___id'
  | 'childDocsJson___children___parent___children'
  | 'childDocsJson___children___children'
  | 'childDocsJson___children___children___id'
  | 'childDocsJson___children___children___children'
  | 'childDocsJson___children___internal___content'
  | 'childDocsJson___children___internal___contentDigest'
  | 'childDocsJson___children___internal___description'
  | 'childDocsJson___children___internal___fieldOwners'
  | 'childDocsJson___children___internal___ignoreType'
  | 'childDocsJson___children___internal___mediaType'
  | 'childDocsJson___children___internal___owner'
  | 'childDocsJson___children___internal___type'
  | 'childDocsJson___internal___content'
  | 'childDocsJson___internal___contentDigest'
  | 'childDocsJson___internal___description'
  | 'childDocsJson___internal___fieldOwners'
  | 'childDocsJson___internal___ignoreType'
  | 'childDocsJson___internal___mediaType'
  | 'childDocsJson___internal___owner'
  | 'childDocsJson___internal___type'
  | 'childDocsJson___type'
  | 'childDocsJson___module___title'
  | 'childDocsJson___module___description'
  | 'childDocsJson___module___image___sourceInstanceName'
  | 'childDocsJson___module___image___absolutePath'
  | 'childDocsJson___module___image___relativePath'
  | 'childDocsJson___module___image___extension'
  | 'childDocsJson___module___image___size'
  | 'childDocsJson___module___image___prettySize'
  | 'childDocsJson___module___image___modifiedTime'
  | 'childDocsJson___module___image___accessTime'
  | 'childDocsJson___module___image___changeTime'
  | 'childDocsJson___module___image___birthTime'
  | 'childDocsJson___module___image___root'
  | 'childDocsJson___module___image___dir'
  | 'childDocsJson___module___image___base'
  | 'childDocsJson___module___image___ext'
  | 'childDocsJson___module___image___name'
  | 'childDocsJson___module___image___relativeDirectory'
  | 'childDocsJson___module___image___dev'
  | 'childDocsJson___module___image___mode'
  | 'childDocsJson___module___image___nlink'
  | 'childDocsJson___module___image___uid'
  | 'childDocsJson___module___image___gid'
  | 'childDocsJson___module___image___rdev'
  | 'childDocsJson___module___image___ino'
  | 'childDocsJson___module___image___atimeMs'
  | 'childDocsJson___module___image___mtimeMs'
  | 'childDocsJson___module___image___ctimeMs'
  | 'childDocsJson___module___image___atime'
  | 'childDocsJson___module___image___mtime'
  | 'childDocsJson___module___image___ctime'
  | 'childDocsJson___module___image___birthtime'
  | 'childDocsJson___module___image___birthtimeMs'
  | 'childDocsJson___module___image___blksize'
  | 'childDocsJson___module___image___blocks'
  | 'childDocsJson___module___image___publicURL'
  | 'childDocsJson___module___image___childrenImageSharp'
  | 'childDocsJson___module___image___childrenPageDoc'
  | 'childDocsJson___module___image___childrenImagesJson'
  | 'childDocsJson___module___image___childrenDocsJson'
  | 'childDocsJson___module___image___childrenAnimationsJson'
  | 'childDocsJson___module___image___id'
  | 'childDocsJson___module___image___children'
  | 'childDocsJson___module___video___sourceInstanceName'
  | 'childDocsJson___module___video___absolutePath'
  | 'childDocsJson___module___video___relativePath'
  | 'childDocsJson___module___video___extension'
  | 'childDocsJson___module___video___size'
  | 'childDocsJson___module___video___prettySize'
  | 'childDocsJson___module___video___modifiedTime'
  | 'childDocsJson___module___video___accessTime'
  | 'childDocsJson___module___video___changeTime'
  | 'childDocsJson___module___video___birthTime'
  | 'childDocsJson___module___video___root'
  | 'childDocsJson___module___video___dir'
  | 'childDocsJson___module___video___base'
  | 'childDocsJson___module___video___ext'
  | 'childDocsJson___module___video___name'
  | 'childDocsJson___module___video___relativeDirectory'
  | 'childDocsJson___module___video___dev'
  | 'childDocsJson___module___video___mode'
  | 'childDocsJson___module___video___nlink'
  | 'childDocsJson___module___video___uid'
  | 'childDocsJson___module___video___gid'
  | 'childDocsJson___module___video___rdev'
  | 'childDocsJson___module___video___ino'
  | 'childDocsJson___module___video___atimeMs'
  | 'childDocsJson___module___video___mtimeMs'
  | 'childDocsJson___module___video___ctimeMs'
  | 'childDocsJson___module___video___atime'
  | 'childDocsJson___module___video___mtime'
  | 'childDocsJson___module___video___ctime'
  | 'childDocsJson___module___video___birthtime'
  | 'childDocsJson___module___video___birthtimeMs'
  | 'childDocsJson___module___video___blksize'
  | 'childDocsJson___module___video___blocks'
  | 'childDocsJson___module___video___publicURL'
  | 'childDocsJson___module___video___childrenImageSharp'
  | 'childDocsJson___module___video___childrenPageDoc'
  | 'childDocsJson___module___video___childrenImagesJson'
  | 'childDocsJson___module___video___childrenDocsJson'
  | 'childDocsJson___module___video___childrenAnimationsJson'
  | 'childDocsJson___module___video___id'
  | 'childDocsJson___module___video___children'
  | 'childDocsJson___module___animation___sourceInstanceName'
  | 'childDocsJson___module___animation___absolutePath'
  | 'childDocsJson___module___animation___relativePath'
  | 'childDocsJson___module___animation___extension'
  | 'childDocsJson___module___animation___size'
  | 'childDocsJson___module___animation___prettySize'
  | 'childDocsJson___module___animation___modifiedTime'
  | 'childDocsJson___module___animation___accessTime'
  | 'childDocsJson___module___animation___changeTime'
  | 'childDocsJson___module___animation___birthTime'
  | 'childDocsJson___module___animation___root'
  | 'childDocsJson___module___animation___dir'
  | 'childDocsJson___module___animation___base'
  | 'childDocsJson___module___animation___ext'
  | 'childDocsJson___module___animation___name'
  | 'childDocsJson___module___animation___relativeDirectory'
  | 'childDocsJson___module___animation___dev'
  | 'childDocsJson___module___animation___mode'
  | 'childDocsJson___module___animation___nlink'
  | 'childDocsJson___module___animation___uid'
  | 'childDocsJson___module___animation___gid'
  | 'childDocsJson___module___animation___rdev'
  | 'childDocsJson___module___animation___ino'
  | 'childDocsJson___module___animation___atimeMs'
  | 'childDocsJson___module___animation___mtimeMs'
  | 'childDocsJson___module___animation___ctimeMs'
  | 'childDocsJson___module___animation___atime'
  | 'childDocsJson___module___animation___mtime'
  | 'childDocsJson___module___animation___ctime'
  | 'childDocsJson___module___animation___birthtime'
  | 'childDocsJson___module___animation___birthtimeMs'
  | 'childDocsJson___module___animation___blksize'
  | 'childDocsJson___module___animation___blocks'
  | 'childDocsJson___module___animation___publicURL'
  | 'childDocsJson___module___animation___childrenImageSharp'
  | 'childDocsJson___module___animation___childrenPageDoc'
  | 'childDocsJson___module___animation___childrenImagesJson'
  | 'childDocsJson___module___animation___childrenDocsJson'
  | 'childDocsJson___module___animation___childrenAnimationsJson'
  | 'childDocsJson___module___animation___id'
  | 'childDocsJson___module___animation___children'
  | 'childrenAnimationsJson'
  | 'childrenAnimationsJson___id'
  | 'childrenAnimationsJson___parent___id'
  | 'childrenAnimationsJson___parent___parent___id'
  | 'childrenAnimationsJson___parent___parent___children'
  | 'childrenAnimationsJson___parent___children'
  | 'childrenAnimationsJson___parent___children___id'
  | 'childrenAnimationsJson___parent___children___children'
  | 'childrenAnimationsJson___parent___internal___content'
  | 'childrenAnimationsJson___parent___internal___contentDigest'
  | 'childrenAnimationsJson___parent___internal___description'
  | 'childrenAnimationsJson___parent___internal___fieldOwners'
  | 'childrenAnimationsJson___parent___internal___ignoreType'
  | 'childrenAnimationsJson___parent___internal___mediaType'
  | 'childrenAnimationsJson___parent___internal___owner'
  | 'childrenAnimationsJson___parent___internal___type'
  | 'childrenAnimationsJson___children'
  | 'childrenAnimationsJson___children___id'
  | 'childrenAnimationsJson___children___parent___id'
  | 'childrenAnimationsJson___children___parent___children'
  | 'childrenAnimationsJson___children___children'
  | 'childrenAnimationsJson___children___children___id'
  | 'childrenAnimationsJson___children___children___children'
  | 'childrenAnimationsJson___children___internal___content'
  | 'childrenAnimationsJson___children___internal___contentDigest'
  | 'childrenAnimationsJson___children___internal___description'
  | 'childrenAnimationsJson___children___internal___fieldOwners'
  | 'childrenAnimationsJson___children___internal___ignoreType'
  | 'childrenAnimationsJson___children___internal___mediaType'
  | 'childrenAnimationsJson___children___internal___owner'
  | 'childrenAnimationsJson___children___internal___type'
  | 'childrenAnimationsJson___internal___content'
  | 'childrenAnimationsJson___internal___contentDigest'
  | 'childrenAnimationsJson___internal___description'
  | 'childrenAnimationsJson___internal___fieldOwners'
  | 'childrenAnimationsJson___internal___ignoreType'
  | 'childrenAnimationsJson___internal___mediaType'
  | 'childrenAnimationsJson___internal___owner'
  | 'childrenAnimationsJson___internal___type'
  | 'childrenAnimationsJson___tgs'
  | 'childrenAnimationsJson___v'
  | 'childrenAnimationsJson___fr'
  | 'childrenAnimationsJson___ip'
  | 'childrenAnimationsJson___op'
  | 'childrenAnimationsJson___w'
  | 'childrenAnimationsJson___h'
  | 'childrenAnimationsJson___nm'
  | 'childrenAnimationsJson___ddd'
  | 'childrenAnimationsJson___layers'
  | 'childrenAnimationsJson___layers___ddd'
  | 'childrenAnimationsJson___layers___ind'
  | 'childrenAnimationsJson___layers___ty'
  | 'childrenAnimationsJson___layers___nm'
  | 'childrenAnimationsJson___layers___sr'
  | 'childrenAnimationsJson___layers___ao'
  | 'childrenAnimationsJson___layers___shapes'
  | 'childrenAnimationsJson___layers___shapes___ty'
  | 'childrenAnimationsJson___layers___shapes___it'
  | 'childrenAnimationsJson___layers___shapes___nm'
  | 'childrenAnimationsJson___layers___shapes___bm'
  | 'childrenAnimationsJson___layers___shapes___hd'
  | 'childrenAnimationsJson___layers___ip'
  | 'childrenAnimationsJson___layers___op'
  | 'childrenAnimationsJson___layers___st'
  | 'childrenAnimationsJson___layers___bm'
  | 'childAnimationsJson___id'
  | 'childAnimationsJson___parent___id'
  | 'childAnimationsJson___parent___parent___id'
  | 'childAnimationsJson___parent___parent___children'
  | 'childAnimationsJson___parent___children'
  | 'childAnimationsJson___parent___children___id'
  | 'childAnimationsJson___parent___children___children'
  | 'childAnimationsJson___parent___internal___content'
  | 'childAnimationsJson___parent___internal___contentDigest'
  | 'childAnimationsJson___parent___internal___description'
  | 'childAnimationsJson___parent___internal___fieldOwners'
  | 'childAnimationsJson___parent___internal___ignoreType'
  | 'childAnimationsJson___parent___internal___mediaType'
  | 'childAnimationsJson___parent___internal___owner'
  | 'childAnimationsJson___parent___internal___type'
  | 'childAnimationsJson___children'
  | 'childAnimationsJson___children___id'
  | 'childAnimationsJson___children___parent___id'
  | 'childAnimationsJson___children___parent___children'
  | 'childAnimationsJson___children___children'
  | 'childAnimationsJson___children___children___id'
  | 'childAnimationsJson___children___children___children'
  | 'childAnimationsJson___children___internal___content'
  | 'childAnimationsJson___children___internal___contentDigest'
  | 'childAnimationsJson___children___internal___description'
  | 'childAnimationsJson___children___internal___fieldOwners'
  | 'childAnimationsJson___children___internal___ignoreType'
  | 'childAnimationsJson___children___internal___mediaType'
  | 'childAnimationsJson___children___internal___owner'
  | 'childAnimationsJson___children___internal___type'
  | 'childAnimationsJson___internal___content'
  | 'childAnimationsJson___internal___contentDigest'
  | 'childAnimationsJson___internal___description'
  | 'childAnimationsJson___internal___fieldOwners'
  | 'childAnimationsJson___internal___ignoreType'
  | 'childAnimationsJson___internal___mediaType'
  | 'childAnimationsJson___internal___owner'
  | 'childAnimationsJson___internal___type'
  | 'childAnimationsJson___tgs'
  | 'childAnimationsJson___v'
  | 'childAnimationsJson___fr'
  | 'childAnimationsJson___ip'
  | 'childAnimationsJson___op'
  | 'childAnimationsJson___w'
  | 'childAnimationsJson___h'
  | 'childAnimationsJson___nm'
  | 'childAnimationsJson___ddd'
  | 'childAnimationsJson___layers'
  | 'childAnimationsJson___layers___ddd'
  | 'childAnimationsJson___layers___ind'
  | 'childAnimationsJson___layers___ty'
  | 'childAnimationsJson___layers___nm'
  | 'childAnimationsJson___layers___sr'
  | 'childAnimationsJson___layers___ao'
  | 'childAnimationsJson___layers___shapes'
  | 'childAnimationsJson___layers___shapes___ty'
  | 'childAnimationsJson___layers___shapes___it'
  | 'childAnimationsJson___layers___shapes___nm'
  | 'childAnimationsJson___layers___shapes___bm'
  | 'childAnimationsJson___layers___shapes___hd'
  | 'childAnimationsJson___layers___ip'
  | 'childAnimationsJson___layers___op'
  | 'childAnimationsJson___layers___st'
  | 'childAnimationsJson___layers___bm'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  readonly __typename?: 'FileGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<FileFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  readonly __typename?: 'DirectoryConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  readonly __typename?: 'DirectoryEdge';
  readonly next?: Maybe<Directory>;
  readonly node: Directory;
  readonly previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  readonly __typename?: 'DirectoryGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  readonly sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  readonly absolutePath?: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath?: InputMaybe<StringQueryOperatorInput>;
  readonly extension?: InputMaybe<StringQueryOperatorInput>;
  readonly size?: InputMaybe<IntQueryOperatorInput>;
  readonly prettySize?: InputMaybe<StringQueryOperatorInput>;
  readonly modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  readonly accessTime?: InputMaybe<DateQueryOperatorInput>;
  readonly changeTime?: InputMaybe<DateQueryOperatorInput>;
  readonly birthTime?: InputMaybe<DateQueryOperatorInput>;
  readonly root?: InputMaybe<StringQueryOperatorInput>;
  readonly dir?: InputMaybe<StringQueryOperatorInput>;
  readonly base?: InputMaybe<StringQueryOperatorInput>;
  readonly ext?: InputMaybe<StringQueryOperatorInput>;
  readonly name?: InputMaybe<StringQueryOperatorInput>;
  readonly relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  readonly dev?: InputMaybe<IntQueryOperatorInput>;
  readonly mode?: InputMaybe<IntQueryOperatorInput>;
  readonly nlink?: InputMaybe<IntQueryOperatorInput>;
  readonly uid?: InputMaybe<IntQueryOperatorInput>;
  readonly gid?: InputMaybe<IntQueryOperatorInput>;
  readonly rdev?: InputMaybe<IntQueryOperatorInput>;
  readonly ino?: InputMaybe<FloatQueryOperatorInput>;
  readonly atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly atime?: InputMaybe<DateQueryOperatorInput>;
  readonly mtime?: InputMaybe<DateQueryOperatorInput>;
  readonly ctime?: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime?: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<DirectoryFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  readonly title?: InputMaybe<StringQueryOperatorInput>;
  readonly description?: InputMaybe<StringQueryOperatorInput>;
  readonly siteUrl?: InputMaybe<StringQueryOperatorInput>;
  readonly cookieName?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFlagsFilterInput = {
  readonly FAST_DEV?: InputMaybe<BooleanQueryOperatorInput>;
};

export type SiteConnection = {
  readonly __typename?: 'SiteConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  readonly __typename?: 'SiteEdge';
  readonly next?: Maybe<Site>;
  readonly node: Site;
  readonly previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___cookieName'
  | 'flags___FAST_DEV'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  readonly __typename?: 'SiteGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  readonly buildTime?: InputMaybe<DateQueryOperatorInput>;
  readonly siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  readonly flags?: InputMaybe<SiteFlagsFilterInput>;
  readonly polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  readonly pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  readonly jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<SiteFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  readonly __typename?: 'SiteFunctionConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  readonly __typename?: 'SiteFunctionEdge';
  readonly next?: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  readonly __typename?: 'SiteFunctionGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  readonly functionRoute?: InputMaybe<StringQueryOperatorInput>;
  readonly pluginName?: InputMaybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  readonly matchPath?: InputMaybe<StringQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<SiteFunctionFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  readonly resolve?: InputMaybe<StringQueryOperatorInput>;
  readonly name?: InputMaybe<StringQueryOperatorInput>;
  readonly version?: InputMaybe<StringQueryOperatorInput>;
  readonly nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  readonly browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  readonly ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  readonly pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  readonly pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  readonly packageJson?: InputMaybe<JsonQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  readonly __typename?: 'SitePageConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  readonly __typename?: 'SitePageEdge';
  readonly next?: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  readonly __typename?: 'SitePageGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  readonly path?: InputMaybe<StringQueryOperatorInput>;
  readonly component?: InputMaybe<StringQueryOperatorInput>;
  readonly internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  readonly componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  readonly matchPath?: InputMaybe<StringQueryOperatorInput>;
  readonly pageContext?: InputMaybe<JsonQueryOperatorInput>;
  readonly pluginCreator?: InputMaybe<SitePluginFilterInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<SitePageFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  readonly __typename?: 'SitePluginConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  readonly __typename?: 'SitePluginEdge';
  readonly next?: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  readonly __typename?: 'SitePluginGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<SitePluginFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  readonly __typename?: 'SiteBuildMetadataConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  readonly __typename?: 'SiteBuildMetadataEdge';
  readonly next?: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  readonly __typename?: 'SiteBuildMetadataGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  readonly buildTime?: InputMaybe<DateQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  readonly __typename?: 'ImageSharpConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  readonly __typename?: 'ImageSharpEdge';
  readonly next?: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  readonly __typename?: 'ImageSharpGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<ImageSharpFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ExtractedSvgConnection = {
  readonly __typename?: 'ExtractedSvgConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ExtractedSvgEdge>;
  readonly nodes: ReadonlyArray<ExtractedSvg>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ExtractedSvgGroupConnection>;
};


export type ExtractedSvgConnectionDistinctArgs = {
  field: ExtractedSvgFieldsEnum;
};


export type ExtractedSvgConnectionMaxArgs = {
  field: ExtractedSvgFieldsEnum;
};


export type ExtractedSvgConnectionMinArgs = {
  field: ExtractedSvgFieldsEnum;
};


export type ExtractedSvgConnectionSumArgs = {
  field: ExtractedSvgFieldsEnum;
};


export type ExtractedSvgConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ExtractedSvgFieldsEnum;
};

export type ExtractedSvgEdge = {
  readonly __typename?: 'ExtractedSvgEdge';
  readonly next?: Maybe<ExtractedSvg>;
  readonly node: ExtractedSvg;
  readonly previous?: Maybe<ExtractedSvg>;
};

export type ExtractedSvgFieldsEnum =
  | 'content'
  | 'encoded'
  | 'path'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ExtractedSvgGroupConnection = {
  readonly __typename?: 'ExtractedSvgGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ExtractedSvgEdge>;
  readonly nodes: ReadonlyArray<ExtractedSvg>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ExtractedSvgGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};


export type ExtractedSvgGroupConnectionDistinctArgs = {
  field: ExtractedSvgFieldsEnum;
};


export type ExtractedSvgGroupConnectionMaxArgs = {
  field: ExtractedSvgFieldsEnum;
};


export type ExtractedSvgGroupConnectionMinArgs = {
  field: ExtractedSvgFieldsEnum;
};


export type ExtractedSvgGroupConnectionSumArgs = {
  field: ExtractedSvgFieldsEnum;
};


export type ExtractedSvgGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ExtractedSvgFieldsEnum;
};

export type ExtractedSvgFilterInput = {
  readonly content?: InputMaybe<StringQueryOperatorInput>;
  readonly encoded?: InputMaybe<StringQueryOperatorInput>;
  readonly path?: InputMaybe<StringQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
};

export type ExtractedSvgSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<ExtractedSvgFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ExtractedLottieConnection = {
  readonly __typename?: 'ExtractedLottieConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ExtractedLottieEdge>;
  readonly nodes: ReadonlyArray<ExtractedLottie>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ExtractedLottieGroupConnection>;
};


export type ExtractedLottieConnectionDistinctArgs = {
  field: ExtractedLottieFieldsEnum;
};


export type ExtractedLottieConnectionMaxArgs = {
  field: ExtractedLottieFieldsEnum;
};


export type ExtractedLottieConnectionMinArgs = {
  field: ExtractedLottieFieldsEnum;
};


export type ExtractedLottieConnectionSumArgs = {
  field: ExtractedLottieFieldsEnum;
};


export type ExtractedLottieConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ExtractedLottieFieldsEnum;
};

export type ExtractedLottieEdge = {
  readonly __typename?: 'ExtractedLottieEdge';
  readonly next?: Maybe<ExtractedLottie>;
  readonly node: ExtractedLottie;
  readonly previous?: Maybe<ExtractedLottie>;
};

export type ExtractedLottieFieldsEnum =
  | 'animationJson'
  | 'content'
  | 'encoded'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ExtractedLottieGroupConnection = {
  readonly __typename?: 'ExtractedLottieGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ExtractedLottieEdge>;
  readonly nodes: ReadonlyArray<ExtractedLottie>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ExtractedLottieGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};


export type ExtractedLottieGroupConnectionDistinctArgs = {
  field: ExtractedLottieFieldsEnum;
};


export type ExtractedLottieGroupConnectionMaxArgs = {
  field: ExtractedLottieFieldsEnum;
};


export type ExtractedLottieGroupConnectionMinArgs = {
  field: ExtractedLottieFieldsEnum;
};


export type ExtractedLottieGroupConnectionSumArgs = {
  field: ExtractedLottieFieldsEnum;
};


export type ExtractedLottieGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ExtractedLottieFieldsEnum;
};

export type ExtractedLottieFilterInput = {
  readonly animationJson?: InputMaybe<StringQueryOperatorInput>;
  readonly content?: InputMaybe<StringQueryOperatorInput>;
  readonly encoded?: InputMaybe<StringQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
};

export type ExtractedLottieSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<ExtractedLottieFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type PageDocConnection = {
  readonly __typename?: 'PageDocConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PageDocEdge>;
  readonly nodes: ReadonlyArray<PageDoc>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PageDocGroupConnection>;
};


export type PageDocConnectionDistinctArgs = {
  field: PageDocFieldsEnum;
};


export type PageDocConnectionMaxArgs = {
  field: PageDocFieldsEnum;
};


export type PageDocConnectionMinArgs = {
  field: PageDocFieldsEnum;
};


export type PageDocConnectionSumArgs = {
  field: PageDocFieldsEnum;
};


export type PageDocConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: PageDocFieldsEnum;
};

export type PageDocEdge = {
  readonly __typename?: 'PageDocEdge';
  readonly next?: Maybe<PageDoc>;
  readonly node: PageDoc;
  readonly previous?: Maybe<PageDoc>;
};

export type PageDocFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'description'
  | 'image___sourceInstanceName'
  | 'image___absolutePath'
  | 'image___relativePath'
  | 'image___extension'
  | 'image___size'
  | 'image___prettySize'
  | 'image___modifiedTime'
  | 'image___accessTime'
  | 'image___changeTime'
  | 'image___birthTime'
  | 'image___root'
  | 'image___dir'
  | 'image___base'
  | 'image___ext'
  | 'image___name'
  | 'image___relativeDirectory'
  | 'image___dev'
  | 'image___mode'
  | 'image___nlink'
  | 'image___uid'
  | 'image___gid'
  | 'image___rdev'
  | 'image___ino'
  | 'image___atimeMs'
  | 'image___mtimeMs'
  | 'image___ctimeMs'
  | 'image___atime'
  | 'image___mtime'
  | 'image___ctime'
  | 'image___birthtime'
  | 'image___birthtimeMs'
  | 'image___blksize'
  | 'image___blocks'
  | 'image___publicURL'
  | 'image___childrenImageSharp'
  | 'image___childrenImageSharp___fixed___base64'
  | 'image___childrenImageSharp___fixed___tracedSVG'
  | 'image___childrenImageSharp___fixed___aspectRatio'
  | 'image___childrenImageSharp___fixed___width'
  | 'image___childrenImageSharp___fixed___height'
  | 'image___childrenImageSharp___fixed___src'
  | 'image___childrenImageSharp___fixed___srcSet'
  | 'image___childrenImageSharp___fixed___srcWebp'
  | 'image___childrenImageSharp___fixed___srcSetWebp'
  | 'image___childrenImageSharp___fixed___originalName'
  | 'image___childrenImageSharp___fluid___base64'
  | 'image___childrenImageSharp___fluid___tracedSVG'
  | 'image___childrenImageSharp___fluid___aspectRatio'
  | 'image___childrenImageSharp___fluid___src'
  | 'image___childrenImageSharp___fluid___srcSet'
  | 'image___childrenImageSharp___fluid___srcWebp'
  | 'image___childrenImageSharp___fluid___srcSetWebp'
  | 'image___childrenImageSharp___fluid___sizes'
  | 'image___childrenImageSharp___fluid___originalImg'
  | 'image___childrenImageSharp___fluid___originalName'
  | 'image___childrenImageSharp___fluid___presentationWidth'
  | 'image___childrenImageSharp___fluid___presentationHeight'
  | 'image___childrenImageSharp___gatsbyImageData'
  | 'image___childrenImageSharp___original___width'
  | 'image___childrenImageSharp___original___height'
  | 'image___childrenImageSharp___original___src'
  | 'image___childrenImageSharp___resize___src'
  | 'image___childrenImageSharp___resize___tracedSVG'
  | 'image___childrenImageSharp___resize___width'
  | 'image___childrenImageSharp___resize___height'
  | 'image___childrenImageSharp___resize___aspectRatio'
  | 'image___childrenImageSharp___resize___originalName'
  | 'image___childrenImageSharp___id'
  | 'image___childrenImageSharp___parent___id'
  | 'image___childrenImageSharp___parent___children'
  | 'image___childrenImageSharp___children'
  | 'image___childrenImageSharp___children___id'
  | 'image___childrenImageSharp___children___children'
  | 'image___childrenImageSharp___internal___content'
  | 'image___childrenImageSharp___internal___contentDigest'
  | 'image___childrenImageSharp___internal___description'
  | 'image___childrenImageSharp___internal___fieldOwners'
  | 'image___childrenImageSharp___internal___ignoreType'
  | 'image___childrenImageSharp___internal___mediaType'
  | 'image___childrenImageSharp___internal___owner'
  | 'image___childrenImageSharp___internal___type'
  | 'image___childImageSharp___fixed___base64'
  | 'image___childImageSharp___fixed___tracedSVG'
  | 'image___childImageSharp___fixed___aspectRatio'
  | 'image___childImageSharp___fixed___width'
  | 'image___childImageSharp___fixed___height'
  | 'image___childImageSharp___fixed___src'
  | 'image___childImageSharp___fixed___srcSet'
  | 'image___childImageSharp___fixed___srcWebp'
  | 'image___childImageSharp___fixed___srcSetWebp'
  | 'image___childImageSharp___fixed___originalName'
  | 'image___childImageSharp___fluid___base64'
  | 'image___childImageSharp___fluid___tracedSVG'
  | 'image___childImageSharp___fluid___aspectRatio'
  | 'image___childImageSharp___fluid___src'
  | 'image___childImageSharp___fluid___srcSet'
  | 'image___childImageSharp___fluid___srcWebp'
  | 'image___childImageSharp___fluid___srcSetWebp'
  | 'image___childImageSharp___fluid___sizes'
  | 'image___childImageSharp___fluid___originalImg'
  | 'image___childImageSharp___fluid___originalName'
  | 'image___childImageSharp___fluid___presentationWidth'
  | 'image___childImageSharp___fluid___presentationHeight'
  | 'image___childImageSharp___gatsbyImageData'
  | 'image___childImageSharp___original___width'
  | 'image___childImageSharp___original___height'
  | 'image___childImageSharp___original___src'
  | 'image___childImageSharp___resize___src'
  | 'image___childImageSharp___resize___tracedSVG'
  | 'image___childImageSharp___resize___width'
  | 'image___childImageSharp___resize___height'
  | 'image___childImageSharp___resize___aspectRatio'
  | 'image___childImageSharp___resize___originalName'
  | 'image___childImageSharp___id'
  | 'image___childImageSharp___parent___id'
  | 'image___childImageSharp___parent___children'
  | 'image___childImageSharp___children'
  | 'image___childImageSharp___children___id'
  | 'image___childImageSharp___children___children'
  | 'image___childImageSharp___internal___content'
  | 'image___childImageSharp___internal___contentDigest'
  | 'image___childImageSharp___internal___description'
  | 'image___childImageSharp___internal___fieldOwners'
  | 'image___childImageSharp___internal___ignoreType'
  | 'image___childImageSharp___internal___mediaType'
  | 'image___childImageSharp___internal___owner'
  | 'image___childImageSharp___internal___type'
  | 'image___childrenPageDoc'
  | 'image___childrenPageDoc___id'
  | 'image___childrenPageDoc___parent___id'
  | 'image___childrenPageDoc___parent___children'
  | 'image___childrenPageDoc___children'
  | 'image___childrenPageDoc___children___id'
  | 'image___childrenPageDoc___children___children'
  | 'image___childrenPageDoc___internal___content'
  | 'image___childrenPageDoc___internal___contentDigest'
  | 'image___childrenPageDoc___internal___description'
  | 'image___childrenPageDoc___internal___fieldOwners'
  | 'image___childrenPageDoc___internal___ignoreType'
  | 'image___childrenPageDoc___internal___mediaType'
  | 'image___childrenPageDoc___internal___owner'
  | 'image___childrenPageDoc___internal___type'
  | 'image___childrenPageDoc___title'
  | 'image___childrenPageDoc___description'
  | 'image___childrenPageDoc___image___sourceInstanceName'
  | 'image___childrenPageDoc___image___absolutePath'
  | 'image___childrenPageDoc___image___relativePath'
  | 'image___childrenPageDoc___image___extension'
  | 'image___childrenPageDoc___image___size'
  | 'image___childrenPageDoc___image___prettySize'
  | 'image___childrenPageDoc___image___modifiedTime'
  | 'image___childrenPageDoc___image___accessTime'
  | 'image___childrenPageDoc___image___changeTime'
  | 'image___childrenPageDoc___image___birthTime'
  | 'image___childrenPageDoc___image___root'
  | 'image___childrenPageDoc___image___dir'
  | 'image___childrenPageDoc___image___base'
  | 'image___childrenPageDoc___image___ext'
  | 'image___childrenPageDoc___image___name'
  | 'image___childrenPageDoc___image___relativeDirectory'
  | 'image___childrenPageDoc___image___dev'
  | 'image___childrenPageDoc___image___mode'
  | 'image___childrenPageDoc___image___nlink'
  | 'image___childrenPageDoc___image___uid'
  | 'image___childrenPageDoc___image___gid'
  | 'image___childrenPageDoc___image___rdev'
  | 'image___childrenPageDoc___image___ino'
  | 'image___childrenPageDoc___image___atimeMs'
  | 'image___childrenPageDoc___image___mtimeMs'
  | 'image___childrenPageDoc___image___ctimeMs'
  | 'image___childrenPageDoc___image___atime'
  | 'image___childrenPageDoc___image___mtime'
  | 'image___childrenPageDoc___image___ctime'
  | 'image___childrenPageDoc___image___birthtime'
  | 'image___childrenPageDoc___image___birthtimeMs'
  | 'image___childrenPageDoc___image___blksize'
  | 'image___childrenPageDoc___image___blocks'
  | 'image___childrenPageDoc___image___publicURL'
  | 'image___childrenPageDoc___image___childrenImageSharp'
  | 'image___childrenPageDoc___image___childrenPageDoc'
  | 'image___childrenPageDoc___image___childrenImagesJson'
  | 'image___childrenPageDoc___image___childrenDocsJson'
  | 'image___childrenPageDoc___image___childrenAnimationsJson'
  | 'image___childrenPageDoc___image___id'
  | 'image___childrenPageDoc___image___children'
  | 'image___childrenPageDoc___video___sourceInstanceName'
  | 'image___childrenPageDoc___video___absolutePath'
  | 'image___childrenPageDoc___video___relativePath'
  | 'image___childrenPageDoc___video___extension'
  | 'image___childrenPageDoc___video___size'
  | 'image___childrenPageDoc___video___prettySize'
  | 'image___childrenPageDoc___video___modifiedTime'
  | 'image___childrenPageDoc___video___accessTime'
  | 'image___childrenPageDoc___video___changeTime'
  | 'image___childrenPageDoc___video___birthTime'
  | 'image___childrenPageDoc___video___root'
  | 'image___childrenPageDoc___video___dir'
  | 'image___childrenPageDoc___video___base'
  | 'image___childrenPageDoc___video___ext'
  | 'image___childrenPageDoc___video___name'
  | 'image___childrenPageDoc___video___relativeDirectory'
  | 'image___childrenPageDoc___video___dev'
  | 'image___childrenPageDoc___video___mode'
  | 'image___childrenPageDoc___video___nlink'
  | 'image___childrenPageDoc___video___uid'
  | 'image___childrenPageDoc___video___gid'
  | 'image___childrenPageDoc___video___rdev'
  | 'image___childrenPageDoc___video___ino'
  | 'image___childrenPageDoc___video___atimeMs'
  | 'image___childrenPageDoc___video___mtimeMs'
  | 'image___childrenPageDoc___video___ctimeMs'
  | 'image___childrenPageDoc___video___atime'
  | 'image___childrenPageDoc___video___mtime'
  | 'image___childrenPageDoc___video___ctime'
  | 'image___childrenPageDoc___video___birthtime'
  | 'image___childrenPageDoc___video___birthtimeMs'
  | 'image___childrenPageDoc___video___blksize'
  | 'image___childrenPageDoc___video___blocks'
  | 'image___childrenPageDoc___video___publicURL'
  | 'image___childrenPageDoc___video___childrenImageSharp'
  | 'image___childrenPageDoc___video___childrenPageDoc'
  | 'image___childrenPageDoc___video___childrenImagesJson'
  | 'image___childrenPageDoc___video___childrenDocsJson'
  | 'image___childrenPageDoc___video___childrenAnimationsJson'
  | 'image___childrenPageDoc___video___id'
  | 'image___childrenPageDoc___video___children'
  | 'image___childrenPageDoc___animation___sourceInstanceName'
  | 'image___childrenPageDoc___animation___absolutePath'
  | 'image___childrenPageDoc___animation___relativePath'
  | 'image___childrenPageDoc___animation___extension'
  | 'image___childrenPageDoc___animation___size'
  | 'image___childrenPageDoc___animation___prettySize'
  | 'image___childrenPageDoc___animation___modifiedTime'
  | 'image___childrenPageDoc___animation___accessTime'
  | 'image___childrenPageDoc___animation___changeTime'
  | 'image___childrenPageDoc___animation___birthTime'
  | 'image___childrenPageDoc___animation___root'
  | 'image___childrenPageDoc___animation___dir'
  | 'image___childrenPageDoc___animation___base'
  | 'image___childrenPageDoc___animation___ext'
  | 'image___childrenPageDoc___animation___name'
  | 'image___childrenPageDoc___animation___relativeDirectory'
  | 'image___childrenPageDoc___animation___dev'
  | 'image___childrenPageDoc___animation___mode'
  | 'image___childrenPageDoc___animation___nlink'
  | 'image___childrenPageDoc___animation___uid'
  | 'image___childrenPageDoc___animation___gid'
  | 'image___childrenPageDoc___animation___rdev'
  | 'image___childrenPageDoc___animation___ino'
  | 'image___childrenPageDoc___animation___atimeMs'
  | 'image___childrenPageDoc___animation___mtimeMs'
  | 'image___childrenPageDoc___animation___ctimeMs'
  | 'image___childrenPageDoc___animation___atime'
  | 'image___childrenPageDoc___animation___mtime'
  | 'image___childrenPageDoc___animation___ctime'
  | 'image___childrenPageDoc___animation___birthtime'
  | 'image___childrenPageDoc___animation___birthtimeMs'
  | 'image___childrenPageDoc___animation___blksize'
  | 'image___childrenPageDoc___animation___blocks'
  | 'image___childrenPageDoc___animation___publicURL'
  | 'image___childrenPageDoc___animation___childrenImageSharp'
  | 'image___childrenPageDoc___animation___childrenPageDoc'
  | 'image___childrenPageDoc___animation___childrenImagesJson'
  | 'image___childrenPageDoc___animation___childrenDocsJson'
  | 'image___childrenPageDoc___animation___childrenAnimationsJson'
  | 'image___childrenPageDoc___animation___id'
  | 'image___childrenPageDoc___animation___children'
  | 'image___childrenPageDoc___fileInformation___relativeDirectory'
  | 'image___childrenPageDoc___fileInformation___name'
  | 'image___childrenPageDoc___fileInformation___ext'
  | 'image___childrenPageDoc___fileInformation___extension'
  | 'image___childPageDoc___id'
  | 'image___childPageDoc___parent___id'
  | 'image___childPageDoc___parent___children'
  | 'image___childPageDoc___children'
  | 'image___childPageDoc___children___id'
  | 'image___childPageDoc___children___children'
  | 'image___childPageDoc___internal___content'
  | 'image___childPageDoc___internal___contentDigest'
  | 'image___childPageDoc___internal___description'
  | 'image___childPageDoc___internal___fieldOwners'
  | 'image___childPageDoc___internal___ignoreType'
  | 'image___childPageDoc___internal___mediaType'
  | 'image___childPageDoc___internal___owner'
  | 'image___childPageDoc___internal___type'
  | 'image___childPageDoc___title'
  | 'image___childPageDoc___description'
  | 'image___childPageDoc___image___sourceInstanceName'
  | 'image___childPageDoc___image___absolutePath'
  | 'image___childPageDoc___image___relativePath'
  | 'image___childPageDoc___image___extension'
  | 'image___childPageDoc___image___size'
  | 'image___childPageDoc___image___prettySize'
  | 'image___childPageDoc___image___modifiedTime'
  | 'image___childPageDoc___image___accessTime'
  | 'image___childPageDoc___image___changeTime'
  | 'image___childPageDoc___image___birthTime'
  | 'image___childPageDoc___image___root'
  | 'image___childPageDoc___image___dir'
  | 'image___childPageDoc___image___base'
  | 'image___childPageDoc___image___ext'
  | 'image___childPageDoc___image___name'
  | 'image___childPageDoc___image___relativeDirectory'
  | 'image___childPageDoc___image___dev'
  | 'image___childPageDoc___image___mode'
  | 'image___childPageDoc___image___nlink'
  | 'image___childPageDoc___image___uid'
  | 'image___childPageDoc___image___gid'
  | 'image___childPageDoc___image___rdev'
  | 'image___childPageDoc___image___ino'
  | 'image___childPageDoc___image___atimeMs'
  | 'image___childPageDoc___image___mtimeMs'
  | 'image___childPageDoc___image___ctimeMs'
  | 'image___childPageDoc___image___atime'
  | 'image___childPageDoc___image___mtime'
  | 'image___childPageDoc___image___ctime'
  | 'image___childPageDoc___image___birthtime'
  | 'image___childPageDoc___image___birthtimeMs'
  | 'image___childPageDoc___image___blksize'
  | 'image___childPageDoc___image___blocks'
  | 'image___childPageDoc___image___publicURL'
  | 'image___childPageDoc___image___childrenImageSharp'
  | 'image___childPageDoc___image___childrenPageDoc'
  | 'image___childPageDoc___image___childrenImagesJson'
  | 'image___childPageDoc___image___childrenDocsJson'
  | 'image___childPageDoc___image___childrenAnimationsJson'
  | 'image___childPageDoc___image___id'
  | 'image___childPageDoc___image___children'
  | 'image___childPageDoc___video___sourceInstanceName'
  | 'image___childPageDoc___video___absolutePath'
  | 'image___childPageDoc___video___relativePath'
  | 'image___childPageDoc___video___extension'
  | 'image___childPageDoc___video___size'
  | 'image___childPageDoc___video___prettySize'
  | 'image___childPageDoc___video___modifiedTime'
  | 'image___childPageDoc___video___accessTime'
  | 'image___childPageDoc___video___changeTime'
  | 'image___childPageDoc___video___birthTime'
  | 'image___childPageDoc___video___root'
  | 'image___childPageDoc___video___dir'
  | 'image___childPageDoc___video___base'
  | 'image___childPageDoc___video___ext'
  | 'image___childPageDoc___video___name'
  | 'image___childPageDoc___video___relativeDirectory'
  | 'image___childPageDoc___video___dev'
  | 'image___childPageDoc___video___mode'
  | 'image___childPageDoc___video___nlink'
  | 'image___childPageDoc___video___uid'
  | 'image___childPageDoc___video___gid'
  | 'image___childPageDoc___video___rdev'
  | 'image___childPageDoc___video___ino'
  | 'image___childPageDoc___video___atimeMs'
  | 'image___childPageDoc___video___mtimeMs'
  | 'image___childPageDoc___video___ctimeMs'
  | 'image___childPageDoc___video___atime'
  | 'image___childPageDoc___video___mtime'
  | 'image___childPageDoc___video___ctime'
  | 'image___childPageDoc___video___birthtime'
  | 'image___childPageDoc___video___birthtimeMs'
  | 'image___childPageDoc___video___blksize'
  | 'image___childPageDoc___video___blocks'
  | 'image___childPageDoc___video___publicURL'
  | 'image___childPageDoc___video___childrenImageSharp'
  | 'image___childPageDoc___video___childrenPageDoc'
  | 'image___childPageDoc___video___childrenImagesJson'
  | 'image___childPageDoc___video___childrenDocsJson'
  | 'image___childPageDoc___video___childrenAnimationsJson'
  | 'image___childPageDoc___video___id'
  | 'image___childPageDoc___video___children'
  | 'image___childPageDoc___animation___sourceInstanceName'
  | 'image___childPageDoc___animation___absolutePath'
  | 'image___childPageDoc___animation___relativePath'
  | 'image___childPageDoc___animation___extension'
  | 'image___childPageDoc___animation___size'
  | 'image___childPageDoc___animation___prettySize'
  | 'image___childPageDoc___animation___modifiedTime'
  | 'image___childPageDoc___animation___accessTime'
  | 'image___childPageDoc___animation___changeTime'
  | 'image___childPageDoc___animation___birthTime'
  | 'image___childPageDoc___animation___root'
  | 'image___childPageDoc___animation___dir'
  | 'image___childPageDoc___animation___base'
  | 'image___childPageDoc___animation___ext'
  | 'image___childPageDoc___animation___name'
  | 'image___childPageDoc___animation___relativeDirectory'
  | 'image___childPageDoc___animation___dev'
  | 'image___childPageDoc___animation___mode'
  | 'image___childPageDoc___animation___nlink'
  | 'image___childPageDoc___animation___uid'
  | 'image___childPageDoc___animation___gid'
  | 'image___childPageDoc___animation___rdev'
  | 'image___childPageDoc___animation___ino'
  | 'image___childPageDoc___animation___atimeMs'
  | 'image___childPageDoc___animation___mtimeMs'
  | 'image___childPageDoc___animation___ctimeMs'
  | 'image___childPageDoc___animation___atime'
  | 'image___childPageDoc___animation___mtime'
  | 'image___childPageDoc___animation___ctime'
  | 'image___childPageDoc___animation___birthtime'
  | 'image___childPageDoc___animation___birthtimeMs'
  | 'image___childPageDoc___animation___blksize'
  | 'image___childPageDoc___animation___blocks'
  | 'image___childPageDoc___animation___publicURL'
  | 'image___childPageDoc___animation___childrenImageSharp'
  | 'image___childPageDoc___animation___childrenPageDoc'
  | 'image___childPageDoc___animation___childrenImagesJson'
  | 'image___childPageDoc___animation___childrenDocsJson'
  | 'image___childPageDoc___animation___childrenAnimationsJson'
  | 'image___childPageDoc___animation___id'
  | 'image___childPageDoc___animation___children'
  | 'image___childPageDoc___fileInformation___relativeDirectory'
  | 'image___childPageDoc___fileInformation___name'
  | 'image___childPageDoc___fileInformation___ext'
  | 'image___childPageDoc___fileInformation___extension'
  | 'image___childrenImagesJson'
  | 'image___childrenImagesJson___id'
  | 'image___childrenImagesJson___parent___id'
  | 'image___childrenImagesJson___parent___children'
  | 'image___childrenImagesJson___children'
  | 'image___childrenImagesJson___children___id'
  | 'image___childrenImagesJson___children___children'
  | 'image___childrenImagesJson___internal___content'
  | 'image___childrenImagesJson___internal___contentDigest'
  | 'image___childrenImagesJson___internal___description'
  | 'image___childrenImagesJson___internal___fieldOwners'
  | 'image___childrenImagesJson___internal___ignoreType'
  | 'image___childrenImagesJson___internal___mediaType'
  | 'image___childrenImagesJson___internal___owner'
  | 'image___childrenImagesJson___internal___type'
  | 'image___childrenImagesJson___v'
  | 'image___childrenImagesJson___fr'
  | 'image___childrenImagesJson___ip'
  | 'image___childrenImagesJson___op'
  | 'image___childrenImagesJson___w'
  | 'image___childrenImagesJson___h'
  | 'image___childrenImagesJson___nm'
  | 'image___childrenImagesJson___ddd'
  | 'image___childrenImagesJson___assets'
  | 'image___childrenImagesJson___assets___id'
  | 'image___childrenImagesJson___assets___layers'
  | 'image___childrenImagesJson___layers'
  | 'image___childrenImagesJson___layers___ddd'
  | 'image___childrenImagesJson___layers___ind'
  | 'image___childrenImagesJson___layers___ty'
  | 'image___childrenImagesJson___layers___nm'
  | 'image___childrenImagesJson___layers___sr'
  | 'image___childrenImagesJson___layers___ao'
  | 'image___childrenImagesJson___layers___ip'
  | 'image___childrenImagesJson___layers___op'
  | 'image___childrenImagesJson___layers___st'
  | 'image___childrenImagesJson___layers___bm'
  | 'image___childrenImagesJson___layers___parent'
  | 'image___childrenImagesJson___layers___shapes'
  | 'image___childrenImagesJson___layers___refId'
  | 'image___childrenImagesJson___layers___w'
  | 'image___childrenImagesJson___layers___h'
  | 'image___childImagesJson___id'
  | 'image___childImagesJson___parent___id'
  | 'image___childImagesJson___parent___children'
  | 'image___childImagesJson___children'
  | 'image___childImagesJson___children___id'
  | 'image___childImagesJson___children___children'
  | 'image___childImagesJson___internal___content'
  | 'image___childImagesJson___internal___contentDigest'
  | 'image___childImagesJson___internal___description'
  | 'image___childImagesJson___internal___fieldOwners'
  | 'image___childImagesJson___internal___ignoreType'
  | 'image___childImagesJson___internal___mediaType'
  | 'image___childImagesJson___internal___owner'
  | 'image___childImagesJson___internal___type'
  | 'image___childImagesJson___v'
  | 'image___childImagesJson___fr'
  | 'image___childImagesJson___ip'
  | 'image___childImagesJson___op'
  | 'image___childImagesJson___w'
  | 'image___childImagesJson___h'
  | 'image___childImagesJson___nm'
  | 'image___childImagesJson___ddd'
  | 'image___childImagesJson___assets'
  | 'image___childImagesJson___assets___id'
  | 'image___childImagesJson___assets___layers'
  | 'image___childImagesJson___layers'
  | 'image___childImagesJson___layers___ddd'
  | 'image___childImagesJson___layers___ind'
  | 'image___childImagesJson___layers___ty'
  | 'image___childImagesJson___layers___nm'
  | 'image___childImagesJson___layers___sr'
  | 'image___childImagesJson___layers___ao'
  | 'image___childImagesJson___layers___ip'
  | 'image___childImagesJson___layers___op'
  | 'image___childImagesJson___layers___st'
  | 'image___childImagesJson___layers___bm'
  | 'image___childImagesJson___layers___parent'
  | 'image___childImagesJson___layers___shapes'
  | 'image___childImagesJson___layers___refId'
  | 'image___childImagesJson___layers___w'
  | 'image___childImagesJson___layers___h'
  | 'image___childrenDocsJson'
  | 'image___childrenDocsJson___id'
  | 'image___childrenDocsJson___parent___id'
  | 'image___childrenDocsJson___parent___children'
  | 'image___childrenDocsJson___children'
  | 'image___childrenDocsJson___children___id'
  | 'image___childrenDocsJson___children___children'
  | 'image___childrenDocsJson___internal___content'
  | 'image___childrenDocsJson___internal___contentDigest'
  | 'image___childrenDocsJson___internal___description'
  | 'image___childrenDocsJson___internal___fieldOwners'
  | 'image___childrenDocsJson___internal___ignoreType'
  | 'image___childrenDocsJson___internal___mediaType'
  | 'image___childrenDocsJson___internal___owner'
  | 'image___childrenDocsJson___internal___type'
  | 'image___childrenDocsJson___type'
  | 'image___childrenDocsJson___module___title'
  | 'image___childrenDocsJson___module___description'
  | 'image___childDocsJson___id'
  | 'image___childDocsJson___parent___id'
  | 'image___childDocsJson___parent___children'
  | 'image___childDocsJson___children'
  | 'image___childDocsJson___children___id'
  | 'image___childDocsJson___children___children'
  | 'image___childDocsJson___internal___content'
  | 'image___childDocsJson___internal___contentDigest'
  | 'image___childDocsJson___internal___description'
  | 'image___childDocsJson___internal___fieldOwners'
  | 'image___childDocsJson___internal___ignoreType'
  | 'image___childDocsJson___internal___mediaType'
  | 'image___childDocsJson___internal___owner'
  | 'image___childDocsJson___internal___type'
  | 'image___childDocsJson___type'
  | 'image___childDocsJson___module___title'
  | 'image___childDocsJson___module___description'
  | 'image___childrenAnimationsJson'
  | 'image___childrenAnimationsJson___id'
  | 'image___childrenAnimationsJson___parent___id'
  | 'image___childrenAnimationsJson___parent___children'
  | 'image___childrenAnimationsJson___children'
  | 'image___childrenAnimationsJson___children___id'
  | 'image___childrenAnimationsJson___children___children'
  | 'image___childrenAnimationsJson___internal___content'
  | 'image___childrenAnimationsJson___internal___contentDigest'
  | 'image___childrenAnimationsJson___internal___description'
  | 'image___childrenAnimationsJson___internal___fieldOwners'
  | 'image___childrenAnimationsJson___internal___ignoreType'
  | 'image___childrenAnimationsJson___internal___mediaType'
  | 'image___childrenAnimationsJson___internal___owner'
  | 'image___childrenAnimationsJson___internal___type'
  | 'image___childrenAnimationsJson___tgs'
  | 'image___childrenAnimationsJson___v'
  | 'image___childrenAnimationsJson___fr'
  | 'image___childrenAnimationsJson___ip'
  | 'image___childrenAnimationsJson___op'
  | 'image___childrenAnimationsJson___w'
  | 'image___childrenAnimationsJson___h'
  | 'image___childrenAnimationsJson___nm'
  | 'image___childrenAnimationsJson___ddd'
  | 'image___childrenAnimationsJson___layers'
  | 'image___childrenAnimationsJson___layers___ddd'
  | 'image___childrenAnimationsJson___layers___ind'
  | 'image___childrenAnimationsJson___layers___ty'
  | 'image___childrenAnimationsJson___layers___nm'
  | 'image___childrenAnimationsJson___layers___sr'
  | 'image___childrenAnimationsJson___layers___ao'
  | 'image___childrenAnimationsJson___layers___shapes'
  | 'image___childrenAnimationsJson___layers___ip'
  | 'image___childrenAnimationsJson___layers___op'
  | 'image___childrenAnimationsJson___layers___st'
  | 'image___childrenAnimationsJson___layers___bm'
  | 'image___childAnimationsJson___id'
  | 'image___childAnimationsJson___parent___id'
  | 'image___childAnimationsJson___parent___children'
  | 'image___childAnimationsJson___children'
  | 'image___childAnimationsJson___children___id'
  | 'image___childAnimationsJson___children___children'
  | 'image___childAnimationsJson___internal___content'
  | 'image___childAnimationsJson___internal___contentDigest'
  | 'image___childAnimationsJson___internal___description'
  | 'image___childAnimationsJson___internal___fieldOwners'
  | 'image___childAnimationsJson___internal___ignoreType'
  | 'image___childAnimationsJson___internal___mediaType'
  | 'image___childAnimationsJson___internal___owner'
  | 'image___childAnimationsJson___internal___type'
  | 'image___childAnimationsJson___tgs'
  | 'image___childAnimationsJson___v'
  | 'image___childAnimationsJson___fr'
  | 'image___childAnimationsJson___ip'
  | 'image___childAnimationsJson___op'
  | 'image___childAnimationsJson___w'
  | 'image___childAnimationsJson___h'
  | 'image___childAnimationsJson___nm'
  | 'image___childAnimationsJson___ddd'
  | 'image___childAnimationsJson___layers'
  | 'image___childAnimationsJson___layers___ddd'
  | 'image___childAnimationsJson___layers___ind'
  | 'image___childAnimationsJson___layers___ty'
  | 'image___childAnimationsJson___layers___nm'
  | 'image___childAnimationsJson___layers___sr'
  | 'image___childAnimationsJson___layers___ao'
  | 'image___childAnimationsJson___layers___shapes'
  | 'image___childAnimationsJson___layers___ip'
  | 'image___childAnimationsJson___layers___op'
  | 'image___childAnimationsJson___layers___st'
  | 'image___childAnimationsJson___layers___bm'
  | 'image___id'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'video___sourceInstanceName'
  | 'video___absolutePath'
  | 'video___relativePath'
  | 'video___extension'
  | 'video___size'
  | 'video___prettySize'
  | 'video___modifiedTime'
  | 'video___accessTime'
  | 'video___changeTime'
  | 'video___birthTime'
  | 'video___root'
  | 'video___dir'
  | 'video___base'
  | 'video___ext'
  | 'video___name'
  | 'video___relativeDirectory'
  | 'video___dev'
  | 'video___mode'
  | 'video___nlink'
  | 'video___uid'
  | 'video___gid'
  | 'video___rdev'
  | 'video___ino'
  | 'video___atimeMs'
  | 'video___mtimeMs'
  | 'video___ctimeMs'
  | 'video___atime'
  | 'video___mtime'
  | 'video___ctime'
  | 'video___birthtime'
  | 'video___birthtimeMs'
  | 'video___blksize'
  | 'video___blocks'
  | 'video___publicURL'
  | 'video___childrenImageSharp'
  | 'video___childrenImageSharp___fixed___base64'
  | 'video___childrenImageSharp___fixed___tracedSVG'
  | 'video___childrenImageSharp___fixed___aspectRatio'
  | 'video___childrenImageSharp___fixed___width'
  | 'video___childrenImageSharp___fixed___height'
  | 'video___childrenImageSharp___fixed___src'
  | 'video___childrenImageSharp___fixed___srcSet'
  | 'video___childrenImageSharp___fixed___srcWebp'
  | 'video___childrenImageSharp___fixed___srcSetWebp'
  | 'video___childrenImageSharp___fixed___originalName'
  | 'video___childrenImageSharp___fluid___base64'
  | 'video___childrenImageSharp___fluid___tracedSVG'
  | 'video___childrenImageSharp___fluid___aspectRatio'
  | 'video___childrenImageSharp___fluid___src'
  | 'video___childrenImageSharp___fluid___srcSet'
  | 'video___childrenImageSharp___fluid___srcWebp'
  | 'video___childrenImageSharp___fluid___srcSetWebp'
  | 'video___childrenImageSharp___fluid___sizes'
  | 'video___childrenImageSharp___fluid___originalImg'
  | 'video___childrenImageSharp___fluid___originalName'
  | 'video___childrenImageSharp___fluid___presentationWidth'
  | 'video___childrenImageSharp___fluid___presentationHeight'
  | 'video___childrenImageSharp___gatsbyImageData'
  | 'video___childrenImageSharp___original___width'
  | 'video___childrenImageSharp___original___height'
  | 'video___childrenImageSharp___original___src'
  | 'video___childrenImageSharp___resize___src'
  | 'video___childrenImageSharp___resize___tracedSVG'
  | 'video___childrenImageSharp___resize___width'
  | 'video___childrenImageSharp___resize___height'
  | 'video___childrenImageSharp___resize___aspectRatio'
  | 'video___childrenImageSharp___resize___originalName'
  | 'video___childrenImageSharp___id'
  | 'video___childrenImageSharp___parent___id'
  | 'video___childrenImageSharp___parent___children'
  | 'video___childrenImageSharp___children'
  | 'video___childrenImageSharp___children___id'
  | 'video___childrenImageSharp___children___children'
  | 'video___childrenImageSharp___internal___content'
  | 'video___childrenImageSharp___internal___contentDigest'
  | 'video___childrenImageSharp___internal___description'
  | 'video___childrenImageSharp___internal___fieldOwners'
  | 'video___childrenImageSharp___internal___ignoreType'
  | 'video___childrenImageSharp___internal___mediaType'
  | 'video___childrenImageSharp___internal___owner'
  | 'video___childrenImageSharp___internal___type'
  | 'video___childImageSharp___fixed___base64'
  | 'video___childImageSharp___fixed___tracedSVG'
  | 'video___childImageSharp___fixed___aspectRatio'
  | 'video___childImageSharp___fixed___width'
  | 'video___childImageSharp___fixed___height'
  | 'video___childImageSharp___fixed___src'
  | 'video___childImageSharp___fixed___srcSet'
  | 'video___childImageSharp___fixed___srcWebp'
  | 'video___childImageSharp___fixed___srcSetWebp'
  | 'video___childImageSharp___fixed___originalName'
  | 'video___childImageSharp___fluid___base64'
  | 'video___childImageSharp___fluid___tracedSVG'
  | 'video___childImageSharp___fluid___aspectRatio'
  | 'video___childImageSharp___fluid___src'
  | 'video___childImageSharp___fluid___srcSet'
  | 'video___childImageSharp___fluid___srcWebp'
  | 'video___childImageSharp___fluid___srcSetWebp'
  | 'video___childImageSharp___fluid___sizes'
  | 'video___childImageSharp___fluid___originalImg'
  | 'video___childImageSharp___fluid___originalName'
  | 'video___childImageSharp___fluid___presentationWidth'
  | 'video___childImageSharp___fluid___presentationHeight'
  | 'video___childImageSharp___gatsbyImageData'
  | 'video___childImageSharp___original___width'
  | 'video___childImageSharp___original___height'
  | 'video___childImageSharp___original___src'
  | 'video___childImageSharp___resize___src'
  | 'video___childImageSharp___resize___tracedSVG'
  | 'video___childImageSharp___resize___width'
  | 'video___childImageSharp___resize___height'
  | 'video___childImageSharp___resize___aspectRatio'
  | 'video___childImageSharp___resize___originalName'
  | 'video___childImageSharp___id'
  | 'video___childImageSharp___parent___id'
  | 'video___childImageSharp___parent___children'
  | 'video___childImageSharp___children'
  | 'video___childImageSharp___children___id'
  | 'video___childImageSharp___children___children'
  | 'video___childImageSharp___internal___content'
  | 'video___childImageSharp___internal___contentDigest'
  | 'video___childImageSharp___internal___description'
  | 'video___childImageSharp___internal___fieldOwners'
  | 'video___childImageSharp___internal___ignoreType'
  | 'video___childImageSharp___internal___mediaType'
  | 'video___childImageSharp___internal___owner'
  | 'video___childImageSharp___internal___type'
  | 'video___childrenPageDoc'
  | 'video___childrenPageDoc___id'
  | 'video___childrenPageDoc___parent___id'
  | 'video___childrenPageDoc___parent___children'
  | 'video___childrenPageDoc___children'
  | 'video___childrenPageDoc___children___id'
  | 'video___childrenPageDoc___children___children'
  | 'video___childrenPageDoc___internal___content'
  | 'video___childrenPageDoc___internal___contentDigest'
  | 'video___childrenPageDoc___internal___description'
  | 'video___childrenPageDoc___internal___fieldOwners'
  | 'video___childrenPageDoc___internal___ignoreType'
  | 'video___childrenPageDoc___internal___mediaType'
  | 'video___childrenPageDoc___internal___owner'
  | 'video___childrenPageDoc___internal___type'
  | 'video___childrenPageDoc___title'
  | 'video___childrenPageDoc___description'
  | 'video___childrenPageDoc___image___sourceInstanceName'
  | 'video___childrenPageDoc___image___absolutePath'
  | 'video___childrenPageDoc___image___relativePath'
  | 'video___childrenPageDoc___image___extension'
  | 'video___childrenPageDoc___image___size'
  | 'video___childrenPageDoc___image___prettySize'
  | 'video___childrenPageDoc___image___modifiedTime'
  | 'video___childrenPageDoc___image___accessTime'
  | 'video___childrenPageDoc___image___changeTime'
  | 'video___childrenPageDoc___image___birthTime'
  | 'video___childrenPageDoc___image___root'
  | 'video___childrenPageDoc___image___dir'
  | 'video___childrenPageDoc___image___base'
  | 'video___childrenPageDoc___image___ext'
  | 'video___childrenPageDoc___image___name'
  | 'video___childrenPageDoc___image___relativeDirectory'
  | 'video___childrenPageDoc___image___dev'
  | 'video___childrenPageDoc___image___mode'
  | 'video___childrenPageDoc___image___nlink'
  | 'video___childrenPageDoc___image___uid'
  | 'video___childrenPageDoc___image___gid'
  | 'video___childrenPageDoc___image___rdev'
  | 'video___childrenPageDoc___image___ino'
  | 'video___childrenPageDoc___image___atimeMs'
  | 'video___childrenPageDoc___image___mtimeMs'
  | 'video___childrenPageDoc___image___ctimeMs'
  | 'video___childrenPageDoc___image___atime'
  | 'video___childrenPageDoc___image___mtime'
  | 'video___childrenPageDoc___image___ctime'
  | 'video___childrenPageDoc___image___birthtime'
  | 'video___childrenPageDoc___image___birthtimeMs'
  | 'video___childrenPageDoc___image___blksize'
  | 'video___childrenPageDoc___image___blocks'
  | 'video___childrenPageDoc___image___publicURL'
  | 'video___childrenPageDoc___image___childrenImageSharp'
  | 'video___childrenPageDoc___image___childrenPageDoc'
  | 'video___childrenPageDoc___image___childrenImagesJson'
  | 'video___childrenPageDoc___image___childrenDocsJson'
  | 'video___childrenPageDoc___image___childrenAnimationsJson'
  | 'video___childrenPageDoc___image___id'
  | 'video___childrenPageDoc___image___children'
  | 'video___childrenPageDoc___video___sourceInstanceName'
  | 'video___childrenPageDoc___video___absolutePath'
  | 'video___childrenPageDoc___video___relativePath'
  | 'video___childrenPageDoc___video___extension'
  | 'video___childrenPageDoc___video___size'
  | 'video___childrenPageDoc___video___prettySize'
  | 'video___childrenPageDoc___video___modifiedTime'
  | 'video___childrenPageDoc___video___accessTime'
  | 'video___childrenPageDoc___video___changeTime'
  | 'video___childrenPageDoc___video___birthTime'
  | 'video___childrenPageDoc___video___root'
  | 'video___childrenPageDoc___video___dir'
  | 'video___childrenPageDoc___video___base'
  | 'video___childrenPageDoc___video___ext'
  | 'video___childrenPageDoc___video___name'
  | 'video___childrenPageDoc___video___relativeDirectory'
  | 'video___childrenPageDoc___video___dev'
  | 'video___childrenPageDoc___video___mode'
  | 'video___childrenPageDoc___video___nlink'
  | 'video___childrenPageDoc___video___uid'
  | 'video___childrenPageDoc___video___gid'
  | 'video___childrenPageDoc___video___rdev'
  | 'video___childrenPageDoc___video___ino'
  | 'video___childrenPageDoc___video___atimeMs'
  | 'video___childrenPageDoc___video___mtimeMs'
  | 'video___childrenPageDoc___video___ctimeMs'
  | 'video___childrenPageDoc___video___atime'
  | 'video___childrenPageDoc___video___mtime'
  | 'video___childrenPageDoc___video___ctime'
  | 'video___childrenPageDoc___video___birthtime'
  | 'video___childrenPageDoc___video___birthtimeMs'
  | 'video___childrenPageDoc___video___blksize'
  | 'video___childrenPageDoc___video___blocks'
  | 'video___childrenPageDoc___video___publicURL'
  | 'video___childrenPageDoc___video___childrenImageSharp'
  | 'video___childrenPageDoc___video___childrenPageDoc'
  | 'video___childrenPageDoc___video___childrenImagesJson'
  | 'video___childrenPageDoc___video___childrenDocsJson'
  | 'video___childrenPageDoc___video___childrenAnimationsJson'
  | 'video___childrenPageDoc___video___id'
  | 'video___childrenPageDoc___video___children'
  | 'video___childrenPageDoc___animation___sourceInstanceName'
  | 'video___childrenPageDoc___animation___absolutePath'
  | 'video___childrenPageDoc___animation___relativePath'
  | 'video___childrenPageDoc___animation___extension'
  | 'video___childrenPageDoc___animation___size'
  | 'video___childrenPageDoc___animation___prettySize'
  | 'video___childrenPageDoc___animation___modifiedTime'
  | 'video___childrenPageDoc___animation___accessTime'
  | 'video___childrenPageDoc___animation___changeTime'
  | 'video___childrenPageDoc___animation___birthTime'
  | 'video___childrenPageDoc___animation___root'
  | 'video___childrenPageDoc___animation___dir'
  | 'video___childrenPageDoc___animation___base'
  | 'video___childrenPageDoc___animation___ext'
  | 'video___childrenPageDoc___animation___name'
  | 'video___childrenPageDoc___animation___relativeDirectory'
  | 'video___childrenPageDoc___animation___dev'
  | 'video___childrenPageDoc___animation___mode'
  | 'video___childrenPageDoc___animation___nlink'
  | 'video___childrenPageDoc___animation___uid'
  | 'video___childrenPageDoc___animation___gid'
  | 'video___childrenPageDoc___animation___rdev'
  | 'video___childrenPageDoc___animation___ino'
  | 'video___childrenPageDoc___animation___atimeMs'
  | 'video___childrenPageDoc___animation___mtimeMs'
  | 'video___childrenPageDoc___animation___ctimeMs'
  | 'video___childrenPageDoc___animation___atime'
  | 'video___childrenPageDoc___animation___mtime'
  | 'video___childrenPageDoc___animation___ctime'
  | 'video___childrenPageDoc___animation___birthtime'
  | 'video___childrenPageDoc___animation___birthtimeMs'
  | 'video___childrenPageDoc___animation___blksize'
  | 'video___childrenPageDoc___animation___blocks'
  | 'video___childrenPageDoc___animation___publicURL'
  | 'video___childrenPageDoc___animation___childrenImageSharp'
  | 'video___childrenPageDoc___animation___childrenPageDoc'
  | 'video___childrenPageDoc___animation___childrenImagesJson'
  | 'video___childrenPageDoc___animation___childrenDocsJson'
  | 'video___childrenPageDoc___animation___childrenAnimationsJson'
  | 'video___childrenPageDoc___animation___id'
  | 'video___childrenPageDoc___animation___children'
  | 'video___childrenPageDoc___fileInformation___relativeDirectory'
  | 'video___childrenPageDoc___fileInformation___name'
  | 'video___childrenPageDoc___fileInformation___ext'
  | 'video___childrenPageDoc___fileInformation___extension'
  | 'video___childPageDoc___id'
  | 'video___childPageDoc___parent___id'
  | 'video___childPageDoc___parent___children'
  | 'video___childPageDoc___children'
  | 'video___childPageDoc___children___id'
  | 'video___childPageDoc___children___children'
  | 'video___childPageDoc___internal___content'
  | 'video___childPageDoc___internal___contentDigest'
  | 'video___childPageDoc___internal___description'
  | 'video___childPageDoc___internal___fieldOwners'
  | 'video___childPageDoc___internal___ignoreType'
  | 'video___childPageDoc___internal___mediaType'
  | 'video___childPageDoc___internal___owner'
  | 'video___childPageDoc___internal___type'
  | 'video___childPageDoc___title'
  | 'video___childPageDoc___description'
  | 'video___childPageDoc___image___sourceInstanceName'
  | 'video___childPageDoc___image___absolutePath'
  | 'video___childPageDoc___image___relativePath'
  | 'video___childPageDoc___image___extension'
  | 'video___childPageDoc___image___size'
  | 'video___childPageDoc___image___prettySize'
  | 'video___childPageDoc___image___modifiedTime'
  | 'video___childPageDoc___image___accessTime'
  | 'video___childPageDoc___image___changeTime'
  | 'video___childPageDoc___image___birthTime'
  | 'video___childPageDoc___image___root'
  | 'video___childPageDoc___image___dir'
  | 'video___childPageDoc___image___base'
  | 'video___childPageDoc___image___ext'
  | 'video___childPageDoc___image___name'
  | 'video___childPageDoc___image___relativeDirectory'
  | 'video___childPageDoc___image___dev'
  | 'video___childPageDoc___image___mode'
  | 'video___childPageDoc___image___nlink'
  | 'video___childPageDoc___image___uid'
  | 'video___childPageDoc___image___gid'
  | 'video___childPageDoc___image___rdev'
  | 'video___childPageDoc___image___ino'
  | 'video___childPageDoc___image___atimeMs'
  | 'video___childPageDoc___image___mtimeMs'
  | 'video___childPageDoc___image___ctimeMs'
  | 'video___childPageDoc___image___atime'
  | 'video___childPageDoc___image___mtime'
  | 'video___childPageDoc___image___ctime'
  | 'video___childPageDoc___image___birthtime'
  | 'video___childPageDoc___image___birthtimeMs'
  | 'video___childPageDoc___image___blksize'
  | 'video___childPageDoc___image___blocks'
  | 'video___childPageDoc___image___publicURL'
  | 'video___childPageDoc___image___childrenImageSharp'
  | 'video___childPageDoc___image___childrenPageDoc'
  | 'video___childPageDoc___image___childrenImagesJson'
  | 'video___childPageDoc___image___childrenDocsJson'
  | 'video___childPageDoc___image___childrenAnimationsJson'
  | 'video___childPageDoc___image___id'
  | 'video___childPageDoc___image___children'
  | 'video___childPageDoc___video___sourceInstanceName'
  | 'video___childPageDoc___video___absolutePath'
  | 'video___childPageDoc___video___relativePath'
  | 'video___childPageDoc___video___extension'
  | 'video___childPageDoc___video___size'
  | 'video___childPageDoc___video___prettySize'
  | 'video___childPageDoc___video___modifiedTime'
  | 'video___childPageDoc___video___accessTime'
  | 'video___childPageDoc___video___changeTime'
  | 'video___childPageDoc___video___birthTime'
  | 'video___childPageDoc___video___root'
  | 'video___childPageDoc___video___dir'
  | 'video___childPageDoc___video___base'
  | 'video___childPageDoc___video___ext'
  | 'video___childPageDoc___video___name'
  | 'video___childPageDoc___video___relativeDirectory'
  | 'video___childPageDoc___video___dev'
  | 'video___childPageDoc___video___mode'
  | 'video___childPageDoc___video___nlink'
  | 'video___childPageDoc___video___uid'
  | 'video___childPageDoc___video___gid'
  | 'video___childPageDoc___video___rdev'
  | 'video___childPageDoc___video___ino'
  | 'video___childPageDoc___video___atimeMs'
  | 'video___childPageDoc___video___mtimeMs'
  | 'video___childPageDoc___video___ctimeMs'
  | 'video___childPageDoc___video___atime'
  | 'video___childPageDoc___video___mtime'
  | 'video___childPageDoc___video___ctime'
  | 'video___childPageDoc___video___birthtime'
  | 'video___childPageDoc___video___birthtimeMs'
  | 'video___childPageDoc___video___blksize'
  | 'video___childPageDoc___video___blocks'
  | 'video___childPageDoc___video___publicURL'
  | 'video___childPageDoc___video___childrenImageSharp'
  | 'video___childPageDoc___video___childrenPageDoc'
  | 'video___childPageDoc___video___childrenImagesJson'
  | 'video___childPageDoc___video___childrenDocsJson'
  | 'video___childPageDoc___video___childrenAnimationsJson'
  | 'video___childPageDoc___video___id'
  | 'video___childPageDoc___video___children'
  | 'video___childPageDoc___animation___sourceInstanceName'
  | 'video___childPageDoc___animation___absolutePath'
  | 'video___childPageDoc___animation___relativePath'
  | 'video___childPageDoc___animation___extension'
  | 'video___childPageDoc___animation___size'
  | 'video___childPageDoc___animation___prettySize'
  | 'video___childPageDoc___animation___modifiedTime'
  | 'video___childPageDoc___animation___accessTime'
  | 'video___childPageDoc___animation___changeTime'
  | 'video___childPageDoc___animation___birthTime'
  | 'video___childPageDoc___animation___root'
  | 'video___childPageDoc___animation___dir'
  | 'video___childPageDoc___animation___base'
  | 'video___childPageDoc___animation___ext'
  | 'video___childPageDoc___animation___name'
  | 'video___childPageDoc___animation___relativeDirectory'
  | 'video___childPageDoc___animation___dev'
  | 'video___childPageDoc___animation___mode'
  | 'video___childPageDoc___animation___nlink'
  | 'video___childPageDoc___animation___uid'
  | 'video___childPageDoc___animation___gid'
  | 'video___childPageDoc___animation___rdev'
  | 'video___childPageDoc___animation___ino'
  | 'video___childPageDoc___animation___atimeMs'
  | 'video___childPageDoc___animation___mtimeMs'
  | 'video___childPageDoc___animation___ctimeMs'
  | 'video___childPageDoc___animation___atime'
  | 'video___childPageDoc___animation___mtime'
  | 'video___childPageDoc___animation___ctime'
  | 'video___childPageDoc___animation___birthtime'
  | 'video___childPageDoc___animation___birthtimeMs'
  | 'video___childPageDoc___animation___blksize'
  | 'video___childPageDoc___animation___blocks'
  | 'video___childPageDoc___animation___publicURL'
  | 'video___childPageDoc___animation___childrenImageSharp'
  | 'video___childPageDoc___animation___childrenPageDoc'
  | 'video___childPageDoc___animation___childrenImagesJson'
  | 'video___childPageDoc___animation___childrenDocsJson'
  | 'video___childPageDoc___animation___childrenAnimationsJson'
  | 'video___childPageDoc___animation___id'
  | 'video___childPageDoc___animation___children'
  | 'video___childPageDoc___fileInformation___relativeDirectory'
  | 'video___childPageDoc___fileInformation___name'
  | 'video___childPageDoc___fileInformation___ext'
  | 'video___childPageDoc___fileInformation___extension'
  | 'video___childrenImagesJson'
  | 'video___childrenImagesJson___id'
  | 'video___childrenImagesJson___parent___id'
  | 'video___childrenImagesJson___parent___children'
  | 'video___childrenImagesJson___children'
  | 'video___childrenImagesJson___children___id'
  | 'video___childrenImagesJson___children___children'
  | 'video___childrenImagesJson___internal___content'
  | 'video___childrenImagesJson___internal___contentDigest'
  | 'video___childrenImagesJson___internal___description'
  | 'video___childrenImagesJson___internal___fieldOwners'
  | 'video___childrenImagesJson___internal___ignoreType'
  | 'video___childrenImagesJson___internal___mediaType'
  | 'video___childrenImagesJson___internal___owner'
  | 'video___childrenImagesJson___internal___type'
  | 'video___childrenImagesJson___v'
  | 'video___childrenImagesJson___fr'
  | 'video___childrenImagesJson___ip'
  | 'video___childrenImagesJson___op'
  | 'video___childrenImagesJson___w'
  | 'video___childrenImagesJson___h'
  | 'video___childrenImagesJson___nm'
  | 'video___childrenImagesJson___ddd'
  | 'video___childrenImagesJson___assets'
  | 'video___childrenImagesJson___assets___id'
  | 'video___childrenImagesJson___assets___layers'
  | 'video___childrenImagesJson___layers'
  | 'video___childrenImagesJson___layers___ddd'
  | 'video___childrenImagesJson___layers___ind'
  | 'video___childrenImagesJson___layers___ty'
  | 'video___childrenImagesJson___layers___nm'
  | 'video___childrenImagesJson___layers___sr'
  | 'video___childrenImagesJson___layers___ao'
  | 'video___childrenImagesJson___layers___ip'
  | 'video___childrenImagesJson___layers___op'
  | 'video___childrenImagesJson___layers___st'
  | 'video___childrenImagesJson___layers___bm'
  | 'video___childrenImagesJson___layers___parent'
  | 'video___childrenImagesJson___layers___shapes'
  | 'video___childrenImagesJson___layers___refId'
  | 'video___childrenImagesJson___layers___w'
  | 'video___childrenImagesJson___layers___h'
  | 'video___childImagesJson___id'
  | 'video___childImagesJson___parent___id'
  | 'video___childImagesJson___parent___children'
  | 'video___childImagesJson___children'
  | 'video___childImagesJson___children___id'
  | 'video___childImagesJson___children___children'
  | 'video___childImagesJson___internal___content'
  | 'video___childImagesJson___internal___contentDigest'
  | 'video___childImagesJson___internal___description'
  | 'video___childImagesJson___internal___fieldOwners'
  | 'video___childImagesJson___internal___ignoreType'
  | 'video___childImagesJson___internal___mediaType'
  | 'video___childImagesJson___internal___owner'
  | 'video___childImagesJson___internal___type'
  | 'video___childImagesJson___v'
  | 'video___childImagesJson___fr'
  | 'video___childImagesJson___ip'
  | 'video___childImagesJson___op'
  | 'video___childImagesJson___w'
  | 'video___childImagesJson___h'
  | 'video___childImagesJson___nm'
  | 'video___childImagesJson___ddd'
  | 'video___childImagesJson___assets'
  | 'video___childImagesJson___assets___id'
  | 'video___childImagesJson___assets___layers'
  | 'video___childImagesJson___layers'
  | 'video___childImagesJson___layers___ddd'
  | 'video___childImagesJson___layers___ind'
  | 'video___childImagesJson___layers___ty'
  | 'video___childImagesJson___layers___nm'
  | 'video___childImagesJson___layers___sr'
  | 'video___childImagesJson___layers___ao'
  | 'video___childImagesJson___layers___ip'
  | 'video___childImagesJson___layers___op'
  | 'video___childImagesJson___layers___st'
  | 'video___childImagesJson___layers___bm'
  | 'video___childImagesJson___layers___parent'
  | 'video___childImagesJson___layers___shapes'
  | 'video___childImagesJson___layers___refId'
  | 'video___childImagesJson___layers___w'
  | 'video___childImagesJson___layers___h'
  | 'video___childrenDocsJson'
  | 'video___childrenDocsJson___id'
  | 'video___childrenDocsJson___parent___id'
  | 'video___childrenDocsJson___parent___children'
  | 'video___childrenDocsJson___children'
  | 'video___childrenDocsJson___children___id'
  | 'video___childrenDocsJson___children___children'
  | 'video___childrenDocsJson___internal___content'
  | 'video___childrenDocsJson___internal___contentDigest'
  | 'video___childrenDocsJson___internal___description'
  | 'video___childrenDocsJson___internal___fieldOwners'
  | 'video___childrenDocsJson___internal___ignoreType'
  | 'video___childrenDocsJson___internal___mediaType'
  | 'video___childrenDocsJson___internal___owner'
  | 'video___childrenDocsJson___internal___type'
  | 'video___childrenDocsJson___type'
  | 'video___childrenDocsJson___module___title'
  | 'video___childrenDocsJson___module___description'
  | 'video___childDocsJson___id'
  | 'video___childDocsJson___parent___id'
  | 'video___childDocsJson___parent___children'
  | 'video___childDocsJson___children'
  | 'video___childDocsJson___children___id'
  | 'video___childDocsJson___children___children'
  | 'video___childDocsJson___internal___content'
  | 'video___childDocsJson___internal___contentDigest'
  | 'video___childDocsJson___internal___description'
  | 'video___childDocsJson___internal___fieldOwners'
  | 'video___childDocsJson___internal___ignoreType'
  | 'video___childDocsJson___internal___mediaType'
  | 'video___childDocsJson___internal___owner'
  | 'video___childDocsJson___internal___type'
  | 'video___childDocsJson___type'
  | 'video___childDocsJson___module___title'
  | 'video___childDocsJson___module___description'
  | 'video___childrenAnimationsJson'
  | 'video___childrenAnimationsJson___id'
  | 'video___childrenAnimationsJson___parent___id'
  | 'video___childrenAnimationsJson___parent___children'
  | 'video___childrenAnimationsJson___children'
  | 'video___childrenAnimationsJson___children___id'
  | 'video___childrenAnimationsJson___children___children'
  | 'video___childrenAnimationsJson___internal___content'
  | 'video___childrenAnimationsJson___internal___contentDigest'
  | 'video___childrenAnimationsJson___internal___description'
  | 'video___childrenAnimationsJson___internal___fieldOwners'
  | 'video___childrenAnimationsJson___internal___ignoreType'
  | 'video___childrenAnimationsJson___internal___mediaType'
  | 'video___childrenAnimationsJson___internal___owner'
  | 'video___childrenAnimationsJson___internal___type'
  | 'video___childrenAnimationsJson___tgs'
  | 'video___childrenAnimationsJson___v'
  | 'video___childrenAnimationsJson___fr'
  | 'video___childrenAnimationsJson___ip'
  | 'video___childrenAnimationsJson___op'
  | 'video___childrenAnimationsJson___w'
  | 'video___childrenAnimationsJson___h'
  | 'video___childrenAnimationsJson___nm'
  | 'video___childrenAnimationsJson___ddd'
  | 'video___childrenAnimationsJson___layers'
  | 'video___childrenAnimationsJson___layers___ddd'
  | 'video___childrenAnimationsJson___layers___ind'
  | 'video___childrenAnimationsJson___layers___ty'
  | 'video___childrenAnimationsJson___layers___nm'
  | 'video___childrenAnimationsJson___layers___sr'
  | 'video___childrenAnimationsJson___layers___ao'
  | 'video___childrenAnimationsJson___layers___shapes'
  | 'video___childrenAnimationsJson___layers___ip'
  | 'video___childrenAnimationsJson___layers___op'
  | 'video___childrenAnimationsJson___layers___st'
  | 'video___childrenAnimationsJson___layers___bm'
  | 'video___childAnimationsJson___id'
  | 'video___childAnimationsJson___parent___id'
  | 'video___childAnimationsJson___parent___children'
  | 'video___childAnimationsJson___children'
  | 'video___childAnimationsJson___children___id'
  | 'video___childAnimationsJson___children___children'
  | 'video___childAnimationsJson___internal___content'
  | 'video___childAnimationsJson___internal___contentDigest'
  | 'video___childAnimationsJson___internal___description'
  | 'video___childAnimationsJson___internal___fieldOwners'
  | 'video___childAnimationsJson___internal___ignoreType'
  | 'video___childAnimationsJson___internal___mediaType'
  | 'video___childAnimationsJson___internal___owner'
  | 'video___childAnimationsJson___internal___type'
  | 'video___childAnimationsJson___tgs'
  | 'video___childAnimationsJson___v'
  | 'video___childAnimationsJson___fr'
  | 'video___childAnimationsJson___ip'
  | 'video___childAnimationsJson___op'
  | 'video___childAnimationsJson___w'
  | 'video___childAnimationsJson___h'
  | 'video___childAnimationsJson___nm'
  | 'video___childAnimationsJson___ddd'
  | 'video___childAnimationsJson___layers'
  | 'video___childAnimationsJson___layers___ddd'
  | 'video___childAnimationsJson___layers___ind'
  | 'video___childAnimationsJson___layers___ty'
  | 'video___childAnimationsJson___layers___nm'
  | 'video___childAnimationsJson___layers___sr'
  | 'video___childAnimationsJson___layers___ao'
  | 'video___childAnimationsJson___layers___shapes'
  | 'video___childAnimationsJson___layers___ip'
  | 'video___childAnimationsJson___layers___op'
  | 'video___childAnimationsJson___layers___st'
  | 'video___childAnimationsJson___layers___bm'
  | 'video___id'
  | 'video___parent___id'
  | 'video___parent___parent___id'
  | 'video___parent___parent___children'
  | 'video___parent___children'
  | 'video___parent___children___id'
  | 'video___parent___children___children'
  | 'video___parent___internal___content'
  | 'video___parent___internal___contentDigest'
  | 'video___parent___internal___description'
  | 'video___parent___internal___fieldOwners'
  | 'video___parent___internal___ignoreType'
  | 'video___parent___internal___mediaType'
  | 'video___parent___internal___owner'
  | 'video___parent___internal___type'
  | 'video___children'
  | 'video___children___id'
  | 'video___children___parent___id'
  | 'video___children___parent___children'
  | 'video___children___children'
  | 'video___children___children___id'
  | 'video___children___children___children'
  | 'video___children___internal___content'
  | 'video___children___internal___contentDigest'
  | 'video___children___internal___description'
  | 'video___children___internal___fieldOwners'
  | 'video___children___internal___ignoreType'
  | 'video___children___internal___mediaType'
  | 'video___children___internal___owner'
  | 'video___children___internal___type'
  | 'video___internal___content'
  | 'video___internal___contentDigest'
  | 'video___internal___description'
  | 'video___internal___fieldOwners'
  | 'video___internal___ignoreType'
  | 'video___internal___mediaType'
  | 'video___internal___owner'
  | 'video___internal___type'
  | 'animation___sourceInstanceName'
  | 'animation___absolutePath'
  | 'animation___relativePath'
  | 'animation___extension'
  | 'animation___size'
  | 'animation___prettySize'
  | 'animation___modifiedTime'
  | 'animation___accessTime'
  | 'animation___changeTime'
  | 'animation___birthTime'
  | 'animation___root'
  | 'animation___dir'
  | 'animation___base'
  | 'animation___ext'
  | 'animation___name'
  | 'animation___relativeDirectory'
  | 'animation___dev'
  | 'animation___mode'
  | 'animation___nlink'
  | 'animation___uid'
  | 'animation___gid'
  | 'animation___rdev'
  | 'animation___ino'
  | 'animation___atimeMs'
  | 'animation___mtimeMs'
  | 'animation___ctimeMs'
  | 'animation___atime'
  | 'animation___mtime'
  | 'animation___ctime'
  | 'animation___birthtime'
  | 'animation___birthtimeMs'
  | 'animation___blksize'
  | 'animation___blocks'
  | 'animation___publicURL'
  | 'animation___childrenImageSharp'
  | 'animation___childrenImageSharp___fixed___base64'
  | 'animation___childrenImageSharp___fixed___tracedSVG'
  | 'animation___childrenImageSharp___fixed___aspectRatio'
  | 'animation___childrenImageSharp___fixed___width'
  | 'animation___childrenImageSharp___fixed___height'
  | 'animation___childrenImageSharp___fixed___src'
  | 'animation___childrenImageSharp___fixed___srcSet'
  | 'animation___childrenImageSharp___fixed___srcWebp'
  | 'animation___childrenImageSharp___fixed___srcSetWebp'
  | 'animation___childrenImageSharp___fixed___originalName'
  | 'animation___childrenImageSharp___fluid___base64'
  | 'animation___childrenImageSharp___fluid___tracedSVG'
  | 'animation___childrenImageSharp___fluid___aspectRatio'
  | 'animation___childrenImageSharp___fluid___src'
  | 'animation___childrenImageSharp___fluid___srcSet'
  | 'animation___childrenImageSharp___fluid___srcWebp'
  | 'animation___childrenImageSharp___fluid___srcSetWebp'
  | 'animation___childrenImageSharp___fluid___sizes'
  | 'animation___childrenImageSharp___fluid___originalImg'
  | 'animation___childrenImageSharp___fluid___originalName'
  | 'animation___childrenImageSharp___fluid___presentationWidth'
  | 'animation___childrenImageSharp___fluid___presentationHeight'
  | 'animation___childrenImageSharp___gatsbyImageData'
  | 'animation___childrenImageSharp___original___width'
  | 'animation___childrenImageSharp___original___height'
  | 'animation___childrenImageSharp___original___src'
  | 'animation___childrenImageSharp___resize___src'
  | 'animation___childrenImageSharp___resize___tracedSVG'
  | 'animation___childrenImageSharp___resize___width'
  | 'animation___childrenImageSharp___resize___height'
  | 'animation___childrenImageSharp___resize___aspectRatio'
  | 'animation___childrenImageSharp___resize___originalName'
  | 'animation___childrenImageSharp___id'
  | 'animation___childrenImageSharp___parent___id'
  | 'animation___childrenImageSharp___parent___children'
  | 'animation___childrenImageSharp___children'
  | 'animation___childrenImageSharp___children___id'
  | 'animation___childrenImageSharp___children___children'
  | 'animation___childrenImageSharp___internal___content'
  | 'animation___childrenImageSharp___internal___contentDigest'
  | 'animation___childrenImageSharp___internal___description'
  | 'animation___childrenImageSharp___internal___fieldOwners'
  | 'animation___childrenImageSharp___internal___ignoreType'
  | 'animation___childrenImageSharp___internal___mediaType'
  | 'animation___childrenImageSharp___internal___owner'
  | 'animation___childrenImageSharp___internal___type'
  | 'animation___childImageSharp___fixed___base64'
  | 'animation___childImageSharp___fixed___tracedSVG'
  | 'animation___childImageSharp___fixed___aspectRatio'
  | 'animation___childImageSharp___fixed___width'
  | 'animation___childImageSharp___fixed___height'
  | 'animation___childImageSharp___fixed___src'
  | 'animation___childImageSharp___fixed___srcSet'
  | 'animation___childImageSharp___fixed___srcWebp'
  | 'animation___childImageSharp___fixed___srcSetWebp'
  | 'animation___childImageSharp___fixed___originalName'
  | 'animation___childImageSharp___fluid___base64'
  | 'animation___childImageSharp___fluid___tracedSVG'
  | 'animation___childImageSharp___fluid___aspectRatio'
  | 'animation___childImageSharp___fluid___src'
  | 'animation___childImageSharp___fluid___srcSet'
  | 'animation___childImageSharp___fluid___srcWebp'
  | 'animation___childImageSharp___fluid___srcSetWebp'
  | 'animation___childImageSharp___fluid___sizes'
  | 'animation___childImageSharp___fluid___originalImg'
  | 'animation___childImageSharp___fluid___originalName'
  | 'animation___childImageSharp___fluid___presentationWidth'
  | 'animation___childImageSharp___fluid___presentationHeight'
  | 'animation___childImageSharp___gatsbyImageData'
  | 'animation___childImageSharp___original___width'
  | 'animation___childImageSharp___original___height'
  | 'animation___childImageSharp___original___src'
  | 'animation___childImageSharp___resize___src'
  | 'animation___childImageSharp___resize___tracedSVG'
  | 'animation___childImageSharp___resize___width'
  | 'animation___childImageSharp___resize___height'
  | 'animation___childImageSharp___resize___aspectRatio'
  | 'animation___childImageSharp___resize___originalName'
  | 'animation___childImageSharp___id'
  | 'animation___childImageSharp___parent___id'
  | 'animation___childImageSharp___parent___children'
  | 'animation___childImageSharp___children'
  | 'animation___childImageSharp___children___id'
  | 'animation___childImageSharp___children___children'
  | 'animation___childImageSharp___internal___content'
  | 'animation___childImageSharp___internal___contentDigest'
  | 'animation___childImageSharp___internal___description'
  | 'animation___childImageSharp___internal___fieldOwners'
  | 'animation___childImageSharp___internal___ignoreType'
  | 'animation___childImageSharp___internal___mediaType'
  | 'animation___childImageSharp___internal___owner'
  | 'animation___childImageSharp___internal___type'
  | 'animation___childrenPageDoc'
  | 'animation___childrenPageDoc___id'
  | 'animation___childrenPageDoc___parent___id'
  | 'animation___childrenPageDoc___parent___children'
  | 'animation___childrenPageDoc___children'
  | 'animation___childrenPageDoc___children___id'
  | 'animation___childrenPageDoc___children___children'
  | 'animation___childrenPageDoc___internal___content'
  | 'animation___childrenPageDoc___internal___contentDigest'
  | 'animation___childrenPageDoc___internal___description'
  | 'animation___childrenPageDoc___internal___fieldOwners'
  | 'animation___childrenPageDoc___internal___ignoreType'
  | 'animation___childrenPageDoc___internal___mediaType'
  | 'animation___childrenPageDoc___internal___owner'
  | 'animation___childrenPageDoc___internal___type'
  | 'animation___childrenPageDoc___title'
  | 'animation___childrenPageDoc___description'
  | 'animation___childrenPageDoc___image___sourceInstanceName'
  | 'animation___childrenPageDoc___image___absolutePath'
  | 'animation___childrenPageDoc___image___relativePath'
  | 'animation___childrenPageDoc___image___extension'
  | 'animation___childrenPageDoc___image___size'
  | 'animation___childrenPageDoc___image___prettySize'
  | 'animation___childrenPageDoc___image___modifiedTime'
  | 'animation___childrenPageDoc___image___accessTime'
  | 'animation___childrenPageDoc___image___changeTime'
  | 'animation___childrenPageDoc___image___birthTime'
  | 'animation___childrenPageDoc___image___root'
  | 'animation___childrenPageDoc___image___dir'
  | 'animation___childrenPageDoc___image___base'
  | 'animation___childrenPageDoc___image___ext'
  | 'animation___childrenPageDoc___image___name'
  | 'animation___childrenPageDoc___image___relativeDirectory'
  | 'animation___childrenPageDoc___image___dev'
  | 'animation___childrenPageDoc___image___mode'
  | 'animation___childrenPageDoc___image___nlink'
  | 'animation___childrenPageDoc___image___uid'
  | 'animation___childrenPageDoc___image___gid'
  | 'animation___childrenPageDoc___image___rdev'
  | 'animation___childrenPageDoc___image___ino'
  | 'animation___childrenPageDoc___image___atimeMs'
  | 'animation___childrenPageDoc___image___mtimeMs'
  | 'animation___childrenPageDoc___image___ctimeMs'
  | 'animation___childrenPageDoc___image___atime'
  | 'animation___childrenPageDoc___image___mtime'
  | 'animation___childrenPageDoc___image___ctime'
  | 'animation___childrenPageDoc___image___birthtime'
  | 'animation___childrenPageDoc___image___birthtimeMs'
  | 'animation___childrenPageDoc___image___blksize'
  | 'animation___childrenPageDoc___image___blocks'
  | 'animation___childrenPageDoc___image___publicURL'
  | 'animation___childrenPageDoc___image___childrenImageSharp'
  | 'animation___childrenPageDoc___image___childrenPageDoc'
  | 'animation___childrenPageDoc___image___childrenImagesJson'
  | 'animation___childrenPageDoc___image___childrenDocsJson'
  | 'animation___childrenPageDoc___image___childrenAnimationsJson'
  | 'animation___childrenPageDoc___image___id'
  | 'animation___childrenPageDoc___image___children'
  | 'animation___childrenPageDoc___video___sourceInstanceName'
  | 'animation___childrenPageDoc___video___absolutePath'
  | 'animation___childrenPageDoc___video___relativePath'
  | 'animation___childrenPageDoc___video___extension'
  | 'animation___childrenPageDoc___video___size'
  | 'animation___childrenPageDoc___video___prettySize'
  | 'animation___childrenPageDoc___video___modifiedTime'
  | 'animation___childrenPageDoc___video___accessTime'
  | 'animation___childrenPageDoc___video___changeTime'
  | 'animation___childrenPageDoc___video___birthTime'
  | 'animation___childrenPageDoc___video___root'
  | 'animation___childrenPageDoc___video___dir'
  | 'animation___childrenPageDoc___video___base'
  | 'animation___childrenPageDoc___video___ext'
  | 'animation___childrenPageDoc___video___name'
  | 'animation___childrenPageDoc___video___relativeDirectory'
  | 'animation___childrenPageDoc___video___dev'
  | 'animation___childrenPageDoc___video___mode'
  | 'animation___childrenPageDoc___video___nlink'
  | 'animation___childrenPageDoc___video___uid'
  | 'animation___childrenPageDoc___video___gid'
  | 'animation___childrenPageDoc___video___rdev'
  | 'animation___childrenPageDoc___video___ino'
  | 'animation___childrenPageDoc___video___atimeMs'
  | 'animation___childrenPageDoc___video___mtimeMs'
  | 'animation___childrenPageDoc___video___ctimeMs'
  | 'animation___childrenPageDoc___video___atime'
  | 'animation___childrenPageDoc___video___mtime'
  | 'animation___childrenPageDoc___video___ctime'
  | 'animation___childrenPageDoc___video___birthtime'
  | 'animation___childrenPageDoc___video___birthtimeMs'
  | 'animation___childrenPageDoc___video___blksize'
  | 'animation___childrenPageDoc___video___blocks'
  | 'animation___childrenPageDoc___video___publicURL'
  | 'animation___childrenPageDoc___video___childrenImageSharp'
  | 'animation___childrenPageDoc___video___childrenPageDoc'
  | 'animation___childrenPageDoc___video___childrenImagesJson'
  | 'animation___childrenPageDoc___video___childrenDocsJson'
  | 'animation___childrenPageDoc___video___childrenAnimationsJson'
  | 'animation___childrenPageDoc___video___id'
  | 'animation___childrenPageDoc___video___children'
  | 'animation___childrenPageDoc___animation___sourceInstanceName'
  | 'animation___childrenPageDoc___animation___absolutePath'
  | 'animation___childrenPageDoc___animation___relativePath'
  | 'animation___childrenPageDoc___animation___extension'
  | 'animation___childrenPageDoc___animation___size'
  | 'animation___childrenPageDoc___animation___prettySize'
  | 'animation___childrenPageDoc___animation___modifiedTime'
  | 'animation___childrenPageDoc___animation___accessTime'
  | 'animation___childrenPageDoc___animation___changeTime'
  | 'animation___childrenPageDoc___animation___birthTime'
  | 'animation___childrenPageDoc___animation___root'
  | 'animation___childrenPageDoc___animation___dir'
  | 'animation___childrenPageDoc___animation___base'
  | 'animation___childrenPageDoc___animation___ext'
  | 'animation___childrenPageDoc___animation___name'
  | 'animation___childrenPageDoc___animation___relativeDirectory'
  | 'animation___childrenPageDoc___animation___dev'
  | 'animation___childrenPageDoc___animation___mode'
  | 'animation___childrenPageDoc___animation___nlink'
  | 'animation___childrenPageDoc___animation___uid'
  | 'animation___childrenPageDoc___animation___gid'
  | 'animation___childrenPageDoc___animation___rdev'
  | 'animation___childrenPageDoc___animation___ino'
  | 'animation___childrenPageDoc___animation___atimeMs'
  | 'animation___childrenPageDoc___animation___mtimeMs'
  | 'animation___childrenPageDoc___animation___ctimeMs'
  | 'animation___childrenPageDoc___animation___atime'
  | 'animation___childrenPageDoc___animation___mtime'
  | 'animation___childrenPageDoc___animation___ctime'
  | 'animation___childrenPageDoc___animation___birthtime'
  | 'animation___childrenPageDoc___animation___birthtimeMs'
  | 'animation___childrenPageDoc___animation___blksize'
  | 'animation___childrenPageDoc___animation___blocks'
  | 'animation___childrenPageDoc___animation___publicURL'
  | 'animation___childrenPageDoc___animation___childrenImageSharp'
  | 'animation___childrenPageDoc___animation___childrenPageDoc'
  | 'animation___childrenPageDoc___animation___childrenImagesJson'
  | 'animation___childrenPageDoc___animation___childrenDocsJson'
  | 'animation___childrenPageDoc___animation___childrenAnimationsJson'
  | 'animation___childrenPageDoc___animation___id'
  | 'animation___childrenPageDoc___animation___children'
  | 'animation___childrenPageDoc___fileInformation___relativeDirectory'
  | 'animation___childrenPageDoc___fileInformation___name'
  | 'animation___childrenPageDoc___fileInformation___ext'
  | 'animation___childrenPageDoc___fileInformation___extension'
  | 'animation___childPageDoc___id'
  | 'animation___childPageDoc___parent___id'
  | 'animation___childPageDoc___parent___children'
  | 'animation___childPageDoc___children'
  | 'animation___childPageDoc___children___id'
  | 'animation___childPageDoc___children___children'
  | 'animation___childPageDoc___internal___content'
  | 'animation___childPageDoc___internal___contentDigest'
  | 'animation___childPageDoc___internal___description'
  | 'animation___childPageDoc___internal___fieldOwners'
  | 'animation___childPageDoc___internal___ignoreType'
  | 'animation___childPageDoc___internal___mediaType'
  | 'animation___childPageDoc___internal___owner'
  | 'animation___childPageDoc___internal___type'
  | 'animation___childPageDoc___title'
  | 'animation___childPageDoc___description'
  | 'animation___childPageDoc___image___sourceInstanceName'
  | 'animation___childPageDoc___image___absolutePath'
  | 'animation___childPageDoc___image___relativePath'
  | 'animation___childPageDoc___image___extension'
  | 'animation___childPageDoc___image___size'
  | 'animation___childPageDoc___image___prettySize'
  | 'animation___childPageDoc___image___modifiedTime'
  | 'animation___childPageDoc___image___accessTime'
  | 'animation___childPageDoc___image___changeTime'
  | 'animation___childPageDoc___image___birthTime'
  | 'animation___childPageDoc___image___root'
  | 'animation___childPageDoc___image___dir'
  | 'animation___childPageDoc___image___base'
  | 'animation___childPageDoc___image___ext'
  | 'animation___childPageDoc___image___name'
  | 'animation___childPageDoc___image___relativeDirectory'
  | 'animation___childPageDoc___image___dev'
  | 'animation___childPageDoc___image___mode'
  | 'animation___childPageDoc___image___nlink'
  | 'animation___childPageDoc___image___uid'
  | 'animation___childPageDoc___image___gid'
  | 'animation___childPageDoc___image___rdev'
  | 'animation___childPageDoc___image___ino'
  | 'animation___childPageDoc___image___atimeMs'
  | 'animation___childPageDoc___image___mtimeMs'
  | 'animation___childPageDoc___image___ctimeMs'
  | 'animation___childPageDoc___image___atime'
  | 'animation___childPageDoc___image___mtime'
  | 'animation___childPageDoc___image___ctime'
  | 'animation___childPageDoc___image___birthtime'
  | 'animation___childPageDoc___image___birthtimeMs'
  | 'animation___childPageDoc___image___blksize'
  | 'animation___childPageDoc___image___blocks'
  | 'animation___childPageDoc___image___publicURL'
  | 'animation___childPageDoc___image___childrenImageSharp'
  | 'animation___childPageDoc___image___childrenPageDoc'
  | 'animation___childPageDoc___image___childrenImagesJson'
  | 'animation___childPageDoc___image___childrenDocsJson'
  | 'animation___childPageDoc___image___childrenAnimationsJson'
  | 'animation___childPageDoc___image___id'
  | 'animation___childPageDoc___image___children'
  | 'animation___childPageDoc___video___sourceInstanceName'
  | 'animation___childPageDoc___video___absolutePath'
  | 'animation___childPageDoc___video___relativePath'
  | 'animation___childPageDoc___video___extension'
  | 'animation___childPageDoc___video___size'
  | 'animation___childPageDoc___video___prettySize'
  | 'animation___childPageDoc___video___modifiedTime'
  | 'animation___childPageDoc___video___accessTime'
  | 'animation___childPageDoc___video___changeTime'
  | 'animation___childPageDoc___video___birthTime'
  | 'animation___childPageDoc___video___root'
  | 'animation___childPageDoc___video___dir'
  | 'animation___childPageDoc___video___base'
  | 'animation___childPageDoc___video___ext'
  | 'animation___childPageDoc___video___name'
  | 'animation___childPageDoc___video___relativeDirectory'
  | 'animation___childPageDoc___video___dev'
  | 'animation___childPageDoc___video___mode'
  | 'animation___childPageDoc___video___nlink'
  | 'animation___childPageDoc___video___uid'
  | 'animation___childPageDoc___video___gid'
  | 'animation___childPageDoc___video___rdev'
  | 'animation___childPageDoc___video___ino'
  | 'animation___childPageDoc___video___atimeMs'
  | 'animation___childPageDoc___video___mtimeMs'
  | 'animation___childPageDoc___video___ctimeMs'
  | 'animation___childPageDoc___video___atime'
  | 'animation___childPageDoc___video___mtime'
  | 'animation___childPageDoc___video___ctime'
  | 'animation___childPageDoc___video___birthtime'
  | 'animation___childPageDoc___video___birthtimeMs'
  | 'animation___childPageDoc___video___blksize'
  | 'animation___childPageDoc___video___blocks'
  | 'animation___childPageDoc___video___publicURL'
  | 'animation___childPageDoc___video___childrenImageSharp'
  | 'animation___childPageDoc___video___childrenPageDoc'
  | 'animation___childPageDoc___video___childrenImagesJson'
  | 'animation___childPageDoc___video___childrenDocsJson'
  | 'animation___childPageDoc___video___childrenAnimationsJson'
  | 'animation___childPageDoc___video___id'
  | 'animation___childPageDoc___video___children'
  | 'animation___childPageDoc___animation___sourceInstanceName'
  | 'animation___childPageDoc___animation___absolutePath'
  | 'animation___childPageDoc___animation___relativePath'
  | 'animation___childPageDoc___animation___extension'
  | 'animation___childPageDoc___animation___size'
  | 'animation___childPageDoc___animation___prettySize'
  | 'animation___childPageDoc___animation___modifiedTime'
  | 'animation___childPageDoc___animation___accessTime'
  | 'animation___childPageDoc___animation___changeTime'
  | 'animation___childPageDoc___animation___birthTime'
  | 'animation___childPageDoc___animation___root'
  | 'animation___childPageDoc___animation___dir'
  | 'animation___childPageDoc___animation___base'
  | 'animation___childPageDoc___animation___ext'
  | 'animation___childPageDoc___animation___name'
  | 'animation___childPageDoc___animation___relativeDirectory'
  | 'animation___childPageDoc___animation___dev'
  | 'animation___childPageDoc___animation___mode'
  | 'animation___childPageDoc___animation___nlink'
  | 'animation___childPageDoc___animation___uid'
  | 'animation___childPageDoc___animation___gid'
  | 'animation___childPageDoc___animation___rdev'
  | 'animation___childPageDoc___animation___ino'
  | 'animation___childPageDoc___animation___atimeMs'
  | 'animation___childPageDoc___animation___mtimeMs'
  | 'animation___childPageDoc___animation___ctimeMs'
  | 'animation___childPageDoc___animation___atime'
  | 'animation___childPageDoc___animation___mtime'
  | 'animation___childPageDoc___animation___ctime'
  | 'animation___childPageDoc___animation___birthtime'
  | 'animation___childPageDoc___animation___birthtimeMs'
  | 'animation___childPageDoc___animation___blksize'
  | 'animation___childPageDoc___animation___blocks'
  | 'animation___childPageDoc___animation___publicURL'
  | 'animation___childPageDoc___animation___childrenImageSharp'
  | 'animation___childPageDoc___animation___childrenPageDoc'
  | 'animation___childPageDoc___animation___childrenImagesJson'
  | 'animation___childPageDoc___animation___childrenDocsJson'
  | 'animation___childPageDoc___animation___childrenAnimationsJson'
  | 'animation___childPageDoc___animation___id'
  | 'animation___childPageDoc___animation___children'
  | 'animation___childPageDoc___fileInformation___relativeDirectory'
  | 'animation___childPageDoc___fileInformation___name'
  | 'animation___childPageDoc___fileInformation___ext'
  | 'animation___childPageDoc___fileInformation___extension'
  | 'animation___childrenImagesJson'
  | 'animation___childrenImagesJson___id'
  | 'animation___childrenImagesJson___parent___id'
  | 'animation___childrenImagesJson___parent___children'
  | 'animation___childrenImagesJson___children'
  | 'animation___childrenImagesJson___children___id'
  | 'animation___childrenImagesJson___children___children'
  | 'animation___childrenImagesJson___internal___content'
  | 'animation___childrenImagesJson___internal___contentDigest'
  | 'animation___childrenImagesJson___internal___description'
  | 'animation___childrenImagesJson___internal___fieldOwners'
  | 'animation___childrenImagesJson___internal___ignoreType'
  | 'animation___childrenImagesJson___internal___mediaType'
  | 'animation___childrenImagesJson___internal___owner'
  | 'animation___childrenImagesJson___internal___type'
  | 'animation___childrenImagesJson___v'
  | 'animation___childrenImagesJson___fr'
  | 'animation___childrenImagesJson___ip'
  | 'animation___childrenImagesJson___op'
  | 'animation___childrenImagesJson___w'
  | 'animation___childrenImagesJson___h'
  | 'animation___childrenImagesJson___nm'
  | 'animation___childrenImagesJson___ddd'
  | 'animation___childrenImagesJson___assets'
  | 'animation___childrenImagesJson___assets___id'
  | 'animation___childrenImagesJson___assets___layers'
  | 'animation___childrenImagesJson___layers'
  | 'animation___childrenImagesJson___layers___ddd'
  | 'animation___childrenImagesJson___layers___ind'
  | 'animation___childrenImagesJson___layers___ty'
  | 'animation___childrenImagesJson___layers___nm'
  | 'animation___childrenImagesJson___layers___sr'
  | 'animation___childrenImagesJson___layers___ao'
  | 'animation___childrenImagesJson___layers___ip'
  | 'animation___childrenImagesJson___layers___op'
  | 'animation___childrenImagesJson___layers___st'
  | 'animation___childrenImagesJson___layers___bm'
  | 'animation___childrenImagesJson___layers___parent'
  | 'animation___childrenImagesJson___layers___shapes'
  | 'animation___childrenImagesJson___layers___refId'
  | 'animation___childrenImagesJson___layers___w'
  | 'animation___childrenImagesJson___layers___h'
  | 'animation___childImagesJson___id'
  | 'animation___childImagesJson___parent___id'
  | 'animation___childImagesJson___parent___children'
  | 'animation___childImagesJson___children'
  | 'animation___childImagesJson___children___id'
  | 'animation___childImagesJson___children___children'
  | 'animation___childImagesJson___internal___content'
  | 'animation___childImagesJson___internal___contentDigest'
  | 'animation___childImagesJson___internal___description'
  | 'animation___childImagesJson___internal___fieldOwners'
  | 'animation___childImagesJson___internal___ignoreType'
  | 'animation___childImagesJson___internal___mediaType'
  | 'animation___childImagesJson___internal___owner'
  | 'animation___childImagesJson___internal___type'
  | 'animation___childImagesJson___v'
  | 'animation___childImagesJson___fr'
  | 'animation___childImagesJson___ip'
  | 'animation___childImagesJson___op'
  | 'animation___childImagesJson___w'
  | 'animation___childImagesJson___h'
  | 'animation___childImagesJson___nm'
  | 'animation___childImagesJson___ddd'
  | 'animation___childImagesJson___assets'
  | 'animation___childImagesJson___assets___id'
  | 'animation___childImagesJson___assets___layers'
  | 'animation___childImagesJson___layers'
  | 'animation___childImagesJson___layers___ddd'
  | 'animation___childImagesJson___layers___ind'
  | 'animation___childImagesJson___layers___ty'
  | 'animation___childImagesJson___layers___nm'
  | 'animation___childImagesJson___layers___sr'
  | 'animation___childImagesJson___layers___ao'
  | 'animation___childImagesJson___layers___ip'
  | 'animation___childImagesJson___layers___op'
  | 'animation___childImagesJson___layers___st'
  | 'animation___childImagesJson___layers___bm'
  | 'animation___childImagesJson___layers___parent'
  | 'animation___childImagesJson___layers___shapes'
  | 'animation___childImagesJson___layers___refId'
  | 'animation___childImagesJson___layers___w'
  | 'animation___childImagesJson___layers___h'
  | 'animation___childrenDocsJson'
  | 'animation___childrenDocsJson___id'
  | 'animation___childrenDocsJson___parent___id'
  | 'animation___childrenDocsJson___parent___children'
  | 'animation___childrenDocsJson___children'
  | 'animation___childrenDocsJson___children___id'
  | 'animation___childrenDocsJson___children___children'
  | 'animation___childrenDocsJson___internal___content'
  | 'animation___childrenDocsJson___internal___contentDigest'
  | 'animation___childrenDocsJson___internal___description'
  | 'animation___childrenDocsJson___internal___fieldOwners'
  | 'animation___childrenDocsJson___internal___ignoreType'
  | 'animation___childrenDocsJson___internal___mediaType'
  | 'animation___childrenDocsJson___internal___owner'
  | 'animation___childrenDocsJson___internal___type'
  | 'animation___childrenDocsJson___type'
  | 'animation___childrenDocsJson___module___title'
  | 'animation___childrenDocsJson___module___description'
  | 'animation___childDocsJson___id'
  | 'animation___childDocsJson___parent___id'
  | 'animation___childDocsJson___parent___children'
  | 'animation___childDocsJson___children'
  | 'animation___childDocsJson___children___id'
  | 'animation___childDocsJson___children___children'
  | 'animation___childDocsJson___internal___content'
  | 'animation___childDocsJson___internal___contentDigest'
  | 'animation___childDocsJson___internal___description'
  | 'animation___childDocsJson___internal___fieldOwners'
  | 'animation___childDocsJson___internal___ignoreType'
  | 'animation___childDocsJson___internal___mediaType'
  | 'animation___childDocsJson___internal___owner'
  | 'animation___childDocsJson___internal___type'
  | 'animation___childDocsJson___type'
  | 'animation___childDocsJson___module___title'
  | 'animation___childDocsJson___module___description'
  | 'animation___childrenAnimationsJson'
  | 'animation___childrenAnimationsJson___id'
  | 'animation___childrenAnimationsJson___parent___id'
  | 'animation___childrenAnimationsJson___parent___children'
  | 'animation___childrenAnimationsJson___children'
  | 'animation___childrenAnimationsJson___children___id'
  | 'animation___childrenAnimationsJson___children___children'
  | 'animation___childrenAnimationsJson___internal___content'
  | 'animation___childrenAnimationsJson___internal___contentDigest'
  | 'animation___childrenAnimationsJson___internal___description'
  | 'animation___childrenAnimationsJson___internal___fieldOwners'
  | 'animation___childrenAnimationsJson___internal___ignoreType'
  | 'animation___childrenAnimationsJson___internal___mediaType'
  | 'animation___childrenAnimationsJson___internal___owner'
  | 'animation___childrenAnimationsJson___internal___type'
  | 'animation___childrenAnimationsJson___tgs'
  | 'animation___childrenAnimationsJson___v'
  | 'animation___childrenAnimationsJson___fr'
  | 'animation___childrenAnimationsJson___ip'
  | 'animation___childrenAnimationsJson___op'
  | 'animation___childrenAnimationsJson___w'
  | 'animation___childrenAnimationsJson___h'
  | 'animation___childrenAnimationsJson___nm'
  | 'animation___childrenAnimationsJson___ddd'
  | 'animation___childrenAnimationsJson___layers'
  | 'animation___childrenAnimationsJson___layers___ddd'
  | 'animation___childrenAnimationsJson___layers___ind'
  | 'animation___childrenAnimationsJson___layers___ty'
  | 'animation___childrenAnimationsJson___layers___nm'
  | 'animation___childrenAnimationsJson___layers___sr'
  | 'animation___childrenAnimationsJson___layers___ao'
  | 'animation___childrenAnimationsJson___layers___shapes'
  | 'animation___childrenAnimationsJson___layers___ip'
  | 'animation___childrenAnimationsJson___layers___op'
  | 'animation___childrenAnimationsJson___layers___st'
  | 'animation___childrenAnimationsJson___layers___bm'
  | 'animation___childAnimationsJson___id'
  | 'animation___childAnimationsJson___parent___id'
  | 'animation___childAnimationsJson___parent___children'
  | 'animation___childAnimationsJson___children'
  | 'animation___childAnimationsJson___children___id'
  | 'animation___childAnimationsJson___children___children'
  | 'animation___childAnimationsJson___internal___content'
  | 'animation___childAnimationsJson___internal___contentDigest'
  | 'animation___childAnimationsJson___internal___description'
  | 'animation___childAnimationsJson___internal___fieldOwners'
  | 'animation___childAnimationsJson___internal___ignoreType'
  | 'animation___childAnimationsJson___internal___mediaType'
  | 'animation___childAnimationsJson___internal___owner'
  | 'animation___childAnimationsJson___internal___type'
  | 'animation___childAnimationsJson___tgs'
  | 'animation___childAnimationsJson___v'
  | 'animation___childAnimationsJson___fr'
  | 'animation___childAnimationsJson___ip'
  | 'animation___childAnimationsJson___op'
  | 'animation___childAnimationsJson___w'
  | 'animation___childAnimationsJson___h'
  | 'animation___childAnimationsJson___nm'
  | 'animation___childAnimationsJson___ddd'
  | 'animation___childAnimationsJson___layers'
  | 'animation___childAnimationsJson___layers___ddd'
  | 'animation___childAnimationsJson___layers___ind'
  | 'animation___childAnimationsJson___layers___ty'
  | 'animation___childAnimationsJson___layers___nm'
  | 'animation___childAnimationsJson___layers___sr'
  | 'animation___childAnimationsJson___layers___ao'
  | 'animation___childAnimationsJson___layers___shapes'
  | 'animation___childAnimationsJson___layers___ip'
  | 'animation___childAnimationsJson___layers___op'
  | 'animation___childAnimationsJson___layers___st'
  | 'animation___childAnimationsJson___layers___bm'
  | 'animation___id'
  | 'animation___parent___id'
  | 'animation___parent___parent___id'
  | 'animation___parent___parent___children'
  | 'animation___parent___children'
  | 'animation___parent___children___id'
  | 'animation___parent___children___children'
  | 'animation___parent___internal___content'
  | 'animation___parent___internal___contentDigest'
  | 'animation___parent___internal___description'
  | 'animation___parent___internal___fieldOwners'
  | 'animation___parent___internal___ignoreType'
  | 'animation___parent___internal___mediaType'
  | 'animation___parent___internal___owner'
  | 'animation___parent___internal___type'
  | 'animation___children'
  | 'animation___children___id'
  | 'animation___children___parent___id'
  | 'animation___children___parent___children'
  | 'animation___children___children'
  | 'animation___children___children___id'
  | 'animation___children___children___children'
  | 'animation___children___internal___content'
  | 'animation___children___internal___contentDigest'
  | 'animation___children___internal___description'
  | 'animation___children___internal___fieldOwners'
  | 'animation___children___internal___ignoreType'
  | 'animation___children___internal___mediaType'
  | 'animation___children___internal___owner'
  | 'animation___children___internal___type'
  | 'animation___internal___content'
  | 'animation___internal___contentDigest'
  | 'animation___internal___description'
  | 'animation___internal___fieldOwners'
  | 'animation___internal___ignoreType'
  | 'animation___internal___mediaType'
  | 'animation___internal___owner'
  | 'animation___internal___type'
  | 'fileInformation___relativeDirectory'
  | 'fileInformation___name'
  | 'fileInformation___ext'
  | 'fileInformation___extension';

export type PageDocGroupConnection = {
  readonly __typename?: 'PageDocGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PageDocEdge>;
  readonly nodes: ReadonlyArray<PageDoc>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PageDocGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};


export type PageDocGroupConnectionDistinctArgs = {
  field: PageDocFieldsEnum;
};


export type PageDocGroupConnectionMaxArgs = {
  field: PageDocFieldsEnum;
};


export type PageDocGroupConnectionMinArgs = {
  field: PageDocFieldsEnum;
};


export type PageDocGroupConnectionSumArgs = {
  field: PageDocFieldsEnum;
};


export type PageDocGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: PageDocFieldsEnum;
};

export type PageDocSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<PageDocFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ImagesJsonConnection = {
  readonly __typename?: 'ImagesJsonConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImagesJsonEdge>;
  readonly nodes: ReadonlyArray<ImagesJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImagesJsonGroupConnection>;
};


export type ImagesJsonConnectionDistinctArgs = {
  field: ImagesJsonFieldsEnum;
};


export type ImagesJsonConnectionMaxArgs = {
  field: ImagesJsonFieldsEnum;
};


export type ImagesJsonConnectionMinArgs = {
  field: ImagesJsonFieldsEnum;
};


export type ImagesJsonConnectionSumArgs = {
  field: ImagesJsonFieldsEnum;
};


export type ImagesJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImagesJsonFieldsEnum;
};

export type ImagesJsonEdge = {
  readonly __typename?: 'ImagesJsonEdge';
  readonly next?: Maybe<ImagesJson>;
  readonly node: ImagesJson;
  readonly previous?: Maybe<ImagesJson>;
};

export type ImagesJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'v'
  | 'fr'
  | 'ip'
  | 'op'
  | 'w'
  | 'h'
  | 'nm'
  | 'ddd'
  | 'assets'
  | 'assets___id'
  | 'assets___layers'
  | 'assets___layers___ddd'
  | 'assets___layers___ind'
  | 'assets___layers___ty'
  | 'assets___layers___nm'
  | 'assets___layers___parent'
  | 'assets___layers___sr'
  | 'assets___layers___ao'
  | 'assets___layers___hasMask'
  | 'assets___layers___masksProperties'
  | 'assets___layers___masksProperties___inv'
  | 'assets___layers___masksProperties___mode'
  | 'assets___layers___masksProperties___nm'
  | 'assets___layers___shapes'
  | 'assets___layers___shapes___ty'
  | 'assets___layers___shapes___it'
  | 'assets___layers___shapes___nm'
  | 'assets___layers___shapes___np'
  | 'assets___layers___shapes___cix'
  | 'assets___layers___shapes___bm'
  | 'assets___layers___shapes___ix'
  | 'assets___layers___shapes___mn'
  | 'assets___layers___shapes___hd'
  | 'assets___layers___ip'
  | 'assets___layers___op'
  | 'assets___layers___st'
  | 'assets___layers___bm'
  | 'layers'
  | 'layers___ddd'
  | 'layers___ind'
  | 'layers___ty'
  | 'layers___nm'
  | 'layers___sr'
  | 'layers___ks___o___a'
  | 'layers___ks___o___k'
  | 'layers___ks___o___ix'
  | 'layers___ks___r___a'
  | 'layers___ks___r___k'
  | 'layers___ks___r___ix'
  | 'layers___ks___p___a'
  | 'layers___ks___p___k'
  | 'layers___ks___p___ix'
  | 'layers___ks___p___l'
  | 'layers___ks___a___a'
  | 'layers___ks___a___k'
  | 'layers___ks___a___ix'
  | 'layers___ks___a___l'
  | 'layers___ks___s___a'
  | 'layers___ks___s___ix'
  | 'layers___ks___s___l'
  | 'layers___ao'
  | 'layers___ip'
  | 'layers___op'
  | 'layers___st'
  | 'layers___bm'
  | 'layers___parent'
  | 'layers___shapes'
  | 'layers___shapes___ty'
  | 'layers___shapes___it'
  | 'layers___shapes___it___ind'
  | 'layers___shapes___it___ty'
  | 'layers___shapes___it___ix'
  | 'layers___shapes___it___nm'
  | 'layers___shapes___it___mn'
  | 'layers___shapes___it___hd'
  | 'layers___shapes___it___bm'
  | 'layers___shapes___it___it'
  | 'layers___shapes___it___np'
  | 'layers___shapes___it___cix'
  | 'layers___shapes___it___lc'
  | 'layers___shapes___it___lj'
  | 'layers___shapes___it___mm'
  | 'layers___shapes___nm'
  | 'layers___shapes___np'
  | 'layers___shapes___cix'
  | 'layers___shapes___bm'
  | 'layers___shapes___ix'
  | 'layers___shapes___mn'
  | 'layers___shapes___hd'
  | 'layers___refId'
  | 'layers___w'
  | 'layers___h';

export type ImagesJsonGroupConnection = {
  readonly __typename?: 'ImagesJsonGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImagesJsonEdge>;
  readonly nodes: ReadonlyArray<ImagesJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImagesJsonGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};


export type ImagesJsonGroupConnectionDistinctArgs = {
  field: ImagesJsonFieldsEnum;
};


export type ImagesJsonGroupConnectionMaxArgs = {
  field: ImagesJsonFieldsEnum;
};


export type ImagesJsonGroupConnectionMinArgs = {
  field: ImagesJsonFieldsEnum;
};


export type ImagesJsonGroupConnectionSumArgs = {
  field: ImagesJsonFieldsEnum;
};


export type ImagesJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImagesJsonFieldsEnum;
};

export type ImagesJsonSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<ImagesJsonFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type DocsJsonConnection = {
  readonly __typename?: 'DocsJsonConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DocsJsonEdge>;
  readonly nodes: ReadonlyArray<DocsJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DocsJsonGroupConnection>;
};


export type DocsJsonConnectionDistinctArgs = {
  field: DocsJsonFieldsEnum;
};


export type DocsJsonConnectionMaxArgs = {
  field: DocsJsonFieldsEnum;
};


export type DocsJsonConnectionMinArgs = {
  field: DocsJsonFieldsEnum;
};


export type DocsJsonConnectionSumArgs = {
  field: DocsJsonFieldsEnum;
};


export type DocsJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DocsJsonFieldsEnum;
};

export type DocsJsonEdge = {
  readonly __typename?: 'DocsJsonEdge';
  readonly next?: Maybe<DocsJson>;
  readonly node: DocsJson;
  readonly previous?: Maybe<DocsJson>;
};

export type DocsJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'type'
  | 'module___title'
  | 'module___description'
  | 'module___image___sourceInstanceName'
  | 'module___image___absolutePath'
  | 'module___image___relativePath'
  | 'module___image___extension'
  | 'module___image___size'
  | 'module___image___prettySize'
  | 'module___image___modifiedTime'
  | 'module___image___accessTime'
  | 'module___image___changeTime'
  | 'module___image___birthTime'
  | 'module___image___root'
  | 'module___image___dir'
  | 'module___image___base'
  | 'module___image___ext'
  | 'module___image___name'
  | 'module___image___relativeDirectory'
  | 'module___image___dev'
  | 'module___image___mode'
  | 'module___image___nlink'
  | 'module___image___uid'
  | 'module___image___gid'
  | 'module___image___rdev'
  | 'module___image___ino'
  | 'module___image___atimeMs'
  | 'module___image___mtimeMs'
  | 'module___image___ctimeMs'
  | 'module___image___atime'
  | 'module___image___mtime'
  | 'module___image___ctime'
  | 'module___image___birthtime'
  | 'module___image___birthtimeMs'
  | 'module___image___blksize'
  | 'module___image___blocks'
  | 'module___image___publicURL'
  | 'module___image___childrenImageSharp'
  | 'module___image___childrenImageSharp___gatsbyImageData'
  | 'module___image___childrenImageSharp___id'
  | 'module___image___childrenImageSharp___children'
  | 'module___image___childImageSharp___gatsbyImageData'
  | 'module___image___childImageSharp___id'
  | 'module___image___childImageSharp___children'
  | 'module___image___childrenPageDoc'
  | 'module___image___childrenPageDoc___id'
  | 'module___image___childrenPageDoc___children'
  | 'module___image___childrenPageDoc___title'
  | 'module___image___childrenPageDoc___description'
  | 'module___image___childPageDoc___id'
  | 'module___image___childPageDoc___children'
  | 'module___image___childPageDoc___title'
  | 'module___image___childPageDoc___description'
  | 'module___image___childrenImagesJson'
  | 'module___image___childrenImagesJson___id'
  | 'module___image___childrenImagesJson___children'
  | 'module___image___childrenImagesJson___v'
  | 'module___image___childrenImagesJson___fr'
  | 'module___image___childrenImagesJson___ip'
  | 'module___image___childrenImagesJson___op'
  | 'module___image___childrenImagesJson___w'
  | 'module___image___childrenImagesJson___h'
  | 'module___image___childrenImagesJson___nm'
  | 'module___image___childrenImagesJson___ddd'
  | 'module___image___childrenImagesJson___assets'
  | 'module___image___childrenImagesJson___layers'
  | 'module___image___childImagesJson___id'
  | 'module___image___childImagesJson___children'
  | 'module___image___childImagesJson___v'
  | 'module___image___childImagesJson___fr'
  | 'module___image___childImagesJson___ip'
  | 'module___image___childImagesJson___op'
  | 'module___image___childImagesJson___w'
  | 'module___image___childImagesJson___h'
  | 'module___image___childImagesJson___nm'
  | 'module___image___childImagesJson___ddd'
  | 'module___image___childImagesJson___assets'
  | 'module___image___childImagesJson___layers'
  | 'module___image___childrenDocsJson'
  | 'module___image___childrenDocsJson___id'
  | 'module___image___childrenDocsJson___children'
  | 'module___image___childrenDocsJson___type'
  | 'module___image___childDocsJson___id'
  | 'module___image___childDocsJson___children'
  | 'module___image___childDocsJson___type'
  | 'module___image___childrenAnimationsJson'
  | 'module___image___childrenAnimationsJson___id'
  | 'module___image___childrenAnimationsJson___children'
  | 'module___image___childrenAnimationsJson___tgs'
  | 'module___image___childrenAnimationsJson___v'
  | 'module___image___childrenAnimationsJson___fr'
  | 'module___image___childrenAnimationsJson___ip'
  | 'module___image___childrenAnimationsJson___op'
  | 'module___image___childrenAnimationsJson___w'
  | 'module___image___childrenAnimationsJson___h'
  | 'module___image___childrenAnimationsJson___nm'
  | 'module___image___childrenAnimationsJson___ddd'
  | 'module___image___childrenAnimationsJson___layers'
  | 'module___image___childAnimationsJson___id'
  | 'module___image___childAnimationsJson___children'
  | 'module___image___childAnimationsJson___tgs'
  | 'module___image___childAnimationsJson___v'
  | 'module___image___childAnimationsJson___fr'
  | 'module___image___childAnimationsJson___ip'
  | 'module___image___childAnimationsJson___op'
  | 'module___image___childAnimationsJson___w'
  | 'module___image___childAnimationsJson___h'
  | 'module___image___childAnimationsJson___nm'
  | 'module___image___childAnimationsJson___ddd'
  | 'module___image___childAnimationsJson___layers'
  | 'module___image___id'
  | 'module___image___parent___id'
  | 'module___image___parent___children'
  | 'module___image___children'
  | 'module___image___children___id'
  | 'module___image___children___children'
  | 'module___image___internal___content'
  | 'module___image___internal___contentDigest'
  | 'module___image___internal___description'
  | 'module___image___internal___fieldOwners'
  | 'module___image___internal___ignoreType'
  | 'module___image___internal___mediaType'
  | 'module___image___internal___owner'
  | 'module___image___internal___type'
  | 'module___video___sourceInstanceName'
  | 'module___video___absolutePath'
  | 'module___video___relativePath'
  | 'module___video___extension'
  | 'module___video___size'
  | 'module___video___prettySize'
  | 'module___video___modifiedTime'
  | 'module___video___accessTime'
  | 'module___video___changeTime'
  | 'module___video___birthTime'
  | 'module___video___root'
  | 'module___video___dir'
  | 'module___video___base'
  | 'module___video___ext'
  | 'module___video___name'
  | 'module___video___relativeDirectory'
  | 'module___video___dev'
  | 'module___video___mode'
  | 'module___video___nlink'
  | 'module___video___uid'
  | 'module___video___gid'
  | 'module___video___rdev'
  | 'module___video___ino'
  | 'module___video___atimeMs'
  | 'module___video___mtimeMs'
  | 'module___video___ctimeMs'
  | 'module___video___atime'
  | 'module___video___mtime'
  | 'module___video___ctime'
  | 'module___video___birthtime'
  | 'module___video___birthtimeMs'
  | 'module___video___blksize'
  | 'module___video___blocks'
  | 'module___video___publicURL'
  | 'module___video___childrenImageSharp'
  | 'module___video___childrenImageSharp___gatsbyImageData'
  | 'module___video___childrenImageSharp___id'
  | 'module___video___childrenImageSharp___children'
  | 'module___video___childImageSharp___gatsbyImageData'
  | 'module___video___childImageSharp___id'
  | 'module___video___childImageSharp___children'
  | 'module___video___childrenPageDoc'
  | 'module___video___childrenPageDoc___id'
  | 'module___video___childrenPageDoc___children'
  | 'module___video___childrenPageDoc___title'
  | 'module___video___childrenPageDoc___description'
  | 'module___video___childPageDoc___id'
  | 'module___video___childPageDoc___children'
  | 'module___video___childPageDoc___title'
  | 'module___video___childPageDoc___description'
  | 'module___video___childrenImagesJson'
  | 'module___video___childrenImagesJson___id'
  | 'module___video___childrenImagesJson___children'
  | 'module___video___childrenImagesJson___v'
  | 'module___video___childrenImagesJson___fr'
  | 'module___video___childrenImagesJson___ip'
  | 'module___video___childrenImagesJson___op'
  | 'module___video___childrenImagesJson___w'
  | 'module___video___childrenImagesJson___h'
  | 'module___video___childrenImagesJson___nm'
  | 'module___video___childrenImagesJson___ddd'
  | 'module___video___childrenImagesJson___assets'
  | 'module___video___childrenImagesJson___layers'
  | 'module___video___childImagesJson___id'
  | 'module___video___childImagesJson___children'
  | 'module___video___childImagesJson___v'
  | 'module___video___childImagesJson___fr'
  | 'module___video___childImagesJson___ip'
  | 'module___video___childImagesJson___op'
  | 'module___video___childImagesJson___w'
  | 'module___video___childImagesJson___h'
  | 'module___video___childImagesJson___nm'
  | 'module___video___childImagesJson___ddd'
  | 'module___video___childImagesJson___assets'
  | 'module___video___childImagesJson___layers'
  | 'module___video___childrenDocsJson'
  | 'module___video___childrenDocsJson___id'
  | 'module___video___childrenDocsJson___children'
  | 'module___video___childrenDocsJson___type'
  | 'module___video___childDocsJson___id'
  | 'module___video___childDocsJson___children'
  | 'module___video___childDocsJson___type'
  | 'module___video___childrenAnimationsJson'
  | 'module___video___childrenAnimationsJson___id'
  | 'module___video___childrenAnimationsJson___children'
  | 'module___video___childrenAnimationsJson___tgs'
  | 'module___video___childrenAnimationsJson___v'
  | 'module___video___childrenAnimationsJson___fr'
  | 'module___video___childrenAnimationsJson___ip'
  | 'module___video___childrenAnimationsJson___op'
  | 'module___video___childrenAnimationsJson___w'
  | 'module___video___childrenAnimationsJson___h'
  | 'module___video___childrenAnimationsJson___nm'
  | 'module___video___childrenAnimationsJson___ddd'
  | 'module___video___childrenAnimationsJson___layers'
  | 'module___video___childAnimationsJson___id'
  | 'module___video___childAnimationsJson___children'
  | 'module___video___childAnimationsJson___tgs'
  | 'module___video___childAnimationsJson___v'
  | 'module___video___childAnimationsJson___fr'
  | 'module___video___childAnimationsJson___ip'
  | 'module___video___childAnimationsJson___op'
  | 'module___video___childAnimationsJson___w'
  | 'module___video___childAnimationsJson___h'
  | 'module___video___childAnimationsJson___nm'
  | 'module___video___childAnimationsJson___ddd'
  | 'module___video___childAnimationsJson___layers'
  | 'module___video___id'
  | 'module___video___parent___id'
  | 'module___video___parent___children'
  | 'module___video___children'
  | 'module___video___children___id'
  | 'module___video___children___children'
  | 'module___video___internal___content'
  | 'module___video___internal___contentDigest'
  | 'module___video___internal___description'
  | 'module___video___internal___fieldOwners'
  | 'module___video___internal___ignoreType'
  | 'module___video___internal___mediaType'
  | 'module___video___internal___owner'
  | 'module___video___internal___type'
  | 'module___animation___sourceInstanceName'
  | 'module___animation___absolutePath'
  | 'module___animation___relativePath'
  | 'module___animation___extension'
  | 'module___animation___size'
  | 'module___animation___prettySize'
  | 'module___animation___modifiedTime'
  | 'module___animation___accessTime'
  | 'module___animation___changeTime'
  | 'module___animation___birthTime'
  | 'module___animation___root'
  | 'module___animation___dir'
  | 'module___animation___base'
  | 'module___animation___ext'
  | 'module___animation___name'
  | 'module___animation___relativeDirectory'
  | 'module___animation___dev'
  | 'module___animation___mode'
  | 'module___animation___nlink'
  | 'module___animation___uid'
  | 'module___animation___gid'
  | 'module___animation___rdev'
  | 'module___animation___ino'
  | 'module___animation___atimeMs'
  | 'module___animation___mtimeMs'
  | 'module___animation___ctimeMs'
  | 'module___animation___atime'
  | 'module___animation___mtime'
  | 'module___animation___ctime'
  | 'module___animation___birthtime'
  | 'module___animation___birthtimeMs'
  | 'module___animation___blksize'
  | 'module___animation___blocks'
  | 'module___animation___publicURL'
  | 'module___animation___childrenImageSharp'
  | 'module___animation___childrenImageSharp___gatsbyImageData'
  | 'module___animation___childrenImageSharp___id'
  | 'module___animation___childrenImageSharp___children'
  | 'module___animation___childImageSharp___gatsbyImageData'
  | 'module___animation___childImageSharp___id'
  | 'module___animation___childImageSharp___children'
  | 'module___animation___childrenPageDoc'
  | 'module___animation___childrenPageDoc___id'
  | 'module___animation___childrenPageDoc___children'
  | 'module___animation___childrenPageDoc___title'
  | 'module___animation___childrenPageDoc___description'
  | 'module___animation___childPageDoc___id'
  | 'module___animation___childPageDoc___children'
  | 'module___animation___childPageDoc___title'
  | 'module___animation___childPageDoc___description'
  | 'module___animation___childrenImagesJson'
  | 'module___animation___childrenImagesJson___id'
  | 'module___animation___childrenImagesJson___children'
  | 'module___animation___childrenImagesJson___v'
  | 'module___animation___childrenImagesJson___fr'
  | 'module___animation___childrenImagesJson___ip'
  | 'module___animation___childrenImagesJson___op'
  | 'module___animation___childrenImagesJson___w'
  | 'module___animation___childrenImagesJson___h'
  | 'module___animation___childrenImagesJson___nm'
  | 'module___animation___childrenImagesJson___ddd'
  | 'module___animation___childrenImagesJson___assets'
  | 'module___animation___childrenImagesJson___layers'
  | 'module___animation___childImagesJson___id'
  | 'module___animation___childImagesJson___children'
  | 'module___animation___childImagesJson___v'
  | 'module___animation___childImagesJson___fr'
  | 'module___animation___childImagesJson___ip'
  | 'module___animation___childImagesJson___op'
  | 'module___animation___childImagesJson___w'
  | 'module___animation___childImagesJson___h'
  | 'module___animation___childImagesJson___nm'
  | 'module___animation___childImagesJson___ddd'
  | 'module___animation___childImagesJson___assets'
  | 'module___animation___childImagesJson___layers'
  | 'module___animation___childrenDocsJson'
  | 'module___animation___childrenDocsJson___id'
  | 'module___animation___childrenDocsJson___children'
  | 'module___animation___childrenDocsJson___type'
  | 'module___animation___childDocsJson___id'
  | 'module___animation___childDocsJson___children'
  | 'module___animation___childDocsJson___type'
  | 'module___animation___childrenAnimationsJson'
  | 'module___animation___childrenAnimationsJson___id'
  | 'module___animation___childrenAnimationsJson___children'
  | 'module___animation___childrenAnimationsJson___tgs'
  | 'module___animation___childrenAnimationsJson___v'
  | 'module___animation___childrenAnimationsJson___fr'
  | 'module___animation___childrenAnimationsJson___ip'
  | 'module___animation___childrenAnimationsJson___op'
  | 'module___animation___childrenAnimationsJson___w'
  | 'module___animation___childrenAnimationsJson___h'
  | 'module___animation___childrenAnimationsJson___nm'
  | 'module___animation___childrenAnimationsJson___ddd'
  | 'module___animation___childrenAnimationsJson___layers'
  | 'module___animation___childAnimationsJson___id'
  | 'module___animation___childAnimationsJson___children'
  | 'module___animation___childAnimationsJson___tgs'
  | 'module___animation___childAnimationsJson___v'
  | 'module___animation___childAnimationsJson___fr'
  | 'module___animation___childAnimationsJson___ip'
  | 'module___animation___childAnimationsJson___op'
  | 'module___animation___childAnimationsJson___w'
  | 'module___animation___childAnimationsJson___h'
  | 'module___animation___childAnimationsJson___nm'
  | 'module___animation___childAnimationsJson___ddd'
  | 'module___animation___childAnimationsJson___layers'
  | 'module___animation___id'
  | 'module___animation___parent___id'
  | 'module___animation___parent___children'
  | 'module___animation___children'
  | 'module___animation___children___id'
  | 'module___animation___children___children'
  | 'module___animation___internal___content'
  | 'module___animation___internal___contentDigest'
  | 'module___animation___internal___description'
  | 'module___animation___internal___fieldOwners'
  | 'module___animation___internal___ignoreType'
  | 'module___animation___internal___mediaType'
  | 'module___animation___internal___owner'
  | 'module___animation___internal___type';

export type DocsJsonGroupConnection = {
  readonly __typename?: 'DocsJsonGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DocsJsonEdge>;
  readonly nodes: ReadonlyArray<DocsJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DocsJsonGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};


export type DocsJsonGroupConnectionDistinctArgs = {
  field: DocsJsonFieldsEnum;
};


export type DocsJsonGroupConnectionMaxArgs = {
  field: DocsJsonFieldsEnum;
};


export type DocsJsonGroupConnectionMinArgs = {
  field: DocsJsonFieldsEnum;
};


export type DocsJsonGroupConnectionSumArgs = {
  field: DocsJsonFieldsEnum;
};


export type DocsJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DocsJsonFieldsEnum;
};

export type DocsJsonSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<DocsJsonFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type AnimationsJsonConnection = {
  readonly __typename?: 'AnimationsJsonConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<AnimationsJsonEdge>;
  readonly nodes: ReadonlyArray<AnimationsJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<AnimationsJsonGroupConnection>;
};


export type AnimationsJsonConnectionDistinctArgs = {
  field: AnimationsJsonFieldsEnum;
};


export type AnimationsJsonConnectionMaxArgs = {
  field: AnimationsJsonFieldsEnum;
};


export type AnimationsJsonConnectionMinArgs = {
  field: AnimationsJsonFieldsEnum;
};


export type AnimationsJsonConnectionSumArgs = {
  field: AnimationsJsonFieldsEnum;
};


export type AnimationsJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: AnimationsJsonFieldsEnum;
};

export type AnimationsJsonEdge = {
  readonly __typename?: 'AnimationsJsonEdge';
  readonly next?: Maybe<AnimationsJson>;
  readonly node: AnimationsJson;
  readonly previous?: Maybe<AnimationsJson>;
};

export type AnimationsJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'tgs'
  | 'v'
  | 'fr'
  | 'ip'
  | 'op'
  | 'w'
  | 'h'
  | 'nm'
  | 'ddd'
  | 'layers'
  | 'layers___ddd'
  | 'layers___ind'
  | 'layers___ty'
  | 'layers___nm'
  | 'layers___sr'
  | 'layers___ks___o___a'
  | 'layers___ks___r___a'
  | 'layers___ks___p___a'
  | 'layers___ks___a___a'
  | 'layers___ks___a___k'
  | 'layers___ks___s___a'
  | 'layers___ao'
  | 'layers___shapes'
  | 'layers___shapes___ty'
  | 'layers___shapes___it'
  | 'layers___shapes___it___ind'
  | 'layers___shapes___it___ty'
  | 'layers___shapes___it___nm'
  | 'layers___shapes___it___hd'
  | 'layers___shapes___it___lc'
  | 'layers___shapes___it___lj'
  | 'layers___shapes___it___bm'
  | 'layers___shapes___it___ml'
  | 'layers___shapes___nm'
  | 'layers___shapes___bm'
  | 'layers___shapes___hd'
  | 'layers___ip'
  | 'layers___op'
  | 'layers___st'
  | 'layers___bm';

export type AnimationsJsonGroupConnection = {
  readonly __typename?: 'AnimationsJsonGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<AnimationsJsonEdge>;
  readonly nodes: ReadonlyArray<AnimationsJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max?: Maybe<Scalars['Float']>;
  readonly min?: Maybe<Scalars['Float']>;
  readonly sum?: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<AnimationsJsonGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};


export type AnimationsJsonGroupConnectionDistinctArgs = {
  field: AnimationsJsonFieldsEnum;
};


export type AnimationsJsonGroupConnectionMaxArgs = {
  field: AnimationsJsonFieldsEnum;
};


export type AnimationsJsonGroupConnectionMinArgs = {
  field: AnimationsJsonFieldsEnum;
};


export type AnimationsJsonGroupConnectionSumArgs = {
  field: AnimationsJsonFieldsEnum;
};


export type AnimationsJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: AnimationsJsonFieldsEnum;
};

export type AnimationsJsonSortInput = {
  readonly fields?: InputMaybe<ReadonlyArray<InputMaybe<AnimationsJsonFieldsEnum>>>;
  readonly order?: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};
