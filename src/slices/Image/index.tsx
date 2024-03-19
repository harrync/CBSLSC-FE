import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { CbImage } from '@/stories/CbImage';

/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */
const Image = ({ slice }: ImageProps): JSX.Element => {
  return <CbImage field={slice.primary.image} variant={slice.variation} />;
};

export default Image;
