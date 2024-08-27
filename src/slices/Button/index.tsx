import { CbButton } from '@/stories/CbButton';
import { CbLayout } from '@/stories/CbLayout';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Button`.
 */
export type ButtonProps = SliceComponentProps<Content.ButtonSlice>;

/**
 * Component for "Button" Slices.
 */
const Button = ({ slice }: ButtonProps): JSX.Element => {
  return (
    <CbLayout container classes="col-sm-4">
      <CbButton primary label={slice.primary.label} link={slice.primary.link} />
    </CbLayout>
  );
};

export default Button;
