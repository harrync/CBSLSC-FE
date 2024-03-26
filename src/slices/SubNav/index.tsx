import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `SubNav`.
 */
export type SubNavProps = SliceComponentProps<Content.SubNavSlice>;

/**
 * Component for "SubNav" Slices.
 */
const SubNav = ({ slice }: SubNavProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for sub_nav (variation: {slice.variation}) Slices
    </section>
  );
};

export default SubNav;
