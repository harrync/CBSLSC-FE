import { CbForm } from '@/stories/CbForm';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Form`.
 */
export type FormProps = SliceComponentProps<Content.FormSlice>;

/**
 * Component for "Form" Slices.
 */
const Form = ({ slice }: FormProps): JSX.Element => {
  return <CbForm title={slice.primary.title} form_id={slice.primary.form_id} />;
};

export default Form;
