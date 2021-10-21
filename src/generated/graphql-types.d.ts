export type Maybe<T> = T;
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
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
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
  readonly blksize?: Maybe<Scalars['Int']>;
  readonly blocks?: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Site = Node & {
  readonly __typename?: 'Site';
  readonly buildTime?: Maybe<Scalars['Date']>;
  readonly siteMetadata?: Maybe<SiteSiteMetadata>;
  readonly port?: Maybe<Scalars['Int']>;
  readonly host?: Maybe<Scalars['String']>;
  readonly flags?: Maybe<SiteFlags>;
  readonly polyfill?: Maybe<Scalars['Boolean']>;
  readonly pathPrefix?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteFlags = {
  readonly __typename?: 'SiteFlags';
  readonly FAST_DEV?: Maybe<Scalars['Boolean']>;
  readonly LMDB_STORE?: Maybe<Scalars['Boolean']>;
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
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  readonly pluginCreator?: Maybe<SitePlugin>;
  readonly pluginCreatorId?: Maybe<Scalars['String']>;
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
  readonly pluginOptions?: Maybe<SitePluginPluginOptions>;
  readonly packageJson?: Maybe<SitePluginPackageJson>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type SitePluginPluginOptions = {
  readonly __typename?: 'SitePluginPluginOptions';
  readonly path?: Maybe<Scalars['String']>;
  readonly pathCheck?: Maybe<Scalars['Boolean']>;
  readonly allExtensions?: Maybe<Scalars['Boolean']>;
  readonly isTSX?: Maybe<Scalars['Boolean']>;
  readonly jsxPragma?: Maybe<Scalars['String']>;
  readonly rulePaths?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly stages?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly extensions?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly exclude?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly name?: Maybe<Scalars['String']>;
  readonly checkSupportedExtensions?: Maybe<Scalars['Boolean']>;
  readonly base64Width?: Maybe<Scalars['Int']>;
  readonly stripMetadata?: Maybe<Scalars['Boolean']>;
  readonly defaultQuality?: Maybe<Scalars['Int']>;
  readonly failOnError?: Maybe<Scalars['Boolean']>;
  readonly unNest?: Maybe<Scalars['Int']>;
  readonly sourceType?: Maybe<Scalars['String']>;
  readonly typeField?: Maybe<Scalars['String']>;
  readonly moduleField?: Maybe<Scalars['String']>;
  readonly icon?: Maybe<Scalars['String']>;
  readonly legacy?: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head?: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode?: Maybe<Scalars['String']>;
  readonly crossOrigin?: Maybe<Scalars['String']>;
  readonly include_favicon?: Maybe<Scalars['Boolean']>;
  readonly cacheDigest?: Maybe<Scalars['String']>;
  readonly output?: Maybe<Scalars['String']>;
  readonly createLinkInHead?: Maybe<Scalars['Boolean']>;
  readonly entryLimit?: Maybe<Scalars['Int']>;
  readonly query?: Maybe<Scalars['String']>;
  readonly dest?: Maybe<Scalars['String']>;
  readonly cookieName?: Maybe<Scalars['String']>;
  readonly scripts?: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsScripts>>>;
  readonly environments?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsScripts = {
  readonly __typename?: 'SitePluginPluginOptionsScripts';
  readonly name?: Maybe<Scalars['String']>;
  readonly cookieValidScripts?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJson = {
  readonly __typename?: 'SitePluginPackageJson';
  readonly name?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly main?: Maybe<Scalars['String']>;
  readonly keywords?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly author?: Maybe<Scalars['String']>;
  readonly license?: Maybe<Scalars['String']>;
  readonly dependencies?: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies?: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies?: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
};

export type SitePluginPackageJsonDependencies = {
  readonly __typename?: 'SitePluginPackageJsonDependencies';
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  readonly __typename?: 'SitePluginPackageJsonDevDependencies';
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  readonly __typename?: 'SitePluginPackageJsonPeerDependencies';
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
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
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
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
  readonly opacity?: Maybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  readonly turnPolicy?: Maybe<PotraceTurnPolicy>;
  readonly turdSize?: Maybe<Scalars['Float']>;
  readonly alphaMax?: Maybe<Scalars['Float']>;
  readonly optCurve?: Maybe<Scalars['Boolean']>;
  readonly optTolerance?: Maybe<Scalars['Float']>;
  readonly threshold?: Maybe<Scalars['Int']>;
  readonly blackOnWhite?: Maybe<Scalars['Boolean']>;
  readonly color?: Maybe<Scalars['String']>;
  readonly background?: Maybe<Scalars['String']>;
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
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
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
  readonly width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat?: Maybe<ImageFormat>;
};

export type JpgOptions = {
  readonly quality?: Maybe<Scalars['Int']>;
  readonly progressive?: Maybe<Scalars['Boolean']>;
};

export type PngOptions = {
  readonly quality?: Maybe<Scalars['Int']>;
  readonly compressionSpeed?: Maybe<Scalars['Int']>;
};

export type WebPOptions = {
  readonly quality?: Maybe<Scalars['Int']>;
};

export type AvifOptions = {
  readonly quality?: Maybe<Scalars['Int']>;
  readonly lossless?: Maybe<Scalars['Boolean']>;
  readonly speed?: Maybe<Scalars['Int']>;
};

export type TransformOptions = {
  readonly grayscale?: Maybe<Scalars['Boolean']>;
  readonly duotone?: Maybe<DuotoneGradient>;
  readonly rotate?: Maybe<Scalars['Int']>;
  readonly trim?: Maybe<Scalars['Float']>;
  readonly cropFocus?: Maybe<ImageCropFocus>;
  readonly fit?: Maybe<ImageFit>;
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
  readonly docsJson?: Maybe<DocsJson>;
  readonly allDocsJson: DocsJsonConnection;
  readonly animationsJson?: Maybe<AnimationsJson>;
  readonly allAnimationsJson: AnimationsJsonConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenPageDoc?: Maybe<PageDocFilterListInput>;
  childPageDoc?: Maybe<PageDocFilterInput>;
  childrenDocsJson?: Maybe<DocsJsonFilterListInput>;
  childDocsJson?: Maybe<DocsJsonFilterInput>;
  childrenAnimationsJson?: Maybe<AnimationsJsonFilterListInput>;
  childAnimationsJson?: Maybe<AnimationsJsonFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryExtractedSvgArgs = {
  content?: Maybe<StringQueryOperatorInput>;
  encoded?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllExtractedSvgArgs = {
  filter?: Maybe<ExtractedSvgFilterInput>;
  sort?: Maybe<ExtractedSvgSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryExtractedLottieArgs = {
  animationJson?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  encoded?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllExtractedLottieArgs = {
  filter?: Maybe<ExtractedLottieFilterInput>;
  sort?: Maybe<ExtractedLottieSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPageDocArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  video?: Maybe<FileFilterInput>;
  animation?: Maybe<FileFilterInput>;
  fileInformation?: Maybe<PageDocFileInformationFilterInput>;
};


export type QueryAllPageDocArgs = {
  filter?: Maybe<PageDocFilterInput>;
  sort?: Maybe<PageDocSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDocsJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  module?: Maybe<DocsJsonModuleFilterInput>;
};


export type QueryAllDocsJsonArgs = {
  filter?: Maybe<DocsJsonFilterInput>;
  sort?: Maybe<DocsJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryAnimationsJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  tgs?: Maybe<IntQueryOperatorInput>;
  v?: Maybe<StringQueryOperatorInput>;
  fr?: Maybe<IntQueryOperatorInput>;
  ip?: Maybe<IntQueryOperatorInput>;
  op?: Maybe<IntQueryOperatorInput>;
  w?: Maybe<IntQueryOperatorInput>;
  h?: Maybe<IntQueryOperatorInput>;
  nm?: Maybe<StringQueryOperatorInput>;
  ddd?: Maybe<IntQueryOperatorInput>;
  layers?: Maybe<AnimationsJsonLayersFilterListInput>;
};


export type QueryAllAnimationsJsonArgs = {
  filter?: Maybe<AnimationsJsonFilterInput>;
  sort?: Maybe<AnimationsJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['String']>;
  readonly ne?: Maybe<Scalars['String']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex?: Maybe<Scalars['String']>;
  readonly glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Int']>;
  readonly ne?: Maybe<Scalars['Int']>;
  readonly gt?: Maybe<Scalars['Int']>;
  readonly gte?: Maybe<Scalars['Int']>;
  readonly lt?: Maybe<Scalars['Int']>;
  readonly lte?: Maybe<Scalars['Int']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Date']>;
  readonly ne?: Maybe<Scalars['Date']>;
  readonly gt?: Maybe<Scalars['Date']>;
  readonly gte?: Maybe<Scalars['Date']>;
  readonly lt?: Maybe<Scalars['Date']>;
  readonly lte?: Maybe<Scalars['Date']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Float']>;
  readonly ne?: Maybe<Scalars['Float']>;
  readonly gt?: Maybe<Scalars['Float']>;
  readonly gte?: Maybe<Scalars['Float']>;
  readonly lt?: Maybe<Scalars['Float']>;
  readonly lte?: Maybe<Scalars['Float']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  readonly elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  readonly fixed?: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid?: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  readonly original?: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize?: Maybe<ImageSharpResizeFilterInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  readonly base64?: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>;
  readonly width?: Maybe<FloatQueryOperatorInput>;
  readonly height?: Maybe<FloatQueryOperatorInput>;
  readonly src?: Maybe<StringQueryOperatorInput>;
  readonly srcSet?: Maybe<StringQueryOperatorInput>;
  readonly srcWebp?: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<StringQueryOperatorInput>;
  readonly originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  readonly base64?: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>;
  readonly src?: Maybe<StringQueryOperatorInput>;
  readonly srcSet?: Maybe<StringQueryOperatorInput>;
  readonly srcWebp?: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<StringQueryOperatorInput>;
  readonly sizes?: Maybe<StringQueryOperatorInput>;
  readonly originalImg?: Maybe<StringQueryOperatorInput>;
  readonly originalName?: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth?: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['JSON']>;
  readonly ne?: Maybe<Scalars['JSON']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex?: Maybe<Scalars['JSON']>;
  readonly glob?: Maybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  readonly width?: Maybe<FloatQueryOperatorInput>;
  readonly height?: Maybe<FloatQueryOperatorInput>;
  readonly src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  readonly src?: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>;
  readonly width?: Maybe<IntQueryOperatorInput>;
  readonly height?: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>;
  readonly originalName?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  readonly elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  readonly content?: Maybe<StringQueryOperatorInput>;
  readonly contentDigest?: Maybe<StringQueryOperatorInput>;
  readonly description?: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners?: Maybe<StringQueryOperatorInput>;
  readonly ignoreType?: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType?: Maybe<StringQueryOperatorInput>;
  readonly owner?: Maybe<StringQueryOperatorInput>;
  readonly type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Boolean']>;
  readonly ne?: Maybe<Scalars['Boolean']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

export type PageDocFilterListInput = {
  readonly elemMatch?: Maybe<PageDocFilterInput>;
};

export type PageDocFilterInput = {
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
  readonly title?: Maybe<StringQueryOperatorInput>;
  readonly description?: Maybe<StringQueryOperatorInput>;
  readonly image?: Maybe<FileFilterInput>;
  readonly video?: Maybe<FileFilterInput>;
  readonly animation?: Maybe<FileFilterInput>;
  readonly fileInformation?: Maybe<PageDocFileInformationFilterInput>;
};

export type FileFilterInput = {
  readonly sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  readonly absolutePath?: Maybe<StringQueryOperatorInput>;
  readonly relativePath?: Maybe<StringQueryOperatorInput>;
  readonly extension?: Maybe<StringQueryOperatorInput>;
  readonly size?: Maybe<IntQueryOperatorInput>;
  readonly prettySize?: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime?: Maybe<DateQueryOperatorInput>;
  readonly accessTime?: Maybe<DateQueryOperatorInput>;
  readonly changeTime?: Maybe<DateQueryOperatorInput>;
  readonly birthTime?: Maybe<DateQueryOperatorInput>;
  readonly root?: Maybe<StringQueryOperatorInput>;
  readonly dir?: Maybe<StringQueryOperatorInput>;
  readonly base?: Maybe<StringQueryOperatorInput>;
  readonly ext?: Maybe<StringQueryOperatorInput>;
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory?: Maybe<StringQueryOperatorInput>;
  readonly dev?: Maybe<IntQueryOperatorInput>;
  readonly mode?: Maybe<IntQueryOperatorInput>;
  readonly nlink?: Maybe<IntQueryOperatorInput>;
  readonly uid?: Maybe<IntQueryOperatorInput>;
  readonly gid?: Maybe<IntQueryOperatorInput>;
  readonly rdev?: Maybe<IntQueryOperatorInput>;
  readonly ino?: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly atime?: Maybe<DateQueryOperatorInput>;
  readonly mtime?: Maybe<DateQueryOperatorInput>;
  readonly ctime?: Maybe<DateQueryOperatorInput>;
  readonly birthtime?: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly blksize?: Maybe<IntQueryOperatorInput>;
  readonly blocks?: Maybe<IntQueryOperatorInput>;
  readonly publicURL?: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp?: Maybe<ImageSharpFilterInput>;
  readonly childrenPageDoc?: Maybe<PageDocFilterListInput>;
  readonly childPageDoc?: Maybe<PageDocFilterInput>;
  readonly childrenDocsJson?: Maybe<DocsJsonFilterListInput>;
  readonly childDocsJson?: Maybe<DocsJsonFilterInput>;
  readonly childrenAnimationsJson?: Maybe<AnimationsJsonFilterListInput>;
  readonly childAnimationsJson?: Maybe<AnimationsJsonFilterInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type DocsJsonFilterListInput = {
  readonly elemMatch?: Maybe<DocsJsonFilterInput>;
};

export type DocsJsonFilterInput = {
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
  readonly type?: Maybe<StringQueryOperatorInput>;
  readonly module?: Maybe<DocsJsonModuleFilterInput>;
};

export type DocsJsonModuleFilterInput = {
  readonly title?: Maybe<StringQueryOperatorInput>;
  readonly description?: Maybe<StringQueryOperatorInput>;
  readonly image?: Maybe<FileFilterInput>;
  readonly video?: Maybe<FileFilterInput>;
  readonly animation?: Maybe<FileFilterInput>;
};

export type AnimationsJsonFilterListInput = {
  readonly elemMatch?: Maybe<AnimationsJsonFilterInput>;
};

export type AnimationsJsonFilterInput = {
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
  readonly tgs?: Maybe<IntQueryOperatorInput>;
  readonly v?: Maybe<StringQueryOperatorInput>;
  readonly fr?: Maybe<IntQueryOperatorInput>;
  readonly ip?: Maybe<IntQueryOperatorInput>;
  readonly op?: Maybe<IntQueryOperatorInput>;
  readonly w?: Maybe<IntQueryOperatorInput>;
  readonly h?: Maybe<IntQueryOperatorInput>;
  readonly nm?: Maybe<StringQueryOperatorInput>;
  readonly ddd?: Maybe<IntQueryOperatorInput>;
  readonly layers?: Maybe<AnimationsJsonLayersFilterListInput>;
};

export type AnimationsJsonLayersFilterListInput = {
  readonly elemMatch?: Maybe<AnimationsJsonLayersFilterInput>;
};

export type AnimationsJsonLayersFilterInput = {
  readonly ddd?: Maybe<IntQueryOperatorInput>;
  readonly ind?: Maybe<IntQueryOperatorInput>;
  readonly ty?: Maybe<IntQueryOperatorInput>;
  readonly nm?: Maybe<StringQueryOperatorInput>;
  readonly sr?: Maybe<IntQueryOperatorInput>;
  readonly ks?: Maybe<AnimationsJsonLayersKsFilterInput>;
  readonly ao?: Maybe<IntQueryOperatorInput>;
  readonly shapes?: Maybe<AnimationsJsonLayersShapesFilterListInput>;
  readonly ip?: Maybe<IntQueryOperatorInput>;
  readonly op?: Maybe<IntQueryOperatorInput>;
  readonly st?: Maybe<IntQueryOperatorInput>;
  readonly bm?: Maybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersKsFilterInput = {
  readonly o?: Maybe<AnimationsJsonLayersKsOFilterInput>;
  readonly r?: Maybe<AnimationsJsonLayersKsRFilterInput>;
  readonly p?: Maybe<AnimationsJsonLayersKsPFilterInput>;
  readonly a?: Maybe<AnimationsJsonLayersKsAFilterInput>;
  readonly s?: Maybe<AnimationsJsonLayersKsSFilterInput>;
};

export type AnimationsJsonLayersKsOFilterInput = {
  readonly a?: Maybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersKsRFilterInput = {
  readonly a?: Maybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersKsPFilterInput = {
  readonly a?: Maybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersKsAFilterInput = {
  readonly a?: Maybe<IntQueryOperatorInput>;
  readonly k?: Maybe<FloatQueryOperatorInput>;
};

export type AnimationsJsonLayersKsSFilterInput = {
  readonly a?: Maybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesFilterListInput = {
  readonly elemMatch?: Maybe<AnimationsJsonLayersShapesFilterInput>;
};

export type AnimationsJsonLayersShapesFilterInput = {
  readonly ty?: Maybe<StringQueryOperatorInput>;
  readonly it?: Maybe<AnimationsJsonLayersShapesItFilterListInput>;
  readonly nm?: Maybe<StringQueryOperatorInput>;
  readonly bm?: Maybe<IntQueryOperatorInput>;
  readonly hd?: Maybe<BooleanQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItFilterListInput = {
  readonly elemMatch?: Maybe<AnimationsJsonLayersShapesItFilterInput>;
};

export type AnimationsJsonLayersShapesItFilterInput = {
  readonly ind?: Maybe<IntQueryOperatorInput>;
  readonly ty?: Maybe<StringQueryOperatorInput>;
  readonly ks?: Maybe<AnimationsJsonLayersShapesItKsFilterInput>;
  readonly nm?: Maybe<StringQueryOperatorInput>;
  readonly hd?: Maybe<BooleanQueryOperatorInput>;
  readonly c?: Maybe<AnimationsJsonLayersShapesItCFilterInput>;
  readonly o?: Maybe<AnimationsJsonLayersShapesItOFilterInput>;
  readonly w?: Maybe<AnimationsJsonLayersShapesItWFilterInput>;
  readonly lc?: Maybe<IntQueryOperatorInput>;
  readonly lj?: Maybe<IntQueryOperatorInput>;
  readonly bm?: Maybe<IntQueryOperatorInput>;
  readonly p?: Maybe<AnimationsJsonLayersShapesItPFilterInput>;
  readonly a?: Maybe<AnimationsJsonLayersShapesItAFilterInput>;
  readonly s?: Maybe<AnimationsJsonLayersShapesItSFilterInput>;
  readonly sk?: Maybe<AnimationsJsonLayersShapesItSkFilterInput>;
  readonly sa?: Maybe<AnimationsJsonLayersShapesItSaFilterInput>;
  readonly ml?: Maybe<FloatQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItKsFilterInput = {
  readonly a?: Maybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItCFilterInput = {
  readonly a?: Maybe<IntQueryOperatorInput>;
  readonly k?: Maybe<FloatQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItOFilterInput = {
  readonly a?: Maybe<IntQueryOperatorInput>;
  readonly k?: Maybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItWFilterInput = {
  readonly a?: Maybe<IntQueryOperatorInput>;
  readonly k?: Maybe<FloatQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItPFilterInput = {
  readonly a?: Maybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItAFilterInput = {
  readonly a?: Maybe<IntQueryOperatorInput>;
  readonly k?: Maybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItSFilterInput = {
  readonly a?: Maybe<IntQueryOperatorInput>;
  readonly k?: Maybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItSkFilterInput = {
  readonly a?: Maybe<IntQueryOperatorInput>;
  readonly k?: Maybe<IntQueryOperatorInput>;
};

export type AnimationsJsonLayersShapesItSaFilterInput = {
  readonly a?: Maybe<IntQueryOperatorInput>;
  readonly k?: Maybe<IntQueryOperatorInput>;
};

export type PageDocFileInformationFilterInput = {
  readonly relativeDirectory?: Maybe<StringQueryOperatorInput>;
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly ext?: Maybe<StringQueryOperatorInput>;
  readonly extension?: Maybe<StringQueryOperatorInput>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  | 'blksize'
  | 'blocks'
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  readonly sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  readonly absolutePath?: Maybe<StringQueryOperatorInput>;
  readonly relativePath?: Maybe<StringQueryOperatorInput>;
  readonly extension?: Maybe<StringQueryOperatorInput>;
  readonly size?: Maybe<IntQueryOperatorInput>;
  readonly prettySize?: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime?: Maybe<DateQueryOperatorInput>;
  readonly accessTime?: Maybe<DateQueryOperatorInput>;
  readonly changeTime?: Maybe<DateQueryOperatorInput>;
  readonly birthTime?: Maybe<DateQueryOperatorInput>;
  readonly root?: Maybe<StringQueryOperatorInput>;
  readonly dir?: Maybe<StringQueryOperatorInput>;
  readonly base?: Maybe<StringQueryOperatorInput>;
  readonly ext?: Maybe<StringQueryOperatorInput>;
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory?: Maybe<StringQueryOperatorInput>;
  readonly dev?: Maybe<IntQueryOperatorInput>;
  readonly mode?: Maybe<IntQueryOperatorInput>;
  readonly nlink?: Maybe<IntQueryOperatorInput>;
  readonly uid?: Maybe<IntQueryOperatorInput>;
  readonly gid?: Maybe<IntQueryOperatorInput>;
  readonly rdev?: Maybe<IntQueryOperatorInput>;
  readonly ino?: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly atime?: Maybe<DateQueryOperatorInput>;
  readonly mtime?: Maybe<DateQueryOperatorInput>;
  readonly ctime?: Maybe<DateQueryOperatorInput>;
  readonly birthtime?: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  readonly blksize?: Maybe<IntQueryOperatorInput>;
  readonly blocks?: Maybe<IntQueryOperatorInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  readonly title?: Maybe<StringQueryOperatorInput>;
  readonly description?: Maybe<StringQueryOperatorInput>;
  readonly siteUrl?: Maybe<StringQueryOperatorInput>;
  readonly cookieName?: Maybe<StringQueryOperatorInput>;
};

export type SiteFlagsFilterInput = {
  readonly FAST_DEV?: Maybe<BooleanQueryOperatorInput>;
  readonly LMDB_STORE?: Maybe<BooleanQueryOperatorInput>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  | 'port'
  | 'host'
  | 'flags___FAST_DEV'
  | 'flags___LMDB_STORE'
  | 'polyfill'
  | 'pathPrefix'
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  readonly buildTime?: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  readonly port?: Maybe<IntQueryOperatorInput>;
  readonly host?: Maybe<StringQueryOperatorInput>;
  readonly flags?: Maybe<SiteFlagsFilterInput>;
  readonly polyfill?: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix?: Maybe<StringQueryOperatorInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  readonly functionRoute?: Maybe<StringQueryOperatorInput>;
  readonly pluginName?: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  readonly matchPath?: Maybe<StringQueryOperatorInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  readonly resolve?: Maybe<StringQueryOperatorInput>;
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly version?: Maybe<StringQueryOperatorInput>;
  readonly nodeAPIs?: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs?: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs?: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath?: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  readonly path?: Maybe<StringQueryOperatorInput>;
  readonly pathCheck?: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions?: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX?: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma?: Maybe<StringQueryOperatorInput>;
  readonly rulePaths?: Maybe<StringQueryOperatorInput>;
  readonly stages?: Maybe<StringQueryOperatorInput>;
  readonly extensions?: Maybe<StringQueryOperatorInput>;
  readonly exclude?: Maybe<StringQueryOperatorInput>;
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly checkSupportedExtensions?: Maybe<BooleanQueryOperatorInput>;
  readonly base64Width?: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality?: Maybe<IntQueryOperatorInput>;
  readonly failOnError?: Maybe<BooleanQueryOperatorInput>;
  readonly unNest?: Maybe<IntQueryOperatorInput>;
  readonly sourceType?: Maybe<StringQueryOperatorInput>;
  readonly typeField?: Maybe<StringQueryOperatorInput>;
  readonly moduleField?: Maybe<StringQueryOperatorInput>;
  readonly icon?: Maybe<StringQueryOperatorInput>;
  readonly legacy?: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin?: Maybe<StringQueryOperatorInput>;
  readonly include_favicon?: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest?: Maybe<StringQueryOperatorInput>;
  readonly output?: Maybe<StringQueryOperatorInput>;
  readonly createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  readonly entryLimit?: Maybe<IntQueryOperatorInput>;
  readonly query?: Maybe<StringQueryOperatorInput>;
  readonly dest?: Maybe<StringQueryOperatorInput>;
  readonly cookieName?: Maybe<StringQueryOperatorInput>;
  readonly scripts?: Maybe<SitePluginPluginOptionsScriptsFilterListInput>;
  readonly environments?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsScriptsFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPluginOptionsScriptsFilterInput>;
};

export type SitePluginPluginOptionsScriptsFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly cookieValidScripts?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly description?: Maybe<StringQueryOperatorInput>;
  readonly version?: Maybe<StringQueryOperatorInput>;
  readonly main?: Maybe<StringQueryOperatorInput>;
  readonly keywords?: Maybe<StringQueryOperatorInput>;
  readonly author?: Maybe<StringQueryOperatorInput>;
  readonly license?: Maybe<StringQueryOperatorInput>;
  readonly dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>;
  readonly version?: Maybe<StringQueryOperatorInput>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___rulePaths'
  | 'pluginCreator___pluginOptions___stages'
  | 'pluginCreator___pluginOptions___extensions'
  | 'pluginCreator___pluginOptions___exclude'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___checkSupportedExtensions'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___unNest'
  | 'pluginCreator___pluginOptions___sourceType'
  | 'pluginCreator___pluginOptions___typeField'
  | 'pluginCreator___pluginOptions___moduleField'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___entryLimit'
  | 'pluginCreator___pluginOptions___query'
  | 'pluginCreator___pluginOptions___dest'
  | 'pluginCreator___pluginOptions___cookieName'
  | 'pluginCreator___pluginOptions___scripts'
  | 'pluginCreator___pluginOptions___scripts___name'
  | 'pluginCreator___pluginOptions___scripts___cookieValidScripts'
  | 'pluginCreator___pluginOptions___environments'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
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
  | 'pluginCreatorId';

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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  readonly path?: Maybe<StringQueryOperatorInput>;
  readonly component?: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName?: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName?: Maybe<StringQueryOperatorInput>;
  readonly matchPath?: Maybe<StringQueryOperatorInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  readonly pluginCreator?: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type SitePageSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  | 'pluginOptions___path'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___rulePaths'
  | 'pluginOptions___stages'
  | 'pluginOptions___extensions'
  | 'pluginOptions___exclude'
  | 'pluginOptions___name'
  | 'pluginOptions___checkSupportedExtensions'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___unNest'
  | 'pluginOptions___sourceType'
  | 'pluginOptions___typeField'
  | 'pluginOptions___moduleField'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___entryLimit'
  | 'pluginOptions___query'
  | 'pluginOptions___dest'
  | 'pluginOptions___cookieName'
  | 'pluginOptions___scripts'
  | 'pluginOptions___scripts___name'
  | 'pluginOptions___scripts___cookieValidScripts'
  | 'pluginOptions___environments'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___keywords'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  readonly buildTime?: Maybe<DateQueryOperatorInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ExtractedSvgFieldsEnum;
};

export type ExtractedSvgFilterInput = {
  readonly content?: Maybe<StringQueryOperatorInput>;
  readonly encoded?: Maybe<StringQueryOperatorInput>;
  readonly path?: Maybe<StringQueryOperatorInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type ExtractedSvgSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<ExtractedSvgFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ExtractedLottieFieldsEnum;
};

export type ExtractedLottieFilterInput = {
  readonly animationJson?: Maybe<StringQueryOperatorInput>;
  readonly content?: Maybe<StringQueryOperatorInput>;
  readonly encoded?: Maybe<StringQueryOperatorInput>;
  readonly id?: Maybe<StringQueryOperatorInput>;
  readonly parent?: Maybe<NodeFilterInput>;
  readonly children?: Maybe<NodeFilterListInput>;
  readonly internal?: Maybe<InternalFilterInput>;
};

export type ExtractedLottieSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<ExtractedLottieFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  | 'image___childPageDoc___animation___childrenDocsJson'
  | 'image___childPageDoc___animation___childrenAnimationsJson'
  | 'image___childPageDoc___animation___id'
  | 'image___childPageDoc___animation___children'
  | 'image___childPageDoc___fileInformation___relativeDirectory'
  | 'image___childPageDoc___fileInformation___name'
  | 'image___childPageDoc___fileInformation___ext'
  | 'image___childPageDoc___fileInformation___extension'
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
  | 'video___childPageDoc___animation___childrenDocsJson'
  | 'video___childPageDoc___animation___childrenAnimationsJson'
  | 'video___childPageDoc___animation___id'
  | 'video___childPageDoc___animation___children'
  | 'video___childPageDoc___fileInformation___relativeDirectory'
  | 'video___childPageDoc___fileInformation___name'
  | 'video___childPageDoc___fileInformation___ext'
  | 'video___childPageDoc___fileInformation___extension'
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
  | 'animation___childPageDoc___animation___childrenDocsJson'
  | 'animation___childPageDoc___animation___childrenAnimationsJson'
  | 'animation___childPageDoc___animation___id'
  | 'animation___childPageDoc___animation___children'
  | 'animation___childPageDoc___fileInformation___relativeDirectory'
  | 'animation___childPageDoc___fileInformation___name'
  | 'animation___childPageDoc___fileInformation___ext'
  | 'animation___childPageDoc___fileInformation___extension'
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PageDocFieldsEnum;
};

export type PageDocSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<PageDocFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DocsJsonFieldsEnum;
};

export type DocsJsonSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<DocsJsonFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: AnimationsJsonFieldsEnum;
};

export type AnimationsJsonSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<AnimationsJsonFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};
