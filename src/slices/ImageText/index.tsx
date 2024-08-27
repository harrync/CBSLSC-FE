import { CbImageText } from '@/stories/CbImageText';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `ImageText`.
 */
export type ImageTextProps = SliceComponentProps<Content.ImageTextSlice>;

/**
 * Component for "ImageText" Slices.
 */
const ImageText = ({ slice }: ImageTextProps): JSX.Element => {
  console.log(slice);

  return <CbImageText slice={slice} alignRight={slice.primary.align_right} />;
};

export default ImageText;
