import { CbLogos } from '@/stories/CbLogos';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Logos`.
 */
export type LogosProps = SliceComponentProps<Content.LogosSlice>;

/**
 * Component for "Logos" Slices.
 */
const Logos = ({ slice }: LogosProps): JSX.Element => {
  return <CbLogos title={slice.primary.title} logos={slice.items} />;
};

export default Logos;
