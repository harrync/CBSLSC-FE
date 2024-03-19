// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Footer → Social links*
 */
export interface FooterDocumentDataSocialLinksItem {
  /**
   * Link field in *Footer → Social links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.social_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Type field in *Footer → Social links*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Email
   * - **API ID Path**: footer.social_links[].type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  type: prismic.SelectField<
    'Email' | 'Facebook' | 'Twitter' | 'Instagram',
    'filled'
  >;
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Social links field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.social_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  social_links: prismic.GroupField<Simplify<FooterDocumentDataSocialLinksItem>>;

  /**
   * Copyright text field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.copyright_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copyright_text: prismic.KeyTextField;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    'footer',
    Lang
  >;

/**
 * Item in *Main Menu → Menu Items*
 */
export interface MainMenuDocumentDataMenuItemsItem {
  /**
   * Label field in *Main Menu → Menu Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: main_menu.menu_items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *Main Menu → Menu Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: main_menu.menu_items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Main Menu documents
 */
interface MainMenuDocumentData {
  /**
   * Menu Items field in *Main Menu*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: main_menu.menu_items[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menu_items: prismic.GroupField<Simplify<MainMenuDocumentDataMenuItemsItem>>;
}

/**
 * Main Menu document from Prismic
 *
 * - **API ID**: `main_menu`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MainMenuDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<MainMenuDocumentData>,
    'main_menu',
    Lang
  >;

type PageDocumentDataSlicesSlice = ImageSlice | ButtonSlice | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, 'page', Lang>;

export type AllDocumentTypes = FooterDocument | MainMenuDocument | PageDocument;

/**
 * Primary content in *Button → Primary*
 */
export interface ButtonSliceDefaultPrimary {
  /**
   * Label field in *Button → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: button.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *Button → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: button.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Primary field in *Button → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: button.primary.primary
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  primary: prismic.BooleanField;
}

/**
 * Default variation for Button Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ButtonSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ButtonSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Button*
 */
type ButtonSliceVariation = ButtonSliceDefault;

/**
 * Button Shared Slice
 *
 * - **API ID**: `button`
 * - **Description**: Button
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ButtonSlice = prismic.SharedSlice<'button', ButtonSliceVariation>;

/**
 * Primary content in *Image → Primary*
 */
export interface ImageSliceDefaultPrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ImageSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Image → Primary*
 */
export interface ImageSliceInlinePrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Inline variation for Image Slice
 *
 * - **API ID**: `inline`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceInline = prismic.SharedSliceVariation<
  'inline',
  Simplify<ImageSliceInlinePrimary>,
  never
>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault | ImageSliceInline;

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<'image', ImageSliceVariation>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  'rich_text',
  RichTextSliceVariation
>;

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataSocialLinksItem,
      MainMenuDocument,
      MainMenuDocumentData,
      MainMenuDocumentDataMenuItemsItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      ButtonSlice,
      ButtonSliceDefaultPrimary,
      ButtonSliceVariation,
      ButtonSliceDefault,
      ImageSlice,
      ImageSliceDefaultPrimary,
      ImageSliceInlinePrimary,
      ImageSliceVariation,
      ImageSliceDefault,
      ImageSliceInline,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
    };
  }
}
